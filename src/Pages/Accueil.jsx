import React, { useState } from "react";
import End from "../Component/End";
import "./Accueil.css";
import poly from "../Pic/polyrgroupe.jpg";
import polyr from "../Pic/polyrfiche.jpg";
import opera from "../Pic/opera.jpg";
import operagroupe from "../Pic/operagroupe.jpg";
import presse from "../Pic/presse.jpg";
import allgroupe from "../Pic/allgroupe.jpg";
const Accueil = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
  return (
    <>
      <div className="main-accueil">
        <div className="tittle-poly">
          <h1>Compagnie</h1>
          <h2>Poly R</h2>
        </div>
        <div className="poly-intro">
          <p>
            La compagnie <span>Poly R </span>est une compagnie
            pluridisciplinaire qui mêlent les arts de la scènes avec comme
            principales disciplines le chant opératique, la danse, le théâtre et
            également les marionnettes.
          </p>
        </div>
        <div className="suite-intro">
          <p>Cocréée et dirigée par </p>
          <span>Hervé Le Bert et</span>
          <span>Roxane Macaudière</span>
          <span>située à Lyon en région AURA </span>
        </div>
        <div className="poly-pic">
          <img
            src={poly}
            alt="photo cie Poly R"
            onClick={() => handleImageClick(poly)}
            loading="lazy"
          />
          <img
            src={polyr}
            alt="photo cie Poly R"
            className="right-image"
            onClick={() => handleImageClick(polyr)}
            loading="lazy"
          />
        </div>
        <div className="actu">
          <h3>Actu !</h3>
          <div className="split">
            <p>À venir Juillet 2025 </p>
            <span>Opéramobil ' saison 2 !!!</span>
          </div>
          <div className="pic-opera">
            <img
              src={operagroupe}
              alt="Opéra Mobile groupe"
              onClick={() => handleImageClick(operagroupe)}
              loading="lazy"
            />
            <img
              src={opera}
              alt="logo Opéra Mobile"
              onClick={() => handleImageClick(opera)}
              loading="lazy"
            />
          </div>
        </div>
        <div className="presse">
          <h3>Un peu de presse</h3>
          <p>Spectacle "Bastien & Bastienne"</p>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.le-pays.fr/ montbrison-42600/actualites/ des-collegiens-sensibilises-a- lopera_14512862/")
            }
          >
            Article
          </button>
        </div>
        <div className="article">
          <img
            src={presse}
            alt="phot article de presse"
            onClick={() => handleImageClick(presse)}
            loading="lazy"
          />
        </div>
        <div className="reseau">
          <h3>
            Nous Suivre<span class="dots">.</span>
          </h3>
        </div>
        <div className="icon">
          <div className="facebook">
            <a
              href="https://www.facebook.com/p/Compagnie-Poly-R-61551483792933/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/stories/polyrcompagnie/3197516424053526261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="pic">
          <img
            src={allgroupe}
            alt="cie poly r"
            class="responsive-img"
            onClick={() => handleImageClick(allgroupe)}
          />
        </div>
      </div>
      <End />
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
    </>
  );
};
export default Accueil;
