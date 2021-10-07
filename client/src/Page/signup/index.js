import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { CustomButton } from "../../Component/Button";
import { Input } from "../../Component/Input";
import {
  FormContainer,
  FormHeader,
  FormFooter,
} from "../../Component/Container/index";
import { Title } from "../../Component/Title";
import { toast } from "react-toastify";
import { FormWarning } from "../../Component/FormWarning";

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export const Signup = () => {
  const history = useHistory();

  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    onFormValidate(name);
    return;
  };

  const onFormValidate = (name) => {
    if (name === "name") validateName();
    else if (name === "email") validateEmail();
    else if (name === "phone") validatePhone();
    else if (name === "password") validatePassword();
    else if (name === "ConfirmPassword") validateConfirmPassword();
    else {
      return true;
    }
  };
  const validatePhone = () => {
    let phoneError = "";
    const value = user.phone;
    if (value.length < 10) phoneError = "Enter Your Valid Mobile Number";
    setError({
      phone: phoneError,
    });
  };

  const validateName = () => {
    let nameError = "";
    const value = user.name;
    if (value.length < 3) nameError = "Enter Your Name";
    setError({
      name: nameError,
    });
  };

  const validateEmail = () => {
    let emailError = "";
    const value = user.email;
    if (!emailValidator.test(value)) emailError = "Enter Your Valid Email";

    setError({
      email: emailError,
    });
  };

  const validatePassword = () => {
    let passwordError = "";
    const value = user.password;
    if (!passwordValidator.test(value))
      passwordError =
        "Password must contain atleast 8 characters, 1 number, 1 upper and 1 lowercase!";

    setError({
      password: passwordError,
    });
  };

  const validateConfirmPassword = () => {
    let confirmPasswordError = "";
    if (user.password !== user.confirmPassword)
      confirmPasswordError = "Password does not match";

    setError({
      confirmPassword: confirmPasswordError,
    });
  };

  const handleButton = async () => {
    if (onFormValidate()) {
      try {
        const response = await axios.post("http://localhost:9001/signup", user);
        toast.success(response.data.message);
        history.push("/login");
      } catch (e) {
        toast.error(e.response.data.error);
      }
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <Title titleName="SignUp" />
        <Input
          type="text"
          name="name"
          value={user.name}
          handleChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your Name"
        />
        {error && <FormWarning warning={error.name} />}
        <Input
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your Email"
        />
        {error && <FormWarning warning={error.email} />}
        <Input
          type="text"
          name="phone"
          value={user.phone}
          handleChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your Mobile Number"
        />
        {error && <FormWarning warning={error.phone} />}
        <Input
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your Password"
        />
        {error && <FormWarning warning={error.password} />}
        <Input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          handleChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your Confirm Password"
        />
        {error && <FormWarning warning={error.confirmPassword} />}

        <CustomButton onClick={handleButton} buttonName="SignUp" />
        <FormFooter>
          <p>
            Already SignUp? <Link to="/login">Login</Link>
          </p>
        </FormFooter>
      </FormHeader>
    </FormContainer>
  );
};
