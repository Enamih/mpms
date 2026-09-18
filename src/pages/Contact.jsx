import { useEffect, useState } from "react";
import useLanguage from "../hooks/useLanguage";

const FORM_ENDPOINT =
  "https://formsubmit.co/a10649e7ebf8d842ae62f433ded403d4";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const content = {
  sr: {
    label: "Kontakt",

    title:
      "Razgovarajmo o vašem sledećem projektu",

    intro:
      "Za dodatne informacije, saradnju ili upit u vezi sa projektima, pošaljite nam poruku ili nas kontaktirajte direktno",

    contactLabel: "Kontakt",

    headquarters: "Sedište",

    branch: "Ogranak 1",

    technicalPreparation:
      "Tehnička priprema",

    belgrade: "Beograd",

    locationLabel: "Lokacija",

    name: "Ime i prezime *",

    namePlaceholder:
      "Unesite ime i prezime",

    email: "Email adresa *",

    emailPlaceholder:
      "primer@email.com",

    phone: "Telefon",

    subject: "Naslov poruke *",

    subjectPlaceholder:
      "Tema poruke",

    message: "Poruka *",

    messagePlaceholder:
      "Napišite poruku...",

    send: "Pošaljite poruku",

    sending: "Slanje...",

    success:
      "Poruka je uspešno poslata.",

    autoresponse:
      "Vaša poruka je uspešno poslata kompaniji MPM Construction Plus. Hvala što ste nas kontaktirali. Odgovorićemo vam u najkraćem mogućem roku.",

    errors: {
      nameRequired:
        "Ime i prezime je obavezno.",

      nameShort:
        "Ime mora imati najmanje 3 karaktera.",

      emailRequired:
        "Email adresa je obavezna.",

      emailInvalid:
        "Unesite ispravnu email adresu.",

      phoneInvalid:
        "Unesite ispravan broj telefona.",

      subjectRequired:
        "Naslov poruke je obavezan.",

      subjectShort:
        "Naslov mora imati najmanje 3 karaktera.",

      messageRequired:
        "Poruka je obavezna.",

      messageShort:
        "Poruka mora imati najmanje 10 karaktera.",
    },
  },

  en: {
    label: "Contact",

    title:
      "Let’s talk about your next project",

    intro:
      "For additional information, cooperation or project enquiries, send us a message or contact us directly",

    contactLabel: "Contact",

    headquarters: "Registered office",

    branch: "Branch 1",

    technicalPreparation:
      "Technical preparation",

    belgrade: "Belgrade",

    locationLabel: "Location",

    name: "Full name *",

    namePlaceholder:
      "Enter your full name",

    email: "Email address *",

    emailPlaceholder:
      "name@example.com",

    phone: "Phone",

    subject: "Subject *",

    subjectPlaceholder:
      "Message subject",

    message: "Message *",

    messagePlaceholder:
      "Write your message...",

    send: "Send message",

    sending: "Sending...",

    success:
      "Message sent successfully.",

    autoresponse:
      "Your message has been successfully sent to MPM Construction Plus. Thank you for contacting us. We will get back to you as soon as possible.",

    errors: {
      nameRequired:
        "Full name is required.",

      nameShort:
        "Name must contain at least 3 characters.",

      emailRequired:
        "Email address is required.",

      emailInvalid:
        "Enter a valid email address.",

      phoneInvalid:
        "Enter a valid phone number.",

      subjectRequired:
        "Subject is required.",

      subjectShort:
        "Subject must contain at least 3 characters.",

      messageRequired:
        "Message is required.",

      messageShort:
        "Message must contain at least 10 characters.",
    },
  },
};

