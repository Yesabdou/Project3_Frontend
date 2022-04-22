import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import { api } from "../../api/service";

function NewRegisterForm(props) {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  const [pseudo, setPseudo] = useState("");
  const [finess, setFiness] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [adresse, setAdresse] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    if (user) api.get(`/user/${user.id}`).then((res) => setProfile(res.data));
  }, [user]);

  useEffect(() => {
    setPseudo(profile.pseudo);
  }, [profile]);

  useEffect(() => {
    setFiness(profile.finess);
  }, [profile]);

  useEffect(() => {
    setPhone(profile.phone);
  }, [profile]);

  useEffect(() => {
    setBio(profile.bio);
  }, [profile]);

  useEffect(() => {
    setAdresse(profile.adresse);
  }, [profile]);

  const navigate = useNavigate();

  const handlePseudo = (e) => setPseudo(e.target.value);
  const handleFiness = (e) => setFiness(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleBio = (e) => setBio(e.target.value);
  const handleAdresse = (e) => setAdresse(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      pseudo,
      finess,
      phone,
      bio,
      adresse,
    };

    api
      .put(`/user/${user.id}/update`, requestBody)
      .then((response) => {
        console.log(response);
        navigate(`/user`);
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
            placeholder={profile.pseudo}
            defaultValue={profile.pseudo}
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
            placeholder={profile.finess}
            defaultValue={profile.finess}
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
            placeholder={profile.phone}
            defaultValue={profile.phone}
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
            placeholder={profile.adresse}
            defaultValue={profile.adresse}
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
            placeholder={profile.bio}
            defaultValue={profile.bio}
          />
        </div>
        <div className="cases">
          <button className="buttonCss" type="submit">
            Modifier Profile
          </button>{" "}
        </div>
      </form>

      <div className="cases">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default NewRegisterForm;
