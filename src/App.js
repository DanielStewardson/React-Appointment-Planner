import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

 const [contacts, setContacts] = useState([
  {
    name: 'daniel s',
    phone: '07868695495',
    email: 'eamail@tmail.formail',
    notes: 'Need to add edit and delete buttons to the contact details component'
  },
  {
    name: 'johnny boy',
    phone: '09287654352',
    email: 'johboy@hotters.lol',
    notes: 'Also make the contact details component full screen modal under certain screen size'
  },
  {
    name: 'Windsor Hallifax',
    phone: '02938475647',
    email: 'youknow@here.com',
    notes: 'Set a max character value for notes or this could get silly.'
  },
  {
    name: 'john bob',
    phone: '09287654352',
    email: 'johboy@hotters.lol',
    notes: 'Pretty solid guy. John Bob gets the job done'
  },
  {
    name: 'Hallifax Don',
    phone: '02938475647',
    email: 'youknow@here.com',
    notes: 'I should set a max length for these notes'
  },
  {
    name: 'Troy duple',
    phone: '09287654352',
    email: 'johboy@hotters.lol',
    notes: 'Thinks hes great. Refers to himself as THE Troy from mytholigy. Not sure thats how you spell that but it does not matter at the moment.'
  },
  {
    name: 'Sarcy git',
    phone: '02938475647',
    email: 'youknow@here.com',
    notes: 'Really sarcastic person. Only good in small doses..'
  },
  {
    name: 'Blane Parting',
    phone: '09287654352',
    email: 'johboy@hotters.lol',
    notes: 'Bit annoying'
  },
  {
    name: 'Snoopy',
    phone: '02938475647',
    email: 'youknow@here.com',
    notes: 'Pretty solid guy'
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

  const addContact = (name, phone, email, notes) => {
    const contact = {
      name: name,
      phone: phone,
      email: email,
      notes: notes
    };
    setContacts(prev => [...prev, contact]);
  };

  const editContact = (name, newName, newPhone, newEmail, newNotes) => {
    const current = contacts;
    const contact = current.findIndex(contact => contact.name === name);
    current[contact] = {
      name: newName,
      phone: newPhone,
      email: newEmail,
      notes: newNotes
    }
    setContacts(current);
  };

  const removeContact = (name) => {
    setContacts(contacts.filter((contact) => contact.name !== name));
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

  // const removeAppointment = (id) => {
  //   setAppointments(appointments.filter((appointment, index) => index !== id));
  // }; 


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
            <ContactsPage contacts={contacts} addContact={addContact} removeContact={removeContact} editContact={editContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
