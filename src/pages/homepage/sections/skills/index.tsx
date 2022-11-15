import React from "react";
import { Container } from "../../../../components/container";

import { ReactComponent as ReactIcon } from "../../../../assets/react.svg";
import { ReactComponent as JsIcon } from "../../../../assets/js.svg";
import { ReactComponent as TsIcon } from "../../../../assets/ts.svg";
import { ReactComponent as EmberIcon } from "../../../../assets/ember.svg";
import { ReactComponent as JavaIcon } from "../../../../assets/java.svg";
import { ReactComponent as SassIcon } from "../../../../assets/sass.svg";
import { ReactComponent as ReduxIcon } from "../../../../assets/redux.svg";
import { ReactComponent as OpenlayersIcon } from "../../../../assets/openlayers.svg";
import { ReactComponent as GitIcon } from "../../../../assets/git.svg";
import { ReactComponent as LinuxIcon } from "../../../../assets/linux.svg";
import { ReactComponent as NextJsIcon } from "../../../../assets/next-js.svg";
import { SkillShapes } from "./constants";
import { Section } from "../../../../components/section";
import { SectionHeading } from "../../../../components/section-heading";

const skillIconWidth = "100%";
const skillIconHeight = "100%";

const SkillIcon: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return (
    <Container width={100} sm={{ width: 60 }}>
      <Icon width={skillIconWidth} height={skillIconHeight} />
    </Container>
  );
};

const skillIcons = [
  JavaIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  ReduxIcon,
  NextJsIcon,
  EmberIcon,
  SassIcon,
  GitIcon,
  LinuxIcon,
  OpenlayersIcon,
];

export const Skills: React.FC<any> = () => {
  return (
    <Section shapes={SkillShapes}>
      <SectionHeading>skills</SectionHeading>

      <Container flexWrap='wrap' margin={{ top: 25 }} gap={8} sm={{ margin: { top: 10 } }}>
        {skillIcons.map((e) => (
          <SkillIcon icon={e} />
        ))}
      </Container>
    </Section>
  );
};
