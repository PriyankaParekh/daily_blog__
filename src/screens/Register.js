import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Register() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/blog/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  const onchange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Nav />
      <div>
        <div className="wrapper">
          <div className="logo">
            <Icon
              icon="fa6-solid:blog"
              style={{ height: "4.5rem", width: "4.5rem" }}
              color="#9ed5cb"
            />
          </div>
          <div className="text-center mt-4 name">Register</div>
          <form className="p-3 mt-3" onSubmit={handleSubmit}>
            <div className="form-field d-flex align-items-center">
              <Icon
                icon="mdi:user"
                style={{ height: "2rem", width: "2rem" }}
                color="#9ed5cb"
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={details.name}
                onChange={onchange}
              />
            </div>
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
                value={details.email}
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
                value={details.password}
                onChange={onchange}
              />
            </div>
            <button type="submit" className="btn mt-3">
              Register
            </button>
            <Link to="/login">Already Have Account?</Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
