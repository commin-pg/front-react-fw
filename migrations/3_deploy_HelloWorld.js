var hello = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(hello,1);
};
