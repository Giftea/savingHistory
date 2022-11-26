import { Flex } from "@chakra-ui/react";
import React from "react";
import { savehCardText } from "../../data";

const SavehCard = ({ estimateToken }) => {
  return (
    <div className="bg-[#ffffff] shadow-[0_4px_12px_rgba(49,45,34,0.2)] lg:w-2/5 rounded-lg p-10">
      <Flex mb={4} justifyContent={'space-between'}>
        <p className="text-[#6C6A65] font-bold text-2xl mb-8">
          {savehCardText.heading1}
        </p>
        <div className=" font-bold text-xl">
          <div><span className="text-2xl">23.67 </span> <span>SAVEH</span></div>
          <button className="bg-primary text-sm py-2 px-5 rounded-3xl my-3 w-full">
            Claim
          </button>
        </div>
      </Flex>
      <p className="text-[#6C6A65] text-2xl">{savehCardText.heading2}</p>
      <p className="text-[#848077] my-5">{savehCardText.text1}</p>
      <p className="text-[#312D22} text-2xl mb-5 font-bold bg-[#F1F0F0] p-5 inline-block">
        ~ {estimateToken} SAVEH
      </p>
      <p className="text-[#848077]">{savehCardText.text2}</p>
    </div>
  );
};

export default SavehCard;
