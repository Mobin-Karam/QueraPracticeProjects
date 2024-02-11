import "./App.css";
import Information from "./components/Informations";
import Details from "./components/Details";
import Summary from "./components/Summary";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  // TODO declate step state using useState
  let [step, setStep] = useState(0);

  // TODO declare formValues state using useState
  const formValues = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    gender: gender,
  };

  // TODO handleChangeValues function
  // Next Step
  function nextStep() {
    setStep((step + 1) % 3);
    // if (step === 2) setStep((step = 2));
  }
  // Prev Step
  function prevStep() {
    setStep((step - 1 + 3) % 3);
    // if (step === 0) setStep((step = 0));
  }

  // Save Value
  function firstNameHandle(event) {
    setFirstName(event.target.value);
  }
  function lastNameHandle(event) {
    setLastName(event.target.value);
  }

  function genderHandle(event) {
    setGender(event.target.value);
  }
  function phoneHandle(event) {
    setPhone(event.target.value);
  }

  // Delete Value
  function deleteValueHandle() {}

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <div className="card__header-item current-step"> Informations</div>
          <div
            className={
              step !== 0
                ? "card__header-item current-step"
                : " card__header-item"
            }
          >
            Details
          </div>
          <div
            className={
              step === 2
                ? "card__header-item current-step"
                : " card__header-item"
            }
          >
            Summary
          </div>
        </div>
        <div className="card__body">
          {step === 0 ? (
            <Information
              firstNameValue={firstName}
              lastNameValue={lastName}
              firstNameHandle={firstNameHandle}
              lastNameHandle={lastNameHandle}
            />
          ) : step === 1 ? (
            <Details
              genderHandle={genderHandle}
              phoneHandle={phoneHandle}
              phone={phone}
              gender={gender}
            />
          ) : (
            <Summary formValues={formValues} />
          )}
        </div>
        <div className="card__footer">
          <button
            className="btn-prev"
            /* button disabled on specefic status & onClick event */
            onClick={prevStep}
            onChange={(firstNameHandle, lastNameHandle)}
            disabled={step === 0 ? true : false}
          >
            prev
          </button>
          <button
            className="btn-next"
            /* button disabled on specefic status & onClick event */
            onClick={nextStep}
            onChange={deleteValueHandle}
            disabled={step === 2 ? true : false}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
