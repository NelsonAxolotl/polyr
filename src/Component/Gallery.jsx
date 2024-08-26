import React, { useState } from "react";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bastien1 from "../Pic/bastien1.jpg";
import bastien2 from "../Pic/bastien2.jpg";
import bastien3 from "../Pic/bastien3.jpg";
import bastien4 from "../Pic/bastien4.jpg";
import bastien5 from "../Pic/bastien5.jpg";
import bastien6 from "../Pic/bastien6.jpg";

const images = [
  { src: bastien1, alt: "Image 1" },
  { src: bastien2, alt: "Image 2" },
  { src: bastien3, alt: "Image 3" },
  { src: bastien4, alt: "Image 4" },
  { src: bastien5, alt: "Image 5" },
  { src: bastien6, alt: "Image 6" },
];

const Gallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
              onClick={() => handleImageClick(image.src)} // Enlarging the image on click
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

export default Gallery;
