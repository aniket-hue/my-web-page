import React from "react";
import { ColorVariants } from "../../colors";
import { Container } from "../container";
import { FontType, Text } from "../text";

export const Footer = () => {
  return (
    <Container margin={{ top: 10, x: "auto" }} justifyContent='center'>
      <Text
        style={{ display: "inline-block" }}
        font={FontType.SUB_TITLE_TEXT_SEMIBOLD}
        color={ColorVariants.TEXTHEADINGPRIMARY}
      >
        Made with ❤️ in India
        <br />
      </Text>
      <a href='https://github.com/aniket-hue/portfolio' target='_blank' style={{ textDecoration: "none" }}>
        <Text type='span' color={ColorVariants.LIGHTRED}>
          &nbsp;{" <Code />"}
        </Text>
      </a>
    </Container>
  );
};
