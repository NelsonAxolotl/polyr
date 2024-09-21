import React, { useState } from "react";
import { Link } from "react-router-dom";
import End from "../Component/End";
import "./LaCie.css";
import roxane from "../Pic/roxane.webp";
import herve from "../Pic/herve.webp";
import thomas from "../Pic/thomas.webp";
import melusine from "../Pic/melysine.webp";
import galtier from "../Pic/galtier.webp";
import fumi from "../Pic/fumi.webp";
import nathan from "../Pic/nathan.webp";
import antoine from "../Pic/antoine.webp";
import laetitia from "../Pic/laetitia.webp";
import draw from "../Pic/draw.webp";

const ImageOverlay = ({ image, onClose }) => (
  <div className="overlay" onClick={onClose}>
    <div className="enlarged-image-container">
      <img src={image} alt="Enlarged" />
      <button className="close-button" onClick={onClose}>
        ×
      </button>
    </div>
  </div>
);

const Lacie = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => setEnlargedImage(image);
  const handleCloseImage = () => setEnlargedImage(null);

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
            La Compagnie <span>Poly R</span> est lyonnaise et a été créée en
            septembre 2023 par Roxane Macaudière et Hervé Le Bert. <br />
            Tous deux artistes en voie de professionnalisation et passionnés par
            leurs différentes pratiques (chant lyrique, théâtre, piano, guitare,
            danse), ils ont eu à cœur de créer une structure leur permettant de
            donner vie à des créations scéniques pluridisciplinaires. <br />
            Étudiants en classe de chant lyrique aux conservatoires de Genève et
            de Villeurbanne, Hervé et Roxane sont très sensibles à l’art de
            l’Opéra et se sont donnés pour principale mission d’amener cette
            pratique parfois méconnue dans les lieux où elle n’est pas ou peu
            représentée, notamment dans les campagnes et villages.
          </p>
        </div>
        <div className="bio">
          <h2>L'Équipe</h2>
          <h3>Direction artistique</h3>
          <div className="artistes">
            <div id="roxane" className="personne-reverse">
              <div className="pic1">
                <img
                  src={roxane}
                  alt="photo Roxane"
                  width="400px"
                  height="400px"
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
                  s'envole pour étudier <span>le chant lyrique</span> aux côtés
                  de Cécile de Boever. <br />
                  Elle intègre parallèlement l'ENM de Villeurbanne, dans la
                  classe de Virginie Pochon. <br />
                  Sa passion pour la pluralité des arts la pousse à intégrer
                  dans la même école la classe de Vincent Martin en piano jazz,
                  et à se présenter au Cycle Centre Chorégraphique de Lyon en
                  danse contemporaine. <br />
                  Elle obtient après deux ans d'études de danse son Examen
                  d'Aptitudes Techniques. <br />
                  Aujourd'hui enrichie de ces diverses expériences et âgée de 23
                  ans, Roxane vient d’être admise en bachelor de chant lyrique à
                  la Haute École de Musique de Genève dans la classe de Heidi
                  Brünner pour la rentrée 2024-2025. <br />
                  Depuis 2023, elle co-dirige{" "}
                  <Link to="/">
                    <span>la compagnie Poly R</span>
                  </Link>{" "}
                  avec Hervé Le Bert tout en faisant partie du spectacle{" "}
                  <Link to="/spectacles#bastien">
                    <span>Bastien & Bastienne</span>
                  </Link>{" "}
                  ainsi que de{" "}
                  <Link to="/spectacles#opera">
                    <span>la troupe Opéramobil'</span>.
                  </Link>
                </p>
              </div>
            </div>
            <div id="herve" className="personne">
              <div className="text1">
                <p className="main-text">
                  <span>Hervé Le Bert</span> est{" "}
                  <span>ténor lyrique et comédien</span>, il se passionne dès sa
                  petite enfance pour la musique. Son parcours à la maîtrise de
                  la Loire lui permettra de trouver sa "voix". <br />
                  Il y découvre l'Opéra, une expérience qui est une révélation.{" "}
                  <br />
                  Depuis 2019, il étudie <span>le chant lyrique</span> avec le
                  ténor Yannick Berne en parallèle de ses études à l'ENM dans la
                  classe de chant de Virginie Pochon et au théâtre de l'Iris.{" "}
                  <br />
                  En 2023, il co-crée{" "}
                  <Link to="/">
                    <span>la compagnie Poly R</span>{" "}
                  </Link>{" "}
                  qu'il dirige avec Roxane Macaudière. Il est Bastien dans le
                  spectacle{" "}
                  <Link to="/spectacles#bastien">
                    <span>Bastien & Bastienne</span>
                  </Link>{" "}
                  et intègre également
                  <Link to="/spectacles#opera">
                    <span> la troupe Opéramobil'</span>.
                  </Link>
                </p>
              </div>
              <div className="pic1">
                <img
                  src={herve}
                  alt="photo Hervé"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(herve)}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bio3">
              <h3>Les artistes</h3>
            </div>
            <div id="fumi" className="personne-reverse">
              <div className="pic1">
                <img
                  src={fumi}
                  alt="photo Fumi"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(fumi)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  <span>Fumi Oka</span> est une <span>chanteuse lyrique</span>{" "}
                  mezzo-soprano d’origine japonaise. <br />
                  Après avoir passé une licence de chant à Kyoto, elle arrive en
                  France en 2019, où elle est admise à l’ENM de Villeurbanne
                  dans la classe de Virginie Pochon. <br />
                  Elle y obtient son DEM en 2023. <br />
                  Depuis l'obtention de sa licence, elle a participé à plusieurs
                  productions d’opéra en tant que choriste ainsi qu'en tant que
                  soliste, s'illustrant avec brio dans divers rôles : Dorabella
                  dans Cosi Fan Tutte de Mozart, Hänsel et Knusperhexe dans
                  Hänsel und Gretel d’Humperdinck, Ms Todd dans The Old Maid and
                  The Thief de Menotti et Carmen dans Carmen de Bizet. <br />
                  Lors de la saison 2023/2024, elle est soliste dans{" "}
                  <Link to="/spectacles#bastien">
                    <span>Bastien & Bastienne</span>
                  </Link>{" "}
                  et intègre{" "}
                  <Link to="/spectacles#opera">
                    <span>la troupe Opéramobil'</span>
                  </Link>{" "}
                  de la compagnie.
                </p>
              </div>
            </div>
            <div id="thomas" className="personne">
              <div className="text1">
                <p className="main-text">
                  Découvrant à 8 ans la musique par l’apprentissage du violon,
                  <span> Thomas Avrillon </span> ne tardera pas à rentrer à la
                  Maîtrise de la Loire, où il y restera sept ans. <br />
                  Grâce à cet important apport musical, il découvrira de
                  nombreuses disciplines liées au chant, dont la direction de
                  chœur puis d’orchestre, qu’il développera encore en arrivant
                  au conservatoire Massenet, puis à l’ENM de Villeurbanne.{" "}
                  <br />
                  Ayant obtenu, en parallèle d’une licence de musicologie, son
                  Certificat d’Études Musicales de direction, de{" "}
                  <span>violon</span> et de formation musicale, il continue de
                  développer sa pratique du <span>chant lyrique</span> auprès de
                  Nicolas Domingues, ce qui l’a amené à participer à des projets
                  en tant que choriste dans des ensembles semi-professionnels
                  comme Symphonietta ou Anarrès, mais également en tant que
                  soliste, dans le rôle de Pish-Tush du Mikado de Sullivan.{" "}
                  <br />
                  En juillet 2024, Thomas intègre{" "}
                  <Link to="/spectacles#opera">
                    <span>la troupe Opéramobil'</span>
                  </Link>{" "}
                  en tant que chanteur et violoniste.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={thomas}
                  alt="photo Thomas"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(thomas)}
                  loading="lazy"
                />
              </div>
            </div>

            <div id="melusine" className="personne-reverse">
              <div className="pic1">
                <img
                  src={melusine}
                  alt="photo Mélusine"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(melusine)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  <span>Mélusine Escande</span> est <span>pianiste</span> et{" "}
                  <span>cheffe de chœur</span>. Après une licence de musicologie
                  à l’Université de Grenoble, elle se forme au sein des
                  conservatoires de Lyon et Chambéry dont elle est diplômée en
                  piano, accompagnement au piano, écriture et direction de
                  chœur. <br />
                  Passionnée de musique vocale, elle intègre l’Institut Royal
                  Supérieur de Musique et de Pédagogie à Namur (Belgique).{" "}
                  <br />
                  Elle y obtient avec grande distinction un master en direction
                  chorale et un master en accompagnement au piano. <br />
                  Mélusine a travaillé pour les Chœurs d’Enfants et de Jeunes de
                  La Monnaie, elle est à la tête de la chorale Royale Saint Rémy
                  d’Ottignies et du chœur d’enfant les Piccolos de Nivelles.{" "}
                  <br />
                  Elle assure depuis la rentrée 2023 les cours de chant choral
                  auprès de la classe à horaires aménagés du Lycée Français de
                  Bruxelles. <br />
                  En juillet 2024, Mélusine intègre{" "}
                  <Link to="/spectacles#opera">
                    <span>la troupe Opéramobil'</span>
                  </Link>{" "}
                  en tant que pianiste accompagnatrice.
                </p>
              </div>
            </div>
            <div id="galtier" className="personne">
              <div className="text1">
                <p className="main-text">
                  <span>Galtier Le Bihan</span> est <span>guitariste</span>,{" "}
                  <span>compositeur</span> et <span>arrangeur</span>. <br />
                  Parallèlement à son cursus de guitare jazz à l'Ecole Nationale
                  de Musique de Villeurbanne, Galtier s'illustre en tant que
                  compositeur, interprète et improvisateur, et ce dans divers
                  styles, aussi bien la funk que le rock. <br />
                  Depuis deux ans, il est notamment membre du groupe lyonnais
                  Bourricot Live Band. <br />
                  Il enseigne également la guitare depuis plusieurs années.{" "}
                  <br />
                  Passionné d'art depuis son plus jeune âge, Galtier est
                  toujours à l'affût de nouvelles expériences et est l'un des
                  accompagnateurs de{" "}
                  <Link to="/spectacles#opera">
                    <span>l'Opéramobil'</span>
                  </Link>{" "}
                  en juillet 2024, apportant ainsi une touche instrumentale
                  moderne à la troupe.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={galtier}
                  alt="photo Galtier"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(galtier)}
                  loading="lazy"
                />
              </div>
            </div>
            <div id="nathan" className="personne-reverse">
              <div className="pic1">
                <img
                  src={nathan}
                  alt="photo Nathan"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(nathan)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  <span>Nathan Brunet</span> est <span>guitariste</span>,{" "}
                  <span>sound designer</span>, <span>compositeur</span> et{" "}
                  <span>claviériste</span>. <br />
                  Après des études au conservatoire de Nancy, il s'installe à
                  Lyon où il obtient un DUMI de musicien intervenant et où il
                  perfectionne sa pratique de la guitare jazz à l'Ecole
                  Nationale de Musique de Villeurbanne auprès de Pierre
                  Hachache. <br />
                  Nathan vient d'être reçu pour intégrer en septembre 2024 la
                  nouvelle promotion du prestigieux Centre Didier Lockwood à
                  Paris. <br />
                  Lors de la saison 2023/2024, Nathan est guitariste pour le
                  spectacle{" "}
                  <Link to="/spectacles#bastien">
                    <span>Bastien & Bastienne</span>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="bio4">
              <h3>Président</h3>
            </div>
            <div id="antoine " className="personne">
              <div className="text1">
                <p className="main-text">
                  Si il y en a bien un qui fait feu de tout bois, c’est{" "}
                  <span>Antoine Catinaud</span>. Si un coup se prépare, il en
                  est. Tout l’intéresse, du chant lyrique au rugby, en passant
                  par Stanislavski. <br />
                  Charmé par travail, il a à cœur de comprendre. <br />
                  De comprendre comment la grande machine humaine qu’il est
                  fonctionne et comment il raconte des histoires avec ça. <br />
                  En 2023, Antoine Catinaud devient le président de{" "}
                  <Link to="/">
                    <span>la compagnie Poly R</span>
                  </Link>
                  .
                </p>
              </div>

              <div className="pic1">
                <img
                  src={antoine}
                  alt="photo Galtier"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(antoine)}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bio5">
              <h3>Trésorière</h3>
            </div>
            <div id="laetitia" className="personne-reverse">
              <div className="pic1">
                <img
                  src={laetitia}
                  alt="photo Laetitia"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(laetitia)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  <span>Laëtitia Chanoz</span> s'investit dans{" "}
                  <Link to="/">
                    <span>la compagnie Poly R</span>
                  </Link>{" "}
                  dès sa création en 2023 en tant que trésorière. <br />
                  Passionnée de littérature, ancienne élève du Lycée du Parc et
                  aujourd'hui élève de l'Ecole Normale Supérieure de Lyon et
                  agrégée de Lettres modernes, Laëtitia a aussi joué de la harpe
                  pendant de nombreuses années et est désormais une fidèle des
                  salles de spectacles et de concerts lyonnaises ! <br />
                  Son travail de recherche porte notamment sur l'œuvre
                  autobiographique de Violette Leduc, une autrice du XXe siècle
                  qu'elle espère faire découvrir à ses futurs élèves et au grand
                  public. <br />
                  Enfin, à ses heures perdues, elle écrit, une artiste à suivre
                  donc !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pic10">
        <img
          src={draw}
          alt="dessin Poly R"
          width="auto"
          height="auto"
          className="responsive-img10"
          onClick={() => handleImageClick(draw)}
        />
      </div>

      {enlargedImage && (
        <ImageOverlay image={enlargedImage} onClose={handleCloseImage} />
      )}
      <End />
    </>
  );
};

export default Lacie;
