// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

const env = process.env.ENV ?? "testnet";

async function main() {
	const [owner] = await ethers.getSigners();
	let usdcAddress;

	if (env === "testnet") {
		const USDC = await hre.ethers.getContractFactory("USDC");
		const usdc = await USDC.deploy();
		await usdc.deployed();

		usdcAddress = usdc.address; //mock usdc polygon testnet we control
	} else {
		usdcAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; //usdc polygon mainnet (PoS)
	}

	const Treasury = await hre.ethers.getContractFactory(
		"TreasuryImplementation"
	);

	const treasury = await upgrades.deployProxy(Treasury, [owner.address]);
	await treasury.deployed();

	const SAVEHToken = await hre.ethers.getContractFactory("SAVEHToken");
	const saveh = await SAVEHToken.deploy(owner.address);
	await saveh.deployed();

	const SSAVEHToken = await hre.ethers.getContractFactory("SSAVEHToken");
	const ssaveh = await SSAVEHToken.deploy();
	await ssaveh.deployed();

	const firstRewardPerBlock = hre.ethers.utils.parseEther("250");
	const rewardPeriodSize = 17280;
	// const startingBlock = 10611000;
	const startingBlock = (await ethers.provider.getBlockNumber()) + 1000;
	const decayNumerator = 998902;
	const decayDenominator = 1000000;

	const DonationMiner = await hre.ethers.getContractFactory(
		"DonationMinerImplementation"
	);
	const donationMiner = await upgrades.deployProxy(DonationMiner, [
		usdcAddress,
		saveh.address,
		treasury.address,
		firstRewardPerBlock,
		rewardPeriodSize,
		startingBlock,
		decayNumerator,
		decayDenominator,
	]);

	await donationMiner.deployed();

	const Staking = await hre.ethers.getContractFactory(
		"StakingImplementation"
	);
	const staking = await upgrades.deployProxy(Staking, [
		saveh.address,
		ssaveh.address,
		donationMiner.address,
		259200, //cooldown
	]);
	await staking.deployed();

	await donationMiner.updateStaking(staking.address);

	console.log({
		Enviroment: env.toLocaleUpperCase(),
		USDC: usdcAddress,
		"Donation Miner Proxy": donationMiner.address,
		"Donation Miner Implementation":
			await upgrades.erc1967.getImplementationAddress(
				donationMiner.address
			),
		Treasury: treasury.address,
		"SAVEH Token": saveh.address,
		"SSAVEH Token": ssaveh.address,
	});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
