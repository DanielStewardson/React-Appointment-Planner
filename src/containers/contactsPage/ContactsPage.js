import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from "../../components/tileList/TileList";
import { ContactDetails } from '../../components/contactDetails/ContactDetails';
import './contactsPage.css';

export const ContactsPage = ({ contacts, 
  addContact, 
  removeContact, 
  editContact, 
  screenSize, 
  breakpoint }) => {

 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [notes, setNotes] = useState('');
 const [duplicate, setDuplicate] = useState(false);
 const [showContact, setShowContact] = useState(false);
 const [contactDetails, setContactDetails] = useState('');
 const [editing, setEditing] = useState(false);
 const [showNewContact, setShowNewContact] = useState(false);
 const [showAddContact, setShowAddContact] = useState(false);

  //  ----------------------------- Check for duplicate contacts
  useEffect(() => {
    setDuplicate(false);
    if (contacts) {
      contacts.forEach(contact => {
        if (contact.name === name) {
          setDuplicate(true);
        }});
    };
  }, [name, contacts]);

  //  ----------------------------- Show new contact once added
  useEffect(() => {
    if (showNewContact) {
      showContactDetails(showNewContact);
      setShowNewContact(false);
    };
  }, [contacts, showNewContact, setShowNewContact]);

  const resetStates = () => {
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setShowAddContact(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Enter a contact name!');
      return;
    };
    if (!phone && !email) {
      alert('Enter a phone number or email!');
      return;   
    };
    if (editing && (!duplicate || editing === name)) {
      editContact(editing, name, phone, email, notes);
      showContactDetails(name);
      resetStates();
      setEditing(false);
      return;
    };
    if (!duplicate) {
      addContact(name, phone, email, notes);
      setShowNewContact(name);
      resetStates();
      return;
    };
    alert('Name already saved in contacts');
  };

  const handleAddContact = () => {
    setShowAddContact(true);
    setEditing(false);
  };

  const closeAddContact = () => {
    setShowAddContact(false);
  };

  const handleEditContact = (name) => {
    const contact = contacts.find(contact => contact.name === name);
    setEditing(name);
    setShowAddContact(true);
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
    setNotes(contact.notes);
  };

  const handleDelete = (name) => {
    removeContact(name);
    setShowContact(false);
    resetStates();
    setEditing(false);
  };

  const showContactDetails = (name) => {
    setContactDetails(contacts.find(contact => contact.name === name));
    setShowContact(true);
    setEditing(false);
  };

  const closeContactDetails = () => {
    setShowContact(false);
  };

  const childProps = {
    name, setName, 
    phone, setPhone,
    email, setEmail,
    notes, setNotes,
    editing,
    closeAddContact,
    handleSubmit
  };
  const tileProps = contacts.map(contact => contact.name);

  return (
    <div>
      {showAddContact &&
        <ContactForm {...childProps} />
      }
      <section className="contacts-page">
        <div className="contacts-page-contacts-container">
          
          <div className='contacts-list'>
            <div className='contacts-list-header'>
              <h3>Contacts</h3>
              <button className='add-contact-button' onClick={handleAddContact}>Add contact</button>
            </div>

            {contacts.length !== 0 
            ?
            <div className="contacts-tiles">
             <TileList data={tileProps} showDetails={showContactDetails} />
            </div>
           :
            <div className=" contacts-tiles-empty">
            </div>
            }
          </div>

          {screenSize < breakpoint
           ?
            showContact &&
              <div className="contacts-page-details absolute contacts-page-details-mobile">
                <ContactDetails 
                  contactDetails={contactDetails} 
                  handleDelete={handleDelete} 
                  handleEditContact={handleEditContact} 
                  closeContactDetails={closeContactDetails} 
                />
              </div>
           :
           <div className="contacts-page-details">
           { showContact ? 
            <ContactDetails 
              contactDetails={contactDetails} 
              handleDelete={handleDelete} 
              handleEditContact={handleEditContact} 
              closeContactDetails={closeContactDetails} 
            />
           :
             <div className="contact-details-filler-display">
               <button className='contact-details-button add' onClick={handleAddContact}>Add a contact</button>
             </div>
           }
            </div>
          }
          
        </div>
      </section>
    </div>
  );
};