import React from "react";
import { cx } from "../../utils/helpers";
import { Container } from "../container";
import { ShapeProps, Shapes } from "../shapes";

import styles from "./shapes-backdrop.module.scss";

export const ShapesBackdrop: React.FC<{ shapes: ShapeProps[] }> = ({ shapes }) => {
  return (
    <Container
      style={{ top: 0, zIndex: -1 }}
      position='absolute'
      className={cx("h-100vh", "w-100pct", styles.moveUpDown)}
    >
      {shapes.map((e) => (
        <Shapes {...e} />
      ))}
    </Container>
  );
};
