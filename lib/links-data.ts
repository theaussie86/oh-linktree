import { LinkItem, LinkCategory, HeaderConfig, PageMetadata } from "./types";

/**
 * Page metadata configuration
 */
export const pageMetadata: PageMetadata = {
  title: "Online Heldinnen | Links",
  description:
    "Alle wichtigen Links zu Online Heldinnen - Social Media, Website, Ressourcen und mehr",
  keywords: ["Online Heldinnen", "Social Media", "Frauen", "Empowerment"],
  ogImage: {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Online Heldinnen Logo",
  },
  locale: "de_DE",
  canonicalUrl: "https://onlineheldinnen.de",
};

/**
 * Header configuration
 */
export const headerConfig: HeaderConfig = {
  logo: {
    src: "/logo.svg",
    alt: "Online Heldinnen Logo",
    width: 120,
    height: 40,
  },
  heading: "Online Heldinnen",
  subheading: "Deine Community für digitale Sichtbarkeit",
  backgroundColor: "#f2f3fa",
};

/**
 * Link items configuration
 * Sorted by priority (1 = highest)
 */
export const links: LinkItem[] = [
  {
    id: "robethood-website",
    title: "🤑 Robethood: Einmalig 500 € sichern",
    url: "https://gksnwp.robethood.net/ts/93765/tsc?typ=r&amc=con.robethood.537825.557816.CRTM2lwrG7v",
    description:
      "Ohne Vorkenntnisse, ohne Risiko – so einfach kannst du dir 500 € extra verdienen.",
    icon: "external-link",
    category: LinkCategory.WEBSITE,
    priority: 1,
    openInNewTab: true,
    isActive: true,
  },
  {
    id: "robethood-telegram-group",
    title: "Robethood Telegram Gruppe",
    url: "https://t.me/+9TYkZeYOFCxjMzc6",
    description: "Trete meiner Telegram-Gruppe bei",
    icon: "external-link",
    category: LinkCategory.RESOURCE,
    priority: 2,
    openInNewTab: true,
    isActive: true,
  },
  {
    id: "blog",
    title: "Blog",
    url: "https://onlineheldinnen.de/blog",
    description: "Tipps & Tricks für deine Online-Präsenz",
    icon: "home",
    category: LinkCategory.WEBSITE,
    priority: 4,
    openInNewTab: false,
    isActive: true,
  },
  {
    id: "pindichreich-online-kurs",
    title: "Pin dich Reich - Online Kurs",
    url: "https://myablefy.com/epl/gS_yDE1_YBWjuQ-2FJ71",
    description:
      "Kreiere Blogs und Bilder und verdiene passive Provisionen durch Klicks auf Pinterest",
    icon: "graduation-cap",
    category: LinkCategory.RESOURCE,
    priority: 5,
    openInNewTab: true,
    isActive: true,
  },
  {
    id: "kipinboost-online-kurs",
    title: "KI Pin Boost - Online Kurs",
    url: "https://myablefy.com/epl/XWvAshc2byss495YWjhY",
    description:
      "🎯 Mehr Reichweite in kürzerer Zeit. Weniger Aufwand. Mehr Umsatz.",
    icon: "graduation-cap",
    category: LinkCategory.RESOURCE,
    priority: 6,
    openInNewTab: true,
    isActive: true,
  },
  {
    id: "pinterst-starter-freebie",
    title: "0 € Pinterest Starter Kit",
    url: "https://onlineheldinnen.de/pinterst-starter-freebie/",
    description: "Freebie für deine Pinterest-Strategie",
    icon: "book-open",
    category: LinkCategory.RESOURCE,
    priority: 7,
    openInNewTab: true,
    isActive: true,
  },
];

/**
 * Helper function to get active links sorted by priority
 */
export function getActiveLinks(): LinkItem[] {
  return links
    .filter((link) => link.isActive !== false)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Helper function to get links by category
 */
export function getLinksByCategory(category: LinkCategory): LinkItem[] {
  return getActiveLinks().filter((link) => link.category === category);
}
