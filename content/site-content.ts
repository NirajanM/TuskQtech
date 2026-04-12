import { siteConfig } from "@/lib/seo";

export type NavItem = {
  label: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imagePositionClass?: string;
  imageZoomClass?: string;
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
  title: "Some ideas deserve more than a good start.",
  intro:
    "You have something worth building. Maybe it is a product that has lived in your head for months, or a system your team has been working around for too long. If it matters to you, it matters to us.",
  body:
    "TUSKQ builds digital products people actually use. Based in Nepal, we work with founders and teams who are serious about getting it right from the first line of code to the server it runs on.",
  primaryCtaLabel: "Start Your Project",
  secondaryCtaLabel: "View Our Work",
};

export const philosophyContent = {
  eyebrow: "Our Philosophy",
  title: "Technology unified. Systems known. Quality assured.",
  body: [
    "We started TUSKQ from one frustration. Too many businesses in Nepal were being let down by delivery teams. Projects dragged, budgets grew, and outcomes missed the brief.",
    "So we built a small team that owns the work end to end. We run our own infrastructure, control the stack, and solve hard problems directly instead of passing them to third parties.",
  ],
  stats: [
    { value: "40+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction Rate" },
  ],
  quote:
    "I had been burned by two agencies before TUSKQ. I was skeptical going in, but they delivered exactly what they promised, on time, and the product has run smoothly since day one.",
  quoteAuthor: "- Co-founder, Fintech startup, Nepal",
};

export const solutionsSectionContent = {
  title: "What We Build",
  subtitle:
    "Every product we take on starts with one question: what does success actually look like for the person using this?",
};

export const solutionCards = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Most web apps fail when foundations are rushed. We build with React and Next.js on backends designed for what you need now and what comes next.",
    variant: "wide" as const,
  },
  {
    icon: "smartphone",
    title: "App Development",
    description:
      "People delete apps that feel like work. We design and build mobile experiences around real user behavior before we write code.",
    variant: "standard" as const,
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Confusing products lose users. We design interfaces that feel simple in use and strong in conversion.",
    variant: "standard" as const,
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Your 3am is not when you want to discover infrastructure gaps. We run and monitor production systems so issues are caught before users feel them.",
    variant: "standard" as const,
  },
  {
    icon: "network",
    title: "Networking & Infrastructure",
    description:
      "Most agencies rent infrastructure and stop there. We own ours and handle network to server architecture so your product runs on systems built for its workload.",
    variant: "standard" as const,
  },
];

export const whyChooseUs = {
  title: "Why TUSKQ",
  subtitle:
    "There are a lot of people who can write code. Here is what makes the difference when you are trusting someone with something that matters.",
  points: [
    {
      index: "01",
      title: "Performance",
      body: "Slow products lose users. We treat performance as a requirement from day one, not a cleanup task after launch.",
    },
    {
      index: "02",
      title: "Client Focus",
      body: "You talk directly with the people building your product, see progress clearly, and stay part of the decision loop.",
    },
    {
      index: "03",
      title: "Full Stack Ownership",
      body: "We run our own servers and network, which means faster response times and no finger-pointing when something breaks.",
    },
    {
      index: "04",
      title: "Security",
      body: "Security failures cost trust. We build with security in mind from the start, not as a late-stage checklist item.",
    },
    {
      index: "05",
      title: "Agile Delivery",
      body: "We ship in small milestones so you can review early, adjust quickly, and avoid big surprises at the end.",
    },
  ],
};

export const portfolioContent = {
  title: "Work We Are Proud Of",
  cta: "Explore Full Portfolio",
  items: [
    {
      title: "Smart Business Dashboard",
      description:
        "A logistics company was making decisions from reports that were two days old. We built a real-time dashboard that cut weekly reporting work by over 50% and helped them catch issues the same day.",
      image: "/stitch/image-04.png",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A Nepali retailer moving online needed inventory, payments, and delivery tracking in one product. We launched in six weeks, and their first international order came on day three.",
      image: "/stitch/image-05.png",
    },
    {
      title: "Custom Server Migration",
      description:
        "A growing SaaS business was overpaying for cloud and lacked environment control. We migrated them to managed infrastructure, reduced monthly costs by 40%, and gave direct stack access.",
      image: "/abstract-grid.svg",
    },
  ],
};

