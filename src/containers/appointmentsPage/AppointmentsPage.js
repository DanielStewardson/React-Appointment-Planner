import React, { useState, useEffect } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentDetails } from "../../components/appointmentDetails/appointmentDetails";
import './appointmentsPage.css';

// ---------------------- Generate key for appointments for editing and deleting etc

export const AppointmentsPage = ({ 
  appointments, 
  contacts, 
  addAppointment, 
  removeAppointment,
  editAppointment,
  screenSize, 
  breakpoint }) => {
  
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState('');
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  //  ----------------------------- Show new appointment once added
  useEffect(() => {
    if (showNewAppointment) {
      showAppointmentDetails(showNewAppointment);
      setShowNewAppointment(false);
    };
  }, [appointments, showNewAppointment, showNewAppointment]);


  const resetStates = () => {
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    setNotes('');
    setShowAddAppointment(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   if (!title) {
    alert('Set a name for your appointment')
    return;
   } else if (!contact) {
    alert('Who is your appointment with?')
    return;
   } else if (!date || !time) {
    alert('When is your appointment?')
   } else if (editing) {
    editAppointment(editing, title, contact, date, time, notes);
    showAppointmentDetails(title);
    resetStates();
    setEditing(false);
    return;
   } else {
    addAppointment(title, contact, date, time, notes);
    setShowNewAppointment(title);
    resetStates();
    return;
   };
  };

  const handleAddAppointment = () => {
    setShowAddAppointment(true);
    setEditing(false);
  };

  const closeAddAppointment = () => {
    setShowAddAppointment(false);
  };

  const handleDelete = (name) => {
    removeAppointment(name);
    setShowAppointment(false);
    resetStates();
    setEditing(false);
  };

  const handleEditAppointment = (name) => {
    const appointment = appointments.find(appointment => appointment.title === name);
    setEditing(name);
    setShowAddAppointment(true);
    setTitle(appointment.title);
    setContact(appointment.contact);
    setDate(appointment.date);
    setTime(appointment.time);
    setNotes(appointment.notes);
  };

  const showAppointmentDetails = (name) => {
    setAppointmentDetails(appointments.find(appointment => appointment.title === name));
    setShowAppointment(true);
    setEditing(false);
  };


  const closeAppointmentDetails = () => {
    setShowAppointment(false);
  };

  const childProps = {
    contacts,
    title, setTitle,
    contact, setContact,
    date, setDate,
    time, setTime,
    notes, setNotes,
    editing,
    closeAddAppointment,
    handleSubmit
  };

  const tileData = appointments.map(appointment => (
    { 
     title: appointment.title, 
      date: appointment.date 
    }
  ));

  return (
    <div>
      {showAddAppointment &&
        <AppointmentForm {...childProps} />
      }
      <section className='appointments-page'>
        <div className="appointments-page-appointments-container">
          <div className='appointments-list'>
            <div className='appointments-list-header'>
              <h3>Appointments</h3>
              <button className='add-appointments-button' onClick={handleAddAppointment} >Add appointment</button>
            </div>

            {appointments.length !== 0 
            ?
            <div className="appointments-tiles">
              <TileList data={tileData} showDetails={showAppointmentDetails} />
            </div>
            :
            <div className="appointments-tiles-empty">
              Add appointments
            </div>
            }
          </div>

          {screenSize < breakpoint
           ?
           showAppointment &&
              <div className="appointment-page-details absolute appointment-page-details-mobile">
                <AppointmentDetails 
                  appointmentDetails={appointmentDetails} 
                  handleDelete={handleDelete} 
                  handleEditAppointment={handleEditAppointment} 
                  closeAppointmentDetails={closeAppointmentDetails} 
                />
              </div>
           :
           <div className="appointment-page-details">
           { showAppointment ? 
            <AppointmentDetails 
              appointmentDetails={appointmentDetails} 
              handleDelete={handleDelete} 
              handleEditAppointment={handleEditAppointment} 
              closeAppointmentDetails={closeAppointmentDetails} 
            />
           :
             <div className="appointment-details-filler-display">
               <button className='appointment-details-button add' onClick={handleAddAppointment}>Add appointment</button>
             </div>
           }
            </div>
          }
        </div>
      </section>

      <section>

      </section>
    </div>
  );
};