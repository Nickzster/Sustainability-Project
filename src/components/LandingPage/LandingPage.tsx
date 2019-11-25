import React from "react";
import NavBar from "./NavBar";
import LandingBanner from "./LandingBanner";
import PageCardSection from "./PageCardSection";
import LandingPageContent from "../../content/LandingPage.json";
import "../../styles/global.css";

const LandingPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <LandingBanner />

      <div className="background-image">
        <PageCardSection
          sectionTitle={LandingPageContent.WhatIsSustainability.title}
          content={LandingPageContent.WhatIsSustainability.content}
        />
        <PageCardSection
          sectionTitle={LandingPageContent.HowCanIBeMoreSustainable.title}
          content={LandingPageContent.HowCanIBeMoreSustainable.content}
        />
        <PageCardSection
          sectionTitle={LandingPageContent.ExtendedLearning.title}
          content={LandingPageContent.ExtendedLearning.content}
        />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
