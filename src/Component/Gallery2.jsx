import { useEffect } from "react";
import "./Gallery2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mobil from "../Pic/mobil.webp";
import allgroupe from "../Pic/allgroupe.webp";
import opera2 from "../Pic/opera2.webp";
import opera6 from "../Pic/opera6.webp";
import poly14 from "../Pic/poly14.webp";
import poly15 from "../Pic/poly15.webp";
import poly4 from "../Pic/poly4.webp";
import poly7 from "../Pic/poly7.webp";
import poly8 from "../Pic/poly8.webp";
import opera400 from "../Pic/opera400.webp";
import opera2000 from "../Pic/opera2000.webp";
import opera4000 from "../Pic/opera4000.webp";
import opera5000 from "../Pic/opera5000.webp";
import polygroupe from "../Pic/polyrgroupe.webp";
import polymel from "../Pic/poly53.webp";
import polygroupe3 from "../Pic/groupeaccueil.webp";
import polygroupe4 from "../Pic/groupe4.webp";
import polygroupe5 from "../Pic/groupe5.webp";
import openew from "../Pic/openew.webp";
import operapiano from "../Pic/operapiano.webp";

const images = [
  { src: opera2, alt: "Image 2", className: "center-image2" },
  { src: opera4000, alt: "opera4000" },
  { src: opera400, alt: "Image opera400" },
  { src: allgroupe, alt: "Image opera mobil" },
  { src: opera6, alt: "Image 6" },
  { src: openew, alt: "opera2000" },
  { src: poly4, alt: "Image poly groupe" },
  { src: polygroupe4, alt: "Image poly groupe" },
  { src: polygroupe, alt: "Image poly groupe" },
  { src: poly7, alt: "Image poly groupe" },
  { src: mobil, alt: "Image polyr" },
  { src: operapiano, alt: "Image poly groupe" },
  { src: polygroupe5, alt: "Image poly groupe" },
  { src: poly8, alt: "Image poly groupe", className: "center-image2" },
  { src: opera2000, alt: "opera2000" },
  { src: polygroupe3, alt: "Image poly groupe" },
  { src: opera5000, alt: "opera5000" },
  { src: polymel, alt: "Image poly groupe" },
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
              role="button"
              aria-label={`View ${image.alt}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery2;
