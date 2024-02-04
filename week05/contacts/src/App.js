import React, { useState } from "react";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [people, setPeople] = useState([
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
  ]);

  let checked;
  let listSelected = [];
  // document.addEventListener("DOMContentLoaded", () => {

  // });
  // console.log(checked);

  function checkboxHandler(checked, id) {
    let value = document.querySelectorAll("input").value;
    let values = [...value];
    if (checked) console.log("click");
    if (checked) {
      console.log(id);
      console.log(values);
    } else {
      console.log(listSelected);
    }
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
                firstName={person.first_name}
                lastName={person.last_name}
                email={person.email}
                city={person.city}
                checked={checked}
                checkboxHandler={checkboxHandler}
              />
            );
          })}
        </div>
      </section>

      {/* ----------------------------------right side------------------------------------- */}

      <section className="cta-section">
        <p className="text-2xl">Selected:</p>
        <p>
          {/* در این تگ باید شماره ی هر آیتم که کلید می شود رندر شود، به طور مثال: 1,2 */}
        </p>
        <button
          className="cta"
          // should trigger an event when clicked
        >
          Delete Selected Items
        </button>
      </section>
    </div>
  );
};

export default App;
