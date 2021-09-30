import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { ScrollTable } from "./printScrollData";
import { column } from "./tableColumn";

export default function PageScroll() {
  const [data, setdata] = useState([]);
  const [pageskip, setpageskip] = useState(0);
  const [hasMore, sethasMore] = useState(true);
  let c1 = 10;

  const getDummyData = async () => {
    const res = await fetch("post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        pageskip,
        c1,
      }),
    });
    const responseData = await res.json();
    return responseData;
  };

  useEffect(() => {
    async function dataFetch() {
      const extraResponseData = await getDummyData();
      console.log(extraResponseData);
      setdata([...data, ...extraResponseData]);
    }
    dataFetch();
  }, [pageskip]);

  const pageload = async () => {
    setTimeout(() => {
      setpageskip(pageskip + 10);
      if (pageskip == 90) {
        sethasMore(false);
      }
    }, 500);
  };
  return (
    <>
      <h1>Akhil Verma</h1>
      <InfiniteScroll
        dataLength={data.length}
        next={pageload}
        hasMore={hasMore}
        loader={<h4>Loading.....</h4>}
      >
        <ScrollTable tableData={data} tableColumn={column} />
      </InfiniteScroll>
    </>
  );
}
