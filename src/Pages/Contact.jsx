import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import End from "../Component/End";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="show-titre">
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
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                <span>
                  <a
                    target="_blank"
                    href="mailto:compagniepolyr@protonmail.com"
                  >
                    compagniepolyr@protonmail.com
                  </a>
                </span>
              </div>
              <div className="phone">
                <span>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
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
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/cabaret_wanubida/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <End />
    </>
  );
};
export default Contact;
