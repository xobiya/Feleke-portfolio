export const developmentProcess = [
  {
    step: "01",
    phase: "Discovery & Requirements",
    title: "Understanding Business Reality & Constraints",
    tagline: "Pinpointing operational bottlenecks and operational realities.",
    description: "Every successful system begins by mapping existing workflows—whether currently run on paper, scattered Excel sheets, or legacy tools. I interview stakeholders, analyze pain points, define technical constraints, and outline functional specifications.",
    deliverables: [
      "User persona mapping & role hierarchy",
      "Functional requirements document (FRD)",
      "Technical feasibility & timeline roadmap",
      "Core operational KPI definitions"
    ],
    tools: ["System Walkthroughs", "Stakeholder Alignment", "Figma Flowcharts", "Architecture Specs"],
    accent: "from-blue-500/20 to-sky-500/10"
  },
  {
    step: "02",
    phase: "System Architecture",
    title: "Designing Data Schemas & Modular Systems",
    tagline: "Solid foundations that prevent architectural debt.",
    description: "Before writing application logic, I construct the overarching blueprint: choosing between monolithic vs. modular services, architecting normalized entity relationships (ERDs), planning API contracts, and planning multi-tenant isolation.",
    deliverables: [
      "Entity-Relationship Diagrams (ERDs)",
      "RESTful API & webhook contract designs",
      "Authentication & RBAC security matrices",
      "Multi-tenant tenancy isolation model"
    ],
    tools: ["PostgreSQL Diagrams", "OpenAPI / Swagger", "Lucidchart", "Schema Migration Plans"],
    accent: "from-indigo-500/20 to-blue-500/10"
  },
  {
    step: "03",
    phase: "Database & Backend Development",
    title: "Constructing Resilient APIs & Business Logic",
    tagline: "Fast, transactional, and type-safe server backends.",
    description: "Implementing core services with Node.js/NestJS/Laravel and relational databases. Writing ACID-compliant transactions, indexing performance-critical tables, integrating hardware communication (e.g. biometric sockets), and strictly validating input payloads.",
    deliverables: [
      "Performant database schema & migrations",
      "Secure authentication & JWT token rotation",
      "Business logic controllers & service layers",
      "Comprehensive error handling & audit logs"
    ],
    tools: ["Node.js / NestJS / Laravel", "PostgreSQL / MySQL", "Prisma ORM", "Redis Caching"],
    accent: "from-cyan-500/20 to-teal-500/10"
  },
  {
    step: "04",
    phase: "Frontend & User Experience",
    title: "Crafting High-Converting, Intuitive Interfaces",
    tagline: "Complex enterprise logic hidden behind effortless UX.",
    description: "Building modern, accessible, and responsive user interfaces with React and Tailwind CSS. Crafting bento layouts, responsive tables, real-time status indicators, and subtle micro-interactions that make operators fast and delighted.",
    deliverables: [
      "Responsive component library & design system",
      "Optimized client-side state & server synchronization",
      "Micro-interactions & fluid animations",
      "Dark cinematic mode with high contrast compliance"
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js / WebGL"],
    accent: "from-amber-500/20 to-orange-500/10"
  },
  {
    step: "05",
    phase: "Integration & Testing",
    title: "Verification, Hardware Sync & Edge Cases",
    tagline: "Eliminating defects before real users touch the system.",
    description: "Connecting the frontend to backend endpoints, verifying third-party payment gateways (e.g., local payment processors), testing real hardware sync (biometric readers), and subjecting the database to stress queries and permission boundary checks.",
    deliverables: [
      "End-to-end user journey validation",
      "Role-based permission leak prevention",
      "Payment gateway & external webhook testing",
      "Network latency & mobile viewport audits"
    ],
    tools: ["Postman / Newman", "Browser DevTools", "Edge-Case Stress Tests", "Hardware Simulation"],
    accent: "from-emerald-500/20 to-green-500/10"
  },
  {
    step: "06",
    phase: "Deployment & Maintenance",
    title: "Continuous Delivery, Backups & Scalability",
    tagline: "Smooth production launch and uninterrupted operation.",
    description: "Deploying production builds using containerized Docker environments, configuring automated CI/CD pipelines, provisioning SSL certificates, setting up database backup cron jobs, and monitoring server health in real-time.",
    deliverables: [
      "Containerized Docker & docker-compose setups",
      "GitHub Actions automated deployment pipelines",
      "Database snapshot & disaster recovery scripts",
      "Post-launch documentation & administrator training"
    ],
    tools: ["Docker", "GitHub Actions", "Nginx", "Linux VPS / Vercel", "PM2 / Log Monitors"],
    accent: "from-purple-500/20 to-violet-500/10"
  }
];
