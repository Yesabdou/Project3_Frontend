import Navigation from "../../components/Navigation";
import Materials from "../../components/material/Materials";
import SearchBar from "../../components/SearchBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Stock = () => {
  const [materials, setMaterial] = useState([]);
  const [materialsFiltered, setMaterialFiltered] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios
      .get("https://handishare.herokuapp.com/api/material")
      .then((res) => setMaterial(res.data));
  }, []);

  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  return (
    <div>
      <Navigation />

      <div className="page">
        <section className="displayResults">
          <SearchBar
            setKeyword={setKeyword}
            keyword={keyword}
            materialsFiltered={materialsFiltered}
            setMaterialFiltered={setMaterialFiltered}
          />
          <div> {console.log(keyword)}</div>
          <div className="resultsContainer" data-aos="fade-up">
            <Materials materials={materials} keyword={keyword} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stock;
