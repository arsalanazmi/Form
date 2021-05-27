import React, { useState } from "react";

const SimpleForm = () => {
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // e.persist();
    setInputField((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputField.name);
    console.log(inputField.email);
    console.log(inputField.password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input
          type="text"
          onChange={handleChange}
          value={inputField.name}
          name="name"
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <label>Enter Email:</label>
        <input
          type="text"
          onChange={handleChange}
          value={inputField.email}
          name="email"
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <label>Enter Password:</label>
        <input
          type="password"
          onChange={handleChange}
          value={inputField.password}
          name="password"
          placeholder="Enter Your Password"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;