import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AppContext } from '../AppContext';

const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;

export const ContactForm = () => {
  const form = useRef();
  const { setActive } = useContext(AppContext)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_ID,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setActive(false);
          alert('Thanks for contacting. Really Appreciated. :)')
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email.')
        },
      );
  };

  return (

    <form ref={form} onSubmit={sendEmail} className='w-1/2 flex flex-col p-5 gap-4 bg-gray-400/30 backdrop-blur-sm font-display italic h-auto border border-white text-white rounded-2xl'>
      <label>Name</label>
      <input type="text" name="user_name" className='p-2.5 text-start border rounded-2xl' placeholder='Write your lovely Name...' />
      <label>Email</label>
      <input type="email" name="user_email" className='p-2.5 text-start border rounded-2xl' placeholder='Write your amazing email...' />
      <label>Message</label>
      <textarea name="message" placeholder='Write your valueable feedback...' className='p-5' />
      <input type="submit" value="Send" className='hover:inset-ring-1 mx-auto transition-all ease-in-out hover:bg-white hover:text-black cursor-pointer duration-300 hover:ring-white rounded-2xl w-1/4 py-1 hover:font-semibold' />
    </form>
  );
};
