import React, { useRef, useEffect, useState } from "react";

import "./homepage.scss";
import { Shape, Shapes } from "../../components/shapes";
import { ColorVariants } from "../../colors";
import { Container } from "../../components/container";
import { FontType, Text } from "../../components/text";
import { withScroll } from "../../hoc/WithScrollx";
import { Banner } from "./sections/banner";
import { Skills } from "./sections/skills";
import { Timeline } from "./sections/timeline";

const H = () => {
  return (
    <>
      <Banner />
      <Skills />
      <Timeline />
    </>
  );
};

export const Homepage = withScroll(H);
