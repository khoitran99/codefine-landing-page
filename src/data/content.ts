import { company } from '@/data/company'

export const services = [
  {
    title: 'Web App Development',
    description:
      'Scalable web applications from MVP to enterprise, built on modern frameworks and AI-accelerated delivery.',
    bullets: [
      'Custom storefronts and PWAs',
      'Checkout and payment integrations',
      'Inventory and order management',
      'Headless commerce platforms',
    ],
  },
  {
    title: 'IT Staff Augmentation',
    description:
      'Vetted senior engineers who plug into your team fast, ramp up faster, and ship like they always belonged.',
    bullets: [
      'Vetted talent matched to your stack',
      'Plug directly into your sprints and tools',
      'Scale capacity up or down as needed',
      'Long-term partnership, not transactional contracts',
    ],
  },
  {
    title: 'Data Migration & DevOps',
    description:
      'Zero-downtime migrations, automated CI/CD pipelines, and modern cloud infrastructure built for reliability.',
    bullets: [
      'AWS, Azure, and GCP cloud infrastructure',
      'Automated testing and deployment pipelines',
      'Database migration with zero data loss',
      'Monitoring and observability from day one',
    ],
  },
  {
    title: 'AI Enhanced Development',
    description:
      'Embed AI into your product and process, from intelligent features to AI-accelerated coding that ships faster.',
    bullets: [
      'LLM and RAG integration in production',
      'AI-accelerated coding workflows',
      'Custom model training and fine-tuning',
      'Intelligent agents and automation',
    ],
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform iOS and Android apps, built for performance and ready for App Store launch day.',
    bullets: [
      'iOS and Android native development',
      'React Native and Flutter cross-platform',
      'Store submission handled',
      'Post-launch monitoring and iteration',
    ],
  },
  {
    title: 'Digital Transformation',
    description:
      'Modernize legacy systems, processes, and tech stacks, turning operational drag into a competitive edge.',
    bullets: [
      'Process audit and modernization roadmap',
      'Phased migration with no downtime',
      'Cloud and microservices architecture',
      'Change management and team enablement',
    ],
  },
  {
    title: 'CRM Development',
    description:
      'Design, customize, and integrate Salesforce, HubSpot, or custom CRM platforms that turn data into revenue.',
    bullets: [
      'Salesforce and HubSpot customization',
      'Custom CRM platforms from scratch',
      'Sales and marketing integrations',
      'Analytics dashboards and reporting',
    ],
  },
  {
    title: 'Low Code & No Code',
    description:
      'Ship internal tools, dashboards, and workflows in days, not months, on platforms your team can maintain.',
    bullets: [
      'Retool, Bubble, Airtable, and Webflow',
      'Workflow automation with Zapier and n8n',
      'Existing data source integrations',
      'Maintainable by non-technical teams',
    ],
  },
]

export const homeStats = [
  {
    value: company.businessStatus,
    label: 'Business Status',
    body: `${company.companyName} is legally registered and operating in Vietnam.`,
  },
  {
    value: company.enterpriseCode,
    label: 'Enterprise Code',
    body: `Registered as ${company.shortName} with Vietnamese enterprise code ${company.enterpriseCode}.`,
  },
  {
    value: '2026',
    label: 'Established',
    body: `Established on ${company.establishmentDateLabel} as a ${company.legalEntityType}.`,
  },
  {
    value: 'Hanoi',
    label: 'Head Office',
    body: company.registeredHeadOffice.fullAddress,
  },
]

export const aboutStats = [
  {
    eyebrow: '01 - Legal Name',
    value: 'CODEFINE',
    label: company.companyName,
    body: `Foreign name: ${company.foreignCompanyName}. Short name: ${company.shortName}.`,
  },
  {
    eyebrow: '02 - Code',
    value: company.enterpriseCode,
    label: 'Enterprise Code',
    body: `Business status: ${company.businessStatus}. Legal entity type: ${company.legalEntityType}.`,
  },
  {
    eyebrow: '03 - Founded',
    value: '2026',
    label: company.establishmentDateLabel,
    body: `Legal representative: ${company.legalRepresentative}.`,
  },
  {
    eyebrow: '04 - Office',
    value: 'Hanoi',
    label: 'Registered Head Office',
    body: company.registeredHeadOffice.fullAddress,
  },
]

export const caseStudies = [
  {
    category: 'Healthcare',
    type: 'Full Product Build',
    title: 'VitalCare',
    body: 'A representative HIPAA-compliant patient engagement platform concept connecting clinics with patients across web, iOS, and Android.',
    metrics: [
      ['Secure', 'Patient Data Flows'],
      ['Web + App', 'Multi-Channel Access'],
    ],
  },
  {
    category: 'Fintech',
    type: 'AI-Enhanced Build',
    title: 'Volta',
    body: 'A representative multi-rail B2B payment platform concept for cross-border settlements with AI fraud detection built in.',
    metrics: [
      ['Multi-Rail', 'Payment Architecture'],
      ['AI Checks', 'Risk Detection'],
    ],
  },
  {
    category: 'Commerce',
    type: 'Headless Commerce',
    title: 'Stoke',
    body: 'A representative headless commerce platform concept for a direct-to-consumer apparel brand preparing for multi-market growth.',
    metrics: [
      ['Headless', 'Commerce Platform'],
      ['MVP', 'Launch Path'],
    ],
  },
]

