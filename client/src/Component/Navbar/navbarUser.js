import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useHistory } from "react-router-dom";
export default function NavbarUser() {
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
          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/addNotes")}
                >
                  Add Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/viewNotes")}
                >
                  View Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/dashboard")}
                >
                  DashBoard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/logout")}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
