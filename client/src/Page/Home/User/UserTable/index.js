import React, { useEffect, useState } from "react";
import { tableColumn } from "./TableColumn";
import { Table } from "../../../../Component/Table";
import axios from "axios";

export const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const callUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:9001/addUser");
        console.log(response);
        setUserData(response.data);
      } catch (e) {
        console.log(e + " jdsdbhdbdhdnhj");
      }
    };
    callUserDetails();
  }, []);

  return <Table userData={userData} tableColumn={tableColumn} />;
};
