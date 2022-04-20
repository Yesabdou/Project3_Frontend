import React from "react";
import { Link } from "react-router-dom";

const MaterialSquare = ({ material }) => {
  return (
    <>
      <li className="materialSquare">
        <img src={material.picture} alt="" />
        <h2>Référence : {material.ref}</h2>
        <h1>{material.name}</h1>
        <div className="">
          <p className="description">{material.description}</p>
        </div>
        <div className="p">
          <div>
            <Link to={{ pathname: `/material/${material._id}` }}>
              <p className="preview"> Vérifier les disponibilités </p>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default MaterialSquare;
