import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const API_URL = "https://handishare.herokuapp.com/api";

function LoginForm(props) {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handlePseudo = (e) => setPseudo(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { pseudo, email, password };

    axios
      .post(`${API_URL}/user/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <div className="page formLog">
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="email">Nom de l'association</label>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              value={pseudo}
              onChange={handlePseudo}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
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
