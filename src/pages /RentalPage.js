import Carte from "../components/MapLocation";
import Navigation from "../components/Navigation";
import ResultsContainer from "../components/ResultsContainer";
import SearchBar from "../components/SearchBar";

const RentalPage = () => {
  return (
    <div>
      <Navigation />
      <div className="page">
        <section className="displayResults">
          <SearchBar />
          <ResultsContainer />
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default RentalPage;
// comment faire pour utiliser un eul component et y afficher les resultats en fonction de l'url tapée
