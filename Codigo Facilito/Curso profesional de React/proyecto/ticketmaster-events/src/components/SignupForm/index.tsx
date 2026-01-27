import { useState, type ButtonHTMLAttributes } from "react";
import React from "react";

const SignupForm = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handlerClearClick = () => {
    setName("");
    setAge(0);
    setZipcode("");
    setPhone("");
    setAddress("");
  };

  const handlerSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("submit", {
      name,
      age,
      zipcode,
      phone,
      address,
    });
  };

  return (
    <form onSubmit={handlerSubmitForm}>
      <label>
        Name
        <input
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Age
        <input
          value={age}
          onChange={(evt) => setAge(parseInt(evt.target.value))}
          required
        />
      </label>
      <br />
      <label>
        Address
        <input
          value={address}
          onChange={(evt) => setAddress(evt.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Zipcode
        <input
          value={zipcode}
          onChange={(evt) => setZipcode(evt.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone
        <input
          value={phone}
          onChange={(evt) => setPhone(evt.target.value)}
          required
        />
      </label>
      <br />
      <div>
        <button type="button" onClick={handlerClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
