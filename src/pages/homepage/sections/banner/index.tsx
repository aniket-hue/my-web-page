import { Container } from "../../../../components/container";
import { FontType, Text } from "../../../../components/text";
import React from "react";

import { ReactComponent as GithubIcon } from "../../../../assets/github.svg";
import { ReactComponent as LinkedinIcon } from "../../../../assets/linkedin.svg";
import { ColorVariants } from "../../../../colors";

import styles from "./banner.module.scss";
import { BannerShapes } from "./constants";
import { COLOR, LINKS } from "../../../../utils/constants";
import { Section } from "../../../../components/section";
import { SectionHeading } from "../../../../components/section-heading";

export const Banner: React.FC<any> = () => {
  return (
    <Section shapes={BannerShapes}>
      <Container>
        <SectionHeading>Heyo!</SectionHeading>

        <Text font={FontType.H2_TEXT_BOLD} mobileFont={FontType.H3_TEXT_REGULAR} className={styles["waving-hand"]}>
          👋🏻
        </Text>
      </Container>

      <Container margin={{ top: 7 }}>
        <Text
          font={FontType.H3_TEXT_REGULAR}
          mobileFont={FontType.SUB_TITLE_TEXT_SEMIBOLD}
          color={ColorVariants.BODYPRIMARY}
        >
          My name is <span style={{ color: COLOR.lightRed }}>Aniket</span>. I am a frontend engineer focused on
          improving myself. Always looking to learn new skills and improve on existing knowledge, hoping to contribute
          to making the world a better place.
        </Text>
      </Container>

      <Container className={styles["social-links"]} gap={10} margin={{ top: 22 }} sm={{ margin: { top: 12 } }}>
        <a href={LINKS.GITHUB} target='_blank'>
          <GithubIcon width={20} height={20} />
        </a>

        <a href={LINKS.LINKED_IN} target='_blank'>
          <LinkedinIcon width={20} height={20} />
        </a>

        <Text
          font={FontType.H3_TEXT_BOLD}
          mobileFont={FontType.TITLE_TEXT_1_SEMIBOLD}
          weight={500}
          color={ColorVariants.BODYPRIMARY}
          style={{ marginTop: "auto" }}
        >
          <a href={LINKS.RESUME} download target='_blank'>
            Résumé
          </a>
        </Text>
      </Container>
    </Section>
  );
};
