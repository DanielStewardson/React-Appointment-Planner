import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink, useLocation } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { Header } from './components/pageHeaders/header';

function App() {

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const breakpoint = 820;
  const [contacts, setContacts] = useState([
    {
      name: 'Daniel S',
      phone: '07868695495',
      email: 'eamail@tmail.formail',
      notes: 'Need to add edit and delete buttons to the contact details component'
    },
    {
      name: 'Johnny Boy',
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
      name: 'John Bob',
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
      name: 'Troy Duple',
      phone: '09287654352',
      email: 'johboy@hotters.lol',
      notes: 'Thinks hes great. Refers to himself as THE Troy from mytholigy. Not sure thats how you spell that but it does not matter at the moment.'
    },
    {
      name: 'Sarcy Git',
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
      date: '2022-06-20',
      time: '06:20',
      notes: 'None yet'
    },
    {
      title: 'Walk the goldfish',
      contact: 'johnny boy',
      date: '2022-06-21',
      time: '06:20',
      notes: 'None yet'
    },
    {
      title: 'Walk the iguana',
      contact: 'johnny boy',
      date: '2022-06-21',
      time: '06:20',
      notes: 'None yet'
    },
    {
      title: 'Walk the panda bear',
      contact: 'Windsor Hallifax',
      date: '2022-06-22',
      time: '06:20',
      notes: 'None yet'
    }
  ]);

  const location = useLocation();
  const pathName = location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  // --------------------------- Set current screen size state
  useEffect(() => {
    const handleResizeWindow = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  // --------------------------------- Alphabetize stored details
  useEffect(() => {
    contacts.sort((a, b) => a.name.localeCompare(b.name))
    appointments.sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)));
  }, [appointments, contacts]);

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
    setContacts(current.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const removeContact = (name) => {
    setContacts(contacts.filter((contact) => contact.name !== name));
  }; 

  // ---------------------------------------------------- Appointment functions
  const addAppointment = (title, contact, date, time, notes) => {
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
      notes: notes
    };
    setAppointments(prev => [...prev, appointment].sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date))));
  };

  const editAppointment = (title, newTitle, newContact, newDate, newTime, newNotes) => {
    const current = appointments;
    const appointment = current.findIndex(appointment => appointment.title === title);
    current[appointment] = {
      title: newTitle,
      contact: newContact,
      date: newDate,
      time: newTime,
      notes: newNotes
    }
    setAppointments(current.sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date))));
  };

  const removeAppointment = (name) => {
    setAppointments(appointments.filter((appointment) => appointment.title !== name));
  }; 

  return (
    <>
      <div className="bg"></div>
      <nav className="nav-bar">
        <NavLink to={ROUTES.CONTACTS} className="navLink" activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} className="navLink" activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <Header pageName={pathName} />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts} 
              addContact={addContact} 
              removeContact={removeContact} 
              editContact={editContact} 
              screenSize={screenSize} 
              breakpoint={breakpoint} 
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments} 
              contacts={contacts} 
              addAppointment={addAppointment} 
              editAppointment={editAppointment}
              removeAppointment={removeAppointment}
              screenSize={screenSize} 
              breakpoint={breakpoint} 
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;