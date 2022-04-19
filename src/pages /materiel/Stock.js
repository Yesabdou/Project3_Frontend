import Navigation from "../../components/Navigation";
import ResultsContainer from "../../components/ResultsContainer";
import SearchBar from "../../components/SearchBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Stock = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="page">
        <section className="displayResults">
          <SearchBar />
          <div className="resultsContainer" data-aos="fade-up">
            <ResultsContainer />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stock;
// comment faire pour utiliser un eul component et y afficher les resultats en fonction de l'url tapée
