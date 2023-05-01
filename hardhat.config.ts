import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY as string,
  },
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.ALCHEMY_API_URL as string,
      accounts: [`0x${process.env.PRIVATE_KEY as string}`],
    },
  },
};

export default config;