function Contact() {
  const { language } = useLanguage();

  const t = content[language];

  const sentFromRedirect =
    new URLSearchParams(
      window.location.search
    ).get("sent") === "1";

  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] =
    useState({});

  const [
    submitStatus,
    setSubmitStatus,
  ] = useState(
    sentFromRedirect
      ? "success"
      : "idle"
  );

  useEffect(() => {
    if (sentFromRedirect) {
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      );
    }
  }, [sentFromRedirect]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "nameRequired";
    } else if (
      formData.name.trim().length < 3
    ) {
      newErrors.name =
        "nameShort";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "emailRequired";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "emailInvalid";
    }

    if (
      formData.phone.trim() &&
      !/^[0-9+\s/-]{6,20}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone =
        "phoneInvalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject =
        "subjectRequired";
    } else if (
      formData.subject.trim().length <
      3
    ) {
      newErrors.subject =
        "subjectShort";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "messageRequired";
    } else if (
      formData.message.trim().length <
      10
    ) {
      newErrors.message =
        "messageShort";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData(
      (currentData) => ({
        ...currentData,
        [name]: value,
      })
    );

    setErrors(
      (currentErrors) => ({
        ...currentErrors,
        [name]: "",
      })
    );

    if (
      submitStatus === "success"
    ) {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(
        validationErrors
      ).length > 0
    ) {
      setErrors(
        validationErrors
      );

      setSubmitStatus("idle");

      return;
    }

    setSubmitStatus("sending");

    event.currentTarget.submit();
  };

  const nextUrl =
    `${window.location.origin}/kontakt?sent=1`;

  return (
    <main className="contact-new-page">

      {/* =========================
          HERO
      ========================== */}

      <section className="contact-new-hero">

        <div className="contact-new-hero-overlay" />

        <div className="contact-new-hero-content">

          <span className="contact-new-label">
            {t.label}
          </span>

          <h1>
            {t.title}
          </h1>

          <p>
            {t.intro}
          </p>

        </div>

      </section>


      {/* =========================
          KONTAKT
      ========================== */}

      <section className="contact-new-main">

        <div className="contact-new-info-panel">

          <span
            className="
              contact-new-label
              contact-new-label-light
            "
          >
            {t.contactLabel}
          </span>


          {/* SEDIŠTE */}

          <article className="contact-new-office-card">

            <div className="contact-new-office-number">
              01
            </div>

            <div className="contact-new-office-content">

              <h2>
                {t.headquarters}
              </h2>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bulevar+Slobodana+Jovanovica+15,+Novi+Sad,+Serbia"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-new-address"
              >
                Novi Sad,
                Bulevar Slobodana
                Jovanovića 15
              </a>

            </div>

          </article>


          {/* OGRANAK BEOGRAD */}

          <article className="contact-new-office-card">

            <div className="contact-new-office-number">
              02
            </div>

            <div className="contact-new-office-content">

              <h2>
                {t.branch}
              </h2>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Dr.+Ivana+Ribara+128a,+Beograd,+Serbia"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-new-address"
              >
                {t.belgrade},
                {" "}
                Dr. Ivana Ribara 128a
              </a>


              <div className="contact-new-phone-block">

                <a href="tel:+381113426525">
                  011/342-6525
                </a>

              </div>


              <div className="contact-new-technical">

                <span>
                  {t.technicalPreparation}
                </span>

                <a href="tel:+38169685777">
                  069 685 777
                </a>

              </div>


              <a
                href="mailto:office@mpms.rs"
                className="contact-new-email"
              >
                office@mpms.rs
              </a>

            </div>

          </article>

        </div>


        {/* =========================
            FORMA
        ========================== */}

        <form
          className="contact-new-form"
          action={FORM_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          noValidate
        >

          <input
            type="hidden"
            name="_next"
            value={nextUrl}
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_autoresponse"
            value={t.autoresponse}
          />

          <input
            type="hidden"
            name="_replyto"
            value={formData.email}
          />

          <input
            type="hidden"
            name="_subject"
            value={`MPM website - ${
              formData.subject.trim() ||
              "Kontakt"
            }`}
          />

          <input
            type="text"
            name="_honey"
            className="contact-new-honeypot"
            tabIndex="-1"
            autoComplete="off"
          />


          <div className="contact-new-form-row">

            <div className="contact-new-form-group">

              <label htmlFor="name">
                {t.name}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                placeholder={
                  t.namePlaceholder
                }
                autoComplete="name"
              />

              {errors.name && (
                <span className="contact-new-error">
                  {
                    t.errors[
                      errors.name
                    ]
                  }
                </span>
              )}

            </div>


            <div className="contact-new-form-group">

              <label htmlFor="email">
                {t.email}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder={
                  t.emailPlaceholder
                }
                autoComplete="email"
              />

              {errors.email && (
                <span className="contact-new-error">
                  {
                    t.errors[
                      errors.email
                    ]
                  }
                </span>
              )}

            </div>

          </div>


          <div className="contact-new-form-row">

            <div className="contact-new-form-group">

              <label htmlFor="phone">
                {t.phone}
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                placeholder="+381..."
                autoComplete="tel"
              />

              {errors.phone && (
                <span className="contact-new-error">
                  {
                    t.errors[
                      errors.phone
                    ]
                  }
                </span>
              )}

            </div>


            <div className="contact-new-form-group">

              <label htmlFor="subject">
                {t.subject}
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={
                  formData.subject
                }
                onChange={
                  handleChange
                }
                placeholder={
                  t.subjectPlaceholder
                }
              />

              {errors.subject && (
                <span className="contact-new-error">
                  {
                    t.errors[
                      errors.subject
                    ]
                  }
                </span>
              )}

            </div>

          </div>


          <div className="contact-new-form-group">

            <label htmlFor="message">
              {t.message}
            </label>

            <textarea
              id="message"
              name="message"
              rows="7"
              value={
                formData.message
              }
              onChange={
                handleChange
              }
              placeholder={
                t.messagePlaceholder
              }
            />

            {errors.message && (
              <span className="contact-new-error">
                {
                  t.errors[
                    errors.message
                  ]
                }
              </span>
            )}

          </div>


          <button
            type="submit"
            className="contact-new-submit"
            disabled={
              submitStatus ===
              "sending"
            }
          >
            {submitStatus ===
            "sending"
              ? t.sending
              : t.send}
          </button>


          {submitStatus ===
            "success" && (
            <p
              className="contact-new-success"
              role="status"
            >
              {t.success}
            </p>
          )}

        </form>

      </section>


      {/* =========================
          MAPA
      ========================== */}

      <section className="contact-new-location">

        <div className="contact-new-location-heading">

          <span className="contact-new-label">
            {t.locationLabel}
          </span>

        </div>


        <div className="contact-new-map-wrapper">

          <div className="contact-new-map-card">

            <div className="contact-new-map-title">
              Dr. Ivana Ribara 128a,
              {" "}
              {t.belgrade}
            </div>


            <iframe
              title={`${t.belgrade}, Dr. Ivana Ribara 128a`}
              src="https://www.google.com/maps?q=Dr+Ivana+Ribara+128a,+Beograd,+Serbia&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;