import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

const companyProjects = [
  {
    slug: "inkluzija",
    title: {
      sr: "Centar za rani razvoj deteta i inkluziju",
      en: "Center for Early Childhood Development and Inclusion",
    },
    category: { sr: "Javni objekat", en: "Public facility" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/inkluzija/inkluzija-glavna.jpg",
  },
  {
    slug: "expo",
    title: { sr: "EXPO 2027", en: "EXPO 2027" },
    category: { sr: "Kompleksni projekat", en: "Large-scale complex" },
    location: { sr: "Surčin", en: "Surčin" },
    image: "/expo/expo-1-1920x980.jpg",
  },
  {
    slug: "nacionalni-stadion",
    title: {
      sr: "Nacionalni stadion - Severna tribina",
      en: "National Stadium - North Stand",
    },
    category: { sr: "Sportski objekat", en: "Sports facility" },
    location: { sr: "Surčin", en: "Surčin" },
    image: "/nacionalni-stadion/nacionalni-stadion-1-1920x980.jpg",
  },
  {
    slug: "epic-games",
    title: { sr: "Epic Games / 3Lateral kampus", en: "Epic Games / 3Lateral Campus" },
    category: { sr: "Istraživačko-razvojni centar", en: "Research and development center" },
    location: { sr: "Novi Sad", en: "Novi Sad" },
    image: "/epic-games/epic-games-1-1920x980.jpg",
  },
  {
    slug: "planet-residence",
    title: { sr: "Planet Residence", en: "Planet Residence" },
    category: { sr: "Stambeno-poslovni kompleks", en: "Residential and commercial complex" },
    location: { sr: "Niš", en: "Niš" },
    image: "/planet-residence/planet-residence-1-1920x980.jpg",
  },
  {
    slug: "spp-neznanog-junaka",
    title: { sr: "SPP Neznanog junaka", en: "Neznanog Junaka Mixed-Use Building" },
    category: { sr: "Stambeno-poslovni objekat", en: "Mixed-use building" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/spp-neznanog-junaka/img1.jpg",
  },
];

const employeeReferences = [
  {
    slug: "sun-city",
    title: { sr: "Sun City", en: "Sun City" },
    category: { sr: "Stambeno-poslovni kompleks", en: "Residential and commercial complex" },
    location: { sr: "Beograd", en: "Belgrade" },
    image: "/sun-city/sun-city-1-1920x980.jpg",
  },
  {
    slug: "usce",
    title: { sr: "Ušće Kula 2", en: "UŠĆE Tower II" },
    category: { sr: "Poslovni objekat", en: "Office building" },
    location: { sr: "Novi Beograd", en: "New Belgrade" },
    image: "/usce/usce-1.jpg",
  },
  {
    slug: "navigator",
    title: { sr: "Navigator Business Center 1", en: "Navigator Business Center 1" },
    category: { sr: "Poslovni objekat", en: "Office building" },
    location: { sr: "Novi Beograd", en: "New Belgrade" },
    image: "/navigator/navigator-1-1920x980.jpg",
  },
];

const pageText = {
  sr: {
    label: "Naši projekti",
    title: "Reference koje predstavljaju kvalitet našeg rada",
    intro:
      "Pregled projekata na kojima je MPM Construction Plus angažovan kroz izvođenje građevinskih radova, upravljanje projektima, stručnu podršku i realizaciju zahtevnih projektnih celina.",
    featured: "Projekti MPM Construction Plus",
    employeeLabel: "Lične reference zaposlenih",
    employeeTitle: "Iskustvo članova našeg tima",
    employeeIntro:
      "Ovi projekti predstavljaju profesionalno iskustvo i lične reference zaposlenih stečene kroz ranije angažmane i ne predstavljaju projekte koje MPM Construction Plus pripisuje sebi.",
  },
  en: {
    label: "Our projects",
    title: "References that reflect the quality of our work",
    intro:
      "A selection of projects in which MPM Construction Plus has been engaged through construction execution, project management, professional support and the delivery of demanding project scopes.",
    featured: "MPM Construction Plus projects",
    employeeLabel: "Employees' professional references",
    employeeTitle: "Experience of our team members",
    employeeIntro:
      "These projects represent the professional experience and personal references of our employees gained through previous engagements and are not presented as projects delivered by MPM Construction Plus.",
  },
};

function ProjectCard({ project, language, number }) {
  return (
    <Link
      to={`/projekti/${project.slug}`}
      className="project-card"
    >
      <div className="project-image">
        <img src={project.image} alt={project.title[language]} />
        <span>{String(number).padStart(2, "0")}</span>
      </div>

      <div className="project-info">
        <p>{project.category[language]}</p>
        <h3>{project.title[language]}</h3>
        <small>{project.location[language]}</small>
      </div>
    </Link>
  );
}

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
        {companyProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            language={language}
            number={index + 1}
          />
        ))}
      </section>

      <section className="projects-intro projects-reference-intro">
        <span className="section-label">{t.employeeLabel}</span>
       
        <p className="projects-reference-note">{t.employeeIntro}</p>
      </section>

      <section className="projects-grid projects-reference-grid">
        {employeeReferences.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            language={language}
            number={companyProjects.length + index + 1}
          />
        ))}
      </section>
    </main>
  );
}

export default Projects;
