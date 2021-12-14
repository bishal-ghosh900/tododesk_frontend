import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Heading from "./Heading";
import { parseError } from "./Utilities/parseError";

function Register() {
  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await toast.promise(
        axios.post(`${process.env.REACT_APP_URL}/users`, {
          username: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value,
        }),
        {
          pending: "Wait for few seconds.",
          success: "User is created",
          error: "Something wrong happened",
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
    <form className="login-register" onSubmit={(e) => handleSubmit(e)}>
      <Heading heading={"Register"} size={"2.5rem"} />
      <input
        type="text"
        name="register-username"
        id="register-username"
        placeholder="Username please..."
        autoComplete="true"
      />
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
      />
      <input type="submit" name="submit" value="Submit" id="submit" />
    </form>
  );
}

export default Register;
