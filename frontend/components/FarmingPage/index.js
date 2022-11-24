import React from "react";
import Image from "next/image";
import SavehCard from "./SavehCard";
import Summary from "./Summary";
import { useAccount } from "wagmi";

const Section = () => {
  const { address} = useAccount();

  return (
    <div className="py-8 px-5 md:px-20 lg:px-14 ">
      {address === undefined ? (
        <div className="text-center">
          <Image src="/images/Other/wallet.png" width={550} height={420} />
          <p className="px-10">
            To view your $SAVEH balance and receive your
            <br /> rewards, <span className="text-[#F9AB3A]">Connect to your wallet.</span>
          </p>
        </div>
      ) : (
        <>
          <p className="text-center">
            Epoch will end in <span className="text-[#F9AB3A] font-extrabold text-3xl">23h .14m. 58s</span>
          </p>
          <div className="lg:flex justify-between my-12">
            <SavehCard />
            <Summary />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
