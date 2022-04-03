import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "./page-wrapper.scss";

export const PageWrapper = ({ className, ...props }) => {
  const containerRef = useRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
  }, []);

  return (
    <div className='page-wrapper' ref={containerRef} data-scroll-container {...props}>
      {props.children}
    </div>
  );
};
