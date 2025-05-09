import { useState, useEffect } from "react";
import "./Billeterie.css";
import End from "../Component/End";
import mobil from "../Pic/mobil.webp";
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

  return (
    <>
      <div className="main">
        <div className="bill animate-on-scroll">
          <h1>Billeterie</h1>
        </div>
      </div>
      <div className="pic2">
        <img
          src={mobil}
          alt="cie poly r"
          width="auto"
          height="auto"
          className="responsive-img2"
          onClick={() => handleImageClick(mobil)}
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

export default Billeterie;
