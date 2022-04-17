import "./button.scss";

export const Button = ({ className, ...props }) => {
  return (
    <button className={`d-in-flex align-center justify-center button ${className}`} {...props}>
      {props.children}
    </button>
  );
};
