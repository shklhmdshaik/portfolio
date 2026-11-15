import profileImage from "../assets/images/shakeel.jpeg";
import brandLogo from "../assets/images/shakeel_logo.png";

export const SITE_METADATA = {
  brandName: "Shakeel Ahmed",
  fullName: "Shakeel Ahmed",
  roleTitle: "React JS Developer | Front End Developer",
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
    viewDetailsBtn: "View Project Details",
    emptyState: "No projects match the selected filter criteria.",
    resetFilterBtn: "Reset Filters",
    modalLabels: {
      overview: "Project Overview",
      architecture: "Key Features & Contributions",
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
      subjectPlaceholder: "e.g., React JS / Front End Developer Opportunity",
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
  greetingBadge: "6+ Years Experience • Dubai, United Arab Emirates",
  fullName: "Shakeel Ahmed",
  roles: [
    "React JS Developer",
    "Front End Developer",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],
  summary:
    "Front End Developer with over 6+ years of experience building responsive, user-centric web applications using Next.js, React.js, TypeScript, Tailwind CSS, shadcn/ui, Zustand, JavaScript (ES6), HTML5, CSS3, SASS/SCSS, Bootstrap, and Redux.",
  profileImage,
  profileImageAlt: "Shakeel Ahmed - React JS & Front End Developer",
  quickHighlights: [
    { icon: "code", text: "Next.js, React.js & TypeScript" },
    { icon: "layers", text: "Redux, Zustand & Context API" },
    { icon: "checkCircle", text: "Tailwind CSS, shadcn/ui & Bootstrap" },
  ],
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Let's Talk",
    href: "#contact",
  },
};

export const ABOUT_DATA = {
  sectionId: "about",
  badge: "Summary",
  title: "About Me",
  subtitle:
    "Front End Developer with over 6+ years of experience building scalable, reusable, and performance-optimized user interfaces.",
  paragraphs: [
    "Front End Developer with over 6+ years of experience building responsive, user-centric web applications. Experienced in developing modern web solutions using Next.js, React.js, TypeScript, Tailwind CSS, shadcn/ui, Zustand, JavaScript (ES6), HTML5, CSS3, SASS/SCSS, Bootstrap, and Redux. Skilled in creating scalable, reusable, and performance-optimized user interfaces with a strong focus on user experience, accessibility, and maintainability.",
    "Hands-on experience developing SEO-friendly and high-performance applications with Next.js, implementing responsive designs, integrating REST APIs, and managing application state. Experienced in working with Contentful CMS to create, update, and manage dynamic content, page sections, and reusable content components. Proficient in translating UI/UX designs and wireframes into pixel-perfect interfaces using modern front-end development practices.",
    "Experienced in building reusable component libraries, interactive cards, and mobile-first layouts while ensuring cross-browser compatibility and optimal performance. Strong understanding of Git-based workflows and Agile/Scrum methodologies, with the ability to collaborate effectively across cross-functional teams and independently deliver high-quality features in fast-paced development environments. Passionate about learning new technologies, improving development processes, and delivering scalable front-end solutions that drive business value.",
  ],
  highlights: [
    {
      value: "6+",
      label: "Years of Experience",
      detail: "Front-End Web Development",
    },
    {
      value: "4",
      label: "Companies",
      detail: "WeStay, Careersmith, Cognizant & CodeOn",
    },
    {
      value: "15+",
      label: "Core Technologies",
      detail: "Next.js, React.js, TypeScript & UI",
    },
    {
      value: "100%",
      label: "Responsive & Agile",
      detail: "Cross-Browser & Mobile-First",
    },
  ],
  pillars: [
    {
      id: "reusable-ui",
      icon: "layers",
      title: "Reusable Component Libraries",
      description:
        "Building scalable, reusable UI components, interactive cards, and mobile-first layouts using Next.js, React.js, TypeScript, Tailwind CSS, shadcn/ui, and Radix UI.",
    },
    {
      id: "performance",
      icon: "code",
      title: "Performance & SEO Optimization",
      description:
        "Developing SEO-friendly, high-performance applications with Next.js SSR, dynamic imports, lazy loading, image optimization, and Core Web Vitals.",
    },
    {
      id: "collaboration",
      icon: "tools",
      title: "API, CMS & Agile Delivery",
      description:
        "Integrating REST APIs with Axios, managing dynamic content with Contentful CMS, and collaborating across UX and backend teams in Agile/Scrum workflows.",
    },
  ],
};

