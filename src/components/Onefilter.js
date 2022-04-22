import React, { useState } from "react";

const Onefilter = (props) => {
  const handleChange = (event) => {
    props.setCatg({ value: event.target.value });
  };

  return (
    <div>
      <label htmlFor=""> </label>
      <select
        className="filtersButton"
        name="categorie"
        id="categorie"
        onChange={handleChange}
      >
        <option value={props.categories}>Filtrer par :</option>

        {props.categories.map((categorie) => {
          return <option value={categorie}>{categorie} </option>;
        })}
      </select>
    </div>
  );
};

export default Onefilter;
