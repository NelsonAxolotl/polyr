import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery2.css";

import mobil from "../Pic/mobil.webp";
import opera2 from "../Pic/opera2.webp";
import opera6 from "../Pic/opera6.webp";
import poly14 from "../Pic/poly14.webp";
import poly15 from "../Pic/poly15.webp";
import poly4 from "../Pic/poly4.webp";
import poly7 from "../Pic/poly7.webp";
import poly8 from "../Pic/poly8.webp";
import opera2000 from "../Pic/opera2000.webp";
import opera5000 from "../Pic/opera5000.webp";
import polygroupe from "../Pic/polyrgroupe.webp";
import polymel from "../Pic/poly53.webp";
import polygroupe3 from "../Pic/groupeaccueil.webp";
import polygroupe4 from "../Pic/groupe4.webp";
import polygroupe5 from "../Pic/groupe5.webp";
import openew from "../Pic/openew.webp";
import operapiano from "../Pic/operapiano.webp";
import poly54 from "../Pic/poly54.webp";
import poly55 from "../Pic/poly55.webp";
import poly56 from "../Pic/poly56.webp";
import poly57 from "../Pic/poly57.webp";
import poly59 from "../Pic/poly59.webp";
import poly60 from "../Pic/poly60.webp";
import poly61 from "../Pic/poly61.webp";

const images = [
  { src: opera2, alt: "Opera 2", className: "center-image2" },
  { src: opera6, alt: "Opera 6" },
  { src: openew, alt: "Opera new" },
  { src: poly60, alt: "Opéra" },
  { src: poly4, alt: "Poly 4" },
  { src: polygroupe4, alt: "Groupe 4" },
  { src: poly56, alt: "Opéra" },
  { src: polygroupe, alt: "Groupe Poly R" },
  { src: poly7, alt: "Poly 7" },
  { src: mobil, alt: "Mobil" },
  { src: poly54, alt: "Opéra" },
  { src: operapiano, alt: "Opera piano" },
  { src: poly59, alt: "Opéra" },
  { src: polygroupe5, alt: "Groupe 5" },
  { src: poly8, alt: "Poly 8", className: "center-image2" },
  { src: opera2000, alt: "Opera 2000" },
  { src: poly61, alt: "Opéra" },
  { src: polygroupe3, alt: "Groupe accueil" },
  { src: poly55, alt: "Opéra" },
  { src: opera5000, alt: "Opera 5000" },
  { src: poly57, alt: "Opéra" },
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
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
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
