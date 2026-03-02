
import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { 
    name: 'PPIC & Procurement', 
    level: 90, 
    category: 'Core', 
    icon: 'bx-bar-chart-alt',
    explanation: 'Strategic production planning and inventory control management for optimized output.',
    tools: ['ERP Systems', 'SAP', 'Inventory Tracking Software'],
    behaviours: { strategic: 88, analytical: 90, operational: 95, leadership: 85, risk: 92 }
  },
  { 
    name: 'Forecasting', 
    level: 92, 
    category: 'Strategy', 
    icon: 'bx-trending-up',
    explanation: 'Predicting future demand and supply trends using historical data and statistical models.',
    tools: ['Time Series Analysis', 'Moving Averages', 'MS Excel Solver'],
    behaviours: { strategic: 92, analytical: 94, operational: 88, leadership: 80, risk: 90 }
  },
  { 
    name: 'Excel (Pivot/VBA)', 
    level: 95, 
    category: 'Data', 
    icon: 'bx-data',
    explanation: 'Expertise in building complex spreadsheets, automation via VBA, and data analysis through Pivot tables.',
    tools: ['MS Excel', 'VBA Macros', 'Power Pivot'],
    behaviours: { strategic: 82, analytical: 96, operational: 90, leadership: 75, risk: 85 }
  },
  { 
    name: 'Google Apps Script', 
    level: 90, 
    category: 'Data', 
    icon: 'bx-cloud',
    explanation: 'Custom automation for Google Workspace to streamline cross-platform workflows.',
    tools: ['Google Sheets', 'App Script Editor', 'JSON APIs'],
    behaviours: { strategic: 85, analytical: 92, operational: 90, leadership: 80, risk: 88 }
  },
  { 
    name: 'Analyzing', 
    level: 94, 
    category: 'Data', 
    icon: 'bx-search-alt',
    explanation: 'Deep diving into complex datasets to extract actionable business insights.',
    tools: ['Power BI', 'SQL', 'Data Cleaning Tools'],
    behaviours: { strategic: 85, analytical: 98, operational: 85, leadership: 70, risk: 80 }
  },
  { 
    name: 'Tech Savvy', 
    level: 96, 
    category: 'Technical', 
    icon: 'bx-chip',
    explanation: 'Rapid adaptation to new software and hardware environments with a problem-solving mindset.',
    tools: ['Cloud Computing', 'AI Tools', 'Modern SaaS Platforms'],
    behaviours: { strategic: 90, analytical: 90, operational: 95, leadership: 80, risk: 85 }
  },
  { 
    name: 'Supply Chain Opt.', 
    level: 88, 
    category: 'Strategy', 
    icon: 'bx-link',
    explanation: 'Optimizing the end-to-end flow of goods to reduce costs and improve delivery times.',
    tools: ['Logistics Software', 'Route Optimization', 'Warehouse Management'],
    behaviours: { strategic: 90, analytical: 92, operational: 94, leadership: 87, risk: 91 }
  },
  { 
    name: 'Admin Automation', 
    level: 95, 
    category: 'Core', 
    icon: 'bx-task',
    explanation: 'Eliminating repetitive tasks through "one-click" systems and automated reporting.',
    tools: ['Zapier', 'Python Scripts', 'Workflow Builders'],
    behaviours: { strategic: 85, analytical: 92, operational: 90, leadership: 80, risk: 88 }
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    company: 'PT. Universal Luggage Indonesia',
    title: 'Production Planning and Inventory Control',
    duration: 'Feb 2024 - Currently working',
    description: 'Strategic production planning and inventory control management for optimized output.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183284/Screenshot_2026-02-27_130144_o0jpll.png',
    tags: ['Planning', 'Inventory', 'Operations'],
    jobdesks: [
      'Manage production schedules and control materials according to order requirements.',
      'Track inventory data for materials, production output, reworked goods, and finished goods.',
      'Prepare daily production reports, shipment records, barcodes, export stuffing lists, packing lists, and purchase orders (POs).',
      'Divide and arrange goods to be shipped according to the transportation mode ordered.',
      'Coordinate with the sales, warehouse, purchasing, and export-import teams to ensure the smooth flow of materials through to shipment.',
      'Ensure stock accuracy and availability of goods to support production and export targets.',
      'Compile analysis'
    ],
    problems: [
      'Inventory discrepancies causing production delays.',
      'Inefficient manual tracking systems.'
    ],
    systems: ['ERP', 'Inventory Management System'],
    tools: ['MS Excel (VBA)', 'Google Sheets', 'Power BI']
  },
  {
    id: '2',
    company: 'Kayu Idheal (Part-Time)',
    title: 'Entrepreneur / Online Seller',
    duration: 'Aug 2022 - Feb 2024',
    description: 'Managing end-to-end e-commerce operations across multiple platforms.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183285/Screenshot_2026-02-27_130016_pwy4qe.png',
    tags: ['E-commerce', 'Sales', 'Marketing'],
    jobdesks: [
      'Built and managed an online business selling 24 types of wood products, reaching thousands of units sold.',
      'Managed multi-channel sales (Tokopedia, Facebook, and direct customers).',
      'Handled customer service, order processing, packaging, shipping, and after-sales support.',
      'Set product pricing, promotions, and warranty policies to increase sales and maintain customer satisfaction.',
      'Maintained long-term relationships with customers through personalized service and communication.'
    ],
    problems: [
      'High competition in the online marketplace.',
      'Managing logistics and shipping delays.'
    ],
    systems: ['Tokopedia Seller Center', 'Facebook Business Suite'],
    tools: ['Canva', 'Social Media Ads', 'Excel for Bookkeeping']
  },
  {
    id: '3',
    company: 'Freelancer',
    title: 'Professional Translator Freelance',
    duration: 'Jun 2022 - Oct 2023',
    description: 'Accurate and context-aware translation services bridging communication gaps.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183286/Screenshot_2026-02-27_160818_vqtyhz.png',
    tags: ['Translation', 'Linguistics'],
    jobdesks: [
      'Translated 200+ documents across education, business, legal, and technical fields (EN ↔ ID), ensuring client satisfaction.',
      'Collaborated with international and local clients, handling multiple projects simultaneously with zero quality complaints.',
      'Delivered accurate translations with attention to terminology, cultural nuance, and context.',
      'Edited and proofread translated materials, improving overall readability and client trust.',
      'Built long-term client relationships, leading to repeat projects and referrals.'
    ],
    problems: [
      'Translating complex technical jargon into layman terms.',
      'Meeting tight deadlines for large-scale projects.'
    ],
    systems: ['CAT Tools', 'Cloud Collaboration Platforms'],
    tools: ['SDL Trados', 'Grammarly', 'Google Docs']
  },
  {
    id: '4',
    company: 'Emilio’s Private Course',
    title: 'Private Tutor',
    duration: 'Mar 2021 - Feb 2022',
    description: 'Communication and mentoring focused on English Education and personal growth.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    tags: ['English', 'Mentoring'],
    jobdesks: [
      'Delivered personalized online lessons for 5 students, improving average academic performance by 20%.',
      'Developed custom learning plans based on student strengths and weaknesses, ensuring measurable progress.',
      'Mentored students in English language and general academic subjects, building confidence and communication skills.',
      'Applied interactive and adaptive teaching methods, leading to higher engagement and retention.',
      'Maintained close communication with parents to track learning outcomes and provide feedback.'
    ],
    problems: [
      'Adapting teaching methods to different learning styles.',
      'Keeping students engaged during remote learning sessions.'
    ],
    systems: ['Learning Management Systems', 'Video Conferencing'],
    tools: ['Zoom', 'Google Classroom', 'Quizlet']
  },
  {
    id: '5',
    company: 'Kedai K-Food Eommachil',
    title: 'Outlet Supervisor',
    duration: 'Feb 2019 – Jan 2021',
    description: 'End-to-end management of retail outlets, focusing on quality control and team productivity.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183285/Screenshot_2026-02-27_145852_f1fry1.png',
    tags: ['Leadership', 'Management'],
    jobdesks: [
      'Lead a team of teaching assistants in designing work programs and completing them together.',
      'Successfully created and ran English lessons outside of school hours.',
      'Assist teaching assistants in teaching, supervising, inputting grades and other administration.'
    ],
    problems: [
      'Staff turnover and training challenges.',
      'Maintaining consistent quality across multiple shifts.'
    ],
    systems: ['POS System', 'Staff Management Software'],
    tools: ['Excel for Reporting', 'Inventory Tracking Tools']
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI version of Shafa Millah Ahmad, a Project & Data Monitoring Enthusiast.
Your goal is to represent Shafa to potential employers and clients.
Background:
- Bachelor's degree in English Education.
- Professional experience in administration, supervision, quality control, procurement, and PPIC (Production Planning and Inventory Control).
- Expert in "one-click" automation systems using MS Excel (VBA, Pivot, VLOOKUP) and Google Workspace (App Script).
- Strong communicator and team leader.

When people ask about Shafa:
- Emphasize his ability to "work smarter" through administrative automation.
- Mention his versatility (from English teaching to complex production planning).
- Highlight his data-driven mindset and analytical capabilities.
- Keep answers professional, helpful, and concise.
`;
