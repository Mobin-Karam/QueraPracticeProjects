const Information = ({
  firstNameValue,
  lastNameValue,
  firstNameHandle,
  lastNameHandle,
}) => {
  return (
    <div className="form" data-testid="informations">
      <label htmlFor="firstName">First Name</label>
      <input
        data-testid="firstName"
        type="text"
        name="firstName"
        id="firstName"
        onChange={firstNameHandle}
        value={firstNameValue}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        data-testid="lastName"
        type="text"
        name="lastName"
        id="lastName"
        onChange={lastNameHandle}
        value={lastNameValue}
      />
    </div>
  );
};

export default Information;
