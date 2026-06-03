export const siteConfig = {
  name: "Durgesh Parekh",
  title: "Product Engineer & Builder",
  tagline: "Product Engineer • Startup Builder • System Designer",
  description:
    "I build products from idea to scale. Combining product thinking, engineering excellence, AI, and cloud infrastructure to create solutions that solve real-world problems.",
  url: "https://durgeshparekh.dev",
  email: "durgeshparekh381@gmail.com",
  phone: "+919879694324",
  location: "Vadodara, Gujarat, India",
  resumePath: "/resume/Durgesh-Parekh-Resume.pdf",
  resumeFileName: "Durgesh-Parekh-Resume.pdf",
  ogImage: "/og-image.png",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/durgesh-parekh/",
  github: "https://github.com/durgeshparekh",
  twitter: "https://x.com/DurgeshParekh",
  medium: "https://medium.com/@durgeshparekh381",
} as const;

export const socialLinkMeta = [
  { key: "github" as const, label: "GitHub", href: socialLinks.github },
  { key: "linkedin" as const, label: "LinkedIn", href: socialLinks.linkedin },
  { key: "twitter" as const, label: "X", href: socialLinks.twitter },
  { key: "medium" as const, label: "Medium", href: socialLinks.medium },
] as const;

export const aboutHighlights = [
  {
    title: "Product Development",
    description:
      "Transform business needs into scalable features, MVPs, and user-centered product flows.",
  },
  {
    title: "System Design",
    description:
      "API-first backends, event-driven architecture, and systems built to scale with product growth.",
  },
  {
    title: "Mobile Engineering",
    description:
      "End-to-end Flutter ownership across Android, iOS, and web — architecture through production.",
  },
  {
    title: "Backend Development",
    description:
      "Node.js, TypeScript, Supabase, MongoDB, PostgreSQL, and serverless patterns on AWS.",
  },
  {
    title: "AI-Powered Solutions",
    description:
      "LLM workflows, conversational bots, analytics, and automation where AI adds real value.",
  },
] as const;

export const timelineMilestones = [
  { year: "2017", label: "Started at Smartnode as founding Android developer" },
  { year: "2020", label: "Led cross-platform transition to Flutter" },
  { year: "2022", label: "Software Team Lead & product ownership at Smartnode" },
  { year: "2022", label: "MVP lead for MySivi (YC W22) English learning app" },
  { year: "2025", label: "Senior Product Engineer — mobile lead at Viva Chefs" },
] as const;

