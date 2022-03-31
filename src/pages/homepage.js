import { useRef, useEffect, useState } from "react";

import { Button } from "../components/button";
import { PageWrapper } from "../components/page-wrapper";
import { Text } from "../components/text";

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

export const Homepage = (props) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const height = document.body.clientHeight;
    const top = contentRef.current.getBoundingClientRect().top;
    setHeight(height - top - 145);
  }, []);

  return (
    <PageWrapper>
      <div ref={contentRef} className='bg-pattern content-wrapper mt-250 mb-150'>
        <div style={{ height }}>
          <div className='head-wrapper'>
            <Text type='100' fontWeight={700} color='black'>
              Hey Oh!
            </Text>
            <Text type='80' classes='waving-hand'>
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
          <Button classes='more-button mt-40'>more about me</Button>
        </div>
      </div>

      <div>
        <Text type='130' fontWeight={400} className='mb-100'>
          my skills
        </Text>

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
        </div>
      </div>
    </PageWrapper>
  );
};
