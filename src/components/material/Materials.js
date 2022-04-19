import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import MaterialSquare from "./MaterialSquare";

const Materials = (props) => {
  return (
    <ul className="listMaterial">
      {props.materials.map((material, index) => (
        <MaterialSquare key={index} material={material} />
      ))}
    </ul>
  );
};

export default Materials;
