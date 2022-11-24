import abiJSON from "./abi.json";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0x1a4bd8feb66fbe2bd39554c7812084ff97ba946b";
  const contractABI = abiJSON.abi;
  let stakingContract;
  try {
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
  } catch (error) {
    console.log("ERROR:", error);
  }
  return stakingContract;
}

export default connectContract;
