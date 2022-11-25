import React from "react";
import Image from "next/image";

const FeatureImages = () => {
  return (
    <div className="flex flex-col justify-end items-end">
      <div className="mt-8">
        {" "}
        <Image src="/images/Features/Image1.png" width={550} height={480} />
      </div>
      <div className="mt-8 self-start">
        {" "}
        <Image src="/images/Features/Image2.png" width={550} height={480} />
      </div>
    </div>
  );
};

export default FeatureImages;
