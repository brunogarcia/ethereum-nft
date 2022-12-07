import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config({ path: __dirname+'/.env.local' });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.STAGING_QUICKNODE_API_KEY_URL, // Infrastructure provider
      accounts: [process.env.GOERLI_PRIVATE_KEY], // Ethereum test network
    },
  },
};

export default config;
