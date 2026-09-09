// Source of truth for Mohomed Ashfak's portfolio.
// Content is aligned to the current CV — no invented jobs, clients, or metrics.

const asset = (path) =>
  `${process.env.PUBLIC_URL || ""}/${String(path).replace(/^\.\//, "")}`;

export const personalInfo = {
  name: "Mohomed Ashfak",
  firstName: "Ashfak",
  title: "Software Engineer",
  eyebrow: "Software Engineer / Backend / Automation",
  location: "Kurunegala, Sri Lanka",
  email: "ashfak25321@gmail.com",
  phone: "+94 71 910 1215",
  whatsapp:
    "https://wa.me/94719101215?text=Hi%20Mohomed%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",
  linkedin: "https://www.linkedin.com/in/mohomedashfak09823a/",
  github: "https://github.com/ashmhmd25321",
  summary:
    "I build backend services, full-stack applications, and production web automation — Python, Java, PHP, Laravel, Spring Boot, and AWS — with a bias toward reliable features and systems teams can actually run.",
  longSummary:
    "Software engineer with 5+ years of experience building backend services, full-stack applications, and production web automation. Strong in Python, Java, PHP, REST APIs, Laravel, Spring Boot, Selenium, Playwright, Shopify integrations, and AWS (EC2, S3). Known for shipping reliable features, fixing production issues, writing maintainable automation, and working independently with remote product, vendor, and operations teams.",
  profileImage: asset("./images/ashfak-standee-waist.png"),
  currentRole: "Web Automation Engineer, Elysion BPO",
  focus: "Backend · Full-stack · Web automation",
  availability: "Usually replies within a day · Remote with AU / NZ / KW teams",
  cvUrl: asset("./Mohomed_Ashfak_CV.pdf"),
  heroPitch:
    "5+ years shipping backends, full-stack products, and production web automation — Shopify into logistics, Playwright in production, live sites in Australia and Kuwait.",
};

export const flagshipIds = [1, 8, 3];

export const testimonials = [
  {
    name: "Miyuru Bhashitha",
    role: "Client",
    quote:
      "Highly recommended. They have done our project very well and the prices are very reasonable. During the project period they implemented all the new recommendations we mentioned.",
  },
  {
    name: "Pansilu Perera",
    role: "Client",
    quote:
      "They helped with a project I was stuck on for months. They contacted me often, gave me updates, got my feedback and made sure my task was properly completed.",
  },
  {
    name: "Naveen Lankesha",
    role: "Client",
    quote:
      "Highly recommended. We had the opportunity to complete two projects with them, and both were delivered with exceptional quality and professionalism.",
  },
];

export const identityPanel = [
  { label: "Role", value: "Software Engineer" },
  { label: "Focus", value: "Backend / Full-stack / Automation" },
  { label: "Location", value: "Kurunegala, Sri Lanka" },
  { label: "Now", value: "Elysion BPO · Scroll" },
];

