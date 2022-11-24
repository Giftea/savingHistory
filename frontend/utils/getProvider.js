import { ethers } from "ethers";

export const getProvider = () => {
  const { ethereum } = window;

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    return provider;
  }
};
