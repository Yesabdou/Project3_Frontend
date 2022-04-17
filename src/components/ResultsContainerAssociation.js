import React, { useState } from "react";
import Associations from "./Associations";
import Carte from "./Carte";
import filter from "../assets/images/Filter.png";

const ResultsContainerAssociation = () => {
  const [list, setList] = useState(true);
  const [map, setMap] = useState(false);
  const [button1, setButton1] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "carte") {
      setMap(true);
      setList(false);
      setButton1(false);
    } else if (e.target.id === "liste") {
      setMap(false);
      setList(true);
      setButton1(true);
    }
  };
  return (
    <div className="resultsContainer">
      {list && <Associations />}
      {map && <Carte />}
      <ul className="toggleButtons">
        <h2>
          <span>
            <img src={filter} alt="" />
          </span>
          &emsp;Filtrer
        </h2>
        <li
          onClick={handleModals}
          id="carte"
          className={`button1On  ${button1 || "button1Off"}`}
        >
          Voir la carte
        </li>
        <li
          onClick={handleModals}
          id="liste"
          className={`button1On  ${button1 && "button1Off"}`}
        >
          Voir la liste
        </li>
        <li>filtrer par code postal</li>
      </ul>
    </div>
  );
};

export default ResultsContainerAssociation;

//pour l'authenfication regarder le truc de robin projet management client    Client
