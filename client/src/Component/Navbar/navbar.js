import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useHistory } from "react-router-dom";
export default function Navbar() {
  const history = useHistory();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <a
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            Home
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/login")}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/register")}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
