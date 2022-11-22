require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
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
			url: "https://rpc-mumbai.maticvigil.com/",
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
