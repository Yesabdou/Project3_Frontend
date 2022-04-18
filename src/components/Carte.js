import React, { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import { Marker } from "react-map-gl";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Carte = () => {
  const [associations, setAssociation] = useState([]);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get("https://handishare.herokuapp.com/api/user")

      .then((res) => setAssociation(res.data));
  }, []);

  const style = {
    padding: "10px",
    color: "#090909",
    cursor: "pointer",
    background: "#f7bc08",
    borderRadius: "6px",
  };
  return (
    <div className="carte">
      <Map
        className="carteBorder"
        mapboxAccessToken="pk.eyJ1IjoibXJkb3UiLCJhIjoiY2wxdmJydXA4MDU5eTNpb2h5bzF5emg1NyJ9.ryBHDt6d1JBVjXR29lUaqw"
        initialViewState={{
          longitude: 2.341178005531811,
          latitude: 48.85889775714565,
          zoom: 11,
        }}
        style={{ width: "100%", height: "520px" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <div>
          {associations.map((association, index) => (
            <Marker
              longitude={association.longitude}
              latitude={association.latitude}
              anchor="center"
              onClick={() => {
                window.location.href = `/association/${association._id}`;
              }}
            >
              <div style={style}>
                {association.pseudo}
                📍
              </div>
            </Marker>
          ))}
        </div>
      </Map>
    </div>
  );
};

export default Carte;

//pour l'authenfication regarder le truc de robin projet management client    Client
