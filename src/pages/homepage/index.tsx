import React from "react";
import { Container } from "../../components/container";

import { withScroll } from "../../hoc/WithScrollx";
import { Banner } from "./sections/banner";
import { Skills } from "./sections/skills";
import { Timeline } from "./sections/timeline";

const H = () => {
  return (
    <Container flexDirection='column' padding={{ bottom: 20}}>
      <Banner />
      <Skills />
      <Timeline />
    </Container>
  );
};

export const Homepage = withScroll(H);
