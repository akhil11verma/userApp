import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/navbar";
import NavbarUser from "./Navbar/navbarUser";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [show, setshow] = useState(false);
  const callHomepage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserName(data.name);
      setshow(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callHomepage();
  }, []);
  return (
    <>
      {show ? <NavbarUser /> : <Navbar />}
      <div className="container emp-profile">
        <h1>Welcome to Home page</h1>
        <h1>{show ? userName : ""}</h1>
        <h2>
          {show ? "Happy, to see you back " : "We are the Mern Developer"}
        </h2>
      </div>
    </>
  );
}
