/**
 * Portfolio Data File - Marek Wietecha
 * Quality Control & Metrology Specialist
 */

export const personalData = {
  name: "Marek Wietecha",
  title: {
    pl: "Specjalista ds. Kontroli Jakości i Metrologii",
    en: "Quality Control & Metrology Specialist"
  },
  location: "Płock, Mazowieckie, Poland",
  profileSummary: {
    pl: "Senior Kontroler Jakości i Pomiarowiec z ponad 13-letnim doświadczeniem w Kontroli Jakości i Metrologii oraz ponad 20-letnim stażem w branży produkcyjnej i maszynowej. Specjalizuję się w kontroli wejściowej, pomiarach 2D/3D, skanowaniu przestrzennym (Hexagon Absolute Arm, skanery 3D) oraz opracowywaniu raportów pomiarowych dla PPAP w Geomagic Control X, PolyWorks i HyperScan. Certyfikowany Audytor Wewnętrzny ISO 9001:2015, Six Sigma White Belt oraz ekspert w obszarze AIAG Core Tools (APQP, FMEA, MSA, SPC, Control Plan).",
    en: "Senior Quality Control & Metrology Specialist with over 13 years of experience in Quality Control and Metrology and 20+ years in the manufacturing and machinery industry. Specialized in incoming inspection, 2D/3D dimensional metrology, 3D scanning (Hexagon Absolute Arm, 3D scanners), and generating PPAP measurement reports in Geomagic Control X, PolyWorks, and HyperScan. Certified ISO 9001:2015 Internal Auditor, Six Sigma White Belt, and AIAG Core Tools practitioner."
  }
};

