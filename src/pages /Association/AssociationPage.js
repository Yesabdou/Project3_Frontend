import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import MaterialSquare from "../../components/material/MaterialSquare";
import Navigation from "../../components/Navigation";

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
  const [materials, setMaterial] = useState([]);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get("https://handishare.herokuapp.com/api/material")

      .then((res) => setMaterial(res.data));
  }, []);

  return (
    <div className="pageOneAssociation">
      <Navigation />

      <div className="page ">
        <section>
          <div className="infoAssociation">
            <h1> {association.pseudo}</h1>
            <h2> Finess : {association.finess}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
            </svg>
          </div>
        </section>

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
          <div className="crudbutton">
            {/* <img className="logoSolo" src={association.picture} alt="logo" /> */}
            <div className="edit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z" />
              </svg>
            </div>
            <div className="delete">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
              </svg>
            </div>
          </div>
        </section>

        {/* {isLoggedIn && ( boutton modifier  )} */}

        <section>
          <NavLink to="/annuaire">
            <div>
              retour a la liste <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </NavLink>
        </section>
        <section>
          <ul className="ownedMaterial">
            {materials.map((material, index) => (
              <MaterialSquare key={index} material={material} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AssociationPage;
