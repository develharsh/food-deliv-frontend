import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../utils/config";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const { name, email, phone, password } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post(`${BASE_URL}client/signup`, values)
      .then(function (response) {
        console.log(response)
        window.alert("Signup Successful.");
      })
      .catch(function (error) {
        window.alert(error.response.data.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Enter your Phone"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
