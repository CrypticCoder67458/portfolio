import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
export const ContactOptions = () => {
  const contactOption=[
    {
      element:<AiOutlineMail size={25}/> ,
      title:"Email",
      text:"N8v9o@example.com",
    },
    {
      element:<FaWhatsapp  size={25}/> ,
      title:"Whatsapp",
      text:"999-888-777",
    }
  
  ]
  return (
    <div className='contact-options'>
        <h2 className='section-title'>Talk to me</h2>
        <div className='contact-options-container'>
            {contactOption.map((contact)=>{return <div className='contact-option'>
                {contact.element}
                <h3>{contact.title}</h3>
                <p>{contact.text}</p>
                <div className='write-me zoom-effect'>Write me <FaArrowRightLong size={16}/> </div>

            </div>
          })}
        </div>
    </div>
    )
  
}
