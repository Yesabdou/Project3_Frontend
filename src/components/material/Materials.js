import { Link } from "react-router-dom";

const Materials = (props) => {
  return (
    <ul className="listMaterial">
      {props.materialsToDisplay
        //chercher la key qui se trouver dans la searchbar
        .map((material, index) => (
          // <MaterialSquare key={index} material={material} />
          <>
            <li className="materialSquare">
              <img src={material.picture} alt="" />
              <h2>ref : {material.ref}</h2>
              <h1>{material.name}</h1>
              <div className="">
                <p className="description">{material.description}</p>
              </div>
              <div className="p">
                <div>
                  <Link to={{ pathname: `/material/${material._id}` }}>
                    <p className="preview"> Vérifier les disponibilités </p>
                  </Link>
                </div>
              </div>
            </li>
          </>
        ))}
    </ul>
  );
};

export default Materials;
