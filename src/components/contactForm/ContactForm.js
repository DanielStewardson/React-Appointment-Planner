import React from "react";
import './contactForm.css';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  notes, setNotes,
  editing,
  handleSubmit
}) => {
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br/>
      <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>

      <label htmlFor="phone">UK Phone number:</label><br/>
      <input type='tel' id='phone' pattern='[0][0-9]{10}$' value={phone} onChange={(e) => setPhone(e.target.value)}></input>

      <label htmlFor="email">Email address:</label><br/>
      <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

    {editing 
      ?     
        <input
          type='submit' 
          value='Edit contact'
          style={{background: 'hsl(97, 40%, 49%)'}}>
        </input>
      :
        <input 
          type='submit' 
          value='Save contact'
          style={{ background:' #03a8d8'}}>    
        </input>
    }
    </form>
  );
};