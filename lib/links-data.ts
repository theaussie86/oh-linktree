import { LinkItem, LinkCategory, HeaderConfig, PageMetadata } from './types';

/**
 * Page metadata configuration
 */
export const pageMetadata: PageMetadata = {
  title: 'Online Heldinnen | Links',
  description: 'Alle wichtigen Links zu Online Heldinnen - Social Media, Website, Ressourcen und mehr',
  keywords: ['Online Heldinnen', 'Social Media', 'Frauen', 'Empowerment'],
  ogImage: {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Online Heldinnen Logo',
  },
  locale: 'de_DE',
  canonicalUrl: 'https://onlineheldinnen.de',
};

/**
 * Header configuration
 */
export const headerConfig: HeaderConfig = {
  logo: {
    src: '/logo.svg',
    alt: 'Online Heldinnen Logo',
    width: 120,
    height: 40,
  },
  heading: 'Online Heldinnen',
  subheading: 'Deine Community für digitale Sichtbarkeit',
  backgroundColor: '#f2f3fa',
};

/**
 * Link items configuration
 * Sorted by priority (1 = highest)
 */
export const links: LinkItem[] = [
  {
    id: 'main-website',
    title: 'Zur Hauptseite',
    url: 'https://onlineheldinnen.de',
    description: 'Entdecke die Online Heldinnen Community',
    icon: 'home',
    category: LinkCategory.WEBSITE,
    priority: 1,
    openInNewTab: false,
    isActive: true,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://instagram.com/onlineheldinnen',
    description: 'Folge uns auf Instagram',
    icon: 'instagram',
    category: LinkCategory.SOCIAL,
    priority: 2,
    openInNewTab: true,
    isActive: true,
  },
  {
    id: 'facebook',
    title: 'Facebook Community',
    url: 'https://facebook.com/onlineheldinnen',
    description: 'Tritt unserer Facebook-Gruppe bei',
    icon: 'facebook',
    category: LinkCategory.SOCIAL,
    priority: 3,
    openInNewTab: true,
    isActive: true,
  },
  {
    id: 'blog',
    title: 'Blog',
    url: 'https://onlineheldinnen.de/blog',
    description: 'Tipps & Tricks für deine Online-Präsenz',
    icon: 'book-open',
    category: LinkCategory.RESOURCE,
    priority: 4,
    openInNewTab: false,
    isActive: true,
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    url: 'https://onlineheldinnen.de/newsletter',
    description: 'Bleib auf dem Laufenden',
    icon: 'mail',
    category: LinkCategory.CONTACT,
    priority: 5,
    openInNewTab: false,
    isActive: true,
  },
  {
    id: 'courses',
    title: 'Online-Kurse',
    url: 'https://onlineheldinnen.de/kurse',
    description: 'Lerne von den Besten',
    icon: 'graduation-cap',
    category: LinkCategory.SHOP,
    priority: 6,
    openInNewTab: false,
    isActive: true,
  },
  {
    id: 'contact',
    title: 'Kontakt',
    url: 'https://onlineheldinnen.de/kontakt',
    description: 'Schreib uns eine Nachricht',
    icon: 'message-circle',
    category: LinkCategory.CONTACT,
    priority: 7,
    openInNewTab: false,
    isActive: true,
  },
];

/**
 * Helper function to get active links sorted by priority
 */
export function getActiveLinks(): LinkItem[] {
  return links
    .filter(link => link.isActive !== false)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Helper function to get links by category
 */
export function getLinksByCategory(category: LinkCategory): LinkItem[] {
  return getActiveLinks().filter(link => link.category === category);
}
