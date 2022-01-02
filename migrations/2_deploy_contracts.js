const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  await deployer.deploy(Token); //deploy token
  const token = await Token.deployed();
  await deployer.deploy(EthSwap, token.address); //deploy eth swap platform
  const ethSwap = await EthSwap.deployed();
  await token.transfer(ethSwap.address, '1000000000000000000000000');
};
