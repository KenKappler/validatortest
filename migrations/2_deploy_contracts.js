var OwnedSet = artifacts.require("./OwnedSet.sol");


module.exports = function(deployer, network, accounts) {
		deployer.deploy(OwnedSet,[accounts[0],accounts[1],accounts[2],accounts[3]]);	
};
