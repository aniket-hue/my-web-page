import "./text.scss";

export const Text = ({
  color,
  type,
  fontWeight,
  fontSize,
  lineHeight,
  ...props
}) => {
  const className = `text text--${type} text--${color}`;
  return (
    <p
      className={className}
      style={{ fontWeight, fontSize, lineHeight }}
      {...props}
    >
      {props.children}
    </p>
  );
};
