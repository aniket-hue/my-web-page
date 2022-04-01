import { forwardRef } from "react";

import "./header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from "../button";

export const Header = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='header-wrapper d-flex align-center justify-between w-50pct mh-auto'>
      <div>
        <Logo height={100} width={100} />
      </div>
      <div className='button-wrapper d-flex gap-12'>
        <Button>about</Button>
        <Button>projects</Button>
        <Button>timeline</Button>
      </div>
    </div>
  );
});
