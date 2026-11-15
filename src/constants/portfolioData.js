import profileImage from "../assets/images/shakeel.jpeg";
import brandLogo from "../assets/images/shakeel_logo.png";

export const SITE_METADATA = {
  brandName: "Shakeel Ahmed",
  fullName: "Shaik Shakeel Ahmed",
  roleTitle: "Senior Front-End, Next.js & React.js Developer",
  logo: brandLogo,
  logoAlt: "Shakeel Ahmed Logo",
  defaultTheme: "dark",
  themeStorageKey: "shakeel_portfolio_theme",
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const UI_LABELS = {
  themeToggle: {
    darkLabel: "Switch to Light Mode",
    lightLabel: "Switch to Dark Mode",
  },
  projects: {
    allFilter: "All Projects",
    searchPlaceholder: "Filter by project name or technology...",
    viewDetailsBtn: "View Architecture & Case Study",
    emptyState: "No projects match the selected filter criteria.",
    resetFilterBtn: "Reset Filters",
    modalLabels: {
      overview: "Project Overview",
      architecture: "Architecture & Engineering Contributions",
      deliverables: "Key Deliverables & Impact",
      techStack: "Technology Stack",
      closeBtn: "Close",
    },
  },
  skills: {
    allCategory: "All Skills",
    proficiencyLabel: "Proficiency",
  },
  contact: {
    copyText: "Copy",
    copiedText: "Copied!",
    openLinkText: "Open",
    formTitle: "Send a Direct Message",
    formSubtitle:
      "Fill out the quick form below to compose a pre-formatted email directly to my inbox.",
    fields: {
      nameLabel: "Your Name",
      namePlaceholder: "e.g., Sarah Jenkins",
      emailLabel: "Your Email",
      emailPlaceholder: "e.g., sarah@company.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g., Senior React.js / Next.js Opportunity",
      messageLabel: "Message",
      messagePlaceholder:
        "Hi Shakeel, I came across your portfolio and would love to discuss a role...",
    },
    submitBtn: "Compose Email",
    validationError: "Please fill in all required fields before sending.",
    successMessage: "Opening your email client with your pre-filled message!",
  },
  scrollToTop: "Scroll to top",
  errorBoundary: {
    title: "Something went wrong while rendering this view.",
    subtitle: "Please refresh the page or click below to recover.",
    retryBtn: "Try Again",
  },
  loadingFallback: "Loading portfolio modules...",
};

export const HERO_DATA = {
  sectionId: "home",
  greetingBadge: "6+ Years Experience • Dubai, UAE • Senior Front-End Developer",
  fullName: "Shaik Shakeel Ahmed",
  roles: [
    "Next.js & React.js Developer",
    "Senior Front-End Engineer",
    "UI Architecture Specialist",
  ],
  summary:
    "Front-End Developer with over 6+ years of experience building SEO-friendly, scalable, and user-centric web applications using Next.js, React.js, TypeScript, Tailwind CSS, shadcn/ui, Zustand, and Redux.",
  profileImage,
  profileImageAlt: "Shaik Shakeel Ahmed - Senior Front-End Developer",
  quickHighlights: [
    { icon: "layers", text: "Next.js SSR & Component Architecture" },
    { icon: "code", text: "React.js, TypeScript, Zustand & Redux" },
    { icon: "checkCircle", text: "Tailwind CSS, shadcn/ui & Radix UI" },
  ],
  primaryCta: {
    label: "Explore Case Studies",
    href: "#projects",
  },
  secondaryCta: {
    label: "Let's Talk",
    href: "#contact",
  },
};

export const ABOUT_DATA = {
  sectionId: "about",
  badge: "Executive Summary",
  title: "About Me",
  subtitle:
    "Bridging product vision and front-end engineering through scalable Next.js & React architectures, reusable component systems, and clean code.",
  paragraphs: [
    "Front-End Developer with over 6+ years of experience building responsive, user-centric web applications. Experienced in developing modern web solutions using Next.js, React.js, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Zustand, Redux, JavaScript (ES6+), HTML5, CSS3, SASS/SCSS, and Bootstrap.",
    "Hands-on experience developing SEO-friendly and high-performance applications with Next.js (SSR, dynamic imports, lazy loading, Core Web Vitals), integrating REST APIs with Axios, and managing dynamic content with Contentful CMS, Mapbox, and Azure Blob Storage—including multilingual English/Arabic RTL support.",
    "Proficient in translating UI/UX designs and wireframes into pixel-perfect interfaces, reusable component libraries, and mobile-first layouts across PropTech/Hospitality, Healthcare, EdTech, and E-Commerce domains within Agile/Scrum teams.",
  ],
  highlights: [
    {
      value: "6+",
      label: "Years of Experience",
      detail: "May 2019 – Present",
    },
    {
      value: "4",
      label: "Product & IT Companies",
      detail: "WeStay, Careersmith, Cognizant & CodeOn",
    },
    {
      value: "20+",
      label: "Core Technologies",
      detail: "Next.js, React, TS, Tailwind & CMS",
    },
    {
      value: "EN/AR",
      label: "Multilingual & RTL",
      detail: "Accessible & Cross-Browser UI",
    },
  ],
  pillars: [
    {
      id: "architecture",
      icon: "layers",
      title: "Scalable UI Architecture",
      description:
        "Designing reusable component libraries with Next.js, React.js, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Zustand, and Redux.",
    },
    {
      id: "performance",
      icon: "code",
      title: "SSR & Core Web Vitals",
      description:
        "Optimizing SEO and load performance using Server-Side Rendering (SSR), dynamic imports, lazy loading, image optimization, and unit testing.",
    },
    {
      id: "collaboration",
      icon: "tools",
      title: "CMS & Enterprise Workflows",
      description:
        "Integrating REST APIs, Contentful CMS, Mapbox, Azure Blob Storage, authentication, and multilingual English/Arabic RTL experiences in Agile teams.",
    },
  ],
};

export const EXPERIENCE_DATA = {
  sectionId: "experience",
  badge: "Career Journey",
  title: "Professional Experience & Impact",
  subtitle:
    "Over 6+ years of progressive front-end engineering experience across Dubai and India (May 2019 – Present).",
  timeline: [
    {
      id: "exp-westay",
      role: "Frontend Developer — WeStay",
      period: "Nov 2025 – Present",
      focus: "WeStay • Dubai, United Arab Emirates",
      summary:
        "Developing customer-facing, Admin, and Catalogue applications using Next.js, React.js, TypeScript, Tailwind CSS, and Zustand for modern property management and hospitality workflows.",
      achievements: [
        "Developed customer-facing, Admin, and Catalogue applications using Next.js, React, TypeScript, Tailwind CSS, and Zustand.",
        "Integrated REST APIs using Axios, implementing CRUD operations, authentication, search, filtering, loading/error handling, and complex business workflows.",
        "Built reusable and responsive UI components using Tailwind CSS, shadcn/ui, and Radix UI across property management, booking, customer, pricing, CMS, media, and approval/review workflows.",
        "Integrated Contentful CMS, Mapbox, and Azure Blob Storage, and implemented multilingual English/Arabic RTL support.",
        "Drove performance optimization using Server-Side Rendering (SSR), dynamic imports, lazy loading, image optimization, and Core Web Vitals enhancements.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "Zustand",
        "Axios",
        "Contentful CMS",
        "Mapbox",
        "Azure Blob Storage",
        "English/Arabic RTL",
      ],
    },
    {
      id: "exp-careersmith",
      role: "React.js Developer — Careersmith Edu Tech Pvt Ltd",
      period: "Jun 2024 – Jun 2025",
      focus: "Careersmith Edu Tech Pvt Ltd • Tirupati, Andhra Pradesh, India",
      summary:
        "Engineered dynamic and responsive web applications using React.js, enhancing the user experience across multiple devices with reusable component libraries.",
      achievements: [
        "Engineered dynamic, responsive web applications using React.js and modern JavaScript (ES6+), enhancing user experience across desktop and mobile devices.",
        "Developed reusable UI components that improved code maintainability and optimized overall application rendering performance.",
        "Integrated RESTful APIs in close collaboration with UX designers and backend teams to deliver seamless, data-driven user interfaces.",
        "Ensured cross-browser compatibility, conducted rigorous unit testing to maintain high quality standards, and managed version control with Git in an Agile environment.",
      ],
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "Redux",
        "Context API",
        "RESTful APIs",
        "Unit Testing",
        "Git",
        "Agile / Scrum",
      ],
    },
    {
      id: "exp-cognizant",
      role: "UI Developer — Cognizant",
      period: "Feb 2021 – Jan 2024 (3 Years)",
      focus: "Cognizant • India",
      summary:
        "Developed high-quality user-facing features and reusable component libraries for enterprise platforms using React.js, JavaScript, HTML5, CSS3, SASS, and jQuery.",
      achievements: [
        "Developed high-quality user-facing features using React.js, JavaScript, HTML5, CSS3, SASS, and jQuery for enterprise healthcare and clinical platforms.",
        "Built reusable code and UI libraries to enhance application speed, maintainability, and cross-browser compatibility.",
        "Collaborated closely with backend engineers to establish JSON-based REST APIs for seamless data integration, gathered requirements, and coordinated module delivery.",
        "Conducted unit testing to verify module functionality and resolved complex UI/UX issues effectively across sprints.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3 / SASS",
        "jQuery",
        "JSON / REST APIs",
        "Bootstrap",
        "Unit Testing",
      ],
    },
    {
      id: "exp-codeon",
      role: "UI Developer — CodeOn Technologies",
      period: "May 2019 – Nov 2020 (1 Year 7 Months)",
      focus: "CodeOn Technologies • India",
      summary:
        "Enhanced interactive web components and delivered pixel-perfect, responsive designs aligned with modern web standards.",
      achievements: [
        "Enhanced interactive web components using HTML5, CSS3, JavaScript, and jQuery, implementing smooth UI animations and interactive plugins.",
        "Delivered pixel-perfect, mobile-first responsive designs aligned with modern web standards and cross-browser requirements.",
        "Collaborated closely with UX designers and backend teams to ensure client expectations and project milestones were met effectively.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Responsive Web Design",
        "SVN / Git",
      ],
    },
  ],
};

