import { useState, useRef } from 'react';
import { validateEmail } from '@/utils/helpers';
import emailjs from '@emailjs/browser';
import Script from 'next/script';
import Layout from '@/components/layout';
import { useForm } from "react-hook-form";

function Form() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const form = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
   
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'user_email') {
      setEmail(inputValue);
    } else if (inputType === 'user_name') {
      setName(inputValue);
    } else if (inputType === 'user_phone') {
      setPhone(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      
      return;
     
    }
    if (!name) {
      setErrorMessage('Your name is required.');
      
      return;
     
    }
    if (!message) {
      setErrorMessage(
        `You must include a message.`
      );
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
    setPhone('');

    emailjs.sendForm('service_je04e99', 'template_vnx1xie', form.current, 'PPRbjM01Mlma3cxMc')
      .then((result) => {
          console.log(result.text);
          setErrorMessage(
            `Your message has been sent`
          );
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <Layout>
    <div className="col justify-center content-center self-center contactCont">
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form-group">
        <label htmlFor="user_name">*Name:</label>
        <input
          value={name}
          name="user_name"
          id="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name..."
        />
        </div>
        <div className="form-group">
        <label htmlFor="user_email">*Email:</label>
        <input
          value={email}
          name="user_email"
          id="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email..."
        />
        </div>
        <div className="form-group">
        <label htmlFor="user_phone">Phone (optional):</label>
        <input
          value={phone}
          name="user_phone"
          id="phone"
          onChange={handleInputChange}
          type="phone"
          placeholder="Phone Number..."
        />
        </div>
        <div className="form-group">
        <label htmlFor="message">*Mesage:</label>
        <textarea
          value={message}
          id="message"
          name="message"
          rows="4" 
          cols="30"
          onChange={handleInputChange}
          type="message"
          placeholder="Type your message here"
        />
        </div>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <p id="thanks">Thanks {name}!</p>
      <Script id="email" type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"/>
    <Script id="emailjs" type="text/javascript">
        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('PPRbjM01Mlma3cxMc')
        })()
    </Script>
    </div>
    </Layout>
  )
}

export default Form;
