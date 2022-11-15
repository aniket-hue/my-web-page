import React, { PropsWithChildren } from "react";
import { ColorVariants } from "../../colors";
import { FontType, Text } from "../text";

export const SectionHeading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text
      font={FontType.H1_TEXT_BOLD}
      mobileFont={FontType.H2_TEXT_REGULAR}
      weight={500}
      color={ColorVariants.TEXTHEADINGPRIMARY}
    >
      {children}
    </Text>
  );
};
