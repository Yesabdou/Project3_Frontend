import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../Navigation";
import axios from "axios";

function UpdateRent(props) {
  // const { user } = useContext(AuthContext);
  const { materialid } = useParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const { rentid } = useParams();
  const [rent, setRent] = useState({});
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    //dès que le composant est monté jouer axios
    axios
      .get(
        `https://handishare.herokuapp.com/api/material/${materialid}/rent/${rentid}`
      )
      .then((res) => setRent(res.data));
  }, [materialid, rentid]);

  useEffect(() => {
    setStartDate(rent.startDate);
  }, [rent]);

  useEffect(() => {
    setEndDate(rent.endDate);
  }, [rent]);

  useEffect(() => {
    setStatus(rent.status);
  }, [rent]);

  const navigate = useNavigate();

  const handleStartDate = (e) => setStartDate(e.target.value);
  const handleEndDate = (e) => setEndDate(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);

  const handleMaterialSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      endDate,
      startDate,
      status,
    };
    axios
      .patch(
        `https://handishare.herokuapp.com/api/material/${materialid}/rent/${rentid}`,
        requestBody
      )
      .then((response) => {
        console.log(response);
        navigate(`/material/${materialid}/all-rents`);
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
            <label htmlFor="startDate">Date début</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={handleStartDate}
              placeholder={rent.startDate}
              defaultValue={rent.startDate}
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
              placeholder={rent.endDate}
              defaultValue={rent.endDate}
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
              placeholder={rent.status}
              defaultValue={rent.status}
            >
              {" "}
              <option value="En cours">En cours</option>
              <option value="Rendu">Rendu</option>
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

export default UpdateRent;
