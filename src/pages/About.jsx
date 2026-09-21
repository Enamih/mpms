import { useEffect, useRef, useState } from "react";
import useLanguage from "../hooks/useLanguage";
import "./About.css";

const ABOUT_GALLERY = [
  {
    src: "/slika1.jpg",
    alt: "MPM Construction Plus projekat",
  },
  {
    src: "/slika2.jpeg",
    alt: "MPM Construction Plus enterijer",
  },
];

const content = {
  sr: {
    heroLabel: "O NAMA",
    heroTitle: "Gradimo projekte koji traju",
    heroText:
      "Stručnost, odgovornost i posvećenost kvalitetu predstavljaju osnovu svakog projekta koji realizujemo.",

    valuesLabel: "Naše vrednosti",
    valuesTitle: "Principi na kojima gradimo svaki projekat",

    whoLabel: "Ko smo mi",
    whoTitle:
      "Pouzdan partner u realizaciji građevinskih projekata",

    paragraphs: [
      "Kompanija se bavi izvođenjem građevinskih radova, upravljanjem projektima i realizacijom kompleksnih građevinskih poduhvata. Iskusan stručni tim garantuje kvalitet, efikasnu organizaciju i pouzdanu realizaciju projekata u ugovorenim rokovima.",

    ],

    values: [
      [
        "Kvalitet",
        "Posebnu pažnju posvećujemo kontroli kvaliteta u svim fazama realizacije projekta.",
      ],
      [
        "Pouzdanost",
        "Poštovanje rokova i transparentna komunikacija predstavljaju osnovu uspešne saradnje sa investitorima.",
      ],
      [
        "Profesionalnost",
        "Svakom projektu pristupamo odgovorno, sa jasnom organizacijom i stručnim nadzorom.",
      ],
    ],

    approachLabel: "Naš pristup",
    approachTitle:
      "Od ideje do uspešno realizovanog projekta",

    approachText:
      "Svaki projekat posmatramo kao povezan proces u kojem planiranje, izvođenje, kontrola i završna realizacija moraju funkcionisati kao jedna celina.",

    approach: [
      [
        "Planiranje",
        "Detaljna analiza projekta i definisanje svih faza realizacije.",
      ],
      [
        "Izvođenje",
        "Efikasna organizacija gradilišta i koordinacija svih učesnika.",
      ],
      [
        "Kontrola kvaliteta",
        "Kontinuiran nadzor i primena najviših standarda kvaliteta.",
      ],
      [
        "Realizacija",
        "Završetak projekta u skladu sa ugovorenim rokovima i zahtevima investitora.",
      ],
    ],
  },

  en: {
    heroLabel: "ABOUT US",
    heroTitle: "We build projects that last",
    heroText:
      "Expertise, responsibility and a strong commitment to quality are the foundation of every project we deliver.",

    valuesLabel: "Our values",
    valuesTitle:
      "The principles behind every project we deliver",

    whoLabel: "Who we are",
    whoTitle:
      "A reliable partner in the delivery of construction projects",

    paragraphs: [
      "The company specializes in construction works, project management and the delivery of complex construction projects. An experienced professional team ensures quality, efficient organization and reliable project delivery within agreed deadlines.",

    ],

    values: [
      [
        "Quality",
        "We pay particular attention to quality control throughout every stage of project delivery.",
      ],
      [
        "Reliability",
        "Meeting deadlines and maintaining transparent communication are the basis of successful cooperation with investors.",
      ],
      [
        "Professionalism",
        "We approach every project responsibly, with clear organization and professional supervision.",
      ],
    ],

    approachLabel: "Our approach",
    approachTitle:
      "From the first idea to successful project delivery",

    approachText:
      "We see every project as one connected process in which planning, execution, quality control and final delivery work together.",

    approach: [
      [
        "Planning",
        "Detailed project analysis and clear definition of every delivery stage.",
      ],
      [
        "Execution",
        "Efficient site organization and coordination of all project participants.",
      ],
      [
        "Quality control",
        "Continuous supervision and application of high quality standards.",
      ],
      [
        "Delivery",
        "Completion in line with agreed deadlines and investor requirements.",
      ],
    ],
  },
};

