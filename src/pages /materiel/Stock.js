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

  const [catg, setCatg] = useState("");
  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios.get("https://handishare.herokuapp.com/api/material").then((res) => {
      setMaterial(res.data);
      setMaterialFiltered(res.data);
    });
  }, []);

  useEffect(() => {
    let filtered = materials.filter((material) =>
      material.name.toUpperCase().includes(keyword.toUpperCase())
    );
    if (catg) {
      filtered = filtered.filter(
        (material) => material.category === catg.value
      );
    }
    setMaterialFiltered(filtered);
    console.log(filtered);
  }, [catg, keyword]);

  return (
    <div>
      <Navigation />

      <div className="page">
        <section className="displayResults">
          <SearchBar
            setKeyword={setKeyword}
            keyword={keyword}
            setCatg={setCatg}
            catg={catg}
            materialsFiltered={materialsFiltered}
            setMaterialFiltered={setMaterialFiltered}
          />
          {/* <div> {console.log(setKeyword)}</div> */}
          <div className="resultsContainer" data-aos="fade-up">
            <Materials materialsToDisplay={materialsFiltered} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stock;
