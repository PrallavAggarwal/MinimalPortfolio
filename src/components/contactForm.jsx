import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AppContext } from '../AppContext';
import { Loader } from './loader';

const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;

export const ContactForm = () => {
  const form = useRef();
  const user_name = useRef();
  const user_email = useRef();
  const { isLoading, setLoading, setActive } = useContext(AppContext)

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('form data : ', form.current)

      let response = await emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_ID,
        });

      console.log('response : ', response)

      if (response.text == 'OK') {
        console.log('SUCCESS!');
        setActive(false);
        alert('Thanks for contacting. Really Appreciated. :)')
      }

    } catch (error) {
      console.log('FAILED...', error.text);
      alert('Failed to send email.')

    }

    setLoading(false)
  };

  return (
    <>
      {
        isLoading && <div className='w-4/5 flex justify-center items-center p-5 gap-4 bg-gray-400/30 backdrop-blur-sm h-auto border border-white rounded-2xl'><Loader /></div>
      }
      {
        !isLoading &&
        <form ref={form} onSubmit={sendEmail} className='w-4/5 flex flex-col p-5 gap-4 bg-gray-400/30 backdrop-blur-sm font-display italic h-auto border border-white text-white rounded-2xl'>
          <label>Name</label>
          <input required type="text" ref={user_name} name="user_name" className='p-2.5 text-start border rounded-2xl' placeholder='Write your lovely Name...' />
          <label>Email</label>
          <input required type="email" name="user_email" ref={user_email} className='p-2.5 text-start border rounded-2xl' placeholder='Write your amazing email...' />
          <label>Message</label>
          <textarea required name="message" placeholder='Write your valueable feedback...' className='p-5' />
          <input type="submit" value="Send" className='hover:inset-ring-1 sm:mx-auto transition-all ease-in-out hover:bg-white hover:text-black cursor-pointer duration-300 hover:ring-white rounded-2xl sm:w-1/4 py-1 hover:font-semibold' />
        </form>
      }
    </>
  );
};