export const industries = [
  {
    title: 'Ecommerce',
    bullets: [
      'Custom storefronts and PWAs',
      'Checkout and payment integrations',
      'Inventory and order management',
      'Headless commerce platforms',
    ],
  },
  {
    title: 'Logistics',
    bullets: [
      'Fleet tracking dashboards',
      'Route optimization engines',
      'Warehouse management systems',
      'Last-mile delivery apps',
    ],
  },
  {
    title: 'Education',
    bullets: [
      'Custom LMS platforms',
      'Interactive course modules',
      'Virtual classroom tools',
      'Student assessment systems',
    ],
  },
  {
    title: 'Fintech',
    bullets: [
      'Payment processing platforms',
      'Lending and underwriting tools',
      'Fraud detection workflows',
      'Regulatory reporting systems',
    ],
  },
  {
    title: 'Healthcare',
    bullets: [
      'Patient engagement platforms',
      'HIPAA-compliant data workflows',
      'Care coordination dashboards',
      'Remote monitoring tools',
    ],
  },
  {
    title: 'Hospitality',
    bullets: [
      'Booking and reservation systems',
      'Guest experience portals',
      'Loyalty and CRM integrations',
      'Operations dashboards',
    ],
  },
]

export const testimonials = [
  {
    category: 'Principle',
    quote:
      'Define the business problem before writing code, then keep delivery accountable to that definition.',
    name: 'Problem First',
    role: 'Delivery Standard',
    location: company.registeredHeadOffice.city,
  },
  {
    category: 'Principle',
    quote:
      'Build with clear engineering ownership, readable decisions, and maintainable systems from day one.',
    name: 'Clean Execution',
    role: 'Engineering Standard',
    location: company.registeredHeadOffice.country,
  },
  {
    category: 'Principle',
    quote:
      'Work transparently with clients, documenting tradeoffs, risks, delivery cadence, and release readiness.',
    name: 'Work Together',
    role: 'Collaboration Standard',
    location: company.shortName,
  },
]

export const trustStats = [
  [company.businessStatus, 'Business Status', 'Legally registered and active under Vietnamese enterprise registration.'],
  [company.enterpriseCode, 'Enterprise Code', 'Company registration identifier for CODEFINE Joint Stock Company.'],
  [company.legalEntityType, 'Legal Entity', 'Structured as a joint stock company for scalable business operations.'],
  [company.registeredHeadOffice.city, 'Head Office', company.registeredHeadOffice.fullAddress],
]

export const engagementModels = [
  {
    title: 'Products Development From Scratch',
    subtitle: 'For new products and ground-up builds',
    body: 'When you have a vision but need a team to build it. We take ownership end to end across product, design, and engineering, from first sprint to launch day.',
    bullets: [
      'Dedicated cross-functional pod owning delivery',
      'Product, design, and engineering under one roof',
      'Senior tech lead accountable for outcomes',
      'Production-ready code from day one',
    ],
    meta: '8 wks',
  },
  {
    title: 'Dedicated Development Team',
    subtitle: 'For existing teams and active roadmaps',
    body: 'When you already have a roadmap and need senior execution. We embed engineers into your team, rituals, and tools so capacity scales without slowing delivery.',
    bullets: [
      'Vetted senior engineers matched to your stack',
      'Embedded into your tools and ceremonies',
      'Scale capacity up or down as roadmap shifts',
      'Long-term partnership, not transactional contracts',
    ],
    meta: '2 wks',
  },
]

export const processSteps = [
  {
    title: 'Discovery & Scoping',
    body: 'Before we write a line of code, we map your goals to a concrete plan: scope, risks, tradeoffs, and engineering decisions.',
  },
  {
    title: 'UX & Product Design',
    body: 'Wireframes, flows, and high-fidelity designs are validated before they cost engineering hours.',
  },
  {
    title: 'Architecture & Tech Strategy',
    body: 'We design the data model, infrastructure, integrations, and tech stack with senior engineers.',
  },
  {
    title: 'Agile Development',
    body: 'Two-week sprints, daily standups, and shippable increments at the end of every cycle.',
  },
  {
    title: 'QA & Security Testing',
    body: 'Automated test coverage, exploratory testing, performance benchmarks, and security audits ship with every release.',
  },
  {
    title: 'Launch & Continuous Support',
    body: 'Production deployments are handled by the same team that built the system.',
  },
]

export const leaders = [
  [company.legalRepresentative, 'Legal Representative'],
]

export const insights = [
  {
    category: 'AI Delivery',
    title: 'How senior teams use AI without lowering engineering standards',
    body: 'A practical look at where AI belongs in product delivery, and where senior judgment still matters most.',
  },
  {
    category: 'Architecture',
    title: 'The migration checklist we use before touching production data',
    body: 'The risk controls, rollback plans, and observability gates behind clean modernization work.',
  },
  {
    category: 'Outsourcing',
    title: 'How to know if a dedicated team model is the right fit',
    body: 'The operational signals that tell us whether a product needs a pod or embedded engineers.',
  },
]

export const companyLinks = ['About Us', 'Our Portfolio', 'Our Services', 'Contact Us']
export const serviceLinks = [
  'Web App Development',
  'Mobile App Development',
  'AI-Enhanced Development',
  'Digital Transformation',
]
