import React from "react";
import { savehCardText } from "../../data";

const SavehCard = ({estimateToken}) => {
  return (
    <div className="bg-[#ffffff] shadow-[0_4px_12px_rgba(49,45,34,0.2)] lg:w-2/5 rounded-lg p-10">
      <p className="text-[#6C6A65] font-bold text-2xl mb-8">{savehCardText.heading1}</p>
      <p className="text-[#6C6A65] text-2xl">{savehCardText.heading2}</p>
      <p className="text-[#848077] my-5">{savehCardText.text1}</p>
      <p className="text-[#312D22} text-2xl mb-5 font-bold bg-[#F1F0F0] p-5 inline-block">~ {estimateToken} SAVEH</p>
      <p className="text-[#848077]">{savehCardText.text2}</p>
    </div>
  );
};

export default SavehCard;
