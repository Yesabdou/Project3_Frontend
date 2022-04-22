import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RentSquare from "./RentSquare";
import { api } from "../../api/service";

const Rents = () => {
  const [rents, setRents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/material/${id}/all-rents`)

      .then((res) => setRents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul className="listMaterial" data-aos="fade">
      {rents.map((rents, index) => (
        <RentSquare key={index} rent={rents} />
      ))}
    </ul>
  );
};

export default Rents;
