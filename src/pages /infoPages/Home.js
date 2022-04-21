import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* <div className={`${showNavBar ? "appear" : "disapear"}`}>
        <Navigation />
      </div> */}

      <Navigation navEffect={`${showNavBar ? "appear" : "disapear"}`} />

      <div className="page">
        <section className="presentation">
          <div data-aos="fade-left" className="blocText">
            <h1>Vous ne l'utilisez pas ?Louez le 🤷🏻‍♀️ </h1>
            <p>
              Handishare propose une plateforme numérique permettant la
              mutualisation et la location de matériels entre les associations.
              Plutôt que de stocker inutilement un fauteuil roulant non-utilisé,
              l’association pourra prêter ce matériel à une autre association,
              et ainsi offrir une seconde vie à ce fauteuil, et une meilleure
              vie à un enfant !
            </p>
            {/* <button className="button">
            Découvrer les associations adhérentes
          </button>
           */}

            <div className="fillButton">
              <NavLink to="/annuaire">
                <div>
                  Découvrer les associations adhérentes
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </NavLink>
            </div>
          </div>

          {/* <img className="homepageimage" src={homepageimage} alt="" /> */}
        </section>
        <section className="contexte">
          <div className="grid">
            <h2 data-aos="fade-right">Pourquoi Handishare ?</h2>
          </div>
          <div>
            <p data-aos="fade-left">
              Handishare a été créé pour répondre à un problème que rencontrent
              de nombreuses associations quotidiennement : comment procurer aux
              enfants en situation de handicap du matériel adapté leur
              permettant de grandir et de s’épanouir comme les autres enfants ?
              Les associations accompagnant des enfants en situation de handicap
              ont besoin de nombreux matériels pour aider les enfants à gagner
              en autonomie : fauteuil roulant, siège pédiatrique, poussette
              adaptée, corset, matériel éducatif… Ce matériel est indispensable,
              mais avec lui vient plusieurs problèmes : il est cher, il prend
              beaucoup de place et surtout il devient rapidement caduc. En
              effet, les enfants grandissent et leurs besoins évoluent au fil
              des mois. Par exemple, un fauteuil roulant ou un corset acheté à
              un enfant de 7 ans ne sera plus adapté à sa morphologie lorsqu’il
              aura 9 ans. Les associations se retrouvent donc avec beaucoup de
              matériel non-utilisé, qu’il faut stocker, alors que les locaux
              sont souvent exigus.
            </p>
          </div>
        </section>
        <section data-aos="fade-up" className="optionBoxes">
          <div className="optionBoxe">
            <div>
              <svg
                className="icone"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
              </svg>
            </div>{" "}
            <h3>Vous cherchez un matériel spécifique ? </h3>
            <p>Inscrivez vous pour voir la centaine de matériel disponnible.</p>
          </div>
          <div className="optionBoxe">
            <div>
              <svg
                className="icone"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
              </svg>
            </div>
            <h3>Vous voulez mettre votre matériel en partage ?</h3>
            <p>
              Publiez sans plus attendre toutes vos annonces sur notre site{" "}
            </p>
          </div>
          <div className="optionBoxe">
            <div>
              <svg
                className="icone"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z" />
              </svg>
            </div>
            <h3>Vous souhaitez reserver un matériel ?</h3>
            <p>
              contactez directement l'association qui dispose du matériel que
              vous cherchez pour reserver ce dernier
            </p>
          </div>
        </section>
        <section className="contact">
          <div>
            <h2>Vous souhaitez nous rejoindre ? </h2>
            <p>Envoyez nous sans plus attendre un mail</p>
          </div>
          <div className="">
            <address>
              <a className="buttonContact" href="mailto:mrdou@hotmail.fr">
                Contactez nous par mail
              </a>
            </address>
          </div>
        </section>
        <section className="PhraseBateau">
          <h2> Because sharing is caring </h2>
        </section>
        <section className="basDePage"></section>
      </div>
    </div>
  );
};

export default Home;
