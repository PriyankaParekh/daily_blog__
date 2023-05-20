import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Addblog from "./screens/Addblog";
import About from "./screens/About";
import MyPost from "./screens/MyPost";
import UpdateBlog from "./screens/UpdateBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route Route exect path="/" element={<Home />}></Route>
          <Route exect path="/login" element={<Login />}></Route>
          <Route exect path="/register" element={<Register />}></Route>
          <Route exect path="/blog" element={<Blog />}></Route>
          <Route exect path="/addblog" element={<Addblog />}></Route>
          <Route exect path="/mypost" element={<MyPost />}></Route>
          <Route exect path="/updateblog/:id" element={<UpdateBlog />}></Route>
          <Route exect path="/about" element={<About />}></Route>
          <Route exect path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
