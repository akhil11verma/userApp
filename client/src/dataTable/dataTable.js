import React, { useState, useEffect } from "react";
import Post from "./post";
import "./data.css";
export default function DataTable() {
  const [data, setdata] = useState([]);
  const c1 = 10;
  const [show, setShow] = useState(0);
  // useEffect(() => {
  //   postDetails();
  // }, [data]);

  useEffect(() => {
    postDetails();
  }, [show]);

  const next = async () => {
    if (show < 100 - c1) {
      console.log("show next.........................." + show);
      setShow(show + c1);
      postDetails();
    }
  };
  const previous = async () => {
    if (show > 0) {
      console.log("show previous.........................." + show);
      setShow(show - c1);
      postDetails();
    }
  };

  const postDetails = async () => {
    const res = await fetch("post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        show,
        c1,
      }),
    });
    const postData1 = await res.json();
    setdata(postData1);
    console.log(postData1);
  };

  return (
    <>
      <div className="container">
        <h1>Hello Akhil</h1>
        <Post data={data} />
        <br />
        <button onClick={previous}>Previous</button>
        &nbsp;&nbsp;
        <button onClick={next}>Next</button>
      </div>
    </>
  );
}
