import React from "react";

const Contact = ({
  id,
  firstName,
  lastName,
  email,
  city,
  checkboxHandler,
  checked,
  // onClickHandle,
}) => {
  
  return (
    <div className="contacts-list__item">
      <div>
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
      </div>

      <div>
        <span className="email">{email}</span>
      </div>

      <div>
        <p>City: {city}</p>
        <input
          type="checkbox"
          value={id}
          checked={checked}
          onChange={checkboxHandler}
        />
      </div>
    </div>
  );
};

export default Contact;
