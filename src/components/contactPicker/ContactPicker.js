import React from "react";

export const ContactPicker = ({ contacts, contact, setContact }) => {
  return (
    <>
      <label htmlFor='contacts'>Contact:</label>
      <select id='contacts' value={contact} onChange={(e) => setContact(e.target.value)}>
        <option>Select contact details</option>
          {contacts.map((contact) => {
            return (
              <option key={contact.name} value={contact.name}>{contact.name}</option>
            )
          })}
      </select>
    </>
  );
};