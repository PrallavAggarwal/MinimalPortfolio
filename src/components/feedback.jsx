import { useState } from "react";
import { useRef } from "react";
import { Loader } from "./loader";
import emailjs from '@emailjs/browser';

const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;
const TEMPLATE_ID_2 = import.meta.env.VITE_TEMPLATE_ID_2;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;


export function Feedback() {

  const form = useRef();
  const [isLoad, setLoad] = useState(false)

  const [isSent, setSent] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {

      let response = await emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID_2, form.current, {
          publicKey: PUBLIC_ID,
        });

      console.log('response : ', response)

      if (response.text == 'OK') {
        console.log('SUCCESS!');
        setSent(true)
        alert('Thanks for FEEDBACK. Really Appreciated. :)')
      }

    } catch (error) {
      console.log('FAILED...', error);
      alert('Failed to send email.')
      setSent(false)

    }

    setLoad(false)
  };


  return (
    <div className="w-full h-auto border border-white rounded-2xl p-5">
      {
        isLoad && <div className='w-4/5 mx-auto flex items-center justify-center p-5 gap-4 bg-gray-400/30 backdrop-blur-sm italic h-auto border border-white text-white rounded-2xl'><Loader /></div>
      }
      {
        !isLoad && !isSent &&
        <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col p-5 gap-4 bg-gray-400/30 backdrop-blur-sm font-display italic h-auto border border-white text-white rounded-2xl'>
          <label>Feedback</label>
          <textarea required name="message" placeholder='Write your valueable feedback...' className='p-5 scroll-auto' />
          <input type="submit" value="Send" className='hover:inset-ring-1 sm:mx-auto transition-all ease-in-out hover:bg-white hover:text-black cursor-pointer duration-300 hover:ring-white rounded-2xl sm:w-1/4 py-1 hover:font-semibold' />
        </form>
      }
      {
        isSent && <div className="w-full h-auto font-display font-semibold italic text-center p-2">Thanks for your feedback.</div>
      }

    </div>
  )
}
