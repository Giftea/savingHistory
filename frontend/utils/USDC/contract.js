import abiJSON from "./USDC";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0xb96E918488e0690ea2BCEF6C5B394bb32249f016";
  const contractABI = abiJSON.abi;
  let tokenContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      tokenContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return tokenContract;
}

export default connectContract;