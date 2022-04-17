import React from "react";

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
      <div className="Description">
        <p>{association.bio}</p>
      </div>
      <div className="preview">
        <div>
          <p className="text"> Affichez tout le materiel disponnible </p>
        </div>
      </div>
    </li>
  );
};

export default AssociationSquare;
