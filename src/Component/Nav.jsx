import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../Pic/logo.webp";
import "./Nav.css";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleNavClick = (path) => {
    setShowLinks(false);
    setActiveLink(path);
    navigate(path);
  };

  return (
    <nav
      className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
      aria-label="Navigation principale"
    >
      <div className="navbar-logo" onClick={() => handleNavClick("/")}>
        <Link to="/" aria-label="Retour à l'accueil">
          <img src={logo} alt="Logo de PolyR" width="auto" height="120px" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link
            to="/"
            className={`navbar-link ${activeLink === "/" ? "active" : ""}`}
            aria-label="Page d'accueil"
          >
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/lacie"
            className={`navbar-link ${activeLink === "/lacie" ? "active" : ""}`}
            aria-label="Informations sur la compagnie"
          >
            La Compagnie
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/spectacles"
            className={`navbar-link ${
              activeLink === "/spectacles" ? "active" : ""
            }`}
            aria-label="Liste des spectacles"
          >
            Spectacles
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/contact"
            className={`navbar-link ${
              activeLink === "/contact" ? "active" : ""
            }`}
            aria-label="Contactez-nous"
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="navbar-burger"
        onClick={handleShowLinks}
        aria-label="Menu"
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
