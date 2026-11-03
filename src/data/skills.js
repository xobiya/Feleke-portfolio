export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Architecting responsive, high-performance user interfaces with fluid animations and deterministic state.",
    skills: [
      {
        name: "React.js",
        badge: "Core Driver",
        highlight: "Component lifecycle, Custom hooks, Concurrent features, Virtualized lists",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg"
      },
      {
        name: "Next.js",
        badge: "Production SSR",
        highlight: "App Router, Server Components, API routes, Dynamic routing & caching",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg"
      },
      {
        name: "TypeScript",
        badge: "Type Safety",
        highlight: "Generics, Strict typing, Interface contracts, End-to-end data schemas",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg"
      },
      {
        name: "JavaScript",
        badge: "ES6+ Mastery",
        highlight: "Asynchronous programming, Closures, DOM manipulation, Event loop",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg"
      },
      {
        name: "Tailwind CSS",
        badge: "Design Systems",
        highlight: "Responsive utilities, Custom design tokens, Theme configuration, JIT",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Constructing robust, secure, and low-latency microservices, APIs, and asynchronous business logic.",
    skills: [
      {
        name: "Node.js",
        badge: "Runtime",
        highlight: "Event-driven architecture, Non-blocking I/O, Worker threads, Stream processing",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nodedotjs.svg"
      },
      {
        name: "NestJS",
        badge: "Enterprise",
        highlight: "Modular design, Dependency injection, Guards, Interceptors & Microservices",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nestjs.svg"
      },
      {
        name: "Laravel",
        badge: "MVC Robustness",
        highlight: "Eloquent ORM, Queues & Jobs, Service providers, Policy authorization",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/laravel.svg"
      },
      {
        name: "Express.js",
        badge: "API Gateway",
        highlight: "Middleware chains, Error handlers, JWT verification, Rate limiting",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/express.svg"
      },
      {
        name: "REST API Development",
        badge: "Standards",
        highlight: "RESTful principles, OpenAPI specifications, Webhook events, Idempotency",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg"
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Architecture",
    description: "Designing normalized schemas, query execution plans, and resilient multi-tenant isolation layers.",
    skills: [
      {
        name: "PostgreSQL",
        badge: "Primary RDBMS",
        highlight: "Complex joins, Indexing strategies, JSONB queries, ACID transactions",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postgresql.svg"
      },
      {
        name: "MySQL",
        badge: "Relational",
        highlight: "Schema normalization, Foreign key integrity, Stored procedures & Triggers",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mysql.svg"
      },
      {
        name: "MongoDB",
        badge: "Document Store",
        highlight: "Aggregation pipelines, Flexible indexing, Replica sets, Schemaless data",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mongodb.svg"
      },
      {
        name: "Prisma ORM",
        badge: "Type-Safe Data",
        highlight: "Schema migrations, Type-safe client queries, Relationship relations, Seeding",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/prisma.svg"
      },
      {
        name: "Database Architecture",
        badge: "Data Modeling",
        highlight: "Entity-Relationship modeling, Denormalization tradeoffs, Query optimization",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/databricks.svg"
      },
      {
        name: "Multi-Tenant Systems",
        badge: "Enterprise SaaS",
        highlight: "Tenant discrimination keys, Schema-per-tenant isolation, Data tenancy guards",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hive-blockchain.svg"
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description: "Automating integration pipelines, containerizing workloads, and orchestrating reliable deployments.",
    skills: [
      {
        name: "Docker",
        badge: "Containerization",
        highlight: "Multi-stage builds, Container networks, Docker Compose, Volume persistence",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/docker.svg"
      },
      {
        name: "Git",
        badge: "Version Control",
        highlight: "Feature branch workflows, Interactive rebasing, Bisect debugging, Tag releases",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/git.svg"
      },
      {
        name: "GitHub Actions",
        badge: "CI/CD Workflows",
        highlight: "Automated test suites, Lint validations, Docker image build & push, Matrix jobs",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/githubactions.svg"
      },
      {
        name: "CI/CD",
        badge: "Continuous Delivery",
        highlight: "Zero-downtime rolling deploys, Environment parity, Secret management",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/circleci.svg"
      },
      {
        name: "Deployment",
        badge: "Cloud & Edge",
        highlight: "Vercel, Render, VPS configuration, Reverse proxy routing (Nginx)",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg"
      },
      {
        name: "Server Configuration",
        badge: "Linux SysAdmin",
        highlight: "Ubuntu/Debian server hardening, SSL/TLS Let's Encrypt, Process monitoring (PM2)",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linux.svg"
      }
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise Application Development",
    description: "Designing end-to-end organizational operating software that synchronizes departments and automates workflows.",
    skills: [
      {
        name: "ERP Systems",
        badge: "Enterprise Core",
        highlight: "End-to-end resource coordination, inter-departmental ledgers, unified audit records",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sap.svg"
      },
      {
        name: "HRMS",
        badge: "Human Resources",
        highlight: "Employee lifecycles, Onboarding records, Department hierarchies, Performance reviews",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/workplace.svg"
      },
      {
        name: "Attendance Management",
        badge: "Hardware Sync",
        highlight: "Biometric clock-in streaming, Shift scheduling, Overtime & Penalty algorithms",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/clockify.svg"
      },
      {
        name: "Inventory Management",
        badge: "Warehouse Control",
        highlight: "Batch tracking, Stock in/out vouchers, Multi-location warehouses, Reorder alerts",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/box.svg"
      },
      {
        name: "Sales and Billing",
        badge: "Commerce Operations",
        highlight: "Point-of-sale invoicing, Payment receipts, Credit management, Tax computation",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg"
      },
      {
        name: "Role-Based Access Control",
        badge: "Security & Governance",
        highlight: "Permission matrices, Dynamic policy enforcement, Context-aware access gates",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/auth0.svg"
      },
      {
        name: "Multi-Tenant SaaS Architecture",
        badge: "Scalable Platforms",
        highlight: "Tenant subdomains, Configurable tenant settings, Isolated database schemas",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kubernetes.svg"
      }
    ]
  }
];

export const flatHighlights = [
  "React & Next.js",
  "NestJS & Node.js",
  "Laravel & PHP",
  "PostgreSQL & MySQL",
  "Docker & CI/CD",
  "Multi-Tenant ERP",
  "Biometric Hardware Sync",
  "Granular RBAC"
];
