import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelector = [
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
    let observer;
    let frameId;

    frameId = window.requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll(revealSelector));

      elements.forEach((element, index) => {
        element.classList.add("reveal-card");
        element.style.setProperty("--reveal-delay", `${(index % 4) * 85}ms`);
      });

      if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("reveal-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -35px 0px",
        }
      );

      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
