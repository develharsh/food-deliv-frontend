import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNum1: "",
    password: "",
    addresses: [
      {
        streetAddress: "H.no 1486 sushant lok phase I Block C",
        landMark: "Near Queens Plaza",
        pincode: "202020",
        city: "Gurgaon",
        state: "Uttar Pradesh",
      },
    ],
  });
  const { name, email, phoneNum1, password } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post(`${BASE_URL}auth/signup`, values)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
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
          name="phoneNum1"
          value={phoneNum1}
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
