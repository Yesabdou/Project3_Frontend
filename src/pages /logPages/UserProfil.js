import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import MaterialSquare from "../../components/material/MaterialSquare";
import Navigation from "../../components/Navigation";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Modal from "../../components/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
import { api } from "../../api/service";

const UserProfil = () => {
  //hide navbar
  const [showNavBar, setShowNavbar] = useState(true);
  const controlSearchBAr = () => {
    if (window.scrollY > 10) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlSearchBAr);

    return () => {
      window.removeEventListener("scroll", controlSearchBAr);
    };
  }, []);

  //animations
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // User  logs states
  const [showInfos, setShowShowInfo] = useState(true);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  // Animation button
  const [hidenMessage, setHidenMessage] = useState("");

  // popUp message when click on delete
  const toggleInfos = () => {
    setShowShowInfo(!showInfos);
  };
  const [showModal, setShowModal] = useState(false);

  const [association, setOneAssociation] = useState({}); // dans le router j'ai mis un /:id ue je recupere ici avec le useParams
  // call axios with the current logedin user id
  useEffect(() => {
    if (user)
      api.get(`/user/${user?.id}`).then((res) => setOneAssociation(res.data));
  }, [user]);
  // useEffect(() => {
  //   console.log("in useeffect looking at user i get", user);
  // }, [user]);
  // show hide popup delte
  const ToggleModale = () => {
    setShowModal(!showModal);
  };

  // function delete user
  const deleteUser = () => {
    api.delete(`/user/${user?.id}/delete`).then((res) => console.log(res));
    navigate("/");

    removeToken();
  };

  // call axios to show material
  const [materials, setMaterial] = useState([]);
  useEffect(() => {
    api
      .get("/material")

      .then((res) => setMaterial(res.data));
  }, []);
  //---------------------------------------

  return (
    <div className="pageOneAssociation">
      <Navigation navEffect={`${showNavBar ? "appear" : "disapear"}`} />

      {/* popup delete  */}
      {showModal ? (
        <div className="popUp">
          <Modal>
            <h2>Voulez vous vraiment supprimer votre profil ?</h2>
            <p>
              Cette opération entrainera la suppression de votre compte et
              toutes les informations associées{" "}
            </p>
            <div className="deleteButton" onClick={deleteUser}>
              Supprimer votre profil
            </div>

            <NavLink className="" to="/">
              <div className="backkButton">Revenir en arrière</div>
            </NavLink>
          </Modal>
        </div>
      ) : null}

      <div className="page ">
        <section>
          <div className="infoAssociation">
            <h1> {association.pseudo}</h1>
            <h2> Finess : {association.finess}</h2>

            <button onClick={toggleInfos} className="toggleInfos">
              {!showInfos ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
                </svg>
              )}
            </button>
          </div>
        </section>
        {!showInfos ? (
          <section data-aos="fade-down" className="plusInfos">
            <div className="infoContainer">
              <h3>Adresse :</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${association.latitude},${association.longitude}`}
              >
                {association.adresse}
              </a>
              <h3>Telephone :</h3>
              <p> {association.phone} </p>
              <h3>Email :</h3>
              <a href={`mailto:${association.email}`}>{association.email}</a>

              <h3>Description :</h3>
              <p> {association.bio} </p>
            </div>

            <div className="crudbutton">
              {/* <img className="logoSolo" src={association.picture} alt="logo" /> */}

              {user && (
                <>
                  <a href="/user/edit">
                    <div className="edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z" />
                      </svg>
                    </div>
                  </a>

                  <div className="delete" onClick={ToggleModale}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          </section>
        ) : (
          ""
        )}

        {isLoggedIn && (
          <section className="miniNavBar">
            <NavLink
              onMouseEnter={() => setHidenMessage("  Ajouter un material")}
              onMouseLeave={() => setHidenMessage("")}
              className=""
              to={{ pathname: `/material/new` }}
            >
              <div className="add">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z" />
                </svg>
                <span className="hidenText"> {hidenMessage}</span>
              </div>
            </NavLink>
            <div className="backButton">
              <NavLink className="" to="/annuaire">
                <div className="back">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" />
                  </svg>
                </div>
              </NavLink>
            </div>
          </section>
        )}
        {isLoggedIn && (
          <section className="ownedMaterial ">
            <div>
              <h1>Inventaire du materiel : </h1>
              <ul data-aos="fade-up" className="ownedMaterial">
                {materials
                  .filter((material) => material?.owner?._id === user.id)
                  .map((material, index) => (
                    <MaterialSquare key={material._id} material={material} />
                  ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default UserProfil;
