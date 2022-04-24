import { ColorVariants } from "../../../../colors";
import { Shape, ShapeProps } from "../../../../components/shapes";

export const TimelineShapes: ShapeProps[] = [
  { type: Shape.RING, width: 200, color: ColorVariants.RAZORBLUE, position: { top: 30, left: 10 } },
  { type: Shape.RING, width: 60, color: ColorVariants.LIGHTYELLOW, position: { bottom: 40, right: 5 } },
  { type: Shape.RING, width: 40, color: ColorVariants.RAZORBLUE, position: { top: 9, left: 0 } },
  { type: Shape.SQUARE, width: 200, color: ColorVariants.DARKRAZORBLUE, position: { top: 0, right: 7 } },
  { type: Shape.SQUARE, width: 40, color: ColorVariants.LIGHTVIOLET, position: { top: 10, right: 40 } },
  { type: Shape.SQUARE, width: 30, color: ColorVariants.LIGHTGREEN, position: { left: 30, bottom: 10 } },
  { type: Shape.HEXAGON, width: 60, color: ColorVariants.RAZORBLUE, position: { right: 40, bottom: 10 } },
  { type: Shape.HEXAGON, width: 50, color: ColorVariants.DARKRAZORBLUE, position: { top: 2, left: 40 } },
  { type: Shape.TRIANGLE, width: 100, color: ColorVariants.DARKRAZORBLUE, position: { bottom: 0, left: 0 } },
  { type: Shape.TRIANGLE, width: 100, color: ColorVariants.DARKRAZORBLUE, position: { bottom: 20, right: 30 } },
  { type: Shape.TRIANGLE, width: 40, color: ColorVariants.DARKRAZORBLUE, position: { top: 30, right: 10 } },
  { type: Shape.UPTRIANGLE, width: 40, color: ColorVariants.LIGHTGREEN, position: { top: 2, left: 10 } },
];
