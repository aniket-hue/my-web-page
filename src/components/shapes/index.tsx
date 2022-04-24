import React, { CSSProperties, useMemo } from "react";

import "./shapes.scss";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
import { ReactComponent as Ring } from "../../assets/ring.svg";
import { ReactComponent as Hexagon } from "../../assets/hexagon.svg";
import { ReactComponent as Square } from "../../assets/ringSquare.svg";
import { ReactComponent as Cube } from "../../assets/cube.svg";
import { ReactComponent as UpTriangle } from "../../assets/upsideTriangle.svg";
import { ColorVariants } from "../../colors";

export enum Shape {
  SQUARE = "square",
  HEXAGON = "hexagon",
  RING = "ring",
  CUBE = "cube",
  TRIANGLE = "triangle",
  UPTRIANGLE = "uptriangle",
}

const Icons: { [key in Shape]: any } = {
  [Shape.SQUARE]: Square,
  [Shape.HEXAGON]: Hexagon,
  [Shape.RING]: Ring,
  [Shape.CUBE]: Cube,
  [Shape.TRIANGLE]: Triangle,
  [Shape.UPTRIANGLE]: UpTriangle,
};

export type ShapeProps = {
  type: Shape;
  width: number;
  color: ColorVariants;
  position: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  rotate?: number;
};

export const Shapes: React.FC<ShapeProps> = (props) => {
  const { color, type, width, rotate } = props;

  const Shape = Icons[type];

  const styles: CSSProperties = useMemo(() => {
    const position = Object.entries(props.position)
      .filter(([k, v]) => v !== undefined)
      .reduce((p, [k, v]) => {
        p[k] = v + "%";

        return p;
      }, {} as any);

    return {
      ...position,
      position: "absolute",
      transform: `rotate(${rotate}deg)`,
    };
  }, [props]);

  return (
    <>
      <div className={`svg-color-${color}`} style={styles}>
        <Shape width={width} fill={color} stroke={color} />
      </div>
    </>
  );
};
