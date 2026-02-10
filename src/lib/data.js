import {
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlineRocketLaunch,
  HiOutlinePaintBrush,
  HiOutlineMagnifyingGlass,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';

export const AGENCY_NAME = 'TriForge Studio';
export const AGENCY_TAGLINE = 'We forge digital experiences that drive growth.';
export const AGENCY_EMAIL = 'hello@triforgestudio.com';
export const AGENCY_PHONE = '+1 (415) 938-2740';
export const AGENCY_ADDRESS = '548 Market Street, Suite 420, San Francisco, CA 94104';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const TEAM = [
  {
    name: 'Marcus Chen',
    role: 'Lead Full-Stack Developer',
    bio: 'Marcus brings 8 years of MERN stack experience and has shipped over 40 production applications for startups and enterprises alike. He specializes in scalable architectures, real-time systems, and API design.',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
    image: '/team/marcus.jpg',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Full-Stack Developer',
    bio: 'Priya is a product-minded developer with 6 years of experience building SaaS platforms and e-commerce solutions. She excels at translating complex business logic into clean, maintainable code.',
    skills: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Firebase', 'Docker'],
    image: '/team/priya.jpg',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Elena Rossi',
    role: 'UI/UX Designer & Brand Strategist',
    bio: 'Elena is a multidisciplinary designer with 7 years shaping digital brands. From wireframes to polished interfaces, she creates user-centered designs that balance aesthetics with conversion.',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Brand Identity', 'Motion Design', 'Design Systems'],
    image: '/team/elena.jpg',
    linkedin: '#',
    dribbble: '#',
  },
];

export const SERVICES = [
  {
    icon: HiOutlineCodeBracket,
    title: 'Custom Web Applications',
    slug: 'custom-web-apps',
    short: 'Tailored full-stack solutions built with React, Next.js, and Node.js to solve your unique business challenges.',
    description:
      'We architect and develop bespoke web applications from the ground up. Whether you need an internal dashboard, customer portal, or complex workflow tool, we deliver performant, scalable code using the MERN stack and modern frameworks.',
    features: [
      'Full-stack React & Node.js development',
      'RESTful & GraphQL API design',
      'Database architecture & optimization',
      'Third-party integrations & webhooks',
      'Automated testing & CI/CD pipelines',
    ],
  },
  {
    icon: HiOutlineRocketLaunch,
    title: 'SaaS MVP Development',
    slug: 'saas-mvp',
    short: 'Launch your software product faster with our rapid MVP development, built to validate ideas and attract investors.',
    description:
      'Bring your SaaS idea to life in weeks, not months. We focus on core features, user authentication, billing integration, and a polished interface — everything you need to validate market fit and start onboarding early users.',
    features: [
      'Rapid prototyping & iteration',
      'Stripe / payment integration',
      'Multi-tenant architecture',
      'User authentication & roles',
      'Analytics & monitoring setup',
    ],
  },
  {
    icon: HiOutlinePaintBrush,
    title: 'UI/UX Design & Branding',
    slug: 'design-branding',
    short: 'Premium visual identities, user interfaces, and brand systems designed to elevate your digital presence.',
    description:
      'Great products deserve great design. We craft intuitive user experiences and cohesive brand identities that resonate with your audience. Every pixel is intentional, every interaction is considered.',
    features: [
      'User research & persona mapping',
      'Wireframing & interactive prototyping',
      'Visual design & design systems',
      'Brand identity & style guides',
      'Motion design & micro-interactions',
    ],
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Performance Optimization',
    slug: 'performance',
    short: 'Speed up your existing applications with advanced optimization techniques, caching, and infrastructure tuning.',
    description:
      'Slow websites lose customers. We audit your application top-to-bottom, identify bottlenecks, and implement targeted optimizations — from code splitting and lazy loading to CDN configuration and database indexing.',
    features: [
      'Core Web Vitals optimization',
      'Lighthouse & performance audits',
      'Image & asset optimization',
      'Server-side rendering & caching',
      'Database query optimization',
    ],
  },
  {
    icon: HiOutlineMagnifyingGlass,
    title: 'SEO-Friendly Builds',
    slug: 'seo',
    short: 'Websites engineered for search visibility from day one, with semantic markup, structured data, and more.',
    description:
      'We build with search engines in mind from the start. Semantic HTML, structured data, dynamic sitemaps, Open Graph tags, and optimized rendering strategies ensure your site ranks and gets discovered.',
    features: [
      'Technical SEO architecture',
      'Structured data & schema markup',
      'Dynamic sitemap generation',
      'Open Graph & social meta tags',
      'Page speed & mobile-first indexing',
    ],
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: 'Ongoing Maintenance & Support',
    slug: 'maintenance',
    short: 'Keep your applications running smoothly with proactive monitoring, updates, and dedicated technical support.',
    description:
      'Technology evolves, and so should your application. We offer ongoing maintenance plans that include security patches, dependency updates, performance monitoring, and priority bug fixes.',
    features: [
      'Monthly security & dependency updates',
      '24/7 uptime monitoring & alerts',
      'Bug fixes & feature enhancements',
      'Regular backups & disaster recovery',
      'Dedicated Slack / email support channel',
    ],
  },
];

export const PORTFOLIO = [
  {
    title: 'PulseBoard — Real-Time Analytics Dashboard',
    slug: 'pulseboard',
    category: 'SaaS Platform',
    client: 'DataSync Inc.',
    duration: '10 weeks',
    thumbnail: '/portfolio/pulseboard-thumb.jpg',
    images: ['/portfolio/pulseboard-1.jpg', '/portfolio/pulseboard-2.jpg'],
    problem:
      'DataSync needed a real-time analytics dashboard that could handle 50,000+ concurrent data streams without lag, replacing their outdated Grafana setup with a branded, customer-facing solution.',
    solution:
      'We built a Next.js application with WebSocket-powered live data feeds, interactive D3.js charts, and a role-based access system. The backend runs on Node.js with Redis caching for sub-100ms response times.',
    techStack: ['Next.js', 'Node.js', 'WebSocket', 'Redis', 'MongoDB', 'D3.js', 'Tailwind CSS'],
    results: [
      { metric: 'Load Time', value: '< 1.2s', description: 'Initial dashboard render' },
      { metric: 'Concurrent Users', value: '50K+', description: 'Without performance degradation' },
      { metric: 'Client Retention', value: '+34%', description: 'After dashboard launch' },
    ],
    testimonial: {
      text: 'TriForge delivered exactly what we needed — a fast, beautiful dashboard our clients love. The real-time capabilities exceeded our expectations.',
      author: 'James Wright',
      role: 'CTO, DataSync Inc.',
    },
  },
  {
    title: 'Verdant — Sustainable E-Commerce Platform',
    slug: 'verdant',
    category: 'E-Commerce',
    client: 'Verdant Living Co.',
    duration: '12 weeks',
    thumbnail: '/portfolio/verdant-thumb.jpg',
    images: ['/portfolio/verdant-1.jpg', '/portfolio/verdant-2.jpg'],
    problem:
      'Verdant Living needed a modern, high-converting e-commerce platform that reflected their eco-conscious brand and could handle seasonal traffic spikes of 10x normal volume.',
    solution:
      'We designed and developed a Next.js storefront with Stripe integration, inventory management, and a CMS for their content team. The design emphasizes organic textures, sustainability badges, and frictionless checkout.',
    techStack: ['Next.js', 'Stripe', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'Cloudinary'],
    results: [
      { metric: 'Conversion Rate', value: '+48%', description: 'Compared to previous site' },
      { metric: 'Page Speed', value: '98/100', description: 'Lighthouse performance score' },
      { metric: 'Revenue Growth', value: '+62%', description: 'First quarter after launch' },
    ],
    testimonial: {
      text: 'The site looks stunning and performs incredibly well. Our conversion rate nearly doubled, and customers constantly compliment the shopping experience.',
      author: 'Mia Torres',
      role: 'Founder, Verdant Living Co.',
    },
  },
  {
    title: 'NexaLearn — EdTech Learning Platform',
    slug: 'nexalearn',
    category: 'SaaS Platform',
    client: 'NexaLearn Education',
    duration: '14 weeks',
    thumbnail: '/portfolio/nexalearn-thumb.jpg',
    images: ['/portfolio/nexalearn-1.jpg', '/portfolio/nexalearn-2.jpg'],
    problem:
      'NexaLearn required a scalable learning management system with video hosting, progress tracking, quizzes, and certificate generation for their growing base of 15,000+ students.',
    solution:
      'We built a comprehensive LMS with course creation tools, adaptive video streaming, real-time progress tracking, and automated certificate generation. The platform supports multi-tenant organizations.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Socket.io', 'PDF Generation'],
    results: [
      { metric: 'Students Onboarded', value: '15K+', description: 'Within first 6 months' },
      { metric: 'Course Completion', value: '+41%', description: 'Compared to industry average' },
      { metric: 'Platform Uptime', value: '99.97%', description: 'Over 12-month period' },
    ],
    testimonial: {
      text: 'TriForge understood our vision and built a platform that scales beautifully. The student feedback has been overwhelmingly positive.',
      author: 'Dr. Rajan Patel',
      role: 'CEO, NexaLearn Education',
    },
  },
  {
    title: 'Finova — Fintech Portfolio Tracker',
    slug: 'finova',
    category: 'Fintech',
    client: 'Finova Wealth',
    duration: '8 weeks',
    thumbnail: '/portfolio/finova-thumb.jpg',
    images: ['/portfolio/finova-1.jpg', '/portfolio/finova-2.jpg'],
    problem:
      'Finova Wealth needed a secure, real-time portfolio tracking application for their wealth management clients, with SOC 2 compliance requirements and bank-grade security.',
    solution:
      'We developed a React application with real-time market data integration, interactive portfolio visualization, and end-to-end encryption. The system includes two-factor authentication and audit logging.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js', 'Auth0', 'Docker'],
    results: [
      { metric: 'Security Audit', value: 'SOC 2', description: 'Type II certified' },
      { metric: 'User Satisfaction', value: '4.8/5', description: 'Average client rating' },
      { metric: 'AUM Tracked', value: '$120M+', description: 'Assets under management' },
    ],
    testimonial: {
      text: 'Security was non-negotiable for us. TriForge built a platform that meets institutional standards while being remarkably easy to use.',
      author: 'Sarah Kim',
      role: 'COO, Finova Wealth',
    },
  },
];

