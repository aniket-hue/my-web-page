import "./input.scss";

export const Input = (props) => {
  return (
    <>
      {props?.type === "text" ? (
        <input className='input h-60px' type='text' placeholder={props?.placeholder} onChange={props?.onChange} />
      ) : (
        <textarea className='input' rows={10} placeholder={props?.placeholder} onChange={props?.onChange} />
      )}
    </>
  );
};
