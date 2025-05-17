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
import poly52 from "../Pic/poly52.webp";
import opera100 from "../Pic/opera100.webp";
import opera200 from "../Pic/opera200.webp";
import opera300 from "../Pic/opera300.webp";
import opera400 from "../Pic/opera400.webp";
import opera500 from "../Pic/opera500.webp";
import opera600 from "../Pic/opera600.webp";
import opera700 from "../Pic/opera700.webp";
import opera800 from "../Pic/opera800.webp";
import opera900 from "../Pic/opera900.webp";
import opera1000 from "../Pic/opera1000.webp";
import opera2000 from "../Pic/opera2000.webp";
import opera3000 from "../Pic/opera3000.webp";
import opera4000 from "../Pic/opera4000.webp";
import opera5000 from "../Pic/opera5000.webp";

const images = [
  { src: opera2, alt: "Image 2", className: "center-image2" },
  { src: opera4000, alt: "opera4000" },
  { src: poly22, alt: "Image poly22" },
  { src: opera100, alt: "Image opera100" },
  { src: opera200, alt: "Image opera200" },
  { src: opera400, alt: "Image opera400" },
  { src: opera6, alt: "Image 6" },
  { src: opera7, alt: "Image 7" },
  { src: opera300, alt: "Image opera300" },
  { src: opera20, alt: "Image 20" },
  { src: opera500, alt: "Image opera500" },
  { src: poly53, alt: "Image 53" },
  { src: poly, alt: "Image poly groupe" },
  { src: opera2000, alt: "opera2000" },
  { src: poly52, alt: "Image poly52" },
  { src: opera5000, alt: "opera5000" },
  { src: poly11, alt: "Image 11", className: "center-image1" },
  { src: poly13, alt: "Image 13", className: "center-image1" },
  { src: poly14, alt: "Image 14", className: "center-image1" },
  { src: poly15, alt: "Image 15", className: "center-image1" },
];

const Gallery2 = () => {
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
    <div className="gallery-container1 animate-on-scroll">
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
