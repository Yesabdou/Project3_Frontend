import Materials from "./Materials";
import filter from "../assets/images/Filter.png";

const ResultsContainer = () => {
  return (
    <div className="resultsContainer">
      <Materials />
      <ul className="toggleButtons">
        <h2>
          <span>
            <img src={filter} alt="" />
          </span>
          &emsp;Filtrer
        </h2>

        <li>filtrer par catégorie</li>
        <li>filtrer par catégorie</li>
      </ul>
    </div>
  );
};

export default ResultsContainer;

//pour l'authenfication regarder le truc de robin projet management client    Client