export const experienceData = [
  {
    id: "cnh-qc-measurer",
    period: { pl: "06.2024 – obecnie", en: "Jun 2024 – Present" },
    company: "CNH",
    role: { pl: "Kontroler Jakości / Pomiarowiec", en: "Quality Control & Metrology Specialist" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Kontrola wejściowa komponentów oraz weryfikacja zgodności z dokumentacją techniczną i wymaganiami jakościowymi.",
        "Pomiary 3D przy użyciu skanerów 3D, ramienia Hexagon Absolute Arm, wysokościomierza TESA Micro-Hite 600 i profilometru chropowatości.",
        "Generowanie raportów pomiarowych na potrzeby procesu PPAP w Geomagic Control X, PolyWorks oraz HyperScan.",
        "Analiza i interpretacja dokumentacji technicznej 2D/3D oraz tolerancji geometrycznych GD&T.",
        "Nadzór nad niezgodnościami jakościowymi, prowadzenie reklamacji dostawców i współpraca z Działem Inżynierii/Produkcji.",
        "Praca w środowisku SAP QM, Teamcenter oraz nadzór nad procedurami kontrolnymi."
      ],
      en: [
        "Incoming inspection of components and verification against technical drawings and quality specs.",
        "3D dimensional inspection using 3D scanners, Hexagon Absolute Arm, TESA Micro-Hite 600 height gauge, and profilometer.",
        "Generating PPAP dimensional measurement reports using Geomagic Control X, PolyWorks, and HyperScan.",
        "Interpretation of 2D/3D technical documentation and GD&T geometric tolerances.",
        "Non-conformance management, supplier quality claims execution, and cross-functional engineering support.",
        "Daily operations within SAP QM, Teamcenter, and technical control systems."
      ]
    },
    equipment: ["Skanery 3D", "Hexagon Absolute Arm", "TESA Micro-Hite 600", "Profilometr chropowatości"],
    software: ["Geomagic Control X", "PolyWorks", "HyperScan", "SAP QM", "Teamcenter"],
    skills: ["PPAP", "GD&T", "Incoming Inspection", "Supplier Quality", "Root Cause Analysis"]
  },
  {
    id: "cnh-qc-inspector",
    period: { pl: "02.2022 – 06.2024", en: "Feb 2022 – Jun 2024" },
    company: "CNH",
    role: { pl: "Kontroler Jakości", en: "Quality Inspector" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Monitorowanie procesów produkcyjnych i spawalniczych pod kątem zgodności z dokumentacją.",
        "Inspekcja jakości surowców, półproduktów i wyrobów gotowych.",
        "Identyfikacja, dokumentowanie i analiza niezgodności oraz ocena skuteczności działań naprawczych.",
        "Współpraca z sekcją Produkcji, Inżynierii oraz Spawalni."
      ],
      en: [
        "Monitoring production and welding processes for technical documentation compliance.",
        "Quality inspection of raw materials, semi-finished, and finished products.",
        "Identifying, documenting, and analyzing quality non-conformances and corrective action effectiveness.",
        "Cross-departmental collaboration with Production, Engineering, and Welding departments."
      ]
    },
    equipment: ["Ręczne narzędzia pomiarowe", "Suwmiarki", "Mikrometry", "Średnicówki"],
    software: ["SAP"],
    skills: ["Process Inspection", "Welding Quality", "Problem Solving", "Corrective Actions"]
  },
  {
    id: "stalmech-qc",
    period: { pl: "09.2020 – 02.2022", en: "Sep 2020 – Feb 2022" },
    company: "STALMECH",
    role: { pl: "Kontroler Jakości", en: "Quality Inspector" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Kontrola wizualna i wymiarowa wyrobów gotowych i detali fabrykowanych.",
        "Podejmowanie decyzji o akceptacji/odrzuceniu komponentów.",
        "Raportowanie wyników inspekcji oraz współpraca z Działem Technologii."
      ],
      en: [
        "Visual and dimensional inspection of finished products and fabricated components.",
        "Making formal accept/reject decisions for component lots.",
        "Reporting inspection results and collaborating with Process Engineering."
      ]
    },
    equipment: ["Narzędzia ręczne", "Kątomierze", "Głębokościomierze"],
    software: ["MS Office"],
    skills: ["Quality Control", "Technical Drawing", "Non-Conformance Reporting"]
  },
  {
    id: "stalmech-foreman",
    period: { pl: "02.2019 – 09.2020", en: "Feb 2019 – Sep 2020" },
    company: "STALMECH",
    role: { pl: "Brygadzista Spawalni Automatycznej / Lider Zespołu", en: "Automated Welding Shop Foreman / Team Leader" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Zarządzanie zespołem produkcyjnym liczącym ok. 30 pracowników.",
        "Planowanie pracy spawalni automatycznej, rozliczanie harmonogramów i kontrola wskaźników BHP.",
        "Nadzór nad jakością spoin i zgodnością wyrobów z dokumentacją."
      ],
      en: [
        "Managing a production team of approx. 30 employees.",
        "Scheduling automated welding operations, monitoring shift outputs, and enforcing HSE standards.",
        "Supervising weld quality and technical drawing compliance."
      ]
    },
    equipment: ["Zautomatyzowane stanowiska spawalnicze"],
    software: ["ERP System"],
    skills: ["Team Leadership", "Production Planning", "Welding Oversight", "Safety Standards"]
  },
  {
    id: "vakpol-coord-2",
    period: { pl: "10.2018 – 06.2019", en: "Oct 2018 – Jun 2019" },
    company: "Vak-Pol&Gaz Sp. z o.o.",
    role: { pl: "Koordynator Procesów Produkcyjnych", en: "Production Process Coordinator" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Prowadzenie ~30 projektów jednocześnie (ramiona nalewcze, dachy pływające) od uzgodnień do odbiorów TDT.",
        "Organizacja prób ciśnieniowych i bezpośrednia współpraca z inspektorami Transportowego Dozoru Technicznego.",
        "Harmonogramowanie, zamawianie surowców i koordynacja prac montażowych."
      ],
      en: [
        "Managing ~30 concurrent projects (loading arms, floating roofs) from design to TDT technical acceptance.",
        "Organizing pressure tests and coordinating directly with Transport Technical Inspection (TDT) inspectors.",
        "Scheduling, material procurement, and assembly team management."
      ]
    },
    equipment: ["Zestawy do prób ciśnieniowych", "Manometry kalibrowane"],
    software: ["ERP", "Autocad Viewer"],
    skills: ["TDT Approvals", "Pressure Testing", "Project Coordination", "Technical Documentation"]
  },
  {
    id: "nisbets-warehouse",
    period: { pl: "05.2017 – 09.2018", en: "May 2017 – Sep 2018" },
    company: "Nisbets",
    role: { pl: "Pracownik Magazynu / Operator Wózków", en: "Warehouse Associate / Reach Truck Operator" },
    location: "United Kingdom",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Obsługa magazynowych systemów WMS oraz skanerów kodów kreskowych.",
        "Praca na wózkach wysokiego składowania (Reach Truck) oraz elektrycznych wózkach paletowych (PPT).",
        "Kompletowanie zamówień (Order Picking) i kontrola dokładności stanów magazynowych."
      ],
      en: [
        "Operating WMS warehouse systems and RF barcode scanners.",
        "Operating Reach Trucks and Powered Pallet Trucks (PPT).",
        "Order picking, replenishment, and stock inventory accuracy management."
      ]
    },
    equipment: ["Wózki Reach Truck", "Wózki PPT", "Skanery RF"],
    software: ["WMS System"],
    skills: ["Logistics", "Inventory Control", "WMS Operations"]
  },
  {
    id: "vakpol-coord-1",
    period: { pl: "10.2015 – 05.2017", en: "Oct 2015 – May 2017" },
    company: "Vak-Pol&Gaz Sp. z o.o.",
    role: { pl: "Koordynator Procesów Produkcyjnych", en: "Production Process Coordinator" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Kompleksowe zarządzanie projektami aparatury paliwowo-gazowej i ramion nalewczych.",
        "Nadzór nad odbiorami technicznymi TDT i tworzenie dokumentacji końcowej."
      ],
      en: [
        "End-to-end management of fuel-gas equipment and loading arm production projects.",
        "Supervision of TDT technical sign-offs and preparation of final acceptance documentation."
      ]
    },
    equipment: ["Aparatura ciśnieniowa"],
    software: ["ERP"],
    skills: ["Project Management", "TDT Certification", "Quality Verification"]
  },
  {
    id: "cnh-technician",
    period: { pl: "10.2014 – 07.2015", en: "Oct 2014 – Jul 2015" },
    company: "CNH Industrial",
    role: { pl: "Technik Wydziału", en: "Department Manufacturing Technician" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Optymalizacja stanowisk pracy i procesów technologicznych pod kątem ergonomii i wydajności.",
        "Tworzenie instrukcji stanowiskowych oraz wdrażanie narzędzi Lean (5S, Kaizen, FMEA, 5 Why, Spaghetti Diagrams)."
      ],
      en: [
        "Optimization of workstations and technological processes for ergonomics and throughput.",
        "Standard work instruction creation and Lean tool implementation (5S, Kaizen, FMEA, 5 Why, Spaghetti Diagrams)."
      ]
    },
    equipment: ["Narzędzia pomiarowe ergonomii"],
    software: ["MS Office", "CAD Viewer"],
    skills: ["Lean Manufacturing", "Kaizen", "5S", "FMEA", "Process Optimization"]
  },
  {
    id: "adler-foreman",
    period: { pl: "01.2014 – 10.2014", en: "Jan 2014 – Oct 2014" },
    company: "Adler Polska",
    role: { pl: "Brygadzista Produkcji / Lider Zmiany", en: "Production Foreman / Shift Leader" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Zarządzanie podległym zespołem na zmianie produkcyjnej, realizacja planów ilościowych i jakościowych.",
        "Redukcja przestojów produkcyjnych we współpracy z Działem Utrzymania Ruchu i Jakości."
      ],
      en: [
        "Managing shift teams to hit target output and quality benchmarks.",
        "Minimizing downtime in coordination with Maintenance and Quality departments."
      ]
    },
    equipment: ["Linie produkcyjne"],
    software: ["ERP"],
    skills: ["Shift Management", "Downtime Reduction", "Production Control"]
  },
  {
    id: "adler-optimization",
    period: { pl: "09.2013 – 01.2014", en: "Sep 2013 – Jan 2014" },
    company: "Adler Polska",
    role: { pl: "Specjalista ds. optymalizacji procesów produkcyjnych", en: "Production Process Optimization Specialist" },
    location: "Płock, Mazowieckie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Analiza wskaźnika OEE (Overall Equipment Effectiveness) i identyfikacja strat produkcyjnych.",
        "Opracowywanie i wdrażanie działań usprawniających efektywność parku maszynowego."
      ],
      en: [
        "OEE (Overall Equipment Effectiveness) analysis and production loss identification.",
        "Designing and executing efficiency improvements for plant machinery."
      ]
    },
    equipment: ["Aparatura pomiarowa OEE"],
    software: ["MS Excel (Advanced)", "ERP"],
    skills: ["OEE Analysis", "Process Optimization", "Loss Elimination"]
  },
  {
    id: "fpt-qc-measurer",
    period: { pl: "01.2011 – 08.2013", en: "Jan 2011 – Aug 2013" },
    company: "Fiat Powertrain Technologies S.p.A.",
    role: { pl: "Kontroler Jakości, Auditor Procesu, Pomiarowiec", en: "Quality Inspector, Process Auditor & CMM Operator" },
    location: "Bielsko-Biała, Śląskie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Programowanie i obsługa współrzędnościowych maszyn pomiarowych CMM DEA w oprogramowaniu PC-DMIS.",
        "Pomiary chropowatości powierzchni profilometrem Taylor Hobson oraz wymiarowa kontrola komponentów silnikowych.",
        "Przeprowadzanie audytów wewnętrznych i audytów procesu zgodnie ze standardami koncernowymi FPT."
      ],
      en: [
        "Programming and operating CMM DEA coordinate measuring machines using PC-DMIS software.",
        "Surface roughness measurements via Taylor Hobson profilometer and precision dimensional inspection of engine parts.",
        "Executing internal and process audits in full compliance with corporate FPT standards."
      ]
    },
    equipment: ["CMM DEA", "Profilometr Taylor Hobson", "Średnicówki dwupunktowe/trójpunktowe", "Mikrometry"],
    software: ["PC-DMIS", "SAP QM"],
    skills: ["CMM Programming", "PC-DMIS", "Process Auditing", "Roughness Metrology", "GD&T"]
  },
  {
    id: "fpt-cnc-operator",
    period: { pl: "12.2008 – 01.2011", en: "Dec 2008 – Jan 2011" },
    company: "Fiat-GM Powertrain Polska",
    role: { pl: "Operator Linii Automatycznej CNC", en: "Automated CNC Line Operator" },
    location: "Bielsko-Biała, Śląskie, Poland",
    employmentType: { pl: "Pełny etat", en: "Full-time" },
    responsibilities: {
      pl: [
        "Obsługa automatycznej linii CNC do obróbki bloków i korpusów silników samochodowych.",
        "Samokontrola wymiarowa i bieżąca weryfikacja parametrów geometrycznych wyrobów."
      ],
      en: [
        "Operating an automated CNC machining line for automotive engine blocks and components.",
        "In-process dimensional self-inspection and machining tolerance monitoring."
      ]
    },
    equipment: ["Linia obróbcza CNC", "Ręczne przyrządy pomiarowe"],
    software: ["CNC Control Panels"],
    skills: ["CNC Machining", "In-Process Inspection", "Automotive Quality"]
  },
  {
    id: "italmet-tech",
    period: { pl: "07.2005 – 07.2008", en: "Jul 2005 – Jul 2008" },
    company: "Ital-Met I.M. Racing S.C.",
    role: { pl: "Pracownik Obsługi Technicznej / Selekcjoner Jakości", en: "Technical Support / Quality Inspector" },
    location: "Bielsko-Biała, Śląskie, Poland",
    employmentType: { pl: "Część etatu", en: "Part-time" },
    responsibilities: {
      pl: [
        "Selekcja i kontrola jakości komponentów silnikowych (głowice, korpusy, zawory, układy EGR).",
        "Prowadzenie badań szczelności oraz testów penetracyjnych NDT."
      ],
      en: [
        "Sorting and quality inspection of automotive engine parts (cylinder heads, blocks, valves, EGR valves).",
        "Performing leak detection tests and NDT dye penetrant inspection."
      ]
    },
    equipment: ["Stanowiska do badań szczelności", "Zestawy NDT"],
    software: [],
    skills: ["NDT Penetrant Testing", "Leak Testing", "Component Sorting"]
  }
];

