import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navigation = (props) => {
  return (
    <div className={`Navig ${props.navEffect}`}>
      <ul>
        <picture>
          <img src={logo} className="logo" alt="aaa" />
        </picture>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/Annuaire"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Annuaire</li>
        </NavLink>
        <NavLink
          to="/list-materiels"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Materiel en location</li>
        </NavLink>
        <NavLink
          to="/comprendre-le-handicap"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Comprendre le handicap</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

//pour l'authenfication regarder le truc de robin projet management client    Client
