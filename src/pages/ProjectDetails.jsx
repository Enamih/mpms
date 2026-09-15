import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import useLanguage from "../hooks/useLanguage";
import "./ProjectDetails.css";

const projects = {
  usce: {
    images: [
      "/usce/usce-1.jpg",
      "/usce/usce-3-960x860.jpg",
      "/usce/usce-tower-2-1.jpg",
    ],
    sr: {
      title: "Ušće Kula 2",
      category: "Poslovni objekat",
      facts: [
        { label: "Lokacija", value: "Novi Beograd" },
        { label: "Površina", value: "55.000 m²" },
        { label: "Godina", value: "2018–2020" },
        { label: "Usluga", value: "Projektovanje" },
      ],
      highlights: [
        { value: "103,9 m", label: "Visina objekta" },
        { value: "27.400 m²", label: "Kancelarijski prostor" },
        { value: "750", label: "Parking mesta" },
        { value: "A+", label: "Klasa objekta" },
      ],
      description: [
        "Ušće Kula 2 predstavlja jednu od najreprezentativnijih poslovnih zgrada nove generacije u Beogradu i važan deo poslovnog kompleksa UŠĆE na Novom Beogradu. Sa visinom od 103,9 metara i ukupnom bruto površinom od oko 55.000 m², objekat objedinjuje približno 27.400 m² kancelarijskog prostora i dve podzemne etaže sa oko 750 parking mesta, koje koriste obe kule u kompleksu.",
        "Projektovan kao poslovna zgrada A+ klase, objekat karakteriše savremena arhitektura sa potpuno zastakljenom fasadom, otvorenim kancelarijskim etažama i visokim stepenom fleksibilnosti u organizaciji prostora. Posebna pažnja posvećena je energetskoj efikasnosti, održivosti i kvalitetu unutrašnjeg radnog okruženja, uz primenu savremenih tehničkih sistema upravljanja objektom i visokih standarda izgradnje. Zahvaljujući spoju arhitektonske estetike, funkcionalnosti i savremenih građevinskih rešenja, Ušće Kula 2 predstavlja jedan od najznačajnijih poslovnih objekata u Srbiji.",
      ],
    },
    en: {
      title: "UŠĆE Tower II",
      category: "Office building",
      facts: [
        { label: "Location", value: "New Belgrade" },
        { label: "Area", value: "55,000 m²" },
        { label: "Year", value: "2018–2020" },
        { label: "Service", value: "Design" },
      ],
      highlights: [
        { value: "103.9 m", label: "Building height" },
        { value: "27,400 m²", label: "Office space" },
        { value: "750", label: "Parking spaces" },
        { value: "A+", label: "Building class" },
      ],
      description: [
        "UŠĆE Tower II is one of the most representative new-generation office buildings in Belgrade and an important part of the UŠĆE business complex in New Belgrade. With a height of 103.9 metres and a total gross area of approximately 55,000 m², the building combines around 27,400 m² of office space with two underground levels providing approximately 750 parking spaces shared by both towers in the complex.",
        "Designed as an A+ class office building, it features contemporary architecture with a fully glazed façade, open-plan office floors and a high degree of flexibility in space organization. Particular attention was paid to energy efficiency, sustainability and the quality of the indoor working environment, supported by modern building management systems and high construction standards. The combination of architectural aesthetics, functionality and contemporary engineering solutions makes UŠĆE Tower II one of Serbia's landmark office buildings.",
      ],
    },
  },

  navigator: {
    images: [
      "/navigator/navigator-1-1920x980.jpg",
      "/navigator/navigator-2-1220x860.jpg",
      "/navigator/navigator-thumb-580x720.jpg",
    ],
    sr: {
      title: "Navigator Business Center 1",
      category: "Poslovni objekat",
      facts: [
        { label: "Lokacija", value: "Novi Beograd" },
        { label: "Površina", value: "16.800 m²" },
        { label: "Klasa", value: "A" },
        { label: "Sertifikat", value: "LEED Gold" },
      ],
      highlights: [
        { value: "16.800 m²", label: "Poslovni prostor" },
        { value: "A", label: "Klasa objekta" },
        { value: "LEED Gold", label: "Sertifikacija" },
      ],
      description: [
        "Navigator Business Center 1 je savremena poslovna zgrada A klase smeštena u centralnoj poslovnoj zoni Novog Beograda. Sa približno 16.800 m² poslovnog prostora, objekat je projektovan tako da odgovori zahtevima modernog kancelarijskog poslovanja, pružajući fleksibilne radne prostore i visok nivo funkcionalnosti.",
        "Arhitekturu karakterišu čiste linije, moderna zastakljena fasada i otvorena organizacija spratova, koja omogućava jednostavno prilagođavanje prostora različitim korisnicima. Tokom projektovanja i izgradnje poseban akcenat stavljen je na održivost objekta, energetsku efikasnost i kvalitet unutrašnje sredine, što je rezultovalo LEED Gold sertifikacijom. Primena savremenih sistema upravljanja zgradom, energetski efikasnih instalacija i visokokvalitetnih građevinskih materijala čini Navigator Business Center jednim od referentnih poslovnih objekata Novog Beograda.",
      ],
    },
    en: {
      title: "Navigator Business Center 1",
      category: "Office building",
      facts: [
        { label: "Location", value: "New Belgrade" },
        { label: "Area", value: "16,800 m²" },
        { label: "Class", value: "A" },
        { label: "Certificate", value: "LEED Gold" },
      ],
      highlights: [
        { value: "16,800 m²", label: "Office space" },
        { value: "A", label: "Building class" },
        { value: "LEED Gold", label: "Certification" },
      ],
      description: [
        "Navigator Business Center 1 is a modern Class A office building located in the central business district of New Belgrade. With approximately 16,800 m² of office space, it was designed to meet the requirements of contemporary business environments, offering flexible workspaces and a high level of functionality.",
        "The architecture is defined by clean lines, a modern glazed façade and open floor plates that can be easily adapted to different tenants. Sustainability, energy efficiency and indoor environmental quality were key priorities throughout design and construction, resulting in LEED Gold certification. Modern building management systems, energy-efficient installations and high-quality materials make Navigator Business Center one of New Belgrade's reference office developments.",
      ],
    },
  },

  "sun-city": {
    images: [
      "/sun-city/sun-city-1-1920x980.jpg",
      "/sun-city/sun-city-2-1220x860.jpg",
      "/sun-city/sun-city-thumb-580x720.jpg",
    ],
    sr: {
      title: "Sun City",
      category: "Stambeno-poslovni kompleks",
      facts: [
        { label: "Lokacija", value: "Novi Beograd" },
        { label: "Godina", value: "2019" },
        { label: "Stanovi", value: "173" },
        { label: "Parking", value: "320 mesta" },
      ],
      highlights: [
        { value: "173", label: "Stambene jedinice" },
        { value: "320", label: "Parking mesta" },
        { value: "2019", label: "Godina realizacije" },
      ],
      description: [
        "Sun City predstavlja savremeni stambeno-poslovni kompleks na Novom Beogradu, projektovan sa ciljem da objedini kvalitet stanovanja, funkcionalnost i moderan arhitektonski izraz. Kompleks obuhvata 173 stambene jedinice, poslovne sadržaje u prizemlju i 320 parking mesta, čime je formirana zaokružena urbana celina prilagođena potrebama savremenog načina života.",
        "Objekat karakterišu jednostavne arhitektonske forme, velike zastakljene površine, prostrane terase i pažljivo uređeni zajednički prostori. Armiranobetonski konstruktivni sistem, savremena termoizolaciona fasada i kvalitetna završna obrada doprinose dugotrajnosti objekta, energetskoj efikasnosti i visokom nivou komfora. Posebna pažnja posvećena je organizaciji saobraćaja u mirovanju, pešačkih komunikacija i uređenju spoljnog prostora, čime je ostvaren sklad između arhitekture i funkcionalnosti kompleksa.",
      ],
    },
    en: {
      title: "Sun City",
      category: "Residential and commercial complex",
      facts: [
        { label: "Location", value: "New Belgrade" },
        { label: "Year", value: "2019" },
        { label: "Apartments", value: "173" },
        { label: "Parking", value: "320 spaces" },
      ],
      highlights: [
        { value: "173", label: "Residential units" },
        { value: "320", label: "Parking spaces" },
        { value: "2019", label: "Completion year" },
      ],
      description: [
        "Sun City is a contemporary residential and commercial complex in New Belgrade, designed to combine quality living, functionality and a modern architectural expression. The complex includes 173 residential units, commercial uses on the ground floor and 320 parking spaces, creating a complete urban environment tailored to contemporary lifestyles.",
        "The development is characterized by simple architectural forms, large glazed surfaces, spacious terraces and carefully designed shared areas. Its reinforced-concrete structural system, modern thermal façade and high-quality finishes contribute to durability, energy efficiency and a high level of comfort. Particular attention was paid to parking organization, pedestrian circulation and landscaping, creating a balanced relationship between architecture and function.",
      ],
    },
  },

  "planet-residence": {
    images: [
      "/planet-residence/planet-residence-1-1920x980.jpg",
      "/planet-residence/planet-residence-2-1220x860.jpg",
      "/planet-residence/planet-residence-thumb-580x720.jpg",
    ],
    sr: {
      title: "Planet Residence",
      category: "Stambeno-poslovni kompleks",
      facts: [
        { label: "Lokacija", value: "Niš" },
        { label: "Površina", value: "60.000 m²" },
        { label: "Godina", value: "2022–2024" },
        { label: "Tip", value: "Stambeno-poslovni" },
      ],
      highlights: [
        { value: "60.000 m²", label: "Ukupna površina" },
        { value: "2022–2024", label: "Period realizacije" },
        { value: "Niš", label: "Lokacija" },
      ],
      description: [
        "Planet Residence je savremeni stambeno-poslovni kompleks projektovan prema principima moderne arhitekture i visokim standardima savremene gradnje. Koncept objekta zasniva se na funkcionalnoj organizaciji prostora, optimalnom korišćenju prirodnog osvetljenja i stvaranju kvalitetnog ambijenta za stanovanje.",
        "Arhitekturu kompleksa odlikuju svedene linije, savremena fasadna rešenja, velike staklene površine i prostrane terase koje doprinose estetskom identitetu objekta i kvalitetu boravka. Primena armiranobetonskog konstruktivnog sistema, savremenih termoizolacionih materijala i kvalitetnih završnih obrada obezbeđuje dugotrajnost, energetsku efikasnost i visok nivo komfora. Funkcionalno organizovane stambene jedinice, podzemni parking i uređeni zajednički prostori čine Planet Residence jednim od savremenijih stambenih kompleksa u Nišu.",
      ],
    },
    en: {
      title: "Planet Residence",
      category: "Residential and commercial complex",
      facts: [
        { label: "Location", value: "Niš" },
        { label: "Area", value: "60,000 m²" },
        { label: "Year", value: "2022–2024" },
        { label: "Type", value: "Mixed-use" },
      ],
      highlights: [
        { value: "60,000 m²", label: "Total area" },
        { value: "2022–2024", label: "Delivery period" },
        { value: "Niš", label: "Location" },
      ],
      description: [
        "Planet Residence is a contemporary residential and commercial complex designed according to the principles of modern architecture and high construction standards. The concept is based on functional space organization, optimal use of natural light and the creation of a high-quality residential environment.",
        "The complex is defined by clean lines, contemporary façade solutions, large glazed surfaces and spacious terraces that contribute to both its visual identity and quality of living. A reinforced-concrete structural system, modern thermal insulation materials and high-quality finishes provide durability, energy efficiency and a high level of comfort. Functional apartments, underground parking and landscaped common areas make Planet Residence one of the more contemporary residential developments in Niš.",
      ],
    },
  },

  "spp-neznanog-junaka": {
    images: [
      "/spp-neznanog-junaka/spp-neznanog-junaka-1-1920x980.jpg",
      "/spp-neznanog-junaka/spp-neznanog-junaka-2-1220x860.jpg",
      "/spp-neznanog-junaka/spp-neznanog-junaka-thumb-580x720.jpg",
    ],
    sr: {
      title: "SPP Neznanog junaka",
      category: "Stambeno-poslovni objekat",
      facts: [
        { label: "Lokacija", value: "Dedinje" },
        { label: "Površina", value: "≈ 4.000 m²" },
        { label: "Stanovi", value: "13" },
        { label: "Parking", value: "45 mesta" },
      ],
      highlights: [
        { value: "13", label: "Stambenih jedinica" },
        { value: "45", label: "Parking mesta" },
        { value: "2", label: "Garažne etaže" },
        { value: "≈ 4.000 m²", label: "Površina" },
      ],
      description: [
        "Stambeno-poslovni objekat Neznanog junaka predstavlja ekskluzivan projekat mešovite namene smešten u rezidencijalnoj zoni Dedinja. Objekat ukupne površine oko 4.000 m² projektovan je sa ciljem da objedini savremenu arhitekturu, visok kvalitet izgradnje i funkcionalna tehnička rešenja, uz očuvanje privatnosti i komfora budućih korisnika. Sastoji se od 13 stambenih jedinica, poslovnog prostora u prizemlju i podzemne garaže na dve etaže sa ukupno 45 parking mesta.",
        "Arhitektonski koncept karakterišu jednostavne i elegantne forme, uz primenu ventilisane fasade izvedene kombinacijom porcelanskog granita, prirodnog travertina i drvenih fasadnih panela. Velike zastakljene površine omogućavaju obilje prirodnog osvetljenja, dok aluminijumska stolarija sa unutrašnjom drvenom oblogom, niskoemisiona stakla i spoljne električne venecijanere doprinose energetskoj efikasnosti i visokom nivou komfora. Objekat je opremljen savremenim sistemima ventilacije, zaštite od požara i odvođenja dima, čime su ispunjeni visoki standardi bezbednosti i kvaliteta gradnje.",
      ],
    },
    en: {
      title: "Neznanog Junaka Mixed-Use Building",
      category: "Mixed-use building",
      facts: [
        { label: "Location", value: "Dedinje" },
        { label: "Area", value: "≈ 4,000 m²" },
        { label: "Apartments", value: "13" },
        { label: "Parking", value: "45 spaces" },
      ],
      highlights: [
        { value: "13", label: "Residential units" },
        { value: "45", label: "Parking spaces" },
        { value: "2", label: "Garage levels" },
        { value: "≈ 4,000 m²", label: "Area" },
      ],
      description: [
        "The Neznanog Junaka residential and commercial building is an exclusive mixed-use development located in the residential district of Dedinje. With a total area of approximately 4,000 m², it was designed to combine contemporary architecture, high construction quality and functional technical solutions while preserving privacy and comfort for its users. The building contains 13 residential units, commercial space on the ground floor and a two-level underground garage with 45 parking spaces.",
        "The architectural concept is defined by simple, elegant forms and a ventilated façade combining porcelain stoneware, natural travertine and timber façade panels. Large glazed areas bring abundant natural light, while aluminium joinery with interior timber finishes, low-emissivity glazing and exterior electric venetian blinds contribute to energy efficiency and comfort. Modern ventilation, fire-protection and smoke-extraction systems ensure high safety and construction standards.",
      ],
    },
  },

  "epic-games": {
    images: [
      "/epic-games/epic-games-1-1920x980.jpg",
      "/epic-games/epic-games-2-1220x860.jpg",
      "/epic-games/epic-games-thumb-580x720.jpg",
    ],
    sr: {
      title: "Epic Games / 3Lateral kampus",
      category: "Istraživačko-razvojni centar",
      facts: [
        { label: "Lokacija", value: "Novi Sad" },
        { label: "Namena", value: "R&D kampus" },
        { label: "Oblast", value: "Visoke tehnologije" },
        { label: "Radovi", value: "Temeljna jama" },
      ],
      highlights: [
        { value: "R&D", label: "Razvojni kampus" },
        { value: "Šipovi", label: "Izvedeni radovi" },
        { value: "Novi Sad", label: "Lokacija" },
      ],
      description: [
        "Kampus Epic Games / 3Lateral u Novom Sadu predstavlja jedan od najznačajnijih razvojnih projekata iz oblasti visokih tehnologija.",
        "U okviru realizacije projekta izvedeni su radovi na obezbeđenju temeljne jame, izvođenju šipova, zidu zavese i nadglavnoj gredi, čime je obezbeđena sigurna realizacija početnih faza izgradnje.",
      ],
    },
    en: {
      title: "Epic Games / 3Lateral Campus",
      category: "Research and development center",
      facts: [
        { label: "Location", value: "Novi Sad" },
        { label: "Purpose", value: "R&D campus" },
        { label: "Field", value: "High technology" },
        { label: "Works", value: "Foundation pit" },
      ],
      highlights: [
        { value: "R&D", label: "Development campus" },
        { value: "Piles", label: "Executed works" },
        { value: "Novi Sad", label: "Location" },
      ],
      description: [
        "The Epic Games / 3Lateral campus in Novi Sad is one of the most significant development projects in the field of advanced technology.",
        "As part of the project delivery, works were carried out to secure the foundation pit, install piles, construct the diaphragm wall and execute the capping beam, providing safe conditions for the initial stages of construction.",
      ],
    },
  },

  inkluzija: {
    images: [
      "/inkluzija/inkluzija-1-1920x980.jpg",
      "/inkluzija/inkluzija-3-960x860.jpg",
      "/inkluzija/inkluzija-thumb-580x720.jpg",
    ],
    sr: {
      title: "Centar za rani razvoj dece i inkluziju",
      category: "Objekat društvene namene",
      facts: [
        { label: "Lokacija", value: "Beograd" },
        { label: "Tip", value: "Javni objekat" },
        { label: "Namena", value: "Rani razvoj" },
        { label: "Fokus", value: "Pristupačnost" },
      ],
      highlights: [
        { value: "100%", label: "Fokus na pristupačnost" },
        { value: "Javni", label: "Tip objekta" },
        { value: "Beograd", label: "Lokacija" },
      ],
      description: [
        "Centar za rani razvoj dece i inkluziju predstavlja objekat posebne društvene namene, projektovan sa ciljem stvaranja bezbednog, funkcionalnog i podsticajnog okruženja za rad sa decom i pružanje stručne podrške porodicama. Arhitektonski koncept zasniva se na organizaciji prostora koji omogućava nesmetano odvijanje terapijskih, edukativnih i razvojnih aktivnosti, uz visok nivo pristupačnosti za sve korisnike.",
        "Objekat karakterišu savremena arhitektonska rešenja, racionalna organizacija funkcionalnih celina i primena kvalitetnih građevinskih materijala koji obezbeđuju dugotrajnost, energetsku efikasnost i visok nivo komfora. Posebna pažnja posvećena je prirodnom osvetljenju, povezivanju unutrašnjih i spoljašnjih prostora, kao i stvaranju bezbednog i prijatnog ambijenta prilagođenog potrebama dece i stručnog osoblja.",
      ],
    },
    en: {
      title: "Center for Early Childhood Development and Inclusion",
      category: "Social-purpose facility",
      facts: [
        { label: "Location", value: "Belgrade" },
        { label: "Type", value: "Public facility" },
        { label: "Purpose", value: "Early development" },
        { label: "Focus", value: "Accessibility" },
      ],
      highlights: [
        { value: "100%", label: "Accessibility focus" },
        { value: "Public", label: "Facility type" },
        { value: "Belgrade", label: "Location" },
      ],
      description: [
        "The Center for Early Childhood Development and Inclusion is a facility with a specific social purpose, designed to create a safe, functional and stimulating environment for working with children and providing professional support to families. The architectural concept is based on a spatial organization that allows therapeutic, educational and developmental activities to take place efficiently while ensuring a high level of accessibility for all users.",
        "The building features contemporary architectural solutions, a rational organization of functional zones and high-quality construction materials that support durability, energy efficiency and comfort. Particular attention was paid to natural lighting, the connection between indoor and outdoor areas, and the creation of a safe and welcoming environment tailored to the needs of children and professional staff.",
      ],
    },
  },

  expo: {
    images: [
      "/expo/expo-1-1920x980.jpg",
      "/expo/expo-3-960x860.jpg",
      "/expo/expo-thumb-580x720.jpg",
      "/expo/image0.jpeg",
      "/expo/image1.jpeg",
      "/expo/image2.jpeg",
      "/expo/image3.jpeg",
      "/expo/image4.jpeg"
    ],
    sr: {
      title: "EXPO 2027",
      category: "Nacionalni izložbeni kompleks",
      facts: [
        { label: "Lokacija", value: "Surčin" },
        { label: "Godina", value: "2027" },
        { label: "Tip", value: "Izložbeni kompleks" },
        { label: "Status", value: "U izgradnji" },
      ],
      highlights: [
        { value: "2027", label: "Godina manifestacije" },
        { value: "EXPO", label: "Međunarodni kompleks" },
        { value: "Surčin", label: "Lokacija" },
      ],
      description: [
        "Kompleks EXPO 2027 predstavlja jedan od najvećih infrastrukturnih i građevinskih poduhvata u Srbiji, projektovan za potrebe održavanja Specijalizovane izložbe EXPO 2027. Planirani kompleks obuhvata izložbene paviljone, kongresne i konferencijske sadržaje, komercijalne objekte, saobraćajnu infrastrukturu, javne površine i prateće tehničke sisteme, čime se formira nova urbana celina u zoni Surčina.",
        "Projektovanje kompleksa zasnovano je na principima modularne arhitekture, funkcionalne organizacije prostora i održive gradnje. Veliki rasponi konstrukcije, savremeni čelični i armiranobetonski sistemi, energetski efikasni fasadni omotači i napredni sistemi upravljanja objektima omogućavaju realizaciju kompleksa koji ispunjava međunarodne standarde za organizaciju velikih događaja. Nakon završetka manifestacije, objekti su predviđeni za dalju komercijalnu i javnu upotrebu, čime se obezbeđuje dugoročna funkcionalnost i održivost investicije.",
      ],
    },
    en: {
      title: "EXPO 2027",
      category: "National exhibition complex",
      facts: [
        { label: "Location", value: "Surčin" },
        { label: "Year", value: "2027" },
        { label: "Type", value: "Exhibition complex" },
        { label: "Status", value: "Under construction" },
      ],
      highlights: [
        { value: "2027", label: "Expo year" },
        { value: "EXPO", label: "International complex" },
        { value: "Surčin", label: "Location" },
      ],
      description: [
        "The EXPO 2027 complex is one of the largest infrastructure and construction developments in Serbia, designed for the Specialized EXPO 2027 exhibition. The planned complex includes exhibition pavilions, congress and conference facilities, commercial buildings, transport infrastructure, public spaces and supporting technical systems, creating a new urban district in the Surčin area.",
        "The complex is designed around the principles of modular architecture, functional spatial organization and sustainable construction. Large structural spans, modern steel and reinforced-concrete systems, energy-efficient building envelopes and advanced building management systems enable a complex that meets international standards for major events. Following the exhibition, the facilities are intended for continued commercial and public use, supporting the long-term functionality and sustainability of the investment.",
      ],
    },
  },

  "nacionalni-stadion": {
    images: [
      "/nacionalni-stadion/nacionalni-stadion-1-1920x980.jpg",
      "/nacionalni-stadion/nacionalni-stadion-3-960x860.jpg",
      "/nacionalni-stadion/nacionalni-stadion-thumb-580x720.jpg",
      "/nacionalni-stadion/image5.jpeg",
      "/nacionalni-stadion/image6.jpeg",
      "/nacionalni-stadion/image7.jpeg",
    ],
    sr: {
      title: "Nacionalni stadion",
      category: "Sportski objekat",
      facts: [
        { label: "Lokacija", value: "Surčin" },
        { label: "Kapacitet", value: "≈ 52.000" },
        { label: "Status", value: "U izgradnji" },
        { label: "Tip", value: "Stadion" },
      ],
      highlights: [
        { value: "≈ 52.000", label: "Gledalaca" },
        { value: "Surčin", label: "Lokacija" },
        { value: "EXPO 2027", label: "Šira celina" },
      ],
      description: [
        "Nacionalni stadion u Surčinu predstavlja jedan od najznačajnijih sportskih infrastrukturnih projekata u Srbiji. Objekat je projektovan prema savremenim međunarodnim standardima za organizaciju velikih sportskih i kulturnih manifestacija, sa planiranim kapacitetom od približno 52.000 gledalaca. Stadion će biti centralni deo budućeg sportskog i izložbenog kompleksa u okviru projekta EXPO 2027.",
        "Arhitektonski koncept karakteriše savremena forma sa naglašenim transparentnim fasadnim omotačem i krovnom konstrukcijom velikog raspona koja obezbeđuje natkrivanje svih tribina. Projektom su predviđeni armiranobetonski i čelični konstruktivni sistemi, savremena tehnička infrastruktura, VIP i medijski sadržaji, podzemne tehničke prostorije, kao i veliki broj parking mesta i pratećih saobraćajnih površina. Poseban akcenat stavljen je na funkcionalnost, bezbednost korisnika, efikasnu evakuaciju i primenu energetski efikasnih rešenja, čime će stadion predstavljati jedan od najmodernijih sportskih objekata u regionu.",
      ],
    },
    en: {
      title: "National Stadium",
      category: "Sports facility",
      facts: [
        { label: "Location", value: "Surčin" },
        { label: "Capacity", value: "≈ 52,000" },
        { label: "Status", value: "Under construction" },
        { label: "Type", value: "Stadium" },
      ],
      highlights: [
        { value: "≈ 52,000", label: "Spectators" },
        { value: "Surčin", label: "Location" },
        { value: "EXPO 2027", label: "Wider development" },
      ],
      description: [
        "The National Stadium in Surčin is one of Serbia's most significant sports infrastructure projects. It has been designed to contemporary international standards for major sporting and cultural events, with a planned capacity of approximately 52,000 spectators. The stadium will form the centerpiece of the future sports and exhibition district associated with the EXPO 2027 development.",
        "The architectural concept features a contemporary form with a pronounced transparent façade envelope and a large-span roof structure covering all stands. The design includes reinforced-concrete and steel structural systems, modern technical infrastructure, VIP and media facilities, underground technical spaces, extensive parking and supporting transport areas. Particular attention has been paid to functionality, user safety, efficient evacuation and energy-efficient solutions, positioning the stadium among the most modern sports venues in the region.",
      ],
    },
  },
};

