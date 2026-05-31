import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import End from "../Component/End";
import Gallery from "../Component/Gallery";
import Gallery2 from "../Component/Gallery2";
import "./Spectacles.css";

import opera from "../Pic/opera.webp";
import bastien from "../Pic/bastien.webp";
import bastienne from "../Pic/bastienne.webp";
import dolls2 from "../Pic/dolls2.webp";
import openew from "../Pic/newteam.webp";
import newcalendar from "../Pic/tour.webp";

const Spectacles = () => {
  const location = useLocation();
  const [enlargedImage, setEnlargedImage] = useState(null);

  const operaRef = useRef(null);
  const bastienRef = useRef(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  /* ---------------- SCROLL ANIMATION ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ---------------- HASH SCROLL ---------------- */
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    if (!location.hash) return;

    const el = document.getElementById(location.hash.replace("#", ""));
    if (!el) return;

    const offset = 315;

    window.scrollTo({
      top: el.offsetTop - offset,
      behavior: "smooth",
    });
  }, [location.hash]);

  return (
    <>
      <div className="show">
        <div className="show-titre animate-on-scroll">
          <h1>Spectacles</h1>
        </div>

        {/* ---------------- OPERA ---------------- */}
        <div id="opera" className="showplus animate-on-scroll" ref={operaRef}>
          <h2>L&apos;Opéramobil&apos;</h2>

          <p className="animate-on-scroll">
            <span>L’Opéramobil’</span> est une troupe itinérante portée par{" "}
            <Link to="/lacie">
              <span>la compagnie Poly R</span>
            </Link>{" "}
            ayant pour objectif de remettre au goût du jour l’art de l’Opéra.
            Elle rassemble six artistes pluridisciplinaires professionnels ou en
            cours de professionnalisation. En juillet 2024, la troupe s’est
            produite pour la première fois pendant 5 jours dans le département
            de la Loire en Région Rhône-Alpes. <br />
            Accompagnés par leur piano droit transporté sur une remorque, les
            talentueux artistes chanteurs lyriques, pianistes et guitariste ont
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
            programmes musicaux éclectiques et forts en émotions , c’est
            pourquoi{" "}
            <Link to="/spectacles#opera">
              <span>L’Opéramobil’</span>
            </Link>{" "}
            sera de retour en juillet 2026 pour une saison 3 qui s’annonce
            opératiquement explosive !
          </p>
          <div className="pic-opera animate-on-scroll">
            <img
              src={openew}
              alt="Opéra Mobile groupe"
              width="330"
              height="300"
              onClick={() => handleImageClick(openew)}
              loading="lazy"
            />
            <img
              src={opera}
              alt="logo Opéra Mobile"
              width="330"
              height="300"
              onClick={() => handleImageClick(opera)}
              loading="lazy"
            />
          </div>

          <h3>Les artistes de la troupe</h3>
          {[
            { id: "roxane", name: "Roxane Macaudière" },
            { id: "herve", name: "Hervé Le Bert" },
            { id: "fumi", name: "Fumi Oka" },
            { id: "thomas", name: "Thomas Avrillon" },
            { id: "alba", name: "Alba Cantuern" },
            { id: "yuku", name: "Yuku Yonemitsu" },
            { id: "melusine", name: "Mélusine Escande" },
            { id: "galtier", name: "Galtier Le Bihan" },
          ].map((a) => (
            <h4 key={a.id}>
              <Link to={`/lacie#${a.id}`} className="disable-mobile-link">
                {a.name}
              </Link>
            </h4>
          ))}
        </div>
        {/* ---------------- GALLERY ---------------- */}
        <div className="gall animate-on-scroll">
          <h2>Galerie</h2>
        </div>

        <Gallery2 />
        <div className="photos">
          <p>© photographe Camille Montana</p>
        </div>
        <div className="dates animate-on-scroll">
          <h3>Dates été 2026</h3>
          <img
            src={newcalendar}
            alt="dates passées"
            width="530px"
            height="530px"
            onClick={() => handleImageClick(newcalendar)}
            loading="lazy"
          />
        </div>
        {/* ---------------- BASTIEN ---------------- */}
        <div
          id="bastien"
          className="showplus1 animate-on-scroll"
          ref={bastienRef}
        >
          <h2>Bastien &amp; Bastienne</h2>

          <p className="animate-on-scroll">
            <span>Bastien & Bastienne</span>, un spectacle pour enfants créé à
            partir de l’opéra Bastien et Bastienne de Mozart. <br />
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
          <div className="pic-opera animate-on-scroll">
            <img
              src={bastien}
              alt="Bastien"
              width="330px"
              height="300px"
              onClick={() => handleImageClick(bastien)}
              loading="lazy"
            />
            <img
              src={bastienne}
              alt="Bastienne"
              width="330px"
              height="300px"
              onClick={() => handleImageClick(bastienne)}
              loading="lazy"
            />
          </div>

          <h3>Les artistes de la troupe</h3>
          {[
            { id: "fumi", name: "Fumi Oka" },
            { id: "nathan", name: "Nathan Brunet" },
            { id: "roxane", name: "Roxane Macaudière" },
            { id: "herve", name: "Hervé Le Bert" },
          ].map((a) => (
            <h4 key={a.id}>
              <Link to={`/lacie#${a.id}`} className="disable-mobile-link">
                {a.name}
              </Link>
            </h4>
          ))}
        </div>

        <div className="gall animate-on-scroll">
          <h2>Galerie</h2>
        </div>
        <Gallery />
      </div>

      {/* ---------------- PIC 20 (IMPORTANT INCHANGÉ) ---------------- */}
      <div className="pic20 animate-on-scroll">
        <img
          src={dolls2}
          alt="dessin poly r"
          className="responsive-img20"
          onClick={() => handleImageClick(dolls2)}
          loading="lazy"
        />
      </div>
      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
            <button className="close-button" onClick={handleCloseImage}>
              ×
            </button>
          </div>
        </div>
      )}
      <End />
    </>
  );
};

export default Spectacles;
