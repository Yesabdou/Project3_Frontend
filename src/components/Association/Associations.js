import React, { useState } from "react";
import { useEffect } from "react";
import AssociationSquare from "./AssociationSquare";
import { api } from "../../api/service";

const Associations = () => {
  const [associations, setAssociation] = useState([]);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    const getFunction = async (req, res) => {
      try {
        const res = await api.get("/user");
        setAssociation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFunction();
    return () => {
      // getFunction.Abort(); cleanup function
    };
  }, []);

  return (
    <ul className="listAssociation">
      {associations.map((association, index) => (
        <AssociationSquare key={index} association={association} />
      ))}
    </ul>
  );
};

export default Associations;
