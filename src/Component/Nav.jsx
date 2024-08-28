import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../Pic/logo.jpg";
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

  const pageTitle = () => {
    switch (activeLink) {
      case "/":
        return "Accueil - Compagnie Poly R";
      case "/lacie":
        return "La Compagnie - Compagnie Poly R";
      case "/spectacles":
        return "Spectacles - Compagnie Poly R";
      case "/contact":
        return "Contact - Compagnie Poly R";
      default:
        return "Compagnie Poly R";
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle()}</title>
        <meta name="description" content={`Page ${pageTitle()}`} />
      </Helmet>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="navbar-logo" onClick={() => handleNavClick("/accueil")}>
          <Link to="/">
            <img src={logo} alt="logo PolyR" />
          </Link>
        </div>
        <ul className="navbar-links">
          <Link to="/accueil">
            <li
              className={`navbar-item slideInDown-1 ${
                activeLink === "/" ? "active" : ""
              }`}
            >
              <div className="navbar-link" onClick={() => handleNavClick("/")}>
                Accueil
              </div>
            </li>
          </Link>
          <Link to="/lacie">
            <li
              className={`navbar-item slideInDown-2 ${
                activeLink === "/lacie" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/lacie")}
              >
                La Compagnie
              </div>
            </li>
          </Link>
          <Link to="/spectacles">
            <li
              className={`navbar-item slideInDown-3 ${
                activeLink === "/spectacles" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/spectacles")}
              >
                Spectacles
              </div>
            </li>
          </Link>

          <Link to="/contact">
            <li
              className={`navbar-item slideInDown-5 ${
                activeLink === "/contact" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/contact")}
              >
                Contact
              </div>
            </li>
          </Link>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
