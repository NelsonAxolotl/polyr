import React, { useState } from "react";
import "./Gallery2.css";
import Slider from "react-slick";
import opera2 from "../Pic/opera2.jpg";
import opera3 from "../Pic/opera3.jpg";
import opera4 from "../Pic/opera4.jpg";
import opera5 from "../Pic/opera5.jpg";
import opera6 from "../Pic/opera6.jpg";
import opera7 from "../Pic/opera7.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: opera2, alt: "Image 2" },
  { src: opera3, alt: "Image 3" },
  { src: opera4, alt: "Image 4" },
  { src: opera5, alt: "Image 5" },
  { src: opera6, alt: "Image 6" },
  { src: opera7, alt: "Image 7" },
];

const Gallery2 = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  const settings = {
    dots: true, // Afficher les points de navigation
    infinite: true, // Boucler les images
    speed: 500, // Vitesse de transition (en ms)
    slidesToShow: 1, // Nombre d'images à afficher en même temps
    slidesToScroll: 1, // Nombre d'images à défiler à la fois
    autoplay: true, // Activer le défilement automatique
    autoplaySpeed: 3000, // Temps d'affichage de chaque image (en ms)
  };

  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
              onClick={() => handleImageClick(image.src)} // Ajouter onClick pour agrandir l'image
            />
          </div>
        ))}
      </Slider>

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
    </div>
  );
};

export default Gallery2;
