import React, { useEffect } from "react";
import './contactForm.css';

export const ContactForm = ({
  name, setName,
  phone, setPhone,
  email, setEmail,
  notes, setNotes,
  editing,
  closeAddContact,
  handleSubmit
}) => {
  // --------------------------- Listen for Escape to close modal
  useEffect(() => {
    document.addEventListener('keydown', function esc(e) { 
      if (e.key === 'Escape') {
        closeAddContact()
        document.removeEventListener('keydown', esc);
      };
    });
  }, [closeAddContact]);

  // ----------------------------------------------------------Trying to disable scroll on modal 
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = '';
  }, []);

  const contactNotes = () => {
    const el = document.querySelector('.contact-notes-container');
    if (el.style.display === 'none') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    };
  };

  const nameRegex = "[a-zA-Z0-9- .'!?]{1,50}";
  const phoneRegex = '[0-9-+ ()]{1,25}';

  return (
    <div className="modal-bg" onClick={closeAddContact} >
      <div className="add-contact"  onClick={e => e.stopPropagation()}>
        <div className="add-contact-header">
          <h3>{editing ? 'Edit contact details' : 'Add contact details'}</h3>
          <button className='close-item-button' onClick={closeAddContact}>  &#x2715;  </button>
        </div>
        <form className='contact-form' id='contactForm' onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br/>
          <input 
            type='text' 
            id='name'
            autoComplete="new-password"
            maxLength='50'
            placeholder='Special characters accepted ( - . &#8216; )'
            pattern={nameRegex}
            required
            value={name.split(' ').map(e => {
              return e.charAt(0).toUpperCase() + e.slice(1);
              }).join(' ')
            } 
            onChange={(e) => setName(e.target.value)}>
          </input>

          <label htmlFor="phone">Phone number:</label><br/>
          <input 
            type='tel' 
            id='phone'
            maxLength='25'
            placeholder='+44, (0), (-)'
            pattern={phoneRegex} 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}>
           </input>

          <label htmlFor="email">Email address:</label><br/>
          <input 
            type='email' 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}>
          </input>

          <div className="add-contact-note-button-div">
            <button className='add-contact-note-button' type='button' onClick={contactNotes}> 
              {editing ? 'Edit notes' : 'Add notes'}
            </button>
          </div>
          
          <input type='submit' value={editing ? 'Edit contact' : 'Save contact'}></input>
        </form>
        <div className='contact-notes-container' style={{display:'none'}}>
          <div className="contact-notes-header">
            <h3>Add a note</h3>
            <button className='close-item-button' type='button' onClick={contactNotes}> &#x2715; </button>
          </div>
          <div className="contact-notes-area">
            <textarea 
              className="contact-text-area"
              form='contactForm' 
              placeholder="Notes. Max 110 characters."
              maxLength="110"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}>
            </textarea>
          </div>
          <div className="contact-notes-footer">
           <button className='close-contact-note-button' type='button' onClick={contactNotes}> Add note </button>
          </div>
        </div>
      </div>
    </div>
  );
};