export const skillCategories = [
  {
    id: "product",
    title: "Product",
    skills: [
      { name: "Product Strategy", level: 92 },
      { name: "MVP Development", level: 95 },
      { name: "User Research", level: 88 },
      { name: "Growth Thinking", level: 85 },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    skills: [
      { name: "Flutter", level: 96 },
      { name: "React Native", level: 78 },
      { name: "Node.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 90 },
      { name: "Serverless", level: 84 },
    ],
  },
  {
    id: "ai",
    title: "AI",
    skills: [
      { name: "OpenAI APIs", level: 88 },
      { name: "LLM Workflows", level: 86 },
      { name: "PostHog Analytics", level: 90 },
      { name: "AI Product Integration", level: 92 },
    ],
  },
] as const;

export const projects = [
  {
    id: "viva-chefs",
    title: "Viva Chefs — Customer & Chef Apps",
    description:
      "End-to-end Flutter apps with Codemagic CI/CD, PostHog analytics, and internal admin tools for booking, pricing, and operations.",
    technologies: ["Flutter", "PostHog", "Codemagic", "React", "Node.js"],
    image: "/projects/viva-chefs.jpg",
    gradient: "from-orange-500/20 to-amber-600/10",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: "sivi",
    title: "Sivi — AI English Learning",
    description:
      "YC W22 MVP: AI bot conversations, pronunciation feedback, progress tracking, and region-based auth for global learners.",
    technologies: ["Flutter", "Firebase", "AI Bot", "MVP"],
    image: "/projects/sivi.jpg",
    gradient: "from-violet-500/20 to-purple-600/10",
    liveUrl:
      "https://apps.apple.com/us/app/sivi-ai-learn-english-speaking/id1644736135",
    githubUrl: null,
    featured: true,
  },
  {
    id: "smartnode",
    title: "Smart Node Home Automation",
    description:
      "Cross-platform IoT app for lighting, curtains, RGB, door locks, and IR control — founding product from Android to Flutter.",
    technologies: ["Flutter", "Android", "iOS", "IoT", "AWS"],
    image: "/projects/smartnode.jpg",
    gradient: "from-blue-500/20 to-cyan-600/10",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.vdt.smartnode",
    githubUrl: null,
    featured: true,
  },
  {
    id: "nano-nfc",
    title: "Nano NFC — Digital Business Cards",
    description:
      "Conceptualized and built NFC-powered digital cards with Node.js APIs — zero-cost cards for small businesses.",
    technologies: ["Flutter", "Node.js", "NFC", "Product R&D"],
    image: "/projects/nano-nfc.jpg",
    gradient: "from-emerald-500/20 to-teal-600/10",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: "smartnode-web",
    title: "Smart Node Web — Touch Panel Designer",
    description:
      "Flutter web apps to design touch panels and gather configuration data for smart home deployments.",
    technologies: ["Flutter Web", "Product Design"],
    image: "/projects/smartnode-web.jpg",
    gradient: "from-sky-500/20 to-indigo-600/10",
    liveUrl: "https://design.smartnode.in/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "haselmart",
    title: "Hasel Mart — Grocery E-commerce",
    description:
      "Consumer and delivery-boy Flutter apps for grocery ordering, tracking, and cash-on-delivery workflows.",
    technologies: ["Flutter", "E-commerce", "Android", "iOS"],
    image: "/projects/haselmart.jpg",
    gradient: "from-rose-500/20 to-pink-600/10",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.app.haselmart.hasel_mart",
    githubUrl: null,
    featured: false,
  },
  {
    id: "hire-curated",
    title: "Hire Curated — Restaurant Hiring",
    description:
      "Next.js + Supabase platform with screening templates, analytics dashboard, and company profile management.",
    technologies: ["Next.js", "Supabase", "PostHog", "Vercel"],
    image: "/projects/hire-curated.jpg",
    gradient: "from-zinc-500/20 to-neutral-600/10",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
] as const;

export const experience = [
  {
    company: "Viva Chefs Inc.",
    position: "Senior Product Engineer — Mobile Lead",
    location: "San Francisco Bay Area, CA",
    duration: "Apr 2025 — Mar 2026",
    summary:
      "Bay Area startup connecting customers with in-home chefs. I owned the full Flutter ecosystem for consumer and chef apps — from architecture and feature delivery to store releases — while building internal React tools that helped operations scale booking, pricing, and payouts.",
    achievements: [
      "Led architecture, implementation, testing, and production releases for Customer and Chef mobile apps.",
      "Automated Play Store and App Store pipelines with Codemagic CI/CD, cutting release friction and errors.",
      "Rolled out PostHog for event tracking, session replays, and product behavior insights.",
      "Built React admin tools including Dish Rate Calculator, Chef Detail View, and booking flows with tips, extras, and grocery bills.",
      "Partnered with founding, operations, and design teams on UI/UX across high-traffic product journeys.",
    ],
  },
  {
    company: "Hire Curated",
    position: "Senior Software Engineer",
    location: "San Francisco Bay Area, CA (Restaurant Hiring Platform)",
    duration: "Aug 2025 — Oct 2025",
    summary:
      "Short-term product engineering engagement for a restaurant hiring platform. Focused on shipping production web experiences that improved how employers screen candidates, track hiring performance, and manage company profiles.",
    achievements: [
      "Delivered customer-facing and admin features with Next.js, Supabase, and Vercel.",
      "Built a User Analytics Dashboard for candidate activity and hiring funnel metrics.",
      "Created a Screening Template Builder to send dynamic questionnaires to applicants automatically.",
      "Integrated PostHog for conversion tracking, diagnostics, and funnel optimization.",
      "Shipped the full planned roadmap within two months while keeping production stable.",
    ],
  },
  {
    company: "Smartnode Automations Pvt Ltd",
    position: "Software Team Lead — Product & Engineering",
    location: "Vadodara, Gujarat",
    duration: "Dec 2022 — Mar 2025",
    summary:
      "Promoted to lead product and engineering for a smart home automation company. Balanced roadmap execution with team leadership — running delivery rituals, guiding system design, and shipping Flutter products while optimizing backend cost and reliability.",
    achievements: [
      "Led daily stand-ups, release planning, and cross-functional delivery for automation products.",
      "Conducted product research and prioritized features aligned with market and hardware roadmaps.",
      "Drove server cost optimization and DevOps improvements across backend infrastructure.",
      "Guided product planning, system design discussions, and team growth.",
      "Continued hands-on Flutter development for customer-facing smart home experiences.",
    ],
  },
  {
    company: "Smartnode Automations Pvt Ltd",
    position: "Senior Mobile Application Developer",
    location: "Vadodara, Gujarat",
    duration: "Aug 2020 — Nov 2022",
    summary:
      "Senior IC role during Smartnode’s transition from separate native apps to a unified Flutter platform. Focused on code quality, performance, cloud reliability, and mentoring as mobile traffic and feature scope grew.",
    achievements: [
      "Ran code reviews and performance optimization across the mobile codebase.",
      "Managed AWS EC2 infrastructure for high-volume device and API traffic.",
      "Led the migration from native Android/iOS codebases to cross-platform Flutter.",
      "Mentored junior developers on architecture, patterns, and delivery practices.",
      "Partnered with product and design on new automation modules and user flows.",
    ],
  },
  {
    company: "MySivi (formerly Speakify, YC W22)",
    position: "Flutter Developer (Part-Time)",
    location: "Bengaluru, Karnataka (Remote)",
    duration: "Apr 2022 — Oct 2022",
    summary:
      "MVP lead for a Y Combinator–backed English communication app. Built the core mobile experience that let learners practice speaking with structured lessons, AI-driven conversations, and pronunciation feedback for global users.",
    achievements: [
      "Owned MVP development for Android and iOS using Flutter.",
      "Shipped AI bot flows for dynamic questions, suggested answers, and grammar feedback.",
      "Built progress tracking across topics to visualize learner improvement.",
      "Implemented region-based auth: OTP for India and Google sign-in elsewhere via Firebase.",
      "Deployed production builds to both app stores for a worldwide launch.",
    ],
  },
  {
    company: "Smartnode Automations Pvt Ltd",
    position: "iOS Developer",
    location: "Vadodara, Gujarat",
    duration: "Jan 2020 — Aug 2020",
    summary:
      "Specialized iOS phase while expanding Smartnode’s home automation platform. Delivered a dedicated iOS module with tight hardware and backend integration, plus UI polish and stability work before the broader Flutter transition.",
    achievements: [
      "Built and maintained the home automation iOS module end to end.",
      "Integrated frontend experiences with backend services and device protocols.",
      "Owned mobile UI/UX refinements for intuitive control of connected home devices.",
      "Led manual testing and debugging to improve crash rates and release confidence.",
    ],
  },
  {
    company: "Smartnode Automations Pvt Ltd",
    position: "Android Developer (Founding)",
    location: "Vadodara, Gujarat",
    duration: "Sep 2017 — Dec 2019",
    summary:
      "Founding mobile engineer at Smartnode, where I built the first comprehensive Android app for smart home control — lighting, curtains, RGB, locks, and IR — working closely with product, design, and hardware teams from early concept to production support.",
    achievements: [
      "Developed core automation modules: lighting, curtains, RGB, door lock, and IR control.",
      "Collaborated with product managers, designers, and hardware engineers on feature rollout.",
      "Owned Android UI/UX design decisions for clarity and ease of use in connected homes.",
      "Handled deployments and ongoing support to meet user and business expectations.",
    ],
  },
] as const;

export const education = {
  degree: "BE — Computer Science and Engineering",
  school: "Gujarat Technological University, Ahmedabad",
  location: "Vadodara, Gujarat",
  year: "May 2017",
  detail: "First class with distinction (7.5 CGPA)",
} as const;

export const testimonials = [
  {
    quote:
      "Durgesh owns the full mobile stack — from architecture to store releases. He ships fast without sacrificing quality, and our release process is dramatically smoother since Codemagic automation.",
    author: "Product Leadership",
    role: "Viva Chefs — Bay Area Startup",
  },
  {
    quote:
      "He translated hiring workflows into a polished Next.js product in weeks. The screening builder and analytics dashboard became core to how we run operations.",
    author: "Founding Team",
    role: "Hire Curated — Restaurant Hiring",
  },
  {
    quote:
      "From founding Android engineer to Flutter lead, Durgesh drove our product roadmap and cost-efficient backend strategy while mentoring the team.",
    author: "Leadership",
    role: "Smartnode Automations",
  },
  {
    quote:
      "As MVP lead for our YC-backed English app, he delivered AI conversation features, auth, and store deployments that set the foundation for our global launch.",
    author: "Product Team",
    role: "MySivi (YC W22)",
  },
] as const;
