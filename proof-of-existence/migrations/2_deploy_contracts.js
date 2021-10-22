const ProofOfExistence = artifacts.require('./ProofOfExistence3.sol');

module.exports = function(deployer) {
    deployer.deploy(ProofOfExistence);
};