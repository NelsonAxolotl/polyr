import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import End from "../Component/End";
import Helmet from "react-helmet";
import "./Accueil.css";
import poly from "../Pic/polyrgroupe.jpg";
import polyr from "../Pic/polyrfiche.jpg";
import opera from "../Pic/opera.jpg";
import operagroupe from "../Pic/operagroupe.jpg";
import presse from "../Pic/presse.jpg";
import allgroupe from "../Pic/allgroupe.jpg";

const ImageOverlay = ({ image, onClose }) => (
  <div className="overlay" onClick={onClose}>
    <div className="enlarged-image-container">
      <img src={image} alt="Enlarged" />
      <button className="close-button" onClick={onClose}>
        ×
      </button>
    </div>
  </div>
);

const SocialLink = ({ href, iconClass }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <i className={iconClass}></i>
  </a>
);

const Accueil = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => setEnlargedImage(image);
  const handleCloseImage = () => setEnlargedImage(null);

  return (
    <>
      <Helmet>
        <title>Compagnie Poly R - Accueil</title>
        <meta
          name="description"
          content="Découvrez la Compagnie Poly R, une compagnie pluridisciplinaire située à Lyon. Explorez nos spectacles mêlant chant, danse, théâtre, et marionnettes."
        />
        <meta
          name="keywords"
          content="Compagnie Poly R, Lyon, théâtre, opéra, marionnettes, danse"
        />
        <meta name="author" content="Compagnie Poly R" />
        <meta property="og:title" content="Compagnie Poly R - Accueil" />
        <meta
          property="og:description"
          content="Découvrez la Compagnie Poly R et ses spectacles pluridisciplinaires à Lyon."
        />
        <meta property="og:image" content={poly} />
        <meta property="og:url" content="https://www.votre-site.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="main-accueil">
        <header className="tittle-poly">
          <h1>Compagnie</h1>
          <h2>Poly R</h2>
        </header>
        <section className="poly-intro">
          <p>
            La compagnie <span>Poly R</span> est une compagnie
            pluridisciplinaire qui mêle les arts de la scène avec comme
            principales disciplines le chant opératique, la danse, le théâtre et
            également les marionnettes.
          </p>
        </section>
        <section className="suite-intro">
          <p>Cocréée et dirigée par</p>
          <span>
            {" "}
            <Link to="/lacie#herve">Hervé Le Bert</Link> et
          </span>
          <span>
            <Link to="/lacie#roxane">Roxane Macaudière</Link>
          </span>
          <span>située à Lyon en région AURA</span>
        </section>
        <section className="poly-pic">
          {[poly, polyr].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`photo cie Poly R ${index + 1}`}
              onClick={() => handleImageClick(src)}
              loading="lazy"
            />
          ))}
        </section>
        <section className="actu">
          <h3>Actu</h3>
          <div className="split">
            <p>À venir Juillet 2025</p>
            <span>Opéramobil ' saison 2 !!!</span>
          </div>
          <div className="pic-opera">
            {[operagroupe, opera].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Opéra Mobile ${index + 1}`}
                onClick={() => handleImageClick(src)}
                loading="lazy"
              />
            ))}
          </div>
        </section>
        <section className="presse">
          <h3>Un peu de presse</h3>
          <p>Spectacle "Bastien & Bastienne"</p>
          <button
            onClick={() =>
              window.open(
                "https://www.le-pays.fr/montbrison-42600/actualites/des-collegiens-sensibilises-a-lopera_14512862/",
                "_blank"
              )
            }
          >
            Article
          </button>
        </section>
        <section className="article">
          <img
            src={presse}
            alt="photo article de presse"
            onClick={() => handleImageClick(presse)}
            loading="lazy"
          />
        </section>
        <section className="reseau">
          <h3>
            Nous Suivre<span className="dots">.</span>
          </h3>
        </section>
        <div className="icon">
          <SocialLink
            href="https://www.facebook.com/p/Compagnie-Poly-R-61551483792933/"
            iconClass="fa-brands fa-facebook"
          />
          <SocialLink
            href="https://www.instagram.com/stories/polyrcompagnie/3197516424053526261/"
            iconClass="fa-brands fa-instagram"
          />
        </div>
        <div className="pic">
          <img
            src={allgroupe}
            alt="cie poly r"
            className="responsive-img"
            onClick={() => handleImageClick(allgroupe)}
            loading="lazy"
          />
        </div>
      </div>
      <End />
      {enlargedImage && (
        <ImageOverlay image={enlargedImage} onClose={handleCloseImage} />
      )}
    </>
  );
};

export default Accueil;
