import { Link } from "react-router-dom";
import React from "react";

const Materials = (props) => {
  return (
    <ul className="listMaterial">
      {props.materialsToDisplay
        //chercher la key qui se trouver dans la searchbar
        .map((material, index) => (
          // <MaterialSquare key={index} material={material} />
          <React.Fragment key={material._id}>
            <li className="materialSquare">
              <img src={material.picture} alt="" />
              <h2>ref : {material.ref}</h2>
              <h1>{material.name}</h1>
              <div className="descriptionContainer">
                <p className="description">{material.description}</p>
              </div>
              <div className="">
                <div>
                  <Link to={{ pathname: `/material/${material._id}` }}>
                    <p className="preview"> Vérifier les disponibilités </p>
                  </Link>
                </div>
              </div>
            </li>
          </React.Fragment>
        ))}
    </ul>
  );
};

export default Materials;
