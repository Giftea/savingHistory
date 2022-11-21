// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
require("dotenv").config({ path: ".env" });
const hre = require("hardhat");

const env = process.env.ENV ?? "testnet";

async function main() {
  if (env === "testnet") {
    const USDC = await hre.ethers.getContractFactory("USDC");
    const usdc = await USDC.deploy();

    await usdc.deployed();

    const usdcAddress = usdc.address; //mock usdc polygon testnet we control
  } else {
    const usdcAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; //usdc polygon mainnet (PoS)
  }

  const SAVEHToken = "0x";
  const treasury = "0x";
  const firstRewardPerBlock = hre.ethers.utils.parseEther("250");
  const rewardPeriodSize = 17280;
  const startingBlock = 10611000;
  const decayNumerator = 998902;
  const decayDenominator = 1000000;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
