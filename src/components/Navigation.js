import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Navigation = (props) => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
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

        {isLoggedIn && (
          <>
            <button onClick={logOutUser}>Logout</button>
            <span>{user && user.name}</span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/user/register">
              {" "}
              <button>Sign Up</button>{" "}
            </Link>
            <Link to="/user/login">
              {" "}
              <button>Login</button>{" "}
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
