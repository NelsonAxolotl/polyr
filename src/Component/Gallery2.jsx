import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery2.css";

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
import opera5000 from "../Pic/opera5000.webp";
import polygroupe from "../Pic/polyrgroupe.webp";
import polymel from "../Pic/poly53.webp";
import polygroupe3 from "../Pic/groupeaccueil.webp";
import polygroupe4 from "../Pic/groupe4.webp";
import polygroupe5 from "../Pic/groupe5.webp";
import openew from "../Pic/openew.webp";
import operapiano from "../Pic/operapiano.webp";

const images = [
  { src: opera2, alt: "Opera 2", className: "center-image2" },
  { src: opera4000, alt: "Opera 4000" },
  { src: opera400, alt: "Opera 400" },
  { src: allgroupe, alt: "Opera Mobile groupe" },
  { src: opera6, alt: "Opera 6" },
  { src: openew, alt: "Opera new" },
  { src: poly4, alt: "Poly 4" },
  { src: polygroupe4, alt: "Groupe 4" },
  { src: polygroupe, alt: "Groupe Poly R" },
  { src: poly7, alt: "Poly 7" },
  { src: mobil, alt: "Mobil" },
  { src: operapiano, alt: "Opera piano" },
  { src: polygroupe5, alt: "Groupe 5" },
  { src: poly8, alt: "Poly 8", className: "center-image2" },
  { src: opera2000, alt: "Opera 2000" },
  { src: polygroupe3, alt: "Groupe accueil" },
  { src: opera5000, alt: "Opera 5000" },
  { src: polymel, alt: "Poly mel" },
  { src: poly14, alt: "Poly 14", className: "center-image1" },
  { src: poly15, alt: "Poly 15", className: "center-image1" },
];

const Gallery2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="gallery-container1">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image.src}
              alt={image.alt}
              className={`gallery-image1 ${image.className || ""}`}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery2;
