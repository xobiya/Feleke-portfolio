import Tool from '../Assets/ToolShare.png';
import Travel from '../Assets/OggeTravel.jpg';
import SubTrack from '../Assets/Subscription.png';
import Nike from '../Assets/Nike.png';
import Ecommerce from '../Assets/E-commerce.png';
import KidameGebiyaImg from '../Assets/Kidamegebiya.png';
import ArifCarSellImg from '../Assets/ArifCarSell.jpg';
import XobiyaErpImg from '../Assets/XobiyaERP.jpg';

export const projectsData = [
  {
    id: 'xobiya-erp',
    title: 'Xobiya ERP — POS & Integrated Enterprise Platform',
    shortTitle: 'Xobiya ERP',
    subtitle: 'Point of Sale, Operations & Accounting Suite (Laravel)',
    category: 'ERP & Enterprise',
    featured: true,
    accentColor: '#3b82f6',
    problem:
      'Retail and multi-branch enterprises struggle to reconcile real-time POS checkouts, inventory purchases, customer CRM accounts, and payroll in a unified ledger.',
    solution:
      'Engineered a unified POS & ERP management platform in Laravel and PostgreSQL, integrating real-time sales analytics, purchase orders, customer CRM, and automated payroll workflows.',
    features: [
      'Real-time POS checkout with order stream and transaction ledger',
      'Comprehensive Sales, Accounting, and Purchase analytics',
      'Integrated Customers CRM, HR directory, and staff payroll engine',
      'Multi-branch operational reporting and role-based permissions'
    ],
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'Livewire', 'Tailwind CSS', 'REST API'],
    metric: '$45.5k Revenue & 700 Orders',
    status: 'Production Architecture',
    githubUrl: 'https://github.com/xobiya',
    liveUrl: '#',
    image: XobiyaErpImg,
    isMockup: false,
    mockupType: 'erp'
  },
  {
    id: 'kidame-gebiya',
    title: 'Kidame Gebiya — Multi-Vendor E-Commerce SaaS',
    shortTitle: 'Kidame Gebiya',
    subtitle: 'Scalable Marketplace Connecting Merchants and Shoppers',
    category: 'Full-Stack SaaS',
    featured: true,
    accentColor: '#f59e0b',
    problem:
      'Independent local merchants lack a modern digital storefront with localized checkout, catalog control, and automated order fulfillment.',
    solution:
      'Developed a multi-tenant e-commerce marketplace enabling vendors to manage inventory and pricing while giving buyers a fast checkout.',
    features: [
      'Dedicated vendor portal with sales analytics and stock control',
      'Dynamic product catalog with multi-variant attributes and image gallery',
      'Frictionless customer cart, checkout, and address management',
      'Secure payment processing and real-time order tracking'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Tailwind CSS'],
    metric: 'Multi-Vendor SaaS',
    status: 'Production Architecture',
    githubUrl: 'https://github.com/xobiya',
    liveUrl: '#',
    image: KidameGebiyaImg,
    isMockup: false,
    mockupType: 'marketplace'
  },
  {
    id: 'arif-car-sell',
    title: 'Arif Car Sell — Verified Automobile Marketplace',
    shortTitle: 'Arif Car Sell',
    subtitle: 'Dealership & Private Vehicle Listing Platform',
    category: 'Full-Stack SaaS',
    featured: true,
    accentColor: '#8b5cf6',
    problem:
      'Vehicle buyers face opaque pricing, unverified vehicle history, and disjointed communication channels in the secondhand automotive market.',
    solution:
      'Built a verified automotive platform featuring multi-point digital inspection reports, multi-parameter filtering, and direct seller messaging.',
    features: [
      'Multi-parameter search (make, model, year, transmission, fuel, mileage)',
      'Digital mechanical condition checklists and high-resolution photo galleries',
      'Direct seller inquiry routing via WhatsApp and integrated messaging',
      'Admin moderation dashboard for listing approval and fraud prevention'
    ],
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    metric: 'Verified Listing Hub',
    status: 'Live Platform',
    githubUrl: 'https://github.com/xobiya',
    liveUrl: 'https://car-broker-showcase.onrender.com/',
    image: ArifCarSellImg,
    isMockup: false,
    mockupType: 'cars'
  },
  {
    id: 'mesariya-share',
    title: 'Community Tool Sharing Platform (MesariyaShare)',
    shortTitle: 'Community Tool Sharing',
    subtitle: 'Peer-to-Peer Equipment & Tool Sharing Hub',
    category: 'Full-Stack SaaS',
    featured: true,
    accentColor: '#10b981',
    problem:
      'Specialized tools and equipment are expensive and sit unused, while community members lack affordable short-term access.',
    solution:
      'Created a peer-to-peer sharing marketplace facilitating equipment discovery, verified reservations, security deposits, and messaging.',
    features: [
      'Geospatial and category-based equipment discovery with availability calendars',
      'Secure user authentication with JWT and identity verification',
      'Transparent reservation workflow with custom deposit and duration rules',
      'Community trust rating system with reviews and dispute logging'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    metric: 'P2P Sharing Economy',
    status: 'Live Web Application',
    githubUrl: 'https://github.com/xobiya/MesariyaShare.git',
    liveUrl: '#',
    image: Tool,
    isMockup: false
  },
  {
    id: 'ogge-travel',
    title: 'Ethiopia Bus Booking Platform (Ogge Travel)',
    shortTitle: 'Ethiopia Bus Booking',
    subtitle: 'Intercity Bus Ticketing & Transportation Fleet Suite',
    category: 'Full-Stack SaaS',
    featured: true,
    accentColor: '#ec4899',
    problem:
      'Intercity bus travel booking traditionally forces passengers into long queues without seat visibility or confirmed reservations.',
    solution:
      'Engineered an end-to-end transportation platform with visual seat selection, route schedules, digital tickets, and fleet dashboards.',
    features: [
      'Visual interactive bus seat layout selector with real-time seat lock',
      'Dynamic departure schedules, intermediate stops, and pricing tiers',
      'Instant digital boarding ticket generation with verification codes',
      'Fleet operator management panel for bus manifests and schedule changes'
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'Tailwind CSS'],
    metric: 'Automated Seat Matrix',
    status: 'Live Production',
    githubUrl: 'https://github.com/xobiya/Ogge-Travel.git',
    liveUrl: 'https://oggetrave.free.nf/',
    image: Travel,
    isMockup: false
  },
  {
    id: 'subscription-tracker',
    title: 'Subscription Tracker Pro',
    shortTitle: 'Subscription Tracker',
    subtitle: 'Recurring Expense Intelligence & Renewal Alerts',
    category: 'Full-Stack SaaS',
    featured: false,
    accentColor: '#6366f1',
    problem:
      'Recurring software subscriptions silently accumulate, causing surprise renewals and untracked monthly budget leaks.',
    solution:
      'Engineered an expense intelligence dashboard with renewal alerts, expense breakdown charts, and automated cancellation reminders.',
    features: [
      'Expenditure breakdown with monthly and annual burn rate analytics',
      'Upcoming renewal timeline with notification alerts',
      'Category grouping across development, infrastructure, and tools',
      'JWT-authenticated secure personal user workspace'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    metric: 'Expense Intelligence',
    status: 'Live Application',
    githubUrl: 'https://github.com/xobiya/subscription-tracker.git',
    liveUrl: '#',
    image: SubTrack,
    isMockup: false
  },
  {
    id: 'nike-ecommerce-ui',
    title: 'Nike E-Commerce Experience UI',
    shortTitle: 'Nike E-Commerce UI',
    subtitle: 'Fluid Motion & Product Discovery Interface',
    category: 'Frontend Apps',
    featured: false,
    accentColor: '#14b8a6',
    problem:
      'Static e-commerce layouts frequently fail to engage users, causing high bounce rates during product exploration.',
    solution:
      'Engineered a fluid product showcase featuring micro-interactions, responsive cart drawer, and high-fidelity previews.',
    features: [
      'Micro-interaction driven product gallery with fluid thumbnail transitions',
      'Interactive size and color variant selectors with live inventory badges',
      'Real-time cart calculation and responsive mobile checkout sheet',
      'Smooth 60fps animations with zero layout shift'
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    metric: '60fps Micro-Interactions',
    status: 'Live Showcase',
    githubUrl: 'https://github.com/xobiya/NikeWebsite.git',
    liveUrl: 'https://nike-website-steel-xi.vercel.app/',
    image: Nike,
    isMockup: false
  }
];

export default projectsData;
