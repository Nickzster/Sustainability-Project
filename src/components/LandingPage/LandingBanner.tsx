import React from "react";
import "./styles/landingpage.css";
import Chevron from "./Chevron";

const LandingBanner: React.FunctionComponent = () => {
  return (
    <div className="landing-banner">
      <h1>Welcome!</h1>
      <h2>Scroll down to learn more about sustainability!</h2>
      <Chevron />
    </div>
  );
};

export default LandingBanner;
