import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
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

const ShowSection = ({ id, title, content, images, artists }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.hash === `#${id}` && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash, id]);

  return (
    <div id={id} className="showplus" ref={sectionRef}>
      <h2>{title}</h2>
      <p>{content}</p>
      {images && (
        <div className="pic-opera">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image.src)}
              loading="lazy"
            />
          ))}
        </div>
      )}
      {artists && (
        <>
          <h3>Les artistes de la troupe</h3>
          {artists.map((artist, index) => (
            <h4 key={index}>
              <Link to={`/lacie#${artist.id}`}>{artist.name}</Link>
            </h4>
          ))}
        </>
      )}
    </div>
  );
};

const Spectacles = () => {
  const [imageAgrandie, setImageAgrandie] = useState(null);
  const location = useLocation();

  const handleImageClick = (image) => setImageAgrandie(image);
  const handleCloseImage = () => setImageAgrandie(null);

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

        <ShowSection
          id="opera"
          title="L'opéramobil'"
          content={`L’Opéramobil’ est une troupe itinérante portée par la Compagnie Poly R ayant pour objectif de remettre au goût du jour l’art de l’Opéra. Elle rassemble six artistes pluridisciplinaires professionnels ou en cours de professionnalisation. En juillet 2024, la troupe s’est produite pour la première fois pendant 5 jours dans le département de la Loire en Région Rhône-Alpes. Accompagnés par leur piano droit transporté sur une remorque, les talentueux artistes chanteurs lyriques, pianistes, et guitariste ont fait découvrir ou redécouvrir des airs d’opéra, de comédie musicale et des standards de jazz à un public curieux et attentif. Ils ont chanté à pleine voix chaque matin lors des marchés de Roanne, Le Coteau, Feurs, Montrond-les-Bains et Civens, et chaque soir dans des lieux insolites tels que la P’tite ferme biologique de Rozier-en-Donzy, aux Ruines de Donzy de Salt-en-Donzy dans un cadre paradisiaque au bord de la rivière, pendant la guinguette estivale annuelle de Le Coteau, ou encore à côté du Château de Cleppé dans une immense grange aménagée. Le public, visiblement ravi, a ainsi pu se laisser porter par des programmes musicaux éclectiques et forts en émotions et en a redemandé, c’est pourquoi L’Opéramobil’ sera de retour en juillet 2025 pour une saison 2 qui s’annonce opératiquement explosive !`}
          images={[
            { src: mobil, alt: "Opéra Mobile groupe" },
            { src: opera, alt: "logo Opéra Mobile" },
          ]}
          artists={[
            { id: "roxane", name: "Roxane Macaudière" },
            { id: "herve", name: "Hervé Le Bert" },
            { id: "thomas", name: "Thomas Avrillon" },
            { id: "melysine", name: "Mélysine Escande" },
            { id: "galtier", name: "Galtier Le Bilhan" },
            { id: "fumi", name: "Fumi Oka" },
          ]}
        />

        <div className="gall">
          <h2>Galerie</h2>
        </div>
        <Gallery2 />

        <ShowSection
          id="bastien"
          title="Bastien & Bastienne"
          content={`Bastien & Bastienne est un spectacle pour enfants créé à partir de l’opéra Bastien et Bastienne de Mozart. Roxane Macaudière et Hervé Le Bert ont arrangé cette œuvre pour guitare électrique et trois chanteurs afin d’initier les plus petits aux voix lyriques, tout en apportant une touche de modernité à cette création. Pour l’occasion, une troupe d’artistes professionnels ou en voie de professionnalisation a été créée. Elle est composée de Roxane Macaudière, Hervé Le Bert, Fumi Oka et Nathan Brunet. La troupe a eu le bonheur de donner ce spectacle en représentation dans six établissements scolaires de la Loire en Région Rhône-Alpes durant l’année 2023/2024, proposant à chaque fois aux enfants âgés de 4 à 12 ans des ateliers interactifs autour de l’Opéra, de la danse et du théâtre, suivis d’une représentation du spectacle dans laquelle les enfants participaient et interagissaient avec les artistes.`}
          images={[
            { src: bastien, alt: "photo Bastien & Bastienne" },
            { src: bastienne, alt: "photo Bastien & Bastienne" },
          ]}
          artists={[
            { id: "fumi", name: "Fumi Oka" },
            { id: "nathan", name: "Nathan Brunet" },
            { id: "roxane", name: "Roxane Macaudière" },
            { id: "herve", name: "Hervé Le Bert" },
          ]}
        />

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
