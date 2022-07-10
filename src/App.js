import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([
  {
    name: 'daniel s',
    phone: '07868695495',
    email: 'eamail@tmail.formail'
  },
  {
    name: 'johnny boy',
    phone: '09287654352',
    email: 'johboy@hotters.lol'
  },
  {
    name: 'Windsor Hallifax',
    phone: '02938475647',
    email: 'youknow@here.com'
  },
  {
    name: 'johnny boy',
    phone: '09287654352',
    email: 'johboy@hotters.lol'
  },
  {
    name: 'Windsor Hallifax',
    phone: '02938475647',
    email: 'youknow@here.com'
  },
  {
    name: 'johnny boy',
    phone: '09287654352',
    email: 'johboy@hotters.lol'
  },
  {
    name: 'Windsor Hallifax',
    phone: '02938475647',
    email: 'youknow@here.com'
  },
  {
    name: 'johnny boy',
    phone: '09287654352',
    email: 'johboy@hotters.lol'
  },
  {
    name: 'Windsor Hallifax',
    phone: '02938475647',
    email: 'youknow@here.com'
  }
 ]);
 const [appointments, setAppointments] = useState([
  {
    title: 'Walk the dog',
    contact: 'Windsor Hallifax',
    date: '2022-06-21',
    time: '06:20'
  },
  {
    title: 'Walk the goldfish',
    contact: 'johnny boy',
    date: '2022-06-21',
    time: '06:20'
  },
  {
    title: 'Walk the iguana',
    contact: 'johnny boy',
    date: '2022-06-21',
    time: '06:20'
  },
  {
    title: 'Walk the panda bear',
    contact: 'Windsor Hallifax',
    date: '2022-06-21',
    time: '06:20'
  }
 ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const contact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts(prev => [...prev, contact]);
  };
  //Add key to all state for delete button?

  const removeContact = (id) => {
    setContacts(contacts.filter((contact, index) => index !== id));
  }; 

  const addAppointment = (title, contact, date, time, body) => {
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
      body: body
    };
    setAppointments(prev => [...prev, appointment]);
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter((appointment, index) => index !== id));
  }; 


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} handleDelete={removeContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} handleDelete={removeAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
