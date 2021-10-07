import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AddUserContainer } from "../../../../Component/Container";

export const AddUser = () => {
  return (
    <AddUserContainer>
      <Link to="/addUsersform" className="addUserButtonStyle">
        Add User
      </Link>
    </AddUserContainer>
  );
};
