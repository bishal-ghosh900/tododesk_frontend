import React from "react";
import { Link, Navigate } from "react-router-dom";
import Heading from "./Heading";

function RegisterOrLogin() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <Navigate to="/me" replace={true} />
      ) : (
        <div className="main">
          <Heading heading={"Welcome at Todo Desk!"} size={"2.5rem"} />
          <Link to="/register" className="btn">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export default RegisterOrLogin;
