import { useRef, useEffect, useState } from "react";

import { FirstSection } from "./first-section";
import { SecondSection } from "./second-section";
import { ThirdSection } from "./third-section";
import { FourthSection } from "./fourth-section";

import { PageWrapper } from "../../components/page-wrapper";

import "./homepage.scss";


export const Homepage = (props) => {
  return (
    <PageWrapper>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <div style={{ height: 400 }}></div>
    </PageWrapper>
  );
};
