import React from "react";

const Contact = ({
  firstName,
  lastName,
  id,
  city,
  email,
  checked,
  onChangeHandle,
}) => {
  return (
    <div className="contacts-list__item">
      <div>
        <h2>First Name: {firstName} </h2>
        <h2>Last Name: {lastName} </h2>
      </div>

      <div>
        <span className="email"> {email} </span>
      </div>

      <div>
        <p>City: {city} </p>
        <input
          type="checkbox"
          value={id}
          checked={checked}
          onChange={onChangeHandle}
        />
      </div>
    </div>
  );
};

export default Contact;
