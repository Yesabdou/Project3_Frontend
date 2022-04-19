import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

const MaterialPage = () => {
  const [OneMaterial, setOneMaterial] = useState({});
  const { id } = useParams(); // dans le router j'ai mis un /:id ue je recupere ici avec le useParams

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get(`https://handishare.herokuapp.com/api/material/${id}`)

      .then((res) => setOneMaterial(res.data).populate("owner"));
  }, []);
  return (
    <div className="pageOneMaterial">
      <Navigation />

      <div className="page flex">
        <section className="pictureMaterial">
          <img src={OneMaterial.picture} alt="photoMat" />
        </section>
        <section className="infoMaterial">
          <div className="fillButton">
            <NavLink to="/list-materiels">
              <div>
                retour a la liste <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </NavLink>
          </div>
          <h1> {OneMaterial.name}</h1>
          <h2> Référence : {OneMaterial.ref}</h2>
          <p>{OneMaterial.description}</p>
          <h3>
            Age minimum : {OneMaterial.ageMin} Age maximum :{OneMaterial.ageMax}
          </h3>
        </section>
      </div>
    </div>
  );
};

export default MaterialPage;
