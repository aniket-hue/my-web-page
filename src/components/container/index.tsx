import React, { PropsWithChildren, CSSProperties, forwardRef, useRef, useContext } from "react";
import { useMemo } from "react";
import { ResizeContext } from "../../App";
import { ColorVariants } from "../../colors";
import { cx } from "../../utils/helpers";
import "./sections.scss";

export type Spacing =
  | {
      top?: number | "auto" | "unset";
      bottom?: number | "auto" | "unset";
      left?: number | "auto" | "unset";
      right?: number | "auto" | "unset";
      x?: number | "auto" | "unset";
      y?: number | "auto" | "unset";
    }
  | number
  | "auto"
  | "unset";

enum StyleNames {
  flex = "flex",
  position = "position",
  justifyContent = "justifyContent",
  alignItems = "alignItems",
  flexDirection = "flexDirection",
  flexWrap = "flexWrap",
  backgroundColor = "backgroundColor",
  padding = "padding",
  margin = "margin",
  width = "width",
  height = "height",
  gap = "gap",
  zIndex = "zIndex",
}

type Styles = {
  flex?: boolean;
  backgroundColor?: ColorVariants;
  padding?: Spacing;
  margin?: Spacing;
  position?: CSSProperties["position"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  gap?: CSSProperties["gap"];
  zIndex?: CSSProperties["zIndex"];
};

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren<
    Styles & {
      className?: string;
      withScroll?: boolean;
      ref?: React.Ref<HTMLDivElement>;
      sm?: Styles;
    }
  >;

const getSpacingClasses = (spacing: Spacing, type: "p" | "m") => {
  if (typeof spacing === "string" || typeof spacing === "number") {
    return [`${type}-${spacing}`];
  } else if (typeof spacing === "object") {
    let spaces = {
      left: spacing.x || spacing.left || 0,
      right: spacing.x || spacing.right || 0,
      top: spacing.y || spacing.top || 0,
      bottom: spacing.y || spacing.bottom || 0,
    };

    return Object.entries(spaces)
      .map(([k, v]) => {
        if (!v) {
          return undefined;
        }

        return `${type}-${k}-${v}`;
      })
      .filter(Boolean);
  } else {
    return [];
  }
};

export const Container: React.FC<ContainerProps> = forwardRef(({ withScroll = false, onClick, ...props }, ref) => {
  const { windowSize } = useContext(ResizeContext);
  const { style, className } = useMemo(() => {
    const style = windowSize >= 767 ? "l" : "sm";

    const getStyle = (k: keyof Styles) => {
      const { sm = {}, ...l } = props;

      if (style === "sm") {
        if (sm[k]) {
          return sm[k];
        } else {
          return l[k];
        }
      } else {
        return l[k];
      }
    };

    const styleKeys = Object.keys(StyleNames);

    const {
      flex = true,
      width = "100",
      flexWrap = "unset",
      zIndex = 1,
      padding,
      margin,
      gap,
      height,
      position,
      backgroundColor,
      flexDirection,
    } = styleKeys.reduce((p: any, c: any) => {
      p[c] = getStyle(c);

      return p;
    }, {});

    let paddingFinal: any = padding;
    let marginFinal: any = margin;

    const paddingClasses = getSpacingClasses(paddingFinal, "p");
    const marginClasses = getSpacingClasses(marginFinal, "m");

    return {
      className: cx(
        ...marginClasses,
        ...paddingClasses,
        flex ? "flex" : "block",
        gap ? `gap-${gap}` : undefined,
        position ? `${position}` : undefined,
        backgroundColor ? `bg-color-${backgroundColor}` : undefined,
        typeof width === "string" ? `width-pct-${+width / 10}` : width ? `width-px-${+width / 10}` : undefined,
        typeof height === "string" ? `height-pct-${+height / 10}` : height ? `height-px-${+height / 10}` : undefined,
        flexDirection ? flexDirection : undefined,
        flexWrap,
        props.className
      ),

      style: {
        zIndex,
        ...props.style,
      },
    };
  }, [props, windowSize]);

  const commonProps = useMemo(
    () => ({
      className,
      style,
      onClick,
      ref,
    }),
    [props]
  );

  return (
    <>
      {withScroll ? (
        <div data-scroll data-scroll-speed='0' {...commonProps}>
          {props.children}
        </div>
      ) : (
        <div {...commonProps}>{props.children}</div>
      )}
    </>
  );
});
