import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import "./Header.css";

const navLabels = {
  sr: {
    home: "Početna",
    about: "O nama",
    projects: "Projekti",
    contact: "Kontakt",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },
  en: {
    home: "Home",
    about: "About us",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

function Header() {
  const { language, setLanguage } = useLanguage();
  const labels = navLabels[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isMenuOpen ? "header-menu-open" : ""}`}>
      <Link to="/" className="logo" aria-label="MPM Construction Plus" onClick={closeMenu}>
        <img src="/logo.jpg" alt="MPM Construction Plus" />
      </Link>

      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
          {labels.home}
        </NavLink>
        <NavLink to="/o-nama" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
          {labels.about}
        </NavLink>
        <NavLink to="/projekti" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
          {labels.projects}
        </NavLink>
        <NavLink to="/kontakt" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
          {labels.contact}
        </NavLink>
      </nav>

      <div className="header-actions">
        <div className="language-switch" aria-label="Language selector">
          <button
            type="button"
            className={language === "sr" ? "active" : ""}
            onClick={() => setLanguage("sr")}
            aria-pressed={language === "sr"}
          >
            SR
          </button>
          <span aria-hidden="true"></span>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "menu-toggle-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
