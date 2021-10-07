import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ProtectedRoute = ({ Component }) => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.location.pathname === "/signup"
        ? history.push("/signup")
        : history.push("/login");
    } else {
      history.location.pathname === "/"
        ? history.push("/")
        : history.push("/user");
    }
  }, []);
  return <Component />;
};
