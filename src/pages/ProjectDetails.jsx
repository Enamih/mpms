import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useLanguage from "../hooks/useLanguage";
import "./ProjectDetails.css";

const projects = {
  inkluzija: {
    images: [
      "/inkluzija/inkluzija1.jpg",
      "/inkluzija/img1.jpeg",
      "/inkluzija/img2.jpeg",
      "/inkluzija/img3.jpeg",
      "/inkluzija/img4.jpeg",
      "/inkluzija/img5.jpeg",
      "/inkluzija/img6.jpeg",
      "/inkluzija/img7.jpeg",
      "/inkluzija/img8.jpeg",
      "/inkluzija/img9.jpeg",
      "/inkluzija/img10.jpeg",
      "/inkluzija/img11.jpeg",
      "/inkluzija/img12.jpeg",
       "/inkluzija/img13.jpeg",
    "/inkluzija/img14.jpeg",
    "/inkluzija/img15.jpeg",
    "/inkluzija/img16.jpeg",
    "/inkluzija/img17.jpeg",
    "/inkluzija/img18.jpeg",
    "/inkluzija/img19.jpeg",
    "/inkluzija/img20.jpeg",
    "/inkluzija/img21.jpeg",
    "/inkluzija/img22.jpeg",
    "/inkluzija/img23.jpeg",
    "/inkluzija/img24.jpeg",
    "/inkluzija/img25.jpeg",
    "/inkluzija/img27.jpg",
    "/inkluzija/img28.jpeg",
    "/inkluzija/img29.jpeg",
    "/inkluzija/img30.jpeg",
    "/inkluzija/img31.jpg"
    ],
    sr: {
      title: "Institut za rani razvoj deteta i inkluziju",
      category: "Objekat društvene namene",
      facts: [
        { label: "Lokacija", value: "Beograd" },
        { label: "Tip", value: "Javni objekat" },
        { label: "Radovi", value: "AB + zidarski radovi" },
        { label: "Usluga", value: "Upravljanje projektom" },
      ],
      highlights: [
        { value: "AB", label: "Armirano-betonska konstrukcija" },
        { value: "AGZ", label: "Građevinski i završni radovi" },
        { value: "PM", label: "Upravljanje projektom" },
        { value: "Beograd", label: "Lokacija" },
      ],
      description: [
        "Centar za rani razvoj dece i inkluziju predstavlja objekat posebne društvene namene, projektovan sa ciljem stvaranja bezbednog, funkcionalnog i podsticajnog okruženja za rad sa decom i pružanje stručne podrške porodicama. Arhitektonski koncept zasniva se na organizaciji prostora koji omogućava nesmetano odvijanje terapijskih, edukativnih i razvojnih aktivnosti, uz visok nivo pristupačnosti za sve korisnike.",
        "Angažman MPM Construction Plus obuhvatao je izvođenje armirano-betonske konstrukcije i zidarskih radova, kao i upravljanje projektom tokom izgradnje objekta, AGZ radova, enterijerskih radova i opremanja. Na taj način kompanija je bila uključena u više ključnih faza realizacije, od konstruktivnih radova do koordinacije završnih i enterijerskih aktivnosti.",
      ],
    },
    en: {
      title: "Center for Early Childhood Development and Inclusion",
      category: "Social-purpose facility",
      facts: [
        { label: "Location", value: "Belgrade" },
        { label: "Type", value: "Public facility" },
        { label: "Works", value: "RC + masonry works" },
        { label: "Service", value: "Project management" },
      ],
      highlights: [
        { value: "RC", label: "Reinforced-concrete structure" },
        { value: "AGZ", label: "Construction and finishing works" },
        { value: "PM", label: "Project management" },
        { value: "Belgrade", label: "Location" },
      ],
      description: [
        "The Center for Early Childhood Development and Inclusion is a facility with a specific social purpose, designed to create a safe, functional and stimulating environment for working with children and providing professional support to families. The architectural concept is based on a spatial organization that allows therapeutic, educational and developmental activities to take place efficiently while ensuring a high level of accessibility for all users.",
        "MPM Construction Plus was engaged in the execution of the reinforced-concrete structure and masonry works, as well as project management during construction, architectural and finishing works, interior works and furnishing. This involvement covered several key stages of delivery, from structural works through the coordination of finishing and interior activities.",
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
      "/expo/image4.jpeg",
    ],
    sr: {
      title: "EXPO 2027",
      category: "Nacionalni izložbeni kompleks",
      facts: [
        { label: "Lokacija", value: "Surčin" },
        { label: "Status", value: "U izgradnji" },
        { label: "Radovi", value: "AB + AGZ" },
        { label: "Fasada", value: "Qbiss by Trimo i drugi sistemi" },
      ],
      highlights: [
        { value: "AB", label: "Armirano-betonska konstrukcija" },
        { value: "AGZ", label: "Radovi na aneksima" },
        { value: "Qbiss", label: "Fasadni sistem by Trimo" },
        { value: "Surčin", label: "Lokacija" },
      ],
      description: [
        "Kompleks EXPO 2027 predstavlja jedan od najvećih infrastrukturnih i građevinskih poduhvata u Srbiji, projektovan za potrebe održavanja Specijalizovane izložbe EXPO 2027. Planirani kompleks obuhvata izložbene paviljone, kongresne i konferencijske sadržaje, komercijalne objekte, saobraćajnu infrastrukturu, javne površine i prateće tehničke sisteme.",
        "Angažman MPM Construction Plus obuhvata izvođenje armiranobetonske konstrukcije, izvođenje AGZ radova na aneksima, kao i realizaciju fasadnih sistema, uključujući Qbiss by Trimo fasade, pored drugih specijalizovanih građevinskih i završnih radova.",
      ],
    },
    en: {
      title: "EXPO 2027",
      category: "National exhibition complex",
      facts: [
        { label: "Location", value: "Surčin" },
        { label: "Status", value: "Under construction" },
        { label: "Works", value: "RC + AGZ" },
        { label: "Façade", value: "Qbiss by Trimo and other systems" },
      ],
      highlights: [
        { value: "RC", label: "Reinforced-concrete structure" },
        { value: "AGZ", label: "Annex works" },
        { value: "Qbiss", label: "Façade system by Trimo" },
        { value: "Surčin", label: "Location" },
      ],
      description: [
        "The EXPO 2027 complex is one of the largest infrastructure and construction developments in Serbia, designed for the Specialized EXPO 2027 exhibition. The planned complex includes exhibition pavilions, congress and conference facilities, commercial buildings, transport infrastructure, public spaces and supporting technical systems.",
        "MPM Construction Plus is engaged in the execution of reinforced-concrete structures, AGZ works on the annexes and façade systems, including Qbiss by Trimo façades, together with other specialized construction and finishing works.",
      ],
    },
  },

  "nacionalni-stadion": {
        images: [
      "/nacionalni-stadion/image6.jpeg",
      "/nacionalni-stadion/image7.jpeg",
      "/nacionalni-stadion/image5.jpeg",
      "/nacionalni-stadion/nacionalni-stadion-1-1920x980.jpg",
      "/nacionalni-stadion/nacionalni-stadion-3-960x860.jpg",
      "/nacionalni-stadion/nacionalni-stadion-thumb-580x720.jpg" 
           
    ],
    sr: {
      title: "Nacionalni stadion",
      category: "Sportski objekat",
      facts: [
        { label: "Lokacija", value: "Surčin" },
        { label: "Kapacitet", value: "≈ 52.000" },
        { label: "Status", value: "U izgradnji" },
        { label: "Radovi", value: "AB – severna tribina" },
      ],
      highlights: [
        { value: "Sever", label: "Severna tribina" },
        { value: "AB", label: "Armirano-betonska konstrukcija" },
        { value: "≈ 52.000", label: "Planirani kapacitet stadiona" },
        { value: "Surčin", label: "Lokacija" },
      ],
      description: [
        "Nacionalni stadion u Surčinu predstavlja jedan od najznačajnijih sportskih infrastrukturnih projekata u Srbiji. Objekat je projektovan prema savremenim međunarodnim standardima za organizaciju velikih sportskih i kulturnih manifestacija, sa planiranim kapacitetom od približno 52.000 gledalaca. Stadion će biti centralni deo budućeg sportskog i izložbenog kompleksa u okviru projekta EXPO 2027.",
        "Angažman MPM Construction Plus na projektu obuhvata izvođenje armirano-betonske konstrukcije severne tribine. Radovi predstavljaju deo konstruktivne realizacije jednog od najznačajnijih sportskih infrastrukturnih projekata u Srbiji.",
      ],
    },
    en: {
      title: "National Stadium",
      category: "Sports facility",
      facts: [
        { label: "Location", value: "Surčin" },
        { label: "Capacity", value: "≈ 52,000" },
        { label: "Status", value: "Under construction" },
        { label: "Works", value: "RC – north stand" },
      ],
      highlights: [
        { value: "North", label: "North stand" },
        { value: "RC", label: "Reinforced-concrete structure" },
        { value: "≈ 52,000", label: "Planned stadium capacity" },
        { value: "Surčin", label: "Location" },
      ],
      description: [
        "The National Stadium in Surčin is one of Serbia's most significant sports infrastructure projects. It has been designed to contemporary international standards for major sporting and cultural events, with a planned capacity of approximately 52,000 spectators. The stadium will form the centerpiece of the future sports and exhibition district associated with the EXPO 2027 development.",
        "MPM Construction Plus is engaged on the project in the execution of the reinforced-concrete structure of the north stand. These works form part of the structural delivery of one of Serbia's most significant sports infrastructure projects.",
      ],
    },
  },

  "epic-games": {
    heroPosition: "center 75%",
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
        "U okviru realizacije projekta izvedeni su radovi na obezbeđenju temeljne jame-izvođenje šipova, zid zavese i naglavnih greda, čime je obezbeđena sigurna realizacija početnih faza izgradnje.",
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

  "planet-residence": {
    images: [
      "/planet-residence/planet-residence-1-1920x980.jpg",
      "/planet-residence/planet-residence-2-1220x860.jpg",
      "/planet-residence/planet-residence-3-960x860.jpg",
    ],
    sr: {
      title: "Planet Residence",
      category: "Stambeno-poslovni kompleks",
      facts: [
        { label: "Lokacija", value: "Niš" },
        { label: "Površina", value: "60.000 m²" },
        { label: "Godina", value: "2022–2024" },
        { label: "Usluga", value: "Konsalting" },
      ],
      highlights: [
        { value: "Consulting", label: "Konsultantske usluge" },
        { value: "Izvođenje", label: "Podrška realizaciji" },
        { value: "Projektovanje", label: "Projektantska podrška" },
        { value: "Niš", label: "Lokacija" },
      ],
      description: [
        "Planet Residence je savremeni stambeno-poslovni kompleks projektovan prema principima moderne arhitekture i visokim standardima savremene gradnje. Koncept objekta zasniva se na funkcionalnoj organizaciji prostora, optimalnom korišćenju prirodnog osvetljenja i stvaranju kvalitetnog ambijenta za stanovanje.",
        "Angažman MPM Construction Plus na projektu obuhvata konsultantske usluge za izvođenje i projektovanje, sa ciljem pružanja stručne podrške u koordinaciji tehničkih rešenja i realizaciji projekta.",
      ],
    },
    en: {
      title: "Planet Residence",
      category: "Residential and commercial complex",
      facts: [
        { label: "Location", value: "Niš" },
        { label: "Area", value: "60,000 m²" },
        { label: "Year", value: "2022–2024" },
        { label: "Service", value: "Consulting" },
      ],
      highlights: [
        { value: "Consulting", label: "Consulting services" },
        { value: "Execution", label: "Delivery support" },
        { value: "Design", label: "Design support" },
        { value: "Niš", label: "Location" },
      ],
      description: [
        "Planet Residence is a contemporary residential and commercial complex designed according to the principles of modern architecture and high construction standards. The concept is based on functional space organization, optimal use of natural light and the creation of a high-quality residential environment.",
        "MPM Construction Plus provides consulting services related to both execution and design, offering professional support in the coordination of technical solutions and project delivery.",
      ],
    },
  },

  "spp-neznanog-junaka": {
    images: [
      "/spp-neznanog-junaka/img1.jpg",
      "/spp-neznanog-junaka/img2.jpg",
      "/spp-neznanog-junaka/img3.jpg",
      "/spp-neznanog-junaka/img4.jpg"
    ],
    sr: {
      title: "SPP Neznanog junaka",
      category: "Stambeno-poslovni objekat",
      facts: [
        { label: "Lokacija", value: "Dedinje" },
        { label: "Površina", value: "≈ 4.000 m²" },
        { label: "Stanovi", value: "13" },
        { label: "Radovi", value: "AB konstrukcija" },
      ],
      highlights: [
        { value: "AB", label: "Armirano-betonska konstrukcija" },
        { value: "≈ 4.000 m²", label: "Površina objekta" },
        { value: "13", label: "Stambenih jedinica" },
        { value: "Dedinje", label: "Lokacija" },
      ],
      description: [
        "Stambeno-poslovni objekat Neznanog junaka predstavlja ekskluzivan projekat mešovite namene smešten u rezidencijalnoj zoni Dedinja. Objekat ukupne površine oko 4.000 m² projektovan je sa ciljem da objedini savremenu arhitekturu, visok kvalitet izgradnje i funkcionalna tehnička rešenja, uz očuvanje privatnosti i komfora budućih korisnika. Sastoji se od 13 stambenih jedinica, poslovnog prostora u prizemlju i podzemne garaže na dve etaže sa ukupno 45 parking mesta.",
        "Angažman MPM Construction Plus na ovom projektu obuhvatao je izvođenje armirano-betonske konstrukcije objekta, kao jedne od ključnih faza njegove građevinske realizacije.",
      ],
    },
    en: {
      title: "Neznanog Junaka Mixed-Use Building",
      category: "Mixed-use building",
      facts: [
        { label: "Location", value: "Dedinje" },
        { label: "Area", value: "≈ 4,000 m²" },
        { label: "Apartments", value: "13" },
        { label: "Works", value: "RC structure" },
      ],
      highlights: [
        { value: "RC", label: "Reinforced-concrete structure" },
        { value: "≈ 4,000 m²", label: "Building area" },
        { value: "13", label: "Residential units" },
        { value: "Dedinje", label: "Location" },
      ],
      description: [
        "The Neznanog Junaka residential and commercial building is an exclusive mixed-use development located in the residential district of Dedinje. With a total area of approximately 4,000 m², it was designed to combine contemporary architecture, high construction quality and functional technical solutions while preserving privacy and comfort for its users. The building contains 13 residential units, commercial space on the ground floor and a two-level underground garage with 45 parking spaces.",
        "MPM Construction Plus was engaged in the execution of the building's reinforced-concrete structure, representing one of the key phases of its construction delivery.",
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
        { label: "Usluga", value: "Izvođenje radova" },
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
      title: "UŠĆE Tower 2",
      category: "Office building",
      facts: [
        { label: "Location", value: "New Belgrade" },
        { label: "Area", value: "55,000 m²" },
        { label: "Year", value: "2018–2020" },
        { label: "Service", value: "Execution of works" },
      ],
      highlights: [
        { value: "103.9 m", label: "Building height" },
        { value: "27,400 m²", label: "Office space" },
        { value: "750", label: "Parking spaces" },
        { value: "A+", label: "Building class" },
      ],
      description: [
        "UŠĆE Tower 2 is one of the most representative new-generation office buildings in Belgrade and an important part of the UŠĆE business complex in New Belgrade. With a height of 103.9 metres and a total gross area of approximately 55,000 m², the building combines around 27,400 m² of office space with two underground levels providing approximately 750 parking spaces shared by both towers in the complex.",
        "Designed as an A+ class office building, it features contemporary architecture with a fully glazed façade, open-plan office floors and a high degree of flexibility in space organization. Particular attention was paid to energy efficiency, sustainability and the quality of the indoor working environment, supported by modern building management systems and high construction standards. The combination of architectural aesthetics, functionality and contemporary engineering solutions makes UŠĆE Tower 2 one of Serbia's landmark office buildings.",
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
};

const uiText = {
  sr: {
    about: "O projektu",
    story: "Iskustvo, preciznost",
    storyAccent: "i kvalitet izvođenja.",
    gallery: "Galerija",
    galleryTitle: "Fotografije projekta",
    view: "Otvori fotografiju",
    nextPhoto: "Sledeća fotografija",
    previousPhoto: "Prethodna fotografija",
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
    view: "Open photo",
    nextPhoto: "Next photo",
    previousPhoto: "Previous photo",
    allProjects: "All projects",
    notFound: "Project not found",
    back: "Back to projects",
  },
};

const hiddenHighlightValues = new Set([
  "AB",
  "AGZ",
  "PM",
  "RC",
  "R&D",
]);

function ProjectDetails() {
  const { slug } = useParams();
  const { language } = useLanguage();

  const projectSource = projects[slug];

  const [activeImageIndex, setActiveImageIndex] =
    useState(null);

  const [galleryImageIndex, setGalleryImageIndex] =
    useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const t = uiText[language];

  useEffect(() => {
    setGalleryImageIndex(0);
    setActiveImageIndex(null);
  }, [slug]);

  useEffect(() => {
    if (activeImageIndex === null || !projectSource) {
      document.body.style.overflow = "";
      document.body.classList.remove("project-lightbox-open");
      return;
    }

    document.body.style.overflow = "hidden";
    document.body.classList.add("project-lightbox-open");

    const imagesLength = projectSource.images.length;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        setActiveImageIndex((current) => {
          if (current === null) {
            return null;
          }

          return current === 0
            ? imagesLength - 1
            : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        setActiveImageIndex((current) => {
          if (current === null) {
            return null;
          }

          return current === imagesLength - 1
            ? 0
            : current + 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("project-lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, projectSource]);

  if (!projectSource) {
    return (
      <main className="project-not-found">
        <h1>{t.notFound}</h1>

        <Link to="/projekti">
          ← {t.back}
        </Link>
      </main>
    );
  }

  const project = projectSource[language];
  const images = projectSource.images;

  const previousGalleryImage = () => {
    setGalleryImageIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  const nextGalleryImage = () => {
    setGalleryImageIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  const previousGalleryIndex =
    images.length > 1
      ? (galleryImageIndex - 1 + images.length) %
        images.length
      : galleryImageIndex;

  const nextGalleryIndex =
    images.length > 1
      ? (galleryImageIndex + 1) % images.length
      : galleryImageIndex;

  const previousImage = () => {
    setActiveImageIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setActiveImageIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.changedTouches[0].clientX;
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

    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextImage();
    }

    if (distance < -minSwipeDistance) {
      previousImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <main
  className={`project-details-page ${
    activeImageIndex !== null ? "lightbox-open" : ""
  }`}
>

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
          backgroundPosition:
      projectSource.heroPosition || "center center",
        }}
      >
        <div className="project-hero-inner">
          <span className="project-category">
            {project.category}
          </span>

          <h1>{project.title}</h1>
        </div>
      </section>


      <section className="project-facts">
        {project.facts.map((fact) => (
          <div
            className="project-fact"
            key={fact.label}
          >
            <span>{fact.label}</span>

            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>


      <section className="project-story">

        <div className="project-story-title">

          <span className="project-small-label">
            {t.about}
          </span>

          <h2>
            {t.story}

            <br />

            <em>
              {t.storyAccent}
            </em>
          </h2>

        </div>


        <div className="project-story-copy">

          {project.description.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}

        </div>

      </section>


      <section className="project-key-points">

        <div
          className={`project-key-points-inner key-points-${project.highlights.length}`}
        >

          {project.highlights.map(
            (highlight) => {

              const showValue =
                !hiddenHighlightValues.has(
                  highlight.value
                );

              return (
                <article
                  className="project-key-point"
                  key={highlight.label}
                >

                  <strong>
                    {highlight.label}
                  </strong>

                  {showValue && (
                    <span className="project-key-point-value">
                      {highlight.value}
                    </span>
                  )}

                </article>
              );
            }
          )}

        </div>

      </section>


      <section className="project-gallery-new">

        <div className="gallery-heading gallery-heading-slider">

          <div>

            <span className="project-small-label">
              {t.gallery}
            </span>

            <h2>
              {t.galleryTitle}
            </h2>

          </div>


          <span className="project-slider-count">

            {String(
              galleryImageIndex + 1
            ).padStart(2, "0")}

            <span>/</span>

            {String(
              images.length
            ).padStart(2, "0")}

          </span>

        </div>


        <div className="project-slider">


          {images.length > 1 && (
            <button
              type="button"
              className="
                project-slider-side
                project-slider-side-left
              "
              onClick={
                previousGalleryImage
              }
              aria-label={
                t.previousPhoto
              }
            >

              <img
                src={
                  images[
                    previousGalleryIndex
                  ]
                }
                alt={`${project.title} - ${
                  previousGalleryIndex + 1
                }`}
              />

              <span className="project-slider-side-overlay" />

            </button>
          )}


          <div className="project-slider-center">

            <button
              type="button"
              className="project-slider-main"
              onClick={() =>
                setActiveImageIndex(
                  galleryImageIndex
                )
              }
              aria-label={t.view}
            >

              <img
                src={
                  images[
                    galleryImageIndex
                  ]
                }
                alt={`${project.title} - ${
                  galleryImageIndex + 1
                }`}
              />


              <span className="project-slider-open">

                <span>
                  {t.view}
                </span>

                <strong>
                  ↗
                </strong>

              </span>

            </button>


            {images.length > 1 && (
              <>

                <button
                  type="button"
                  className="
                    project-slider-arrow
                    project-slider-arrow-left
                  "
                  onClick={
                    previousGalleryImage
                  }
                  aria-label={
                    t.previousPhoto
                  }
                >
                  ‹
                </button>


                <button
                  type="button"
                  className="
                    project-slider-arrow
                    project-slider-arrow-right
                  "
                  onClick={
                    nextGalleryImage
                  }
                  aria-label={
                    t.nextPhoto
                  }
                >
                  ›
                </button>

              </>
            )}

          </div>


          {images.length > 1 && (
            <button
              type="button"
              className="
                project-slider-side
                project-slider-side-right
              "
              onClick={
                nextGalleryImage
              }
              aria-label={
                t.nextPhoto
              }
            >

              <img
                src={
                  images[
                    nextGalleryIndex
                  ]
                }
                alt={`${project.title} - ${
                  nextGalleryIndex + 1
                }`}
              />

              <span className="project-slider-side-overlay" />

            </button>
          )}

        </div>


        <div className="project-slider-progress">

          {images.map(
            (image, index) => (
              <button
                type="button"
                key={image}
                className={`project-slider-dot ${
                  index ===
                  galleryImageIndex
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setGalleryImageIndex(
                    index
                  )
                }
                aria-label={`${t.gallery} ${
                  index + 1
                }`}
              />
            )
          )}

        </div>

      </section>


      <section className="project-back">

        <div className="project-back-inner">

          <Link to="/projekti">

            <span>
              ←
            </span>

            {t.allProjects}

          </Link>

        </div>

      </section>


      {activeImageIndex !== null && (

        <div
          className="project-lightbox"
          onClick={() =>
            setActiveImageIndex(null)
          }
          onTouchStart={
            handleTouchStart
          }
          onTouchMove={
            handleTouchMove
          }
          onTouchEnd={
            handleTouchEnd
          }
        >


          <button
            type="button"
            className="project-lightbox-close"
            onClick={() =>
              setActiveImageIndex(null)
            }
            aria-label="Close"
          >
            ×
          </button>


          <button
            type="button"
            className="
              project-lightbox-arrow
              project-lightbox-prev
            "
            onClick={(event) => {

              event.stopPropagation();

              previousImage();

            }}
            aria-label="Previous"
          >
            ‹
          </button>


          <div className="project-lightbox-stage">

            <img
              src={images[activeImageIndex]}
              alt={project.title}
              draggable="false"
              onClick={(event) =>
                event.stopPropagation()
              }
            />


            <div
              className="project-lightbox-counter"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {activeImageIndex + 1}
              {" / "}
              {images.length}
            </div>

          </div>


          <button
            type="button"
            className="
              project-lightbox-arrow
              project-lightbox-next
            "
            onClick={(event) => {

              event.stopPropagation();

              nextImage();

            }}
            aria-label="Next"
          >
            ›
          </button>

        </div>

      )}

    </main>
  );
}

export default ProjectDetails;