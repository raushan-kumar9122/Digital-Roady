import { Course } from '../types';

export const INSTITUTE_INFO = {
  name: 'The Future Track Computer Education',
  tagline: 'Practical Computer Training for Bright Careers',
  phone: '9835247741',
  phoneDisplay: '+91 98352 47741',
  email: 'thefuturetrackdhanbad@gmail.com',
  address: 'City Centre, Dhanbad, Jharkhand - 826001, India',
  landmark: 'Near City Centre Bus & Auto Stand, Main Road, Dhanbad',
  hours: 'Mon – Sat: 7:00 AM – 7:30 PM | Sunday: Special Batches',
  primaryColor: '#2B0632',
};

export const COURSES: Course[] = [
  {
    id: 'adca',
    name: 'ADCA (Advanced Diploma in Computer Applications)',
    shortName: 'ADCA',
    tagline: 'Complete 1-Year Job-Oriented Master Diploma',
    description: 'A comprehensive one-year diploma covering fundamental computing, advanced MS Office Suite, financial accounting with Tally, graphic basics, web development fundamentals, and database management.',
    duration: '12 Months (Fast-track 6 Months available)',
    category: 'diploma',
    highlights: [
      'Computer Fundamentals & Windows OS Operations',
      'Advanced MS Word, Excel with Formulas, PowerPoint & Access',
      'Tally Prime Accounting with GST & Financial Reporting',
      'HTML5, Web Basics, Internet & Cyber Security Essentials',
      'DTP Basics with Photoshop & CorelDRAW',
      'Speed Typing (Hindi & English)'
    ],
    careerOpportunities: [
      'Computer Operator',
      'Office Administrator',
      'Account Assistant',
      'Data Entry Specialist',
      'Government Exam Computer Proficiency'
    ],
    eligibility: '10th / 12th Pass or any Graduate',
    softwareCovered: ['MS Office', 'Tally Prime', 'Photoshop', 'Windows 11', 'Internet Tools'],
    badge: 'Most Popular'
  },
  {
    id: 'tally-prime',
    name: 'Tally Prime with GST & E-Way Bills',
    shortName: 'Tally Prime',
    tagline: 'Professional Computerized Accounting & Taxation',
    description: 'Learn end-to-end computerized accounting, inventory control, GST calculation, e-invoicing, TDS, payroll processing, and balance sheet preparation as required by modern corporate firms.',
    duration: '3 to 4 Months',
    category: 'accounting',
    highlights: [
      'Company Creation, Ledger Management & Accounting Groups',
      'Inventory, Stock Categories, Godown & Purchase/Sales Orders',
      'GST Accounting (CGST, SGST, IGST), GSTR-1 & 3B Overview',
      'E-Way Bill Generation & E-Invoicing Workflows',
      'Bank Reconciliation (BRS) & Payment Advice',
      'Balance Sheet, Profit & Loss, Trial Balance Generation'
    ],
    careerOpportunities: [
      'Accountant',
      'Tally Operator',
      'Billing Executive',
      'GST Filing Assistant',
      'Audit Assistant'
    ],
    eligibility: '10+2 / Commerce / Any Stream Enthusiast',
    softwareCovered: ['Tally Prime', 'Tally ERP 9 Migration', 'Excel for Accounts'],
    badge: 'High Job Demand'
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing with AI Automation',
    shortName: 'Digital Marketing with AI',
    tagline: 'Modern Growth Marketing, Meta/Google Ads & AI Tools',
    description: 'Master practical digital growth strategies combining Search Engine Optimization (SEO), Meta & Instagram Ads, Google Search Ads, lead generation, and workflow automation with cutting-edge AI tools.',
    duration: '3 to 6 Months',
    category: 'tech',
    highlights: [
      'Search Engine Optimization (On-Page, Off-Page & Local SEO for Google Maps)',
      'Meta Ads Manager: Facebook & Instagram Lead Ads and Retargeting',
      'Google Ads: Search, Display, and Video YouTube Campaigns',
      'AI Prompt Engineering for Marketing (Content, Copywriting & Visuals)',
      'Email Marketing Automation & WhatsApp Business Marketing',
      'Live Campaign Budgets & Analytics Tracking'
    ],
    careerOpportunities: [
      'Digital Marketing Executive',
      'Social Media Specialist',
      'Performance Marketer',
      'SEO Analyst',
      'Freelance Growth Consultant'
    ],
    eligibility: 'Undergraduates, Graduates, Business Owners & Freelancers',
    softwareCovered: ['Google Ads', 'Meta Ads Manager', 'Google Analytics', 'Canva Pro', 'AI Automation Tools'],
    badge: 'Trending'
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    shortName: 'Graphic Designing',
    tagline: 'Visual Branding, Digital Creatives & Print Media',
    description: 'Develop strong design aesthetics and hands-on mastery in industry standard software like Adobe Photoshop, Illustrator, and Canva. Learn typography, layout design, branding, and social media banners.',
    duration: '3 to 5 Months',
    category: 'design',
    highlights: [
      'Design Principles: Color Theory, Typography, Grids & Composition',
      'Photo Retouching, Manipulation & Background Extraction in Photoshop',
      'Vector Logo Design, Icons & Illustrations in Adobe Illustrator',
      'Marketing Collaterals: Flyers, Brochures, Standees & Social Media Posts',
      'Canva Pro Workflows for Fast Commercial Delivery',
      'Print Media Preparation, CMYK vs RGB, Resolution & Export Formats'
    ],
    careerOpportunities: [
      'Graphic Designer',
      'Social Media Creative Artist',
      'Brand Identity Designer',
      'DTP Operator',
      'Creative Freelancer'
    ],
    eligibility: 'Anyone with creative interest (No prior art degree required)',
    softwareCovered: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'CorelDRAW Basics'],
    badge: 'Creative Career'
  },
  {
    id: 'video-editing',
    name: 'Video Editing & Content Creation',
    shortName: 'Video Editing',
    tagline: 'Professional Cinematic Editing for Reels & YouTube',
    description: 'Step into the booming creator economy. Learn professional video editing, audio mixing, color grading, motion graphics, and engaging vertical reel formatting with Adobe Premiere Pro and CapCut.',
    duration: '2 to 4 Months',
    category: 'design',
    highlights: [
      'Timeline Management, Cutting, Trimming & Pacing',
      'Audio Enhancement, Background Music Sync & Sound Effects (SFX)',
      'Color Correction & Cinematic Color Grading (LUTs)',
      'Dynamic Subtitles, Captions & Text Animations for Reels / Shorts',
      'Green Screen Chroma Keying & Visual Transitions',
      'Export Settings optimized for YouTube, Instagram, and Commercial TV'
    ],
    careerOpportunities: [
      'Video Editor',
      'YouTube Channel Content Editor',
      'Reels & TikTok Specialist',
      'Multimedia Producer',
      'Studio Assistant'
    ],
    eligibility: 'Beginners & creators passionate about video production',
    softwareCovered: ['Adobe Premiere Pro', 'CapCut Pro', 'Audacity', 'After Effects Basics'],
    badge: 'Creator Economy'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    shortName: 'Web Development',
    tagline: 'Modern Responsive Websites with HTML, CSS, JS & React',
    description: 'Learn to code clean, modern, and mobile-friendly websites from scratch. Master HTML5 semantic structure, modern CSS/Tailwind layouts, interactive JavaScript, and modern web application development.',
    duration: '4 to 6 Months',
    category: 'tech',
    highlights: [
      'Semantic HTML5 & Modern CSS3 Flexbox / Grid Architecture',
      'Mobile-First Responsive Layouts & Tailwind CSS Styling',
      'JavaScript Fundamentals: DOM Manipulation, Events & API Fetching',
      'Modern Frontend Basics with React & Component Architecture',
      'Git & GitHub for Version Control and Code Collaboration',
      'Domain Setup, Web Hosting & Live Project Deployment'
    ],
    careerOpportunities: [
      'Frontend Web Developer',
      'Junior Web Designer',
      'Website Maintenance Executive',
      'WordPress / CMS Specialist',
      'Freelance Web Creator'
    ],
    eligibility: '10+2 / Graduates with curiosity for coding and technology',
    softwareCovered: ['VS Code', 'Git & GitHub', 'HTML5/CSS3', 'JavaScript', 'React'],
    badge: 'High Value'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    shortName: 'Data Analytics',
    tagline: 'Transform Raw Business Data into Interactive Insights',
    description: 'Become job-ready for analytics roles. Learn advanced Microsoft Excel formulas, relational database querying with SQL, interactive dashboard creation in Power BI, and practical data visualization.',
    duration: '4 to 6 Months',
    category: 'tech',
    highlights: [
      'Advanced Excel: XLOOKUP, Nested IF, Index-Match & Data Validation',
      'Pivot Tables, Slicers, Power Query & Automated Data Cleaning',
      'SQL Fundamentals: SELECT, JOINs, Grouping, Aggregations & Subqueries',
      'Power BI: Building Executive Dashboards, Data Modeling & DAX',
      'Business Case Studies: Sales, HR & Inventory Performance Analysis',
      'Data Storytelling & Reporting for Business Decision Making'
    ],
    careerOpportunities: [
      'Data Analyst',
      'MIS Executive',
      'Business Operations Analyst',
      'Reporting Specialist',
      'Junior BI Developer'
    ],
    eligibility: 'Graduates in any field / final year college students',
    softwareCovered: ['Microsoft Excel (Advanced)', 'Power BI', 'SQL Server / MySQL', 'Power Query'],
    badge: 'Top Corporate Demand'
  },
  {
    id: 'computer-basics',
    name: 'Computer Basics & DCA Foundation',
    shortName: 'Computer Basics',
    tagline: 'Essential Digital Literacy & Fast Typing for Everyone',
    description: 'Perfect for total beginners, students, and seniors. Learn computer hardware basics, Windows navigation, touch typing in English and Hindi, MS Word, MS Excel, PowerPoint, email, and digital banking safety.',
    duration: '2 to 3 Months',
    category: 'basics',
    highlights: [
      'Computer Fundamentals, Keyboard Shortcuts & File Management',
      'Touch Typing Mastery in English & Hindi (Krutidev / Remington)',
      'MS Word: Drafting Letters, Resumes, Applications & Tables',
      'MS Excel: Basic Formulas (Sum, Average, Percentage) & Spreadsheets',
      'MS PowerPoint: Making Clean Presentations & Slideshows',
      'Internet Basics, Email Writing, Online Forms & Safe Digital Payments'
    ],
    careerOpportunities: [
      'Office Assistant',
      'Data Entry Operator',
      'Cyber Cafe Operator',
      'Computer Typist',
      'Receptionist / Front Desk'
    ],
    eligibility: 'Open to all (School students, college starters, homemakers, job seekers)',
    softwareCovered: ['Windows 11', 'MS Office (Word, Excel, PPT)', 'Typing Master', 'Internet Browsers'],
    badge: 'Foundation'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Practical Computer Training',
    description: '100% lab-focused sessions with 1:1 computer allocation. Learn by doing real-world assignments, not just theoretical book reading.',
    icon: 'Monitor'
  },
  {
    title: 'Experienced Instructors',
    description: 'Friendly, patient, and industry-certified trainers with over a decade of teaching excellence guiding you step-by-step.',
    icon: 'GraduationCap'
  },
  {
    title: 'Beginner-Friendly Learning',
    description: 'Zero technical background needed! We start from the basics in Hindi & English and build up your skills at a comfortable pace.',
    icon: 'Users'
  },
  {
    title: 'Career-Oriented Skills',
    description: 'Curriculums designed around actual job market demands in Dhanbad, Ranchi, and metro cities with resume & interview support.',
    icon: 'TrendingUp'
  },
  {
    title: 'Supportive Learning Environment',
    description: 'Air-conditioned lab, flexible morning and evening timings, doubt-clearing sessions, and lifetime learning assistance.',
    icon: 'HeartHandshake'
  }
];

