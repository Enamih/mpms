import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

const projects = [
  {
    slug: "usce",
    title: { sr: "Ušće Kula 2 Beograd", en: "Ušće Tower II Belgrade" },
    category: { sr: "Poslovni objekat", en: "Office building" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/usce/usce-1.jpg",
  },
  {
    slug: "inkluzija",
    title: {
      sr: "Centar za rani razvoj deteta i inkluziju",
      en: "Center for Early Childhood Development and Inclusion",
    },
    category: { sr: "Javni objekat", en: "Public facility" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/inkluzija/inkluzija-1-1920x980.jpg",
  },
  {
    slug: "expo",
    title: { sr: "Expo Beograd", en: "EXPO Belgrade" },
    category: { sr: "Kompleksni projekat", en: "Large-scale complex" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/expo/expo-1-1920x980.jpg",
  },
  {
    slug: "nacionalni-stadion",
    title: {
      sr: "Nacionalni stadion - Severna tribina",
      en: "National Stadium - North Stand",
    },
    category: { sr: "Sportski objekat", en: "Sports facility" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/nacionalni-stadion/nacionalni-stadion-1-1920x980.jpg",
  },
  {
    slug: "sun-city",
    title: { sr: "Sun City", en: "Sun City" },
    category: { sr: "Stambeni objekat", en: "Residential complex" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/sun-city/sun-city-1-1920x980.jpg",
  },
  {
    slug: "epic-games",
    title: { sr: "Epic Games", en: "Epic Games" },
    category: { sr: "Poslovni prostor", en: "Business / R&D campus" },
    location: { sr: "Novi Sad", en: "Novi Sad" },
    image: "/epic-games/epic-games-1-1920x980.jpg",
  },
  {
    slug: "navigator",
    title: { sr: "Navigator 1.", en: "Navigator Business Center 1" },
    category: { sr: "Poslovni objekat", en: "Office building" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/navigator/navigator-1-1920x980.jpg",
  },
  {
    slug: "planet-residence",
    title: { sr: "Planet Residence", en: "Planet Residence" },
    category: { sr: "Stambeni objekat", en: "Residential complex" },
    location: { sr: "Niš", en: "Niš" },
    image: "/planet-residence/planet-residence-1-1920x980.jpg",
  },
  {
    slug: "spp-neznanog-junaka",
    title: { sr: "SPP Neznanog junaka", en: "Neznanog Junaka Mixed-Use Building" },
    category: { sr: "Stambeno-poslovni objekat", en: "Mixed-use building" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/spp-neznanog-junaka/spp-neznanog-junaka-1-1920x980.jpg",
  },
];

const pageText = {
  sr: {
    label: "Naši projekti",
    title: "Reference koje predstavljaju kvalitet našeg rada",
    intro:
      "Pregled odabranih projekata na kojima je kompanija učestvovala kroz izvođenje građevinskih radova, organizaciju gradilišta i realizaciju zahtevnih projektnih celina.",
    featured: "Izdvojeni projekti",
  },
  en: {
    label: "Our projects",
    title: "References that reflect the quality of our work",
    intro:
      "A selection of projects in which the company participated through construction execution, site organization and the delivery of demanding project scopes.",
    featured: "Selected projects",
  },
};

function Projects() {
  const { language } = useLanguage();
  const t = pageText[language];

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <span className="section-label">{t.label}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>

      <section className="projects-intro">
        <h2>{t.featured}</h2>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <Link
            to={`/projekti/${project.slug}`}
            className="project-card"
            key={project.slug}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title[language]} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="project-info">
              <p>{project.category[language]}</p>
              <h3>{project.title[language]}</h3>
              <small>{project.location[language]}</small>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Projects;
