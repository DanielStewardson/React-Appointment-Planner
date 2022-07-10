import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  body, 
  setBody,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div className='appointment-form-container'>
      <form className='appointment-form' id='appointmentForm' onSubmit={handleSubmit}>
        <label htmlFor="title">Appointment title:</label><br/>
        <input type='text' value={title} id='title' onChange={(e) => setTitle(e.target.value)}></input>

        <label htmlFor="date">Date:</label><br/>
        <input type='date' value={date} id='date' min={getTodayString()} onChange={(e) => setDate(e.target.value)}></input>

        <label htmlFor="time">Time:</label><br/>
        <input type='time' value={time} id='time' onChange={(e) => setTime(e.target.value)}></input>

        <ContactPicker contacts={contacts} setContact={setContact} contact={contact} />

        <input type='submit' value='Add appointment'></input>
      </form>

      <textarea 
        className='appointment-text-area' 
        form='appointmentForm' 
        rows='15' cols='50' 
        placeholder="Notes:"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
    </div>
  );
};