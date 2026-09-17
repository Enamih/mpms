import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

import "./HomeShowcase.css";

const content = {
  sr: {
    subtitle: "MPM Construction Plus",

    title: "Gradimo pouzdana rešenja za savremene projekte",

    heroText:
      "Profesionalno izvođenje građevinskih radova, organizacija gradilišta i realizacija projekata uz kvalitet, preciznost i poštovanje dogovorenih rokova.",

    projectsButton: "Pogledajte projekte",
    contactButton: "Kontaktirajte nas",

    stats: [
      ["20+", "Godina iskustva"],
      ["150+", "Realizovanih projekata"],
      ["50+", "Poslovnih partnera"],
      ["100%", "Posvećenost kvalitetu"],
    ],

    servicesLabel: "Naše usluge",

    servicesTitle:
      "Pouzdana realizacija u svakoj fazi projekta.",

    servicesText:
      "Od prvih tehničkih rešenja do završnih građevinskih radova, svaki projekat realizujemo uz pažljivo planiranje, koordinaciju i kontrolu kvaliteta.",

    services: [
      [
        "01",
        "Projektovanje",
        "Razrada tehničkih rešenja od idejnog koncepta do izvedbene dokumentacije.",
      ],
      [
        "02",
        "Visokogradnja",
        "Izvođenje radova na stambenim, poslovnim i komercijalnim objektima.",
      ],
      [
        "03",
        "Rekonstrukcija",
        "Adaptacija i unapređenje postojećih objekata uz kontrolu kvaliteta.",
      ],
    ],

    companyLabel: "O kompaniji",

    companyTitle:
      "Pouzdan partner za kompleksne građevinske projekte.",

    companyText:
      "MPM Construction Plus je kompanija usmerena na realizaciju građevinskih projekata različitih namena, od projektovanja do završne izvedbe. Kroz stručan tim, jasnu organizaciju i odgovoran pristup, kompanija pruža podršku investitorima u svim fazama razvoja projekta.",

    more: "Saznajte više",
  },

  en: {
    subtitle: "MPM Construction Plus",

    title: "We build reliable solutions for modern projects",

    heroText:
      "Professional construction execution, site organization and project delivery with a strong focus on quality, precision and agreed deadlines.",

    projectsButton: "View projects",
    contactButton: "Contact us",

    stats: [
      ["20+", "Years of experience"],
      ["150+", "Completed projects"],
      ["50+", "Business partners"],
      ["100%", "Commitment to quality"],
    ],

    servicesLabel: "Our services",

    servicesTitle:
      "Reliable execution at every stage of the project.",

    servicesText:
      "From the first technical solutions to final construction works, every project is delivered through careful planning, coordination and quality control.",

    services: [
      [
        "01",
        "Design",
        "Development of technical solutions from the initial concept to detailed construction documentation.",
      ],
      [
        "02",
        "Building construction",
        "Execution of works on residential, office and commercial buildings.",
      ],
      [
        "03",
        "Reconstruction",
        "Adaptation and improvement of existing buildings with continuous quality control.",
      ],
    ],

    companyLabel: "About the company",

    companyTitle:
      "A reliable partner for complex construction projects.",

    companyText:
      "MPM Construction Plus delivers construction projects of different scales and purposes, from design to final execution. Through an experienced team, clear organization and a responsible approach, the company supports investors throughout every stage of project development.",

    more: "Learn more",
  },
};

function Home() {
  const { language } = useLanguage();
  const t = content[language];

  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Poster ostaje prikazan ako browser blokira autoplay.
      }
    };

    playVideo();
  }, []);

  return (
    <main className="home-page">
      {/* HERO */}

      <section id="pocetna" className="hero">
        <video
          ref={heroVideoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/home-hero.jpg"
        >
          <source src="/hero-vid.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-subtitle">
            {t.subtitle}
          </p>

          <h1>{t.title}</h1>

          <p className="hero-text">
            {t.heroText}
          </p>

          <div className="hero-buttons">
            <Link
              to="/projekti"
              className="btn-primary"
            >
              {t.projectsButton}
            </Link>

            <Link
              to="/kontakt"
              className="btn-secondary"
            >
              {t.contactButton}
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTIKA */}

      <section className="stats-section">
        {t.stats.map(([value, label]) => (
          <div
            className="stat-card"
            key={label}
          >
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        ))}
      </section>

      {/* SHOWCASE */}

      <section className="home-showcase">

        {/* SLIKE + USLUGE */}

        <div className="home-showcase-grid">

          {/* SLIKE */}

          <div className="home-collage">

            <div className="collage-image collage-image-main">
              <img
                src="/building-one.jpg"
                alt="MPM Construction Plus projekat"
              />
            </div>

            <div className="collage-image collage-image-top">
              <img
                src="/usce/usce-1.jpg"
                alt="UŠĆE Tower II"
              />
            </div>

            <div className="collage-image collage-image-bottom">
              <img
                src="/epic-games/epic-games-1-1920x980.jpg"
                alt="Epic Games kampus"
              />
            </div>

          </div>

          {/* KARTICE */}

          <div className="home-services-list">

            {t.services.map(
              ([number, title, text]) => (
                <article
                  className="home-service-card"
                  key={title}
                >
                  <span className="home-service-number">
                    {number}
                  </span>

                  <div className="home-service-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              )
            )}

          </div>
        </div>

        {/* EDITORIAL BLOK */}

        <div className="home-story-panel">

          {/* NAŠE USLUGE */}

          <div className="home-story-block home-story-services">

            <span className="home-story-label">
              {t.servicesLabel}
            </span>

            <h2>
              {t.servicesTitle}
            </h2>

            <p>
              {t.servicesText}
            </p>

          </div>

          <div className="home-story-divider"></div>

          {/* O KOMPANIJI */}

          <div className="home-story-block home-story-company">

            <span className="home-story-label">
              {t.companyLabel}
            </span>

            <h3>
              {t.companyTitle}
            </h3>

            <p>
              {t.companyText}
            </p>

            <Link
              to="/o-nama"
              className="home-story-link"
            >
              <span>{t.more}</span>
              <span className="home-story-link-line"></span>
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Home;