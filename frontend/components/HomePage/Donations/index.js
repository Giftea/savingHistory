import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Progress,
  ModalBody,
  ModalCloseButton,
  Input,
  Spinner,
  Center,
  useToast
} from "@chakra-ui/react";
import { useAccount, useToken } from "wagmi";
import donateContract from "../../../utils/DonationMiner/contract";
import USDCContract from "../../../utils/USDC/contract";
import { ethers } from "ethers";
import { useRouter } from "next/router";

const Donate = ({ isOpen, onClose }) => {
  const router = useRouter();
  const toast = useToast();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [usdcBalance, setUsdcBalance] = useState(0);
  const { address } = useAccount();
  const donationMinerContract = donateContract();

  async function getBalance() {
    if (address) {
      const userBalance = await tokenContract.balanceOf(address);
      setUsdcBalance(ethers.utils.formatEther(userBalance));
      return usdcBalance;
    }
    return 0;
  }

  const tokenContract = USDCContract();
  useEffect(() => {
    address && getBalance();
  }, [address]);

  const handleonChange = (e) => {
    setValue(e.target.value);
  };

  const approveUSDC = async (e) => {
    e.preventDefault();
    if (value > usdcBalance)
      return toast({
        title: "Insufficient USDC balance",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true
      });

    try {
      const approveDonation = await tokenContract.approve(
        "0xd11e64179397f25c64E955F22D26d25301C12BF2",
        ethers.utils.parseEther(value.toString()),
        { gasLimit: 900000 }
      );

      setLoading(true);

      const done = await approveDonation.wait();

      console.log(done);
      done &&
        toast({
          title: `${value} USDC approved!`,
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true
        });

      setLoading(false);
    } catch (error) {
      console.log("Approval error: ", error);
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationMinerContract = donateContract();

    const res = await donationMinerContract.donate(
      "0xb96E918488e0690ea2BCEF6C5B394bb32249f016",
      ethers.utils.parseEther(value.toString()),
      address
    );
    setLoading(true);
    res
      .wait()
      .then((res) => {
        console.log("Donation ok: ", res);

        setLoading(false);
        toast({
          title: `Your donation of ${value} USDC was successful. Thank you!`,
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true
        });
        onClose();
        router.push("/farming");
      })
      .catch((err) => {
        console.log("Donation error: ", err);

        toast({
          title: "An error occured",
          status: "error",
          position: "top",
          duration: 9000,
          isClosable: true
        });
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <div className="m-8">
            {" "}
            <ModalHeader>Donate USDC Token</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                {" "}
                <p className="text-[#6C6A65]">
                  The amount you donate and the total amount raised over the
                  previous 30 epochs, may determine the amount of $SAVEH token
                  you will get.
                </p>
                <Progress
                  value={step === 1 ? 0 : step === 2 ? 50 : 100}
                  id="progress_bar"
                  className="my-6"
                />
                <div className="flex justify-between items-center my-3">
                  <img src="/images/Other/usdc.png " height={20} width={20} />
                  <p className="text-sm">
                    Available Balance:{" "}
                    <span className="font-bold">
                      {Number(usdcBalance).toFixed(2)} USDC
                    </span>
                  </p>
                </div>
                <Input
                  type="number"
                  className="p-5"
                  value={value}
                  max={usdcBalance}
                  min={1}
                  onChange={handleonChange}
                />
                <p className="text-[#6C6A65] text-xs mt-2">
                  Fees on polygon network are extremely small (&lt;$0.001)
                </p>
                <div className="mt-8">
                  {step === 1 ? (
                    <button
                      onClick={(e) => approveUSDC(e)}
                      className={`bg-primary text-sm py-4 px-5 rounded-3xl w-full`}
                    >
                      {loading ? <Spinner /> : " Approve USDC"}
                    </button>
                  ) : step === 2 ? (
                    <button
                      onClick={(e) => handleSubmit(e)}
                      className={`bg-primary text-sm py-4 px-5 rounded-3xl w-full`}
                      disabled={loading}
                    >
                      {loading ? <Spinner /> : "Donate"}
                    </button>
                  ) : (
                    <Center>
                      {" "}
                      <Spinner />
                    </Center>
                  )}

                  <p className="text-center text-[#F8B60C] text-xs mt-5">
                    Learn more about epoch
                  </p>
                </div>
              </form>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Donate;
