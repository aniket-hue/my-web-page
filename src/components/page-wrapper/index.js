import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export const PageWrapper = ({ className, ...props }) => {
  const containerRef = useRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
  }, []);

  return (
    <div ref={containerRef} className={`page-wrapper`} data-scroll-container>
      {props.children}
    </div>
  );
};