export const skills = [
  {
    category: "Languages",
    technologies: ["Python", "Java", "PHP", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend & APIs",
    technologies: [
      "Node.js",
      "Express",
      "Laravel",
      "Spring Boot",
      "Flask",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
      "Webhooks",
    ],
  },
  {
    category: "Web Automation",
    technologies: ["Selenium", "Playwright"],
  },
  {
    category: "Frontend & Mobile",
    technologies: ["React", "Tailwind CSS", "Angular", "Flutter", "React Native"],
  },
  {
    category: "Databases",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
  },
  {
    category: "Cloud & Tools",
    technologies: ["AWS EC2", "AWS S3", "Docker", "Nginx", "Git", "Heroku"],
  },
  {
    category: "Integrations",
    technologies: ["Shopify", "Stripe", "MyFatoorah"],
  },
  {
    category: "Machine Learning",
    technologies: ["TensorFlow", "Pandas", "NumPy", "NLP", "OpenCV", "Scikit-learn"],
  },
];

export const skillDetails = {
  Python: {
    blurb: "Production browser automation at Elysion BPO, plus ML-backed product work.",
    related: [7],
  },
  Java: {
    blurb: "Spring Boot services for Skill Exchange, LearnHub, and a role-based store.",
    related: [5, 8, 9],
  },
  PHP: {
    blurb: "Laravel logistics work at Scroll, and a JWT REST API for a cleaning app.",
    related: [1, 4],
  },
  JavaScript: {
    blurb: "Automation scripts and full-stack product surfaces.",
    related: [2, 3, 8, 10, 11],
  },
  TypeScript: {
    blurb: "Typed automation at Elysion and the Omaru Farm storefront.",
    related: [3],
  },
  SQL: {
    blurb: "Query work across MySQL and PostgreSQL backends — including a 25% faster cleaning-app API.",
    related: [1, 2, 3, 4, 5, 8, 9, 11],
  },
  "Node.js": {
    blurb: "Service layer for Sakura, Omaru, PCMart, and the clothing POS.",
    related: [2, 3, 10, 11],
  },
  Express: {
    blurb: "API layer for the commercial cleaning and farm platforms.",
    related: [2, 3],
  },
  Laravel: {
    blurb: "Logistics platform at Scroll — driver APIs, admin, Shopify sync, Proof of Delivery.",
    related: [1],
  },
  "Spring Boot": {
    blurb: "Backend for Skill Exchange and LearnHub, plus a role-based e-commerce MVC app.",
    related: [5, 8, 9],
  },
  Flask: {
    blurb: "AWS-hosted models behind the chronic disease risk app.",
    related: [7],
  },
  "REST APIs": {
    blurb: "The through-line — logistics, commercial sites, mobile backends.",
    related: [1, 2, 3, 4, 5, 8, 9],
  },
  JWT: {
    blurb: "Token auth on LearnHub and the PHP cleaning-app API.",
    related: [4, 9],
  },
  "OAuth 2.0": {
    blurb: "Shopify OAuth for order sync into the logistics platform.",
    related: [1],
  },
  Webhooks: {
    blurb: "Shopify webhooks so orders land in the vendor Integrations UI.",
    related: [1],
  },
  Selenium: {
    blurb: "Production browser automation for repetitive web workflows at Elysion BPO.",
    related: [],
  },
  Playwright: {
    blurb: "Stable selectors, waits, and error handling for sites that keep changing.",
    related: [],
  },
  React: {
    blurb: "Skill Exchange, LearnHub, PCMart, Sakura, Omaru, and the clothing POS.",
    related: [2, 3, 8, 9, 10, 11],
  },
  "Tailwind CSS": {
    blurb: "Utility-first styling on React product surfaces, including LearnHub.",
    related: [2, 3, 9],
  },
  Angular: {
    blurb: "Production front-ends at SkyMax Solutions and ICT OPTION.",
    related: [],
  },
  Flutter: {
    blurb: "Driver-side delivery flows, travel landmark detection, and the Chrono app.",
    related: [1, 6, 7],
  },
  "React Native": {
    blurb: "Driving Emergency — GPS, alerts, and location sharing for drivers.",
    related: [12],
  },
  MySQL: {
    blurb: "Primary store for logistics, Skill Exchange, LearnHub, and commercial sites.",
    related: [1, 2, 3, 4, 5, 8, 9],
  },
  PostgreSQL: {
    blurb: "Relational work alongside MySQL in backend services.",
    related: [],
  },
  MongoDB: {
    blurb: "Document storage when the shape of the data needs to move.",
    related: [],
  },
  Firebase: {
    blurb: "Pocket Guide and the Driving Emergency mobile app.",
    related: [6, 12],
  },
  SQLite: {
    blurb: "Local and lightweight persistence in app and automation work.",
    related: [],
  },
  "AWS EC2": {
    blurb: "Production delivery for the Laravel logistics platform and Chrono models.",
    related: [1, 7],
  },
  "AWS S3": {
    blurb: "Proof of Delivery photos and signatures for Scroll vendors.",
    related: [1],
  },
  Docker: {
    blurb: "Containerized delivery for Skill Exchange.",
    related: [8],
  },
  Nginx: {
    blurb: "Reverse proxy and SSL for Sakura Global on Contabo.",
    related: [2],
  },
  Git: {
    blurb: "Version control across every chapter of the work.",
    related: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  Heroku: {
    blurb: "Hosted the NLP chatbot alongside the Pocket Guide travel app.",
    related: [6],
  },
  Shopify: {
    blurb: "OAuth, webhooks, and order sync from Shopify into NSD / TryVengo.",
    related: [1],
  },
  Stripe: {
    blurb: "Skill Exchange credits and Omaru Farm checkout; earlier, Megabliss mobile payments.",
    related: [3, 8],
  },
  MyFatoorah: {
    blurb: "Payment-link handling on the Kuwait logistics platform.",
    related: [1],
  },
  TensorFlow: {
    blurb: "Deep-learning features in mobile products at ICT OPTION and freelance work.",
    related: [6, 7],
  },
  Pandas: {
    blurb: "Data analysis behind ML models and the Chrono risk app.",
    related: [7],
  },
  NumPy: {
    blurb: "Numerical work for sensor data and forecasting models.",
    related: [7],
  },
  NLP: {
    blurb: "Chatbot for Sri Lankan landmarks in Pocket Guide.",
    related: [6],
  },
  OpenCV: {
    blurb: "Image recognition for travel landmarks.",
    related: [6],
  },
  "Scikit-learn": {
    blurb: "Classical ML for analysis, pattern recognition, and automation.",
    related: [7],
  },
};

export const projects = [
  {
    id: 1,
    number: "01",
    name: "NSD / TryVengo",
    subtitle: "Logistics delivery platform",
    category: "Logistics / Integrations",
    role: "Backend developer",
    owned:
      "I owned Shopify sync, Proof of Delivery, and AWS production delivery on the Laravel platform.",
    description:
      "Shopify order sync and Proof of Delivery — signature, photos, per-vendor controls — on a Laravel logistics platform running on AWS.",
    overview:
      "Orders have to leave Shopify and arrive in a logistics platform without getting lost, and drivers have to prove a delivery happened. NSD / TryVengo is that pipe: sync, duty, proof, and admin.",
    problem:
      "Vendors needed Shopify orders in the logistics system, and deliveries needed a signature and photo trail that could be required or skipped per vendor.",
    solution:
      "OAuth and webhooks for Shopify sync, a vendor Integrations UI, Proof of Delivery with AWS S3 storage, and MyFatoorah payment-link handling for driver and admin flows.",
    architecture:
      "Laravel · MySQL · AWS EC2 / S3 · REST APIs · Shopify OAuth & webhooks · Flutter driver app · MyFatoorah.",
    focus: [
      "Shopify order sync",
      "Proof of Delivery",
      "Per-vendor signature toggle",
      "Driver and admin flows",
      "MyFatoorah payment links",
    ],
    technologies: ["Laravel", "MySQL", "AWS EC2", "AWS S3", "REST APIs", "Shopify", "Flutter", "MyFatoorah"],
    demoUrl: "https://admin.nsdkw.com",
    githubUrl: null,
    image: asset("./images/projects/nsd.jpg"),
    screenshots: [asset("./images/projects/nsd.jpg")],
    featured: true,
  },
  {
    id: 2,
    number: "02",
    name: "Sakura Global",
    subtitle: "Commercial cleaning website",
    category: "Web / Services",
    role: "Full-stack developer",
    description:
      "A full-stack commercial cleaning site with service pages, contact inquiries, admin content management, and SEO — Nginx and SSL on Contabo.",
    overview:
      "A cleaning company needs a site that can take inquiries and let the team update content without a developer in the loop. Sakura Global is that commercial surface.",
    problem:
      "Service businesses stall when the website is a static brochure — no inquiries, no CMS, no search presence.",
    solution:
      "React + Node.js/Express + MySQL, with service pages, contact inquiries, admin content management, and SEO, hosted on Contabo behind Nginx with SSL.",
    architecture:
      "React · Node.js / Express · MySQL · Nginx · SSL · Contabo.",
    focus: [
      "Service pages",
      "Contact inquiries",
      "Admin CMS",
      "SEO",
      "Nginx + SSL",
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "Nginx"],
    demoUrl: "https://sakuraglobal.com.au",
    githubUrl: null,
    image: asset("./images/projects/sakura.jpg"),
    screenshots: [asset("./images/projects/sakura.jpg")],
    featured: false,
  },
  {
    id: 3,
    number: "03",
    name: "Omaru Farm",
    subtitle: "Farm e-commerce and booking",
    category: "Commerce / Booking",
    role: "Full-stack developer",
    owned:
      "I built and deployed the farm store and booking platform — Stripe, CMS, AusPost — live at omarufarms.com.au.",
    description:
      "A farm e-commerce and booking platform with Stripe, customer accounts, admin CMS, refunds, AusPost shipping, and WhatsApp enquiries.",
    overview:
      "A farm that sells and books needs more than a catalog. Omaru is checkout, accounts, shipping, refunds, and a way for customers to enquire — in one product.",
    problem:
      "Farm commerce mixes products, bookings, shipping, and questions. Split those across tools and the operation falls apart.",
    solution:
      "React + TypeScript storefront with Node.js/Express and MySQL, Stripe payments, customer accounts, admin CMS, refunds, AusPost shipping, and WhatsApp enquiries on Contabo.",
    architecture:
      "React · TypeScript · Node.js / Express · MySQL · Stripe · AusPost · Contabo.",
    focus: [
      "Stripe payments",
      "Customer accounts",
      "Admin CMS",
      "Refunds",
      "AusPost shipping",
      "WhatsApp enquiries",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Stripe"],
    demoUrl: "https://omarufarms.com.au",
    githubUrl: null,
    image: asset("./images/projects/omaru.jpg"),
    screenshots: [asset("./images/projects/omaru.jpg")],
    featured: true,
  },
  {
    id: 4,
    number: "04",
    name: "Cleaning App REST API",
    category: "API / Mobile backend",
    role: "Backend developer",
    description:
      "A PHP REST API with JWT authentication and query work that improved response times by 25%.",
    overview:
      "A cleaning mobile app needs a backend that authenticates users and stays fast under real queries. This API is that layer.",
    problem:
      "Mobile clients were waiting on an API that had no token auth and unoptimized SQL.",
    solution:
      "PHP + MySQL with JWT authentication and optimized queries — 25% faster responses.",
    architecture: "PHP · MySQL · JWT.",
    focus: ["JWT authentication", "Optimized SQL", "Mobile API"],
    technologies: ["PHP", "MySQL", "JWT"],
    demoUrl: null,
    githubUrl: "https://github.com/ashmhmd25321/php_restAPI",
    image: asset("./images/projects/php-rest-api.png"),
    screenshots: [asset("./images/projects/php-rest-api.png")],
    featured: false,
  },
  {
    id: 5,
    number: "05",
    name: "Role-Based E-Commerce",
    category: "Commerce / MVC",
    role: "Full-stack developer",
    description:
      "An MVC e-commerce platform with product management, dashboards, and authentication for admin, seller, and buyer roles.",
    overview:
      "Three roles on one catalog — admin, seller, buyer — each with a different dashboard. Spring Boot MVC holds that together.",
    problem:
      "A store with sellers and buyers collapses if everyone shares the same surface.",
    solution:
      "Java / Spring Boot / MySQL with product management, role dashboards, and authentication per role.",
    architecture: "Java · Spring Boot · MySQL · MVC.",
    focus: ["Product management", "Role dashboards", "Admin / seller / buyer auth"],
    technologies: ["Java", "Spring Boot", "MySQL"],
    demoUrl: null,
    githubUrl: "https://github.com/ashmhmd25321/EcommerceWebWithSpringBoot",
    image: asset("./images/projects/spring-ecommerce.png"),
    screenshots: [asset("./images/projects/spring-ecommerce.png")],
    featured: false,
  },
  {
    id: 6,
    number: "06",
    name: "Pocket Guide",
    subtitle: "Travel landmark detection + NLP chatbot",
    category: "Mobile / ML",
    role: "Mobile & ML engineer",
    description:
      "An image-recognition travel app and NLP chatbot for Sri Lankan landmarks, deployed on Firebase and Heroku.",
    overview:
      "Visitors standing in front of a landmark should be able to point a camera and ask a question. Pocket Guide is that pair: vision plus an NLP chatbot.",
    problem:
      "Travel apps list places. They rarely recognize the place you are looking at, or answer a question about it.",
    solution:
      "Flutter image recognition for Sri Lankan landmarks, with an NLP chatbot, deployed on Firebase and Heroku.",
    architecture: "Flutter · NLP · Firebase · Heroku.",
    focus: ["Landmark image recognition", "NLP chatbot", "Firebase + Heroku"],
    technologies: ["Flutter", "NLP", "Firebase", "OpenCV"],
    demoUrl: null,
    githubUrl: "https://github.com/ashmhmd25321/Pocket_Guide_Travel_App",
    image: asset("./images/projects/pocket-guide.png"),
    screenshots: [asset("./images/projects/pocket-guide.png")],
    featured: false,
  },
  {
    id: 7,
    number: "07",
    name: "Chrono",
    subtitle: "Chronic disease risk app",
    category: "Mobile / ML",
    role: "Mobile & ML engineer",
    description:
      "Gyroscope and accelerometer analysis with AWS-hosted ML models and real-time heart-rate forecasting.",
    overview:
      "Sensor streams are only useful if a model can read them in time. Chrono takes motion data, runs it on AWS, and forecasts heart rate.",
    problem:
      "Phone sensors collect motion. Turning that into a health signal needs models that run off-device and come back fast enough to matter.",
    solution:
      "Flutter client with Flask models on AWS EC2 — gyroscope and accelerometer analysis plus real-time heart-rate forecasting.",
    architecture: "Flutter · Flask · AWS EC2 · Pandas / NumPy.",
    focus: ["Sensor analysis", "AWS-hosted models", "Heart-rate forecasting"],
    technologies: ["Flutter", "Flask", "AWS EC2", "Pandas", "NumPy"],
    demoUrl: null,
    githubUrl: "https://github.com/ashmhmd25321/Chrono_APP",
    image: asset("./images/projects/chrono.png"),
    screenshots: [asset("./images/projects/chrono.png")],
    featured: false,
  },
  {
    id: 8,
    number: "08",
    name: "Skill Exchange",
    subtitle: "Skills marketplace",
    category: "Marketplace / Real-time",
    role: "Full-stack engineer",
    owned:
      "I designed and shipped the product end to end — React, Spring Boot, Stripe, and real-time chat.",
    description:
      "A session-based marketplace where people trade knowledge — live chat, search, credits, and Stripe in one product.",
    overview:
      "Knowledge doesn't scale if the marketplace around it is clumsy. Skill Exchange is a two-way market: teach to earn credits, spend them to learn, book a session, talk, and settle payment without leaving the product.",
    problem:
      "Trading skills needs more than a listing page. Sessions have to be scheduled, conversations have to stay live, and money has to move without friction.",
    solution:
      "A React + Spring Boot system with MySQL, Docker, real-time chat, smart search, and Stripe — so discovery, booking, conversation, and checkout live in one flow.",
    architecture:
      "React client · Spring Boot APIs · MySQL · Dockerized services · Stripe · real-time chat · admin dashboard.",
    focus: [
      "Scheduled skill sessions",
      "Real-time chat",
      "Smart search",
      "Stripe payments",
      "Credits and top-up",
      "Admin operations",
    ],
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "Docker",
      "Stripe",
      "JWT",
    ],
    demoUrl: "https://skill-exchange.dreamware.lk/",
    githubUrl: null,
    image: asset("./images/skill-exchange-platform/feed page.png"),
    screenshots: [
      asset("./images/skill-exchange-platform/feed page.png"),
      asset("./images/skill-exchange-platform/sessions page.png"),
      asset("./images/skill-exchange-platform/skill management page.png"),
      asset("./images/skill-exchange-platform/credits and payments.png"),
      asset("./images/skill-exchange-platform/admin dashboard.png"),
      asset("./images/skill-exchange-platform/login.png"),
    ],
    featured: true,
  },
  {
    id: 9,
    number: "09",
    name: "LearnHub",
    subtitle: "Your Learning Companion",
    category: "Education / Platform",
    role: "Full-stack engineer",
    description:
      "A school platform for homework, submissions, grading, and role-based access — built for admins, teachers, students, and parents.",
    overview:
      "Schools need a single place to assign work, collect it, grade it, and keep the right people in the right rooms. LearnHub is that operating system.",
    problem:
      "Homework workflows break when roles collide — admins, teachers, students, and parents all need different surfaces on the same data.",
    solution:
      "A Spring Boot 3 / Java 17 backend with Spring Security and JWT, a React 18 frontend, MySQL, and role-based access — covering classes, submissions, grading, and user management.",
    architecture:
      "React 18 + Tailwind · Java 17 / Spring Boot 3.2 · JWT · MySQL · Vite.",
    focus: [
      "Homework lifecycle",
      "Student submissions",
      "Grading",
      "Role-based access",
      "Class management",
      "Admin dashboard",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "JWT",
      "React",
      "MySQL",
      "Tailwind CSS",
    ],
    demoUrl: "https://homework.dreamware.lk/",
    githubUrl: null,
    image: asset("./images/LearnHub/landing-page.png"),
    screenshots: [
      asset("./images/LearnHub/landing-page.png"),
      asset("./images/LearnHub/login.png"),
      asset("./images/LearnHub/adminDashboard.png"),
      asset("./images/LearnHub/classes-view.png"),
      asset("./images/LearnHub/usermanage.png"),
      asset("./images/LearnHub/profile.png"),
    ],
    featured: false,
  },
  {
    id: 10,
    number: "10",
    name: "PCMart",
    subtitle: "E-commerce for PC hardware",
    category: "Commerce / Catalog",
    role: "Full-stack engineer",
    description:
      "An e-commerce surface for PC hardware — filtering, comparison, inventory, and checkout.",
    overview:
      "Buying PC parts is a comparison problem disguised as a store. PCMart treats catalog, filter, compare, stock, and payment as one product instead of five disconnected pages.",
    problem:
      "Hardware shoppers need dense catalogs, honest comparison, and a checkout they trust — without losing inventory truth along the way.",
    solution:
      "A React + Node.js commerce platform with advanced filtering, product comparison, inventory management, and payment flows.",
    architecture:
      "React storefront · Node.js services · catalog filtering · comparison · inventory · payment integration.",
    focus: [
      "Advanced filtering",
      "Product comparison",
      "Inventory management",
      "Secure payments",
    ],
    technologies: ["React", "Node.js", "JavaScript"],
    demoUrl: "https://pcmart.templates.dreamware.lk",
    githubUrl: null,
    image: asset("./images/PCMart/Screenshot 2025-10-15 at 20.01.20.png"),
    screenshots: [
      asset("./images/PCMart/Screenshot 2025-10-15 at 20.01.20.png"),
      asset("./images/PCMart/Screenshot 2025-10-15 at 20.01.31.png"),
      asset("./images/PCMart/Screenshot 2025-10-15 at 20.01.46.png"),
      asset("./images/PCMart/Screenshot 2025-10-15 at 20.01.53.png"),
      asset("./images/PCMart/Screenshot 2025-10-15 at 20.02.03.png"),
      asset("./images/PCMart/Screenshot 2025-10-15 at 20.02.13.png"),
    ],
    featured: false,
  },
  {
    id: 11,
    number: "11",
    name: "Clothing POS",
    subtitle: "Retail point of sale",
    category: "POS / Retail",
    role: "Full-stack engineer",
    description:
      "A point-of-sale system for clothing stores — categories, suppliers, barcode scanning, and inventory.",
    overview:
      "A clothing counter needs the sale, the barcode, the stock, and the supplier on one surface. This POS is built for that shift.",
    problem:
      "Clothing retail breaks when inventory, suppliers, and the till are three different tools.",
    solution:
      "React + Node.js with category management, supplier tracking, barcode scanning, and POS flows — live at templates.pos.dreamware.lk.",
    architecture: "React · Node.js · inventory · barcode scanning · POS.",
    focus: [
      "Category management",
      "Supplier tracking",
      "Barcode scanning",
      "Inventory",
    ],
    technologies: ["React", "Node.js", "JavaScript"],
    demoUrl: "https://templates.pos.dreamware.lk/login",
    githubUrl: null,
    image: asset("./images/projects/clothing-pos.jpg"),
    screenshots: [asset("./images/projects/clothing-pos.jpg")],
    featured: false,
  },
  {
    id: 12,
    number: "12",
    name: "Driving Emergency",
    subtitle: "Driver assistance mobile app",
    category: "Mobile / Real-time",
    role: "Mobile engineer",
    description:
      "An emergency assistance app for drivers — real-time alerts, GPS location sharing, and emergency contacts.",
    overview:
      "When something goes wrong on the road, the driver needs a short path to help. This app is GPS, an alert, and the people who should know — in a few taps.",
    problem:
      "Emergency calls from the roadside lose location, contacts, and nearby help.",
    solution:
      "React Native + Firebase with maps, real-time notifications, location sharing, and emergency contact flows.",
    architecture: "React Native · Firebase · Maps API · real-time notifications.",
    focus: [
      "Real-time alerts",
      "GPS location sharing",
      "Emergency contacts",
      "Nearby help",
    ],
    technologies: ["React Native", "Firebase"],
    demoUrl: null,
    githubUrl: null,
    image: asset("./images/projects/emergency.jpg"),
    screenshots: [
      asset("./images/projects/emergency/home_page.jpg"),
      asset("./images/projects/emergency/welcome_page.jpg"),
      asset("./images/projects/emergency/Login_Page.jpg"),
      asset("./images/projects/emergency/alert_page.jpg"),
      asset("./images/projects/emergency/places_page.jpg"),
    ],
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "Elysion BPO",
    position: "Web Automation Engineer",
    duration: "11/2025 — Present",
    location: "Melbourne, Australia · Full-time",
    technologies: ["Python", "Selenium", "Playwright", "TypeScript"],
    description:
      "Production browser automation — reusable scripts, stable selectors, and test flows that survive websites changing underneath them.",
    achievements: [
      "Built and maintained production browser automation using Python, Selenium, and Playwright to complete repetitive web workflows with less manual effort",
      "Created reusable Python and JavaScript/TypeScript automation scripts with stable selectors, waits, validation, and error handling for changing websites",
      "Investigated flaky tests, website changes, and data issues; improved logging and test flows so failures were easier to find and fix",
    ],
  },
  {
    id: 2,
    company: "Scroll",
    position: "Backend Developer",
    duration: "01/2026 — Present",
    location: "Kuwait · Part-time, remote",
    technologies: ["Laravel", "Shopify", "AWS EC2", "AWS S3", "OAuth 2.0"],
    description:
      "Laravel logistics platform — Shopify sync, Proof of Delivery, and AWS production delivery for driver and vendor flows.",
    achievements: [
      "Built and deployed Shopify order sync with OAuth, webhooks, and a vendor Integrations UI so orders moved reliably from Shopify into the logistics platform",
      "Designed and shipped Proof of Delivery end to end: customer signature, delivery photos, AWS S3 storage, vendor/admin viewing, and a per-vendor toggle to require or skip signature collection",
      "Owned AWS EC2 production delivery for a Laravel platform covering driver APIs, admin settings, role permissions, and test data for live mobile duty and order flows",
      "Fixed production order visibility and PII issues so synced orders appeared correctly in admin and vendor portals",
    ],
  },
  {
    id: 3,
    company: "SkyMax Solutions",
    position: "Full-Stack Developer",
    duration: "12/2024 — 11/2025",
    location: "Negombo, Sri Lanka",
    technologies: ["Angular", "Spring Boot", "Flutter", "Firebase"],
    description:
      "Web and mobile products on Angular, Spring Boot, Flutter, and Firebase.",
    achievements: [
      "Developed and maintained web and mobile applications with Angular, Spring Boot, Flutter, and Firebase, improving performance and cross-platform compatibility",
      "Implemented REST APIs and real-time data features for e-commerce and service platforms, improving system responsiveness and user experience",
      "Integrated machine learning models for personalized recommendations and prediction features that supported more data-driven product decisions",
    ],
  },
  {
    id: 4,
    company: "Megabliss Worldwide",
    position: "Back-End Developer",
    duration: "10/2023 — 05/2024",
    location: "Auckland, New Zealand",
    technologies: ["Stripe", "Mobile APIs", "Agile"],
    description:
      "Backend and payments for a mobile product, working remotely with an international team.",
    achievements: [
      "Integrated the Stripe payment gateway into a mobile application, reducing abandoned carts by 20% through a smoother checkout flow",
      "Designed and delivered a bill-splitting feature that supports transactions among up to 10 users, increasing engagement and user satisfaction",
      "Worked in an Agile team to ship backend features on time with a focus on scalability and performance",
    ],
  },
  {
    id: 5,
    company: "ICT OPTION",
    position: "Full-Stack Software Developer",
    duration: "04/2021 — 06/2023",
    location: "Sri Lanka",
    technologies: ["Angular", "REST APIs", "Deep Learning"],
    description:
      "REST APIs for an Angular frontend, and mobile applications with deep-learning features.",
    achievements: [
      "Built REST APIs for real-time data exchange with an Angular frontend and improved response speed by 40% through optimized query handling",
      "Developed and deployed mobile applications with deep learning features for richer user experiences",
    ],
  },
  {
    id: 6,
    company: "Independent",
    position: "Freelance Software Developer",
    duration: "10/2021 — Present",
    location: "Remote",
    technologies: ["Full-stack", "Mobile", "Machine Learning"],
    description:
      "End-to-end web and mobile applications, plus machine-learning work, for clients under tight deadlines.",
    achievements: [
      "Delivered end-to-end web and mobile applications, covering frontend interfaces, backend services, and client communication",
      "Built machine learning models for data analysis, pattern recognition, and intelligent automation under tight deadlines",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "BSc in Software Engineering",
    institution: "Cardiff Metropolitan University",
    duration: "2023",
    grade: "Second Upper Class",
    description:
      "Software engineering with a focus on modern development practice, system design, and advanced programming.",
  },
  {
    id: 2,
    degree: "Higher Diploma (HD) in Software Engineering",
    institution: "ICBT Campus",
    duration: "2019",
    grade: "Second Upper Class",
    description:
      "Full-stack development, database management, and software architecture.",
  },
  {
    id: 3,
    degree: "Diploma in English",
    institution: "ESOFT Metro Campus",
    duration: "2015",
    grade: "Completed",
    description:
      "Professional English for international software environments.",
  },
  {
    id: 4,
    degree: "Diploma in IT with E-Commerce",
    institution: "ESOFT Metro Campus",
    duration: "2015",
    grade: "Completed",
    description:
      "Foundations in information technology and e-commerce systems.",
  },
];

export const processSteps = [
  {
    id: "01",
    title: "Understand the problem",
    text: "Before a line of code — who is this for, where does it break, and what would actually count as done.",
  },
  {
    id: "02",
    title: "Design the system",
    text: "APIs, data, auth, and the client as one architecture. Not a pile of features waiting to collide.",
  },
  {
    id: "03",
    title: "Build with intention",
    text: "Clean structure, named things, and the kind of code someone else can extend without calling at midnight.",
  },
  {
    id: "04",
    title: "Test the edges",
    text: "Payments, roles, empty states, flaky sites, slow networks. The product is what happens when the happy path is not available.",
  },
  {
    id: "05",
    title: "Ship",
    text: "AWS, Docker, Nginx, demo. A system that only exists on a laptop is still an idea.",
  },
  {
    id: "06",
    title: "Improve",
    text: "Measure, listen, refine. The first version is a hypothesis. The next ones are the work.",
  },
];

export const stats = [
  { label: "Building since", value: "2021" },
  { label: "Live products", value: "07" },
  { label: "Professional chapters", value: "06" },
  { label: "Disciplines", value: "Backend · Automation" },
];

export const marqueeItems = [
  "Software Engineering",
  "Backend Services",
  "Web Automation",
  "Full-Stack Systems",
  "Laravel · Spring Boot",
  "Shopify · Stripe",
  "AWS · Selenium · Playwright",
  "Build · Ship · Improve",
];

export const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
];
