import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import RentSquare from "./RentSquare";

const Rents = () => {
  const [rents, setRents] = useState([]);

  useEffect(() => {

    axios
      .get("https://handishare.herokuapp.com/api/material/:materialid/all-rents")

      .then((res) => setRents(res.data));
  }, []);

  return (
    <ul className="listMaterial">
      {rents.map((rents, index) => (
        <RentSquare key={index} material={rents} />
      ))}
    </ul>
  );
};

export default Rents;