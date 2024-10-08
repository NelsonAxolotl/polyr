import { useState, useEffect, useCallback } from "react";
import "./Gallery2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import opera5 from "../Pic/opera5.webp";
import opera2 from "../Pic/opera2.webp";
import opera3 from "../Pic/opera3.webp";
import opera6 from "../Pic/opera6.webp";
import opera7 from "../Pic/opera7.webp";
import opera20 from "../Pic/opera20.webp";
import poly10 from "../Pic/poly10.webp";
import poly11 from "../Pic/poly11.webp";
import poly13 from "../Pic/poly13.webp";
import poly14 from "../Pic/poly14.webp";
import poly15 from "../Pic/poly15.webp";
import poly22 from "../Pic/poly22.webp";
import poly23 from "../Pic/poly23.webp";
import poly55 from "../Pic/poly55.webp";
import poly53 from "../Pic/poly53.webp";
import poly from "../Pic/polyrgroupe.webp";
import poly51 from "../Pic/poly51.webp";

const images = [
  { src: opera5, alt: "Image 5", className: "center-image2" },
  { src: opera2, alt: "Image 2", className: "center-image2" },
  { src: opera3, alt: "Image 3", className: "center-image2" },
  { src: poly22, alt: "Image poly22" },
  { src: poly23, alt: "Image poly23" },
  { src: opera6, alt: "Image 6" },
  { src: opera7, alt: "Image 7" },
  { src: opera20, alt: "Image 20" },
  { src: poly55, alt: "Image 55" },
  { src: poly53, alt: "Image 53" },
  { src: poly, alt: "Image poly groupe" },
  { src: poly51, alt: "Image 51" },
  { src: poly11, alt: "Image 11", className: "center-image1" },
  { src: poly13, alt: "Image 13", className: "center-image1" },
  { src: poly14, alt: "Image 14", className: "center-image1" },
  { src: poly15, alt: "Image 15", className: "center-image1" },
  { src: poly10, alt: "Image 10" },
];

const Gallery2 = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      handleCloseImage();
    }
  }, []);

  useEffect(() => {
    if (enlargedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enlargedImage, handleKeyDown]);

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
    <div className="gallery-container1">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              width="auto"
              height="400px"
              className={`gallery-image1 ${image.className || ""}`}
              loading="lazy"
              onClick={() => handleImageClick(image.src)}
              role="button"
              aria-label={`View ${image.alt}`}
            />
          </div>
        ))}
      </Slider>

      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
            <button
              className="close-button"
              onClick={handleCloseImage}
              aria-label="Close image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery2;
