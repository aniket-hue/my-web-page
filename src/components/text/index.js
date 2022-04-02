import "./text.scss";

export const Text = ({ color, type, fontWeight, fontSize, lineHeight, className, ...props }) => {
  const classes = `text text--${type} text--${color} ${className || ""}`;

  return (
    <p className={classes} style={{ fontWeight, fontSize, lineHeight }} {...props}>
      {props.children}
    </p>
  );
};