export const roadmapContent = {
  title: "How a Project Actually Goes",
  subtitle:
    "Launching is not the end of the relationship. We stay involved to keep things reliable and continuously improving.",
  steps: [
    {
      number: "1",
      title: "Discovery",
      description:
        "We map what you are solving, why it matters, and how success will be measured.",
      active: true,
    },
    {
      number: "2",
      title: "Design",
      description:
        "You review flows, screens, and interactions before engineering starts.",
      active: false,
    },
    {
      number: "3",
      title: "Development",
      description:
        "We build in sprints and share working software regularly, not static status updates.",
      active: false,
    },
    {
      number: "4",
      title: "Testing",
      description:
        "We test across devices, browsers, edge cases, and security checks before release.",
      active: false,
    },
    {
      number: "5",
      title: "Support",
      description:
        "After launch, we stay involved for fixes, improvements, and support as your product grows.",
      active: false,
    },
  ],
};

export const teamContent = {
  title: "The Team",
  subtitle: "We are four people who got tired of watching good ideas fail because of bad execution.",
  members: [
    {
      name: "Rijan Koirala",
      role: "CEO",
      bio: "Rijan carries the vision behind TUSKQ. He started the company to unlock Nepal's technical potential and keeps decisions centered on one question: is this actually good for the user on the other end?",
      image: "/profiles/rijan-koirala.webp",
      imagePositionClass: "object-[center_15%]",
      imageZoomClass: "scale-[1.13]",
    },
    {
      name: "Nirajan Malla",
      role: "CTO",
      bio: "Nirajan turns complex requirements into systems that stay maintainable, scalable, and reliable in production. He leads engineering standards, infrastructure, and server operations that keep TUSKQ products stable under real-world load.",
      image: "/profiles/nirajan-malla.webp",
      imagePositionClass: "object-[center_10%]",
      imageZoomClass: "scale-[1.22]",
    },
    {
      name: "Samir Pokhrel",
      role: "COO",
      bio: "Samir keeps execution and communication tight from kickoff to delivery. He manages relationships and coordination so clients always know what is happening and what comes next.",
      image: "/profiles/samir-pokhrel.webp",
      imagePositionClass: "object-[center_14%]",
      imageZoomClass: "scale-[1.13]",
    },
    {
      name: "Nishanta Sharma Chapagain",
      role: "CMO",
      bio: "Nishanta shapes TUSKQ's voice and community. She leads academy programs and brand initiatives that help more young people in Nepal move into practical tech careers.",
      image: "/profiles/nishanta-sharma-chapagain.webp",
      imagePositionClass: "object-[center_14%]",
      imageZoomClass: "scale-[1.13]",
    },
  ] satisfies TeamMember[],
};

export const finalCtaContent = {
  title: "Let's Build the Future Together",
  body:
    "Your idea deserves more than a disappearing freelancer or a ticket-based agency. It deserves a team that cares whether it works and infrastructure that can support it long term.",
  location: siteConfig.location,
  tagline: "Innovate. Educate. Elevate.",
  primaryAction: {
    label: "Start Your Project",
    href: "/contact#project-brief",
  },
  secondaryAction: {
    label: "View Our Work",
    href: "/services",
  },
};

export const contactChannels = [
  {
    title: "Email",
    details: siteConfig.supportEmail,
    note: "Project consultations, partnerships, and strategic inquiries.",
  },
  {
    title: "Location",
    details: finalCtaContent.location,
    note: "Serving clients globally with distributed delivery practices.",
  },
];

export const servicesPageContent = [
  {
    title: "Web Development",
    description:
      "Most web apps fail not because the idea was bad, but because the foundation was not built to last.",
    points: [
      "React and Next.js architecture built for longevity",
      "Secure and scalable backend foundations",
      "SEO and performance as launch requirements",
      "Built for where the product is going, not just where it starts",
    ],
  },
  {
    title: "Application Development",
    description:
      "We build mobile and web experiences that feel natural in real-world usage.",
    points: [
      "User flows modeled on real device behavior",
      "Cross-platform and native-ready delivery",
      "Backend APIs designed for growth",
      "Tight integration with your existing systems",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "We design interfaces that get out of the way and help users get things done fast.",
    points: [
      "Research-backed user journeys",
      "Interaction prototypes before implementation",
      "Conversion-aware information architecture",
      "Simple experiences that remain powerful",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "We manage infrastructure directly so your uptime and operations are not left to chance.",
    points: [
      "Managed infrastructure and release operations",
      "CI/CD pipelines and deployment automation",
      "Monitoring and early incident detection",
      "Security-first infrastructure controls",
    ],
  },
  {
    title: "Networking & Infrastructure",
    description:
      "We own and operate infrastructure so products run on systems designed for them.",
    points: [
      "Server architecture and network configuration",
      "Production environments tailored to workload",
      "Faster support without third-party escalation loops",
      "Infrastructure decisions aligned to product goals",
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
