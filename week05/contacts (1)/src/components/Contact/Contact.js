import React from "react";

const Contact = () => {
  return (
    <div className="contacts-list__item">
      <div>
        <h2>First Name: {/* first name */}</h2>
        <h2>Last Name: {/* last name */}</h2>
      </div>

      <div>
        <span className="email">{/* email */}</span>
      </div>

      <div>
        <p>City: {/* city */}</p>
        <input
          type="checkbox"
          // add needed props
        />
      </div>
    </div>
  );
};

export default Contact;
