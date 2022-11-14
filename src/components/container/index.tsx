import React, { PropsWithChildren, CSSProperties, forwardRef, useRef } from "react";
import { useMemo } from "react";
import { ColorVariants } from "../../colors";
import { cx } from "../../utils/helpers";
import "./sections.scss";

export type Spacing =
  | {
      top?: number | "auto";
      bottom?: number | "auto";
      left?: number | "auto";
      right?: number | "auto";
      x?: number | "auto";
      y?: number | "auto";
    }
  | number
  | "auto";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren<{
    className?: string;
    flex?: boolean;
    withScroll?: boolean;
    position?: CSSProperties["position"];
    justifyContent?: CSSProperties["justifyContent"];
    alignItems?: CSSProperties["alignItems"];
    flexDirection?: CSSProperties["flexDirection"];
    flexWrap?: CSSProperties["flexWrap"];
    backgroundColor?: ColorVariants;
    padding?: Spacing;
    margin?: Spacing;
    width?: number | string;
    height?: number | string;
    gap?: number;
    zIndex?: number;
    ref?: React.Ref<HTMLDivElement>;
  }>;

export const Container: React.FC<ContainerProps> = forwardRef(({ withScroll = false, onClick, ...props }, ref) => {
  const { style, className } = useMemo(() => {
    const {
      padding,
      margin,
      gap,
      flex = true,
      width = "100%",
      height,
      position,
      backgroundColor,
      flexDirection,
      className,
      flexWrap = "unset",
      zIndex = 1,
    } = props;

    let paddingFinal: any = props.padding;
    let marginFinal: any = props.margin;

    if (typeof padding === "number") {
      paddingFinal = {
        padding: (props.padding as any) * 4,
      };
    } else if (typeof padding !== "string") {
      const { padding = {} } = props as any;

      paddingFinal = {
        paddingLeft: padding.x || padding.left || 0,
        paddingRight: padding.x || padding.right || 0,
        paddingTop: padding.y || padding.top || 0,
        paddingBottom: padding.y || padding.bottom || 0,
      };

      paddingFinal = Object.entries(paddingFinal).reduce((p, [k, v]) => {
        p[k] = (v as number) * 4;

        return p;
      }, {} as any);
    } else {
      paddingFinal = { padding };
    }

    if (typeof margin === "number") {
      marginFinal = {
        margin: (props.margin as any) * 4,
      };
    } else if (typeof margin !== "string") {
      const { margin = {} } = props as any;
      marginFinal = {
        marginLeft: margin.x || margin.left || 0,
        marginRight: margin.x || margin.right || 0,
        marginTop: margin.y || margin.top || 0,
        marginBottom: margin.y || margin.bottom || 0,
      };

      marginFinal = Object.entries(marginFinal).reduce((p, [k, v]) => {
        p[k] = (v as number) * 4;

        return p;
      }, {} as any);
    } else {
      marginFinal = { margin };
    }

    return {
      className: cx(
        className,
        flex ? "d-flex" : "d-block",
        `gap-${(gap || 0) * 4}`,
        typeof width === "string" ? width : `w-${width}px`,
        typeof height === "string" ? height : `w-${height}px`,
        `p-${position}`,
        `bg-color-${backgroundColor}`,
        flexDirection
      ),

      style: {
        ...paddingFinal,
        ...marginFinal,
        flexWrap,
        zIndex,
      },
    };
  }, [props]);

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
