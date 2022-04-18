import axios from "axios";
import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { NavLink, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

const AssociationPage = () => {
  const [association, setOneAssociation] = useState({});
  const { id } = useParams(); // dans le router j'ai mis un /:id ue je recupere ici avec le useParams

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get(`https://handishare.herokuapp.com/api/user/${id}`)

      .then((res) => setOneAssociation(res.data));
  }, []);

  const style = {
    padding: "10px",
    fontsize: "50px",

    color: "#090909",
    cursor: "pointer",
    background: "#f7bc08",
    borderRadius: "6px",
  };
  // const [showPopup, setShowPopup] = React.useState(true);

  return (
    <div className="pageOneAssociation">
      <Navigation />

      <div className="page flex">
        <section>
          <section className="infoAssociation">
            <div className="fillButton">
              <NavLink to="/annuaire">
                <div>
                  retour a la liste <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </NavLink>
            </div>
            <img
              className="associationLogo"
              src={association.picture}
              alt="logo"
            />
          </section>
          <h1> {association.pseudo}</h1>
          <h2> Finess : {association.finess}</h2>
          <p>Adresse :{association.adresse}</p>
          <p>Telephone :{association.phone} </p>
        </section>
        {association?.latitude && (
          <Map
            className="carteBorder"
            mapboxAccessToken="pk.eyJ1IjoibXJkb3UiLCJhIjoiY2wxdmJydXA4MDU5eTNpb2h5bzF5emg1NyJ9.ryBHDt6d1JBVjXR29lUaqw"
            initialViewState={{
              longitude: `${association?.longitude}`,
              latitude: `${association?.latitude}`,

              zoom: 14,
            }}
            style={{ width: "100%", height: "520px" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              longitude={association?.longitude}
              latitude={association?.latitude}
              anchor="center"
            >
              <div style={style}> Show 📍</div>
            </Marker>
          </Map>
        )}
      </div>
    </div>
  );
};

export default AssociationPage;
