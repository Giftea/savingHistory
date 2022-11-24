import { Divider } from "@chakra-ui/react";
import React from "react";
import { summaryText } from "../../data";

const Summary = ({ estimateToken }) => {
  return (
    <div className="lg:w-2/4 mt-8 lg:mt-0">
      <h1 className="text-[#6C6A65] font-bold text-2xl mb-8">
        {summaryText.title}
      </h1>
      {summaryText.summary.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between py-3">
            <h2 className="text-[#6C6A65] font-bold">{item.title}</h2>

            <p className="text-[#6C6A65]">
              {item.saveh ? <>{estimateToken} SAVEH</> : item.text}
            </p>
          </div>
          <Divider />
        </div>
      ))}
      <p className="text-[#A8A7A4] text-xs mt-5">{summaryText.bottomText}</p>
    </div>
  );
};

export default Summary;
