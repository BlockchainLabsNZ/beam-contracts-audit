# BEAM's Crowdsale Contracts

Please see below BeamCrowdsale smart contracts for the BEAM crowdsale.


BEAM is an ERC-20 compliant cryptocurrency built on top of the [Ethereum][ethereum] blockchain.


## Contracts

Please see the [contracts/](contracts) directory.

## The Crowdsale Specification
*	BEAM token is ERC-20 compliant.
*	Token allocation:
50% will be offered for sale, 10% will be
offered as bonus or rewards, 10% will
be offered to the team, and 30% will be
kept as reserve.
	* 50% of the total number of BEAM tokens will be allocated to contributors during the token sale.
	* 10% of the total number of BEAM tokens will be allocated to the team.
	* 10% of the total number of BEAM tokens will be allocated for bonuses.
	* 30% of the total number of BEAM tokens will be kept as reserve, to be used for future strategic plans and to develop the BEAM' ecosystem.

## BEAM PRICING PROGRAM
The price is set in USD, with the first token set at US$1. With every additional token sold, the price will increase by $(10^-9)



## Develop

* Contracts are written in [Solidity][solidity] and tested using [Truffle][truffle] and [ganache-cli][ganache-cli].

* Smart contracts is based on [Open Zeppelin][openzeppelin] smart contracts [1.10.0][openzeppelin_v1.10.0].

## Code

#### BeamCrowdsale Functions


**fallback**
```cs
function () external payable onlyActualPrice onlyWhileOpen onlyWhitelisted whenNotPaused
```
Payable function to buy tokens.


**finishCrowdsale**
```cs
function finishCrowdsale() external onlyOwner onlyWhileOpen
```
Allows owner to finish the crowdsale.  


**claimFunds**
```cs
function claimFunds() external
```
Transfers fund to contributor if the crowdsale has failed.


**buyForFiat**
```cs
function buyForFiat(address _beneficiary, uint256 _weiAmount) external onlyOwner onlyWhileOpen onlyActualPrice
```
Allows owner to add raising fund manually (tokens will purchase automatically).


**mintBonus**
```cs
function mintBonus(address _beneficiary, uint256 _tokenUnits) external onlyOwner onlyWhileOpen
```
Mints bonuses by admin.


**finishSeedRound**
```cs
function finishSeedRound() external onlyOwner onlyWhileOpen
```
Allows owner to finish the seed round.


**setPublicRound**
```cs
function setPublicRound(bool _enable) external onlyOwner onlyWhileOpen
```
Allows owner to start or renew public round. Function accesable only after the end of the seed round. If _enable is true, private round ends and public round starts. If _enable is false, public round ends and private round starts.


**buyTokens**
```cs
function buyTokens() public payable onlyWhileOpen onlyWhitelisted whenNotPaused onlyActualPrice
```
Low level token purchase.


**tokenPrice**
```cs
function tokenPrice() public view returns(uint256)
```
Returns the actual price of the token in USD units (1 USD unit = 1 * 10^-18 USD).


**__callback**
```cs
function __callback(bytes32 myid, string result, bytes proof) public
```
Receives the response from oraclize.


**update**
```cs
function update(uint256 _timeout) public payable
```
Cyclic query to update ETHUSD price. . Recieves response in one hour.


**addAddressToWhitelist**
```cs
function addAddressToWhitelist(address addr) public onlyOwner returns(bool success)
```
Adds an address to the whitelist.


**addAddressesToWhitelist**
```cs
function addAddressesToWhitelist(address[] addrs) public onlyOwner returns(bool success)
```
Adds addresses to the whitelist.


**removeAddressFromWhitelist**
```cs
function removeAddressFromWhitelist(address addr) public onlyOwner returns(bool success)
```
Removes an address from the whitelist.


**removeAddressesFromWhitelist**
```cs
function removeAddressesFromWhitelist(address[] addrs) public onlyOwner returns(bool success)
```
Removes addresses from the whitelist.


**transferTokens**
```cs
function transferTokens(address _beneficiary, uint256 _tokenAmount) external onlyOwner
```
Allows owner to transfer BEAM tokens.


**pause**
```cs
function pause() public onlyOwner whenNotPaused
```
Called by the owner to pause, triggers stopped state.


**unpause**
```cs
function unpause() public onlyOwner whenPaused
```
Called by the owner to unpause, returns to normal state.


**transferOwnership**
```cs
function transferOwnership(address newOwner) public onlyOwner
```
Allows the current owner to set the pendingOwner address.


**claimOwnership**
```cs
function claimOwnership() public onlyPendingOwner
```
Allows the pendingOwner address to finalize the transfer.


