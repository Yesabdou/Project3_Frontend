import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Rents from "../../components/rent/DisplayRentsForOneMatreial";

const MaterialPage = () => {
  const [OneMaterial, setOneMaterial] = useState({});
  const { id } = useParams(); // dans le router j'ai mis un /:id ue je recupere ici avec le useParams

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get(`https://handishare.herokuapp.com/api/material/${id}`)

      .then((res) => setOneMaterial(res.data));
  }, []);

  const [toggleImg, setToggleImg] = useState(true);

  return (
    <div className="pageOneMaterial">
      <Navigation />
      <div className="page flex">
        <img
          className={`${
            toggleImg === true ? "materialPicture" : "materialPictureBig"
          }`}
          src={OneMaterial.picture}
          alt="photoMat"
          // onClick={imgToggle =>
          //   imgToggle ? "materialPicture" : "materialPictureBig"
          // }
          onClick={() => setToggleImg(!toggleImg)}
        />
        <section className="infoMaterial">
          <h1> {OneMaterial.name}</h1>
          <h2> Référence : {OneMaterial.ref}</h2>
          <h3>Description :</h3> <p>{OneMaterial.description}</p>
          <h3>Proprietaire</h3>
          <p>{OneMaterial.owner?.pseudo}</p>
          <h3>
            Age minimum : {OneMaterial.ageMin} Age maximum :{OneMaterial.ageMax}
          </h3>
        </section>
      </div>

      <div className="rentalSheets ">
        <Rents />
      </div>
    </div>
  );
};

export default MaterialPage;
