# API Contracts

**Feature**: 001-linktree-landing-page
**Status**: N/A - No API Required

## Overview

This linktree-style landing page is a **fully static frontend application** with no backend API, database, or server-side logic. Therefore, traditional API contracts (REST endpoints, GraphQL schemas) are not applicable.

---

## Why No API Contracts?

From the feature specification:

- **FR-009**: "Page MUST be static with no database or authentication required"
- **Assumptions**: "Link content (titles, URLs, descriptions) will be hardcoded in the source code"
- **Out of Scope**: "Content management system or admin interface", "Database integration", "Dynamic content loading"

All data is:
- **Hardcoded** in TypeScript configuration files (`/lib/links-data.ts`)
- **Statically generated** at build time
- **Served as static HTML/CSS/JS** with no runtime API calls

---

## Data Contracts (TypeScript Interfaces)

While there are no API contracts, the project does define **data contracts** through TypeScript interfaces. These are documented in:

**Location**: `/specs/001-linktree-landing-page/data-model.md`

**Key Types**:
- `LinkItem` - Structure of link card data
- `LinkCategory` - Enum for link categorization
- `PageMetadata` - SEO and social media metadata
- `HeaderConfig` - Header section configuration
- `ThemeConfig` - Brand styling configuration

**Implementation**: `/lib/types.ts` (to be created during implementation)

---

## Future API Integration (Out of Scope)

If the project evolves to include dynamic content in future iterations, potential API contracts might include:

### Hypothetical: GET /api/links

```typescript
// Request
GET /api/links
Headers: {
  'Content-Type': 'application/json'
}

// Response (200 OK)
{
  "links": [
    {
      "id": "main-website",
      "title": "Zur Hauptseite",
      "url": "https://onlineheldinnen.de",
      "description": "Entdecke die Online Heldinnen Community",
      "icon": "home",
      "category": "website",
      "priority": 1,
      "isActive": true
    }
    // ... more links
  ],
  "metadata": {
    "total": 7,
    "lastUpdated": "2025-10-20T12:00:00Z"
  }
}
```

### Hypothetical: Analytics Event Tracking

```typescript
// Request
POST /api/analytics/events
Headers: {
  'Content-Type': 'application/json'
}
Body: {
  "eventType": "link_click",
  "linkId": "instagram",
  "timestamp": "2025-10-20T12:34:56Z",
  "userAgent": "Mozilla/5.0...",
  "referrer": "https://instagram.com"
}

// Response (201 Created)
{
  "success": true,
  "eventId": "evt_abc123"
}
```

**Note**: These are hypothetical examples for future reference only. They are **not part of the current implementation scope**.

---

## Component Contracts (Props Interfaces)

The project does have **component contracts** in the form of React component prop types:

### LinkCard Component Props

```typescript
interface LinkCardProps {
  /** Link data object */
  link: LinkItem;

  /** Optional custom className for styling overrides */
  className?: string;

  /** Optional click handler for analytics */
  onClick?: (linkId: string) => void;
}
```

### Header Component Props

```typescript
interface HeaderProps {
  /** Header configuration */
  config: HeaderConfig;

  /** Optional custom className */
  className?: string;
}
```

**Documentation**: Component props will be documented inline using JSDoc comments in component source files.

---

## External Service Integrations

The project may integrate with external services, but these are third-party APIs, not project-owned contracts:

### Google Fonts

- **Service**: Google Fonts CDN (via next/font optimization)
- **Fonts**: Mulish (weight 700), Montserrat (weight 400, 500)
- **Integration**: Automatic via Next.js `next/font/google`
- **No API contract needed**: Handled by Next.js framework

### Social Media Platforms (Link Destinations)

- **Instagram**: `https://instagram.com/onlineheldinnen`
- **Facebook**: `https://facebook.com/onlineheldinnen`
- **Other platforms**: As defined in `links-data.ts`
- **No API contract needed**: Links are simple `<a>` tags with `href` attributes

### Open Graph Protocol (Social Media Previews)

- **Protocol**: Meta tags in HTML `<head>`
- **Implementation**: Next.js metadata API in `app/layout.tsx`
- **Spec**: https://ogp.me/
- **No custom API**: Standard meta tag format

---

## Static Generation Contract

The project does have a **build-time contract** with Next.js:

### Build Output

```bash
npm run build
```

**Expected Output**:
- Static HTML files in `.next/` or `out/` directory
- Optimized CSS bundles
- Optimized JavaScript bundles
- Optimized images (if using next/image)
- Pre-rendered pages with all data baked in

**Deployment Contract**:
- No server runtime required
- Can be deployed to any static hosting (Vercel, Netlify, Cloudflare Pages, S3, etc.)
- No environment variables needed (all config is compile-time)

---

## Summary

| Contract Type | Status | Location |
|---------------|--------|----------|
| **REST API** | ❌ Not Applicable | N/A (no API) |
| **GraphQL Schema** | ❌ Not Applicable | N/A (no API) |
| **WebSocket** | ❌ Not Applicable | N/A (no realtime) |
| **Data Types** | ✅ Defined | `/specs/.../data-model.md` |
| **Component Props** | ✅ Defined | Inline JSDoc in components |
| **Build Output** | ✅ Defined | Standard Next.js static export |

**Contracts Status**: ✅ Complete (N/A for this static project)
**API Integration**: None required
**Data Flow**: Compile-time only (no runtime API calls)
