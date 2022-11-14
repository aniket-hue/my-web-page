import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";
import { useEffect } from "react";
import { Container } from "../components/container";

export const withScroll = (Component: any) => (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current as any,
      smooth: true,
    });
  }, []);

  return (
    <Container flexDirection='column' ref={containerRef} data-scroll-container {...props}>
      <Component {...props} />
    </Container>
  );
};
