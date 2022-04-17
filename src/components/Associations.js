import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AssociationSquare from "./AssociationSquare";
import Carte from "./MapLocation";

// import associations from "./Associations.json";

const Associations = () => {
  const [associations, setAssociation] = useState([]);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get("https://handishare.herokuapp.com/api/user")

      .then((res) => setAssociation(res.data));
  }, []);

  return (
    <ul className="listAssociation">
      {associations.map((association, index) => (
        <AssociationSquare key={association.id} association={association} />
      ))}

      <Carte />
    </ul>
  );
};

export default Associations;
