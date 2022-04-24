import "./input.scss";
import React from "react";
import { Container } from "../container";

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      isError?: boolean;
      errorMessage?: string;
    }
> = (props) => {
  const { isError, errorMessage, ...rest } = props;
  return (
    <Container>
      {props?.type === "text" ? (
        <input className='input h-60px' type='text' {...rest} />
      ) : (
        <textarea className='input' {...rest} />
      )}

      {props?.isError && (
        <div className='error-box'>
          <p className='error-text'>{props?.errorMessage}</p>
          <div className='cover' />
        </div>
      )}
    </Container>
  );
};
