import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import service from "../api/service";
import Navigation from "./Navigation";

const API_URL = "https://handishare.herokuapp.com/api";

function AddMaterial(props) {
  const [name, setName] = useState("");
  const [ref, setRef] = useState("");
  const [owner, setOwner] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const [condition, setCondition] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleRef = (e) => setRef(e.target.value);
  const handleOwner = (e) => setOwner(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  // const handlePicture = (e) => setPicture(e.target.value);
  const handleCondition = (e) => setCondition(e.target.value);
  const handleAgeMin = (e) => setAgeMin(e.target.value);
  const handleAgeMax = (e) => setAgeMax(e.target.value);

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("picture", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setPicture(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleMaterialSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      ref,
      owner,
      category,
      description,
      picture,
      condition,
      ageMin,
      ageMax,
    };
    try {
      await axios.post(`${API_URL}/material/new`, requestBody);
      navigate("/material");
    } catch (error) {
      console.error(error);
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
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
            />
          </div>
          <div>
            <label htmlFor="ref">Référence</label>
            <input
              type="text"
              name="ref"
              id="ref"
              value={ref}
              onChange={handleRef}
            />
          </div>
          <div>
            <label htmlFor="owner">Association Propriétaire</label>
            <input
              type="text"
              name="owner"
              id="owner"
              value={owner}
              onChange={handleOwner}
            />
          </div>
          <div>
            <label htmlFor="category">Catégorie</label>
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={handleCategory}
            />
          </div>
          <div>
            <label htmlFor="description">Descritpion</label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleDescription}
            />
          </div>
          <div>
            <label className="" htmlFor="picture">
              Photo
            </label>
            <input
              className="buttonCss"
              type="file"
              name="picture"
              id="picture"
              value={picture}
              onChange={handleFileUpload}
            />
          </div>
          <div>
            <label htmlFor="condition">Etat</label>
            <input
              type="text"
              name="condition"
              id="condition"
              value={condition}
              onChange={handleCondition}
            />
          </div>
          <div>
            <label htmlFor="ageMin">Age Minimum</label>
            <input
              type="text"
              name="ageMin"
              id="ageMin"
              value={ageMin}
              onChange={handleAgeMin}
            />
          </div>
          <div>
            <label htmlFor="ageMax">Age Maximum</label>
            <input
              type="text"
              name="ageMax"
              id="ageMax"
              value={ageMax}
              onChange={handleAgeMax}
            />
          </div>
          <div>
            <button className="buttonCss" type="submit">
              Ajouter le matériel
            </button>
          </div>
        </form>
      </div>
      <div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default AddMaterial;
