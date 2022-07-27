import React, { useState, useEffect } from "react";
import { Switch, Route,  NavLink, useLocation } from "react-router-dom";

import HomePage from "./containers/homePage/HomePage";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { Header } from './components/pageHeaders/header';
import Footer from "./components/footer/Footer";

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
      notes: 'None yet',
      key: '1'
    },
    {
      title: 'Walk the goldfish',
      contact: 'johnny boy',
      date: '2022-06-21',
      time: '06:20',
      notes: 'None yet',
      key: '2'
    },
    {
      title: 'Walk the iguana',
      contact: 'johnny boy',
      date: '2022-06-21',
      time: '06:20',
      notes: 'None yet',
      key: '3'
    },
    {
      title: 'Walk the panda bear',
      contact: 'Windsor Hallifax',
      date: '2022-06-22',
      time: '06:20',
      notes: 'None yet',
      key: '4'
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

  const editContact = (editing, newName, newPhone, newEmail, newNotes) => {
    const current = contacts;
    const contact = current.findIndex(contact => contact.name === editing);
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
  const addAppointment = (title, contact, date, time, notes, key) => {
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
      notes: notes,
      key: key
    };
    setAppointments(prev => [...prev, appointment].sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date))));
  };

  const editAppointment = (editing, newTitle, newContact, newDate, newTime, newNotes) => {
    const current = appointments;
    const appointment = current.findIndex(appointment => appointment.key === editing);
    current[appointment] = {
      ...current[appointment],
      title: newTitle,
      contact: newContact,
      date: newDate,
      time: newTime,
      notes: newNotes
    };
    setAppointments(current.sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date))));
  };

  const removeAppointment = (key) => {
    setAppointments(appointments.filter((appointment) => appointment.key !== key));
  }; 

  return (
    <div className="app-div">
      <div className="bg"></div>
      <div className="top-half">
        <nav className="nav-bar">
          <NavLink to='/' exact={true} className="navLink" activeClassName="active">
            Home
          </NavLink>
          <NavLink to={ROUTES.CONTACTS} className="navLink" activeClassName="active">
            Contacts
          </NavLink>
          <NavLink to={ROUTES.APPOINTMENTS} className="navLink" activeClassName="active">
            Appointments
          </NavLink>
        </nav>
        <header>
          <Header pageName={pathName} />
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              <HomePage />
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
      </div>

      <div className="bottom-half">
        <footer>
          <Footer />
        </footer>
      </div>

    </div>

  );
}

export default App;