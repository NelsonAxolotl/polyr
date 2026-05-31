import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Pic/logo.webp";
import "./Nav.css";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const activeLink = location.pathname;

  const handleShowLinks = () => {
    setShowLinks((prev) => !prev);
  };

  const handleNavClick = () => {
    setShowLinks(false);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : ""}`} role="navigation">
      <div className="navbar-logo" onClick={() => setShowLinks(false)}>
        <Link to="/">
          <img
            src={logo}
            alt="Logo PolyR"
            width="130"
            height="130"
            loading="eager"
          />
        </Link>
      </div>

      <ul className="navbar-links">
        {[
          { path: "/", label: "Accueil", className: "slideInDown-1" },
          { path: "/lacie", label: "Compagnie", className: "slideInDown-2" },
          {
            path: "/spectacles",
            label: "Spectacles",
            className: "slideInDown-3",
          },
          {
            path: "/billetterie",
            label: "Billetterie",
            className: "slideInDown-4",
          },
          { path: "/contact", label: "Contact", className: "slideInDown-5" },
        ].map(({ path, label, className }) => (
          <li
            key={path}
            className={`navbar-item ${className} ${
              activeLink === path ? "active" : ""
            }`}
          >
            <Link className="navbar-link" to={path} onClick={handleNavClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="navbar-burger"
        onClick={handleShowLinks}
        aria-label="Toggle navigation"
        aria-expanded={showLinks}
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
