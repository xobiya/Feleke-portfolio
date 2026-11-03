// Self-contained, colorful SVG icons for all 29 technologies

export function TechIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case 'React.js':
      return (
        <svg className={className} viewBox="-11.5 -10.23 23 20.46" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00f0ff" />
          <g stroke="#00f0ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'Next.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#ffffff">
          <circle cx="12" cy="12" r="11" fill="#000" stroke="#fff" strokeWidth="1.5" />
          <path d="M7 16V8h2.5l5.5 9.5V8H17v8h-2.5L9 8.5V16H7z" fill="#fff" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 15.5h-1.8v-6.3h-2.3V7.7h6.4v1.5h-2.3v6.3zm3.2 0v-1.6c.4.3.8.5 1.3.6.4.1.8.2 1.2.2.5 0 .9-.1 1.1-.3.2-.2.4-.4.4-.7 0-.2-.1-.4-.2-.5-.1-.1-.3-.3-.6-.4l-.8-.4c-.6-.3-1-.6-1.3-1-.3-.4-.4-.8-.4-1.3 0-.4.1-.8.3-1.1.2-.3.5-.6.9-.8.4-.2.9-.3 1.5-.3.5 0 1 .1 1.5.2.5.2.9.4 1.2.7l-.6 1.4c-.3-.2-.7-.4-1.1-.5-.4-.1-.7-.2-1.1-.2-.4 0-.7.1-.9.2-.2.1-.3.3-.3.6 0 .2.1.3.2.4.1.1.3.2.6.4l.8.4c.7.3 1.1.7 1.4 1 .3.4.4.8.4 1.4 0 .4-.1.8-.3 1.2-.2.4-.5.6-1 .8-.4.2-1 .3-1.6.3-.6 0-1.2-.1-1.7-.3-.5-.1-1-.4-1.4-.7z" fill="#fff" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c.8.5 1.7.8 2.6.8 1.5 0 2.4-.7 2.4-2.1v-6.7h-2.2v6.6c0 .6-.3.9-.9.9-.4 0-.8-.1-1.1-.3l-.8 1.8zm6.5 0c.9.5 2 .8 3.1.8 2.5 0 3.9-1.3 3.9-3.2 0-1.7-1-2.6-2.8-3.4-.9-.4-1.4-.7-1.4-1.2 0-.4.3-.8 1-.8.6 0 1.2.2 1.7.5l.7-1.8c-.7-.4-1.6-.6-2.5-.6-2.2 0-3.6 1.3-3.6 3.1 0 1.6 1.1 2.5 2.7 3.2.9.4 1.5.8 1.5 1.4 0 .5-.4.9-1.2.9-.8 0-1.6-.3-2.2-.7l-.9 1.8z" fill="#000" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#68A063">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
        </svg>
      );
    case 'NestJS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#E0234E">
          <path d="M21.5 5.5l-6-3.5c-.8-.5-1.8-.5-2.6 0l-6 3.5c-.8.5-1.3 1.3-1.3 2.3v7c0 .9.5 1.8 1.3 2.3l6 3.5c.4.2.8.4 1.3.4s.9-.1 1.3-.4l6-3.5c.8-.5 1.3-1.3 1.3-2.3v-7c0-1-.5-1.8-1.3-2.3zm-10.7 8.3l-2.4-1.4V9.6l2.4 1.4v2.8zm2.4 0V11l2.4-1.4v2.8l-2.4 1.4z" />
        </svg>
      );
    case 'Laravel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF2D20">
          <path d="M22 6.5l-9.5-5.5-9.5 5.5v11l9.5 5.5 9.5-5.5v-11zm-9.5 9.3l-6-3.5 6-3.5 6 3.5-6 3.5z" />
        </svg>
      );
    case 'Express.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#ffffff">
          <text x="3" y="16" fontFamily="monospace" fontWeight="bold" fontSize="13" fill="#ffffff">EX</text>
          <path d="M19 8l-4 8m0-8l4 8" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'REST API Development':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#336791">
          <ellipse cx="12" cy="7" rx="8" ry="3.5" />
          <path d="M4 7v10c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V7" fill="none" stroke="#336791" strokeWidth="2" />
          <path d="M4 12c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5" fill="none" stroke="#336791" strokeWidth="2" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#00758F">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-4h2v4z" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#13AA52">
          <path d="M12 2C9.5 6 7 11 12 22c5-11 2.5-16 0-20z" />
        </svg>
      );
    case 'Prisma ORM':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#00f0ff">
          <path d="M4 20l7-18 9 12-7 6z" />
        </svg>
      );
    case 'Database Architecture':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="6" rx="2" />
          <rect x="3" y="15" width="18" height="6" rx="2" />
          <line x1="8" y1="9" x2="8" y2="15" />
          <line x1="16" y1="9" x2="16" y2="15" />
        </svg>
      );
    case 'Multi-Tenant Systems':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'Docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
          <rect x="2" y="8" width="3" height="3" />
          <rect x="6" y="8" width="3" height="3" />
          <rect x="10" y="8" width="3" height="3" />
          <rect x="6" y="4" width="3" height="3" />
          <rect x="10" y="4" width="3" height="3" />
          <path d="M1 12c1 5 5 9 10 9 6 0 11-4 12-9H1z" />
        </svg>
      );
    case 'Git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6m3-3h6" stroke="#F05032" strokeWidth="2" />
        </svg>
      );
    case 'GitHub Actions':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2088FF">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#2088FF" strokeWidth="2" />
          <polygon points="10 8 16 12 10 16" fill="#2088FF" />
        </svg>
      );
    case 'CI/CD':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'Deployment':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="m12 12 4 4m0 0-4 4m4-4H8" />
        </svg>
      );
    case 'Server Configuration':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="6" rx="2" />
          <rect x="2" y="15" width="20" height="6" rx="2" />
          <line x1="6" y1="6" x2="6" y2="6.01" />
          <line x1="6" y1="18" x2="6" y2="18.01" />
        </svg>
      );
    case 'ERP Systems':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'HRMS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'Attendance Management':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'Inventory Management':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'Sales and Billing':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'Role-Based Access Control':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'Multi-Tenant SaaS Architecture':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

