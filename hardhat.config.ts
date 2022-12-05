require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL, // Infrastructure provider
      accounts: [process.env.GOERLI_PRIVATE_KEY], // Ethereum test network 
    },
  },
};