export const SKILLS_DATA = {
  sectionId: "skills",
  badge: "Technical Arsenal",
  title: "Technical Skills",
  subtitle:
    "Filterable breakdown of my Next.js & React.js ecosystem, UI libraries, state management tools, and cloud/CMS integrations.",
  categories: [
    {
      id: "frontend",
      title: "Frontend & UI Frameworks",
      icon: "code",
      skills: [
        { name: "Next.js (SSR & App Router)", level: 92 },
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Tailwind CSS", level: 94 },
        { name: "shadcn/ui & Radix UI", level: 92 },
        { name: "HTML5 & Semantic Web", level: 96 },
        { name: "CSS3 & SASS / SCSS", level: 94 },
        { name: "Bootstrap 5", level: 95 },
        { name: "jQuery", level: 90 },
      ],
    },
    {
      id: "state-cms",
      title: "State, APIs & Cloud / CMS",
      icon: "server",
      skills: [
        { name: "Zustand", level: 92 },
        { name: "Redux & Redux Toolkit", level: 92 },
        { name: "React Context API & Hooks", level: 95 },
        { name: "REST APIs & Axios", level: 95 },
        { name: "Contentful CMS", level: 90 },
        { name: "Mapbox Integration", level: 86 },
        { name: "Azure Blob Storage", level: 85 },
      ],
    },
    {
      id: "architecture",
      title: "Architecture & Performance",
      icon: "layers",
      skills: [
        { name: "SSR, Lazy Loading & Core Web Vitals", level: 92 },
        { name: "Reusable Component Libraries", level: 95 },
        { name: "Multilingual (English/Arabic RTL)", level: 92 },
        { name: "Responsive & Mobile-First Design", level: 96 },
        { name: "Authentication & Role Workflows", level: 90 },
      ],
    },
    {
      id: "tools",
      title: "Tools, Testing & Workflow",
      icon: "tools",
      skills: [
        { name: "Git, GitHub & SVN", level: 94 },
        { name: "Visual Studio Code", level: 96 },
        { name: "Chrome DevTools & Profiling", level: 92 },
        { name: "Unit Testing (Jest / RTL)", level: 88 },
        { name: "Agile / Scrum Methodology", level: 95 },
      ],
    },
  ],
};

