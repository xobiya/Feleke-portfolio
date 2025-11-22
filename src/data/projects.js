import Ecommerce from '../Assets/E-commerce.png'; 
import Nike from '../Assets/Nike.png';
import  login from '../Assets/Login.png';
import Tool from '../Assets/ToolShare.png'
import Travel from '../Assets/OggeTravel.png'
import SubTrack from '../Assets/Subscription.png';  


 const projectsData = [
 {
       id: 1,
       title: ' E-Commerce Experience',
       description: 'An immersive shopping experience with React and Tailwindcss featuring product showcases in a sleek and modern design.',
       image: Ecommerce,
       tags: ['React', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS'],
       category: 'Frontend',
       liveUrl: '#',
       githubUrl: 'https://github.com/xobiya/E-commerce.git'
     },
     {
    id: 2,
    title: 'Nike E‑commerce UI',
    description: 'Responsive e‑commerce UI built with React and Tailwind; includes product listing, filters and cart mockups.',
    image: Nike,
    tags: ['React', 'TailwindCSS', 'Vite'],
    category: 'Frontend',
    liveUrl: 'https://nike-website-steel-xi.vercel.app/',
    githubUrl: 'https://github.com/xobiya/NikeWebsite.git'
  },
   {
  id: 3,
  title: 'Ogge Travel Agency Website',
  description: 'A fully functional travel agency website featuring destination listings, booking system, admin dashboard, and dynamic content management built with PHP and MySQL.',
  image: Travel,
  tags: ['HTML', 'TailwindCSS', 'PHP', 'MySQL'],
  category: 'Fullstack',
  liveUrl: '#',
  githubUrl: 'https://github.com/xobiya/Ogge-Travel.git'
},

     
       {
    "id": 4,
    "title": "Offline Exam Proctor System",
    "description": "Java Swing desktop application with offline exam mode, activity monitoring, auto-grading, and MySQL database.",
    "image": login,
    "tags": ["Java", "Swing", "MySQL", "JDBC"],
    "category": "Backend",
    "liveUrl": "#",
    "githubUrl": "https://github.com/xobiya/Offline-Exam-Proctor.git"
  },
     {
  id: 5,
  title: 'Community Tool Sharing Platform',
  description: 'A full-stack web application that enables community members to share tools and equipment. Features user authentication, tool listings, booking system, and real-time notifications.',
  image: Tool,
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
  category: 'Fullstack',
  liveUrl: '#',
  githubUrl: 'https://github.com/xobiya/MesariyaShare.git'
},
{
    id: 6,
    title: 'Subscription Tracker Pro',
    description: 'A comprehensive full-stack subscription management platform with automated reminders, payment tracking, and analytics dashboard. Features JWT authentication, real-time notifications, and email workflows.',
    image: SubTrack,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'REST API'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: 'https://github.com/xobiya/subscription-tracker.git'
  }
   
];

export default projectsData;