import React from "react";
import "./style.css";

const FormContainer = (props) => {
  return <div className="FormContainer">{props.children}</div>;
};
const FormHeader = (props) => {
  return <div className="FormHeader">{props.children}</div>;
};
const FormFooter = (props) => {
  return <div className="FormFooter">{props.children}</div>;
};
const HomeContainer = (props) => {
  return <div className="HomeContainer">{props.children}</div>;
};
const UserContainer = (props) => {
  return <div className="UserContainer">{props.children}</div>;
};
const AddUserContainer = (props) => {
  return <div className="AddUserContainer">{props.children}</div>;
};

const AddUserFormContainer = (props) => {
  return <div className="AddUserFormContainer">{props.children}</div>;
};

export {
  FormContainer,
  FormHeader,
  FormFooter,
  HomeContainer,
  AddUserContainer,
  UserContainer,
  AddUserFormContainer,
};
