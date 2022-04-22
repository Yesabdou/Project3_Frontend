import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { api } from "../../api/service";

function AddRent(props) {
  const { user } = useContext(AuthContext);
  const { materialid } = useParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [rentedTo, setRentedTo] = useState("");
  const [adresse, setAdresse] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleStartDate = (e) => setStartDate(e.target.value);
  const handleEndDate = (e) => setEndDate(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);
  const handleRentedTo = (e) => setRentedTo(e.target.value);
  const handleAdresse = (e) => setAdresse(e.target.value);

  const handleRentSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      startDate,
      endDate,
      status,
      rentedTo,
      adresse,
      materialId: materialid,
      ownerId: user.id,
    };

    api
      .post(`/material/${materialid}/rents`, requestBody)
      .then((response) => {
        console.log(response);
        console.log({ user });
        navigate(`/material/${materialid}`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <div className=" formLog">
        <form onSubmit={handleRentSubmit}>
          <div className="cases">
            <label htmlFor="startDate">Date début</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={handleStartDate}
            />
          </div>
          <div className="cases">
            <label htmlFor="endDate">Date fin</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={handleEndDate}
            />
          </div>
          <div className="cases">
            <label htmlFor="status">Status</label>
            <select
              type="text"
              name="status"
              id="status"
              value={status}
              onChange={handleStatus}
            >
              {" "}
              <option>-----</option>
              <option value="A venir">A venir</option>
              <option value="En cours">En cours</option>
              <option value="Rendu">Rendu</option>
            </select>
          </div>
          <div className="cases">
            <label htmlFor="rentedTo">Prêté à</label>
            <input
              type="text"
              name="rentedTo"
              id="rentedTo"
              value={rentedTo}
              onChange={handleRentedTo}
            />
          </div>
          <div className="cases">
            <label htmlFor="adresse">Adresse de la famille</label>
            <input
              type="text"
              name="adresse"
              id="adresse"
              value={adresse}
              onChange={handleAdresse}
            />
          </div>
          <div className="cases">
            <button className="buttonCss" type="submit">
              Créer fiche de prêt
            </button>
          </div>
        </form>
      </div>
      <div>
        {errorMessage && <p className="error-message">{errorMessage} </p>}
      </div>
    </div>
  );
}

export default AddRent;
