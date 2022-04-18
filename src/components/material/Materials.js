import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import MaterialSquare from "./MaterialSquare";

const Materials = () => {
  const [materials, setMaterial] = useState([]);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get("https://handishare.herokuapp.com/api/material")

      .then((res) => setMaterial(res.data));
  }, []);

  return (
    <ul className="listMaterial">
      {materials.map((material, index) => (
        <MaterialSquare key={index} material={material} />
      ))}
    </ul>
  );
};

export default Materials;
