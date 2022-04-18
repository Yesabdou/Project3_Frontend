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
        <div className="authButtons">
          {/* {isLoggedIn && (                                   -----gerer le logout depuis le profil------
            <>
              <button onClick={logOutUser}>Logout</button>
              <span>{user && user.name}</span>
            </>
          )} */}

          {!isLoggedIn && (
            <>
              <Link to="/user/register">
                <button className="authButton">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z" />
                  </svg>
                  111
                </button>
              </Link>
              <Link to="/user/login">
                <button className="authButton">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z" />
                  </svg>
                  111
                </button>
              </Link>
            </>
          )}
        </div>

        {isLoggedIn && (
          <NavLink
            to="/user/:id"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Profil</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
