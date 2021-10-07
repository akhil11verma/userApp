import React, { useState, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { CustomButton } from "../../Component/Button";
import { Input } from "../../Component/Input";
import { toast } from "react-toastify";

import {
  FormContainer,
  FormHeader,
  FormFooter,
} from "../../Component/Container/index";
import { Title } from "../../Component/Title";

export const Login = () => {
  const history = useHistory();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9001/login",
        userLogin
      );
      localStorage.setItem("token", response.data.authToken);
      history.push("/");
      toast.success(response.data.message);
    } catch (e) {
      // toast.error(e.response.data.error);
      console.log(e);
    }
  };
  return (
    <FormContainer>
      <FormHeader>
        <Title titleName="Login" />
        <Input
          type="email"
          name="email"
          value={userLogin.email}
          handleChange={handleChange}
          placeholder="Enter Your Email"
        />
        <Input
          type="password"
          name="password"
          value={userLogin.password}
          handleChange={handleChange}
          placeholder="Enter Your Password"
        />
        <CustomButton onClick={handleLogin} buttonName="Login" />
        <FormFooter>
          <a href="#forgotPassword">Forgot password?</a>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </FormFooter>
      </FormHeader>
    </FormContainer>
  );
};
