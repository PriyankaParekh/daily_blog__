import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Nav from "../components/Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import Like from "../components/Like";
import Like2 from "../components/Like2";
import Footer from "../components/Footer";
import { Buffer } from "buffer";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  let [likes, setLikes] = useState(false);
  console.log(likes);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:5000/blog/allblog", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setBlog(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const handleLike = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/blog/like/${id}`
      );
      const updatedPost = response.data;
      const updatedBlog = blog.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );
      setBlog(updatedBlog);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const filteredCards = blog.filter(
    (card) =>
      (category === "all" || card.category === category) &&
      Object.values(card).some(
        (field) =>
          typeof field === "string" &&
          field.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div style={{ overflowX: "hidden" }}>
      <Nav />

      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <div className="container-fluid">
          <div className="navvv ms-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  onClick={() => setCategory("all")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    All
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setCategory("Fashion")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    Fashion
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setCategory("Fitness")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    Fitness
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setCategory("Recipes")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    Recipes
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setCategory("Beauty")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    Beauty
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setCategory("Sports")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    Sports
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setCategory("Travel")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    Travel
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setCategory("Other")}
                  style={{ border: "none" }}
                >
                  <Link className="nav-link" aria-current="page">
                    Other
                  </Link>
                </button>
              </li>

              <form className="searchform">
                <div className="form-field d-flex align-items-center ms-2">
                  <Icon
                    icon="ri:search-line"
                    style={{ height: "1.7rem", width: "1.7rem" }}
                    color="#9ed5cb"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
              </form>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row" style={{ justifyContent: "center" }}>
        {filteredCards.length ? (
          filteredCards.map((blog) => {
            const base64Image = Buffer.from(blog.image.data, "binary").toString(
              "base64"
            );
            const imageSrc = `data:${blog.image.contentType};base64,${base64Image}`;
            return (
              <div
                className="card col-md-4 m-3"
                key={blog._id}
                style={{ width: "23rem", padding: "0rem" }}
              >
                <img src={imageSrc} style={{ height: "18rem" }} alt="..." />
                <div className="card-body" style={{ color: "dimgrey" }}>
                {blog.likes > 0 ? (
                      <p
                        className="card-text"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <button
                          onClick={() => handleLike(blog._id)}
                          style={{ border: "none", background: "white" }}
                        >
                          <Like2 />
                        </button>
                      </p>
                    ) : (
                      <p
                        className="card-text"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <button
                          onClick={() => handleLike(blog._id)}
                          style={{ border: "none", background: "white" }}
                        >
                          <Like />
                        </button>
                      </p>
                    )}
                                      <p
                    className="card-text"
                    style={{
                      display: "flex",
                    justifyContent: "flex-end",
                    color: "rgb(185 183 183)",
                    marginBottom: "0",
                    marginTop: "-16px",
                    padding:"0"
                    }}
                  >
                    {blog.likes} Likes
                  </p>
                  <p
                    className="card-text"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      color: "rgb(185 183 183)",
                    }}
                  >
                    {blog.date.substr(0, 10)}
                  </p>
                  <h2>{blog.title}</h2>
                  <p className="card-text">{blog.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ color: "dimgrey" }}>
            <h4>No Such Blog</h4>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
