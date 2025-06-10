interface FAQItemProps {
  title: string;
  children?: React.ReactNode;
}

interface FAQProps {
  children: React.ReactNode;
}

/* eslint-disable no-unused-vars */
interface NavItem {
  label: string;
  href: string;
}

interface SocialIcon {
  name: string;
  href: string;
  icon: string;
}

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

type ProgramCard = {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  link: string;
};

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

interface AccordionItem {
  title: string;
  path?: string;
  content?: AccordionItem[];
}

interface AccordionProps {
  items: AccordionItem[];

  activeIndexes: string[];

  toggleAccordion: (index: string) => void;
}

interface PathFormatter {
  (pathname: string): string;
}

interface ContentSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  titleColor?: string;
}

interface ContactFormData {
  firstName: string;
  email: string;
  message: string;
}

export type IndustryType = 
  | 'airports'
  | 'hospitality'
  | 'critical-infrastructure'
  | 'government-buildings'
  | 'construction-sites'
  | 'education'
  | 'public-safety'
  | 'residence-commercial'
  | 'health-care'
  | 'retail'
  | 'manufacturing-plants';

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  buttons: string[];
}

export interface IndustryContent {
  title: string;
  description: string;
  features: SecurityFeature[];
}

export interface IndustryOption {
  id: IndustryType;
  label: string;
}

export interface FeatureCard {
  title: string;
  description: string;
}

export interface IndustryContentMap {
  [key: string]: IndustryContent;
}
