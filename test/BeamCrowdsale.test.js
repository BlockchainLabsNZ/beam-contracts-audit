import assertRevert from '../test/assertRevert';
const { ethGetBalance } = require("../test/web3");

const BigNumber = web3.BigNumber;

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const BeamCrowdsale = artifacts.require('BeamCrowdsale_TEST_ONLY');
const BeamToken = artifacts.require('BeamToken');

contract('BeamCrowdsale', function (accounts) {
  let wallet = accounts[5];
  let investor = accounts[2];
  let notinvestor = accounts[3];
  const rate = new BigNumber(1);
  const value = new BigNumber(web3.toWei(1, 'ether'));
  const usd100K = new BigNumber(web3.toWei(2, 'ether'));
  const tokenSupply = 0;
  let expectedTokenAmount = 430;

  let token;
  let crowdsale;

  beforeEach(async function () {
      token = await BeamToken.new();
      crowdsale = await BeamCrowdsale.new(wallet, token.address);
      await token.setManager(crowdsale.address);
      await crowdsale.addAddressToWhitelist(investor);
      await crowdsale.__callback(43000);// Eth price in USD cents (only for test)
  });

  describe('high-level purchase', function () {
    it('should log purchase', async function () {
      const { logs } = await crowdsale.buyTokens({ value: value, from: investor });
      const event = logs.find(e => e.event === 'TokenPurchase');
      should.exist(event);
      event.args.purchaser.should.equal(investor);
      event.args.value.should.be.bignumber.equal(value*0.8);
      Math.round(event.args.amount/10**18).should.be.equal(expectedTokenAmount);
    });

    it('should log purchase for fiat', async function () {
      const { logs } = await crowdsale.buyForFiat(investor, value);
      const event = logs.find(e => e.event === 'TokenPurchase');
      should.exist(event);
      event.args.purchaser.should.equal(investor);
      
      let expectedWeiAmount = Math.round(Number(value) / 430);
      Number(event.args.value).should.be.equal(expectedWeiAmount);
      Math.round(Number(event.args.amount)/10**18).should.be.equal(1);
    });

    it('should assign tokens to sender', async function () {
      const { logs } = await crowdsale.sendTransaction({ value: value, from: investor });
      let balance = await token.balanceOf(investor);
      Math.round(balance.valueOf()/10**18).should.be.equal(expectedTokenAmount);
    });

    it('should forward funds to the wallet', async function () {
      const pre = await ethGetBalance(investor);
      const txInfo = await crowdsale.buyTokens({ value:value, from: investor });
      const tx = await web3.eth.getTransaction(txInfo.tx);
      const gasCost = tx.gasPrice.mul(txInfo.receipt.gasUsed);
      const post = await ethGetBalance(investor);
      pre.minus(post).minus(gasCost).should.be.bignumber.equal(value*0.8);
    });
  });

  describe('control functions', function () {
    it('should allow to cliam funds after the crowdsale finish not hiting the soft cap', async function () {
      await crowdsale.sendTransaction({ value: value, from: investor });
      const pre = await ethGetBalance(investor);
      await crowdsale.finishCrowdsale();
      let result = await crowdsale.crowdsaleFinished.call().valueOf();
      result.should.be.true;
      result = await crowdsale.softCapReached.call().valueOf();
      result.should.be.false;
    });

    it('should revert buying tokens after the finish of crowdsale', async function () {
      await crowdsale.sendTransaction({ value: value, from: investor });
      const pre = await ethGetBalance(investor);
      await crowdsale.finishCrowdsale();
      await assertRevert(crowdsale.buyTokens({ value: value, from: investor }));
      await assertRevert(crowdsale.sendTransaction({ value: value, from: investor }));
      await assertRevert(crowdsale.finishCrowdsale());
    });

    it('should revert buying tokens from not-whitelisted buyer', async function () {
      await assertRevert(crowdsale.sendTransaction({ value: value, from: notinvestor }));
    });

    it('should double the token supply excluding bonuses at the finish and transfer these', async function () {
      await crowdsale.sendTransaction({ value: value, from: investor });
      let bonuses = value.dividedBy(10);
      await crowdsale.mintBonus(investor, bonuses);
      let pre = await token.totalSupply().valueOf();
      let toMint = pre.minus(bonuses);
      await crowdsale.finishCrowdsale();
      let minted = await token.balanceOf(crowdsale.address);
      minted.should.be.bignumber.equal(toMint);
      let post = await token.totalSupply().valueOf();
      let expected = pre.plus(toMint);
      post.should.be.bignumber.equal(expected);
      pre = await token.balanceOf(investor);
      await crowdsale.transferTokens(investor, minted);
      post = await token.balanceOf(investor);
      post.minus(pre).should.be.bignumber.equal(minted);
    });

    it('should revert the purchase when crowdsale is paused and then process one when unpaused', async function () {
      await crowdsale.pause();
      await assertRevert(crowdsale.sendTransaction({ value: value, from: investor }));
      await crowdsale.unpause();
      await crowdsale.sendTransaction({ value: value, from: investor });
    });

    it('another functionality', async function () {
      await crowdsale.sendTransaction({ value: usd100K, from: investor });
      await assertRevert(crowdsale.withdrawFunds(investor, value));
      await crowdsale.payToContract({value: value});
      await assertRevert(crowdsale.claimFunds());
      await crowdsale.finishSeedRound();
      await assertRevert(crowdsale.finishSeedRound());
      await crowdsale.setPublicRound(true);
      await crowdsale.transferOwnership(investor);
      await crowdsale.claimOwnership({from: investor});
      await token.setLock(investor, true);
      await assertRevert(token.transfer(accounts[0], 100, {from: investor}));
      await token.setLock(investor, false);
      await token.transfer(accounts[0], 100, {from: investor});
      await token.pause();
      await assertRevert(token.transfer(accounts[0], 100, {from: investor}));
      await token.unpause();
      await token.transfer(accounts[0], 100, {from: investor});
      await token.finishMinting();
      await token.transferOwnership(investor);
      await token.claimOwnership({from: investor});
      await assertRevert(crowdsale.sendTransaction({ value: value, from: investor }));

    });
  });
});
