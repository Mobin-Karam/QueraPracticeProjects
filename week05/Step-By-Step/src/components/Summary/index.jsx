const Summary = ({ formValues }) => {
  return (
    <div className="form" data-testid="summary">
      <p data-testid="firstName">First Name : {formValues.firstName}</p>
      <p data-testid="lastName">Last Name : {formValues.lastName}</p>
      <p data-testid="phone">Phone : {formValues.phone}</p>
      <p data-testid="gender">Gender : {formValues.gender}</p>
    </div>
  );
};

export default Summary;
