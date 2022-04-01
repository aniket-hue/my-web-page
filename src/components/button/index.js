import "./button.scss";

export const Button = ({ className, ...props }) => {
  console.log(className);
  return (
    <div className={`d-in-flex align-center justify-center button ${className}`} {...props}>
      {props.children}
    </div>
  );
};
