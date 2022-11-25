import { Divider } from "@chakra-ui/react";
import React from "react";
import { summaryText } from "../../data";

const Summary = ({
  estimateToken,
  yourContribution,
  totalContribution,
  claimableReward
}) => {
  return (
    <div className="lg:w-2/4 mt-8 lg:mt-0">
      <h1 className="text-[#6C6A65] font-bold text-2xl mb-8">
        {summaryText.title}
      </h1>
      <div>
        <div className="flex justify-between py-3">
          <h2 className="text-[#6C6A65] font-bold">
            Available new $SAVEH tokens this epoch
          </h2>
          <p className="text-[#6C6A65]">{"-"} SAVEH</p>
        </div>
        <Divider />
      </div>
      <div>
        <div className="flex justify-between py-3">
          <h2 className="text-[#6C6A65] font-bold">
            Your donation in the last 30 epochs
          </h2>
          <p className="text-[#6C6A65]">{yourContribution} SAVEH</p>
        </div>
        <Divider />
      </div>
      <div>
        <div className="flex justify-between py-3">
          <h2 className="text-[#6C6A65] font-bold">
            Total raised in the last 30 epochs
          </h2>
          <p className="text-[#6C6A65]">{totalContribution} SAVEH</p>
        </div>
        <Divider />
      </div>
      <div>
        <div className="flex justify-between py-3">
          <h2 className="text-[#6C6A65] font-bold">
            Your pending rewards estimation this epoch
          </h2>
          <p className="text-[#6C6A65]">{estimateToken} SAVEH</p>
        </div>
        <Divider />
      </div>
      <div>
        <div className="flex justify-between py-3">
          <h2 className="text-[#6C6A65] font-bold">
            SAVEH rewards already allocated to you
          </h2>
          <p className="text-[#6C6A65]">{claimableReward} SAVEH</p>
        </div>
        <Divider />
      </div>
      <p className="text-[#A8A7A4] text-xs mt-5">{summaryText.bottomText}</p>
    </div>
  );
};

export default Summary;
