import React from "react";
import Image from "next/image";
import { footerlinks } from "../../../data";

const Footer = () => {
  return (
    <div className="bg-[#312D22] px-5 md:px-10 py-14 md:flex justify-between items-end">
      <div className="flex flex-col">
        <div className="mb-5">
          {" "}
          <Image src="/images/Footer/Logo.png" width={45} height={45} />
        </div>
        <div className="flex md:flex-row flex-col">
          {" "}
          {footerlinks.map((link, index) => (
            <a
              key={index}
              className="text-[#ffffff] mr-5 font-light mt-3 md:mt-0"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <hr className="mt-5 text-[#9E9887]" />
      <div className="mt-10 md:mt-0">
        <p className="text-[#C9C4B5] md:text-base text-sm">
          © 2022 savingHistory. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
