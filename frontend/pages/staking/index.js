import React, { useEffect, useState } from "react";
import Newsletter from "../../components/Newsletter";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Flex,
  useToast,
  Divider,
} from "@chakra-ui/react";
import donateMinerContract from "../../utils/DonationMiner/contract";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import savehContractConnect from "../../utils/Saveh/contract";
import stakingContractConnect from "../../utils/Staking/contract";

const Staking = () => {
  const toast = useToast();
  const { address } = useAccount();
  const [apr, setApr] = useState(0);
  const [balance, setBalance] = useState(0);
  const [stakeValue, setStakeValue] = useState(0);
  const [unStakeValue, setUnstakeValue] = useState(0);
  const [val, setVale] = useState();
  const donateContract = donateMinerContract();
  const savehContract = savehContractConnect();
  const stakingContract = stakingContractConnect();

  async function calcAPR() {
    const res = await donateContract.apr(address);
    setApr(ethers.utils.formatEther(res));
    console.log(apr);
    return apr;
  }

  async function getSavehBalance() {
    const res = await savehContract.balanceOf(address);
    setBalance(ethers.utils.formatEther(res));
    return balance;
  }

  async function approveStaking() {
    const res = await savehContract.approve(
      "0x1a4bd8feb66fbe2bd39554c7812084ff97ba946b",
      stakeValue
    );
    console.log(res);
  }

  async function stake() {
    try {
      const res = await stakingContract.stake(address, stakeValue);
      console.log(res);

      res &&
        toast({
          title: `Stake successful!`,
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (address) {
      calcAPR();
      getSavehBalance();
    }
  }, []);

  return (
    <>
      <Center px={8} py={10}>
        <div className="bg-[#ffffff] shadow-[0_4px_12px_rgba(49,45,34,0.2)] lg:w-2/5 rounded-lg p-10">
          <h1 className="md:text-xl lg:text-2xl text-lg text-center my-5 font-bold">
            $SAVEH Staking APR: {apr}%
          </h1>
          <Tabs isFitted _selected={{ color: "#faca4f" }}>
            <TabList>
              <Tab>Stake</Tab>
              <Tab>Unstake</Tab>
              <Tab>Summary</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <>
                  <div className="border-[1px] border-[#888] rounded-lg py-3 px-4 my-5">
                    <h1 className="text-base font-bold">
                      WALLET BALANCE: {balance} SAVEH
                    </h1>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                        SAVEH{" "}
                        <input
                          type="number"
                          value={stakeValue}
                          onChange={(e) => setStakeValue(e.target.value)}
                        />
                      </div>
                      <div>
                        <button className="border-[1px] border-[#888] mx-1">
                          Max
                        </button>
                        <button
                          onClick={() => approveStaking()}
                          className="border-[1px] border-[#888] mx-1"
                        >
                          Approve
                        </button>
                      </div>
                    </Flex>
                  </div>

                  <div className="border-[1px] border-[#888] rounded-lg py-3 px-4">
                    <h1 className="text-base font-bold">REWARDS (ALLOCATED)</h1>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                        SAVEH
                      </div>
                      <div>
                        <button className="border-[1px] border-[#888] mx-1">
                          Stake
                        </button>
                      </div>
                    </Flex>
                  </div>
                </>
              </TabPanel>
              <TabPanel>
                <>
                  <div className="border-[1px] border-[#888] rounded-lg py-3 px-4 my-5">
                    <h1 className="text-base font-bold">STAKED: 0 SAVEH</h1>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                        SAVEH{" "}
                        <input
                          type="number"
                          value={unStakeValue}
                          onChange={(e) => setUnstakeValue(e.target.value)}
                        />
                      </div>
                      <div>
                        <button className="border-[1px] border-[#888] mx-1">
                          Unstake
                        </button>
                      </div>
                    </Flex>
                  </div>

                  <div className="border-[1px] border-[#888] rounded-lg py-3 px-4">
                    <h1 className="text-base font-bold">
                      CLAIMABLE UNSTAKED: 0 SAVEH
                    </h1>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                        SAVEH
                      </div>
                      <div>
                        <button className="border-[1px] border-[#888] mx-1">
                          Claim
                        </button>
                      </div>
                    </Flex>
                  </div>
                </>
              </TabPanel>
              <TabPanel>
                <>
                  <Flex className="my-2" justifyContent={"space-between"}>
                    <h1 className=" font-bold">Total staked</h1>
                    <h1 className=" text-[#888]">6789 SAVEH</h1>
                  </Flex>
                  <Divider />

                  <Flex className="my-2" justifyContent={"space-between"}>
                    <h1 className=" font-bold">You've staked</h1>
                    <h1 className=" text-[#888]">6789 SAVEH</h1>
                  </Flex>
                  <Divider />

                  <Flex className="my-2" justifyContent={"space-between"}>
                    <h1 className=" font-bold">
                      Total estimated SAVEH rewards this epoch
                    </h1>
                    <h1 className=" text-[#888]">6789 SAVEH</h1>
                  </Flex>
                </>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>{" "}
      </Center>
      <Newsletter />
    </>
  );
};

export default Staking;
