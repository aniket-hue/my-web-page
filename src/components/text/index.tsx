import React, { PropsWithChildren } from "react";

import s from "./text.module.scss";

import { cx } from "../../utils/helpers";
import { ColorVariants } from "../../colors";

export enum FontType {
  H1_TEXT_BOLD = "H1_TEXT_BOLD",
  H2_TEXT_BOLD = "H2_TEXT_BOLD",
  H2_TEXT_REGULAR = "H2_TEXT_REGULAR",
  H3_TEXT_BOLD = "H3_TEXT_BOLD",
  H3_TEXT_REGULAR = "H3_TEXT_REGULAR",
  TITLE_TEXT_1_SEMIBOLD = "TITLE_TEXT_1_SEMIBOLD",
  TITLE_TEXT_2_SEMIBOLD = "TITLE_TEXT_2_SEMIBOLD",
  TITLE_TEXT_3_SEMIBOLD = "TITLE_TEXT_3_SEMIBOLD",
  TITLE_TEXT_4_SEMIBOLD = "TITLE_TEXT_4_SEMIBOLD",
  TITLE_TEXT_5_SEMIBOLD = "TITLE_TEXT_5_SEMIBOLD",
  SUB_TITLE_TEXT_SEMIBOLD = "SUB_TITLE_TEXT_SEMIBOLD",
  SUB_TITLE_TEXT_MEDIUM = "SUB_TITLE_TEXT_MEDIUM",
  BODY_TEXT_1_MEDIUM = "BODY_TEXT_1_MEDIUM",
  BODY_TEXT_SEMIBOLD = "BODY_TEXT_SEMIBOLD",
  LINK_TEXT_1_SEMIBOLD = "LINK_TEXT_1_SEMIBOLD",
  DESCRIPTION_TEXT_MEDIUM = "DESCRIPTION_TEXT_MEDIUM",
  DESCRIPTION_TEXT_REGULAR = "DESCRIPTION_TEXT_REGULAR",
  DESCRIPTION_TEXT_BOLD = "DESCRIPTION_TEXT_BOLD",
  LABEL_TEXT_MEDIUM = "LABEL_TEXT_MEDIUM",
  LABEL_TEXT_2_BOLD = "LABEL_TEXT_2_BOLD",
  CAPTION_TEXT__REGULAR_SMALL = "CAPTION_TEXT_REGULAR_SMALL",
  CAPTION_TEXT_REGULAR_LARGE = "CAPTION_TEXT_REGULAR_LARGE",
  BASE_TEXT_REGULAR = "BASE_TEXT_REGULAR",
  BASE_TEXT_2_BOLD = "BASE_TEXT_2_BOLD",
  BASE_TEXT_MEDIUM = "BASE_TEXT_MEDIUM",
  BASE_TEXT_BOLD = "BASE_TEXT_BOLD",
  H3_SEMIBOLD = "H3_SEMIBOLD",
}

type TagType = keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label">;

export type TextProps = {
  type?: TagType;
  font?: FontType;
  mobileFont?: FontType;
  color?: ColorVariants;
  style?: React.CSSProperties;
  className?: string;
  fontSize?: number;
  weight?: number;
  lineHeight?: number;
  htmlFor?: string;
  isTranslate?: boolean;
  lang?: any;
  onClick?: (e: any) => void;
};

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  type: Element = "p",
  font = FontType.TITLE_TEXT_1_SEMIBOLD,
  weight: fontWeight,
  lineHeight,
  fontSize,
  className = "",
  children,
  onClick,
  htmlFor,
  style,
  color,
  mobileFont,
}) => (
  <Element
    className={cx(className, "text", s[`text__${font}`], s[`text__${color}`], s[`text__mobile_${mobileFont}`])}
    onClick={onClick}
    htmlFor={htmlFor}
    style={{
      ...style,
      fontSize: fontSize + "px",
      lineHeight: lineHeight + "px",
      fontWeight,
    }}
  >
    {children}
  </Element>
);
