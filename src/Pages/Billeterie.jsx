import { useEffect, useState } from "react";
import "./Billeterie.css";
import End from "../Component/End";
import team from "../Pic/newteam.webp";
import violon from "../Pic/violon.webp";

/* =========================
   EVENTS DATA (hors composant)
========================= */

const EVENTS = [];

/* =========================
   COMPONENT
========================= */

const Billeterie = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  /* =========================
     SCROLL ANIMATION
  ========================= */
  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* =========================
     LIGHTBOX ESC KEY
  ========================= */

  return (
    <>
      <main>
        <section className="main-bill">
          {/* HEADER */}
          <div className="bill animate-on-scroll">
            <h1>Billetterie</h1>

            {/* <p className="bill-desc animate-on-scroll">
              Réservez votre place{" "}
              Réservez vos places en ligne via{" "}
              <a
                href="https://www.helloasso.com/associations/poly-r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>HelloAsso</strong>
              </a>{" "}
              en cliquant sur la vignette ci-dessous
            </p> */}

            {/* COMING SOON */}
            <div className="event-container animate-on-scroll">
              <div className="coming-soon"></div>
            </div>

            <div className="tarif animate-on-scroll"></div>
          </div>

          {/* EVENTS */}
          <div className="event-container animate-on-scroll">
            {EVENTS.map((event) => (
              <a
                key={event.id}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-card animate-on-scroll"
                aria-label={`Billetterie ${event.description}`}
              >
                <div className="image-container">
                  <img
                    src={event.image}
                    alt={`OpéraMobil - ${event.description}`}
                    width="300"
                    height="300"
                    className="responsive-img10"
                  />

                  <div className="overlay-text">
                    <p>{event.title}</p>
                    <p>{event.date}</p>
                    <p>{event.hour}</p>
                    <p>{event.description}</p>
                    <p>{event.price}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* COMING SOON */}
          <div className="event-container2 animate-on-scroll">
            <div className="coming-soon2">
              <h3>
                Opéramobil’ <span style={{ color: "yellow" }}>Saison 4</span>
              </h3>
              <p>Du 9 juillet 2027 au 10 août 2027</p>
            </div>
          </div>
          {/* IMAGE BAS DE PAGE */}
          <div className="pic500 animate-on-scroll">
            <img
              src={violon}
              alt="Violon - Compagnie Poly R"
              className="responsive-img500"
              loading="lazy"
              onClick={() => handleImageClick(violon)}
            />
          </div>
        </section>
      </main>
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

export default Billeterie;