const uiText = {
  sr: {
    about: "O projektu",
    story: "Iskustvo, preciznost",
    storyAccent: "i kvalitet izvođenja.",
    gallery: "Galerija",
    galleryTitle: "Fotografije projekta",
    view: "Pogledaj +",
    allProjects: "Svi projekti",
    notFound: "Projekat nije pronađen",
    back: "Nazad na projekte",
  },
  en: {
    about: "About the project",
    story: "Experience, precision",
    storyAccent: "and quality in execution.",
    gallery: "Gallery",
    galleryTitle: "Project photos",
    view: "View +",
    allProjects: "All projects",
    notFound: "Project not found",
    back: "Back to projects",
  },
};

function ProjectDetails() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const projectSource = projects[slug];
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const t = uiText[language];

  if (!projectSource) {
    return (
      <main className="project-not-found">
        <h1>{t.notFound}</h1>
        <Link to="/projekti">← {t.back}</Link>
      </main>
    );
  }

  const project = projectSource[language];
  const images = projectSource.images;

  const previousImage = () => {
    setActiveImageIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <main className="project-details-page">
      <section
        className="project-hero-new"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10, 10, 10, 0.58) 0%,
              rgba(10, 10, 10, 0.16) 58%,
              rgba(10, 10, 10, 0.03) 100%
            ),
            url("${images[0]}")
          `,
        }}
      >
        <div className="project-hero-inner">
          <span className="project-category">{project.category}</span>
          <h1>{project.title}</h1>
        </div>
      </section>

      <section className="project-facts">
        {project.facts.map((fact) => (
          <div className="project-fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>

      <section className="project-story">
        <div className="project-story-title">
          <span className="project-small-label">{t.about}</span>
          <h2>
            {t.story}
            <br />
            <em>{t.storyAccent}</em>
          </h2>
        </div>

        <div className="project-story-copy">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={`project-highlights highlights-${Math.min(project.highlights.length, 4)}`}>
        {project.highlights.map((highlight) => (
          <div className="project-highlight" key={highlight.label}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </div>
        ))}
      </section>

      <section className="project-gallery-new">
        <div className="gallery-heading">
          <span className="project-small-label">{t.gallery}</span>
          <h2>{t.galleryTitle}</h2>
        </div>

        <div className="gallery-layout">
          {images.map((image, index) => (
            <button
              type="button"
              className="gallery-item"
              key={image}
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={image} alt={`${project.title} - ${index + 1}`} />
              <span className="gallery-open">{t.view}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="project-back">
        <Link to="/projekti">
          <span>←</span>
          {t.allProjects}
        </Link>
      </section>

      {activeImageIndex !== null && (
        <div className="project-lightbox" onClick={() => setActiveImageIndex(null)}>
          <button
            type="button"
            className="project-lightbox-close"
            onClick={() => setActiveImageIndex(null)}
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            className="project-lightbox-arrow project-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <img
            src={images[activeImageIndex]}
            alt={project.title}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="project-lightbox-arrow project-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next"
          >
            ›
          </button>

          <div className="project-lightbox-counter">
            {activeImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}

export default ProjectDetails;
