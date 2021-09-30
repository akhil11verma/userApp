import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/notes.css";
import NavbarUser from "../Navbar/navbarUser";
export default function NoteItem() {
  const [blogData, setBlogData] = useState([]);

  const callBlogDetails = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setBlogData(data.blog);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blogData.length);
  useEffect(() => {
    callBlogDetails();
  }, []);
  return (
    <>
      <NavbarUser />

      {blogData.length < 1 ? (
        <div className="container my-4" style={{ textAlign: "center" }}>
          <h1>Empty Blog! Please Add the Blog</h1>
        </div>
      ) : (
        blogData.map((res) => {
          return (
            <>
              <div className="container my-4">
                <div className="col-md-12 col-lg-12">
                  <article className="post vt-post">
                    <div className="row">
                      <div className="col-xs-12 col-sm-7 col-md-7 col-lg-11">
                        <div className="caption">
                          <h3 className="md-heading">
                            <b key={res}>{res.title}</b>
                          </h3>
                          <hr />
                          <p>{res.description}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}
