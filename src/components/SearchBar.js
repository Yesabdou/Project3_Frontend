import React, { useEffect, useState } from "react";
import Filtres from "./buttons/Filtre";
import filter from "../assets/images/Filter.png";

const SearchBar = (props) => {
  const [show, setShow] = useState(true);
  const controlSearchBAr = () => {
    if (window.scrollY > 800) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlSearchBAr);

    return () => {
      window.removeEventListener("scroll", controlSearchBAr);
    };
  }, []);

  const conditions = [
    "Etat neuf",
    "Très bon état",
    "Bon état",
    "Etat satisfaisant",
  ];

  const categories = ["Fauteuil roulant", "Chaise adaptée", "Matériel ludique"];
  return (
    <div className={`SearchBar ${show || "visibility"}`}>
      <h2>
        <span>
          <img src={filter} alt="" />
        </span>
        &ensp;Filtrer
      </h2>
      <ul className="toggleButtons">
        <li
          onClick={props.toggle}
          id="carte"
          className={`button1On  ${props.button || "button1Off"}`}
        >
          Voir la carte
        </li>
        <li
          onClick={props.toggle}
          id="liste"
          className={`button1On  ${props.button && "button1Off"}`}
        >
          Voir la liste
        </li>
      </ul>
      <Filtres array={conditions} criteria={"condition"} />
      <Filtres array={categories} criteria={"category"} />
    </div>
  );
};

export default SearchBar;

//pour l'authenfication regarder le truc de robin projet management client    Client
