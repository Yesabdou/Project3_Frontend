import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="page">
        <section className="presentation">
          <div data-aos="fade-left" className="blocText">
            <h1>Louez votre </h1>
            <p>
              La location d’un matériel médical peut être nécessaire lorsque
              vous ou votre proche êtes en perte d’autonomie de manière
              temporaire ou permanente. Quelle que soit la durée de votre
              location de matériel médical, Altivie peut vous accompagner
              Handirent
            </p>
            {/* <button className="button">
            Découvrer les associations adhérentes
          </button>
           */}

            <div className="fillButton">
              <NavLink to="/comprendre-le-handicap">
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
            <h2 data-aos="fade-right">Des enfants qui évoluent rapidement</h2>
          </div>
          <div>
            <p data-aos="fade-left">
              Les associations accompagnant des enfants en situation de handicap
              ont besoin de nombreux matériels pour aider les enfants à gagner
              en autonomie : fauteuil roulant, siège pédiatrique, poussette
              adaptée, corset, matériel éducatif… Même si ce matériel est
              indispensable, il pose 3 problèmes aux associations : il est cher,
              il prend beaucoup de place et surtout il devient rapidement caduc.
              En effet, les enfants grandissent et leurs besoins évoluent au fil
              des mois. Par exemple, un fauteuil roulant ou un corset acheté à
              un enfant de 7 ans ne sera plus adapté à sa morphologie lorsqu’il
              aura 9 ans. Les associations se retrouvent donc avec beaucoup de
              matériel non-utilisé, qu’il faut stocker. Ce stockage pose
              beaucoup de problème, notamment dans les villes où les locaux sont
              souvent exigus. Les locaux sont également trop exigus pour stocker
              l’ensemble du matériel nécessaire pour les enfants, notamment sur
              le volet de l’ergothérapie. Or, l’augmentation du nombre d’enfants
              polyhandicapés amène à un besoin accru de matériels « lourds ».
            </p>
          </div>
        </section>

        <section className="contact">
          <div>
            <h2> Vous souhaitez nous rejoindre ? </h2>
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
      </div>
    </div>
  );
};

export default Home;
