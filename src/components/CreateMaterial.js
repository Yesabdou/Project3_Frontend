import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { createNewMaterial } from "../api/service";
import { AuthContext } from "../../src/context/auth.context";

function AddMaterial(props) {
  const maxDescriptionLength = 1024;
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [image, setImage] = useState(null);
  const [condition, setCondition] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [errorMessage] = useState(undefined);
  const [descriptionIsTooLong, setDescriptionIsTooLong] = useState(false);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length >= maxDescriptionLength) {
      setDescriptionIsTooLong(true);
    } else {
      setDescriptionIsTooLong(false);
    }
  };

  const handlePicture = (e) => {
    setImage(e.target.files[0]);
    setPicture(e.target.value);
  };
  const handleCondition = (e) => setCondition(e.target.value);
  const handleAgeMin = (e) => setAgeMin(e.target.value);
  const handleAgeMax = (e) => setAgeMax(e.target.value);

  const handleMaterialSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM SUBMISSION", { image });

    const uploadData = new FormData();
    uploadData.append("name", name);
    // uploadData.append("ref", ref);
    uploadData.append("owner", user.id);
    uploadData.append("category", category);
    uploadData.append("description", description);
    uploadData.append("condition", condition);
    uploadData.append("ageMin", ageMin);
    uploadData.append("ageMax", ageMax);
    uploadData.append("image", image);

    try {
      await createNewMaterial(uploadData);
      console.log("success");
      // Clear form or navigate etc
      navigate("/list-materiels");
    } catch (err) {
      console.log("Error while uploading the file: ", err);
    }
  };

  const [message, setMessage] = useState();
  const handleChangeInput = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <Navigation />

      <div className="formLog">
        <form onSubmit={handleMaterialSubmit}>
          <div className="cases">
            <label htmlFor="name">Nom du matériel</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="cases">
            <label htmlFor="category">Catégorie</label>
            <select
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={handleCategory}
            >
              {" "}
              <option value="Fauteuil roulant">Fauteuil roulant</option>
              <option value="Chaise adaptée">Chaise adaptée</option>
              <option value="Matériel ludique">Matériel ludique</option>
            </select>
          </div>
          <div className="cases descriptions">
            <label htmlFor="description">Descritpion</label>
            <textarea
              // type="text"
              maxLength={maxDescriptionLength}
              name="description"
              id="description"
              value={description}
              onChange={handleDescription}
            />
            {descriptionIsTooLong && (
              <div className="error"> Too long max {maxDescriptionLength} </div>
            )}
          </div>
          <div className="pictureFile">
            <label className="" htmlFor="picture">
              Photo
            </label>
            <input
              className=""
              type="file"
              name="picture"
              id="picture"
              value={picture}
              onChange={handlePicture}
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
            >
              {" "}
              <option value="Etat neuf">Etat neuf</option>
              <option value="Très bon état">Très bon état</option>
              <option value="Bon état">Bon état</option>
              <option value="Etat satisfaisant">Etat satisfaisant</option>
            </select>
          </div>
          <div className="cases age">
            <label htmlFor="ageMin">Age Minimum</label>
            <input
              type="number"
              name="ageMin"
              id="ageMin"
              value={ageMin}
              onChange={handleAgeMin}
            />
            <label htmlFor="ageMax">Age Maximum</label>
            <input
              type="number"
              name="ageMax"
              id="ageMax"
              value={ageMax}
              onChange={handleAgeMax}
            />
          </div>
          <div className="cases"></div>
          <div className="cases">
            <input
              className="buttonCss"
              type="submit"
              value="Ajouter le matériel"
            />
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
