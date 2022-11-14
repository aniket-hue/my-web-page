import React from "react";

import "./header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from "../button";
import { Container } from "../container";
import { forwardRef } from "react";

export const Header:React.FC<any> = forwardRef((props, ref) => {
  return (
    <Container alignItems='center' justifyContent='space-between' ref={ref as any} margin={{ x: "auto" }}>
      <Logo height={100} width={100} />

      <Container gap={3}>
        <Button>about</Button>
        <Button>projects</Button>
        <Button>timeline</Button>
      </Container>
    </Container>
  );
});
