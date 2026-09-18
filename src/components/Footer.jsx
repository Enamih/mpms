import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import "./Footer.css";

const AUTHOR_LINKEDIN =
  "https://www.linkedin.com/in/ena-mihajlovic/";

const footerText = {
  sr: {
    tagline:
      "Pouzdan partner u realizaciji građevinskih projekata",
    home: "Početna",
    about: "O nama",
    projects: "Projekti",
    contact: "Kontakt",
    linkedin: "LinkedIn profil",
    rights: "Sva prava zadržana.",
    belgrade: "Beograd",
  },

  en: {
    tagline:
      "A reliable partner in the delivery of construction projects",
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


        <nav
          className="footer-nav"
          aria-label="Footer navigation"
        >
          <Link to="/">
            {t.home}
          </Link>

          <Link to="/o-nama">
            {t.about}
          </Link>

          <Link to="/projekti">
            {t.projects}
          </Link>

          <Link to="/kontakt">
            {t.contact}
          </Link>
        </nav>


        {/* NOVI SAD */}

        <div className="footer-office">

          <h3>Novi Sad</h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bulevar+Slobodana+Jovanovica+15,+Novi+Sad,+Serbia"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            Bulevar Slobodana Jovanovića 15
          </a>

          <a href="tel:+38169685607">
            (+381) 069/685-607
          </a>

          <a href="mailto:office@mpms.rs">
            office@mpms.rs
          </a>

        </div>


        {/* BEOGRAD / BELGRADE */}

        <div className="footer-office">

          <h3>{t.belgrade}</h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr.+Ivana+Ribara+128a,+Beograd,+Serbia"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            Dr. Ivana Ribara 128a
          </a>

          <a href="tel:+381113426525">
            011/342-6525
          </a>

          <a href="mailto:office@mpms.rs">
            office@mpms.rs
          </a>

        </div>


        {/* COMPANY LINKEDIN */}

        <div className="footer-linkedin">

          <a
            href="https://linkedin.com"
            className="linkedin-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.linkedin}
          </a>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
<div className="footer-bottom">

  <span>
    © 2026 MPM Construction Plus. {t.rights}
  </span>

  <span className="footer-credit">
    Powered by{" "}

    <a
      href="https://www.linkedin.com/in/ena-mihajlovic/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ena Mihajlovic
    </a>
  </span>

</div>

    </footer>
  );
}

export default Footer;