function About() {
  const { language } = useLanguage();
  const t = content[language];

  const [activeImage, setActiveImage] = useState(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /* =======================================================
     SCROLL ANIMATIONS
  ======================================================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll(".about-scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "about-reveal-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     LIGHTBOX
  ======================================================= */

  const closeLightbox = () => {
    setActiveImage(null);
  };

  const showPreviousImage = () => {
    setActiveImage((current) => {
      if (current === null) return null;

      return (
        current -
        1 +
        ABOUT_GALLERY.length
      ) % ABOUT_GALLERY.length;
    });
  };

  const showNextImage = () => {
    setActiveImage((current) => {
      if (current === null) return null;

      return (
        current +
        1
      ) % ABOUT_GALLERY.length;
    });
  };

  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    if (activeImage === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeImage]);

  /* =======================================================
     MOBILE SWIPE
  ======================================================= */

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.targetTouches[0].clientX;

    touchEndX.current = null;
  };

  const handleTouchMove = (event) => {
    touchEndX.current =
      event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current -
      touchEndX.current;

    const minimumSwipeDistance = 50;

    if (distance > minimumSwipeDistance) {
      showNextImage();
    }

    if (distance < -minimumSwipeDistance) {
      showPreviousImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <main
  className={`about-page ${
    activeImage !== null ? "lightbox-open" : ""
  }`}
>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-modern-hero">

        <div className="about-modern-hero-overlay" />

        <div className="about-modern-hero-content">

          <span className="about-modern-label">
            {t.heroLabel}
          </span>

          <h1>
            {t.heroTitle}
          </h1>

          <p>
            {t.heroText}
          </p>

        </div>

      </section>


      {/* =====================================================
          VREDNOSTI
      ===================================================== */}

      <section
        className="
          about-modern-values
          about-scroll-reveal
        "
      >

        <div className="about-modern-heading">

          <span className="about-modern-label">
            {t.valuesLabel}
          </span>

          <h2>
            {t.valuesTitle}
          </h2>

        </div>


        <div className="about-modern-values-grid">

          {t.values.map(
            ([title, text], index) => (
              <article
                className="about-modern-card"
                key={title}
                style={{
                  "--about-delay":
                    `${index * 140}ms`,
                }}
              >

                <div className="about-modern-card-content">

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                </div>

              </article>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          KO SMO MI
      ===================================================== */}

      <section
        className="
          about-modern-company
          about-scroll-reveal
        "
      >

        <div className="about-modern-collage">

          {/* GLAVNA SLIKA */}

          <button
            type="button"
            className="
              about-modern-image
              about-modern-image-main
              about-gallery-trigger
            "
            onClick={() => setActiveImage(0)}
            aria-label="Otvori prvu fotografiju"
          >

            <img
              src={ABOUT_GALLERY[0].src}
              alt={ABOUT_GALLERY[0].alt}
            />

          </button>


          {/* MANJA SLIKA */}

          <button
            type="button"
            className="
              about-modern-image
              about-modern-image-small
              about-gallery-trigger
            "
            onClick={() => setActiveImage(1)}
            aria-label="Otvori drugu fotografiju"
          >

            <img
              src={ABOUT_GALLERY[1].src}
              alt={ABOUT_GALLERY[1].alt}
            />

          </button>

        </div>


        <div className="about-modern-company-content">

          <span className="about-modern-label">
            {t.whoLabel}
          </span>

          <h2>
            {t.whoTitle}
          </h2>

          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}

        </div>

      </section>


      {/* =====================================================
          NAŠ PRISTUP
      ===================================================== */}

      <section
        className="
          about-modern-approach
          about-scroll-reveal
        "
      >

        <div className="about-modern-approach-heading">

          <span className="about-modern-label">
            {t.approachLabel}
          </span>


          <div className="about-modern-approach-title-row">

            <h2>
              {t.approachTitle}
            </h2>

            <p>
              {t.approachText}
            </p>

          </div>

        </div>


        <div className="about-modern-approach-grid">

          {t.approach.map(
            ([title, text], index) => (
              <article
                className="about-modern-step"
                key={title}
                style={{
                  "--about-delay":
                    `${index * 130}ms`,
                }}
              >

                <div className="about-modern-step-content">

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                </div>

              </article>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX GALERIJA
      ===================================================== */}

      {activeImage !== null && (

        <div
          className="about-gallery-lightbox"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Galerija fotografija"
        >

          {/* LEFT */}

          <button
            type="button"
            className="
              about-gallery-arrow
              about-gallery-arrow-left
            "
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Prethodna fotografija"
          >
            ‹
          </button>


          {/* IMAGE */}

          <div
            className="about-gallery-image-wrapper"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="gallery-image-close"
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              aria-label="Zatvori galeriju"
            >
              ×
            </button>

            <img
              key={ABOUT_GALLERY[activeImage].src}
              src={ABOUT_GALLERY[activeImage].src}
              alt={ABOUT_GALLERY[activeImage].alt}
              className="about-gallery-full-image"
            />


            <div className="about-gallery-counter">
              {activeImage + 1}

              <span>/</span>

              {ABOUT_GALLERY.length}
            </div>

          </div>


          {/* RIGHT */}

          <button
            type="button"
            className="
              about-gallery-arrow
              about-gallery-arrow-right
            "
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Sledeća fotografija"
          >
            ›
          </button>

        </div>

      )}

    </main>
  );
}

export default About;