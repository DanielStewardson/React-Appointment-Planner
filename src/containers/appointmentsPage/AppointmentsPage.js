import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import './appointmentsPage.css';

export const AppointmentsPage = ({ appointments, contacts, addAppointment, handleDelete }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   if (!title) {
    alert('Set a name for your appointment')
    return;
   } else if (!contact) {
    alert('Who is your appointment with?')
    return;
   } else if (!date || !time) {
    alert('When is your appointment?')
   } else {
    addAppointment(title, contact, date, time, body);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    setBody('');
    return;
   }

  };

  const childProps = {
    contacts,
    title, setTitle,
    contact, setContact,
    date, setDate,
    time, setTime,
    body, setBody,
    handleSubmit
  }

  const emptyMessage = 'Add an appointment';

  return (
    <div>
      <section className='add-appointment'>
        <h2>Add Appointment</h2>
        <AppointmentForm {...childProps} />
      </section>
      <hr />
      <section className='appointments-list'>
        <h2>Appointments</h2>
        <div className="appointments-tiles">
          <TileList data={appointments} emptyMessage={emptyMessage} handleDelete={handleDelete} />
        </div>
      </section>
    </div>
  );
};
