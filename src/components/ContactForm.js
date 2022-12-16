import './ContactFormStyles.css'
import emailjs from 'emailjs-com'

import React,{useState} from 'react'
// import {useState} from 'react'

const Result = () => {
  return(
    <p>Your message has been successfully sent. I wil contact you soon</p>
  )
}

const ContactForm = () => {
  const [result,setResult] = useState(false)
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_j3seq6s', 'template_yk83ahh', e.target, 'yxgYDFtOotdk62lre').then(res=>
      console.log(res)
    ).catch(err => console.log(err))
    e.target.reset()
    setResult(true)
  }

//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
// })

  return <div className='form'>
    <form onSubmit={sendEmail}>
        <label>Your name</label>
        <input type="text" name="from_name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder='Write your message' name="message"/>
        <button className='btn'>Submit</button>
        <div className='row'>{
          result ? <Result /> : null
        }
        </div>
    </form>
  </div>
}

export default ContactForm
