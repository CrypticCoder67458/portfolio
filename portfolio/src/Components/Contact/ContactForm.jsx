import React from 'react'
import { TbSend } from "react-icons/tb";
export const ContactForm = () => {
  return (
    <div>
      <h2 className='section-title'>Write me a message</h2>
      <form className='contact-form'>
        <div className='form-control'>
          <label>Name: </label>
          <input type="text"placeholder='write your name' />
        </div>
        <div className='form-control'>
          <label>Mail: </label>
          <input 
            type="email"
            placeholder='write your e-mail'
            name='email' />
        </div>
        <div className='form-control'>
          <label>message: </label>
          <textarea
            cols={50}
            rows={8}
            type="text"
            placeholder='write your message'
            name='message' />
        </div>
        <button>send the message <TbSend size={20} /></button>
      </form>
    </div>
  )
}
