require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	etherscan: {
		// Your API key for Etherscan
		// Obtain one at https://etherscan.io/
		apiKey: process.env.POLYGON_API_KEY,
	},
	networks: {
		hardhat: {
			allowUnlimitedContractSize: true,
			timeout: 100000,
			gasPrice: "auto",
			gas: 13000000,
		},
		localhost: {
			url: "http://127.0.0.1:8545",
			allowUnlimitedContractSize: true,
			accounts: [process.env.PRIVATE_KEY],
			timeout: 100000,
			gasPrice: "auto",
			gas: 13000000,
		},
		mumbai: {
			chainId: 80001,
			url: "https://matic-mumbai.chainstacklabs.com",
			hardfork: "istanbul",
			accounts: [process.env.PRIVATE_KEY],
			allowUnlimitedContractSize: true,
			gas: "auto",
			gasPrice: "auto",
			blockGasLimit: 13000000,
		},
		mainnet: {
			chainId: 137,
			url: "https://polygon-rpc.com",
			hardfork: "istanbul",
			accounts: [process.env.PRIVATE_KEY],
			allowUnlimitedContractSize: true,
			gas: "auto",
			gasPrice: "auto",
			blockGasLimit: 13000000,
		},
	},
	solidity: {
		compilers: [
			{
				version: "0.8.17",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
			{
				version: "0.8.9",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
			{
				version: "0.6.7",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
		],
	},
};
