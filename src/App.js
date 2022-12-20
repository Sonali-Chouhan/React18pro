import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Admin/Dashboard";
import Home from "./Component/Home";
import SingIn from "./Component/SingIn";
import SingUp from "./Component/SingUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import UserCreate from "./Component/Admin/UserCreate";
import UserList from "./Component/Admin/UserList";
import Navbar from "./Component/Admin/Navbar";
import "antd/dist/antd.css";
import Homes from "./MyComponent/Home";
import Profile from "./MyComponent/Profile";
import About from "./MyComponent/About";

function App() {
  const gettoken = localStorage.getItem("Token");
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        {gettoken ? (
          <>
            <div>
              <Navbar />
            </div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/usercreate" element={<UserCreate />}/>
              <Route path="/usercreate/:id" element={<UserCreate/>} />
              <Route path="/userlist" element={<UserList />} />
            </Routes>
          </>
        ) : (
          <>
            <div>
              <Sidebar />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/singin" element={<SingIn />} />
              <Route path="/singup" element={<SingUp />} />
              {/* implement */}
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />}/>
              <Route path="/homes" element={<Homes />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
