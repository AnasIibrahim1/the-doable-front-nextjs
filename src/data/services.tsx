import { 
  FaShieldAlt, 
  FaCloud, 
  FaLightbulb, 
  FaNetworkWired, 
  FaDatabase, 
  FaCode 
} from 'react-icons/fa';

export interface ServiceFeature {
  text: string;
}

export interface ServiceSkill {
  name: string;
  percentage: number;
}

export interface ServiceTech {
  name: string;
  icon?: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  features: ServiceFeature[];
  featured: boolean;
  skills?: ServiceSkill[];
  technologies?: ServiceTech[];
  stats?: ServiceStat[];
  specializedDescription?: string;
  mainImage?: string;
  subImages?: string[];
}

export const services: Service[] = [
  {
    icon: FaCode,
    title: 'Custom Development',
    slug: 'custom-development',
    description: 'Tailored software solutions built to address your unique business challenges and requirements.',
    detailedDescription: 'Collaboratively engineer prospective imperatives with transparent technology. We integrate client-centered users, interactive expertise, and transparent technology to deliver e-commerce solutions that drive results.',
    specializedDescription: 'Our team specializes in creating innovative software solutions that seamlessly integrate with your existing infrastructure. We combine technical expertise with business understanding to deliver solutions that truly make a difference.',
    features: [
      { text: 'Collaboratively engineer prospective imperatives with transparent technology.' },
      { text: 'Phosfluorescently morph excellent materials for multifunctional collaboration and idea-sharing.' },
      { text: 'Conveniently cultivate compelling processes before client-centered networks.' },
    ],
    skills: [
      { name: 'Web Security', percentage: 80 },
      { name: 'UI/UX Design', percentage: 80 },
      { name: 'Development', percentage: 88 },
      { name: 'Design', percentage: 92 },
    ],
    technologies: [
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Python', icon: 'python' },
      { name: 'PHP', icon: 'php' },
      { name: 'C#', icon: 'C#' },
      { name: 'Dart', icon: 'Dart' },
      { name: 'React', icon: '⚛' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Node.js', icon: '🟢' },
    ],
    stats: [
      { value: '125+', label: 'We Develop Over 125+ Software' },
      { value: '64+', label: 'Global Clients & Trusted Us' },
      { value: '32+', label: 'Local & Global Award Wins' },
      { value: '122+', label: 'Clients Reviews Our Software' },
    ],
    mainImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop',
    subImages: [
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop'
    ],
    featured: false,
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets from evolving threats and vulnerabilities.',
    detailedDescription: 'We provide enterprise-grade cybersecurity solutions to safeguard your critical business data and infrastructure. Our comprehensive approach combines threat intelligence, advanced monitoring, and rapid incident response.',
    specializedDescription: 'Our cybersecurity experts specialize in identifying vulnerabilities, implementing robust security measures, and providing 24/7 monitoring to protect your business from ever-evolving cyber threats.',
    features: [
      { text: 'Threat Detection & Prevention' },
      { text: 'Security Audits & Compliance' },
      { text: '24/7 SOC Monitoring' },
      { text: 'Incident Response' },
    ],
    skills: [
      { name: 'Threat Detection', percentage: 95 },
      { name: 'Security Audits', percentage: 90 },
      { name: 'Incident Response', percentage: 85 },
      { name: 'Compliance', percentage: 88 },
    ],
    technologies: [
      { name: 'SIEM', icon: '🔒' },
      { name: 'Firewall', icon: '🛡' },
      { name: 'Encryption', icon: '🔐' },
      { name: 'VPN', icon: '🌐' },
    ],
    stats: [
      { value: '500+', label: 'Security Implementations' },
      { value: '99.9%', label: 'Uptime Guarantee' },
      { value: '150+', label: 'Protected Clients' },
      { value: '24/7', label: 'SOC Monitoring' },
    ],
    mainImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop',
    subImages: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1614064641938-671098572c1f?w=400&h=200&fit=crop'
    ],
    featured: false,
  },
  {
    icon: FaCloud,
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Scalable cloud infrastructure designed to grow with your business needs and optimize performance.',
    detailedDescription: 'Transform your IT infrastructure with our cloud solutions. We help businesses migrate to the cloud, optimize costs, and scale efficiently while maintaining security and performance.',
    specializedDescription: 'Our cloud specialists excel in designing and implementing scalable cloud architectures across AWS, Azure, and GCP platforms, ensuring your business can scale seamlessly.',
    features: [
      { text: 'AWS/Azure/GCP Migration' },
      { text: 'Cloud Architecture Design' },
      { text: 'DevOps Implementation' },
      { text: 'Cost Optimization' },
    ],
    skills: [
      { name: 'AWS', percentage: 90 },
      { name: 'Azure', percentage: 85 },
      { name: 'GCP', percentage: 82 },
      { name: 'DevOps', percentage: 88 },
    ],
    technologies: [
      { name: 'AWS', icon: '☁' },
      { name: 'Azure', icon: '🔷' },
      { name: 'GCP', icon: '🌩' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸' },
      { name: 'Terraform', icon: '📦' },
    ],
    stats: [
      { value: '200+', label: 'Cloud Migrations Completed' },
      { value: '40%', label: 'Average Cost Reduction' },
      { value: '50+', label: 'Enterprise Clients' },
      { value: '99.99%', label: 'SLA Uptime' },
    ],
    mainImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop',
    subImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop'
    ],
    featured: false,
  },
  {
    icon: FaLightbulb,
    title: 'IT Consulting',
    slug: 'it-consulting',
    description: 'Strategic IT guidance to align technology with your business objectives and drive digital transformation.',
    detailedDescription: 'Navigate the complexities of digital transformation with our strategic IT consulting services. We help align your technology investments with business goals for maximum ROI.',
    specializedDescription: 'Our consultants bring years of experience in digital strategy, technology assessment, and change management to help you make informed technology decisions.',
    features: [
      { text: 'Technology Roadmap' },
      { text: 'Digital Strategy' },
      { text: 'Process Optimization' },
      { text: 'Change Management' },
    ],
    skills: [
      { name: 'Strategy', percentage: 92 },
      { name: 'Assessment', percentage: 88 },
      { name: 'Planning', percentage: 90 },
      { name: 'Implementation', percentage: 85 },
    ],
    technologies: [
      { name: 'Strategy', icon: '📊' },
      { name: 'Assessment', icon: '📈' },
      { name: 'Planning', icon: '🗺' },
    ],
    stats: [
      { value: '300+', label: 'Consulting Projects' },
      { value: '95%', label: 'Client Satisfaction' },
      { value: '100+', label: 'Expert Consultants' },
      { value: '25+', label: 'Industries Served' },
    ],
    mainImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=400&fit=crop',
    subImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=200&fit=crop'
    ],
    featured: false,
  },
  {
    icon: FaNetworkWired,
    title: 'Network Infrastructure',
    slug: 'network-infrastructure',
    description: 'Robust network solutions ensuring seamless connectivity, reliability, and high performance.',
    detailedDescription: 'Build a resilient network infrastructure that supports your business operations. From design to implementation, we ensure optimal performance and security.',
    specializedDescription: 'Our network engineers design and deploy enterprise-grade network solutions with focus on reliability, performance, and scalability.',
    features: [
      { text: 'Network Design & Setup' },
      { text: 'SD-WAN Implementation' },
      { text: 'VPN Solutions' },
      { text: 'Performance Monitoring' },
    ],
    skills: [
      { name: 'Network Design', percentage: 90 },
      { name: 'SD-WAN', percentage: 85 },
      { name: 'Security', percentage: 88 },
      { name: 'Monitoring', percentage: 87 },
    ],
    technologies: [
      { name: 'Cisco', icon: '🔷' },
      { name: 'SD-WAN', icon: '🌐' },
      { name: 'Firewall', icon: '🛡' },
      { name: 'VPN', icon: '🔐' },
    ],
    stats: [
      { value: '150+', label: 'Network Deployments' },
      { value: '99.9%', label: 'Network Uptime' },
      { value: '80+', label: 'Enterprise Networks' },
      { value: '24/7', label: 'Network Support' },
    ],
    mainImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=400&fit=crop',
    subImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop'
    ],
    featured: false,
  },
  {
    icon: FaDatabase,
    title: 'Data Management',
    slug: 'data-management',
    description: 'Advanced data solutions for storage, backup, recovery, and analytics to drive insights.',
    detailedDescription: 'Maximize the value of your data with our comprehensive data management solutions. We help you store, protect, and analyze your data for actionable insights.',
    specializedDescription: 'Our data management experts specialize in database design, backup strategies, and analytics solutions that turn data into competitive advantages.',
    features: [
      { text: 'Database Administration' },
      { text: 'Data Backup & Recovery' },
      { text: 'Big Data Analytics' },
      { text: 'Data Governance' },
    ],
    skills: [
      { name: 'Database Admin', percentage: 92 },
      { name: 'Backup & Recovery', percentage: 95 },
      { name: 'Analytics', percentage: 88 },
      { name: 'Governance', percentage: 85 },
    ],
    technologies: [
      { name: 'SQL', icon: '🗄' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Elasticsearch', icon: '🔍' },
    ],
    stats: [
      { value: '200+', label: 'Databases Managed' },
      { value: '100%', label: 'Recovery Success Rate' },
      { value: '500TB+', label: 'Data Under Management' },
      { value: '99.99%', label: 'Data Availability' },
    ],
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
    subImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop'
    ],
    featured: false,
  },
];
