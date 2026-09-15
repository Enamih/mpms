import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import "./Footer.css";

const footerText = {
  sr: {
    tagline: "Pouzdan partner u realizaciji građevinskih projekata.",
    home: "Početna",
    about: "O nama",
    projects: "Projekti",
    contact: "Kontakt",
    linkedin: "LinkedIn profil",
    rights: "Sva prava zadržana.",
    belgrade: "Beograd",
  },
  en: {
    tagline: "A reliable partner in the delivery of construction projects.",
    home: "Home",
    about: "About us",
    projects: "Projects",
    contact: "Contact",
    linkedin: "LinkedIn profile",
    rights: "All rights reserved.",
    belgrade: "Belgrade",
  },
};

function Footer() {
  const { language } = useLanguage();
  const t = footerText[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-company">
          <h2>MPM Construction Plus</h2>
          <p>{t.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">{t.home}</Link>
          <Link to="/o-nama">{t.about}</Link>
          <Link to="/projekti">{t.projects}</Link>
          <Link to="/kontakt">{t.contact}</Link>
        </nav>

        <div className="footer-office">
          <h3>Novi Sad</h3>
          <p>Bulevar Slobodana Jovanovića 15</p>
          <a href="tel:+38169685607">(+381) 069/685-607</a>
          <a href="mailto:office@mpms.rs">office@mpms.rs</a>
        </div>

        <div className="footer-office">
          <h3>{t.belgrade}</h3>
          <p>Dr. Ivana Ribara 128</p>
          <a href="tel:+381113426525">011/342-6525</a>
          <a href="mailto:office@mpms.rs">office@mpms.rs</a>
        </div>

        <div className="footer-linkedin">
          <a
            href="https://linkedin.com"
            className="linkedin-btn"
            target="_blank"
            rel="noreferrer"
          >
            {t.linkedin}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 MPM Construction Plus. {t.rights}
      </div>
    </footer>
  );
}

export default Footer;
