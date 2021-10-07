import React from "react";
import { AddUser } from "./AddUser";
import { UserTable } from "./UserTable";
import { Sidebar } from "../Sidebar";
import { HomeContainer, UserContainer } from "../../../Component/Container";

export const User = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <UserContainer>
        <AddUser />
        <UserTable />
      </UserContainer>
    </HomeContainer>
  );
};
