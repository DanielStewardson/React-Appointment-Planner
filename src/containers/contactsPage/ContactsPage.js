import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from "../../components/tileList/TileList";
import { ContactDetails } from '../../components/contactDetails/ContactDetails';
import './contactsPage.css';

export const ContactsPage = ({ contacts, addContact, removeContact, editContact }) => {

 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [notes, setNotes] = useState('');
 const [duplicate, setDuplicate] = useState(false);
 const [showContact, setShowContact] = useState(false);
 const [contactDetails, setContactDetails] = useState('');
 const [editing, setEditing] = useState(false);

  useEffect(() => {
    setDuplicate(false);
    if (contacts) {
      contacts.forEach(contact => {
        if (contact.name === name) {
          setDuplicate(true);
        }});
    };
    // console.log('rendered');
  }, [name, contacts]);

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
      setName('');
      setPhone('');
      setEmail('');
      setNotes('');
      setEditing(false);
      return;
    };
    if (!duplicate) {
      addContact(name, phone, email, notes);
      // showContactDetails(name);   //why is this not working??
      setName('');
      setPhone('');
      setEmail('');
      setNotes('');
      return;
    };
    alert('Name already saved in contacts');
  };

  const handleEditContact = (name) => {
    const contact = contacts.find(contact => contact.name === name);
    setEditing(name);
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
    setNotes(contact.notes);
  };

  const handleDelete = (name) => {
    removeContact(name);
    setShowContact(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
  };

  const showContactDetails = (name) => {
    setContactDetails(contacts.find(contact => contact.name === name));
    setShowContact(true);
  };


  const childProps = {
    name, setName, 
    phone, setPhone,
    email, setEmail,
    notes, setNotes,
    handleSubmit
  };
  const tileProps = contacts.map(contact => contact.name);
  const emptyMessage = 'Add a contact';

  return (
    <div>
      <section className='add-contact'>
        <h2>Add Contact</h2> 
        <ContactForm {...childProps} />
      </section>
      <hr />
      <section className="contacts-page-contacts-container">
        <div className='contacts-list'>
          <h3>Contacts</h3>
          <div className="contacts-tiles">
            <TileList data={tileProps} emptyMessage={emptyMessage} showDetails={showContactDetails} />
          </div>
        </div>
        <div className="contacts-page-details">
          { showContact && 
           <ContactDetails contactDetails={contactDetails} handleDelete={handleDelete} handleEditContact={handleEditContact} />
          }
        </div>
      </section>
    </div>
  );
};

//pass func to tiles that will open modal with contact info, with edit, save and delete buttons