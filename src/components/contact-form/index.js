import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

import { Button } from "../button";
import { Input } from "../input";
import "./contact-form.scss";

export const ContactForm = () => {
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_i4acqgn', 'template_7ieo3fq', form.current, 'WPPYjsoCyMQvm3HTj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='w-pct-100'>
      <form ref={form} onSubmit={submitHandler} className='form d-flex column gap-12'>
        <Input className="input" name='name' type='text' placeholder='Enter name' />
        <Input className="input" name='email' type='text' placeholder='Enter e-mail' />
        <Input className="input" name='mess' type='textarea' placeholder='Enter any message if you want' />
        <Button type='submit' className='mt-30'>
          Click to send
        </Button>
      </form>
    </div >
  );
};
