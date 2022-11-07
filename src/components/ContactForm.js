import './ContactFormStyles.css'
import emailjs from 'emailjs-com'

import React from 'react'
// import {useState} from 'react'

const ContactForm = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_j3seq6s', 'template_3nankzo', e.target, 'p8m9fKT64FhXHzfZh').then(res=>
      console.log(res)
    ).catch(err => console.log(err))
    e.target.reset()
  }

//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
// })

  return <div className='form'>
    <form onSubmit={sendEmail}>
        <label>Tu nombre</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Asunto</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder='Escribi tu mensaje aqui' name="message"/>
        <button className='btn'>Submit</button>
    </form>
  </div>
}

export default ContactForm