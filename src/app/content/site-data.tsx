import type { LucideIcon } from 'lucide-react'
import { Network, Layers, Building2, Workflow, Bot } from 'lucide-react'

export type TechIconItem = {
  icon: string
  title: string
}

export type ExpertiseItem = {
  Icon: LucideIcon
  title: string
  bg_color: string
  txt_color: string
}

export type ProjectItem = {
  image: string
  title: string
  tag: string[]
  link: string
}

export type InsightTagItem = {
  icon: string
  name: string
  bg_color: string
  txt_color: string
}

export type CounterStat = {
  end: number
  decimals?: number
  suffix: string
  label: string
}

export type TimelineEntry = {
  timeframe: string
  title: string
  subtitle: string
  bullets: string[]
}

export type CredentialItem = {
  title: string
  subtitle: string
}

// Tech icons shown in the scrolling strip and the "My Skills" section.
// Rendered with @iconify/react so no new icon asset files are needed.
export const techIconList: TechIconItem[] = [
  { icon: 'logos:typescript-icon', title: 'TypeScript' },
  { icon: 'logos:javascript', title: 'JavaScript' },
  { icon: 'logos:go', title: 'Go' },
  { icon: 'logos:python', title: 'Python' },
  { icon: 'logos:java', title: 'Java' },
  { icon: 'logos:react', title: 'React' },
  { icon: 'logos:nodejs-icon', title: 'Node.js' },
  { icon: 'logos:graphql', title: 'GraphQL' },
  { icon: 'logos:aws', title: 'AWS' },
  { icon: 'logos:postgresql', title: 'PostgreSQL' },
  { icon: 'logos:redis', title: 'Redis' },
  { icon: 'logos:kafka', title: 'Kafka' },
  { icon: 'logos:docker-icon', title: 'Docker' },
  { icon: 'logos:datadog', title: 'Datadog' },
]

export const techStackList: TechIconItem[] = techIconList

