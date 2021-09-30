import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import "./CSS/login.css";

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    const { email, password } = user;
    if (!email || !password) {
      alert("Invalid Credientials");
    } else {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();

      if (data.status === 400 || !data) {
        console.log("Invalid Registration");
      } else {
        alert("Login Succcessful");
        history.push("/");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-4 fw-dark fs-5">
                  <b>Login</b>
                </h5>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your Email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                  />
                </div>

                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
