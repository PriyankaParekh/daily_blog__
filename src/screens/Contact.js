import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    desc: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/blog/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        desc: data.desc,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
      navigate("/contact");
    }
    else{
      navigate("/addblog");
    }
  };

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Nav />
      <div>
        <div className="wrapper2">
          <div className="logo">
            <Icon
              icon="fa6-solid:blog"
              style={{ height: "4.5rem", width: "4.5rem" }}
              color="#9ed5cb"
            />
          </div>
          <div className="text-center mt-4 name">Contact Us</div>
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
                value={data.name}
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
                value={data.email}
                onChange={onchange}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <Icon
                icon="ic:baseline-phone"
                color="#9ed5cb"
                style={{ height: "2rem", width: "2rem" }}
              />
              <input
                type="phone"
                name="phone"
                id="pwd"
                placeholder="Phone No."
                value={data.phone}
                onChange={onchange}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <Icon
                icon="material-symbols:opacity"
                color="#9ed5cb"
                style={{ height: "2rem", width: "2rem" }}
              />

              <input
                type="city"
                name="city"
                id="pwd"
                placeholder="City"
                value={data.city}
                onChange={onchange}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <Icon
                icon="fluent:text-description-24-filled"
                color="#9ed5cb"
                style={{
                  height: "2rem",
                  width: "2rem",
                  marginBottom: "auto",
                  marginTop: "0.6rem",
                }}
              />
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="7"
                placeholder="Description"
                value={data.desc}
                onChange={onchange}
              ></textarea>
            </div>
            <button type="submit" className="btn mt-3">
              Submit
            </button>
            <Link to="/">Home</Link>
          </form>
        </div>
      </div>
      <div className="content text-danger">
        <h6>Note: When you filled out contact form you are able to add blog here.</h6>
      </div>
      <Footer/>
    </div>
  );
}
