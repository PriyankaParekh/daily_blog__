import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/blog/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      localStorage.setItem("userEmail",data.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="logo">
          <Icon
            icon="fa6-solid:blog"
            style={{ height: "4.5rem", width: "4.5rem" }}
            color="#9ed5cb"
          />
        </div>
        <form className="text-center mt-4 name">Login</form>
        <div className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <Icon
              icon="ic:baseline-email"
              style={{ height: "2rem", width: "2rem" }}
              color="#9ed5cb"
            />

            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={onchange}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <Icon
              icon="mdi:password"
              style={{ height: "2rem", width: "2rem" }}
              color="#9ed5cb"
            />

            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              value={data.password}
              onChange={onchange}
            />
          </div>
          <button className="btn mt-3" type="submit" onClick={handleSubmit}>
            Login
          </button>
          <Link to="/register">No Account?</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
