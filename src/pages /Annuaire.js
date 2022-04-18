import { useState } from "react";
import Associations from "../components/Association/Associations";
import Carte from "../components/Association/Carte";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

const Annuaire = () => {
  const [list, setList] = useState(true);
  const [map, setMap] = useState(false);
  const [button1, setButton1] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "carte") {
      setMap(true);
      setList(false);
      setButton1(true);
    } else if (e.target.id === "liste") {
      setMap(false);
      setList(true);
      setButton1(false);
    }
  };

  return (
    <div className="results">
      <Navigation />
      <div className="page">
        <section className="displayResults">
          <SearchBar toggle={handleModals} button={button1} />

          <div className="resultsContainer">
            {list && <Associations />}
            {map && <Carte />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Annuaire;
