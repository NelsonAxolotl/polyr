import { useState, useEffect } from "react";
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
      role="navigation"
    >
      <div
        className="navbar-logo"
        onClick={() => handleNavClick("/")}
        aria-label="Retour à l'accueil"
      >
        <Link to="/">
          <img
            src={logo}
            alt="Logo PolyR"
            width="150px"
            height="150px"
            loading="eager"
          />
        </Link>
      </div>

      {/* Liens de navigation */}
      <ul className="navbar-links">
        {[
          { path: "/", label: "Accueil", className: "slide-in-down-1" },
          {
            path: "/lacie",
            label: "La Compagnie",
            className: "slide-in-down-2",
          },
          {
            path: "/spectacles",
            label: "Spectacles",
            className: "slide-in-down-3",
          },

          { path: "/contact", label: "Contact", className: "slide-in-down-4" },
        ].map(({ path, label, className }, index) => (
          <li
            key={index}
            className={`navbar-item ${className} ${
              activeLink === path ? "active" : ""
            }`}
          >
            <Link
              className="navbar-link"
              to={path}
              onClick={() => handleNavClick(path)}
              aria-label={`Navigate to ${label}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Bouton burger pour le menu mobile */}
      <button
        className="navbar-burger"
        onClick={handleShowLinks}
        aria-label="Toggle navigation"
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
