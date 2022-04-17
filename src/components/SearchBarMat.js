import React from "react";

const SearchBarMat = () => {
  return (
    <div className="SearchBar">
      <h1>Filtres avancés</h1>
      <div>
        <label for="pet-select"></label>
        <select name="categories" id="">
          <option value="">--Filtrer par catégorie--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
        </select>
      </div>
      <div>
        <label for="pet-select"></label>

        <select name="categories" id="">
          <option value="">--filtrer par état--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
        </select>
      </div>
      <div>
        <label for="pet-select"></label>

        <select name="categories" id="">
          <option value="">--Filtrer par age--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBarMat;

//pour l'authenfication regarder le truc de robin projet management client    Client
