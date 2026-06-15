import { useState, useEffect } from "react";
import "./Legal.css";
import Endy from "../Component/Endy";
import opmob from "../Pic/opmob.webp";
const Legal = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
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

  return (
    <>
      <main className="main-legal">
        <section className="legal-page animate-on-scroll">
          <h1>Mentions légales</h1>

          <div className="legal-content animate-on-scroll">
            <section>
              <h2>Éditeur du site</h2>

              <p>
                <strong>Compagnie Poly R</strong>
              </p>

              <p>
                65 rue des Tisseurs
                <br />
                42540 Sainte-Colombe-sur-Gand
              </p>

              <p>SIRET : 924 053 671 00021</p>

              <p>
                Email :
                <a href="mailto:compagniepolyr@protonmail.com">
                  {" "}
                  compagniepolyr@protonmail.com
                </a>
              </p>
            </section>

            <section>
              <h2>Responsable de publication</h2>

              <p>
                La direction artistique et éditoriale du site est assurée par la
                Compagnie Poly R.
              </p>
            </section>

            <section>
              <h2>Hébergement</h2>
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong>
              </p>

              <p>
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>

              <p>
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2>Propriété intellectuelle</h2>

              <p>
                L&apos;ensemble des contenus présents sur ce site (textes,
                photographies, vidéos, graphismes et identité visuelle) est
                protégé par le droit d&apos;auteur.
              </p>

              <p>
                Toute reproduction ou diffusion sans autorisation préalable est
                interdite.
              </p>
            </section>

            <section>
              <h2>Politique de confidentialité</h2>

              <p>
                Le site ne collecte aucune donnée personnelle via formulaire.
              </p>
              <p>
                Les seules informations éventuellement traitées sont celles
                transmises volontairement par email.
              </p>
              <p>
                Ces données sont utilisées uniquement pour répondre aux demandes
                et ne sont ni vendues ni transmises à des tiers.
              </p>
            </section>

            <section>
              <h2>Vos droits</h2>

              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d'accès, de
                rectification et de suppression de vos données.
              </p>

              <p>
                Pour exercer ces droits :
                <a href="mailto:compagniepolyr@protonmail.com">
                  {" "}
                  compagniepolyr@protonmail.com
                </a>
              </p>
            </section>
          </div>
          <div className="pic2000">
            <img
              src={opmob}
              alt="Cie Poly R"
              className="responsive-img2000"
              onClick={() => handleImageClick(opmob)}
            />
          </div>
        </section>
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
      </main>
      <Endy />
    </>
  );
};

export default Legal;
