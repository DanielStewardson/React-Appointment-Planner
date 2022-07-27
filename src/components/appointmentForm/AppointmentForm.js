import React, { useEffect } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
import'./appointmentForm.css';

export const AppointmentForm = ({
  contacts,
  title, setTitle,
  contact, setContact,
  date, setDate,
  time, setTime,
  notes, setNotes,
  editing,
  closeAddAppointment,
  handleSubmit
}) => {
  // --------------------------- Listen for Escape to close modal
  useEffect(() => {
    document.addEventListener('keydown', function esc(e) { 
      if (e.key === 'Escape') {
        closeAddAppointment()
        document.removeEventListener('keydown', esc);
      };
    });
  }, [closeAddAppointment]);

  // ----------------------------------------------------------Trying to disable scroll on modal 
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = '';
  }, []);

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const appointmentNotes = () => {
    const el = document.querySelector('.appointment-notes-container');
    if (el.style.display === 'none') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    };
  };

  const titleRegex = "[a-zA-Z0-9- .'!?:&£$@]{1,50}";

  return (
    <div className='modal-bg' onClick={closeAddAppointment}>
      <div className="add-appointment"  onClick={e => e.stopPropagation()}>
        <div className="add-appointment-header">
          <h3>{editing ? 'Edit appointment' : 'Add appointment'}</h3>
          <button className='close-item-button' onClick={closeAddAppointment}>  &#x2715;  </button>
        </div>
          <form className='appointment-form' id='appointmentForm' onSubmit={handleSubmit}>
            <label htmlFor="title">Appointment title:</label><br/>
            <input 
              type='text'
              id='title'
              autoComplete="new-password"
              maxLength='50' 
              pattern={titleRegex}
              required    
              value={title} 
              onChange={(e) => setTitle(e.target.value)}>
            </input><br/>

            <label htmlFor="date">Date:</label><br/>
            <input type='date' value={date} id='date' min={getTodayString()} onChange={(e) => setDate(e.target.value)}></input><br/>

            <label htmlFor="time">Time:</label><br/>
            <input type='time' value={time} id='time' onChange={(e) => setTime(e.target.value)}></input><br/>

            <ContactPicker contacts={contacts} setContact={setContact} contact={contact} />

            <div className="add-appointment-note-button-div">
              <button className='add-appointment-note-button' type='button' onClick={appointmentNotes}> 
                {editing ? 'Edit notes' : 'Add notes'}
              </button>
            </div>

            <input type='submit' value={editing ? 'Edit appointment' : 'Add appointment'}></input>
          </form>
          <div className='appointment-notes-container' style={{display:'none'}}>
            <div className="appointment-notes-header">
              <h3>Add a note</h3>
              <button className='close-item-button' type='button' onClick={appointmentNotes}> &#x2715; </button>
            </div>
            <div className="appointment-notes-area">
              <textarea 
                className="appointment-text-area"
                form='appointmentForm' 
                placeholder="Notes. Max 600 characters."
                maxLength="600"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}>
              </textarea>
            </div>
            <div className="appointment-notes-footer">
            <button className='close-appointment-note-button' type='button' onClick={appointmentNotes}> Add note </button>
            </div>
          </div>
      </div>
    </div>
  );
};