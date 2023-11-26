import React from "react";
import { ColorVariants } from "../../colors";
import { Container } from "../container";
import { FontType, Text } from "../text";

export const Footer = () => {
  return (
    <Container flexDirection='column' alignItems='center' margin={{ top: 10 }}>
      <Text
        style={{ display: "inline-block", textAlign: "center" }}
        font={FontType.SUB_TITLE_TEXT_SEMIBOLD}
        color={ColorVariants.TEXTHEADINGPRIMARY}
      >
        Made with ❤️ in India
      </Text>
      <a
        href='https://github.com/aniket-hue/portfolio'
        target='_blank'
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        <Text type='span' font={FontType.BASE_TEXT_REGULAR} color={ColorVariants.LIGHTRED}>
          {"<Code />"}
        </Text>
      </a>
    </Container>
  );
};
