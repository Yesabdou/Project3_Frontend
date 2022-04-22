import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";

import { api } from "../api/service";

function UpdateMaterial(props) {
  const { id } = useParams();
  const [material, setMaterial] = useState({});

  useEffect(() => {
    //dès que le composant est monté jouer axios
    api.get(`/material/${id}`).then((res) => setMaterial(res.data));
  }, [id]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    setDescription(material.description);
  }, [material]);

  useEffect(() => {
    setName(material.name);
  }, [material]);

  useEffect(() => {
    setCondition(material.condition);
  }, [material]);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCondition = (e) => setCondition(e.target.value);

  const handleMaterialSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      name,
      description,
      condition,
    };
    api
      .put(`/material/${id}`, requestBody)
      .then((response) => {
        console.log(response);
        navigate(`/list-materiels`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <Navigation />

      <div className="formLog">
        <form onSubmit={handleMaterialSubmit}>
          <div>
            <label htmlFor="name">Nom du matériel</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
              placeholder={material.name}
              defaultValue={material.name}
            />
          </div>
          <div className="cases">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleDescription}
              placeholder={material.description}
              defaultValue={material.description}
            />
          </div>
          <div className="cases">
            <label htmlFor="condition">Etat</label>
            <select
              type="text"
              name="condition"
              id="condition"
              value={condition}
              onChange={handleCondition}
              placeholder={material.condition}
              defaultValue={material.condition}
            >
              {" "}
              <option value="Etat neuf">Etat neuf</option>
              <option value="Très bon état">Très bon état</option>
              <option value="Bon état">Bon état</option>
              <option value="Etat satisfaisant">Etat satisfaisant</option>
            </select>
          </div>
          <div>
            <input className="buttonCss" type="submit" value="Modifier" />
          </div>
        </form>
      </div>
      <div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default UpdateMaterial;
