import profileImage from "../assets/images/shakeel.jpg";
import brandLogo from "../assets/images/shakeel_logo.png";

export const SITE_METADATA = {
  brandName: "Shakeel Ahmed",
  fullName: "Shaik Shakeel Ahmed",
  roleTitle: "Senior Front-End & React.js Developer",
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
      subjectPlaceholder: "e.g., Senior React.js Opportunity",
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
  greetingBadge: "5+ Years Experience • Available for Senior Front-End Roles",
  fullName: "Shaik Shakeel Ahmed",
  roles: [
    "Senior React.js Developer",
    "Front-End Engineer",
    "UI Architecture Specialist",
  ],
  summary:
    "Engineering scalable, accessible, and high-performance web applications with React.js, TypeScript, modern state management, and enterprise design systems.",
  profileImage,
  profileImageAlt: "Shaik Shakeel Ahmed - Senior Front-End Developer",
  quickHighlights: [
    { icon: "layers", text: "Component-Driven Architecture" },
    { icon: "code", text: "React.js, Redux & TypeScript" },
    { icon: "checkCircle", text: "Enterprise Agile Delivery" },
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
    "Bridging product vision and front-end engineering through scalable React architectures and clean code.",
  paragraphs: [
    "Front-End Developer with over 5 years of hands-on experience architecting and delivering responsive, user-centric, and enterprise-scale web applications using React.js, JavaScript (ES6+), TypeScript, Redux, HTML5, CSS3/SASS, and modern UI frameworks.",
    "Proven track record across Healthcare, Clinical Research, EdTech, and E-Commerce domains. Adept at translating complex workflows into modular, reusable component libraries while optimizing rendering performance, bundle size, and cross-browser accessibility.",
    "Experienced collaborator in Agile/Scrum environments—partnering closely with product managers, UX designers, and backend engineers across the full software development lifecycle to ship maintainable, high-impact solutions.",
  ],
  highlights: [
    {
      value: "5+",
      label: "Years of Experience",
      detail: "Production Front-End Engineering",
    },
    {
      value: "4+",
      label: "Enterprise Domains",
      detail: "Healthcare, EdTech & E-Commerce",
    },
    {
      value: "15+",
      label: "Core Technologies",
      detail: "Modern JS/React Ecosystem",
    },
    {
      value: "100%",
      label: "Agile & Responsive",
      detail: "Cross-Device Standards",
    },
  ],
  pillars: [
    {
      id: "architecture",
      icon: "layers",
      title: "Scalable UI Architecture",
      description:
        "Designing modular, reusable component systems with clean separation of concerns, custom hooks, and predictable state management.",
    },
    {
      id: "performance",
      icon: "code",
      title: "Performance & Quality",
      description:
        "Optimizing render cycles with memoization, code splitting, lazy loading, semantic HTML, and unit-tested business logic.",
    },
    {
      id: "collaboration",
      icon: "tools",
      title: "Agile Engineering",
      description:
        "Driving sprint deliverables, code reviews, REST API integrations, and iterative UI refinements in cross-functional teams.",
    },
  ],
};

export const EXPERIENCE_DATA = {
  sectionId: "experience",
  badge: "Career Journey",
  title: "Professional Experience & Impact",
  subtitle:
    "Over 5 years of progressive front-end engineering experience delivering production web platforms.",
  timeline: [
    {
      id: "exp-senior-fe",
      role: "Senior Front-End / React.js Developer",
      period: "Recent Roles • 5+ Years Total Experience",
      focus: "Enterprise Web Applications (React.js, Redux, TypeScript, ES6+)",
      summary:
        "Spearheaded front-end development for complex enterprise portals in clinical research and digital learning, focusing on reusable React architectures and responsive workflows.",
      achievements: [
        "Architected modular React.js component libraries and state management flows using Redux and Context API, reducing UI code duplication across modules.",
        "Engineered data-intensive dashboards and workflow interfaces for Clinical Trials and Learning Management Systems (LMS) with seamless REST API integration.",
        "Collaborated within Agile/Scrum ceremonies, conducting peer code reviews, mentoring team members, and enforcing ES6+ and accessibility best practices.",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Context API",
        "TypeScript",
        "JavaScript (ES6+)",
        "REST APIs",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      id: "exp-ui-dev",
      role: "Front-End & UI Developer",
      period: "Foundation & Growth • Multi-Sponsor & E-Commerce Platforms",
      focus: "Interactive Web Portals & E-Commerce Storefronts",
      summary:
        "Delivered customer-facing e-commerce storefronts and multi-sponsor clinical collaboration platforms with high cross-browser fidelity and mobile-first responsiveness.",
      achievements: [
        "Developed interactive UI modules for the Shared Investigator Platform (SIP), enabling secure collaboration between clinical trial sponsors and research sites.",
        "Built and optimized the Gamessouk e-commerce storefront, implementing dynamic product catalogs, search/filtering layouts, and responsive checkout views.",
        "Translated wireframes and design mockups into pixel-accurate HTML5, CSS3/SASS, Bootstrap, and JavaScript/jQuery interfaces.",
      ],
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3 / SASS",
        "Bootstrap",
        "jQuery",
        "Responsive Design",
        "Git",
      ],
    },
  ],
};

export const SKILLS_DATA = {
  sectionId: "skills",
  badge: "Technical Arsenal",
  title: "Technical Skills",
  subtitle:
    "Filterable breakdown of my front-end stack, state management tools, and engineering practices.",
  categories: [
    {
      id: "frontend",
      title: "Frontend & UI Frameworks",
      icon: "code",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Redux & Toolkit", level: 90 },
        { name: "Context API & Hooks", level: 95 },
        { name: "HTML5 & Semantic Web", level: 95 },
        { name: "CSS3 & SASS", level: 92 },
        { name: "Bootstrap 5", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Material UI", level: 85 },
        { name: "jQuery", level: 90 },
      ],
    },
    {
      id: "tools",
      title: "Tools, Testing & Workflow",
      icon: "tools",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "RESTful API Integration", level: 94 },
        { name: "Chrome DevTools & Profiling", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Agile / Scrum Methodology", level: 95 },
        { name: "Unit Testing (Jest / RTL)", level: 85 },
      ],
    },
    {
      id: "architecture",
      title: "Architecture & Best Practices",
      icon: "layers",
      skills: [
        { name: "Reusable Component Systems", level: 95 },
        { name: "Responsive & Mobile-First Design", level: 96 },
        { name: "State Management Patterns", level: 92 },
        { name: "Authentication & Role Flows", level: 88 },
        { name: "Real-Time UI Updates", level: 88 },
      ],
    },
    {
      id: "backend",
      title: "CMS & Backend Exposure",
      icon: "server",
      skills: [
        { name: "Node.js (Basic)", level: 75 },
        { name: "PHP / MySQL", level: 78 },
        { name: "Liferay DXP (Basic)", level: 75 },
      ],
    },
  ],
};

export const PROJECTS_DATA = {
  sectionId: "projects",
  badge: "Case Studies",
  title: "Featured Projects",
  subtitle:
    "Explore enterprise platforms and web applications I helped engineer. Filter by technology or click any project to inspect its architecture.",
  filterCategories: ["All Projects", "React.js", "Healthcare", "E-Commerce", "EdTech"],
  items: [
    {
      id: "lms",
      title: "Learning Management System (LMS)",
      category: "EdTech",
      filterTags: ["React.js", "EdTech"],
      stack: ["React.js", "JavaScript (ES6+)", "Context API", "CSS3", "Bootstrap"],
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
      stack: ["React.js", "JavaScript (ES6+)", "REST APIs", "Bootstrap", "CSS3"],
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
      stack: ["JavaScript", "jQuery", "REST APIs", "Bootstrap", "CSS3"],
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
    "Looking for an experienced React.js / Front-End Developer for your team or project? Copy my details with one click or send a direct message.",
  directEmail: "shklhmdshaik@gmail.com",
  methods: [
    {
      id: "phone",
      label: "Phone / WhatsApp",
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
      value: "linkedin.com/in/shakeel-ahmed",
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
    "Architected with React 19, Custom Hooks, Context API & Code Splitting",
};
