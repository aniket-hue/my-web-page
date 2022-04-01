import { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import "./contact-form.scss";

export const ContactForm = () => {
  const [formD, setForm] = useState(null);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm((v) => ({ ...v, [name]: v }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-450px'>
      <form onSubmit={submitHandler} className='d-flex column gap-12'>
        <Input name='name' type='text' placeholder='Enter name' onChange={inputHandler} />
        <Input name='email' type='text' placeholder='Enter e-mail' onChange={inputHandler} />
        <Input name='mess' type='textarea' placeholder='Enter any message if you want' onChange={inputHandler} />
        <Button type='submit' className='w-140px mt-30'>
          fire it away
        </Button>
      </form>
    </div>
  );
};
