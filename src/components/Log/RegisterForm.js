import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://handishare.herokuapp.com/api";

function RegisterForm(props) {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [finess, setFiness] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [adresse, setAdresse] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handlePseudo = (e) => setPseudo(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleFiness = (e) => setFiness(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleBio = (e) => setBio(e.target.value);
  const handleAdresse = (e) => setAdresse(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      pseudo,
      email,
      password,
      adresse,
      finess,
      phone,
      bio,
    };

    axios
      .post(`${API_URL}/user/register`, requestBody)
      .then((response) => {
        console.log(response);
        navigate(`/user/login`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formLog">
      <form onSubmit={handleSignupSubmit}>
        <div className="cases">
          <label htmlFor="pseudo">Nom de l'association</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            value={pseudo}
            onChange={handlePseudo}
          />
        </div>
        <div className="cases">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="cases">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="cases">
          <label htmlFor="finess">Finess</label>
          <input
            type="number"
            name="finess"
            id="finess"
            value={finess}
            onChange={handleFiness}
          />
        </div>
        <div className="cases">
          <label htmlFor="phone">Telephone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={handlePhone}
          />
        </div>
        <div className="cases">
          <label htmlFor="adresse">Adresse</label>
          <input
            type="string"
            name="adresse"
            id="adresse"
            value={adresse}
            onChange={handleAdresse}
          />
        </div>
        <div className="cases">
          <label htmlFor="bio">Présentation </label>
          <input
            type="text"
            name="bio"
            id="bio"
            value={bio}
            onChange={handleBio}
          />
        </div>
        <div className="cases">
          <button
            className="buttonCss"
            onClick={(e) => e.preventDefault}
            type="submit"
          >
            Sign Up
          </button>{" "}
        </div>
      </form>

      <div className="cases">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Already have account?</p>
        <Link to={"/user/login"}> Login</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
