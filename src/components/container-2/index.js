import { useEffect } from "react";

export const Container2 = (props) => {
  return (
    <div style={{ zIndex: -1 }} className='p-relative w-100pct moveUpDown'>
      <div>{props.children}</div>
    </div>
  );
};