export const TESTIMONIALS = [
  {
    text: 'TriForge transformed our outdated platform into a modern, high-performing application. Their attention to detail and communication throughout the project was outstanding.',
    author: 'James Wright',
    role: 'CTO, DataSync Inc.',
    rating: 5,
  },
  {
    text: 'Working with the TriForge team felt like having an in-house dev team. They understood our brand instantly and delivered beyond our expectations.',
    author: 'Mia Torres',
    role: 'Founder, Verdant Living Co.',
    rating: 5,
  },
  {
    text: 'We launched our MVP in just 6 weeks. The quality of code and design was far superior to agencies charging twice as much.',
    author: 'Alex Petrov',
    role: 'CEO, LaunchPad Technologies',
    rating: 5,
  },
  {
    text: 'TriForge doesn\'t just build — they think. Their strategic input on UX helped us increase conversions by 40%.',
    author: 'Dr. Rajan Patel',
    role: 'CEO, NexaLearn Education',
    rating: 5,
  },
];

export const PRICING_PACKAGES = [
  {
    name: 'Starter',
    price: '$3,500',
    period: 'one-time',
    description: 'Perfect for small businesses and personal brands that need a professional web presence.',
    timeline: '2–3 weeks',
    features: [
      { text: 'Up to 5 pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form integration', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'CMS integration', included: true },
      { text: '1 round of revisions', included: true },
      { text: 'Custom animations', included: false },
      { text: 'Database integration', included: false },
      { text: 'User authentication', included: false },
      { text: 'Ongoing maintenance', included: false },
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$8,500',
    period: 'one-time',
    description: 'Ideal for growing businesses that need a feature-rich web application with backend functionality.',
    timeline: '5–7 weeks',
    features: [
      { text: 'Up to 12 pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form + CRM integration', included: true },
      { text: 'Advanced SEO optimization', included: true },
      { text: 'CMS integration', included: true },
      { text: '3 rounds of revisions', included: true },
      { text: 'Custom animations & transitions', included: true },
      { text: 'Database & API integration', included: true },
      { text: 'User authentication', included: true },
      { text: '30 days post-launch support', included: true },
    ],
    popular: true,
  },
  {
    name: 'Scale',
    price: '$18,000',
    period: 'starting at',
    description: 'For established businesses and startups that need a full-scale custom application or SaaS MVP.',
    timeline: '8–14 weeks',
    features: [
      { text: 'Unlimited pages & features', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Complete form & workflow systems', included: true },
      { text: 'Enterprise SEO strategy', included: true },
      { text: 'Headless CMS architecture', included: true },
      { text: 'Unlimited revisions during dev', included: true },
      { text: 'Advanced animations & motion', included: true },
      { text: 'Full-stack custom development', included: true },
      { text: 'Auth, roles & permissions', included: true },
      { text: '90 days post-launch support', included: true },
    ],
    popular: false,
  },
];

export const FAQS = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity. A simple website takes 2–3 weeks, a mid-range web app takes 5–7 weeks, and complex SaaS platforms take 8–14 weeks. We provide a detailed timeline during our discovery call.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer:
      'Yes. We offer monthly maintenance plans starting at $500/month that include security updates, bug fixes, performance monitoring, and priority support via Slack or email.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We primarily work with the MERN stack (MongoDB, Express, React, Node.js), Next.js, Firebase, Tailwind CSS, and various cloud platforms including AWS, Vercel, and Google Cloud.',
  },
  {
    question: 'Can you work with our existing codebase?',
    answer:
      'Absolutely. We regularly onboard to existing projects for feature development, refactoring, performance optimization, or migration to modern frameworks.',
  },
  {
    question: 'What is your payment structure?',
    answer:
      'We typically work with a 40% upfront deposit, 30% at mid-project milestone, and 30% upon delivery. For larger projects, we can arrange custom payment schedules.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes. We are happy to sign NDAs before any project discussion. Client confidentiality is something we take very seriously.',
  },
];

