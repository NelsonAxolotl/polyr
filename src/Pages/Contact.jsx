import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet"; // Import Helmet
import "./Contact.css";
import opera1 from "../Pic/opera1.jpg";
import End from "../Component/End";

const Contact = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Compagnie Poly R - Contact</title>
        <meta
          name="description"
          content="Contactez la Compagnie Poly R pour toute demande d'information ou de réservation. Retrouvez nos coordonnées et nos réseaux sociaux."
        />
      </Helmet>

      <div className="contact">
        <div className="show-titre2">
          <h1>Contact</h1>
        </div>
        <div className="container">
          <div className="contact-section">
            <div className="resa-h2">
              <h2>Administration</h2>
            </div>
            <div className="resa">
              <div className="mail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:compagniepolyr@protonmail.com"
                  >
                    compagniepolyr@protonmail.com
                  </a>
                </span>
              </div>
              <div className="phone">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>Hervé : 06 24 84 54 71</span>
              </div>
            </div>
          </div>
        </div>
        <div className="reseaux">
          <h2>Réseaux</h2>
        </div>
        <div className="icons">
          <div className="facebook">
            <a
              href="https://www.facebook.com/cabaretwanubida"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/cabaret_wanubida/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pic">
        <img
          src={opera1}
          alt="cie poly r"
          className="responsive-img"
          onClick={() => handleImageClick(opera1)}
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

export default Contact;
