import React, { useState } from "react";
import { Helmet } from "react-helmet"; // Importer Helmet
import { Link } from "react-router-dom";
import End from "../Component/End";
import "./LaCie.css";
import roxane from "../Pic/roxane.jpg";
import herve from "../Pic/herve.jpg";
import thomas from "../Pic/thomas.jpg";
import melysine from "../Pic/melysine.jpg";
import galtier from "../Pic/galtier.jpg";
import fumi from "../Pic/fumi.jpg";
import nathan from "../Pic/nathan.jpg";
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
      <Helmet>
        <title>La Compagnie Poly R - Historique et Équipe</title>
        <meta
          name="description"
          content="Découvrez l'historique et l'équipe artistique de la Compagnie Poly R, une compagnie lyonnaise créée par Roxane Macaudière et Hervé Le Bert."
        />
      </Helmet>

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
            <div id="roxane" className="personne-reverse">
              <div className="pic1">
                <img
                  src={roxane}
                  alt="photo roxane"
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
                  Brünner pour la rentrée 2024-2025.
                  <br />
                  Depuis 2023, elle co-dirige{" "}
                  <Link to="/">
                    <span>la compagnie Poly R</span>{" "}
                  </Link>
                  avec Hervé Le Bert tout en faisant partie du spectacle{" "}
                  <Link to="/spectacles#bastien">
                    <span>Bastien & Bastienne</span>
                  </Link>{" "}
                  ainsi que de{" "}
                  <Link to="/spectacles#opera">
                    <span>la troupe Opéramobil'</span>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div id="herve" className="personne">
              <div className="text1">
                <p className="main-text">
                  <span>Hervé LE BERT</span> est{" "}
                  <span>ténor lyrique et comédien</span>, il se passionne dès sa
                  petite enfance pour la musique. Son parcours à la maîtrise de
                  la Loire lui permettra de trouver sa "voix". <br />
                  Il y découvre l'Opéra, une expérience qui est une révélation.{" "}
                  <br />
                  Depuis 2019 il étudie <span>le chant lyrique</span> avec le
                  ténor Yannick Berne en parallèle de ses études à l'ENM dans la
                  classe de chant de Virginie Pochon et au théâtre de l'Iris.{" "}
                  <br />
                  En 2023 il co-créé{" "}
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
                  alt="photo hervé"
                  onClick={() => handleImageClick(herve)}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bio-acteurs">
              <h3>Les acteurs de la compagnie</h3>
            </div>
            <div id="thomas" className="personne-reverse">
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
                  <span> Thomas Avrillon </span> ne tarda pas à rentrer à la
                  Maitrise de la Loire, où il y restera sept ans. <br />
                  Grâce à cet important apport musical, il découvrira de
                  nombreuses disciplines liées au chant, dont la direction de
                  chœur puis d’orchestre, qu’il développera encore en arrivant
                  au conservatoire Massenet, puis à l’ENM de Villeurbanne.{" "}
                  <br />
                  Ayant obtenu, en parallèle d’une licence de musicologie, son
                  Certificat d’Études Musicales de direction, de{" "}
                  <span>violon</span> et de formation musicale, il continu de
                  développer sa pratique du <span>chant lyrique</span> auprès de
                  Nicolas Domingues, ce qui l’a amené à participer à des projets
                  en tant que choriste dans des ensembles semi-professionnels
                  comme Symphonietta ou Anarrès, mais également en tant que
                  soliste, dans le rôle de Pish-Tush du Mikado de Sullivan.{" "}
                  <br />
                  En juillet 2024, Thomas intègre{" "}
                  <Link to="/spectacles#opera">
                    <span>la troupe Opéramobil'</span>.
                  </Link>
                  en tant que chanteur et violoniste.
                </p>
              </div>
            </div>
            <div id="nathan" className="personne">
              <div className="text1">
                <p className="main-text">
                  <span>Nathan Lapierre</span> est un jeune baryton, également
                  comédien. <br />
                  C'est au sein de la Maîtrise de la Loire qu'il s'initie à la
                  musique et aux arts de la scène. <br />
                  Sa curiosité pour ces différents arts scéniques se traduit par
                  sa pratique du chant, mais aussi par celle de la flûte
                  traversière qu'il développe au sein du CRD de Montbrison, puis
                  du CRR de Saint-Etienne. <br />
                  Actuellement en bachelor de physique-chimie à l'Université
                  Lyon 1, Nathan poursuit son cursus en EPI à l'ENM de
                  Villeurbanne.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={nathan}
                  alt="photo nathan"
                  onClick={() => handleImageClick(nathan)}
                  loading="lazy"
                />
              </div>
            </div>
            <div id="melysine" className="personne-reverse">
              <div className="pic1">
                <img
                  src={melysine}
                  alt="photo mélysine"
                  onClick={() => handleImageClick(melysine)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  <span>Mélysine de Coster</span> commence l'étude du violon à 6
                  ans et intègre la même année la Maîtrise de la Loire. <br />
                  Quelques années plus tard, elle se tourne vers{" "}
                  <span>le chant lyrique</span> en 2020 et commence un cursus
                  EPI à l’ENM de Villeurbanne. <br />
                  Elle intègre, après l'obtention de son baccalauréat littéraire
                  en 2021, la classe d'art dramatique de l'ENM Villeurbanne sous
                  la direction de Nâzim Boudjenah, pensionnaire de la Comédie
                  Française. <br />
                  Passionnée par la danse, elle obtient en 2022 l’EAT (Examen
                  d’Aptitudes Techniques) et est admissible au diplôme d’État de
                  professeur de danse classique. <br />
                  En 2023, elle obtient un rôle de soprano solo pour la{" "}
                  <span>Petite Messe Solennelle</span> de Rossini, dans le cadre
                  de la saison du conservatoire. <br />
                  Cette saison Mélysine intègre la{" "}
                  <Link to="/spectacles#opera">
                    <span>troupe Opéramobil'</span>.
                  </Link>
                </p>
              </div>
            </div>
            <div id="galtier" className="personne">
              <div className="text1">
                <p className="main-text">
                  Passionné dès son plus jeune âge par l’Histoire,
                  <span>Galtier Dupré</span> trouve son épanouissement dans le
                  théâtre qu’il commence à pratiquer en 2018 à l’école de la
                  Comédie de Saint-Étienne sous la direction de David
                  Jauzion-Graverolles. <br />
                  Actuellement étudiant en bachelor d’Histoire à Lyon, il
                  continue à se former en art dramatique à l’ENM de Villeurbanne
                  sous la direction de Nâzim Boudjenah, pensionnaire de la
                  Comédie Française. <br />
                  Cette saison, Galtier joue{" "}
                  <Link to="/spectacles#bastien">
                    <span>le rôle du récitant</span>
                  </Link>{" "}
                  dans Bastien & Bastienne.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={galtier}
                  alt="photo galtier"
                  onClick={() => handleImageClick(galtier)}
                  loading="lazy"
                />
              </div>
            </div>
            <div id="fumi" className="personne-reverse">
              <div className="pic1">
                <img
                  src={fumi}
                  alt="photo fumi"
                  onClick={() => handleImageClick(fumi)}
                  loading="lazy"
                />
              </div>
              <div className="text1">
                <p className="main-text">
                  Diplômée de l’Université des Arts d’Osaka au Japon,{" "}
                  <span>Fumi Masuda</span> travaille comme graphiste et
                  illustratrice depuis 2017. <br />
                  Elle collabore notamment avec le célèbre studio d’animation
                  Kyoto Animation, où elle développe ses compétences en design
                  graphique et participe à plusieurs projets d’animation. <br />
                  En 2023, elle réalise le design et les illustrations des
                  décors du spectacle{" "}
                  <Link to="/spectacles#bastien">
                    <span>Bastien & Bastienne</span>.
                  </Link>{" "}
                  Fumi crée également l’identité graphique et les illustrations
                  de{" "}
                  <Link to="/">
                    <span>la compagnie Poly R.</span>
                  </Link>
                </p>
              </div>
            </div>
            <div id="draw" className="personne">
              <div className="text1">
                <p className="main-text">
                  Diplômé de l’École Supérieure des Arts Saint-Luc de Liège,
                  <span>Alexandre Capelli</span> travaille depuis plus de 10 ans
                  comme graphiste freelance et illustrateur. <br />
                  Il développe un style unique mêlant peinture digitale et
                  techniques traditionnelles pour créer des œuvres expressives
                  et colorées. <br />
                  En 2023, Alexandre crée{" "}
                  <Link to="/spectacles#opera">
                    <span>les illustrations</span>
                  </Link>{" "}
                  du spectacle Bastien & Bastienne et collabore à l’élaboration
                  des décors avec Fumi Masuda.
                </p>
              </div>
              <div className="pic1">
                <img
                  src={draw}
                  alt="photo alexandre"
                  onClick={() => handleImageClick(draw)}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {enlargedImage && (
          <div className="enlarged-image" onClick={handleCloseImage}>
            <img src={enlargedImage} alt="Enlarged" />
          </div>
        )}
      </div>

      <End />
    </>
  );
};

export default Lacie;
