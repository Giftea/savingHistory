import abiJSON from "./savehABI.json";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0x3e5Bf19116432443138746C7f2364e9d368086e1";
  const contractABI = abiJSON.abi;
  let savehContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      savehContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return savehContract;
}

export default connectContract;