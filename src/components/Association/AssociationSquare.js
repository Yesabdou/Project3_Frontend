import React from "react";
import { Link } from "react-router-dom";

const AssociationSquare = ({ association }) => {
  return (
    <li className="associationSquare">
      <img
        className="logoAss"
        src={association.picture}
        alt={association.pseudo}
      />
      <h2>Finess : {association.finess}</h2>
      <h1>{association.pseudo}</h1>

      <div>
        <Link to={{ pathname: `/association/${association._id}` }}>
          <p className="preview"> Vérifier les disponibilités </p>
        </Link>
      </div>
    </li>
  );
};

export default AssociationSquare;
