import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { useAccount, useToken } from "wagmi";
import donateContract from "../../../utils/DonationMiner/contract";
import USDCContract from "../../../utils/USDC/contract";

const Donate = ({ isOpen, onClose }) => {
  const [value, setValue] = useState("");
  const [step, setStep] = useState(1);
  const { address } = useAccount();
  const donationMinerContract = donateContract();

  const handleonChange = (e) => {
    setValue(e.target.value);
  };

  const approveUSDC = async () => {
    const tokenContract = USDCContract();
    const approveDonation = await tokenContract.approve(
      "0xb96E918488e0690ea2BCEF6C5B394bb32249f016",
      10,
      { gasLimit: 900000 }
    );
    console.log(approveDonation);
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationMinerContract = donateContract();

    const res = await donationMinerContract.donate(
      "0xb96E918488e0690ea2BCEF6C5B394bb32249f016",
      10,
      address,
      { gasLimit: 900000 }
    );

    console.log(res);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <div className="m-8">
            {" "}
            <ModalHeader>Donate Dai Token</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
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
                  <img src="/images/Other/Dai.png " height={24} width={50} />
                  <p className="text-sm">
                    Available Balance:{" "}
                    <span className="font-bold">05.00 Dai</span>
                  </p>
                </div>
                <Input
                  type="number"
                  className="p-5"
                  value={value}
                  onChange={handleonChange}
                />
                <p className="text-[#6C6A65] text-xs mt-2">
                  Fees on polygon network are extremely small (&lt;$0.001)
                </p>
                <div className="mt-8">
                  {step === 1 ? (
                    <button
                      onClick={() => approveUSDC()}
                      className={`bg-primary text-sm py-4 px-5 rounded-3xl w-full`}
                    >
                      Approve USDC
                    </button>
                  ) : step === 2 ? (
                    <button
                      type="submit"
                      className={`bg-primary text-sm py-4 px-5 rounded-3xl w-full`}
                    >
                      Donate
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
