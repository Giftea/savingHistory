import React from "react";
import Image from "next/image";
import Navlinks from "./Navlinks";
import ResponsiveNavlinks from "./ResponsiveNavlinks";

const HeaderTwo = () => {
  return (
    <div className="md:px-14 px-5 py-3 flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
      <a href="/">
        <Image src="/images/Header/SH-Logo.png" width={200} height={50} />
      </a>
      <Navlinks />
      <ResponsiveNavlinks />
    </div>
  );
};

export default HeaderTwo;