export const PROJECTS_DATA = {
  sectionId: "projects",
  badge: "Case Studies",
  title: "Featured Projects",
  subtitle:
    "Explore production web applications and enterprise platforms I engineered across Dubai and India. Filter by technology or inspect each project's architecture.",
  filterCategories: [
    "All Projects",
    "Next.js",
    "React.js",
    "Healthcare",
    "E-Commerce",
    "EdTech",
  ],
  items: [
    {
      id: "westay-platform",
      title: "WeStay Property, Booking & Catalogue Suite",
      category: "Next.js",
      filterTags: ["Next.js", "React.js"],
      stack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "Zustand",
        "Contentful CMS",
        "Mapbox",
        "Azure Blob Storage",
      ],
      description:
        "A comprehensive hospitality and property platform comprising customer-facing booking portals, an internal Admin system, and Catalogue applications with English/Arabic RTL support.",
      highlights: [
        "Developed end-to-end property management, booking, customer, pricing, CMS, media, and approval/review workflows using Next.js, TypeScript, and Zustand.",
        "Integrated Contentful CMS for dynamic page sections, Mapbox for interactive property mapping, and Azure Blob Storage for media management.",
      ],
      architecture: [
        "Built reusable, accessible UI primitives with Tailwind CSS, shadcn/ui, and Radix UI supporting seamless bidirectional English/Arabic (RTL) layouts.",
        "Engineered Axios REST API layers handling authentication, complex search/filtering, CRUD operations, and resilient loading/error boundaries.",
        "Optimized Core Web Vitals and SEO through Server-Side Rendering (SSR), dynamic imports, route-level lazy loading, and Next.js image optimization.",
      ],
      deliverables:
        "Delivered high-performance customer, catalogue, and admin applications with multilingual RTL support and streamlined property approval workflows.",
    },
    {
      id: "lms",
      title: "Learning Management System (LMS)",
      category: "EdTech",
      filterTags: ["React.js", "EdTech"],
      stack: ["React.js", "JavaScript (ES6+)", "Context API", "REST APIs", "CSS3", "Bootstrap"],
      description:
        "An enterprise educational platform designed for institutions to author, manage, deliver, and track courses, assessments, and learner progress.",
      highlights: [
        "Engineered reusable React component hierarchies for course players, curriculum trees, and student progress dashboards.",
        "Implemented responsive, accessible layouts supporting seamless learning across desktop, tablet, and mobile viewports.",
      ],
      architecture: [
        "Modular component architecture separating presentation views from data-fetching and state containers.",
        "Dynamic client-side filtering and progress state synchronization across multi-step training modules.",
        "Optimized re-renders on large course catalogs using memoized list items and clean state boundaries.",
      ],
      deliverables:
        "Delivered a unified, mobile-ready learning interface that streamlined course navigation and improved student completion tracking.",
    },
    {
      id: "clinical-trials",
      title: "Clinical Trials & Translational Science Portal",
      category: "Healthcare",
      filterTags: ["React.js", "Healthcare"],
      stack: ["React.js", "JavaScript (ES6+)", "REST APIs", "SASS", "Bootstrap", "CSS3"],
      description:
        "A specialized Clinical and Translational Science (CTS) platform empowering clinical researchers and trainees to translate medical research into improved patient care.",
      highlights: [
        "Developed data-driven React views for tracking clinical study protocols, milestones, and translational research workflows.",
        "Standardized UI form controls, validation states, and tabular views for high-density clinical data.",
      ],
      architecture: [
        "Structured React state flows to manage complex multi-step clinical forms and researcher submissions.",
        "Consistent visual design tokens and Bootstrap grid customizations tailored for medical research staff.",
        "Cross-browser compatibility and strict UI reliability for healthcare institutional environments.",
      ],
      deliverables:
        "Enabled clinical teams and trainees to navigate research programs and track study outcomes through an intuitive web interface.",
    },
    {
      id: "sip",
      title: "Shared Investigator Platform (SIP)",
      category: "Healthcare",
      filterTags: ["Healthcare"],
      stack: ["JavaScript", "jQuery", "JSON / REST APIs", "Bootstrap", "CSS3"],
      description:
        "A centralized multi-sponsor clinical trial platform connecting pharmaceutical sponsors directly with participating research sites and principal investigators.",
      highlights: [
        "Built interactive front-end modules for cross-organization communications, document exchange, and site profile management.",
        "Maintained strict UI consistency across role-based dashboards used by sponsors, coordinators, and investigators.",
      ],
      architecture: [
        "Event-driven UI modules handling asynchronous data updates, modal workflows, and document status tracking.",
        "Role-aware interface patterns simplifying complex regulatory and clinical trial site interactions.",
      ],
      deliverables:
        "Reduced friction between trial sponsors and investigative sites by providing a unified, single-sign-on workspace.",
    },
    {
      id: "gamessouk",
      title: "Gamessouk E-Commerce Storefront",
      category: "E-Commerce",
      filterTags: ["E-Commerce"],
      stack: ["JavaScript", "jQuery", "Bootstrap", "CSS3", "HTML5"],
      description:
        "A high-traffic online gaming retail store in Kuwait specializing in consoles, video games, and gaming accessories with real-time deals and catalog browsing.",
      highlights: [
        "Designed mobile-first product discovery grids, category filters, and promotional campaign banners.",
        "Enhanced storefront UI responsiveness and interactive cart/product preview experiences.",
      ],
      architecture: [
        "Responsive grid system optimized for rapid visual scanning of gaming SKUs, pricing badges, and stock status.",
        "Lightweight DOM manipulation and optimized asset loading for fast mobile browsing.",
      ],
      deliverables:
        "Delivered an engaging, conversion-focused shopping experience tailored for gaming enthusiasts across desktop and mobile devices.",
    },
  ],
};

