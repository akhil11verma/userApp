import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/addNotes.css";
import { useHistory } from "react-router-dom";
import NavbarUser from "../Navbar/navbarUser";
import { set } from "express/lib/application";

export default function AddNotes() {
  const history = useHistory();
  const [user, setUser] = useState({
    title: "",
    description: "",
  });
  const onsubmit = async (e) => {
    e.preventDefault();
    const { title, description } = user;

    if (!title || !description) {
      alert("Please fill title and description");
    } else {
      const res = await fetch("/blog", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      const data = await res.json();

      if (data.status === 400 || !data) {
        console.log("Invalid Registration");
      } else {
        alert("Blog Succcessfully Added");
        history.push("/viewNotes");
        setUser({
          title: "",
          description: "",
        });
      }
    }
  };

  return (
    <>
      <NavbarUser />
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-4">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-4 fw-dark fs-5">
                  <b>Add BLOG</b>
                </h5>
                <form onSubmit={onsubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Blog Title"
                      value={user.title}
                      onChange={(e) =>
                        setUser({ ...user, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      name="desc"
                      rows="7"
                      className="form-control"
                      placeholder="Blog Discription"
                      value={user.description}
                      onChange={(e) =>
                        setUser({ ...user, description: e.target.value })
                      }
                    />
                  </div>

                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
