import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaultRevealSelector = [
  ".stat-card",
  ".service-card",
  ".value-card",
  ".approach-grid > div",
  ".project-card",
  ".contact-info-panel",
  ".office-card",
  ".contact-form",
  ".map-card",
  ".gallery-item",
].join(", ");

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let defaultObserver;
    let showcaseObserver;
    let storyObserver;
    let frameId;

    frameId =
      window.requestAnimationFrame(() => {

        /* ==========================
           OSTALE ANIMACIJE
        ========================== */

        const defaultElements =
          Array.from(
            document.querySelectorAll(
              defaultRevealSelector
            )
          );

        defaultElements.forEach(
          (element, index) => {

            element.classList.add(
              "reveal-card"
            );

            element.style.setProperty(
              "--reveal-delay",
              `${(index % 4) * 85}ms`
            );
          }
        );


        /* ==========================
           HOME SHOWCASE
        ========================== */

        const collage =
          document.querySelector(
            ".home-collage"
          );

        const servicesList =
          document.querySelector(
            ".home-services-list"
          );

        const storyPanel =
          document.querySelector(
            ".home-story-panel"
          );

        const serviceCards =
          Array.from(
            document.querySelectorAll(
              ".home-service-card"
            )
          );


        if (collage) {
          collage.classList.add(
            "reveal-from-left"
          );
        }


        serviceCards.forEach(
          (element, index) => {

            element.classList.add(
              "reveal-from-right"
            );

            element.style.setProperty(
              "--reveal-delay",
              `${index * 300}ms`
            );
          }
        );


        /* ==========================
           FALLBACK
        ========================== */

        if (
          !(
            "IntersectionObserver"
            in window
          )
        ) {

          defaultElements.forEach(
            (element) => {
              element.classList.add(
                "reveal-visible"
              );
            }
          );

          collage?.classList.add(
            "reveal-visible"
          );

          serviceCards.forEach(
            (element) => {
              element.classList.add(
                "reveal-visible"
              );
            }
          );

          storyPanel?.classList.add(
            "reveal-visible"
          );

          return;
        }


        /* ==========================
           STANDARD REVEALS
        ========================== */

        defaultObserver =
          new IntersectionObserver(
            (entries) => {

              entries.forEach(
                (entry) => {

                  if (
                    !entry.isIntersecting
                  ) {
                    return;
                  }

                  entry.target.classList.add(
                    "reveal-visible"
                  );

                  defaultObserver.unobserve(
                    entry.target
                  );
                }
              );
            },
            {
              threshold: 0.18,

              rootMargin:
                "0px 0px -60px 0px",
            }
          );


        defaultElements.forEach(
          (element) => {

            defaultObserver.observe(
              element
            );
          }
        );


        /* ==========================
           SLIKE + SERVICE CARDS

           Kreću tek kad dođemo
           do kartica.
        ========================== */

        showcaseObserver =
          new IntersectionObserver(
            (entries) => {

              entries.forEach(
                (entry) => {

                  if (
                    !entry.isIntersecting
                  ) {
                    return;
                  }


                  collage?.classList.add(
                    "reveal-visible"
                  );


                  serviceCards.forEach(
                    (card) => {

                      card.classList.add(
                        "reveal-visible"
                      );
                    }
                  );


                  showcaseObserver.unobserve(
                    entry.target
                  );
                }
              );
            },
            {
              threshold: 0.2,

              rootMargin:
                "0px 0px -10% 0px",
            }
          );


        if (servicesList) {

          showcaseObserver.observe(
            servicesList
          );
        }


        /* ==========================
           STORY PANEL

           Tek kad korisnik dođe
           do donjeg bloka.
        ========================== */

        storyObserver =
          new IntersectionObserver(
            (entries) => {

              entries.forEach(
                (entry) => {

                  if (
                    !entry.isIntersecting
                  ) {
                    return;
                  }


                  entry.target.classList.add(
                    "reveal-visible"
                  );


                  storyObserver.unobserve(
                    entry.target
                  );
                }
              );
            },
            {
              threshold: 0.18,

              rootMargin:
                "0px 0px -8% 0px",
            }
          );


        if (storyPanel) {

          storyObserver.observe(
            storyPanel
          );
        }

      });


    return () => {

      window.cancelAnimationFrame(
        frameId
      );

      defaultObserver?.disconnect();

      showcaseObserver?.disconnect();

      storyObserver?.disconnect();
    };

  }, [pathname]);


  return null;
}

export default ScrollReveal;