export const CONTACT_DATA = {
  sectionId: "contact",
  badge: "Get In Touch",
  title: "Contact & Collaboration",
  subtitle:
    "Based in Dubai, UAE — looking for an experienced Next.js / React.js Front-End Developer? Copy my details with one click or send a direct message.",
  directEmail: "shklhmdshaik@gmail.com",
  methods: [
    {
      id: "phone",
      label: "Phone / WhatsApp (UAE)",
      value: "+971 58 168 3831",
      copyValue: "+971581683831",
      href: "tel:+971581683831",
      icon: "phone",
      isExternal: false,
      canCopy: true,
    },
    {
      id: "email",
      label: "Email Address",
      value: "shklhmdshaik@gmail.com",
      copyValue: "shklhmdshaik@gmail.com",
      href: "mailto:shklhmdshaik@gmail.com",
      icon: "email",
      isExternal: false,
      canCopy: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      value: "linkedin.com/in/shakeel-ahmed-8aab09197",
      copyValue: "https://www.linkedin.com/in/shakeel-ahmed-8aab09197/",
      href: "https://www.linkedin.com/in/shakeel-ahmed-8aab09197/",
      icon: "linkedin",
      isExternal: true,
      canCopy: false,
    },
    {
      id: "github",
      label: "GitHub Repositories",
      value: "github.com/shklhmdshaik",
      copyValue: "https://github.com/shklhmdshaik",
      href: "https://github.com/shklhmdshaik",
      icon: "github",
      isExternal: true,
      canCopy: false,
    },
  ],
};

export const FOOTER_DATA = {
  copyrightName: "Shaik Shakeel Ahmed",
  rightsText: "All rights reserved.",
  tagline:
    "Front-End Developer (Next.js, React.js & TypeScript) • Dubai, United Arab Emirates",
};
