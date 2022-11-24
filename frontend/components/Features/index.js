import React from "react";
import FeatureImages from "./FeatureImages";
import FeatureText from "./FeatureText";

const Features = () => {
  return (
    <div className="py-8 px-5 md:px-20 lg:px-14 lg:flex items-center justify-between">
      <FeatureText />
      <FeatureImages />
    </div>
  );
};

export default Features;
