import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import End from "../Component/End";
import "./LaCie.css";

import melusine from "../Pic/mel2.webp";
import nathan from "../Pic/nat.webp";
import antoine from "../Pic/ant.webp";
import laetitia from "../Pic/lae.webp";
import draw from "../Pic/draw.webp";
import roxbio from "../Pic/poly3.webp";
import hervbio from "../Pic/poly.webp";
import tombio from "../Pic/poly2.webp";
import fumbio from "../Pic/poly6.webp";
import yukubio from "../Pic/polyyu.webp";
import alba from "../Pic/alba.webp";
import galtier from "../Pic/galbio.webp";

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
// Ajout de la validation des props avec PropTypes
ImageOverlay.propTypes = {
  image: PropTypes.string.isRequired, // La prop image doit être une chaîne de caractères et est requise
  onClose: PropTypes.func.isRequired, // La prop onClose doit être une fonction et est requise
};
const Lacie = () => {
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
    if (window.innerWidth <= 768) return;
    setEnlargedImage(image);
  };
  const handleCloseImage = () => setEnlargedImage(null);

  return (
    <>
      <main className="main ">
        <div className="cie animate-on-scroll">
          <h1>La Compagnie</h1>
        </div>
        <div className="historique animate-on-scroll">
          <h2>Historique</h2>
        </div>
        <div className="cie-text animate-on-scroll">
          <p>
            La Compagnie <span>Poly R</span> est lyonnaise et a été créée en
            septembre 2023 par <span> Roxane Macaudière</span> et{" "}
            <span> Hervé Le Bert</span>
            . <br />
            Tous deux artistes en voie de professionnalisation et passionnés par
            leurs différentes pratiques (chant lyrique, théâtre, piano, guitare,
            danse), ils ont eu à cœur de créer une structure leur permettant de
            donner vie à des créations scéniques pluridisciplinaires. <br />
            Étudiants en classe de chant lyrique aux conservatoires de Genève et
            de Villeurbanne, Hervé et Roxane sont très sensibles à l’art de
            l’Opéra et se sont donnés pour principale mission d’amener cette
            pratique parfois méconnue dans les lieux où elle n’est pas ou peu
            représentée, notamment les campagnes et villages.
          </p>
        </div>
        <div className="bio animate-on-scroll">
          <h2>L&rsquo;Équipe</h2>
          <h3>Direction administrative</h3>

          <div className="roxy">
            <div id="roxane" className="personne-reverse animate-on-scroll">
              <div className="pic200 animate-on-scroll">
                <img
                  src={roxbio}
                  alt="photo Roxane"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(roxbio)}
                  loading="lazy"
                />
              </div>
              <div className="all-titre animate-on-scroll">
                <h4 className="titre-personne animate-on-scroll">
                  Soprano, Directrice artistique, Communication, Co-créatrice
                </h4>
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Roxane Macaudière</span> s&apos;épanouit en musique
                    dès son plus jeune âge au sein du{" "}
                    <a
                      href="https://maitrisedespaysdelaloire.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      chœur de jeunes chanteurs de la Maîtrise de la Loire
                    </a>
                    . Parallèlement, elle est reçue à l&apos;âge de 14 ans en
                    cycle supérieur de piano classique au{" "}
                    <a
                      href="https://www.saint-etienne.fr/le-conservatoire-massenet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Conservatoire de Saint-Etienne{" "}
                    </a>{" "}
                    où elle obtient son diplôme de fin d&apos;études 4 ans plus
                    tard. Après ce début de chemin artistique, c&apos;est à Lyon
                    qu&apos;elle s&apos;envole pour étudier le
                    <span> chant lyrique</span> aux côtés de{" "}
                    <a
                      href="http://cecile.deboever.free.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Cécile de Boever
                    </a>
                    . <br />
                    Elle intègre parallèlement l&apos;{" "}
                    <a
                      href="https://www.enm-villeurbanne.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      ENM de Villeurbanne
                    </a>
                    , dans la classe de{" "}
                    <a
                      href="https://www.virginiepochon.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Virginie Pochon
                    </a>
                    . <br />
                    Sa passion pour la pluralité des arts la pousse à intégrer
                    dans la même école la classe de Vincent Martin en piano
                    jazz, et à se présenter au{" "}
                    <a
                      href="https://www.le-cycle.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Cycle
                    </a>{" "}
                    Centre Chorégraphique de Lyon en danse contemporaine. <br />
                    Elle obtient après deux ans d&rsquo;études de danse son
                    Examen d&apos;Aptitudes Techniques. <br />
                    Aujourd&apos;hui enrichie de ces diverses expériences et
                    âgée de 25 ans, Roxane étudie le chant lyrique à la{" "}
                    <a
                      href="https://www.hesge.ch/hem/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Haute École de Musique de Genève
                    </a>{" "}
                    dans la classe de{" "}
                    <a
                      href="https://www.hesge.ch/hem/la-hem/annuaire/heidi-brunner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Heidi Brünner
                    </a>
                    . <br />
                    En avril 2025, elle incarne Gretel dans une production de
                    l&apos;opéra Hänsel und Gretel de Humperdinck à Chêne-Bourg
                    en Suisse. <br />
                    Elle est aussi la directrice artistique de la{" "}
                    <span>Compagnie Poly R</span> qu&apos;elle a co-créée avec
                    Hervé Le Bert en 2023. <br /> En novembre 2025, elle compose
                    pour le baryton-basse{" "}
                    <a
                      href="https://www.vincentletexier.com/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Vincent Le Texier
                    </a>{" "}
                    et chante en duo avec lui dans le cadre de{" "}
                    <a
                      href="https://festyvocal.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Festyvocal
                    </a>
                    . En mai 2026, elle remporte aux côtés de{" "}
                    <a
                      href="https://www.instagram.com/p/DYPrem-DOaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Florestan Bourreau
                    </a>{" "}
                    le premier prix ex-aequo du Concours Mahler. En août 2026,
                    elle intègre la nouvelle promotion du{" "}
                    <a
                      href="https://www.pole-lyrique-excellence.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Pôle Lyrique d&apos;Excellence de Lyon
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="hervy">
              <div id="herve" className="personne animate-on-scroll">
                <div className="pic1 animate-on-scroll">
                  <img
                    src={hervbio}
                    alt="photo Hervé"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(hervbio)}
                    loading="lazy"
                  />
                </div>
                <div className="all-titre animate-on-scroll">
                  <h4 className="titre-personne animate-on-scroll">
                    Tenor, Directeur technique, <br />
                    Co-createur
                  </h4>
                  <div className="text1 animate-on-scroll">
                    <p className="main-text animate-on-scroll">
                      <span>Hervé Le Bert</span> est{" "}
                      <span>ténor lyrique et comédien</span>, il se passionne
                      dès sa petite enfance pour la musique. Son parcours à la{" "}
                      <a
                        href="https://maitrisedespaysdelaloire.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        maîtrise de la Loire
                      </a>{" "}
                      lui permettra de trouver sa &quot;voix&quot;. Il y
                      découvre l&apos;Opéra, une expérience qui est une
                      révélation. <br />
                      Depuis 2019, il étudie le<span> chant lyrique</span> avec
                      le ténor{" "}
                      <a
                        href="https://www.opera-lyon.com/fr/artistes/yannick-berne"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        Yannick Berne
                      </a>{" "}
                      en parallèle de ses études à{" "}
                      <a
                        href="https://www.enm-villeurbanne.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        l&apos;ENM
                      </a>{" "}
                      dans la classe de chant de{" "}
                      <a
                        href="https://www.virginiepochon.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        Virginie Pochon
                      </a>{" "}
                      et au{" "}
                      <a
                        href="https://www.theatredeliris.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        théâtre de l&apos;Iris
                      </a>
                      .
                      <br /> En 2023, il co-crée la
                      <span> Compagnie Poly R</span> dont il est
                      aujourd&apos;hui le directeur technique et comptable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fumy">
              <div id="fumi" className="personne-reverse animate-on-scroll">
                <div className="pic200 animate-on-scroll">
                  <img
                    src={fumbio}
                    alt="photo Fumi"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(fumbio)}
                    loading="lazy"
                  />
                </div>
                <div className="all-titre animate-on-scroll">
                  <h4 className="titre-personne3 animate-on-scroll">
                    Mezzo-soprano, Régisseuse, Assistante communication
                  </h4>
                  <div className="text1 animate-on-scroll">
                    <p className="main-text animate-on-scroll">
                      <span>Fumi Oka</span> est une{" "}
                      <span>chanteuse lyrique</span> mezzo-soprano d’origine
                      japonaise. <br />
                      Après avoir passé une licence de chant à Kyoto, elle
                      arrive en France en 2019, où elle est admise à{" "}
                      <a
                        href="https://www.enm-villeurbanne.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        l&apos;ENM
                      </a>{" "}
                      de Villeurbanne dans la classe de{" "}
                      <a
                        href="https://www.virginiepochon.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        Virginie Pochon
                      </a>
                      . <br />
                      Elle y obtient son DEM en 2023. <br />
                      Depuis l&rsquo;obtention de sa licence, elle a participé à
                      plusieurs productions d&rsquo;opéra en tant que choriste
                      ainsi qu&rsquo;en tant que soliste, s&apos;illustrant avec
                      brio dans divers rôles : Dorabella dans{" "}
                      <a
                        href="https://fr.wikipedia.org/wiki/Cos%C3%AC_fan_tutte"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        Cosi Fan Tutte
                      </a>{" "}
                      de Mozart, Hänsel et Knusperhexe dans{" "}
                      <a
                        href="https://fr.wikipedia.org/wiki/H%C3%A4nsel_und_Gretel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        Hänsel und Gretel
                      </a>{" "}
                      d’Humperdinck,{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/The_Old_Maid_and_the_Thief"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        Ms Todd dans The Old Maid and The Thief
                      </a>{" "}
                      de Menotti et{" "}
                      <a
                        href="https://fr.wikipedia.org/wiki/Carmen_(op%C3%A9ra)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link-bio"
                      >
                        Carmen
                      </a>{" "}
                      dans Carmen de Bizet. <br />
                      Lors de la saison 2023/2024, elle est soliste dans{" "}
                      <span>Bastien & Bastienne</span> et intègre la troupe{" "}
                      <span>Opéramobil&apos;</span> de la compagnie. <br />
                      En 2025, Fumi devient assistante communication et
                      régisseuse au sein de la compagnie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bio3 animate-on-scroll">
              <h3>Les artistes</h3>
            </div>
            <div className="allpers">
              <div id="thomas" className="personne animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    Découvrant à 8 ans la musique par l’apprentissage du violon,
                    <span> Thomas Avrillon </span> ne tardera pas à rentrer à la{" "}
                    <a
                      href="https://maitrisedespaysdelaloire.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      maîtrise de la Loire
                    </a>
                    , où il y restera sept ans. Grâce à cet important apport
                    musical, il découvrira de nombreuses disciplines liées au
                    chant, dont la direction de chœur puis d’orchestre, qu’il
                    développera encore en arrivant au{" "}
                    <a
                      href="https://www.saint-etienne.fr/le-conservatoire-massenet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      conservatoire Massenet
                    </a>
                    , puis à{" "}
                    <a
                      href="https://www.enm-villeurbanne.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      l&apos;ENM
                    </a>{" "}
                    de Villeurbanne. <br />
                    Ayant obtenu, en parallèle d’une licence de musicologie, son
                    Certificat d’Études Musicales de direction, de{" "}
                    <span>violon</span> et de formation musicale, il continue de
                    développer sa pratique du <span>chant lyrique</span> auprès
                    de{" "}
                    <a
                      href="https://www.musicalta.com/project/nicolas-domingues/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Nicolas Domingues
                    </a>
                    , ce qui l’a amené à participer à des projets en tant que
                    choriste dans des ensembles semi-professionnels comme
                    Symphonietta ou Anarrès, mais également en tant que soliste,
                    dans le rôle de Pish-Tush du Mikado de Sullivan. <br />
                    En juillet 2024, Thomas intègre la troupe{" "}
                    <span>Opéramobil&apos;</span> en tant que chanteur et
                    violoniste.
                  </p>
                </div>
                <div className="pic100 animate-on-scroll">
                  <img
                    src={tombio}
                    alt="photo Thomas"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(tombio)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div id="alba" className="personne-reverse animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Alba Cantuern</span> est notre formidable{" "}
                    <span>guitariste</span>, <span>bassiste</span>,{" "}
                    <span>percussionniste </span> etc. <br />
                    Bref : qui dit Poly R dit instrumentiste polytalentueuse et
                    … vous savez quoi ? Elle est aussi et principalement
                    contrebassiste. <br />
                    Alba vient de Saint-Étienne, passe beaucoup de temps à
                    Genève pour ses études de contrebasse à la{" "}
                    <a
                      href="https://www.hesge.ch/hem/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Haute École de Musique
                    </a>{" "}
                    et nous sommes ravis de l&apos;accueillir parmi nous !
                    Classique, jazz, tango, elle joue de tout, et il y en aura
                    pour tous les goûts c&apos;est promis.
                  </p>
                </div>
                <div className="pic800 animate-on-scroll">
                  <img
                    src={alba}
                    alt="photo alba"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(alba)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div id="yuku" className="personne animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Yuku Yonemitsu </span> est <span>une pianiste </span>,
                    originaire du Japon. <br />
                    En 2017, elle a commencé ses études au{" "}
                    <a
                      href="https://www.kunitachi.ac.jp/en/admission/redirect.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Kunitachi College of Music
                    </a>
                    . Lors de son master, elle a participé à un programme
                    d’échange d’un an entre le Kunitachi College of Music et la{" "}
                    <a
                      href="https://www.hesge.ch/hem/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Haute École de Musique
                    </a>{" "}
                    de Genève. Cette expérience lui a permis de s’imprégner de
                    l’environnement diversifié de Genève et de collaborer avec
                    de nombreux jeunes musiciens talentueux. <br />
                    Après l’obtention de son master, Yuku a choisi de poursuivre
                    ses études à la Haute école de musique de Genève, où elle
                    est actuellement inscrite en master d’accompagnement au
                    piano dans les classes de{" "}
                    <a
                      href="https://www.hesge.ch/hem/la-hem/annuaire/nina-uhari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Nina Uhari
                    </a>{" "}
                    et{" "}
                    <a
                      href="https://www.smclausanne.ch/archives/interpretes-20.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      James Alexander
                    </a>
                    . <br />
                    Elle se produit régulièrement lors de nombreux concerts au
                    Japon et en Suisse, incluant des récitals de piano solo, des
                    accompagnements pour chanteurs et instrumentistes, ainsi que
                    des prestations de musique contemporaine et de clavecin.{" "}
                    <br />
                    En juillet 2025, Yuku intègre la troupe{" "}
                    <span>Opéramobil&apos;</span> {""}en tant que pianiste.
                  </p>
                </div>
                <div className="pic800 animate-on-scroll">
                  <img
                    src={yukubio}
                    alt="photo Yuku"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(yukubio)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div id="melusine" className="personne-reverse animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Mélusine Escande</span> est <span>pianiste</span> et{" "}
                    <span>cheffe de chœur</span>. Après une licence de
                    musicologie à{" "}
                    <a
                      href="https://www.univ-grenoble-alpes.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      l’Université de Grenoble
                    </a>
                    , elle se forme au sein des conservatoires de{" "}
                    <a
                      href="https://www.conservatoire-lyon.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Lyon
                    </a>{" "}
                    et{" "}
                    <a
                      href="https://www.chambery.fr/143-la-cite-des-arts.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Chambéry
                    </a>{" "}
                    dont elle est diplômée en piano, accompagnement au piano,
                    écriture et direction de chœur. Passionnée de musique
                    vocale, elle intègre{" "}
                    <a
                      href="https://www.imep.be/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      l’Institut Royal Supérieur de Musique et de Pédagogie
                    </a>{" "}
                    à Namur (Belgique). Elle y obtient avec grande distinction
                    un master en direction chorale et un master en
                    accompagnement au piano. <br />
                    Mélusine a travaillé pour les{" "}
                    <a
                      href="https://www.lamonnaiedemunt.be/fr/static-pages/410-choeurs-d-enfants-et-de-jeunes-de-la-monnaie#:~:text=Issus%20d'une%20collaboration%20entre,musique%20chorale%20de%20haut%20niveau."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Chœurs d’Enfants et de Jeunes de La Monnaie
                    </a>
                    , elle est à la tête de{" "}
                    <a
                      href="https://www.acj.be/rechercher-un-choeur/chorale-royale-saint-remy/948"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      la chorale Royale Saint Rémy d’Ottignies
                    </a>{" "}
                    et du{" "}
                    <a
                      href="http://localhost:5173/lacie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      chœur d’enfant les Piccolos de Nivelles
                    </a>
                    . <br />
                    Elle assure depuis la rentrée 2023 les cours de chant choral
                    auprès de la classe à horaires aménagés du Lycée Français de
                    Bruxelles. <br />
                    En juillet 2024, Mélusine intègre la troupe{" "}
                    <span> Opéramobil&rsquo;</span> en tant que pianiste
                    accompagnatrice.
                  </p>
                </div>
                <div className="pic100 animate-on-scroll">
                  <img
                    src={melusine}
                    alt="photo Mélusine"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(melusine)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div id="galtier" className="personne animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Galtier Le Bihan</span> est <span>guitariste</span>,{" "}
                    <span>compositeur</span> et <span>arrangeur</span>. <br />
                    Parallèlement à son cursus de guitare jazz à{" "}
                    <a
                      href="https://www.enm-villeurbanne.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      l&apos;Ecole Nationale de Musique de Villeurbanne,
                    </a>{" "}
                    Galtier s&apos;illustre en tant que compositeur, interprète
                    et improvisateur, et ce dans divers styles, aussi bien la
                    funk que le rock. <br />
                    Depuis deux ans, il est notamment membre du groupe lyonnais{" "}
                    <a
                      href="https://www.youtube.com/watch?v=BfQ8rA93vVs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Bourricot
                    </a>
                    . <br />
                    Il enseigne également la guitare depuis plusieurs années.{" "}
                    <br />
                    Passionné d&apos;art depuis son plus jeune âge, Galtier est
                    toujours à l&apos;affût de nouvelles expériences et est
                    l&apos;un des accompagnateurs de l&apos;{" "}
                    <span>Opéramobil&apos;</span> en juillet 2024, apportant
                    ainsi une touche instrumentale moderne à la troupe.
                  </p>
                </div>

                <div className="pic100 animate-on-scroll">
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
              <div id="nathan" className="personne-reverse animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Nathan Brunet</span> est <span>guitariste</span>,{" "}
                    <span>sound designer</span>, <span>compositeur</span> et{" "}
                    <span>claviériste</span>. <br />
                    Après des études au{" "}
                    <a
                      href="https://conservatoire.grandnancy.eu/accueil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      conservatoire de Nancy
                    </a>
                    , il s&apos;installe à Lyon où il obtient un DUMI de
                    musicien intervenant et où il perfectionne sa pratique de la
                    guitare jazz à{" "}
                    <a
                      href="https://www.enm-villeurbanne.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      l&apos;Ecole Nationale de Musique de Villeurbanne,
                    </a>{" "}
                    auprès de{" "}
                    <a
                      href="https://www.enm-villeurbanne.fr/2019/12/23/portrait-de-pierre-achache/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Pierre Achache
                    </a>
                    . <br />
                    Nathan vient d&apos;être reçu pour intégrer en septembre
                    2024 la nouvelle promotion du prestigieux{" "}
                    <a
                      href="https://cmdl.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link-bio"
                    >
                      Centre Didier Lockwood
                    </a>{" "}
                    à Paris. <br />
                    Lors de la saison 2023/2024, Nathan est guitariste pour le
                    spectacle <span>Bastien & Bastienne</span>.
                  </p>
                </div>
                <div className="pic100 animate-on-scroll">
                  <img
                    src={nathan}
                    alt="photo Nathan"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(nathan)}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="bio4 animate-on-scroll">
              <h3>Président</h3>
            </div>
            <div id="antoine " className="personne animate-on-scroll">
              <div className="text1 animate-on-scroll">
                <p className="main-text animate-on-scroll">
                  Si il y en a bien un qui fait feu de tout bois, c’est{" "}
                  <span>Antoine Catinaud</span>. Si un coup se prépare, il en
                  est. Tout l’intéresse, du chant lyrique au rugby, en passant
                  par Stanislavski. Charmé par travail, il a à cœur de
                  comprendre. De comprendre comment la grande machine humaine
                  qu’il est fonctionne et comment il raconte des histoires avec
                  ça. <br />
                  En 2023, Antoine Catinaud devient le président de la{" "}
                  <span>Compagnie Poly R</span>.
                </p>
              </div>
              <div className="pic100 animate-on-scroll">
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
            <div className="bio5 animate-on-scroll">
              <h3>Trésorière</h3>
            </div>
            <div id="laetitia" className="personne-reverse animate-on-scroll">
              <div className="text1 animate-on-scroll">
                <p className="main-text animate-on-scroll">
                  <span>Laëtitia Chanoz</span> s&apos;investit dans la{" "}
                  <span>Compagnie Poly R</span> dès sa création en 2023. <br />
                  Passionnée de littérature, ancienne élève du Lycée du Parc et
                  aujourd&apos;hui élève de{" "}
                  <a
                    href="https://www.ens-lyon.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight-link-bio"
                  >
                    l&apos;Ecole Normale Supérieure de Lyon
                  </a>{" "}
                  et agrégée de Lettres modernes, Laëtitia a aussi joué de la
                  harpe pendant de nombreuses années et est désormais une fidèle
                  des salles de spectacles et de concerts lyonnaises ! <br />
                  Son travail de recherche porte notamment sur l&rsquo;œuvre
                  autobiographique de{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/Violette_Leduc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight-link-bio"
                  >
                    Violette Leduc
                  </a>
                  , une autrice du XXe siècle qu&apos;elle espère faire
                  découvrir à ses futurs élèves et au grand public. <br />
                  Enfin, à ses heures perdues, elle écrit, une artiste à suivre
                  donc !
                </p>
              </div>
              <div className="pic100 animate-on-scroll">
                <img
                  src={laetitia}
                  alt="photo Laetitia"
                  width="400px"
                  height="400px"
                  onClick={() => handleImageClick(laetitia)}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="pic20 animate-on-scroll">
        <img
          src={draw}
          alt="dessin Poly R"
          width="auto"
          height="auto"
          className="responsive-img20"
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