export const EXPERIENCE_DATA = {
  sectionId: "experience",
  badge: "Career Journey",
  title: "Experience",
  subtitle:
    "Over 6+ years of professional Front-End and React.js development experience.",
  timeline: [
    {
      id: "exp-westay",
      company: "WeStay",
      role: "Frontend Developer",
      period: "November 2025 - Present",
      location: "Dubai, United Arab Emirates",
      focus: "WeStay • Dubai, United Arab Emirates",
      summary:
        "Developed customer-facing, Admin, and Catalogue applications using Next.js, React, TypeScript, Tailwind CSS, and Zustand. Integrated REST APIs using Axios, implementing CRUD operations, authentication, search, filtering, loading/error handling, and complex business workflows.",
      achievements: [
        "Built reusable and responsive UI components using Tailwind CSS, shadcn/ui, and Radix UI.",
        "Developed property management, booking, customer, pricing, CMS, media, and approval/review workflows.",
        "Integrated Contentful CMS, Mapbox, Azure Blob Storage, and implemented multilingual English/Arabic RTL support.",
        "Worked on performance optimization using SSR, dynamic imports, lazy loading, image optimization, and Core Web Vitals.",
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
      company: "Careersmith Edu Tech Pvt Ltd",
      role: "React Js Developer",
      period: "June 2024 - June 2025 (1 year 1 month)",
      location: "Tirupati, Andhra Pradesh, India",
      focus: "Careersmith Edu Tech Pvt Ltd • Tirupati, Andhra Pradesh, India",
      summary:
        "Engineered dynamic and responsive web applications using React JS, enhancing the user experience across multiple devices.",
      achievements: [
        "Developed reusable components that improved code maintainability and optimized overall application performance.",
        "Integrated RESTful APIs and collaborated closely with UX and backend teams to ensure seamless and efficient user interfaces.",
        "Ensured cross-browser compatibility and conducted rigorous unit testing to maintain high quality standards.",
        "Followed Agile methodology and managed version control effectively using Git to facilitate smooth project workflows.",
      ],
      technologies: [
        "React.js",
        "JavaScript (ES6)",
        "RESTful APIs",
        "Unit Testing",
        "Git",
        "Agile / Scrum",
      ],
    },
    {
      id: "exp-cognizant",
      company: "Cognizant",
      role: "UI Developer",
      period: "February 2021 - January 2024 (3 years)",
      location: "India",
      focus: "Cognizant • India",
      summary:
        "Developed high quality user facing features using JavaScript, HTML5, CSS3, SASS, jQuery, and React JS.",
      achievements: [
        "Built reusable code and libraries to enhance application speed and ensure cross-browser compatibility.",
        "Collaborated closely with backend engineers to establish JSON based APIs for seamless data integration.",
        "Gathered requirements and coordinated with development teams to monitor and track module delivery.",
        "Conducted unit testing to verify module functionality and resolve UI/UX issues effectively.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SASS",
        "jQuery",
        "JSON APIs",
        "Unit Testing",
      ],
    },
    {
      id: "exp-codeon",
      company: "CodeOn Technologies",
      role: "UI Developer",
      period: "May 2019 - November 2020 (1 year 7 months)",
      location: "India",
      focus: "CodeOn Technologies • India",
      summary:
        "Enhanced interactive web components using HTML5, CSS3, and jQuery, implementing animations that improved user experience through various jQuery plugins.",
      achievements: [
        "Delivered pixel-perfect, responsive designs aligned with modern web standards.",
        "Collaborated closely with UX designers and backend teams to ensure client expectations were met effectively.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Responsive Design",
      ],
    },
  ],
};

export const SKILLS_DATA = {
  sectionId: "skills",
  badge: "Technical Skills",
  title: "Technical Skills",
  subtitle:
    "My front-end development stack, state management libraries, and workflow tools.",
  categories: [
    {
      id: "frontend",
      title: "Frontend & UI Technologies",
      icon: "code",
      skills: [
        { name: "Next.js", level: 92 },
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6)", level: 95 },
        { name: "Tailwind CSS", level: 94 },
        { name: "shadcn/ui & Radix UI", level: 92 },
        { name: "HTML5", level: 96 },
        { name: "CSS3 & SASS / SCSS", level: 94 },
        { name: "Bootstrap", level: 95 },
        { name: "jQuery", level: 90 },
      ],
    },
    {
      id: "state-cms",
      title: "State Management, APIs & CMS",
      icon: "server",
      skills: [
        { name: "Redux", level: 92 },
        { name: "Context API", level: 95 },
        { name: "Zustand", level: 92 },
        { name: "REST APIs & Axios", level: 95 },
        { name: "Contentful CMS", level: 90 },
        { name: "Mapbox & Azure Blob Storage", level: 86 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Workflow",
      icon: "tools",
      skills: [
        { name: "Visual Studio Code", level: 96 },
        { name: "Git & SVN", level: 94 },
        { name: "Chrome DevTools", level: 92 },
        { name: "Agile / Scrum", level: 95 },
        { name: "Unit Testing", level: 88 },
      ],
    },
    {
      id: "practices",
      title: "Web Standards & Optimization",
      icon: "layers",
      skills: [
        { name: "SSR, Lazy Loading & Core Web Vitals", level: 92 },
        { name: "Reusable Component Libraries", level: 95 },
        { name: "Multilingual (English/Arabic RTL)", level: 92 },
        { name: "Responsive & Mobile-First Layouts", level: 96 },
        { name: "Cross-Browser Compatibility", level: 95 },
      ],
    },
  ],
};

export const PROJECTS_DATA = {
  sectionId: "projects",
  badge: "Portfolio",
  title: "Featured Projects",
  subtitle:
    "Web applications and platforms I developed across property management, education, healthcare, and e-commerce.",
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
      title: "WeStay Customer, Admin & Catalogue Applications",
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
        "Axios",
        "Contentful CMS",
        "Mapbox",
        "Azure Blob Storage",
      ],
      description:
        "Customer-facing, Admin, and Catalogue web applications built with Next.js, React, TypeScript, Tailwind CSS, and Zustand with multilingual English/Arabic RTL support.",
      highlights: [
        "Developed property management, booking, customer, pricing, CMS, media, and approval/review workflows.",
        "Integrated Contentful CMS, Mapbox, Azure Blob Storage, and REST APIs using Axios with authentication, search, filtering, and CRUD operations.",
      ],
      architecture: [
        "Built reusable and responsive UI components using Tailwind CSS, shadcn/ui, and Radix UI.",
        "Implemented multilingual English/Arabic RTL support across customer and catalogue interfaces.",
        "Optimized performance using SSR, dynamic imports, lazy loading, image optimization, and Core Web Vitals.",
      ],
      deliverables:
        "Delivered responsive, SEO-friendly customer, catalogue, and admin applications with seamless CMS and booking workflows.",
    },
    {
      id: "lms",
      title: "Learning Management System (LMS)",
      category: "EdTech",
      filterTags: ["React.js", "EdTech"],
      stack: ["React.js", "JavaScript (ES6)", "Context API", "REST APIs", "CSS3", "Bootstrap"],
      description:
        "An educational platform designed for institutions to manage, deliver, and track courses, assessments, and learner progress.",
      highlights: [
        "Built reusable React components for course players, curriculum views, and student progress dashboards.",
        "Implemented responsive layouts supporting seamless learning across desktop, tablet, and mobile devices.",
      ],
      architecture: [
        "Modular React components separating UI views from data-fetching and state management.",
        "Dynamic client-side filtering and progress synchronization across training modules.",
        "Cross-browser compatibility and unit-tested UI modules.",
      ],
      deliverables:
        "Delivered a mobile-ready learning interface that streamlined course navigation and student progress tracking.",
    },
    {
      id: "clinical-trials",
      title: "Clinical Trials & Translational Science Portal",
      category: "Healthcare",
      filterTags: ["React.js", "Healthcare"],
      stack: ["React.js", "JavaScript (ES6)", "REST APIs", "SASS", "Bootstrap", "CSS3"],
      description:
        "A Clinical and Translational Science (CTS) web application helping clinical researchers and trainees manage medical research workflows.",
      highlights: [
        "Developed data-driven React views for tracking clinical study protocols, milestones, and research workflows.",
        "Created reusable form controls, validation states, and tabular views for clinical data.",
      ],
      architecture: [
        "Structured React state to handle multi-step clinical forms and researcher submissions.",
        "Responsive Bootstrap and SASS styling tailored for healthcare research teams.",
        "Cross-browser compatibility and unit testing for reliable module delivery.",
      ],
      deliverables:
        "Enabled clinical teams and trainees to navigate research programs and track study outcomes through an intuitive interface.",
    },
    {
      id: "sip",
      title: "Shared Investigator Platform (SIP)",
      category: "Healthcare",
      filterTags: ["Healthcare"],
      stack: ["JavaScript", "jQuery", "JSON APIs", "Bootstrap", "CSS3"],
      description:
        "A multi-sponsor clinical trial platform connecting pharmaceutical sponsors with participating research sites and investigators.",
      highlights: [
        "Built interactive front-end modules for cross-organization communication, document exchange, and site profile management.",
        "Maintained UI consistency across dashboards used by sponsors, coordinators, and investigators.",
      ],
      architecture: [
        "Interactive UI modules handling asynchronous JSON API updates, modal workflows, and document tracking.",
        "Role-based user interface views simplifying clinical trial site interactions.",
      ],
      deliverables:
        "Provided a unified workspace connecting clinical trial sponsors and investigative sites.",
    },
    {
      id: "gamessouk",
      title: "Gamessouk E-Commerce Storefront",
      category: "E-Commerce",
      filterTags: ["E-Commerce"],
      stack: ["JavaScript", "jQuery", "Bootstrap", "CSS3", "HTML5"],
      description:
        "An online gaming retail storefront specializing in consoles, video games, and gaming accessories with catalog browsing and deals.",
      highlights: [
        "Designed mobile-first product discovery grids, category filters, and promotional banners.",
        "Enhanced storefront UI responsiveness and interactive cart and product preview experiences.",
      ],
      architecture: [
        "Responsive grid layouts optimized for browsing gaming products, pricing badges, and stock status.",
        "Interactive jQuery plugins and animations for smooth mobile and desktop browsing.",
      ],
      deliverables:
        "Delivered a responsive e-commerce shopping experience across desktop and mobile devices.",
    },
  ],
};

export const CONTACT_DATA = {
  sectionId: "contact",
  badge: "Get In Touch",
  title: "Contact & Collaboration",
  subtitle:
    "Based in Dubai, United Arab Emirates — feel free to copy my contact details or send a direct message.",
  directEmail: "shklhmdshaik@gmail.com",
  methods: [
    {
      id: "phone",
      label: "Phone / WhatsApp",
      value: "+971 0581683831",
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
  copyrightName: "Shakeel Ahmed",
  rightsText: "All rights reserved.",
  tagline:
    "React JS Developer | Front End Developer • Dubai, United Arab Emirates",
};
