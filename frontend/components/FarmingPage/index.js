import React, { useEffect, useState } from "react";
import Image from "next/image";
import SavehCard from "./SavehCard";
import Summary from "./Summary";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import donationMinerContract from "../../utils/DonationMiner/contract";
import { getProvider } from "../../utils/getProvider";
import Countdown from "react-countdown";

const Section = () => {
  const { address } = useAccount();
  const [estimateToken, setEstimateToken] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const donationContract = donationMinerContract();

  async function getEstimate() {
    const res = await donationContract.estimateClaimableReward(address);
    ethers.utils.formatEther(res.toString());

    setEstimateToken(
      Number(ethers.utils.formatEther(res.toString())).toFixed(2)
    );
  }

  async function getTimeLeftInEpoch() {
    const provider = getProvider();
    const currentBlock = await provider.getBlockNumber();
    const startBlock = 29293517;
    const betweenBlocks = 17280;

    const blockLeft =
      betweenBlocks - ((currentBlock - startBlock) % betweenBlocks);
    const timeLeft_ = (blockLeft * 5) / (60 * 60);

    console.log(timeLeft);
    setTimeLeft(Date.now() + timeLeft_ * 60 * 60 * 1000);
  }

  useEffect(() => {
    getTimeLeftInEpoch();
    getEstimate();
  }, []);

  return (
    <div className="py-8 px-5 md:px-20 lg:px-14 ">
      {address === undefined ? (
        <div className="text-center">
          <Image src="/images/Other/wallet.png" width={550} height={420} />
          <p className="px-10">
            To view your $SAVEH balance and receive your
            <br /> rewards,{" "}
            <span className="text-[#F9AB3A]">Connect to your wallet.</span>
          </p>
        </div>
      ) : (
        <>
          <p className="text-center">
            Epoch will end in{" "}
            {timeLeft ? (
              <span className="text-[#F9AB3A] font-extrabold text-3xl">
                <Countdown date={timeLeft} />
              </span>
            ) : null}
          </p>
          <div className="lg:flex justify-between my-12">
            <SavehCard estimateToken={estimateToken} />
            <Summary estimateToken={estimateToken} />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
/*
Formula for Calculating Current Epoch Time left
Reward Starting Block = 29293517 Blocks Between each Epoch(Mumbai) = 17280 (Currently used)

Blocks left to complete Epoch = Blocks Between each Epoch - ((Current Block - Start Block) % Blocks Between each Epoch)

Time Left = Blocks left to complete Epoch x 5 secs block interval / (60 x 60)

Result will be e.g 22.1 hours

NB: To get current block number await ethers.provider.getBlockNumber().

*/
