import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

function RegisterOrLogin() {
  return (
    <div className="main">
      <Heading heading={"Welcome at Todo Desk!"} size={"2.5rem"} />
      <Link to="/register" className="btn">
        Register
      </Link>
      <Link to="/login" className="btn">
        Login
      </Link>
    </div>
  );
}

export default RegisterOrLogin;