export const certificatesData = [
  {
    category: { pl: "Jakość & AIAG Core Tools", en: "Quality & AIAG Core Tools" },
    items: [
      {
        title: "AIAG and VDA FMEA: Essentials for Transitioning",
        issuer: "AIAG - Automotive Industry Action Group",
        date: "2026-07",
        desc: {
          pl: "Przejście z AIAG FMEA (4. edycja) na zharmonizowane podejście AIAG & VDA FMEA. 7-etapowy proces FMEA, analiza ryzyka i plany działań.",
          en: "Transition from AIAG 4th ed. to harmonized AIAG & VDA FMEA standard. 7-step FMEA process and risk analysis."
        }
      },
      {
        title: "APQP/PPAP e-Learning",
        issuer: "AIAG - Automotive Industry Action Group",
        date: "2026-07",
        desc: {
          pl: "Zaawansowane Planowanie Jakości Wyrobu (APQP) oraz Proces Zatwierdzenia Części do Produkcji (PPAP).",
          en: "Advanced Product Quality Planning (APQP) and Production Part Approval Process (PPAP)."
        }
      },
      {
        title: "Failure Mode and Effects Analysis: Introduction",
        issuer: "AIAG - Automotive Industry Action Group",
        date: "2026-07",
        desc: { pl: "Identyfikacja ryzyka, analiza funkcji, przyczyn i skutków uszkodzeń w motoryzacji.", en: "Risk identification, failure mode cause-and-effect analysis in automotive quality." }
      },
      {
        title: "Introduction to APQP e-Learning",
        issuer: "AIAG",
        date: "2026-07",
        desc: { pl: "Założenia APQP, rozwój produktu i integracja z AIAG Core Tools.", en: "APQP framework, product development, and Core Tools integration." }
      },
      {
        title: "Introduction to Control Plan e-Learning",
        issuer: "AIAG",
        date: "2026-07",
        desc: { pl: "Zasady tworzenia i stosowania planów kontroli oraz powiązanie z FMEA, MSA, SPC i PPAP.", en: "Creating and applying Control Plans linked with FMEA, MSA, SPC, and PPAP." }
      },
      {
        title: "MSA e-Learning (Measurement Systems Analysis)",
        issuer: "AIAG",
        date: "2026-07",
        desc: { pl: "Ocena zdolności systemów pomiarowych, badania Gage R&R, powtarzalność i odtwarzalność.", en: "Measurement systems capability analysis, Gage R&R, repeatability and reproducibility." }
      },
      {
        title: "SPC e-Learning (Statistical Process Control)",
        issuer: "AIAG",
        date: "2026-07",
        desc: { pl: "Statystyczne Sterowanie Procesem, karty kontrolne, analiza zmienności i zdolności procesowej.", en: "Statistical Process Control, control charts, process capability and variation analysis." }
      },
      {
        title: "Quality Core Tools – Connect the Dots",
        issuer: "AIAG",
        date: "2026-07",
        desc: { pl: "Wzajemna integracja APQP, PPAP, FMEA, MSA, SPC oraz Control Plan w praktyce.", en: "Holistic integration of APQP, PPAP, FMEA, MSA, SPC, and Control Plan." }
      },
      {
        title: "Audytor Wewnętrzny ISO 9001:2015",
        issuer: "Quality Asia Certifications",
        date: "2026-06",
        credentialId: "IAC-08927",
        desc: { pl: "Prowadzenie audytów wewnętrznych systemów QMS, ocena zgodności procesów i analiza niezgodności.", en: "Internal auditing of QMS systems, process compliance assessment, and audit reporting." }
      }
    ]
  },
  {
    category: { pl: "Six Sigma & Systemy ERP/UNIDO", en: "Six Sigma & ERP/UNIDO Systems" },
    items: [
      {
        title: "Certified Six Sigma White Belt",
        issuer: "The Council for Six Sigma Certification (CSSC)",
        date: "2026-07",
        credentialId: "fMp6ZaYDDO",
        desc: { pl: "Znajomość metodologii Six Sigma, cyklu DMAIC, redukcji zmienności i analizy danych.", en: "Six Sigma methodology, DMAIC cycle, variability reduction, and process optimization." }
      },
      {
        title: "Introduction to Six Sigma",
        issuer: "Simplilearn",
        date: "2026-07",
        credentialId: "10434222",
        desc: { pl: "Podstawy Six Sigma, analiza przyczyn korzeniowych (RCA) i eliminacja niezgodności.", en: "Six Sigma foundations, root cause analysis, and non-conformance reduction." }
      },
      {
        title: "Applying SAP S/4HANA Quality Management",
        issuer: "SAP",
        date: "2026-07",
        desc: { pl: "Planowanie i kontrole jakości w SAP S/4HANA QM, zarządzanie reklamacjami i integracja z zakupami/produkcją.", en: "Quality planning and inspection in SAP S/4HANA QM, claims management, and module integration." }
      },
      {
        title: "Quality Management & Quality Certification",
        issuer: "UNIDO (United Nations Industrial Development Organization)",
        date: "2026-06",
        credentialId: "54SJH62KBA",
        desc: { pl: "Systemy zarządzania jakością, infrastruktura metrologiczna, akredytacja i ocena zgodności.", en: "Quality management systems, metrology infrastructure, accreditation, and conformity assessment." }
      },
      {
        title: "Sustainable Supply Chain Management (SSCM)",
        issuer: "UNIDO",
        date: "2026-06",
        desc: { pl: "Zarządzanie ryzykiem w łańcuchu dostaw, ESG, gospodarka o obiegu zamkniętym.", en: "Supply chain risk management, ESG standards, and circular economy integration." }
      },
      {
        title: "Managing Innovation",
        issuer: "UNIDO",
        date: "2026-06",
        credentialId: "SHHbSl03IX",
        desc: { pl: "Zarządzanie systemem innowacji (IMS), audyty innowacji i ciągłe doskonalenie.", en: "Innovation Management System (IMS), internal innovation audits, and continuous improvement." }
      }
    ]
  },
  {
    category: { pl: "Nowoczesne Technologie & Języki", en: "Modern Technologies & Languages" },
    items: [
      {
        title: "Certyfikat Google – Wykorzystanie AI w rozwoju firmy",
        issuer: "Google / SGH (Umiejętności Jutra AI)",
        date: "2026-06",
        credentialId: "f8823ba1-198e-471b-b6a4-a920d58fce58",
        score: "98% (49/50 pts)",
        desc: { pl: "Generatywne AI, Prompt Engineering, Gemini, NotebookLM, automatyzacja n8n/Make.com.", en: "Generative AI, Prompt Engineering, Gemini, NotebookLM, workflow automation via n8n/Make." }
      },
      {
        title: "Business English C2 Certification",
        issuer: "Saylor Academy (Saylor University, USA)",
        date: "2026-06",
        credentialId: "5064309292MW",
        desc: { pl: "Biegła komunikacja biznesowa i techniczna w języku angielskim na poziomie C2.", en: "Mastery of professional and technical business communication in English (C2 Level)." }
      },
      {
        title: "Russian Language Certification",
        issuer: "DigitalUni Russian Club",
        date: "2026-06",
        desc: { pl: "Komunikacja językowa, teksty techniczne i użytkowe w języku rosyjskim.", en: "Language communication and technical comprehension in Russian." }
      }
    ]
  }
];
