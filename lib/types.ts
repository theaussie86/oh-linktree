/**
 * Type definitions for linktree landing page
 */

/**
 * Category types for link organization
 */
export enum LinkCategory {
  /**
   * Social media profiles (Instagram, Facebook, LinkedIn, etc.)
   */
  SOCIAL = 'social',

  /**
   * Website links (blog, main website, portfolio)
   */
  WEBSITE = 'website',

  /**
   * Resources, downloads, guides, courses
   */
  RESOURCE = 'resource',

  /**
   * Shop, products, services
   */
  SHOP = 'shop',

  /**
   * Contact methods (email, booking, calendly)
   */
  CONTACT = 'contact',
}

/**
 * Represents a single link card displayed on the landing page
 */
export interface LinkItem {
  /**
   * Unique identifier for the link (used as React key)
   * Format: kebab-case string (e.g., "main-website", "instagram-profile")
   */
  id: string;

  /**
   * Display title shown on the link card
   * Max recommended length: 50 characters for optimal display
   */
  title: string;

  /**
   * Destination URL (internal or external)
   * Must be absolute URL for external links (https://)
   */
  url: string;

  /**
   * Optional description displayed below the title
   * Max recommended length: 100 characters
   */
  description?: string;

  /**
   * Optional icon identifier
   * Can be: Lucide icon name, emoji, or path to custom SVG
   * Examples: "instagram", "globe", "mail", "📸", "/icons/custom.svg"
   */
  icon?: string;

  /**
   * Optional category for grouping/styling
   * Used for visual organization and potential filtering
   */
  category?: LinkCategory;

  /**
   * Display priority (lower number = higher priority)
   * Links are sorted by this value (1 = top of page)
   */
  priority: number;

  /**
   * Whether link opens in new tab (default: true for external links)
   */
  openInNewTab?: boolean;

  /**
   * Whether this link is currently active/enabled (default: true)
   * Hidden links won't be displayed but remain in configuration
   */
  isActive?: boolean;
}

/**
 * Metadata for the landing page
 */
export interface PageMetadata {
  /**
   * Page title (displayed in browser tab and search results)
   */
  title: string;

  /**
   * Page description for SEO and social previews
   * Recommended length: 50-160 characters
   */
  description: string;

  /**
   * Keywords for SEO (optional, limited impact in 2025)
   */
  keywords?: string[];

  /**
   * Open Graph image for social media previews
   * Recommended size: 1200x630px
   */
  ogImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };

  /**
   * Site locale (e.g., "de_DE", "en_US")
   */
  locale: string;

  /**
   * Canonical URL of the page
   */
  canonicalUrl: string;
}

/**
 * Configuration for page header section
 */
export interface HeaderConfig {
  /**
   * Logo image source
   * Can be: SVG path in /public, external URL, or data URI
   */
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };

  /**
   * Main heading text (brand name or tagline)
   */
  heading: string;

  /**
   * Optional subheading or bio text
   */
  subheading?: string;

  /**
   * Optional profile/avatar image
   */
  avatar?: {
    src: string;
    alt: string;
  };

  /**
   * Background color or gradient for header section
   */
  backgroundColor?: string;
}

/**
 * Brand theme configuration
 */
export interface ThemeConfig {
  colors: {
    primary: string;         // #6369d1
    primaryHover: string;    // #5258ca
    secondary: string;       // #1d1f45
    accent: string;          // #e01e5a
    accentAlt: string;       // #8e6704
    background: string;      // #f2f3fa
    text: string;            // #3d3d4e
    textLight: string;       // #ffffff
  };

  fonts: {
    heading: string;         // 'Mulish', sans-serif
    body: string;            // 'Montserrat', sans-serif
  };

  borderRadius: {
    card: string;            // 8px
    button: string;          // 8px
    small: string;           // 3px
  };

  spacing: {
    cardGap: string;         // 16px mobile, 24px desktop
    containerPadding: string; // 16px mobile, 24px desktop
  };
}
