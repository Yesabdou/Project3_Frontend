import React, { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Rents from "../../components/rent/DisplayRentsForOneMatreial";
import { AuthContext } from "../../context/auth.context";
import Aos from "aos";
import "aos/dist/aos.css";
import Calendrier from "../../components/Calendrier";

const MaterialPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { user } = useContext(AuthContext);

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
          onClick={() => setToggleImg(!toggleImg)}
        />
        <section data-aos="fade-left" className="infoMaterial">
          <h1> {OneMaterial.name}</h1>
          <h2> Référence : {OneMaterial.ref}</h2>
          <h3>Description :</h3> <p>{OneMaterial.description}</p>
          <h3>Proprietaire</h3>
          <p>{OneMaterial.owner?.pseudo}</p>
          <h3>
            Age minimum : {OneMaterial.ageMin} Age maximum :{OneMaterial.ageMax}
          </h3>
          <h1>{OneMaterial.category}</h1>
          {console.log(OneMaterial.owner?._id)}
          <div className="crudLogo">
            {user.id === OneMaterial.owner?._id && (
              <div>
                <a href={`/material/${OneMaterial._id}/update`}>
                  <div className="edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z" />
                    </svg>
                  </div>
                </a>
              </div>
            )}
          </div>
          <div className="crudLogo">
            {user.id === OneMaterial.owner?._id && (
              <div>
                <a href={`/material/${OneMaterial?._id}/rents`}>
                  <div className="edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z" />
                    </svg>
                  </div>
                </a>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="rentalSheets ">
        <Rents />
        <Calendrier />
      </div>
    </div>
  );
};

export default MaterialPage;
