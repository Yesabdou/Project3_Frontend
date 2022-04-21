import React from "react";

const RentSquare = ({ rent }) => {
  return (
    <>
      <li className="materialSquare">
        <h1>Référence: {rent.materialId}</h1>
        <div className="">
          <p className="description">Status: {rent.status}</p>
          <p className="description">Début du prêt: {rent.startDate}</p>
          <p className="description">Fin du prêt: {rent.endDate}</p>
          <p className="description">Prêté à: {rent.rentedTo}</p>
          <p className="description">Adresse de la famille: {rent.adresse}</p>
        </div>
      </li>
    </>
  );
};

export default RentSquare;
