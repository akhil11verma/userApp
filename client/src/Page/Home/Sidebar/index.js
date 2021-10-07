import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./index.css";

export const Sidebar = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const callUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:9001/dashboard", {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        setUserData(response.data);
      } catch (e) {
        console.log(e + " jdsdbhdbdhdnhj");
      }
    };
    callUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Successful Logout");
  };
  return (
    <div className="SideBar">
      <p>
        <b>{userData.name}</b>
      </p>
      <hr />
      <Link to="/">Dashboard</Link>
      <Link to="/user">User</Link>
      <Link to="/login" onClick={handleLogout}>
        Log Out
      </Link>
    </div>
  );
};
