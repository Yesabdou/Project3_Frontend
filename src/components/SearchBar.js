import React, { useEffect, useState } from "react";
import Filtres from "./buttons/Filtre";
import filter from "../assets/images/Filter.png";
import Onefilter from "./Onefilter";

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
  const [catg, setCatg] = useState();
  const [filterCategorie, setFilterCategorie] = useState(catg);

  // comment lift ce state????????????????????????

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

      <input
        className="SearchKeyword"
        type="text"
        placeholder="Rechercher un matériel..."
        onChange={(e) => props.setKeyword(e.target.value)}
      />

      <Onefilter categories={categories} catg={catg} setCatg={setCatg} />
      {/* <Filtres
        array={conditions}
        criteria={"condition"}
        materialsFiltered={props.materialsFiltered}
        setMaterialFiltered={props.setMaterialFiltered}
      />
      <Filtres
        array={categories}
        criteria={"category"}
        materialsFiltered={props.materialsFiltered}
        setMaterialFiltered={props.setMaterialFiltered}
      /> */}
    </div>
  );
};

export default SearchBar;

//pour l'authenfication regarder le truc de robin projet management client    Client
