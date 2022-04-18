import React from "react";

const Filtre = (props) => {
  return (
    <div>
      <label for="filter-select"> </label>
      <select className="filtersButton" name="categorie" id="categorie">
        <option value=""> Filtrer par :</option>
        {props.array.map((condition) => {
          return <option value={condition}>{condition} </option>;
        })}
      </select>
    </div>
  );
};

export default Filtre;
