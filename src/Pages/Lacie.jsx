import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
import roxbio from "../Pic/roxbio.webp";
import hervbio from "../Pic/hervbio.webp";
import tombio from "../Pic/tombio.webp";
import fumbio from "../Pic/fumbio.webp";
import yukubio from "../Pic/yukubio.webp";
import galbio from "../Pic/galbio.webp";

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

  const handleImageClick = (image) => setEnlargedImage(image);
  const handleCloseImage = () => setEnlargedImage(null);

  return (
    <>
      <div className="main ">
        <div className="cie animate-on-scroll">
          <h1>La Compagnie</h1>
        </div>
        <div className="historique animate-on-scroll">
          <h2>Historique</h2>
        </div>
        <div className="cie-text animate-on-scroll">
          <p>
            La Compagnie <span>Poly R</span> est lyonnaise et a été créée en
            septembre 2023 par{" "}
            <span>
              {" "}
              <Link to="/lacie#roxane">Roxane Macaudière</Link>
            </span>{" "}
            et{" "}
            <span>
              {" "}
              <Link to="/lacie#herve">Hervé Le Bert</Link>
            </span>
            . <br />
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
        <div className="bio animate-on-scroll">
          <h2>L&rsquo;Équipe</h2>
          <h3>Direction administrative</h3>
          <div className="roxy">
            <div className="artistes animate-on-scroll">
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
                    Directrice artistique, chargée de communication (soprano)
                  </h4>
                  <div className="text1 animate-on-scroll">
                    <p className="main-text animate-on-scroll">
                      <span>Roxane Macaudière</span> s&apos;épanouit en musique
                      dès son plus jeune âge au sein du chœur de jeunes
                      chanteurs de la Maîtrise de la Loire. <br />
                      Parallèlement, elle est reçue à l&apos;âge de 14 ans en
                      cycle supérieur de piano classique au Conservatoire de
                      Saint-Etienne où elle obtient son diplôme de fin
                      d&apos;études 4 ans plus tard. <br />
                      Après ce début de chemin artistique, c&apos;est à Lyon
                      qu&apos;elle s&apos;envole pour étudier
                      <span> le chant lyrique</span> aux côtés de Cécile de
                      Boever. <br />
                      Elle intègre parallèlement l&apos;ENM de Villeurbanne,
                      dans la classe de Virginie Pochon. <br />
                      Sa passion pour la pluralité des arts la pousse à intégrer
                      dans la même école la classe de Vincent Martin en piano
                      jazz, et à se présenter au Cycle Centre Chorégraphique de
                      Lyon en danse contemporaine. <br />
                      Elle obtient après deux ans d&rsquo;études de danse son
                      Examen d&apos;Aptitudes Techniques. <br />
                      Aujourd&apos;hui enrichie de ces diverses expériences et
                      âgée de 24 ans, Roxane étudie le chant lyrique à la Haute
                      École de Musique de Genève dans la classe de Heidi
                      Brünner. <br />
                      En avril 2025, elle incarne Gretel dans une production de
                      l'opéra Hänsel und Gretel de Humperdinck à Chêne-Bourg en
                      Suisse. <br />
                      Elle est aussi la directrice artistique de la{" "}
                      <Link to="/">
                        <span>la compagnie Poly R</span>
                      </Link>{" "}
                      qu'elle a co-créée avec Hervé Le Bert en 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hervy">
              <div id="herve" className="personne animate-on-scroll">
                <div className="all-titre animate-on-scroll">
                  <h4 className="titre-personne2 animate-on-scroll">
                    Directeur technique, comptable (ténor)
                  </h4>
                  <div className="text1 animate-on-scroll">
                    <p className="main-text animate-on-scroll">
                      <span>Hervé Le Bert</span> est{" "}
                      <span>ténor lyrique et comédien</span>, il se passionne
                      dès sa petite enfance pour la musique. Son parcours à la
                      maîtrise de la Loire lui permettra de trouver sa
                      &quot;voix&quot;. <br />
                      Il y découvre l&apos;Opéra, une expérience qui est une
                      révélation. <br />
                      Depuis 2019, il étudie <span>le chant lyrique</span> avec
                      le ténor Yannick Berne en parallèle de ses études à
                      l&apos;ENM dans la classe de chant de Virginie Pochon et
                      au théâtre de l&apos;Iris.
                      <br />
                      En 2023, il co-crée{" "}
                      <Link to="/">
                        <span>la compagnie Poly R</span>{" "}
                      </Link>{" "}
                      dont il est aujourd'hui le directeur technique et
                      comptable.
                    </p>
                  </div>
                </div>
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
              </div>
            </div>
            <div className="fumy">
              <div id="fumi" className="personne-reverse animate-on-scroll">
                <div className="pic1 animate-on-scroll">
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
                    Assistante communication, régisseuse (mezzo-soprano)
                  </h4>
                  <div className="text1 animate-on-scroll">
                    <p className="main-text animate-on-scroll">
                      <span>Fumi Oka</span> est une{" "}
                      <span>chanteuse lyrique</span> mezzo-soprano d’origine
                      japonaise. <br />
                      Après avoir passé une licence de chant à Kyoto, elle
                      arrive en France en 2019, où elle est admise à l’ENM de
                      Villeurbanne dans la classe de Virginie Pochon. <br />
                      Elle y obtient son DEM en 2023. <br />
                      Depuis l&rsquo;obtention de sa licence, elle a participé à
                      plusieurs productions d&rsquo;opéra en tant que choriste
                      ainsi qu&rsquo;en tant que soliste, s&apos;illustrant avec
                      brio dans divers rôles : Dorabella dans Cosi Fan Tutte de
                      Mozart, Hänsel et Knusperhexe dans Hänsel und Gretel
                      d’Humperdinck, Ms Todd dans The Old Maid and The Thief de
                      Menotti et Carmen dans Carmen de Bizet. <br />
                      Lors de la saison 2023/2024, elle est soliste dans{" "}
                      <Link to="/spectacles#bastien">
                        <span>Bastien & Bastienne</span>
                      </Link>{" "}
                      et intègre{" "}
                      <Link to="/spectacles#opera">
                        <span>la troupe Opéramobil'</span>
                      </Link>{" "}
                      de la compagnie. <br />
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
                    développer sa pratique du <span>chant lyrique</span> auprès
                    de Nicolas Domingues, ce qui l’a amené à participer à des
                    projets en tant que choriste dans des ensembles
                    semi-professionnels comme Symphonietta ou Anarrès, mais
                    également en tant que soliste, dans le rôle de Pish-Tush du
                    Mikado de Sullivan. <br />
                    En juillet 2024, Thomas intègre{" "}
                    <Link to="/spectacles#opera">
                      <span>la troupe Opéramobil'&apos;</span>
                    </Link>{" "}
                    en tant que chanteur et violoniste.
                  </p>
                </div>
                <div className="pic150 animate-on-scroll">
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

              <div id="galtier" className="personne-reverse animate-on-scroll">
                <div className="pic150 animate-on-scroll">
                  <img
                    src={galbio}
                    alt="photo Galtier"
                    width="400px"
                    height="400px"
                    onClick={() => handleImageClick(galbio)}
                    loading="lazy"
                  />
                </div>
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Galtier Le Bihan</span> est <span>guitariste</span>,{" "}
                    <span>compositeur</span> et <span>arrangeur</span>. <br />
                    Parallèlement à son cursus de guitare jazz à l&apos;Ecole
                    Nationale de Musique de Villeurbanne, Galtier
                    s&apos;illustre en tant que compositeur, interprète et
                    improvisateur, et ce dans divers styles, aussi bien la funk
                    que le rock. <br />
                    Depuis deux ans, il est notamment membre du groupe lyonnais
                    Bourricot Live Band. <br />
                    Il enseigne également la guitare depuis plusieurs années.{" "}
                    <br />
                    Passionné d&apos;art depuis son plus jeune âge, Galtier est
                    toujours à l&apos;affût de nouvelles expériences et est
                    l&apos;un des accompagnateurs de{" "}
                    <Link to="/spectacles#opera">
                      <span>la troupe Opéramobil'</span>
                    </Link>{" "}
                    en juillet 2024, apportant ainsi une touche instrumentale
                    moderne à la troupe.
                  </p>
                </div>
              </div>
              <div id="yuku" className="personne animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Yuku Yonemitsu </span> est <span>une pianiste </span>,
                    originaire du Japon. <br />
                    En 2017, elle a commencé ses études au Kunitachi College of
                    Music. Lors de son master, elle a participé à un programme
                    d’échange d’un an entre le Kunitachi College of Music et la
                    Haute école de musique de Genève. <br />
                    Cette expérience lui a permis de s’imprégner de
                    l’environnement diversifié de Genève et de collaborer avec
                    de nombreux jeunes musiciens talentueux. <br />
                    Après l’obtention de son master, Yuku a choisi de poursuivre
                    ses études à la Haute école de musique de Genève, où elle
                    est actuellement inscrite en master d’accompagnement au
                    piano dans les classes de Nina Uhari et James Alexander.{" "}
                    <br />
                    Elle se produit régulièrement lors de nombreux concerts au
                    Japon et en Suisse, incluant des récitals de piano solo, des
                    accompagnements pour chanteurs et instrumentistes, ainsi que
                    des prestations de musique contemporaine et de clavecin.{" "}
                    <br />
                    En juillet 2025, Yuku intègre{" "}
                    <Link to="/spectacles#opera">
                      <span>la troupe Opéramobil'</span>
                    </Link>{" "}
                    en tant que pianiste.
                  </p>
                </div>
                <div className="pic300 animate-on-scroll">
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
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Mélusine Escande</span> est <span>pianiste</span> et{" "}
                    <span>cheffe de chœur</span>. Après une licence de
                    musicologie à l’Université de Grenoble, elle se forme au
                    sein des conservatoires de Lyon et Chambéry dont elle est
                    diplômée en piano, accompagnement au piano, écriture et
                    direction de chœur. <br />
                    Passionnée de musique vocale, elle intègre l’Institut Royal
                    Supérieur de Musique et de Pédagogie à Namur (Belgique).{" "}
                    <br />
                    Elle y obtient avec grande distinction un master en
                    direction chorale et un master en accompagnement au piano.{" "}
                    <br />
                    Mélusine a travaillé pour les Chœurs d’Enfants et de Jeunes
                    de La Monnaie, elle est à la tête de la chorale Royale Saint
                    Rémy d’Ottignies et du chœur d’enfant les Piccolos de
                    Nivelles. <br />
                    Elle assure depuis la rentrée 2023 les cours de chant choral
                    auprès de la classe à horaires aménagés du Lycée Français de
                    Bruxelles. <br />
                    En juillet 2024, Mélusine intègre{" "}
                    <Link to="/spectacles#opera">
                      <span>la troupe Opéramobil&rsquo;</span>
                    </Link>{" "}
                    en tant que pianiste accompagnatrice.
                  </p>
                </div>
              </div>
              <div id="nathan" className="personne animate-on-scroll">
                <div className="text1 animate-on-scroll">
                  <p className="main-text animate-on-scroll">
                    <span>Nathan Brunet</span> est <span>guitariste</span>,{" "}
                    <span>sound designer</span>, <span>compositeur</span> et{" "}
                    <span>claviériste</span>. <br />
                    Après des études au conservatoire de Nancy, il
                    s&apos;installe à Lyon où il obtient un DUMI de musicien
                    intervenant et où il perfectionne sa pratique de la guitare
                    jazz à l&rsquo;Ecole Nationale de Musique de Villeurbanne
                    auprès de Pierre Hachache. <br />
                    Nathan vient d&apos;être reçu pour intégrer en septembre
                    2024 la nouvelle promotion du prestigieux Centre Didier
                    Lockwood à Paris. <br />
                    Lors de la saison 2023/2024, Nathan est guitariste pour le
                    spectacle{" "}
                    <Link to="/spectacles#bastien">
                      <span>Bastien & Bastienne</span>
                    </Link>
                    .
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

              <div className="text1 animate-on-scroll">
                <p className="main-text animate-on-scroll">
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
            </div>
            <div className="bio5 animate-on-scroll">
              <h3>Trésorière</h3>
            </div>
            <div id="laetitia" className="personne-reverse animate-on-scroll">
              <div className="text1 animate-on-scroll">
                <p className="main-text animate-on-scroll">
                  <span>Laëtitia Chanoz</span> s&apos;investit dans{" "}
                  <Link to="/">
                    <span>la compagnie Poly R</span>
                  </Link>{" "}
                  dès sa création en 2023 en tant que trésorière. <br />
                  Passionnée de littérature, ancienne élève du Lycée du Parc et
                  aujourd&apos;hui élève de l&apos;Ecole Normale Supérieure de
                  Lyon et agrégée de Lettres modernes, Laëtitia a aussi joué de
                  la harpe pendant de nombreuses années et est désormais une
                  fidèle des salles de spectacles et de concerts lyonnaises !{" "}
                  <br />
                  Son travail de recherche porte notamment sur l&rsquo;œuvre
                  autobiographique de Violette Leduc, une autrice du XXe siècle
                  qu&apos;elle espère faire découvrir à ses futurs élèves et au
                  grand public. <br />
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
      </div>
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
