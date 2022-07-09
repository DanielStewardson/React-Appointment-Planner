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
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Appointment name:</label><br/>
      <input type='text' value={title} id='title' onChange={(e) => setTitle(e.target.value)}></input>

      <label htmlFor="date">Date:</label><br/>
      <input type='date' value={date} id='date' min={getTodayString()} onChange={(e) => setDate(e.target.value)}></input>

      <label htmlFor="time">Time:</label><br/>
      <input type='time' value={time} id='time' onChange={(e) => setTime(e.target.value)}></input>

      <ContactPicker contacts={contacts} setContact={setContact} />

      <input type='submit' value='Add appointment'></input>
    </form>
  );
};