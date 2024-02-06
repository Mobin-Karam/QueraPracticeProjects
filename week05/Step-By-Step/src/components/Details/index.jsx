const Details = ({ genderHandle, phoneHandle, phone, gender }) => {
  return (
    <div className="form" data-testid="details">
      <label htmlFor="phone">Phone</label>
      <input
        data-testid="phone"
        type="number"
        name="phone"
        id="phone"
        value={phone}
        onChange={phoneHandle}
      />
      <label htmlFor="gender">Gender</label>
      <select
        data-testid="gender"
        name="gender"
        id="gender"
        value={gender}
        onChange={genderHandle}
      >
        <option value="" className="select__item" disabled>
          select your gender
        </option>
        <option value="Male" className="select__item">
          Male
        </option>
        <option value="Female" className="select__item">
          Female
        </option>
      </select>
    </div>
  );
};

export default Details;
