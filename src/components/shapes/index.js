import "./shapes.scss";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
import { ReactComponent as Ring } from "../../assets/ring.svg";
import { ReactComponent as Hexagon } from "../../assets/hexagon.svg";
import { ReactComponent as Square } from "../../assets/ringSquare.svg";
import { ReactComponent as Cube } from "../../assets/cube.svg";
import { ReactComponent as UpTriangle } from "../../assets/upsideTriangle.svg";

const objType = {
  SQUARE: Square,
  HEXAGON: Hexagon,
  RING: Ring,
  CUBE: Cube,
  TRIANGLE: Triangle,
  UPTRIANGLE: UpTriangle,
};

export const Shapes = (props) => {
  const type = props.type || "Circle";
  const width = props.width;
  const color = props.color;
  const top = props.top;
  const right = props.right;
  const rotate = props.rotate;

  const Shape = objType[type];

  return (
    <>
      <div className={"p-absolute"} style={{ right, top }}>
        <Shape width={width} height={width} fill={color} stroke={color} rotate={rotate} />
      </div>
    </>
  );
};
