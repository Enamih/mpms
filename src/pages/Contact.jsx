import { useEffect, useState } from "react";
import useLanguage from "../hooks/useLanguage";

// FormSubmit token received in the activation email for the current test mailbox.
// When you later change the destination email, replace this token after activating the new address.
const FORM_ENDPOINT = "https://formsubmit.co/a10649e7ebf8d842ae62f433ded403d4";

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
    title: "Razgovarajmo o vašem sledećem projektu",
    intro:
      "Za dodatne informacije, saradnju ili upit u vezi sa projektima, pošaljite nam poruku ili kontaktirajte jednu od naših poslovnica.",
    offices: "Naše poslovnice",
    officesIntro: "Kontaktirajte tim koji vam je najbliži.",
    belgrade: "Beograd",
    locations: "Lokacije",
    locationsTitle: "Gde se nalazimo",
    name: "Ime i prezime *",
    namePlaceholder: "Unesite ime i prezime",
    email: "Email adresa *",
    emailPlaceholder: "primer@email.com",
    phone: "Telefon",
    subject: "Naslov poruke *",
    subjectPlaceholder: "Tema poruke",
    message: "Poruka *",
    messagePlaceholder: "Napišite poruku...",
    send: "Pošaljite poruku",
    sending: "Slanje...",
    success: "Poruka je uspešno poslata.",
    autoresponse: "Vaša poruka je uspešno poslata kompaniji MPM Construction Plus. Hvala što ste nas kontaktirali. Odgovorićemo vam u najkraćem mogućem roku.",
    errors: {
      nameRequired: "Ime i prezime je obavezno.",
      nameShort: "Ime mora imati najmanje 3 karaktera.",
      emailRequired: "Email adresa je obavezna.",
      emailInvalid: "Unesite ispravnu email adresu.",
      phoneInvalid: "Unesite ispravan broj telefona.",
      subjectRequired: "Naslov poruke je obavezan.",
      subjectShort: "Naslov mora imati najmanje 3 karaktera.",
      messageRequired: "Poruka je obavezna.",
      messageShort: "Poruka mora imati najmanje 10 karaktera.",
    },
  },
  en: {
    label: "Contact",
    title: "Let’s talk about your next project",
    intro:
      "For additional information, cooperation or project enquiries, send us a message or contact one of our offices directly.",
    offices: "Our offices",
    officesIntro: "Get in touch with the team closest to you.",
    belgrade: "Belgrade",
    locations: "Locations",
    locationsTitle: "Where to find us",
    name: "Full name *",
    namePlaceholder: "Enter your full name",
    email: "Email address *",
    emailPlaceholder: "name@example.com",
    phone: "Phone",
    subject: "Subject *",
    subjectPlaceholder: "Message subject",
    message: "Message *",
    messagePlaceholder: "Write your message...",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent successfully.",
    autoresponse: "Your message has been successfully sent to MPM Construction Plus. Thank you for contacting us. We will get back to you as soon as possible.",
    errors: {
      nameRequired: "Full name is required.",
      nameShort: "Name must contain at least 3 characters.",
      emailRequired: "Email address is required.",
      emailInvalid: "Enter a valid email address.",
      phoneInvalid: "Enter a valid phone number.",
      subjectRequired: "Subject is required.",
      subjectShort: "Subject must contain at least 3 characters.",
      messageRequired: "Message is required.",
      messageShort: "Message must contain at least 10 characters.",
    },
  },
};

