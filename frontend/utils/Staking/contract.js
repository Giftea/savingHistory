import abiJSON from "./abi.json";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0x340e1d8b936e260e91bb357d10576ca5e3648907";
  const contractABI = abiJSON.abi;
  let stakingContract;
  try {
    if (typeof window != "undefined") {
      const { ethereum } = window;

      if (ethereum) {
        //checking for eth object in the window
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        stakingContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        ); // instantiating new connection to the contract
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return stakingContract;
}

export default connectContract;
