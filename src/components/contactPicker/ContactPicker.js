import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <>
      <label htmlFor='contacts'>Contact:</label>
      <select id='contacts' onChange={(e) => setContact(e.target.value)}>
        <option key='default' defaultValue='' disabled>Select contact details</option>

          {contacts.map((contact, index) => {
            return (
              <option key={contact.name} value={contact.name}>{contact.name}</option>
            )
          })}

      </select>
    </>
  );
};