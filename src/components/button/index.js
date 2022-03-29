import "./button.scss";

export const Button = (props) => {
  return (
    <div className='d-flex align-center justify-center button' {...props}>
      {props.children}
    </div>
  );
};
