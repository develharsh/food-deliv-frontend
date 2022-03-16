import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
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
  const [show, setShow] = useState("block");
  const { name, email, phone, password } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    setShow("none");
    e.preventDefault();
    console.log(values);
    axios
      .post(`${BASE_URL}client/signup`, values)
      .then(function (response) {
        setShow("block");

        window.alert("Signup Successful.");
      })
      .catch(function (error) {
        setShow("block");
        window.alert(error.response.data.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: show }}>
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
