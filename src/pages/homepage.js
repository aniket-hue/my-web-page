import { useRef, useEffect, useState } from "react";

import { Button } from "../components/button";
import { PageWrapper } from "../components/page-wrapper";
import { ContactForm } from "../components/contact-form";
import { Text } from "../components/text";
import { Container } from "../components/container";
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
import data from "../data.json";

const skillIconWidth = 100;
const skillIconHeight = 80;

export const Homepage = (props) => {
  return (
    <PageWrapper>
      <Container withScroll={true} className='top-container h-100vh pt-150'>
        <Container className='d-flex column container-lg mh-auto'>
          <Container className='head-wrapper'>
            <Text type='130' fontWeight={500} color='veryLightBlue'>
              Heyo!
            </Text>
            <Text type='130' className='waving-hand'>
              👋🏻
            </Text>
          </Container>

          <Container className='about-wrapper mt-30'>
            <Text type='30' fontWeight={500} lineHeight={1.5} color='darkGray'>
              My name is Aniket. I am a frontend engineer focused on (currently @
              <a className='href-link' href='https://www.primathon.in' target='_blank'>
                Primathon
              </a>
              ) improving myself. Always looking to learn new skills and improve on existing knowledge, hoping to
              contribute to making the world a better place.
            </Text>
          </Container>

          <Button className='more-button mt-50'>more about me</Button>
        </Container>

        <Container style={{ top: 0, zIndex: -1 }} className='p-absolute moveUpDown h-100vh w-100pct t-0'>
          <Shapes type={SQUARE} width={200} color='lightViolet' top={500} right={300} rotate={-25} />
          <Shapes type={HEXAGON} width={50} color='razorBlue' top={170} left={70} rotate={-25} />
          <Shapes type={UPTRIANGLE} width={120} color='razorBlue' top={700} left={700} rotate={-25} />
          <Shapes type={RING} width={100} color='razorBlue' top={70} left={500} rotate={-25} />
          <Shapes type={TRIANGLE} width={60} color='red' top={40} right={400} rotate={-25} />
        </Container>
      </Container>

      <Container withScroll={true} className='top-container h-100vh'>
        <Container className='d-flex column container-lg mh-auto'>
          <Text type='130' fontWeight={400} color='veryLightBlue' className='mb-80'>
            my skills
          </Text>
          <div className='d-flex flex-wrap gap-50'>
            <JavaIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <JsIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <TsIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <ReactIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <ReduxIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <EmberIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <SassIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <GitIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <LinuxIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
            <OpenlayersIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
          </div>
        </Container>

        <Container style={{ top: 0, zIndex: -1 }} className='p-absolute moveUpDown w-100pct t-0'>
          <Shapes type={SQUARE} width={200} color='lightViolet' top={500} right={300} rotate={-25} />
          <Shapes type={HEXAGON} width={50} color='razorBlue' top={170} left={70} rotate={-25} />
          <Shapes type={UPTRIANGLE} width={120} color='razorBlue' top={700} left={700} rotate={-25} />
          <Shapes type={RING} width={100} color='razorBlue' top={70} left={500} rotate={-25} />
          <Shapes type={TRIANGLE} width={60} color='red' top={40} right={400} rotate={-25} />
        </Container>
      </Container>

      <Container withScroll={true} className='top-container h-100vh'>
        <Container className='d-flex column container-lg mh-auto'>
          <Text type='130' fontWeight={400} color='veryLightBlue' className='mb-80'>
            timeline
          </Text>
          <div className='d-flex column w-100pct gap-25'>
            {Object.entries(data.timeline).map(([k, v]) => {
              return (
                <div className='d-flex column gap-8'>
                  <Text type='30' fontWeight={600} color='darkYellow' className='mb-9'>
                    {k}
                  </Text>
                  {v.map((e) => (
                    <Text type='25' color='lightGray'>
                      {e}
                    </Text>
                  ))}
                </div>
              );
            })}
          </div>
        </Container>

        <Container style={{ top: 0, zIndex: -1 }} className='p-absolute moveUpDown w-100pct t-0'>
          <Shapes type={SQUARE} width={200} color='lightViolet' top={500} right={300} rotate={-25} />
          <Shapes type={HEXAGON} width={50} color='razorBlue' top={170} left={70} rotate={-25} />
          <Shapes type={UPTRIANGLE} width={120} color='razorBlue' top={700} left={700} rotate={-25} />
          <Shapes type={RING} width={100} color='razorBlue' top={70} left={500} rotate={-25} />
          <Shapes type={TRIANGLE} width={60} color='red' top={40} right={400} rotate={-25} />
        </Container>
      </Container>

      {/* <div>
        <Text type='130' fontWeight={400} color='black' className='mb-100'>
          contact me
        </Text>
        <ContactForm />
      </div> */}
    </PageWrapper>
  );
};
