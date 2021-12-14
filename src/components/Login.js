import axios from "axios";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Heading from "./Heading";
import { parseError } from "./Utilities/parseError";

function Login() {
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await toast.promise(
        axios.post(`${process.env.REACT_APP_URL}/users/auth`, {
          email: e.target[0].value,
          password: e.target[1].value,
        }),
        {
          pending: "Wait for few seconds.",
          success: "User Logged in",
          error: "Something wrong happened.",
        }
      );

      localStorage.setItem("token", response.headers["x-auth-token"]);
      navigate("/me", {
        replace: true,
      });
    } catch (error) {
      let errorMessage = parseError(error.response.data);
      toast.error(errorMessage);
    }
  };

  return (
    <>
      {!localStorage.getItem("token") ? (
        <form className="login-register" onSubmit={(e) => handleSubmit(e)}>
          <Heading heading={"Login"} size={"2.5rem"} />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email please..."
            autoComplete="true"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password please..."
            autoComplete="true"
          />
          <input type="submit" name="submit" value="Submit" id="submit" />
        </form>
      ) : (
        <Navigate to="/me" replace={true} />
      )}
    </>
  );
}

export default Login;
