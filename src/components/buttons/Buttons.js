import React from "react";

const MaterialButton = (props) => {
  return (
    <div>
      <label for="filter-select"> </label>
      <select className="filtersButton" name="categorie" id="categorie">
        <option value={props.categiries}> Filtrer par : </option>
        {props.categories.map((categorie) => {
          return <option value={categorie}>{categorie} </option>;
        })}
      </select>
    </div>
  );
};

export default MaterialButton;
