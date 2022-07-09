import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br/>
      <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>

      <label htmlFor="phone">UK Phone number:</label><br/>
      <input type='tel' id='phone' pattern='[0][0-9]{10}$' value={phone} onChange={(e) => setPhone(e.target.value)}></input>

      <label htmlFor="email">Email address:</label><br/>
      <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

      <input type='submit' value='Save contact'></input>
    </form>
  );
};