export const expertiseList: ExpertiseItem[] = [
  {
    Icon: Network,
    title: 'Distributed\nSystems',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    Icon: Layers,
    title: 'System\nDesign',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    Icon: Building2,
    title: 'Multi-tenant\nSaaS',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    Icon: Workflow,
    title: 'Event-Driven\nArchitecture',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    Icon: Bot,
    title: 'AI-Augmented\nEngineering',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

export const projectsList: ProjectItem[] = [
  {
    image: '/images/projects/assistive-chatbot.jpg',
    title: 'Assistive Chatbot for Visually Impaired',
    tag: ['Final Year Capstone Project'],
    link: 'https://github.com/am11449',
  },
  {
    image: '/images/projects/data-visualizer.png',
    title: 'Data Visualizer',
    tag: ['Web Lab Mini Project'],
    link: 'https://github.com/am11449',
  },
  {
    image: '/images/projects/traffic-dbms.jpg',
    title: 'Traffic Database Management System',
    tag: ['DBMS Laboratory Mini Project'],
    link: 'https://github.com/AB047/DBMS_TESTED',
  },
  {
    image: '/images/projects/data-visualizer.png',
    title: 'Shared React + TypeScript Component Library',
    tag: ['Storybook', 'CMS Integration', 'Panasonic Avionics'],
    link: 'https://github.com/am11449',
  },
  {
    image: '/images/projects/traffic-dbms.jpg',
    title: 'Event-Driven Webhook Pipeline',
    tag: ['AWS EventBridge', 'SQS', 'Panasonic Avionics'],
    link: 'https://github.com/am11449',
  },
]

export const insightTagList: InsightTagItem[] = [
  {
    icon: '/images/home/result/creativity.svg',
    name: 'Distributed Systems',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    icon: '/images/home/result/innovation.svg',
    name: 'Observability',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    icon: '/images/home/result/strategy.svg',
    name: 'AI-Augmented Eng',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

export const insightCounters: CounterStat[] = [
  { end: 13, suffix: '+', label: 'Airline Customers Served' },
  { end: 99.9, decimals: 1, suffix: '%', label: 'Production Uptime' },
  { end: 67, suffix: '%', label: 'Webhook Latency Cut' },
]

export const footerData = {
  brand: {
    tagline: 'Software engineer building distributed, high-availability platforms.',
    socialLinks: [
      {
        icon: '/images/home/footerSocialIcon/linkedin.svg',
        dark_icon: '/images/home/footerSocialIcon/linkedin_dark.svg',
        link: 'https://www.linkedin.com/in/atulmbharadwaj/',
      },
      {
        icon: '/images/home/footerSocialIcon/github.svg',
        dark_icon: '/images/home/footerSocialIcon/github_dark.svg',
        link: 'https://github.com/am11449',
      },
      {
        icon: '/images/home/footerSocialIcon/instagram.svg',
        dark_icon: '/images/home/footerSocialIcon/instagram_dark.svg',
        link: 'https://www.instagram.com/a_b047/',
      },
    ],
  },
  contactDetails: {
    name: 'Contact Details',
    address: 'Irvine, CA',
    email: 'atulmb99@gmail.com',
    phone: '',
  },
  copyright: '© Atul Bharadwaj 2026. All Rights Reserved',
}

export const workExperience: TimelineEntry[] = [
  {
    timeframe: 'July 2025 – Present',
    title: 'Panasonic Avionics Corporation, Irvine, CA',
    subtitle: 'Software Engineer III',
    bullets: [
      'Architected and scaled a serverless passenger internet platform on AWS (Lambda, DynamoDB, Redis), growing throughput to 50K paid sessions/month while maintaining 99.9% uptime across 10+ airline customers.',
      'Built a high-throughput Go backend using WebSockets and Redis to process live in-flight connectivity events, exposing low-latency REST APIs with full OTEL instrumentation and Datadog observability.',
      'Led API design and infrastructure for a dockerized Node.js performance-testing pipeline on AWS ECR/ECS, powering network health dashboards across engineering teams.',
      'Delivered end-to-end passenger ecommerce features (checkout, voucher redemption, session activation) integrating React frontends with GraphQL APIs and third-party payment services.',
      'Designed a shared React + TypeScript component library with Storybook and CMS integration, reducing per-customer frontend setup time significantly.',
      'Redesigned event ingestion using AWS EventBridge and SQS to handle 500 events/minute, cutting delivery latency 67% (3s → 1s) and eliminating message loss under peak load.',
      'Led incident response for high-availability production services; built Datadog dashboards, monitors, and runbooks that reduced MTTR by 40%.',
    ],
  },
  {
    timeframe: 'July 2023 – June 2025',
    title: 'Panasonic Avionics Corporation, Irvine, CA',
    subtitle: 'Software Engineer II',
    bullets: [
      'Built a multi-tenant full-stack customization platform (React, GraphQL, PostgreSQL) serving 13 airline customers, cutting new airline onboarding time from months to days.',
      'Owned multi-environment infrastructure provisioning with AWS CDK and CloudFormation, standardizing deployment pipelines across dev, staging, and production.',
      'Built end-to-end and integration test suites in Playwright integrated into CI/CD, reducing production regressions.',
      'Developed internal dashboards enabling airline partners to monitor passenger sessions, payments, and connectivity status in real time.',
    ],
  },
  {
    timeframe: 'April 2021 – June 2021',
    title: 'Qualitas Technologies Pvt. Ltd., Bengaluru, India',
    subtitle: 'Machine Learning Intern',
    bullets: [
      'Developed a QtLibrary in C++ for dominant color detection and filtering for automobile parts.',
      'Developed an algorithm for automatic triggering and capturing of images from high-speed video feed for quality assessment in assembly lines.',
    ],
  },
  {
    timeframe: 'May 2020 – July 2020',
    title: 'e-Yantra, Indian Institute of Technology, Bombay',
    subtitle: 'Research Intern',
    bullets: [
      'Worked on a module for filters in Signal Processing.',
      'Implemented a Neural Network for identifying common noise in the UrbanSounds 8k dataset.',
      'Developed a novel method to determine starting/ending timestamps of audio intros for web-series using audio fingerprinting.',
      "Developed a locally hosted voice assistant called 'VAANI' that can perform basic functions.",
    ],
  },
]

export const education: TimelineEntry[] = [
  {
    timeframe: 'September 2021 – May 2023',
    title: 'New York University, New York, NY',
    subtitle: 'Master of Science in Computer Science, GPA: 3.75/4.00',
    bullets: [
      'Coursework: Algorithms, Cloud Computing, Big Data and Hadoop, Artificial Intelligence, Software Engineering.',
    ],
  },
  {
    timeframe: 'August 2017 – July 2021',
    title: 'Visvesvaraya Technological University, Bengaluru, India',
    subtitle: 'Bachelor of Engineering in Computer Science, GPA: 8.81/10.00',
    bullets: [
      "Consistently part of the department toppers' list.",
      "Active participation in organizing the department's events.",
    ],
  },
  {
    timeframe: 'July 2003 – June 2017',
    title: 'Venkat International Public School',
    subtitle: 'Class 1 – 12',
    bullets: [
      'Studied Science (Physics, Math, Chemistry, Computers) in 12th and scored 92%.',
      'Scored a 9.4 CGPA in class 10.',
    ],
  },
]

export const certifications: CredentialItem[] = [
  {
    title: 'Neural Network and Deep Learning',
    subtitle: 'deeplearning.ai, Coursera — December 2019',
  },
  {
    title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
    subtitle: 'deeplearning.ai, Coursera — January 2020',
  },
  {
    title: 'Introduction to Machine Learning',
    subtitle: 'NPTEL, Indian Institute of Technology, Kharagpur — September 2019',
  },
  {
    title: 'Introduction to Cybersecurity',
    subtitle: 'CISCO Networking Academy — June 2020',
  },
]

export const honors: CredentialItem[] = [
  {
    title: "First Place — 'Rapid Rescuer', e-Yantra National Robotics Competition 2020",
    subtitle:
      'Hosted by IIT Bombay. Maze-solving robot capable of avoiding dynamic obstacles, replanning path mid-traversal, recognizing digits from image, and line following.',
  },
  {
    title: 'Kannada ImageNet: A Dataset for Image Classification in Kannada',
    subtitle:
      'Accepted at IEEE-sponsored International Conference on Computer Communication and Informatics, Coimbatore, 2021.',
  },
]
