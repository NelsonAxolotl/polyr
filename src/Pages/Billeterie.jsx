import { useState, useEffect } from "react";
import "./Billeterie.css";
import End from "../Component/End";
import team from "../Pic/newteam.webp";
import violon from "../Pic/violon.webp";
const Billeterie = () => {
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
  const eventsData = [
    {
      id: 1,
      title: "Théâtre de verdure",
      date: "05 juillet 2026",
      image: team,
      hour: "17h",
      description: "Nyons (26)",
      price: "",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-5-juillet-theatre-de-verdure-de-nyons",
    },
    {
      id: 2,
      title: "",
      date: "07 juillet 2026",
      image: team,
      hour: "19h30",
      description: "Prieuré de salais-sur-Sanne (38)",
      price: "",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-7-juillet-prieure-de-salaise-sur-sanne",
    },

    {
      id: 3,
      title: "Bâtie d'Urfé ",
      date: "10 juillet 2026",
      image: team,
      hour: "19h",
      description: "Saint-Étienne-le-Molard (42)",
      price: "13€",
      link: "https://www.batiedurfe.fr/jcms/lw_1392169/fr/billetterie",
    },
    {
      id: 4,
      title: "",
      date: "12 juillet 2026",
      image: team,
      hour: "18h",
      description: "Prieuré de Champdieu (42)",
      price: "",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-12-juillet-prieure-de-champdieu",
    },
    {
      id: 5,
      title: "Place du village",
      date: "13 juillet 2026",
      image: team,
      hour: "18h",
      description: "Pommiers-en-Forez (42)",
      price: "",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-13-juillet-pommiers-en-forez",
    },
    {
      id: 6,
      title: "Théâtre de Verdure",
      date: "16 juillet 2026",
      image: team,
      hour: "19h30",
      description: "Saint-Victor-sur-Loire (42)",
      price: "",
      link: "https://www.helloasso.com/associations/poly-r/evenements/saint-victor-sur-loire",
    },
    {
      id: 7,
      title: "Site Médiéval",
      date: "19 juillet 2026",
      image: team,
      hour: "17h",
      description: "Donzy (42)",
      link: "https://www.helloasso.com/associations/poly-r/evenements/site-medieval-du-donzy",
      price: "",
    },
  ];

  return (
    <>
      <div className="main-bill">
        <div className="bill animate-on-scroll">
          <h1>Billetterie</h1>
          <p className="bill-desc animate-on-scroll">
            Réservez vos places en ligne via{" "}
            <a
              href="https://www.helloasso.com/associations/poly-r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>HelloAsso</strong>
            </a>{" "}
            <br />
            ou directement en cliquant{" "}
            <span>sur les images des spectacles.</span> <br />
            (Chaque vignette vous redirige vers la billetterie de
            l&apos;événement correspondant)
          </p>

          <div className="tarif animate-on-scroll">
            <p>Tarif plein : 18 €</p>
            <p>Tarif solidaire : 10 €</p>
            <p>Enfant (-12 ans) : Gratuit</p>
          </div>
        </div>
        <div className="event-container animate-on-scroll">
          <div className="coming-soon">
            <h2>Prochainement ☀️ 2026 </h2>
            <p>La billetterie sera bientôt disponible...</p>
          </div>
        </div>
        <div className="event-container animate-on-scroll">
          {eventsData.map((event) => (
            <div key={event.id} className="event-card animate-on-scroll">
              <div className="image-container">
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="responsive-img10"
                  />
                </a>

                <div className="overlay-text">
                  <p className="title">{event.title}</p>
                  <p className="date">{event.date}</p>
                  <p className="hour">{event.hour}</p>
                  <p className="lieux">{event.description}</p>
                  <p className="price">{event.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pic500 animate-on-scroll">
          <img
            src={violon}
            alt="cie poly r"
            className="responsive-img500"
            onClick={() => handleImageClick(violon)}
          />
        </div>
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

export default Billeterie;
