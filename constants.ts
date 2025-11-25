import { ServiceItem, CaseStudy, NewsItem, RecognitionItem } from './types';

export const NAV_LINKS = [
  { name: 'Approach', href: '#about' },
  { name: 'Capabilities', href: '#services' },
  { name: 'Work', href: '#cases' },
  { name: 'About', href: '#recognition' },
  { name: 'Pricing', href: '#' },
];

export const SERVICES: ServiceItem[] = [
  // Mapped from "For Companies"
  { id: '01', title: 'Global Tech Structuring', category: 'Enterprise', link: '#' },
  { id: '02', title: 'Digital Infrastructure', category: 'Enterprise', link: '#' },
  { id: '03', title: 'Innovation Partnerships', category: 'Enterprise', link: '#' },
  { id: '04', title: 'Sustainable Compute', category: 'Enterprise', link: '#' },
  { id: '05', title: 'IP & Artificial Intelligence', category: 'Enterprise', link: '#' },
  { id: '06', title: 'Corporate Restructuring', category: 'Enterprise', link: '#' },
  { id: '07', title: 'Algorithmic Dispute Res', category: 'Enterprise', link: '#' },
  { id: '08', title: 'Commercial Operations', category: 'Enterprise', link: '#' },
  { id: '09', title: 'Venture Corporate Law', category: 'Enterprise', link: '#' },
  { id: '10', title: 'Regulatory Compliance', category: 'Enterprise', link: '#' },
  
  // Mapped from "For Individuals"
  { id: '11', title: 'Private Capital & Assets', category: 'Ventures', link: '#' },
  { id: '12', title: 'Succession Planning', category: 'Ventures', link: '#' },
  { id: '13', title: 'Conflict Mediation', category: 'Ventures', link: '#' },
];

export const RECOGNITION: RecognitionItem[] = [
  {
    id: '01',
    category: 'Global Leadership',
    items: [
      { year: '2023', name: 'The Legal Tech 500' },
      { year: '2022', name: 'Chambers & Partners: Fintech' },
      { year: '2021', name: 'IFLR 1000' }
    ]
  },
  {
    id: '02',
    category: 'Industry Excellence',
    items: [
      { year: '2023', name: 'Benchmark Litigation' },
      { year: '2022', name: 'Leaders League: Innovation' }
    ]
  },
  {
    id: '03',
    category: 'Compliance & Security',
    items: [
      { year: '2023', name: 'ISO 27001 Certified' },
      { year: '2022', name: 'Global Data Alliance' }
    ]
  }
];

export const CASES: CaseStudy[] = [
  {
    id: 1,
    category: 'Petrochemical & Energy',
    title: 'Strategic defense of a $500M petrochemical supply chain dispute.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Tech M&A',
    title: 'Acquisition due diligence for a cluster of high-growth AI startups.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Logistics & Customs',
    title: 'Judicial precedent for autonomous logistics fleet customs privileges.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Infrastructure',
    title: 'Land acquisition structuring for a Tier-4 Data Center complex.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  }
];

export const NEWS: NewsItem[] = [
  { id: 1, date: '10.05.2024', title: 'Three critical legislative changes impacting AI development.', link: '#' },
  { id: 2, date: '24.04.2024', title: 'New mandates: Disclosure of corporate political contributions.', link: '#' },
  { id: 3, date: '12.02.2024', title: 'Supreme Court decides landmark case on digital free speech.', link: '#' }
];