import "./button.scss";

export const Button = (props) => {
  const extraClass = props.classes || "";

  return (
    <div className={`d-in-flex align-center justify-center button ${extraClass}`} {...props}>
      {props.children}
    </div>
  );
};
