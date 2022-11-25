import abiJSON from "./donationMiner";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0xd11e64179397f25c64E955F22D26d25301C12BF2";
  const contractABI = abiJSON.abi;
  let donateContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      donateContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return donateContract;
}

export default connectContract;