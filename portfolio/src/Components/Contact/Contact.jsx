import React from 'react'
import './contact.css'
import { ContactOptions } from './ContactOptions'
import { ContactForm } from './ContactForm'
export const Contact = () => {
  return (
    <div className='contact'>
        <ContactOptions/>
        <ContactForm/> 
    </div>
  )
}