export const INSTITUTE_FACILITIES = [
  {
    name: '1:1 Student to Computer Ratio',
    description: 'Every student gets a dedicated, modern desktop computer throughout their class duration.'
  },
  {
    name: 'Flexible Batch Timings',
    description: 'Early morning (7 AM) to late evening (7:30 PM) slots to suit school, college, and working professionals.'
  },
  {
    name: 'Authorized Course Certification',
    description: 'Receive an ISO-standard institute certificate recognized by private companies and recruitment agencies.'
  },
  {
    name: 'Free Notes & Practice Material',
    description: 'Printed and digital study guides, shortcut keys booklets, and assignment question banks included.'
  },
  {
    name: 'Hindi & English Speed Typing Lab',
    description: 'Dedicated typing software setups for SSC, High Court, and State government computer skill tests.'
  },
  {
    name: 'Prime City Centre Location',
    description: 'Easily accessible from all parts of Dhanbad with seamless auto and bus connectivity at City Centre.'
  }
];

/**
 * Creates pre-filled WhatsApp link for course enquiry
 */
export function getWhatsAppCourseLink(courseName: string): string {
  const text = `Hello The Future Track Computer Education, I am interested in the "${courseName}" course. Please share the syllabus, course fees, upcoming batch timings, and admission procedure.`;
  return `https://wa.me/919835247741?text=${encodeURIComponent(text)}`;
}

/**
 * Creates pre-filled general WhatsApp link
 */
export function getWhatsAppGeneralLink(customMessage?: string): string {
  const text = customMessage || `Hello The Future Track Computer Education, I would like to enquire about courses and student admissions at your City Centre Dhanbad branch.`;
  return `https://wa.me/919835247741?text=${encodeURIComponent(text)}`;
}
