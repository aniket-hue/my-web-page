import React from "react";
import { cx } from "../../utils/helpers";
import "./button.scss";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ className = "", ...props }) => {
  return (
    <button className={cx("d-in-flex", "align-center", "justify-center", "button", className)} {...props}>
      {props.children}
    </button>
  );
};
