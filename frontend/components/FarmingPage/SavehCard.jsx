import { Flex } from "@chakra-ui/react";
import React from "react";
import { savehCardText } from "../../data";

const SavehCard = ({ estimateToken, claimableReward }) => {
  return (
    <div className="bg-[#ffffff] shadow-[0_4px_12px_rgba(49,45,34,0.2)] lg:w-2/5 rounded-lg p-10">
      <div className="text-[#6C6A65] font-bold text-xl mb-8 flex flex-row">
        <div className="text-left flex-none">{savehCardText.heading1}</div>
        <div className="text-right flex-auto w-64">
          <span className="text-sm">{claimableReward} $SAVEH </span>
          <button
            className="bg-primary text-sm py-2 px-5 rounded-3xl"
            disabled={claimableReward == 0}
          >
            Claim
          </button>
        </div>
      </div>
      <p className="text-[#848077] my-5">{savehCardText.text1}</p>
      <p className="text-[#312D22} text-2xl mb-5 font-bold bg-[#F1F0F0] p-5 inline-block">
        ~ {Number(Number(estimateToken) + Number(claimableReward)).toFixed(2)}{" "}
        SAVEH
      </p>
      <p className="text-[#848077]">{savehCardText.text2}</p>
    </div>
  );
};

export default SavehCard;