**payToContract**
```cs
function payToContract() external	payable	onlyOwner
```
Allows owner to send ETH to the contarct for paying fees or refund.


**withdrawFunds**
```cs
function withdrawFunds(address _beneficiary, uint256 _weiAmount) external onlyOwner
```
Allows owner to withdraw ETH from the contract balance.

#### BeamCrowdsale public variable

**bonuses**
The amount of bonuses minted during the crowdsale (Those are bounty bonuses not discount).

**crowdsaleFinished**
Whether the crowdsale has finished

**decimals**
Decimals of the using token

**funds**
Mapping contains addresses who and how much ETH invested.

**increasing**
Increasing of the token price in units with each token emission.

**lastPriceUpdate**
Timestamp of the last price updating.

**owner**
Address of the current owner of the contract.

**paused**
Whether the crowdsale is paused.

**pendingOwner**
Address of the pending owner of the contract.

**priceETHUSD**
Last price ETHUSD from oraclize in cents.

**publicRound**
Whether the public round is active.

**seedFinished**
Whether the seed round has finished.

**softCap**
Soft cap amount in USD units.

**softCapReached**
Whether the soft cap has reached.

**token**
Address of the using token.

**tokenPrice**
Current price of the one token in USD units.

**tokensForSeed**
Amount of tokens for seed round.

**centsInDollar**
How much cents in one dollar (100).

**usdRaised**
How much USD was raised during the crowdsale.

**wallet**
The address of a wallet specified by owner for forward funds for.

**weiRaised**
Amount of wei was raised during the crowdsale.

**whitelist**
Mapping contains 'true' as a value for addresses allowed to particioate in the crowdsale .


#### BeamCrowdsale Events


**OwnershipTransferred**
```cs
event GrantUpdated(address indexed _grantee, uint256 _oldAmount, uint256 _newAmount);
```

**Pause**
```cs
event Pause();
```

**Unpause**
```cs
event Unpause();
```

**WhitelistedAddressAdded**
```cs
event WhitelistedAddressAdded(address addr);
```

**WhitelistedAddressRemoved**
```cs
event WhitelistedAddressRemoved(address addr);
```

**NewOraclizeQuery**
```cs
event NewOraclizeQuery(string description);
```

**PriceUpdated**
```cs
event PriceUpdated(uint256 price);
```

**TokenPurchase**
```cs
event TokenPurchase(address indexed purchaser, uint256 value, uint256 amount);
```

**SeedRoundFinished**
```cs
event SeedRoundFinished();
```

**PrivateRoundFinished**
```cs
event PrivateRoundFinished();
```

**StartPrivateRound**
```cs
event StartPrivateRound();
```

**StartPublicRound**
```cs
event StartPublicRound();
```

**PublicRoundFinished**
```cs
event PublicRoundFinished();
```

**CrowdsaleFinished**
```cs
event CrowdsaleFinished(uint256 weiRaised, uint256 usdRaised);
```

**SoftCapReached**
```cs
event SoftCapReached();
```


### Dependencies

```bash
# Install Truffle and ganache-cli packages globally:
$ npm install -g truffle ganache-cli

# Install local node dependencies:
$ npm install
```

### Test

```bash
$ truffle test --network ganache
```

### Deploy and manage

Use metamask to deploy the smart contracts.
Copy code to [remix browser](https://remix.ethereum.org). Compile the source and click deploy at the 'run' tab.
Firstly, you need to deploy BeamToken.sol.
Then copy address of this deployed contract and put it as a second parameter to constructor of BeamCrowdsale.sol. The first parameter is a wallet address for forward funds to.
After deploying use method 'setManager' of BeamToken to set the BeamCrowdsale contract address as a manager of BeamToken.
Then you will able to add addresses to whitelist and manage crowdsale and token using functions.
Don't forget to send some ETH to the crowddsale contract to pay oraclize fees using 'update' or 'payToContract' functions.
Notice 'update' function with parameter 'timeout' in seconds initiate new update cycle, while 'payToContract' just receives fund.


### Code Coverage

```bash
$ ./node_modules/.bin/solidity-coverage
```

## Collaborators

* **[TailorSwift.io](https://tailorswift.io)**
* **[Ivan Zakharov](https://github.com/IvanZakharov)**


## License

Apache License v2.0


[ethereum]: https://www.ethereum.org/

[solidity]: https://solidity.readthedocs.io/en/develop/
[truffle]: http://truffleframework.com/
[ganache-cli]: https://github.com/trufflesuite/ganache-cli
[openzeppelin]: https://openzeppelin.org
[openzeppelin_v1.10.0]: https://github.com/OpenZeppelin/zeppelin-solidity/releases/tag/v1.10.0
