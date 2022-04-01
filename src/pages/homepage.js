import { useRef, useEffect, useState } from "react";

import { Button } from "../components/button";
import { PageWrapper } from "../components/page-wrapper";
import { ContactForm } from "../components/contact-form";
import { Text } from "../components/text";
import { Shapes } from "../components/shapes";

import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as JsIcon } from "../assets/js.svg";
import { ReactComponent as TsIcon } from "../assets/ts.svg";
import { ReactComponent as EmberIcon } from "../assets/ember.svg";
import { ReactComponent as JavaIcon } from "../assets/java.svg";
import { ReactComponent as SassIcon } from "../assets/sass.svg";
import { ReactComponent as ReduxIcon } from "../assets/redux.svg";
import { ReactComponent as OpenlayersIcon } from "../assets/openlayers.svg";
import { ReactComponent as GitIcon } from "../assets/git.svg";
import { ReactComponent as LinuxIcon } from "../assets/linux.svg";

import "./homepage.scss";
import { SQUARE, RING, TRIANGLE, CUBE, HEXAGON, UPTRIANGLE } from "../constants";
import { Container } from "../components/container";
import { Section } from "../components/section";
import { Container2 } from "../components/container-2";

export const Homepage = (props) => {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <div className='head-wrapper'>
            <Text type='100' fontWeight={500} color='white'>
              Hey Oh!
            </Text>
            <Text type='80' className='waving-hand'>
              👋🏻
            </Text>
          </div>

          <div className='about-wrapper mt-30'>
            <Text type='20' fontWeight={500} lineHeight={1.5} color='darkGray'>
              My name is Aniket. I am a frontend engineer focused on (currently @
              <a className='href-link' href='https://www.primathon.in' target='_blank'>
                Primathon
              </a>
              ) improving myself. Always looking to learn new skills and improve on existing knowledge, hoping to
              contribute to making the world a better place.
            </Text>
          </div>
          <Button className='more-button mt-50'>more about me</Button>
        </Container>

        <Container2>
          <Shapes type={SQUARE} width={200} color='lightViolet' top={500} right={300} rotate={-25} />
          <Shapes type={HEXAGON} width={50} color='razorBlue' top={170} left={70} rotate={-25} />
          <Shapes type={UPTRIANGLE} width={120} color='razorBlue' top={700} left={700} rotate={-25} />
          <Shapes type={RING} width={100} color='razorBlue' top={70} left={500} rotate={-25} />
          <Shapes type={TRIANGLE} width={60} color='red' top={40} right={400} rotate={-25} />
        </Container2>
      </Section>

      <Section>
        <Container>
          <Text data-scroll type='130' fontWeight={400} color='white' className='mb-80'>
            my skills
          </Text>
          {/* 
          <div className='d-flex flex-wrap gap-15'>
            <JavaIcon className='mb-10' width={100} height={80} />
            <JsIcon className='mb-10' width={100} height={80} />
            <TsIcon className='mb-10' width={100} height={80} />
            <ReactIcon className='mb-10' width={100} height={80} />
            <ReduxIcon className='mb-10' width={100} height={80} />
            <EmberIcon className='mb-10' width={100} height={80} />
            <SassIcon className='mb-10' width={100} height={80} />
            <GitIcon className='mb-10' width={100} height={80} />
            <LinuxIcon className='mb-10' width={100} height={80} />
            <OpenlayersIcon className='mb-10' width={100} height={80} />
          </div> */}
        </Container>
      </Section>
      {/* <div>
        <Text type='130' fontWeight={400} color='black' className='mb-100'>
          contact me
        </Text>
        <ContactForm />
      </div> */}
    </PageWrapper>
  );
};
