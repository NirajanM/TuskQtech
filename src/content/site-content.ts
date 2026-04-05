export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  accent: "primary" | "secondary";
};

export type Service = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  module: string;
};

export type Bootcamp = {
  level: string;
  title: string;
  description: string;
  cohort: string;
};

export type Pillar = {
  key: string;
  accent: "primary" | "secondary";
  marker: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export const siteName = "TuskQtech";

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  badge: "FRAMEWORK V4.2.0 LIVE",
  headingTop: "TUSKQTECH",
  headingAccent: "KINETIC MONOLITH",
  headingBottom: "FRAMEWORK",
  body:
    "Where B2B precision meets the velocity of Gen Z energy. We build digital systems that scale with operational authority.",
  image: "/hero-web1.jpg",
  imageAlt: "TuskQtech homepage concept preview",
  status: "SYSTEM_AUTH: STABLE",
  actions: [
    { label: "Scale Agency", href: "/services", variant: "primary" as const },
    { label: "Join Bootcamp", href: "/education", variant: "secondary" as const },
  ],
};

export const metrics: Metric[] = [
  { value: "99%", label: "Success Rate", accent: "primary" },
  { value: "500+", label: "Students Trained", accent: "secondary" },
  { value: "24/7", label: "Active Monitoring", accent: "primary" },
  { value: "15+", label: "Global Partnerships", accent: "secondary" },
];

export const partnerWords = ["QUANTUM", "BLOCKCORE", "SYNAPSE", "VECTOR", "SKYNET"];

export const pillars: Pillar[] = [
  {
    key: "b2b",
    accent: "primary",
    marker: "CORE 01 // INDUSTRIAL GRADE",
    title: "B2B Development",
    description:
      "Architecture built for technical leadership, stability, and measurable enterprise outcomes.",
    bullets: ["MICROSERVICES ORCHESTRATION", "ZERO-TRUST INFRASTRUCTURE"],
    image: "/pillar-b2b.jpg",
    imageAlt: "B2B engineering and infrastructure environment",
  },
  {
    key: "education",
    accent: "secondary",
    marker: "CORE 02 // TALENT SYNTHESIS",
    title: "Tech Education",
    description:
      "High-intensity learning tracks that convert ambition into production-ready technical skill.",
    bullets: ["ACCELERATED CAREER PATHS", "MENTORSHIP-FIRST EXECUTION"],
    image: "/pillar-education.jpg",
    imageAlt: "High-energy technical education workspace",
  },
];

export const services: Service[] = [
  {
    id: "01",
    title: "Custom Web/Mobile App Development",
    description:
      "Cross-platform systems designed for reliability, resilience, and scale without sacrificing product velocity.",
    stack: ["NEXT.JS", "FLUTTER", "AWS CORE"],
    module: "MODULE_WM-201",
  },
  {
    id: "02",
    title: "Cybersecurity Solutions",
    description:
      "Threat-first architecture with hardened controls, security testing, and operational response loops.",
    stack: ["PEN-TESTING", "BLOCKCHAIN", "SOC2"],
    module: "MODULE_CS-542",
  },
  {
    id: "03",
    title: "Cloud Migration and DevOps",
    description:
      "Migration blueprints and release pipelines that reduce downtime while improving deployment confidence.",
    stack: ["KUBERNETES", "CICD", "OBSERVABILITY"],
    module: "MODULE_CM-114",
  },
  {
    id: "04",
    title: "UI/UX for Technical Products",
    description:
      "Interface systems for operator-grade tools with clear data hierarchy and high-intent interaction states.",
    stack: ["DESIGN TOKENS", "ACCESSIBILITY", "RESEARCH"],
    module: "MODULE_UX-308",
  },
  {
    id: "05",
    title: "Data Platforms and AI Integration",
    description:
      "Data pipelines and intelligent automation layers that unlock insights and reduce repetitive manual effort.",
    stack: ["MLOPS", "VECTOR DB", "INFERENCE"],
    module: "MODULE_DA-722",
  },
  {
    id: "06",
    title: "Product Rescue and Modernization",
    description:
      "Structured rescue plans for legacy products, including audit, refactor, rollout, and measurable quality lift.",
    stack: ["AUDIT", "REFACTOR", "MIGRATION"],
    module: "MODULE_PR-019",
  },
];

export const bootcamps: Bootcamp[] = [
  {
    level: "LEVEL_01 // FRONTEND",
    title: "Web Building",
    description:
      "From neo-brutalist composition to modern app architecture with production patterns.",
    cohort: "AUG_24_2026",
  },
  {
    level: "LEVEL_02 // INFRA",
    title: "Networks",
    description:
      "Cloud networking, routing strategy, and zero-trust fundamentals for real deployment contexts.",
    cohort: "SEP_12_2026",
  },
  {
    level: "LEVEL_03 // SECURITY",
    title: "Cybersecurity",
    description:
      "Blue-team and red-team workflows, simulation labs, and incident response training.",
    cohort: "OCT_05_2026",
  },
  {
    level: "LEVEL_04 // BACKEND",
    title: "Backend Engineering",
    description:
      "Production backend systems, APIs, observability, and resilient service architecture.",
    cohort: "NOV_16_2026",
  },
  {
    level: "LEVEL_05 // PRODUCT",
    title: "Product Design for Tech",
    description:
      "Research, UX architecture, and interface systems for complex technical products.",
    cohort: "DEC_09_2026",
  },
  {
    level: "LEVEL_06 // AI",
    title: "Applied AI Delivery",
    description:
      "End-to-end AI workflow from use-case design to deployable model-backed features.",
    cohort: "JAN_21_2027",
  },
];

export const contactChannels = [
  {
    title: "Enterprise Projects",
    details: "solutions@tuskqtech.com",
    note: "Architecture, modernization, and delivery partnerships.",
  },
  {
    title: "Bootcamp Admissions",
    details: "academy@tuskqtech.com",
    note: "Cohort counseling, curriculum fit, and enrollment support.",
  },
  {
    title: "General Inquiries",
    details: "+977 98000 00000",
    note: "Mon-Fri, 9:00-18:00 NPT",
  },
];

export const cta = {
  headingTop: "READY TO",
  headingBottom: "MONOLITH?",
  body:
    "Join the agency defining a practical, high-energy standard for enterprise development and technical education.",
  image: "/cta-tech.avif",
  imageAlt: "Futuristic data center atmosphere",
  actions: [
    { label: "Initiate Partnership", href: "/contact", variant: "primary" as const },
    { label: "Career Intake", href: "/contact#career-intake", variant: "ghost" as const },
  ],
};

export const footer = {
  tagline: "Kinetic Monolith Framework. Engineered for Authority.",
  columns: [
    {
      title: "Ecosystem",
      links: [
        { label: "Services", href: "/services" },
        { label: "Education", href: "/education" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Project Brief", href: "/contact#project-brief" },
        { label: "Admissions", href: "/contact#admissions" },
        { label: "Careers", href: "/contact#career-intake" },
      ],
    },
  ],
  copyright: "© 2026 TUSKQTECH // STABLE_REL_04",
};
