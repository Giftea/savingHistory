import React from "react";
import Features from "../../components/Features";
import Newsletter from "../../components/Newsletter";
import CommonHero from "../../components/CommonHero";
import { farmingHeroText } from "../../data";
import FarmingComponent from "../../components/FarmingPage";

const farming = () => {
  return (
    <>
      <CommonHero
        heading={farmingHeroText.heading}
        paragraph={farmingHeroText.paragraph}
        buttonText={farmingHeroText.buttonText}
      />
      <FarmingComponent />
      <Features />
      <Newsletter />
    </>
  );
};

export default farming;
