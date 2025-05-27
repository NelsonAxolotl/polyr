import { useState, useEffect } from "react";
import "./Billeterie.css";
import End from "../Component/End";
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
      title: "La p'tite ferme",
      date: "04 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Rozier-en-Donzy",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-4-juillet-la-p-tite-ferme-rozier-en-donzy",
    },
    {
      id: 2,
      title: "Château des bruneaux",
      date: "05 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Firmiry",
      price: "Gratuit pour tous",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-5-juillet-chateau-des-bruneaux",
    },
    {
      id: 3,
      title: "Place du Village",
      date: "06 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Chambost-Longessaigne",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-6-juillet-place-du-village-chambost-longessaigne",
    },
    {
      id: 4,
      title: "Grange du Jeu de Paume",
      date: "08 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Feurs",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-8-juillet-ferme-du-jeu-de-peaume-feurs",
    },
    {
      id: 5,
      title: "Jeudis de l'été",
      date: "10 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Montbrison",
      price: "Gratuit pour tous",
      link: "https://www.facebook.com/profile.php?id=100057586864292&locale=fr_FR",
    },
    {
      id: 6,
      title: "Théâtre de Verdure",
      date: "11 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Saint-Galmier",
      price: "Gratuit pour tous",
      link: "https://www.saint-galmier.fr/cinema-sous-les-etoiles/",
    },
    {
      id: 7,
      title: "Château de Couzan",
      date: "12 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Sais-sous-Couzan",
      price: "Gratuit pour tous",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-12-juillet-chateau-de-sail",
    },
    {
      id: 8,
      title: "Fermes des délices",
      date: "14 juillet 2025",
      image: violon,
      hour: "16h",
      description: "Saint-Cyr-les-Vignes",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-14-juillet-ferme-des-delice-st-cyr-les-vignes",
    },
    {
      id: 9,
      title: "Prieuré",
      date: "15 juillet 2025",
      image: violon,
      hour: "19h30",
      description: "Champdieu",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-15-juillet-prieure-de-champdieu",
    },
    {
      id: 10,
      title: "Jardin de l'Écomusée",
      date: "16 juillet 2025",
      image: violon,
      hour: "19h30",
      description: "Usson-en-Forez",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-16-juillet-jardin-de-l-ecomuse-usson-en-forez",
    },
    {
      id: 11,
      title: "Théâtre de Verdure",
      date: "17 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Saint-Victoire sur Loire",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-17-juillet-theatre-de-verdure-st-victor-sur-loire",
    },
    {
      id: 12,
      title: "Ruines de Donzy",
      date: "18 juillet 2025",
      image: violon,
      hour: "19h",
      description: "Salt-en-Donzy",
      link: "https://www.helloasso.com/associations/poly-r/evenements/operamobil-18-juillet-ruine-du-donzy",
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
            width="auto"
            height="auto"
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
