import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";
import End from "../Component/End";
import "./Accueil.css";

import presse from "../Pic/presse.webp";
import bastien50 from "../Pic/bastien502.webp";
import newop from "../Pic/newteam.webp";
import newcalendar from "../Pic/tour.webp";
import poly5 from "../Pic/poly5.webp";
import groupeaccueil from "../Pic/newteam2.webp";
import polypress from "../Pic/polysup.webp";

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

ImageOverlay.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Accueil = () => {
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
    if (window.innerWidth <= 768) return;
    setEnlargedImage(image);
  };

  const handleCloseImage = () => setEnlargedImage(null);

  return (
    <>
      <main className="main-accueil">
        <header className="tittle-poly animate-on-scroll">
          <h1>Compagnie</h1>
          <h2>Poly R</h2>
        </header>

        <section className="poly-intro animate-on-scroll">
          <p>
            La compagnie <span>Poly R</span> est une compagnie
            pluridisciplinaire qui mêle les arts de la scène avec comme
            principales disciplines le chant opératique, la danse, le théâtre et
            également les marionnettes.
          </p>
        </section>

        <section className="suite-intro animate-on-scroll">
          <p>Cocréée et dirigée par</p>
          <span>
            <Link to="/lacie#herve" className="disable-mobile-link">
              Hervé Le Bert
            </Link>
          </span>
          <p>et</p>
          <span>
            <Link to="/lacie#roxane" className="disable-mobile-link">
              Roxane Macaudière
            </Link>
          </span>
          <p>située dans la Loire (42)</p>
        </section>

        <section className="poly-pic animate-on-scroll">
          {[groupeaccueil, bastien50].map((src, index) => (
            <img
              key={src}
              src={src}
              width="400px"
              height="300px"
              alt={`photo cie Poly R ${index + 1}`}
              onClick={() => handleImageClick(src)}
              loading="eager"
            />
          ))}
        </section>

        <section className="actu animate-on-scroll">
          <h3>Actu</h3>

          <div className="split animate-on-scroll">
            <p>À venir Juillet 2026</p>
            <span>Opéramobil &rsquo;saison 3</span>
          </div>

          <div className="pic-opera-acc animate-on-scroll">
            {[newop, newcalendar].map((src, index) => (
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

        <div className="teaser animate-on-scroll">
          <h3>Teaser</h3>
          <video controls width="100%">
            <source src="/Videos/PolyR_compressed.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>
        </div>

        <section className="presse animate-on-scroll">
          <h3>Un peu de presse</h3>
          <h4>Spectacles</h4>
        </section>

        <div className="allpresspoly animate-on-scroll">
          <div className="pressbastien animate-on-scroll">
            <section className="presse animate-on-scroll">
              <p>Bastien & Bastienne</p>
              <button
                onClick={() =>
                  window.open(
                    "https://www.le-pays.fr/montbrison-42600/actualites/des-collegiens-sensibilises-a-lopera_14512862/",
                    "_blank",
                  )
                }
              >
                Article
              </button>
            </section>

            <section className="article animate-on-scroll">
              <img
                src={presse}
                alt="photo article de presse"
                width="500px"
                height="300px"
                onClick={() => handleImageClick(presse)}
                loading="lazy"
              />
            </section>
          </div>

          <div className="pressopera animate-on-scroll">
            <section className="presse animate-on-scroll">
              <p>Opéramobil&apos;</p>
              <button
                onClick={() =>
                  window.open(
                    "https://www.leprogres.fr/culture-loisirs/2025/04/28/la-compagnie-poly-r-souhaite-partager-le-spectacle-vivant-en-milieu-rural-grace-a-l-operamobil",
                    "_blank",
                  )
                }
              >
                Article
              </button>
            </section>

            <section className="article animate-on-scroll">
              <img
                src={polypress}
                alt="photo article de presse"
                width="500px"
                height="300px"
                onClick={() => handleImageClick(polypress)}
                loading="lazy"
              />
            </section>
          </div>
        </div>

        <section className="reseau animate-on-scroll">
          <h3>
            Nous Suivre<span className="dots">.</span>
          </h3>
        </section>

        <div className="icon animate-on-scroll">
          <div className="facebook animate-on-scroll">
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

          <div className="insta animate-on-scroll">
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

        <div className="pic50 animate-on-scroll">
          <img
            src={poly5}
            alt="cie poly r"
            className="responsive-img50"
            onClick={() => handleImageClick(poly5)}
            loading="lazy"
          />
        </div>
      </main>

      <End />

      {enlargedImage && (
        <ImageOverlay image={enlargedImage} onClose={handleCloseImage} />
      )}
    </>
  );
};

export default Accueil;
