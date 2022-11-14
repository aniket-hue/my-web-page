import React from "react";
import { Container } from "../../../../components/container";
import { FontType, Text } from "../../../../components/text";

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
import { ColorVariants } from "../../../../colors";
import { SkillShapes } from "./constants";
import { Shapes } from "../../../../components/shapes";
import { ShapesBackdrop } from "../../../../components/shapes-backdrop";
import { cx } from "../../../../utils/helpers";

const skillIconWidth = 90;
const skillIconHeight = 90;

const SkillIcon: React.FC<{ icon: any }> = ({ icon: Icon }) => <Icon width={skillIconWidth} height={skillIconHeight} />;

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
    <Container height='h-100vh' withScroll>
      <Container width='w-60pct' flexDirection='column' margin='auto' zIndex={2}>
        <Text font={FontType.H1_TEXT_BOLD} weight={500} color={ColorVariants.VERYLIGHTBLUE}>
          my skills
        </Text>

        <Container flexWrap='wrap' margin={{ top: 25 }} gap={8}>
          {skillIcons.map((e) => (
            <SkillIcon icon={e} />
          ))}
        </Container>
      </Container>

      <Container
        style={{ top: 0, zIndex: -1 }}
        className={cx("p-absolute", "moveUpDown", "h-100vh", "w-100pct", "t-0")}
      >
        {SkillShapes.map((e) => (
          <Shapes {...e} />
        ))}
      </Container>

      <ShapesBackdrop shapes={SkillShapes} />
    </Container>
  );
};
