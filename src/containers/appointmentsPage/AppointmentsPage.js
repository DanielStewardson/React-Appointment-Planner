import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

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
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    return;
   }

  };

  const childProps = {
    contacts,
    title, setTitle,
    contact, setContact,
    date, setDate,
    time, setTime,
    handleSubmit
  }

  const emptyMessage = 'Add an appointment';

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...childProps} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} emptyMessage={emptyMessage} />
      </section>
    </div>
  );
};
