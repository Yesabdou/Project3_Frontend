import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import MaterialSquare from "../../components/material/MaterialSquare";
import Navigation from "../../components/Navigation";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Carte from "../../components/Association/Carte";
import Map, { Marker } from "react-map-gl";

const AssociationPage = () => {
  const style = {
    padding: "10px",
    color: "#090909",
    cursor: "pointer",
    background: "#f7bc08",
    borderRadius: "6px",
  };

  const [showInfos, setShowShowInfo] = useState(true);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };
  // const handleModals = (e) => {
  //   if (e.target.id === "carte") {
  //     setShowShowInfo(true);
  //   } else if (e.target.id === "liste") {
  //     setShowShowInfo(false);
  //   }
  // };

  const toggleInfos = () => {
    setShowShowInfo(!showInfos);
  };

  const [association, setOneAssociation] = useState({});
  const { id } = useParams(); // dans le router j'ai mis un /:id ue je recupere ici avec le useParams

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get(`https://handishare.herokuapp.com/api/user/${id}`)
      .then((res) => setOneAssociation(res.data));
  }, []);

  const deleteUser = () => {
    axios
      .delete(`https://handishare.herokuapp.com/api/user/${id}/delete`)
      .then((res) => console.log(res));
    navigate("/");

    removeToken();
  };

  // const [showPopup, setShowPopup] = React.useState(true);
  const [materials, setMaterial] = useState([]);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get("https://handishare.herokuapp.com/api/material")

      .then((res) => {
        console.log(res.data);

        setMaterial(res.data);
      });
  }, []);

  return (
    <div className="pageOneAssociation">
      <Navigation />
      <div className="page ">
        <section>
          <div className="infoAssociation">
            <h1> {association.pseudo}</h1>
            <h2> Finess : {association.finess}</h2>
            <button onClick={toggleInfos} className="toggleInfos">
              {!showInfos ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
                </svg>
              )}
            </button>
          </div>
        </section>
        {!showInfos ? (
          <section className="plusInfos">
            <div className="infoContainer">
              <h3>Adresse :</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${association.latitude},${association.longitude}`}
              >
                {association.adresse}
              </a>
              <h3>Telephone :</h3>
              <p> {association.phone} </p>
              <h3>Email :</h3>
              <a href={`mailto:${association.email}`}>{association.email}</a>

              <h3>Description :</h3>
              <p> {association.bio} </p>
            </div>

            <Map
              className=""
              mapboxAccessToken="pk.eyJ1IjoibXJkb3UiLCJhIjoiY2wxdmJydXA4MDU5eTNpb2h5bzF5emg1NyJ9.ryBHDt6d1JBVjXR29lUaqw"
              initialViewState={{
                longitude: association.longitude,
                latitude: association.latitude,
                zoom: 16,
              }}
              style={{ width: "50%", height: "420px" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              <div>
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
              </div>
            </Map>
          </section>
        ) : (
          ""
        )}
        {!isLoggedIn && (
          <section className="plusInfos">
            <NavLink className="" to="/user/login">
              <div>
                <div className="">
                  <h2>Connectez vous pour voir le matériel partagé </h2>
                </div>
              </div>{" "}
            </NavLink>
          </section>
        )}
        <section className="miniNavBar">
          <div className="backButton">
            <NavLink className="" to="/annuaire">
              <div className="back">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" />
                </svg>
              </div>
            </NavLink>
          </div>
        </section>

        {isLoggedIn && (
          <section>
            <ul className="ownedMaterial">
              {materials
                .filter((material) => material?.owner?._id === id)
                .map((material, index) => (
                  <MaterialSquare key={index} material={material} />
                ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default AssociationPage;
