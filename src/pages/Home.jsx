import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import { useEffect, useRef } from "react";

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
    companyLabel: "O kompaniji",
    companyTitle: "Pouzdan partner za kompleksne građevinske projekte.",
    companyText:
      "MPM Construction Plus je kompanija usmerena na realizaciju građevinskih projekata različitih namena, od projektovanja do završne izvedbe. Kroz stručan tim, jasnu organizaciju i odgovoran pristup, kompanija pruža podršku investitorima u svim fazama razvoja projekta.",
    more: "Saznajte više →",
    services: [
      ["Projektovanje", "Razrada tehničkih rešenja od idejnog koncepta do izvedbene dokumentacije."],
      ["Visokogradnja", "Izvođenje radova na stambenim, poslovnim i komercijalnim objektima."],
      ["Rekonstrukcija", "Adaptacija i unapređenje postojećih objekata uz kontrolu kvaliteta."],
    ],
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
    companyLabel: "About the company",
    companyTitle: "A reliable partner for complex construction projects.",
    companyText:
      "MPM Construction Plus delivers construction projects of different scales and purposes, from design to final execution. Through an experienced team, clear organization and a responsible approach, the company supports investors throughout every stage of project development.",
    more: "Learn more →",
    services: [
      ["Design", "Development of technical solutions from the initial concept to detailed construction documentation."],
      ["Building construction", "Execution of works on residential, office and commercial buildings."],
      ["Reconstruction", "Adaptation and improvement of existing buildings with continuous quality control."],
    ],
  },
};

function Home() {
  const { language } = useLanguage();
  const heroVideoRef = useRef(null);

useEffect(() => {
  const video = heroVideoRef.current;

  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;

  const playVideo = async () => {
    try {
      await video.play();
    } catch (error) {
      console.log("Autoplay nije pokrenut:", error);
    }
  };

  playVideo();
}, []);
  const t = content[language];

  return (
    <main>
      <section id="pocetna" className="hero">
        <video
  ref={heroVideoRef}
  className="hero-video"
  autoPlay
  muted
  playsInline
  loop
  preload="auto"
  poster="/home-hero.jpg"
>
  <source src="/hero-vid.mp4" type="video/mp4" />
</video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-subtitle">{t.subtitle}</p>
          <h1>{t.title}</h1>
          <p className="hero-text">{t.heroText}</p>

          <div className="hero-buttons">
            <Link to="/projekti" className="btn-primary">
              {t.projectsButton}
            </Link>
            <Link to="/kontakt" className="btn-secondary">
              {t.contactButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        {t.stats.map(([value, label]) => (
          <div className="stat-card" key={label}>
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        ))}
      </section>

      <section className="intro-section">
        <div className="intro-left">
          <span className="section-label">{t.companyLabel}</span>
          <h2>{t.companyTitle}</h2>
        </div>

        <div className="intro-right">
          <p>{t.companyText}</p>
          <Link to="/o-nama" className="text-link">
            {t.more}
          </Link>
        </div>
      </section>

      <section className="services-preview">
        {t.services.map(([title, text]) => (
          <div className="service-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
