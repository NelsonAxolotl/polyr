import React, { useState } from "react";
import End from "../Component/End";
import "./LaCie.css";
import roxane from "../Pic/roxane.jpg";
import herve from "../Pic/herve.jpg";
import thomas from "../Pic/thomas.jpg";
import melysine from "../Pic/melysine.jpg";
import galtier from "../Pic/galtier.jpg";
import fumi from "../Pic/fumi.jpg";
import draw from "../Pic/draw.jpg";

const Lacie = () => {
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
        <div className="cie">
          <h1>La Compagnie</h1>
        </div>
        <div className="historique">
          <h2>Historique</h2>
        </div>
        <div className="cie-text">
          <p>
            La Compagnie <span>Poly R </span>est lyonnaise et a été crée en
            septembre 2023 par Roxane Macaudière et Hervé Le Bert. <br />
            Tous deux artistes en voie de professionnalisation et passionnés par
            leurs différentes pratiques, (chant lyrique, théâtre, piano,
            guitare, danse) ils ont eu à cœur de créer une structure leur
            permettant de donner vie à des créations scéniques
            pluridisciplinaires. <br />
            Étudiants en classe de chant lyrique aux conservatoires de Genève et
            de Villeurbanne, Hervé et Roxane sont très sensibles à l’art de
            l’Opéra et se sont donnés pour principale mission d’amener cette
            pratique parfois méconnue dans les lieux où elle n’est pas ou peu
            représentée, notamment dans les campagnes et villages.
          </p>
        </div>
        <div className="bio">
          <h2>L'Équipe</h2>
          <h3>Directeur.trices artistiques</h3>
          <div className="artistes">
            <div className="personne-reverse">
              <div className="pic1">
                <img
                  src={roxane}
                  alt="photo roxane "
                  onClick={() => handleImageClick(roxane)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  <span>Roxane Macaudière</span> s'épanouit en musique dès son
                  plus jeune âge au sein du chœur de jeunes chanteurs de la
                  Maîtrise de la Loire. <br />
                  Parallèlement, elle est reçue à l'âge de 14 ans en cycle
                  supérieur de piano classique au Conservatoire de Saint-Etienne
                  où elle obtient son diplôme de fin d'études 4 ans plus tard.{" "}
                  <br />
                  Après ce début de chemin artistique, c'est à Lyon qu'elle
                  s'envole pour étudier le chant lyrique aux côtés de Cécile de
                  Boever. <br />
                  Elle intègre parallèlement l'ENM de Villeurbanne, dans la
                  classe de Virginie Pochon et y suit un cursus de EPI. <br />
                  Sa passion pour la pluralité des arts la pousse à intégrer
                  dans la même école la classe de Vincent Martin en piano jazz,
                  et à se présenter au Cycle Centre Chorégraphique de Lyon en
                  danse contemporaine. <br />
                  Elle obtient après deux ans d'études de danse son Examen
                  d'Aptitudes Techniques. <br />
                  En juin 2022, Roxane enregistre en studio un album de six
                  pièces pour piano solo, Arborescence qu’elle a la chance
                  d’interpréter lors de six concerts à Lyon, dans le cadre de
                  l’exposition Pleine mer du peintre Adrien A. Ribet. <br />
                  Aujourd'hui enrichie de ces diverses expériences et âgée de 23
                  ans, Roxane vient d’être admise en bachelor de chant lyrique à
                  la Haute École de Musique de Genève dans la classe de Heidi
                  Brünner pour la rentrée 2024-2025.🇨🇭
                </p>
              </div>
            </div>
            <div className="personne">
              <div className="text1">
                <p className="main-text">
                  <span>Hervé LE BERT</span> est ténor lyrique et comédien, il
                  se passionne dès sa petite enfance pour la musique. Son
                  parcours à la maîtrise de la Loire lui permettra de trouver sa
                  "voix". <br />
                  Il y découvre l'Opéra, une expérience qui est une révélation.{" "}
                  <br />
                  Depuis 2019 il étudie le chant lyrique avec le ténor Yannick
                  Berne en parallèle de ses études à l'ENM dans la classe de
                  chant de Virginie Pochon et au théâtre de l'Iris. <br />
                  En 2023 il co-créé la compagnie Poly R afin de rendre plus
                  accessible l'Opéra notamment dans les milieux ruraux.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={herve}
                  alt="photo herve"
                  onClick={() => handleImageClick(herve)}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="diviser"></div>
          <div className="artistes">
            <div className="personne-reverse">
              <div className="pic1">
                <img
                  src={thomas}
                  alt="photo thomas"
                  onClick={() => handleImageClick(thomas)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  Découvrant à 8 ans la musique par l’apprentissage du violon,
                  <span> Thomas Avrillon</span> ne tarda pas à rentrer à la
                  Maitrise de la Loire, où il y restera sept ans. <br />
                  Grâce à cet important apport musical, il découvrira de
                  nombreuses disciplines liées au chant, dont la direction de
                  chœur puis d’orchestre, qu’il développera encore en arrivant
                  au conservatoire Massenet, puis à l’ENM de Villeurbanne.{" "}
                  <br />
                  Ayant obtenu, en parallèle d’une licence de musicologie, son
                  Certificat d’Études Musicales de direction, de violon et de
                  formation musicale, il continu de développer sa pratique du
                  chant lyrique auprès de Nicolas Domingues, ce qui l’a amené à
                  participer à des projets en tant que choriste dans des
                  ensembles semi-professionnels comme Symphonietta ou Anarrès,
                  mais également en tant que soliste, dans le rôle de Pish-Tush
                  du Mikado de Sullivan.
                </p>
              </div>
            </div>
            <div className="personne">
              <div className="text1">
                <p className="main-text">
                  <span>Mélusine Escande</span> est pianiste et cheffe de chœur.{" "}
                  <br />
                  Née en 1996 dans les environs de Grenoble, elle découvre la
                  musique très jeune par le piano. Après une licence de
                  musicologie à l’Université de Grenoble, elle se forme au sein
                  des conservatoires de Lyon et Chambéry dont elle est diplômée
                  en piano, accompagnement au piano, écriture et direction de
                  chœur. <br />
                  Passionnée de musique vocale, elle intègre l’Institut Royal
                  Supérieur de Musique et de Pédagogie à Namur (Belgique).{" "}
                  <br />
                  Elle y obtient avec grande distinction un master en direction
                  chorale (2023) et un master en accompagnement au piano (2024).
                  <br />
                  Sa vie professionnelle gravite autour de la musique vocale :
                  elle a travaillé pour les Chœurs d’Enfants et de Jeunes de La
                  Monnaie, elle est à la tête de la chorale Royale Saint Rémy
                  d’Ottignies et du chœur d’enfant les Piccolos de Nivelles.
                  <br />
                  Elle a accompagné de nombreux chœurs et chanteurs comme la
                  maîtrise du collège Jean Moulin à Lyon, la chorale Mélopée
                  pour sa tournée au Québec en 2023, les chanteurs de l’académie
                  Opus 74 à Flaine, la troupe de comédiens du Théâtre Part Cœur
                  en 2019 ou encore la mezzo-soprano Victoria Didenko avec qui
                  elle a tourné en récital jusqu’à Kiev. <br />
                  Son expérience de choriste traverse les styles et les
                  ensembles : le festival Berlioz, La Fabrique Opéra, la schola
                  de la basilique Saint Bonaventure à Lyon, le chœur d’Oratorio
                  de Lyon, le chœur symphonique de Namur ou encore le chœur
                  régional de Jeunes Inspirations qui a participé au festival
                  d’Arezzo et de Fano.
                  <br />
                  Elle assure depuis la rentrée 2023 les cours de chant choral
                  auprès de la classe à horaires aménagés du Lycée Français de
                  Bruxelles.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={melysine}
                  alt="photo Melysine"
                  onClick={() => handleImageClick(melysine)}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="artistes">
            <div className="personne-reverse">
              <div className="pic1">
                <img
                  src={galtier}
                  alt="photo galtier"
                  onClick={() => handleImageClick(galtier)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  <span>Galtier Le Bihan</span> est guitariste, compositeur et
                  arrangeur. Parallèlement à son cursus de guitare jazz à
                  l'Ecole Nationale de Musique de Villeurbanne, Galtier
                  s'illustre en tant que compositeur, interprète et
                  improvisateur, et ce dans divers styles, aussi bien la funk
                  que le rock. <br />
                  Depuis deux ans, il est notamment membre du groupe lyonnais
                  Bourricot Live Band. <br />
                  Il enseigne également la guitare depuis plusieurs années.
                  <br />
                  Passionné d'art depuis son plus jeune âge, Galtier est
                  toujours à l'affût de nouvelles expériences et est l'un des
                  accompagnateurs de l'Opéramobil' en juillet 2024, apportant
                  ainsi une touche instrumentale moderne à la troupe.
                </p>
              </div>
            </div>
            <div className="personne">
              <div className="text1">
                <p className="main-text">
                  Née en 1994, <span>Fumi Oka</span> est une chanteuse lyrique
                  d’origine japonaise. <br />
                  En 2014, elle est admise à l’Université des Arts de Kyoto dans
                  la classe de Tadamichi Orié. <br />
                  Après avoir passé sa licence, elle arrive en France en 2019,
                  où elle est admise à l’ENM de Villeurbanne dans la classe de
                  Virginie Pochon. <br />
                  Elle y obtient son DEM en 2023. <br />
                  Depuis l'obtention de sa licence, elle a participé à plusieurs
                  productions d’opéra en tant que choriste ainsi qu'en tant que
                  soliste, s'illustrant avec brio dans divers rôles : Dorabella
                  dans Cosi Fan Tutte de Mozart, Hänsel et Knusperhexe dans
                  Hänsel und Gretel d’Humperdinck, Ms Todd dans The Old Maid and
                  The Thief de Menotti et Carmen dans Carmen de Bizet. <br />
                  Elle est actuellement membre de la Compagnie Poly R, pour
                  laquelle elle a interprété cette saison le rôle de Colas dans
                  le spectacle lyrique Bastien et Bastienne.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={fumi}
                  alt="photo fumi"
                  onClick={() => handleImageClick(fumi)}
                  loading="lazy"
                />
              </div>
            </div>
            {/* <div className="personne-reverse">
              <div className="pic1">
                <img src="" alt="photo Nathan" loading="lazy" />
              </div>
              <div className="text1">
                <p className="main-text">
                  Nathan Brunet est guitariste, sound designer, compositeur et
                  claviériste. <br />
                  Après des études au conservatoire de Nancy, il s'installe à
                  Lyon où il obtient un DUMI de musicien intervenant et où il
                  perfectionne sa pratique de la guitare jazz à l'Ecole
                  Nationale de Musique de Villeurbanne auprès de Pierre
                  Hachache. <br />
                  Nathan vient d'être reçu pour intégrer en septembre 2024 la
                  nouvelle promotion du prestigieux Centre Didier Lockwood à
                  Paris.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="pic10">
        <img
          src={draw}
          alt="dessin poly r"
          class="responsive-img10"
          onClick={() => handleImageClick(draw)}
        />
      </div>
      <End />
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
    </>
  );
};
export default Lacie;
