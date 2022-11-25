import React, { useEffect, useState } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spinner,
  Flex,
  useToast,
  Divider,
  Button,
} from "@chakra-ui/react";
import donateMinerContract from "../../utils/DonationMiner/contract";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import savehContractConnect from "../../utils/Saveh/contract";
import stakingContractConnect from "../../utils/Staking/contract";

const Staking = () => {
  const { openConnectModal } = useConnectModal();
  const toast = useToast();
  const { address } = useAccount();
  const [apr, setApr] = useState(0);
  const [balance, setBalance] = useState(0);
  const [stakeValue, setStakeValue] = useState();
  const [unStakeValue, setUnstakeValue] = useState();
  const [val, setVale] = useState();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
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
    try {
      setLoading(true);
      const res = await savehContract.approve(
        "0x1a4bd8feb66fbe2bd39554c7812084ff97ba946b",
        stakeValue
      );
      res &&
        toast({
          title: `Stake approved!`,
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      setStep(2);
      setLoading(false);
    } catch (error) {
      toast({
        title: `Stake approval unsuccessful!`,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }

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
      <Flex justifyContent="space-between" className="bg-ash" px={14} py={14}>
        <div>
          <h1 className="md:text-xl lg:text-4xl text-lg font-bold">
            Increase your governance
            <br /> power and earn extra
            <br /> rewards by staking $SAVEH.
          </h1>
          <p className="text-[#888] my-5 ">
            When we believe in the mission and vision of a project and want to
            keep
            <br /> its assets in a long term, staking is a great option to make
            the most of them.
            <br /> In this sense, if you are aligned with savingHistory's
            mission and want to a<br /> world where no culture is forgotten,
            stake now your $SAVEH tokens.
          </p>
          <a
            href="https://community.savinghistory.xyz/c/general/4"
            className="text-[#dda61d] underline"
            target="_blank"
          >
            Learn More
          </a>
        </div>
        <div className="bg-[#ffffff] shadow-[0_4px_12px_rgba(49,45,34,0.2)] w-[55%] rounded-lg p-10">
          <h1 className="md:text-xl lg:text-2xl text-lg text-center my-2 font-bold">
            $SAVEH Staking APR: {apr}%
          </h1>
          <p className="text-[#888] text-center">
            Total staked: 1,660,630,970.95 SAVEH
          </p>
          {address ? (
            <Tabs isFitted colorScheme={"yellow"} mt={4}>
              <TabList>
                <Tab>Stake</Tab>
                <Tab>Unstake</Tab>
                <Tab>Summary</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <>
                    <div className="border-[1px] border-[#99999960] rounded-lg py-3 px-4 my-5">
                      <h1 className="text-base font-bold">
                        WALLET BALANCE:{" "}
                        <span className="text-[#888] font-thin">
                          {balance} SAVEH
                        </span>
                      </h1>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        mt={3}
                      >
                        <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                          SAVEH{" "}
                          <input
                            type="number"
                            value={stakeValue}
                            placeholder="0"
                            onChange={(e) => setStakeValue(e.target.value)}
                            className=" outline-0"
                          />
                        </div>
                        <div>
                          <button className="bg-[#99999960] mr-2 font-bold text-sm py-2 px-5 rounded-3xl">
                            Max
                          </button>
                          {step === 1 ? (
                            <Button
                              bg={"#89f887d2"}
                              fontWeight="bold"
                              px={5}
                              py={2}
                              borderRadius="full"
                              disabled={balance === 0 && true}
                              className="text-sm"
                              onClick={() => approveStaking()}
                            >
                              {loading ? <Spinner /> : "Approve"}
                            </Button>
                          ) : (
                            <Button
                              bg={"#89f887d2"}
                              fontWeight="bold"
                              px={5}
                              py={2}
                              borderRadius="full"
                              disabled
                              className="text-sm"
                              onClick={() => stake()}
                            >
                              {loading ? <Spinner /> : "Stake"}
                            </Button>
                          )}
                        </div>
                      </Flex>
                    </div>

                    <div className="border-[1px] border-[#99999960] rounded-lg py-3 px-4">
                      <h1 className="text-base font-bold">
                        REWARDS (ALLOCATED)
                      </h1>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        mt={3}
                      >
                        <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                          SAVEH
                        </div>
                        <div>
                          <Button
                            bg={"#89f887d2"}
                            fontWeight="bold"
                            px={5}
                            py={2}
                            borderRadius="full"
                            disabled
                            className="text-sm"
                          >
                            Stake
                          </Button>
                        </div>
                      </Flex>
                    </div>
                  </>
                </TabPanel>
                <TabPanel>
                  <>
                    <div className="border-[1px] border-[#99999960] rounded-lg py-3 px-4 my-5">
                      <h1 className="text-base font-bold">
                        STAKED:{" "}
                        <span className="text-[#888] font-thin">
                          {balance} SAVEH
                        </span>
                      </h1>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        mt={3}
                      >
                        <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                          SAVEH{" "}
                          <input
                            type="number"
                            value={unStakeValue}
                            onChange={(e) => setUnstakeValue(e.target.value)}
                            className=" outline-0"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <Button
                            bg={"#f92e06d2"}
                            color="#fff"
                            fontWeight="bold"
                            px={5}
                            py={2}
                            borderRadius="full"
                            disabled={balance === 0 && true}
                            className="text-sm"
                          >
                            Unstake
                          </Button>
                        </div>
                      </Flex>
                    </div>

                    <div className="border-[1px] border-[#99999960] rounded-lg py-3 px-4">
                      <h1 className="text-base font-bold">
                        CLAIMABLE UNSTAKED:{" "}
                        <span className="text-[#888] font-thin">
                          {balance} SAVEH
                        </span>
                      </h1>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        mt={3}
                      >
                        <div className="md:text-xl lg:text-xl text-lg font-bold mt-3">
                          SAVEH
                        </div>
                        <div>
                          <Button
                            bg={"#89f887d2"}
                            fontWeight="bold"
                            px={5}
                            py={2}
                            borderRadius="full"
                            disabled
                            className="text-sm"
                          >
                            Claim
                          </Button>
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
          ) : (
            <>
              <Divider py={10} />
              <p className="text-center text-[#888] mt-3 cursor-pointer">
                {openConnectModal && (
                  <span onClick={openConnectModal} className="text-[#F9AB3A]">
                    Connect to your wallet
                  </span>
                )}{" "}
                to start staking.
              </p>
            </>
          )}
        </div>
      </Flex>
    </>
  );
};

export default Staking;