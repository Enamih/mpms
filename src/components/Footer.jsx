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

    headquarters: "Sedište",
    branch: "Ogranak 1",

    belgrade: "Beograd",

    technicalPreparation:
      "Tehnička priprema",

    rights:
      "Sva prava zadržana.",
  },

  en: {
    tagline:
      "A reliable partner in the delivery of construction projects",

    home: "Home",
    about: "About us",
    projects: "Projects",
    contact: "Contact",

    headquarters:
      "Registered office",

    branch:
      "Branch 1",

    belgrade:
      "Belgrade",

    technicalPreparation:
      "Technical preparation",

    rights:
      "All rights reserved.",
  },
};

function Footer() {
  const { language } = useLanguage();
  const t = footerText[language];

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}

        <div className="footer-company">

          <h2>
            MPM Construction Plus
          </h2>

          <p>
            {t.tagline}
          </p>

        </div>


        {/* NAVIGATION */}

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


        {/* SEDIŠTE */}

        <div className="footer-office">

          <h3>
            {t.headquarters}
          </h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bulevar+Slobodana+Jovanovica+15,+Novi+Sad,+Serbia"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            Novi Sad,
            <br />
            Bulevar Slobodana Jovanovića 15
          </a>

        </div>


        {/* OGRANAK 1 */}

        <div className="footer-office footer-branch">

          <h3>
            {t.branch}
          </h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr.+Ivana+Ribara+128a,+Beograd,+Serbia"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            {t.belgrade},
            <br />
            Dr. Ivana Ribara 128a
          </a>


          <a
            href="tel:+381113426525"
            className="footer-phone"
          >
            011/342-6525
          </a>


          <div className="footer-technical">

            <span>
              {t.technicalPreparation}
            </span>

            <a href="tel:+38169685777">
              069 685 777
            </a>

          </div>


          <a
            href="mailto:office@mpms.rs"
            className="footer-email"
          >
            office@mpms.rs
          </a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <span className="footer-copyright">
          © 2026 MPM Construction Plus. {t.rights}
        </span>

        <span className="footer-credit">

          Powered by{" "}

          <a
            href={AUTHOR_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ena Sirar
          </a>

        </span>

      </div>

    </footer>
  );
}

export default Footer;