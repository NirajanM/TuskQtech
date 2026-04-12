import { siteConfig } from "@/lib/seo";

export type NavItem = {
  label: string;
  href: string;
};

export const contactAnchorIds = {
  projectBrief: "project-brief",
  admissions: "admissions",
  careerIntake: "career-intake",
} as const;

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  title: "Engineering the Future of Digital Innovation",
  subtitle:
    "We design, build, and scale powerful digital products that empower businesses to thrive in a rapidly evolving technological landscape.",
};

export const philosophyContent = {
  eyebrow: "Our Philosophy",
  title: "Driven by Innovation. Defined by Excellence.",
  body:
    "TuskQ operates at the intersection of technical mastery and creative vision. We don't just build software; we engineer authority. Our team serves as a high-velocity extension of your business, delivering digital infrastructure that is as robust as it is intuitive.",
  stats: [
    { value: "120+", label: "Enterprise Solutions Delivered" },
    { value: "98%", label: "Client Retention Rate" },
  ],
  quote:
    "Their technical precision is matched only by their commitment to our long-term growth.",
  quoteAuthor: "— CTO, Global FinTech",
};

export const solutionCards = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Building high-performance, scalable web architectures using modern frameworks that prioritize speed and security.",
    variant: "wide" as const,
  },
  {
    icon: "smartphone",
    title: "App Development",
    description:
      "Native and cross-platform mobile experiences that engage users and drive conversion.",
    variant: "standard" as const,
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Sophisticated interface design backed by deep user research and behavioral psychology.",
    variant: "standard" as const,
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Architecting resilient infrastructure that scales with your growth while maintaining zero downtime.",
    variant: "standard" as const,
  },
];

export const whyChooseUs = {
  title: "Your Competitive Advantage in Technology",
  subtitle:
    "We don't just deliver code; we deliver strategic assets that redefine your market position.",
  points: [
    { index: "01", title: "Performance", body: "Optimized for extreme speed and response times." },
    { index: "02", title: "Client-Centricity", body: "Deeply integrated partnerships at every stage." },
    { index: "03", title: "Innovation", body: "Cutting-edge R&D applied to every project." },
    { index: "04", title: "Security", body: "Military-grade protocols and data integrity." },
    { index: "05", title: "Agile Delivery", body: "Rapid iterations with measurable value." },
  ],
};

export const portfolioContent = {
  title: "Transforming Ideas into Reality",
  cta: "Explore Full Portfolio",
  items: [
    {
      title: "Smart Business Dashboard",
      description: "A comprehensive analytics engine for real-time decision making.",
    },
    {
      title: "E-Commerce Platform",
      description: "High-conversion retail infrastructure designed for global scale.",
    },
  ],
};

export const roadmapContent = {
  title: "Execution Roadmap",
  steps: [
    {
      number: "1",
      title: "Discovery",
      description: "Deep dive into your business goals and technical constraints.",
      active: true,
    },
    {
      number: "2",
      title: "Design",
      description: "Architecting the user experience and visual identity.",
      active: false,
    },
    {
      number: "3",
      title: "Development",
      description: "Clean, modular code built for performance and scale.",
      active: false,
    },
    {
      number: "4",
      title: "Testing",
      description: "Rigorous quality assurance and security auditing.",
      active: false,
    },
    {
      number: "5",
      title: "Support",
      description: "Ongoing optimization and strategic evolution.",
      active: false,
    },
  ],
};

export const teamContent = {
  title: "The Minds Behind TuskQ",
  subtitle: "Leadership focused on innovation, execution, and sustainable growth.",
  members: [
    {
      name: "Rijan Koirala",
      role: "CEO — Chief Executive Officer",
      bio: "Leads TuskQ's vision, strategy, and growth. Drives the mission of Innovate. Educate. Elevate. ensuring every project reflects the company's commitment to excellence.",
      image: "/profiles/rijan-koirala.webp",
    },
    {
      name: "Nirajan Malla",
      role: "CTO — Chief Technology Officer",
      bio: "Leads development and deployment - from database architecture to CI/CD pipelines. Sets engineering standards across all TuskQ products.",
      image: "/profiles/nirajan-malla.webp",
    },
    {
      name: "Samir Pokhrel",
      role: "COO — Chief Operating Officer",
      bio: "Keeps TuskQ running smoothly - from project delivery to client relationships. Ensures every engagement is on time, on budget, and exceeds expectations.",
      image: "/profiles/samir-pokhrel.webp",
    },
    {
      name: "Nishanta Sharma Chapagain",
      role: "CMO — Chief Marketing Officer",
      bio: "Shapes TuskQ's brand, voice, and market presence. Drives awareness, content strategy, and community growth across Nepal and beyond.",
      image: "/profiles/nishanta-sharma-chapagain.webp",
    },
  ],
};

export const contactChannels = [
  {
    title: "Email",
    details: siteConfig.supportEmail,
    note: "Project consultations, partnerships, and strategic inquiries.",
  },
  {
    title: "Location",
    details: "Nepal",
    note: "Serving clients globally with distributed delivery practices.",
  },
];

export const servicesPageContent = [
  {
    title: "Web Development",
    description:
      "We build high-performance websites that are fast, secure, and responsive across all devices.",
    points: [
      "Responsive & mobile-first design",
      "SEO-optimized architecture",
      "High-speed performance",
      "Secure and scalable systems",
    ],
  },
  {
    title: "Application Development",
    description:
      "We turn your ideas into robust mobile and web applications designed for growth and adaptability.",
    points: [
      "Custom app development",
      "Cross-platform solutions",
      "API integration",
      "Scalable backend architecture",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive user experiences that engage users and drive outcomes.",
    points: [
      "User-centered design",
      "Interactive prototypes",
      "Clean and modern interfaces",
      "Conversion-focused UX",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "We build secure, scalable, and highly available infrastructure with modern cloud and delivery practices.",
    points: [
      "Cloud deployment (AWS, Vercel, etc.)",
      "CI/CD automation pipelines",
      "Performance monitoring",
      "Advanced data security",
    ],
  },
];

export const educationPageTracks = [
  {
    title: "Frontend Engineering",
    description: "Build modern interfaces with production-grade component architecture.",
  },
  {
    title: "Backend & API Systems",
    description: "Design scalable backend services and resilient API workflows.",
  },
  {
    title: "Cloud & DevOps",
    description: "Ship reliable software with cloud infrastructure and CI/CD practices.",
  },
  {
    title: "UI/UX Product Design",
    description: "Create intuitive digital products with research-backed design decisions.",
  },
  {
    title: "Applied AI",
    description: "Integrate AI capabilities into real products with practical architecture.",
  },
  {
    title: "Cybersecurity",
    description: "Adopt security-first engineering with threat-aware implementation.",
  },
];
