import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import DonateModal from "../HomePage/Donations";

const CommonHero = ({ heading, paragraph, buttonText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="bg-ash py-20 px-5 md:px-10 lg:px-14 text-center flex justify-center items-center">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold">
          {heading}
        </h1>
        <p className=" my-8 md:text-base lg:text-lg">{paragraph}</p>
        <button
          className="bg-primary text-sm py-2 px-5 rounded-3xl"
          id="hero-cta"
          onClick={onOpen}
        >
          Donate
        </button>
        <DonateModal isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};

export default CommonHero;
