import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!name) {
    alert('Enter a contact name!');
    return;
   }
   if (!phone && !email) {
    alert('Enter a phone number or email!');
    return;   
   }
   if (!duplicate) {
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
    return;
   } 
   alert('Name already saved in contacts');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts) {
      contacts.forEach(contact => {
        if (contact.name === name) {
          setDuplicate(true);
        } else {
          setDuplicate(false);
        }
      })
    }
  }, [name, contacts])

  const childProps = {
    name, setName, 
    phone, setPhone,
    email, setEmail,
    handleSubmit
  };

  const emptyMessage = 'Add a contact';

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm {...childProps} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} emptyMessage={emptyMessage} />
      </section>
    </div>
  );
};
