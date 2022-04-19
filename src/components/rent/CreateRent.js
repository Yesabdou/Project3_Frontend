import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const API_URL = "https://handishare.herokuapp.com/api";


function AddRent(props) {
    const { user } = useContext(AuthContext);
    const {materialid} = useParams();
    // const [materialId, setMaterialId] = useState("");
    // const [ownerId, setOwnerId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    
    const [rentedTo, setRentedTo]= useState("");
    const [adresse, setAdresse] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    // const handleMaterialId = (e) => setMaterialId(e.target.value);
    // const handleOwnerId = (e) => setOwnerId(e.target.value);
    const handleStartDate = (e) => setStartDate(e.target.value);
    const handleEndDate = (e) => setEndDate(e.target.value);
    const handleStatus = (e) => setStatus(e.target.value);
    // const handlePicture = (e) => setPicture(e.target.value);
    const handleRentedTo = (e) => setRentedTo(e.target.value);
    const handleAdresse = (e) => setAdresse(e.target.value);


  const handleRentSubmit = async (e) => {
    e.preventDefault()
    const requestBody = { 
        startDate,
        endDate,
        status,
        rentedTo,
        adresse,
        materialId: materialid,
        ownerId: user }
    
    axios
      .post(`${API_URL}/material/${materialid}/rents`, requestBody)
      .then((response) => {
        console.log(response);
        navigate(`/user/:userid/all-rents`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleRentSubmit}>
          {/* <div>
            <label htmlFor="materialId">Matériel</label>
            <input type="text" name="materialId" id="materialId" value={materialId} onChange={handleMaterialId} />
          </div>
          <div>
            <label htmlFor="ownerId">Propriétaire</label>
            <input type="text" name="ownerId" id="ownerId" value={ownerId} onChange={handleOwnerId} />
          </div> */}
          <div>
            <label htmlFor="startDate">Date début</label>
            <input type="text" name="startDate" id="startDate" value={startDate} onChange={handleStartDate} />
          </div>
          <div>
            <label htmlFor="endDate">Date fin</label>
            <input type="text" name="endDate" id="endDate" value={endDate} onChange={handleEndDate} />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input type="text" name="status" id="status" value={status} onChange={handleStatus} />
          </div>
          <div>
            <label htmlFor="rentedTo">Prêté à</label>
            <input type="text" name="rentedTo" id="rentedTo" value={rentedTo} onChange={handleRentedTo} />
          </div>
          <div>
            <label htmlFor="adresse">Adresse de la famille</label>
            <input type="text" name="adresse" id="adresse" value={adresse} onChange={handleAdresse} />
          </div>
          <div>
          <button type="submit">Créer fiche de prêt</button>
          </div>
        </form>
      </div>
      <div>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
      </div>
    </div>
  );
}

export default AddRent