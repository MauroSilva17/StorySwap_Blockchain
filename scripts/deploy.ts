import { ethers } from "hardhat";
7;
import { STCoin__factory } from "./../typechain-types/factories/contracts/STCoin__factory";

/**
 * Deploys the STCoin contract.
 */
async function main() {
  // Get the signer of the deploying account
  const [deployer] = await ethers.getSigners();

  console.log("Deploying STCoin contract with the account:", deployer.address);

  // Get the factory for the STCoin contract
  const STCoin = await ethers.getContractFactory("STCoin");

  // Deploy the STCoin contract using the factory
  const stCoin = await STCoin.deploy();

  console.log("STCoin contract deployed to address:", stCoin.address);
}

// Call the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
