import Navigation from "../components/Navigation";
import ResultsContainerAssociation from "../components/ResultsContainerAssociation";
import SearchBar from "../components/SearchBar";

const Annuaire = () => {
  return (
    <div className="results">
      <Navigation />
      <div className="page">
        <section className="displayResults">
          <SearchBar />

          <ResultsContainerAssociation />
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Annuaire;
