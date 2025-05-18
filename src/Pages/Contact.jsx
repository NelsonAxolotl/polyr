import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import poly25 from "../Pic/poly25.webp";
import End from "../Component/End";

const Contact = () => {
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
        <div className="show-titre2 animate-on-scroll">
          <h1>Contact</h1>
        </div>
        <div className="container">
          <div className="contact-section">
            <div className="resa-h2 animate-on-scroll">
              <h2>Administration</h2>
            </div>
            <div className="resa">
              <div className="mail animate-on-scroll">
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
              <div className="phone animate-on-scroll">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>Roxane Macaudière : 06 48 98 57 81</span>
              </div>
            </div>
          </div>
        </div>
        <div className="reseaux animate-on-scroll">
          <h2>Réseaux</h2>
        </div>
        <div className="icons animate-on-scroll">
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
