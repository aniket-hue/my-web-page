import "./header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from "../button";

export const Header = (props) => {
  return (
    <>
      <Logo />
      <Button>about</Button>
      <Button>projects</Button>
    </>
  );
};
