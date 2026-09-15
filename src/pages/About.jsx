import useLanguage from "../hooks/useLanguage";

const content = {
  sr: {
    heroLabel: "O NAMA",
    heroTitle: "Gradimo projekte koji traju",
    heroText:
      "Stručnost, odgovornost i posvećenost kvalitetu predstavljaju osnovu svakog projekta koji realizujemo.",
    whoLabel: "Ko smo mi",
    whoTitle: "Pouzdan partner u realizaciji građevinskih projekata.",
    paragraphs: [
      "MPM Construction Plus je kompanija specijalizovana za izvođenje građevinskih radova, upravljanje projektima i realizaciju kompleksnih građevinskih poduhvata. Kroz dugogodišnje iskustvo i profesionalan pristup, kompanija je učestvovala na projektima različitih namena, od stambenih i poslovnih objekata do velikih infrastrukturnih celina.",
      "Naš tim čine stručnjaci različitih profila koji zajedničkim radom obezbeđuju visok kvalitet izvođenja, efikasnu organizaciju i poštovanje ugovorenih rokova.",
    ],
    values: [
      ["Kvalitet", "Posebnu pažnju posvećujemo kontroli kvaliteta u svim fazama realizacije projekta."],
      ["Pouzdanost", "Poštovanje rokova i transparentna komunikacija predstavljaju osnovu uspešne saradnje sa investitorima."],
      ["Profesionalnost", "Svakom projektu pristupamo odgovorno, sa jasnom organizacijom i stručnim nadzorom."],
    ],
    approachLabel: "Naš pristup",
    approachTitle: "Od ideje do uspešno realizovanog projekta",
    approach: [
      ["Planiranje", "Detaljna analiza projekta i definisanje svih faza realizacije."],
      ["Izvođenje", "Efikasna organizacija gradilišta i koordinacija svih učesnika."],
      ["Kontrola kvaliteta", "Kontinuiran nadzor i primena najviših standarda kvaliteta."],
      ["Realizacija", "Završetak projekta u skladu sa ugovorenim rokovima i zahtevima investitora."],
    ],
  },
  en: {
    heroLabel: "ABOUT US",
    heroTitle: "We build projects that last",
    heroText:
      "Expertise, responsibility and a strong commitment to quality are the foundation of every project we deliver.",
    whoLabel: "Who we are",
    whoTitle: "A reliable partner in the delivery of construction projects.",
    paragraphs: [
      "MPM Construction Plus specializes in construction works, project management and the delivery of complex building projects. Through years of experience and a professional approach, the company has participated in projects ranging from residential and office buildings to major infrastructure developments.",
      "Our team brings together professionals from different disciplines whose coordinated work ensures high execution quality, efficient organization and respect for agreed deadlines.",
    ],
    values: [
      ["Quality", "We pay particular attention to quality control throughout every stage of project delivery."],
      ["Reliability", "Meeting deadlines and maintaining transparent communication are the basis of successful cooperation with investors."],
      ["Professionalism", "We approach every project responsibly, with clear organization and professional supervision."],
    ],
    approachLabel: "Our approach",
    approachTitle: "From the first idea to successful project delivery",
    approach: [
      ["Planning", "Detailed project analysis and clear definition of every delivery stage."],
      ["Execution", "Efficient site organization and coordination of all project participants."],
      ["Quality control", "Continuous supervision and application of high quality standards."],
      ["Delivery", "Completion in line with agreed deadlines and investor requirements."],
    ],
  },
};

function About() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <span>{t.heroLabel}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
        </div>
      </section>

      <section className="about-company">
        <div className="about-company-left">
          <span className="section-label">{t.whoLabel}</span>
          <h2>{t.whoTitle}</h2>
        </div>

        <div className="about-company-right">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="values-section">
        {t.values.map(([title, text]) => (
          <div className="value-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="approach-section">
        <span className="section-label">{t.approachLabel}</span>
        <h2>{t.approachTitle}</h2>

        <div className="approach-grid">
          {t.approach.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
