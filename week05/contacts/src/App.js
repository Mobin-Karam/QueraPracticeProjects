import React, { useState } from "react";
import Contact from "./components/Contact/Contact";

const initialValues = [
  {
    id: 1,
    first_name: "Kennie",
    last_name: "Garth",
    email: "kgarth0@ovh.net",
    city: "Megati Kelod",
  },
  {
    id: 2,
    first_name: "Free",
    last_name: "Eltringham",
    email: "feltringham1@weebly.com",
    city: "Haradzishcha",
  },
  {
    id: 3,
    first_name: "Isadore",
    last_name: "Valintine",
    email: "ivalintine2@issuu.com",
    city: "El Benque",
  },
  {
    id: 4,
    first_name: "Annora",
    last_name: "Neilus",
    email: "aneilus3@uol.com.br",
    city: "Uchaly",
  },
  {
    id: 5,
    first_name: "Tabbie",
    last_name: "Rizzini",
    email: "trizzini4@cpanel.net",
    city: "Pora",
  },
];

const App = () => {
  const [people, setPeople] = useState(initialValues);

  // Check Box Handler
  let checked;
  function checkboxHandler(event) {
    setPeople(
      people.map((person) =>
        person.id === parseInt(event.target.value, 10)
          ? { ...person, checked: event.target.checked }
          : person
      )
    );
  }

  function handleDeletePerson() {
    setPeople(people.filter((person) => !person.checked));
  }

  return (
    <div data-testid="app" className="app">
      {/* ----------------------------------left side------------------------------------- */}

      <section className="contacts-section">
        <div className="contacts-list">
          {people.map((person) => {
            return (
              <Contact
                key={person.id}
                id={person.id}
                firstName={person.first_name}
                lastName={person.last_name}
                email={person.email}
                city={person.city}
                checked={checked}
                onChangeHandle={checkboxHandler}
              />
            );
          })}
        </div>
      </section>

      {/* ----------------------------------right side------------------------------------- */}

      <section className="cta-section">
        <p className="text-2xl">Selected:</p>
        <p>
          {people.map((p) => {
            if (p.checked) return p.id;
            else return "";
          })}
        </p>
        <button className="cta" onClick={handleDeletePerson}>
          Delete Selected Items
        </button>
      </section>
    </div>
  );
};

export default App;
