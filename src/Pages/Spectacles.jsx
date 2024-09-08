import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import End from "../Component/End";
import Gallery from "../Component/Gallery";
import Gallery2 from "../Component/Gallery2";
import "./Spectacles.css";
import mobil from "../Pic/mobil.jpg";
import opera from "../Pic/opera.jpg";
import bastien from "../Pic/bastien.jpg";
import bastienne from "../Pic/bastienne.jpg";

const Spectacles = () => {
  const [imageAgrandie, setImageAgrandie] = useState(null);

  const operaRef = useRef(null);
  const bastienRef = useRef(null);

  const handleImageClick = (image) => {
    setImageAgrandie(image);
  };

  const handleCloseImage = () => {
    setImageAgrandie(null);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Compagnie Poly R - Spectacles</title>
        <meta
          name="description"
          content="Découvrez les spectacles de la Compagnie Poly R, dont L'Opéramobil' et Bastien & Bastienne. Des performances uniques avec des artistes talentueux."
        />
      </Helmet>

      <div className="show">
        <div className="show-titre">
          <h1>Spectacles</h1>
        </div>
        <div id="opera" className="showplus" ref={operaRef}>
          <h2>L'opéramobil'</h2>
          <p>
            <span>L’Opéramobil’</span> est une troupe itinérante portée par{" "}
            <Link to="/lacie">
              <span>la Compagnie Poly R</span>
            </Link>{" "}
            ayant pour objectif de remettre au goût du jour l’art de l’Opéra.
            <br />
            Elle rassemble six artistes pluridisciplinaires professionnels ou en
            cours de professionnalisation. <br />
            En juillet 2024, la troupe s’est produite pour la première fois
            pendant 5 jours dans le département de la Loire en Région
            Rhône-Alpes. <br />
            Accompagnés par leur piano droit transporté sur une remorque, les
            talentueux artistes chanteurs lyriques, pianistes, et guitariste ont
            fait découvrir ou redécouvrir des airs d’opéra, de comédie musicale
            et des standards de jazz à un public curieux et attentif. <br />
            Ils ont chanté à pleine voix chaque matin lors des marchés de
            Roanne, Le Coteau, Feurs, Montrond-les-Bains et Civens, et chaque
            soir dans des lieux insolites tels que la P’tite ferme biologique de
            Rozier-en-Donzy, aux Ruines de Donzy de Salt-en-Donzy dans un cadre
            paradisiaque au bord de la rivière, pendant la guinguette estivale
            annuelle de Le Coteau, ou encore à côté du Château de Cleppé dans
            une immense grange aménagée. <br />
            Le public, visiblement ravi, a ainsi pu se laisser porter par des
            programmes musicaux éclectiques et forts en émotions et en a
            redemandé, c’est pourquoi <span>L’Opéramobil’</span> sera de retour
            en juillet 2025 pour une saison 2 qui s’annonce opératiquement
            explosive !
          </p>
          <div className="pic-opera">
            <img
              src={mobil}
              alt="Opéra Mobile groupe"
              onClick={() => handleImageClick(mobil)}
              loading="lazy"
            />
            <img
              src={opera}
              alt="logo Opéra Mobile"
              onClick={() => handleImageClick(opera)}
              loading="lazy"
            />
          </div>
          <h3>Les artistes de la troupe</h3>
          <h4>
            <Link to="/lacie#roxane">Roxane Macaudière</Link>
          </h4>
          <h4>
            <Link to="/lacie#herve">Hervé Le Bert</Link>
          </h4>
          <h4>
            <Link to="/lacie#thomas">Thomas Avrillon</Link>
          </h4>
          <h4>
            <Link to="/lacie#melysine">Mélysine Escande</Link>
          </h4>
          <h4>
            <Link to="/lacie#galtier">Galtier Le Bilhan</Link>
          </h4>
          <h4>
            <Link to="/lacie#fumi">Fumi Oka</Link>
          </h4>
        </div>
        <div className="gall">
          <h2>Galerie</h2>
        </div>
        <Gallery2 />

        <div id="bastien" className="showplus1" ref={bastienRef}>
          <h2>Bastien & Bastienne</h2>
          <p>
            <span>Bastien & Bastienne</span> est un spectacle pour enfants créé
            à partir de l’opéra Bastien et Bastienne de Mozart. <br />
            Roxane Macaudière et Hervé Le Bert ont arrangé cette œuvre pour
            guitare électrique et trois chanteurs afin d’initier les plus petits
            aux voix lyriques, tout en apportant une touche de modernité à cette
            création. <br />
            Pour l’occasion, une troupe d’artistes professionnels ou en voie de
            professionnalisation a été créée. Elle est composée de Roxane
            Macaudière, Hervé Le Bert, Fumi Oka et Nathan Brunet. <br />
            La troupe a eu le bonheur de donner ce spectacle en représentation
            dans six établissements scolaires de la Loire en Région Rhône-Alpes
            durant l’année 2023/2024, proposant à chaque fois aux enfants âgés
            de 4 à 12 ans des ateliers interactifs autour de l’Opéra, de la
            danse et du théâtre, suivis d’une représentation du spectacle dans
            laquelle les enfants participaient et interagissaient avec les
            artistes.
          </p>
          <div className="pic-opera">
            <img
              src={bastien}
              alt="Bastien"
              onClick={() => handleImageClick(bastien)}
              loading="lazy"
            />
            <img
              src={bastienne}
              alt="Bastienne"
              onClick={() => handleImageClick(bastienne)}
              loading="lazy"
            />
          </div>
          <h3>Les artistes de la troupe</h3>
          <h4>
            <Link to="/lacie#fumi">Fumi Oka</Link>
          </h4>
          <h4>
            <Link to="/lacie#nathan">Nathan Brunet</Link>
          </h4>
          <h4>
            <Link to="/lacie#roxane">Roxane Macaudière</Link>
          </h4>
          <h4>
            <Link to="/lacie#herve">Hervé Le Bert</Link>
          </h4>
        </div>
        <div className="gall">
          <h2>Galerie</h2>
        </div>
        <Gallery />
      </div>

      <End />
      {imageAgrandie && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={imageAgrandie} alt="Agrandie" />
            <button className="close-button" onClick={handleCloseImage}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Spectacles;
