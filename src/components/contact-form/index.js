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
    <div className='w-pct-100'>
      <form onSubmit={submitHandler} className='form d-flex column gap-12'>
        <Input className="input" name='name' type='text' placeholder='Enter name' onChange={inputHandler} />
        <Input className="input" name='email' type='text' placeholder='Enter e-mail' onChange={inputHandler} />
        <Input className="input" name='mess' type='textarea' placeholder='Enter any message if you want' onChange={inputHandler} />
        <Button type='submit' className='mt-30'>
          Click to send
        </Button>
      </form>
    </div>
  );
};
