import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const API_URL = "https://handishare.herokuapp.com/api";

function LoginForm(props) {
  const emailError = document.querySelector(".email .error");
  const passwordError = document.querySelector(".password .error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/user/login`, requestBody)
      .then((res) => {
        console.log(res.data);

        // if (res.data.error) {
        //   emailError.innerHTML = res.data.errors.email;
        //   passwordError.innerHTML = res.data.errors.password;  // pouruqoi ca ne marche paaaaas?
        // } else {
        // const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
        console.log("JWT token", res.data.authToken);
        storeToken(res.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        emailError.innerHTML = error.response.data.error;
      });
  };

  return (
    <div>
      <div className="page formLog">
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
            <div className="email error"></div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
            />
            <div className="password error"></div>
          </div>

          <button className="buttonCss" type="submit">
            Log In
          </button>
        </form>
        <div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Don't have an account yet?</p>
          <Link to={"/user/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
