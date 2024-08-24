import "./Nav.css";
import logo from "../Pic/logo.jpg";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const handleNavClick = (path) => {
    setShowLinks(false);
    setActiveLink(path); // Fermer le menu burger
    navigate(path); // Utilisation de navigate pour la navigation
  };
  return (
    <>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo PolyR" />
          </Link>
        </div>
        <ul className="navbar-links">
          <Link to="/">
            <li
              className={`navbar-item slideInDown-1 ${
                activeLink === "/accueil" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/accueil")}
              >
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
