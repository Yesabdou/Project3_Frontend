import React, { useState } from "react";
import axios from "axios";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import RentSquare from "./RentSquare";


const RentsByUser = () => {
    
  const {userid} = useParams();
  const [rents, setRents] = useState([]);

  useEffect(() => {
        axios
        .get(`https://handishare.herokuapp.com/api/user/${userid}/all-rents`)
        
        .then((res) => setRents(res.data))
        .catch((err)=> console.log(err))
  }, []);

  return (
    <ul className="listMaterial">
      {rents.map((rents, index) => (
        <RentSquare key={index} rent={rents} />
      ))}
    </ul>
  );
};

export default RentsByUser;