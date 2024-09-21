import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import poly25 from "../Pic/poly25.webp";
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
                <span>Hervé Le Bert : 06 24 84 54 71</span>
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
              href="https://www.facebook.com/p/Compagnie-Poly-R-61551483792933/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/stories/polyrcompagnie/3197516424053526261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pic2">
        <img
          src={poly25}
          alt="cie poly r"
          width="auto"
          height="auto"
          className="responsive-img2"
          onClick={() => handleImageClick(poly25)}
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