function Contact() {
  const { language } = useLanguage();
  const t = content[language];
  const sentFromRedirect = new URLSearchParams(window.location.search).get("sent") === "1";
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(sentFromRedirect ? "success" : "idle");

  useEffect(() => {
    if (sentFromRedirect) {
      // Keep the success notice visible, but remove ?sent=1 from the address bar.
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [sentFromRedirect]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "nameRequired";
    else if (formData.name.trim().length < 3) newErrors.name = "nameShort";

    if (!formData.email.trim()) newErrors.email = "emailRequired";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "emailInvalid";
    }

    if (formData.phone.trim() && !/^[0-9+\s/-]{6,20}$/.test(formData.phone)) {
      newErrors.phone = "phoneInvalid";
    }

    if (!formData.subject.trim()) newErrors.subject = "subjectRequired";
    else if (formData.subject.trim().length < 3) newErrors.subject = "subjectShort";

    if (!formData.message.trim()) newErrors.message = "messageRequired";
    else if (formData.message.trim().length < 10) newErrors.message = "messageShort";

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));

    if (submitStatus === "success") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("idle");
      return;
    }

    setSubmitStatus("sending");

    // Use a regular POST instead of fetch/AJAX. This avoids browser CORS issues
    // and lets FormSubmit deliver the message reliably after the one-time activation.
    event.currentTarget.submit();
  };

  const nextUrl = `${window.location.origin}/kontakt?sent=1`;

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="section-label">{t.label}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-info-panel">
          <span className="section-label contact-info-label">{t.offices}</span>
          <h2>{t.officesIntro}</h2>

          <div className="office-card">
            <div className="office-card-marker" aria-hidden="true">01</div>
            <div>
              <h3>{t.belgrade}</h3>
              <a href="https://www.google.com/maps/search/?api=1&query=Dr.+Ivana+Ribara+128,+Beograd" target="_blank" rel="noopener noreferrer" className="contact-address-link">
               Dr. Ivana Ribara 128
              </a>
              <a href="tel:+381113426525">011/342-6525</a>
              <a href="mailto:office@mpms.rs">office@mpms.rs</a>
            </div>
          </div>

          <div className="office-card">
            <div className="office-card-marker" aria-hidden="true">02</div>
            <div>
              <h3>Novi Sad</h3>
              <a href="https://www.google.com/maps/search/?api=1&query=Bulevar+Slobodana+Jovanovica+15,+Novi+Sad" target="_blank" rel="noopener noreferrer" className="contact-address-link">
                Bulevar Slobodana Jovanovića 15
              </a>
              <a href="tel:+38169685607">(+381) 069/685-607</a>
              <a href="mailto:office@mpms.rs">office@mpms.rs</a>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action={FORM_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          noValidate
        >
          <input type="hidden" name="_next" value={nextUrl} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value={t.autoresponse} />
          <input type="hidden" name="_replyto" value={formData.email} />
          <input
            type="hidden"
            name="_subject"
            value={`MPM website - ${formData.subject.trim() || "Kontakt"}`}
          />
          <input
            type="text"
            name="_honey"
            className="form-honeypot"
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{t.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                autoComplete="name"
              />
              {errors.name && <span className="form-error">{t.errors[errors.name]}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                autoComplete="email"
              />
              {errors.email && <span className="form-error">{t.errors[errors.email]}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">{t.phone}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+381..."
                autoComplete="tel"
              />
              {errors.phone && <span className="form-error">{t.errors[errors.phone]}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t.subject}</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.subjectPlaceholder}
              />
              {errors.subject && <span className="form-error">{t.errors[errors.subject]}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.message}</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
            ></textarea>
            {errors.message && <span className="form-error">{t.errors[errors.message]}</span>}
          </div>

          <button
            type="submit"
            className="btn-primary form-submit"
            disabled={submitStatus === "sending"}
          >
            {submitStatus === "sending" ? t.sending : t.send}
          </button>

          {submitStatus === "success" && (
            <p className="form-status form-success" role="status">
              {t.success}
            </p>
          )}
        </form>
      </section>

      <section className="maps-section">
        <div className="maps-heading">
          <span className="section-label">{t.locations}</span>
          <h2>{t.locationsTitle}</h2>
        </div>

        <div className="maps-grid">
          <div className="map-card">
            <div className="map-info">
              <h3>{t.belgrade}</h3>
              <p>Dr. Ivana Ribara 128</p>
              <a href="tel:+381113426525">011/342-6525</a>
            </div>
            <iframe
              title={`${t.belgrade} map`}
              src="https://www.google.com/maps?q=Dr+Ivana+Ribara+128+Beograd&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="map-card">
            <div className="map-info">
              <h3>Novi Sad</h3>
              <p>Bulevar Slobodana Jovanovića 15</p>
              <a href="tel:+38169685607">(+381) 069/685-607</a>
            </div>
            <iframe
              title="Novi Sad map"
              src="https://www.google.com/maps?q=Bulevar+Slobodana+Jovanovica+15+Novi+Sad&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