export const BLOG_POSTS_STATIC = [
  {
    slug: 'why-nextjs-is-the-future-of-web-development',
    title: 'Why Next.js Is the Future of Web Development in 2026',
    excerpt:
      'Next.js has evolved from a React framework into the industry standard for building performant web applications. Here\'s why every serious agency has made the switch.',
    category: 'Development',
    author: 'Marcus Chen',
    date: 'January 28, 2026',
    readTime: '6 min read',
    image: '/blog/nextjs-future.jpg',
    content: `
## The Rise of Next.js

Three years ago, choosing a frontend framework was a heated debate. Today, the conversation has shifted. Next.js has become the default choice for production-grade web applications — and for good reason.

### Server Components Changed Everything

React Server Components, fully embraced by Next.js, fundamentally changed how we think about rendering. Components that fetch data on the server, stream HTML to the client, and hydrate only interactive parts have slashed bundle sizes by 40-60% in our projects.

### The App Router Maturation

The App Router has matured significantly. Layouts, loading states, error boundaries, and parallel routes provide architectural patterns that were previously only achievable with significant boilerplate.

### Performance by Default

With automatic code splitting, image optimization, font optimization, and built-in caching strategies, Next.js delivers performance that would take weeks to configure manually.

## What This Means for Your Business

Faster sites convert better. Google rewards speed. Users remember experiences. By choosing Next.js, you're investing in a foundation that delivers measurable business results from day one.
    `,
  },
  {
    slug: 'designing-for-conversion-ux-principles',
    title: '7 UX Principles That Actually Drive Conversion',
    excerpt:
      'Beautiful design means nothing if it doesn\'t convert. These are the research-backed UX principles we apply to every project at TriForge.',
    category: 'Design',
    author: 'Elena Rossi',
    date: 'January 15, 2026',
    readTime: '8 min read',
    image: '/blog/ux-conversion.jpg',
    content: `
## Design With Intent

Every pixel should serve a purpose. At TriForge, we don't design for awards — we design for results. Here are seven UX principles that consistently drive higher conversion rates across our projects.

### 1. Progressive Disclosure

Don't overwhelm users with everything at once. Reveal information progressively based on their journey stage. This reduces cognitive load and keeps users engaged.

### 2. The F-Pattern Layout

Eye-tracking studies consistently show users scan in an F-pattern. Place your most important content — headlines, CTAs, and value propositions — along these natural scanning paths.

### 3. Social Proof Positioning

Testimonials and trust signals should appear near decision points, not buried at the bottom. We place micro-testimonials adjacent to CTAs and pricing sections.

### 4. Friction-Free Forms

Every additional form field reduces completion rates by roughly 10%. We ruthlessly minimize form fields and use smart defaults wherever possible.

### 5. Visual Hierarchy Through Contrast

Size, color, and whitespace should guide the eye toward actions you want users to take. A single high-contrast CTA outperforms multiple competing buttons.

### 6. Speed as a Feature

Perceived performance matters as much as actual performance. Skeleton screens, optimistic updates, and smooth transitions make applications feel instant.

### 7. Mobile-First, Always

With 60%+ of web traffic on mobile, designing desktop-first is designing backwards. We start with the smallest screen and progressively enhance.
    `,
  },
  {
    slug: 'firebase-vs-traditional-backend',
    title: 'Firebase vs. Traditional Backend: When to Use What',
    excerpt:
      'Firebase offers incredible speed-to-market, but it\'s not always the right choice. Here\'s our framework for deciding when to go serverless vs. custom.',
    category: 'Development',
    author: 'Priya Sharma',
    date: 'December 20, 2025',
    readTime: '7 min read',
    image: '/blog/firebase-backend.jpg',
    content: `
## The Serverless Question

At TriForge, we use both Firebase and custom Node.js backends extensively. The decision isn't about which is "better" — it's about which is right for your project, budget, and timeline.

### When Firebase Excels

- **MVPs and Prototypes:** When speed-to-market matters, Firebase's authentication, Firestore, and hosting can cut development time by 50%.
- **Real-time Applications:** Firestore's real-time listeners are unmatched for chat, collaboration, and live data features.
- **Small to Medium Scale:** For apps under 100K monthly active users, Firebase's pricing and simplicity are hard to beat.

### When Custom Backend Wins

- **Complex Business Logic:** Multi-step workflows, complex calculations, and heavy data processing are better handled server-side.
- **Data Relationships:** If your data is highly relational, PostgreSQL with a Node.js API often outperforms Firestore.
- **Cost at Scale:** Firebase pricing can escalate unpredictably at high read/write volumes.

### The Hybrid Approach

Our favorite pattern? Use Firebase for auth and real-time features while maintaining a Node.js API for complex business logic. Best of both worlds.

## Making the Decision

We evaluate three factors: timeline pressure, data complexity, and projected scale. Most projects fall clearly into one camp — and we're honest about recommending the approach that serves you best, not the one that generates more billable hours.
    `,
  },
  {
    slug: 'building-brand-identity-for-startups',
    title: 'Building a Brand Identity That Scales With Your Startup',
    excerpt:
      'Your brand identity needs to work at seed stage and Series B. Here\'s how we build flexible brand systems that grow with your company.',
    category: 'Branding',
    author: 'Elena Rossi',
    date: 'December 5, 2025',
    readTime: '5 min read',
    image: '/blog/brand-identity.jpg',
    content: `
## Brands That Grow

The biggest mistake early-stage startups make with branding is treating it as a one-time logo exercise. A brand identity is a living system — and it needs to be designed to evolve.

### Start With Strategy, Not Aesthetics

Before opening Figma, we spend time understanding your market positioning, target audience, competitive landscape, and growth trajectory. Design without strategy is decoration.

### The Minimum Viable Brand

For early-stage startups, we recommend a focused brand package: wordmark, color system, typography scale, and component library. This gives you enough consistency to look professional without over-investing in assets you'll outgrow.

### Design Systems Over Static Files

We deliver design systems, not just mockups. A well-structured Figma library with components, variables, and documentation lets your team maintain brand consistency as you scale your product and marketing.

### Plan for Multi-Platform

Your brand will live on your website, social media, pitch decks, product UI, and eventually physical materials. Every design decision should consider these touchpoints.

## The TriForge Approach

We build brands that look like they belong to companies twice your current size — without the enterprise price tag. It's about smart constraints, not unlimited options.
    `,
  },
];
