# Data Model: Linktree-Style Landing Page

**Feature**: 001-linktree-landing-page
**Date**: 2025-10-20
**Status**: Complete

## Overview

This document defines the data structures, entities, and type system for the linktree-style landing page. Since this is a static page with no database, all entities are TypeScript interfaces representing in-memory data structures.

---

## 1. Core Entities

### 1.1 LinkItem

The primary entity representing a clickable link card on the landing page.

```typescript
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
```

**Validation Rules**:
- `id`: Required, must be unique across all links
- `title`: Required, 1-50 characters recommended
- `url`: Required, must be valid URL format
- `priority`: Required, positive integer (1-999)
- `description`: Optional, 0-100 characters recommended

**State Transitions**: None (static data)

**Relationships**: None (standalone entity)

---

### 1.2 LinkCategory

Enum defining possible link categories for organization and styling.

```typescript
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
```

**Usage**: Optional categorization for visual styling or grouping. Can be used to apply category-specific colors, icons, or layout variations.

---

### 1.3 PageMetadata

Entity representing page-level metadata for SEO and social sharing.

```typescript
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
```

**Validation Rules**:
- `title`: Required, 30-60 characters for SEO
- `description`: Required, 50-160 characters for SEO
- `ogImage.url`: Required, must be accessible public URL
- `ogImage` dimensions: 1200x630px recommended for optimal social preview

---

### 1.4 HeaderConfig

Configuration for the page header section with branding.

```typescript
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
```

**Validation Rules**:
- `logo.src`: Required, must be valid path or URL
- `logo.alt`: Required for accessibility
- `heading`: Required, 5-50 characters recommended

---

## 2. Supporting Types

### 2.1 Theme Configuration

```typescript
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
```

---

### 2.2 Analytics Event

```typescript
/**
 * Analytics event tracking (optional for future implementation)
 */
export interface AnalyticsEvent {
  eventType: 'link_click' | 'page_view' | 'card_hover';
  linkId?: string;
  timestamp: Date;
  metadata?: Record<string, unknown>;
}
```

**Note**: Analytics tracking is out of scope for initial implementation but interface is provided for future extension.

---

## 3. Data Flow

### 3.1 Configuration → Component Flow

```
links-data.ts (source of truth)
    ↓
LinkItem[] array
    ↓
Page Component (app/page.tsx)
    ↓
LinkCard Component (for each item)
    ↓
Rendered HTML
```

**Data is static and flows unidirectionally** - no state management required.

---

### 3.2 Data Transformation

No transformations needed. Data is defined in TypeScript and consumed directly by React components.

**Optional Future Enhancements**:
- Sort links by priority before rendering
- Filter inactive links
- Group links by category
- Add search/filter functionality

---

## 4. Sample Data Structure

### Example: links-data.ts

```typescript
import { LinkItem, LinkCategory, HeaderConfig, PageMetadata } from '@/lib/types';

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
```

---

## 5. Type Definitions File Structure

### Recommended: /lib/types.ts

```typescript
/**
 * Type definitions for linktree landing page
 */

// Re-export all entity types
export type { LinkItem, PageMetadata, HeaderConfig, ThemeConfig };
export { LinkCategory };

// Re-export configuration
export type { links, pageMetadata, headerConfig } from './links-data';
```

---

## 6. Validation & Constraints

### Runtime Validation (Optional)

For production environments, consider adding Zod schema validation:

```typescript
import { z } from 'zod';

const LinkItemSchema = z.object({
  id: z.string().min(1).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1).max(50),
  url: z.string().url(),
  description: z.string().max(100).optional(),
  icon: z.string().optional(),
  category: z.nativeEnum(LinkCategory).optional(),
  priority: z.number().int().positive(),
  openInNewTab: z.boolean().optional(),
  isActive: z.boolean().optional(),
});

// Validate links array at build time
export const validatedLinks = z.array(LinkItemSchema).parse(links);
```

**Note**: Validation is optional for initial implementation but recommended for production to catch configuration errors at build time.

---

## 7. Data Constraints Summary

| Entity | Field | Type | Required | Validation |
|--------|-------|------|----------|------------|
| LinkItem | id | string | Yes | Unique, kebab-case |
| LinkItem | title | string | Yes | 1-50 chars |
| LinkItem | url | string | Yes | Valid URL |
| LinkItem | description | string | No | 0-100 chars |
| LinkItem | icon | string | No | Icon name or path |
| LinkItem | category | LinkCategory | No | Enum value |
| LinkItem | priority | number | Yes | Positive integer |
| LinkItem | openInNewTab | boolean | No | Default: true for external |
| LinkItem | isActive | boolean | No | Default: true |
| PageMetadata | title | string | Yes | 30-60 chars (SEO) |
| PageMetadata | description | string | Yes | 50-160 chars (SEO) |
| PageMetadata | ogImage.url | string | Yes | Valid image URL |
| HeaderConfig | logo.src | string | Yes | Valid path/URL |
| HeaderConfig | heading | string | Yes | 5-50 chars |

---

## 8. Future Extensions (Out of Scope)

Potential enhancements for future iterations:

1. **LinkClick Entity**: Track click events for analytics
2. **LinkSchedule**: Enable/disable links based on date/time
3. **LinkVariation**: A/B testing different link titles/descriptions
4. **User Preferences**: Dark mode toggle, language selection
5. **Dynamic Content**: Fetch links from CMS or API

---

## Summary

**Total Entities**: 4 core entities (LinkItem, LinkCategory, PageMetadata, HeaderConfig)
**Storage**: In-memory TypeScript configuration (no database)
**Validation**: TypeScript compile-time type checking (optional Zod runtime validation)
**Relationships**: None (all entities are standalone)
**State Management**: Not required (static data)

**Data Model Status**: ✅ Complete
**Ready for Implementation**: Yes
