import React, { PropsWithChildren } from "react";
import { Container, ContainerProps } from "../container";
import { ShapeProps } from "../shapes";
import { ShapesBackdrop } from "../shapes-backdrop";

export const Section: React.FC<
  PropsWithChildren<{ shapes: ShapeProps[]; contentProps?: ContainerProps; containerProps?: ContainerProps }>
> = ({ shapes, children, contentProps, containerProps }) => {
  return (
    <Container className='h-100vh' position='relative' flexDirection='column' withScroll {...containerProps}>
      <Container
        width='60'
        margin='auto'
        flexDirection='column'
        zIndex={1}
        sm={{
          width: "100",
          padding: 4,
          margin: { top: 20 },
        }}
        {...contentProps}
      >
        {children}
      </Container>

      {shapes && <ShapesBackdrop shapes={shapes} />}
    </Container>
  );
};
