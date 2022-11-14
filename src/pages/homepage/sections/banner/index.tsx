import { Container } from "../../../../components/container";
import { Shapes } from "../../../../components/shapes";
import { FontType, Text } from "../../../../components/text";
import React from "react";

import { ReactComponent as GithubIcon } from "../../../../assets/github.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../../../assets/linkedin.svg";
import { ColorVariants } from "../../../../colors";

import styles from "./banner.module.scss";
import { BannerShapes } from "./constants";
import { ShapesBackdrop } from "../../../../components/shapes-backdrop";
import { LINKS } from "../../../../utils/constants";

export const Banner: React.FC<any> = (props) => {
  return (
    <Container withScroll position='relative' height='h-100vh'>
      <Container width='w-60pct' margin='auto' flexDirection='column' zIndex={5}>
        <Container>
          <Text font={FontType.H1_TEXT_BOLD} weight={500} color={ColorVariants.VERYLIGHTBLUE}>
            Heyo!
          </Text>

          <Text font={FontType.H2_TEXT_BOLD} className='waving-hand'>
            👋🏻
          </Text>
        </Container>

        <Container margin={{ top: 7 }}>
          <Text font={FontType.H3_TEXT_REGULAR} weight={500} color={ColorVariants.DARKGRAY}>
            My name is Aniket. I am a frontend engineer (
            <a className='href-link' href='https://www.primathon.in' target='_blank'>
              @Primathon
            </a>
            ) focused on improving myself. Always looking to learn new skills and improve on existing knowledge, hoping
            to contribute to making the world a better place.
          </Text>
        </Container>

        <Container className={styles["social-links"]} gap={15} margin={{ top: 22 }}>
          <a href={LINKS.GITHUB} target='_blank'>
            <GithubIcon width={60} height={60} />
          </a>

          <a href={LINKS.LINKED_IN} target='_blank'>
            <LinkedinIcon width={60} height={60} />
          </a>

          <a href={LINKS.INSTAGRAM} target='_blank'>
            <InstagramIcon width={60} height={60} />
          </a>

          <Text font={FontType.H3_TEXT_BOLD} weight={500} color={ColorVariants.DARKGRAY} style={{ marginTop: "auto" }}>
            <a href={LINKS.RESUME} download target='_blank'>
              Résumé
            </a>
          </Text>
        </Container>
      </Container>

      <ShapesBackdrop shapes={BannerShapes} />
    </Container>
  );
};
