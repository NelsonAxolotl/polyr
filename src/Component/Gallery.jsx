import { useState, useEffect } from "react";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bastien1 from "../Pic/bastien1.webp";
import bastien2 from "../Pic/bastien2.webp";
import bastien4 from "../Pic/bastien4.webp";
import bastien5 from "../Pic/bastien5.webp";
import bastien20 from "../Pic/bastien20.webp";
import bastien21 from "../Pic/bastien21.webp";
import bastien22 from "../Pic/bastien22.webp";
import bastien23 from "../Pic/bastien23.webp";
import poly24 from "../Pic/poly24.webp";
import poly1 from "../Pic/poly1.webp";
import poly16 from "../Pic/poly16.webp";
import poly17 from "../Pic/poly17.webp";
import poly18 from "../Pic/poly18.webp";
import bastien54 from "../Pic/bastien54.webp";
import bastien52 from "../Pic/bastien52.webp";
import bastien51 from "../Pic/bastien51.webp";
import doll from "../Pic/dolls.jpg";
const images = [
  { src: bastien1, alt: "Image 1" },
  { src: bastien21, alt: "Image 21" },
  { src: bastien22, alt: "Image 22" },
  { src: bastien23, alt: "Image 23" },
  { src: bastien54, alt: "Image 54" },
  { src: bastien2, alt: "Image 2" },
  { src: doll, alt: "doll" },
  { src: poly24, alt: "Image poly24" },
  { src: bastien52, alt: "Image bastien52" },
  { src: bastien51, alt: "Image bastien51" },
  { src: bastien4, alt: "Image 4" },
  { src: bastien5, alt: "Image 5" },
  { src: poly16, alt: "Image ploy16" },
  { src: poly17, alt: "Image ploy17" },
  { src: poly18, alt: "Image ploy18" },
  { src: bastien20, alt: "Image 20" },
  { src: poly1, alt: "Image ploy1" },
];

const Gallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseImage();
    }
  };

  useEffect(() => {
    if (enlargedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enlargedImage]);

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
          <div key={index} className="slider-item">
            <img
              src={image.src}
              alt={image.alt}
              width="auto"
              height="400px"
              className={`gallery-image ${
                index < 5
                  ? "object-top"
                  : index >= images.length - 1
                  ? "object-right"
                  : ""
              }`}
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

export default Gallery;
