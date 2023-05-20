import React, { useState,useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate,useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function UpdateBlog() {
  
  const [blog, setBlog] = useState([]);
  const [imgFile, setImgFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const params=useParams();
  const options = [
    "Fashion",
    "Fitness",
    "Recipes",
    "Beauty",
    "Sports",
    "Travel",
    "Other",
  ];
  const [category, setCategory] = useState(options[0]);
  const navigate = useNavigate();
  useEffect(() => { 
    fetchdata();
},[])
    const fetchdata = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blog/oneblog/${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setTitle(data.title);
        setDescription(data.description);
        setDate(data.date);
        setCategory(data.category);
        setBlog(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const data=async()=>{
        let result = await fetch(`http://localhost:5000/blog/updateblog/${params.id}`,{
            method: 'put',
            body: JSON.stringify({title, description, date, category,imgFile}),
            headers:{
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

            },
        });
        result =await result.json();
        console.log(result);
        navigate("/mypost");
    }

//  };

  const handleFileChange = (event) => {
    setImgFile(event.target.files);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDesc = (event) => {
    setDescription(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
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
          <div className="text-center mt-4 name">Update Blog</div>
          <div
            className="p-3 mt-3"
            encType="multipart/form-data"
            
          >
            <div className="form-field d-flex align-items-center">
              <Icon
                icon="subway:title"
                style={{ height: "1.7rem", width: "1.7rem" }}
                color="#9ed5cb"
              />
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={title}
                onChange={handleTitle}
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
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                value={description}
                onChange={handleDesc}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <Icon
                icon="material-symbols:date-range"
                style={{ height: "2rem", width: "2rem" }}
                color="#9ed5cb"
              />
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                value={date}
                onChange={handleDate}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <Icon
                icon="material-symbols:category"
                style={{ height: "2rem", width: "2rem" }}
                color="#9ed5cb"
              />
              <select
                name="category"
                id="category"
                style={{ width: "86%" }}
                value={category}
                onChange={handleCategory}
              >
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field d-flex align-items-center">
              <Icon
                icon="material-symbols:image-rounded"
                style={{ height: "2rem", width: "2rem" }}
                color="#9ed5cb"
              />
              <input
                className="form-control-file mb-3"
                type="file"
                id="file"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="btn mt-3" onClick={data}>
              Submit
            </button>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
