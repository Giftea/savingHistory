import React, { useEffect, useState } from "react";
import Image from "next/image";
import SavehCard from "./SavehCard";
import Summary from "./Summary";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import donationMinerContract from "../../utils/DonationMiner/contract";
import { getProvider } from "../../utils/getProvider";
import Countdown from "react-countdown";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const Section = () => {
  const { openConnectModal } = useConnectModal();
  const { address } = useAccount();
  const [estimateToken, setEstimateToken] = useState(0);
  const [contributionInLast30Epoch, setContributionInLast30Epoch] = useState(0);
  const [totalInLast30Epoch, setTotalInLast30Epoch] = useState(0);
  const [claimableReward, setClaimableReward] = useState(0);
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

  async function getLast30EpochInfo() {
    const [yourContribution, totalRaised] =
      await donationContract.lastPeriodsDonations(address);

    setContributionInLast30Epoch(
      Number(ethers.utils.formatEther(yourContribution.toString())).toFixed(2)
    );

    setTotalInLast30Epoch(
      Number(ethers.utils.formatEther(totalRaised.toString())).toFixed(2)
    );
  }

  async function getClaimableReward() {
    const claimable = await donationContract.calculateClaimableRewards(address);

    setClaimableReward(
      Number(ethers.utils.formatEther(claimable.toString())).toFixed(2)
    );
  }

  useEffect(() => {
    if (address) {
      getEstimate();
    }
    getTimeLeftInEpoch();
    getLast30EpochInfo();
  }, [address]);

  return (
    <div className="py-8 px-5 md:px-20 lg:px-14 ">
      {address === undefined ? (
        <div className="text-center">
          <Image src="/images/Other/wallet.png" width={550} height={420} />
          <p className="px-10">
            To view your $SAVEH balance and receive your
            <br /> rewards,{" "}
            {openConnectModal && (
              <span
                onClick={openConnectModal}
                className="text-[#F9AB3A] cursor-pointer"
              >
                Connect to your wallet
              </span>
            )}
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
            <SavehCard
              estimateToken={estimateToken}
              claimableReward={claimableReward}
            />
            <Summary
              estimateToken={estimateToken}
              yourContribution={contributionInLast30Epoch}
              totalContribution={totalInLast30Epoch}
              claimableReward={claimableReward}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
