const BeamTokenContract = artifacts.require("./BeamToken.sol");
const BeamCrowdsaleContract = artifacts.require("./BeamCrowdsale_TEST_ONLY.sol");

module.exports = async function(deployer, network, accounts) {
    let wallet = '0xfe814ca17a55497a993a2d7656d440812b98b375';

    deployer.then(async () => {
      
        await deployer.deploy(BeamTokenContract);

        await deployer.link(BeamTokenContract, BeamCrowdsaleContract);
        console.log('BeamTokenContract!');
        await deployer.deploy(BeamCrowdsaleContract, wallet, BeamTokenContract.address);
        console.log('BeamCrowdsaleContract!');
        return console.log('Contracts are deployed!');
    });


};
