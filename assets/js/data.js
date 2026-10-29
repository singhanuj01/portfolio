// CONTENT EDITOR: change your profile, work, skills, and links here.
// Use an empty string for unavailable links. Never use '#' for a project URL.
window.PORTFOLIO = {
  name: 'Anuj Singh', role: 'Laravel / PHP Web Developer', years: '3+',
  email: 'stpanujsingh@gmail.com', phone: '+91 79852 71302', location: 'Lucknow, Uttar Pradesh, India',
  github: '', linkedin: 'https://www.linkedin.com/in/anuj-singh-598830242', resume: 'assets/resume/Anuj-Singh-Resume.pdf',
  about: 'I’m a backend-focused web developer with 3+ years of experience building and maintaining web applications with PHP, Laravel, MySQL, and JavaScript. My work spans REST APIs, payment and logistics integrations, admin panels, e-commerce workflows, testing, and live-server troubleshooting.',
  education: 'MCA · Dr. A. P. J. Abdul Kalam Technical University, Lucknow | BCA · University of Lucknow, 2020–2023',
  skills: [
    { icon: '{ }', title: 'Backend development', items: ['PHP', 'Laravel', 'MVC Architecture', 'Authentication', 'CRUD', 'Validation'] },
    { icon: '↔', title: 'APIs & integrations', items: ['REST APIs', 'Webhooks', 'Razorpay', 'MSG91 / BSNL SMS', 'Shiprocket', 'Shadowfax'] },
    { icon: '▤', title: 'Databases', items: ['MySQL', 'SQLite', 'SQL', 'Database Design', 'Query Optimization'] },
    { icon: '</>', title: 'Frontend development', items: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'jQuery / Ajax', 'Bootstrap', 'Responsive Design'] },
    { icon: '◈', title: 'CMS & platforms', items: ['WordPress', 'WooCommerce', 'Joomla', 'Drupal'] },
    { icon: '⌘', title: 'Tools & deployment', items: ['Git / GitHub', 'Postman', 'VS Code', 'WAMP', 'AWS', 'Hostinger / cPanel', 'DNS / SSL', 'Backups'] }
  ],
  experience: [
    { company: 'Quick Infotech Technologies Pvt. Ltd.', role: 'Web Developer', date: 'Feb 2025 — Present', current: true, details: ['Develop and maintain Laravel business applications, admin dashboards, and role-based workflows.', 'Integrate Razorpay, MSG91, BSNL SMS, Shadowfax, Shiprocket, REST APIs, and webhooks.', 'Manage AWS, Hostinger, and cPanel deployments, including DNS, SSL, migrations, backups, and incident resolution.'], tags: ['Laravel', 'REST APIs', 'Integrations', 'Deployment'] },
    { company: 'SWA Softech Pvt. Ltd.', role: 'Web Developer', date: 'Aug 2024 — Feb 2025', details: ['Built dynamic modules with PHP, Laravel, MySQL, JavaScript, jQuery, Ajax, and Bootstrap.', 'Connected frontend components with backend APIs, resolved defects, and supported client project deployments.'], tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'] },
    { company: 'DSV Infosolutions Pvt. Ltd.', role: 'Web Developer', date: 'Dec 2023 — Aug 2024', details: ['Developed responsive screens, backend forms, CRUD modules, and database-connected business features.', 'Supported delivery through structured debugging, usability improvements, and production maintenance.'], tags: ['PHP', 'CRUD', 'Bootstrap', 'Maintenance'] }
  ],
  // These are actual resume projects. Visuals are conceptual, not client screenshots.
  // Add only technologies you can confirm for a particular project.
  projects: [
    { name: 'Jaja Trends', category: 'E-commerce', type: 'commerce', label: 'FASHION & COMMERCE', description: 'A Laravel-based e-commerce platform connecting customer journeys with backend operations.', role: 'Contributed to responsive user journeys, backend modules, and production deployment support.', technologies: ['Laravel', 'PHP', 'E-commerce'], features: ['Responsive customer journeys', 'Backend application modules', 'Production deployment support'], live: 'https://jajatrends.com', github: '' },
    { name: 'Easy Kart India', category: 'E-commerce', type: 'dashboard', label: 'COMMERCE OPERATIONS', description: 'Database-driven shopping experiences and admin workflows for an e-commerce website.', role: 'Enhanced customer-facing features, database-driven pages, frontend usability, admin workflows, and hosting operations.', technologies: ['E-commerce', 'Database', 'Admin workflows'], features: ['Customer-facing feature updates', 'Admin workflow improvements', 'Hosting operations support'], live: 'https://easykartindia.com', github: '' },
    { name: 'Dreamers India', category: 'Web applications', type: 'website', label: 'WEB DEVELOPMENT', description: 'Responsive website modules with connected backend functionality and live-site support.', role: 'Developed and maintained responsive modules with backend integration.', technologies: ['Responsive UI', 'Backend integration'], features: ['Responsive website modules', 'Backend integration', 'Live-site maintenance'], live: 'https://dreamersindia.in', github: '' },
    { name: 'TCU World', category: 'Web applications', type: 'network', label: 'APPLICATION MAINTENANCE', description: 'Ongoing frontend and backend improvements for a production website.', role: 'Contributed to frontend and backend development, feature updates, issue resolution, and maintenance.', technologies: ['Frontend', 'Backend', 'Maintenance'], features: ['Feature updates', 'Issue resolution', 'Production maintenance'], live: 'https://tcuworld.in', github: '' },
    { name: 'Treasure Global Pool', category: 'Web applications', type: 'api', label: 'BACKEND & API INTEGRATION', description: 'Laravel and PHP modules with API-based functionality and deployment support.', role: 'Built application modules, supported API functionality, and assisted with deployment and troubleshooting.', technologies: ['Laravel', 'PHP', 'APIs'], features: ['Laravel / PHP modules', 'API-based functionality', 'Deployment and troubleshooting'], live: 'https://treasureglobalpool.io', github: '' }
  ],
  services: [
    ['{ }', 'Laravel development', 'Custom web applications, business systems, and admin dashboards.'],
    ['</>', 'PHP development', 'Backend functionality, custom modules, and focused bug fixes.'],
    ['↔', 'REST API development', 'APIs with authentication, validation, and clear data responses.'],
    ['⌘', 'API integration', 'Connect payments, logistics, notifications, and third-party services.'],
    ['W', 'WordPress / WooCommerce', 'Store customization, website development, and troubleshooting.'],
    ['◈', 'CMS development', 'Joomla and Drupal customization, integrations, and maintenance.'],
    ['↗', 'Website maintenance', 'Debugging, testing, performance improvements, and deployment support.']
  ],
  process: [['Understand', 'Requirements & context'], ['Plan', 'Structure & approach'], ['Develop', 'Build the solution'], ['Test', 'Check the details'], ['Deploy', 'Launch with care'], ['Maintain', 'Support & improve']]
};
