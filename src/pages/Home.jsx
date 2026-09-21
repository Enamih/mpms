import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import useLanguage from "../hooks/useLanguage";

import "./HomeShowcase.css";


/* =========================================================
   HOME GALLERY
========================================================= */

const HOME_GALLERY = [
  {
    src: "/building-one.jpg",
    alt: "MPM Construction Plus projekat",
  },
  {
    src: "/usce/usce-1.jpg",
    alt: "MPM Construction Plus projekat",
  },
  {
    src: "/epic-games/epic-games-1-1920x980.jpg",
    alt: "MPM Construction Plus projekat",
  },
];


/* =========================================================
   CONTENT
========================================================= */

const content = {
  sr: {
    heroLabel: "MPM CONSTRUCTION PLUS",

    heroTitle:
      "Gradimo pouzdana rešenja za savremene projekte",

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

    services: [
      [
        "Projektovanje",
        "Razrada tehničkih rešenja od idejnog koncepta do izvedbene dokumentacije.",
      ],
      [
        "Visokogradnja",
        "Izvođenje radova na stambenim, poslovnim i komercijalnim objektima.",
      ],
      [
        "Rekonstrukcija",
        "Adaptacija i unapređenje postojećih objekata uz kontrolu kvaliteta.",
      ],
    ],

    servicesLabel: "Naše usluge",

    servicesTitle:
      "Pouzdana realizacija u svakoj fazi projekta.",

    servicesText:
      "Od prvih tehničkih rešenja do završnih građevinskih radova, svaki projekat realizujemo uz pažljivo planiranje, koordinaciju i kontrolu kvaliteta.",

    companyLabel: "O kompaniji",

    companyTitle:
      "Pouzdan partner za kompleksne građevinske projekte.",

    companyText:
      "MPM Construction Plus je kompanija usmerena na realizaciju građevinskih projekata različitih namena, od projektovanja do završne izvedbe. Kroz stručan tim, jasnu organizaciju i odgovoran pristup, kompanija pruža podršku investitorima u svim fazama razvoja projekta.",

    moreAbout: "Saznajte više o nama",
  },

  en: {
    heroLabel: "MPM CONSTRUCTION PLUS",

    heroTitle:
      "We build reliable solutions for modern projects",

    heroText:
      "Professional execution of construction works, site organization and project delivery with a strong focus on quality, precision and agreed deadlines.",

    projectsButton: "View projects",
    contactButton: "Contact us",

    stats: [
      ["20+", "Years of experience"],
      ["150+", "Completed projects"],
      ["50+", "Business partners"],
      ["100%", "Commitment to quality"],
    ],

    services: [
      [
        "Design",
        "Development of technical solutions from initial concept to execution documentation.",
      ],
      [
        "Building construction",
        "Execution of works on residential, commercial and business facilities.",
      ],
      [
        "Reconstruction",
        "Adaptation and improvement of existing facilities with continuous quality control.",
      ],
    ],

    servicesLabel: "Our services",

    servicesTitle:
      "Reliable delivery at every stage of the project.",

    servicesText:
      "From the first technical solutions to final construction works, every project is delivered through careful planning, coordination and quality control.",

    companyLabel: "About the company",

    companyTitle:
      "A reliable partner for complex construction projects.",

    companyText:
      "MPM Construction Plus focuses on the delivery of construction projects of various purposes, from design to final execution. Through an expert team, clear organization and a responsible approach, the company supports investors throughout every stage of project development.",

    moreAbout: "Learn more about us",
  },
};


/* =========================================================
   HOME
========================================================= */

