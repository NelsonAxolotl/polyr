import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";
import End from "../Component/End";
import "./Accueil.css";
import opera1 from "../Pic/opera1.webp";
import opera from "../Pic/opera.webp";
import operagroupe from "../Pic/operagroupe.webp";
import presse from "../Pic/presse.webp";
import allgroupe from "../Pic/allgroupe.webp";
import bastien50 from "../Pic/bastien50.webp";

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

// Ajout de PropTypes pour la validation des props
ImageOverlay.propTypes = {
  image: PropTypes.string.isRequired, // La prop image doit être une chaîne de caractères
  onClose: PropTypes.func.isRequired, // La prop onClose doit être une fonction
};
const SocialLink = ({ href, iconClass }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <i className={iconClass}></i>
  </a>
);
// Ajout de PropTypes pour la validation des props
SocialLink.propTypes = {
  href: PropTypes.string.isRequired, // La prop href doit être une chaîne de caractères
  iconClass: PropTypes.string.isRequired, // La prop iconClass doit être une chaîne de caractères
};

const Accueil = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => setEnlargedImage(image);
  const handleCloseImage = () => setEnlargedImage(null);

  return (
    <>
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
            <Link to="/lacie#herve">Hervé Le Bert</Link> et
          </span>
          <span>
            <Link to="/lacie#roxane">Roxane Macaudière</Link>
          </span>
          <span>située dans la Loire (42)</span>
        </section>
        <section className="poly-pic">
          {[opera1, bastien50].map((src, index) => (
            <img
              key={src}
              src={src}
              width="auto"
              height="300px"
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
            <span>Opéramobil &rsquo;saison 2</span>
          </div>
          <div className="pic-opera">
            {[operagroupe, opera].map((src, index) => (
              <img
                key={src}
                src={src}
                width="300px"
                height="300px"
                alt={`Opéra Mobile ${index + 1}`}
                onClick={() => handleImageClick(src)}
                loading="lazy"
              />
            ))}
          </div>
        </section>
        <section className="presse">
          <h3>Un peu de presse</h3>
          <p>Spectacle &quot;Bastien & Bastienne&quot;</p>
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
            width="500px"
            height="auto"
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
          <div className="facebook">
            <a
              href="https://www.facebook.com/p/Compagnie-Poly-R-61551483792933/"
              aria-label="Facebook Compagnie Poly R"
              title="Suivez-nous sur Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/stories/polyrcompagnie/3197516424053526261/"
              aria-label="Instagram Compagnie Poly R"
              title="Suivez-nous sur Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="pic">
          <img
            src={allgroupe}
            alt="cie poly r"
            width="auto"
            height="auto"
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
