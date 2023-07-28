import React from "react";

import Feature from "../../components/feature/Feature";
import "./features.css";
import { featureData } from "./featureData";

const Features = () => {
  return (
    <div className="gpt3__freatures section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData?.map((data, i) => (
          <Feature key={i} title={data.title} text={data.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