function Home() {
  const { language } = useLanguage();

  const t = content[language];

  const videoRef = useRef(null);

  const [activeImage, setActiveImage] =
    useState(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);


  /* =======================================================
     HERO VIDEO
  ======================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;

    const playVideo = () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          /* poster ostaje kao fallback */
        });
      }
    };

    playVideo();

    document.addEventListener(
      "visibilitychange",
      playVideo
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        playVideo
      );
    };
  }, []);


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const servicesList =
      document.querySelector(
        ".home-services-list"
      );

    const collage =
      document.querySelector(
        ".home-collage"
      );

    const serviceCards =
      document.querySelectorAll(
        ".home-service-card"
      );

    const storyPanel =
      document.querySelector(
        ".home-story-panel"
      );


    const servicesObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            if (collage) {
              collage.classList.add(
                "reveal-visible"
              );
            }

            serviceCards.forEach(
              (card, index) => {
                card.style.setProperty(
                  "--reveal-delay",
                  `${index * 160}ms`
                );

                card.classList.add(
                  "reveal-visible"
                );
              }
            );

            observer.unobserve(
              entry.target
            );
          });
        },
        {
          threshold: 0.25,
          rootMargin:
            "0px 0px 180px 0px",
        }
      );


    const storyObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "reveal-visible"
            );

            observer.unobserve(
              entry.target
            );
          });
        },
        {
          threshold: 0.15,
          rootMargin:
            "0px 0px -50px 0px",
        }
      );


    if (servicesList) {
      servicesObserver.observe(
        servicesList
      );
    }

    if (storyPanel) {
      storyObserver.observe(
        storyPanel
      );
    }


    return () => {
      servicesObserver.disconnect();
      storyObserver.disconnect();
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
      if (current === null) {
        return null;
      }

      return (
        current -
        1 +
        HOME_GALLERY.length
      ) % HOME_GALLERY.length;
    });
  };


  const showNextImage = () => {
    setActiveImage((current) => {
      if (current === null) {
        return null;
      }

      return (
        current +
        1
      ) % HOME_GALLERY.length;
    });
  };


  /* =======================================================
     KEYBOARD LIGHTBOX
  ======================================================= */

  useEffect(() => {
    if (activeImage === null) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow =
      "hidden";


    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        showPreviousImage();
      }

      if (
        event.key === "ArrowRight"
      ) {
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
      event.changedTouches[0].clientX;

    touchEndX.current = null;
  };


  const handleTouchMove = (event) => {
    touchEndX.current =
      event.changedTouches[0].clientX;
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


    if (
      distance >
      minimumSwipeDistance
    ) {
      showNextImage();
    }


    if (
      distance <
      -minimumSwipeDistance
    ) {
      showPreviousImage();
    }


    touchStartX.current = null;
    touchEndX.current = null;
  };


  return (
    <main
  className={`home-page ${
    activeImage !== null ? "lightbox-open" : ""
  }`}
>

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="hero">

        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/home-hero.jpg"
        >
          <source
            src="/hero-vid.mp4"
            type="video/mp4"
          />
        </video>


        <div className="hero-overlay" />


        <div className="hero-content">

          <p className="hero-subtitle">
            {t.heroLabel}
          </p>


          <h1>
            {t.heroTitle}
          </h1>


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


      {/* ===================================================
          STATISTIKA
      =================================================== */}

      <section className="stats-section">

        {t.stats.map(
          ([number, label]) => (
            <article
              className="stat-card"
              key={label}
            >
              <h3>
                {number}
              </h3>

              <p>
                {label}
              </p>
            </article>
          )
        )}

      </section>


      {/* ===================================================
          SHOWCASE
      =================================================== */}

      <section className="home-showcase">

        <div className="home-showcase-grid">


          {/* ===============================================
              COLLAGE
          =============================================== */}

          <div
            className="
              home-collage
              reveal-from-left
            "
          >

            {/* GLAVNA SLIKA */}

            <div
              className="
                collage-image
                collage-image-main
              "
              onClick={() =>
                setActiveImage(0)
              }
              role="button"
              tabIndex={0}
              aria-label="Otvori fotografiju"
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  setActiveImage(0);
                }
              }}
            >
              <img
                src={
                  HOME_GALLERY[0].src
                }
                alt={
                  HOME_GALLERY[0].alt
                }
              />
            </div>


            {/* GORNJA DESNA SLIKA */}

            <div
              className="
                collage-image
                collage-image-top
              "
              onClick={() =>
                setActiveImage(1)
              }
              role="button"
              tabIndex={0}
              aria-label="Otvori fotografiju"
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  setActiveImage(1);
                }
              }}
            >
              <img
                src={
                  HOME_GALLERY[1].src
                }
                alt={
                  HOME_GALLERY[1].alt
                }
              />
            </div>


            {/* DONJA DESNA SLIKA */}

            <div
              className="
                collage-image
                collage-image-bottom
              "
              onClick={() =>
                setActiveImage(2)
              }
              role="button"
              tabIndex={0}
              aria-label="Otvori fotografiju"
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  setActiveImage(2);
                }
              }}
            >
              <img
                src={
                  HOME_GALLERY[2].src
                }
                alt={
                  HOME_GALLERY[2].alt
                }
              />
            </div>

          </div>


          {/* ===============================================
              SERVICES
          =============================================== */}

          <div className="home-services-list">

            {t.services.map(
              ([title, text], index) => (
                <article
                  className="
                    home-service-card
                    reveal-from-right
                  "
                  key={title}
                >

                  <span className="home-service-number">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>


                  <div className="home-service-content">

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

        </div>


        {/* ===============================================
            STORY PANEL
        =============================================== */}

        <div className="home-story-panel">


          <div
            className="
              home-story-block
              home-story-services
            "
          >

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


          <div className="home-story-divider" />


          <div
            className="
              home-story-block
              home-story-company
            "
          >

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
              <span className="home-story-link-line" />

              {t.moreAbout}
            </Link>

          </div>

        </div>

      </section>


      {/* ===================================================
          LIGHTBOX
      =================================================== */}

      {activeImage !== null && (

        <div
          className="about-gallery-lightbox"
          onClick={closeLightbox}
          onTouchStart={
            handleTouchStart
          }
          onTouchMove={
            handleTouchMove
          }
          onTouchEnd={
            handleTouchEnd
          }
          role="dialog"
          aria-modal="true"
          aria-label="Galerija fotografija"
        >

          {/* CLOSE */}

          <button
            type="button"
            className="about-gallery-close"
            onClick={
              closeLightbox
            }
            aria-label="Zatvori galeriju"
          >
            ×
          </button>


          {/* LEFT ARROW */}

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

            <img
              key={
                HOME_GALLERY[
                  activeImage
                ].src
              }
              src={
                HOME_GALLERY[
                  activeImage
                ].src
              }
              alt={
                HOME_GALLERY[
                  activeImage
                ].alt
              }
              className="about-gallery-full-image"
            />


            <div className="about-gallery-counter">

              {activeImage + 1}

              <span>/</span>

              {HOME_GALLERY.length}

            </div>

          </div>


          {/* RIGHT ARROW */}

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

export default Home;