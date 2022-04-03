import "./button.scss";

export const Button = ({ className, ...props }) => {
  return (
    <div className={`d-in-flex align-center justify-center button ${className}`} {...props}>
      {props.children}
    </div>
  );
};
