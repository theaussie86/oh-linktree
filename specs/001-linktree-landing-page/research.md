# Research Report: Linktree-Style Landing Page

**Feature**: 001-linktree-landing-page
**Date**: 2025-10-20
**Status**: Complete

## Overview

This document consolidates research findings for implementing a linktree-style landing page for onlineheldinnen.de, including branding guidelines, structural patterns, technology setup, and testing approaches.

---

## 1. Branding & Design System (onlineheldinnen.de)

### Decision: Use verified onlineheldinnen color palette and typography

**Rationale**: All brand colors from the spec have been verified against the live onlineheldinnen.de website. The design system is built on Astra WordPress theme with extensive custom styling that provides clear patterns for implementation.

**Verified Color Palette**:
- **Primary Purple**: `#6369d1` ✅
- **Dark Navy**: `#1d1f45` (secondary, used for text and UI elements)
- **Hot Pink**: `#e01e5a` ✅
- **Gold**: `#8e6704` ✅
- **Background Light**: `#f2f3fa` ✅
- **Text Primary**: `#3d3d4e` (dark gray for body text)
- **Primary Hover**: `#5258ca` (darker purple for interactive states)

**Typography**:
- **Headings**: `'Mulish', sans-serif` (weight 700)
- **Body/UI**: `'Montserrat', sans-serif` (weight 400)
- **Navigation**: `'Oswald', sans-serif` (weight 500) - optional for this project

**Font Sizes** (Desktop):
- h1: 120px / 7.5rem (scaled down on mobile)
- h2: 48px / 3rem
- h3: 32px / 2rem
- h4: 24px / 1.5rem
- Body: 16px / 1rem

**Responsive Breakpoints**:
- Tablet: max-width 921px
- Mobile: max-width 544px

**Alternatives Considered**: Creating a custom color scheme - rejected because maintaining brand consistency with the main onlineheldinnen.de website is a P1 requirement (see spec User Story 3).

---

## 2. Component & Interaction Patterns

### Decision: Card-based link layout with hover states and accessibility features

**Rationale**: Industry-standard linktree patterns combined with onlineheldinnen design principles provide optimal user experience for Instagram mobile traffic.

**Button/Card Design Patterns**:

**Base Card Style**:
```css
background-color: #ffffff
border-radius: 8px
box-shadow: 0px 0px 4px 0 rgba(0, 0, 0, 0.34)
padding: 1.5em 2.14em (≈24px 34px)
transition: all 0.3s ease-in-out
```

**Hover State**:
```css
transform: translateY(-2px)
box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.15)
background-color: #f2f3fa (or maintain white)
```

**Interactive Colors**:
- Default: Primary purple `#6369d1`
- Hover: Darker purple `#5258ca` or hot pink `#e01e5a` for accents
- Focus: Dotted outline (accessibility)

**Layout Structure** (from klickreich.de analysis):
- Single-column card stack (mobile-optimized)
- Max-width container: 672-750px (narrow container)
- Vertical spacing: 16px mobile, 24px desktop
- Full-width clickable cards with generous padding
- Clear visual hierarchy through typography scale

**Accessibility Features**:
- Keyboard navigable (focus states with dotted outlines)
- Semantic HTML (header, main, nav/section, footer)
- ARIA labels for icon-only buttons
- Minimum 44x44px touch targets
- Screen reader compatible link text

**Alternatives Considered**:
- Multi-column grid layout - rejected because single-column is standard for link pages and better for mobile
- Icon-heavy design - rejected to maintain clean, professional aesthetic

---

## 3. Technology Stack: shadcn/ui Setup

### Decision: shadcn/ui with Next.js 15 App Router, Tailwind CSS 4, and React 19

**Rationale**: Project already has Next.js 15.5.6 and Tailwind CSS 4 installed. shadcn/ui provides accessible, production-ready components that align with the onlineheldinnen design principles.

**Setup Instructions**:

1. **Initialize shadcn/ui**:
   ```bash
   npx shadcn@latest init --legacy-peer-deps
   ```
   - Select style: `new-york`
   - Base color: `slate` (customizable)
   - CSS variables: `yes` (required for Tailwind CSS 4)
   - Confirm existing paths: `app/globals.css`, `@/*` aliases

2. **Install Required Components**:
   ```bash
   npx shadcn@latest add button card avatar separator badge tooltip --legacy-peer-deps
   ```

3. **Key Configuration Files**:
   - `/components.json` - Auto-generated component config
   - `/lib/utils.ts` - cn() utility for class merging
   - `app/globals.css` - Tailwind CSS 4 with @theme inline and OKLCH colors

**Package Versions**:
- Next.js: 15.5.6 ✅
- React: 19.1.0 ✅
- Tailwind CSS: 4.x ✅
- shadcn/ui dependencies: Auto-installed (class-variance-authority, clsx, tailwind-merge, lucide-react)

**Compatibility Notes**:
- Use `--legacy-peer-deps` flag for all npm operations (React 19 peer dependency warnings)
- All @radix-ui packages are React 19 compatible
- Tailwind CSS 4 uses CSS-first configuration (no tailwind.config.ts file)

**Recommended Components for Link Page**:
- **Button**: For CTAs and interactive elements
- **Card**: Container for link groups (Card, CardContent, CardHeader)
- **Avatar**: Profile image and link icons
- **Separator**: Section dividers
- **Badge**: Optional tags/status indicators
- **Tooltip**: Additional context on hover

**Custom Color Integration**:
Add to `app/globals.css` under `@theme inline`:
```css
--color-brand-purple: oklch(from #6369d1 l c h);
--color-brand-pink: oklch(from #e01e5a l c h);
--color-brand-gold: oklch(from #8e6704 l c h);
--color-brand-bg: oklch(from #f2f3fa l c h);
```

**Alternatives Considered**:
- Building custom components from scratch - rejected because shadcn/ui provides accessible, tested components that save development time
- Using Headless UI or Radix UI directly - rejected because shadcn/ui provides better DX with CLI installation and styling conventions
- Material UI or Chakra UI - rejected because they impose specific design systems that conflict with onlineheldinnen branding

---

## 4. Testing Strategy

### Decision: Start with Vitest + React Testing Library (defer E2E testing)

**Rationale**: For a simple static landing page, component testing is sufficient to catch rendering bugs and ensure accessibility. E2E testing with Playwright can be added later if the project grows in complexity.

**Recommended Setup**:

**Phase 1 - Component Testing** (Implement Now):
- **Framework**: Vitest (4x faster than Jest, better Next.js 15 support)
- **Testing Library**: React Testing Library (industry standard)
- **Coverage**: Component rendering, link validation, accessibility

**Installation**:
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom vite-tsconfig-paths
```

**Configuration** (`vitest.config.mts`):
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    setupFiles: './vitest.setup.ts',
  },
});
```

**Test Priorities**:
1. Smoke test: Page renders without errors
2. Link validation: All links have correct href attributes
3. Content presence: Key text and images are present
4. Accessibility: Alt text, ARIA labels, keyboard navigation
5. Responsive behavior (if critical)

**Estimated test count**: 5-10 tests total

**Phase 2 - E2E Testing** (Optional, Add Later):
- **Tool**: Playwright (when needed for complex flows)
- **Use cases**: Only if adding forms, auth, or multi-page flows

**Comparison - Vitest vs Jest**:
- **Vitest**: 3.8s test suite vs Jest 15.5s (4x faster)
- Native TypeScript support, HMR-like testing
- Official Next.js 15 documentation support
- Simpler configuration

**Alternatives Considered**:
- Jest - rejected due to slower speed, compatibility issues with Next.js 15/React 19, and more complex setup
- Playwright E2E only - rejected because it's overkill for simple landing page; component tests provide faster feedback
- No testing - rejected because automated tests prevent regressions and ensure accessibility compliance

---

## 5. Font Loading Strategy

### Decision: Use next/font with Google Fonts optimization

**Rationale**: Next.js built-in font optimization provides better performance than direct Google Fonts CDN links and eliminates external requests.

**Implementation**:
```typescript
// app/layout.tsx
import { Mulish, Montserrat } from 'next/font/google'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-mulish',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

**Tailwind Configuration** (in `app/globals.css` under `@theme inline`):
```css
--font-family-heading: var(--font-mulish), sans-serif;
--font-family-body: var(--font-montserrat), sans-serif;
```

**Alternatives Considered**:
- Google Fonts CDN - rejected due to external request overhead and lack of optimization
- Self-hosted fonts - rejected due to added complexity for no significant benefit

---

## 6. Performance Optimization

### Decision: Static generation with Next.js Image optimization

**Rationale**: Spec requires <2 second load time on 3G and Lighthouse score 90+. Static generation eliminates server processing time, and Next.js Image component provides automatic optimization.

**Strategies**:
1. **Static Generation**: Use Next.js `export` for static HTML (no server required)
2. **Image Optimization**: Use `next/image` for logo and og-image
3. **Font Loading**: Use next/font for optimized font delivery
4. **Code Splitting**: Automatic with Next.js App Router
5. **Minimal Dependencies**: Avoid unnecessary JavaScript libraries

**Performance Targets** (from spec):
- Page load: <2 seconds on 3G mobile
- Lighthouse Performance: 90+ on mobile
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s

**Alternatives Considered**:
- Server-side rendering - rejected because content is static
- Client-side rendering only - rejected because it hurts initial load performance

---

## 7. Project Structure

### Decision: Next.js App Router with component-based architecture

**Rationale**: App Router is the standard for Next.js 15, provides better performance with React Server Components, and aligns with shadcn/ui conventions.

**Directory Structure**:
```
app/
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout (fonts, metadata)
├── globals.css           # Tailwind + theme
└── favicon.ico

components/
├── ui/                   # shadcn/ui components
│   ├── button.tsx
│   └── card.tsx
├── link-card.tsx         # Custom link card
└── header.tsx            # Branded header

lib/
├── utils.ts              # cn() helper
└── links-data.ts         # Link configuration

public/
├── logo.svg              # onlineheldinnen logo
└── og-image.png          # Social preview

__tests__/                # Vitest tests
├── components/
└── pages/
```

**Alternatives Considered**:
- Pages Router - rejected because App Router is the modern standard
- Monolithic page file - rejected for better component reusability and testing

---

## 8. Content Management

### Decision: Hardcoded link data in TypeScript configuration file

**Rationale**: Spec explicitly states "no database or authentication required" and links will be "hardcoded in source code and updated through code changes." TypeScript file provides type safety and easy updates.

**Implementation** (`lib/links-data.ts`):
```typescript
export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
  category?: 'social' | 'website' | 'resource';
  priority: number;
}

export const links: LinkItem[] = [
  {
    id: 'main-website',
    title: 'Online Heldinnen Hauptseite',
    url: 'https://onlineheldinnen.de',
    category: 'website',
    priority: 1,
  },
  // ... additional links
];
```

**Alternatives Considered**:
- JSON file - rejected because TypeScript provides type safety
- Headless CMS - rejected because spec excludes CMS and would add unnecessary complexity
- Database - rejected per spec requirements

---

## 9. Metadata & Social Sharing

### Decision: Use Next.js metadata API with Open Graph and Twitter Card support

**Rationale**: Spec requires "meta tags for social media preview" (FR-010) and proper Instagram preview display (SC-008). Next.js metadata API provides type-safe, framework-integrated solution.

**Implementation** (`app/layout.tsx`):
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online Heldinnen | Links',
  description: 'Alle wichtigen Links zu Online Heldinnen',
  openGraph: {
    title: 'Online Heldinnen | Links',
    description: 'Alle wichtigen Links zu Online Heldinnen',
    url: 'https://onlineheldinnen.de',
    siteName: 'Online Heldinnen',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Heldinnen | Links',
    description: 'Alle wichtigen Links zu Online Heldinnen',
    images: ['/og-image.png'],
  },
}
```

**Required Assets**:
- `/public/og-image.png` - 1200x630px image with onlineheldinnen branding

**Alternatives Considered**:
- Manual meta tags in head - rejected because Next.js metadata API is more maintainable
- Third-party services (LinkTree, Beacons) - rejected because spec requires custom-built solution

---

## 10. Accessibility Requirements

### Decision: WCAG 2.1 AA compliance with keyboard navigation and screen reader support

**Rationale**: Spec requires "keyboard navigation, screen reader compatible" (FR-012) and "fully navigable using only keyboard" (SC-007).

**Implementation Checklist**:
- ✅ Semantic HTML (header, main, nav, footer)
- ✅ ARIA labels for icon-only elements
- ✅ Focus indicators (visible outline/ring on all interactive elements)
- ✅ Color contrast ratios ≥4.5:1 for text
- ✅ Alt text for all images (logo, icons)
- ✅ Keyboard navigation (tab, enter)
- ✅ Skip to main content link
- ✅ Heading hierarchy (h1 for page title)
- ✅ Touch targets ≥44x44px

**Testing Approach**:
- Automated: jest-axe for a11y violations
- Manual: Keyboard navigation testing
- Screen reader: VoiceOver (macOS) or NVDA (Windows)

**Alternatives Considered**:
- WCAG AA only on best-effort basis - rejected because spec explicitly requires accessibility features

---

## Summary of Key Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| **Design System** | Use verified onlineheldinnen colors/typography | Brand consistency requirement (P1) |
| **Component Library** | shadcn/ui with Tailwind CSS 4 | Accessible components, Next.js 15 compatible |
| **Layout Pattern** | Single-column card stack | Mobile-first, standard for link pages |
| **Testing** | Vitest + React Testing Library | 4x faster than Jest, sufficient for simple page |
| **Font Loading** | next/font with Google Fonts | Performance optimization, no external requests |
| **Performance** | Static generation + Image optimization | Meet <2s load time and Lighthouse 90+ targets |
| **Content Management** | TypeScript configuration file | No CMS needed per spec, type safety |
| **Metadata** | Next.js metadata API | Built-in support for Open Graph/Twitter Cards |
| **Accessibility** | WCAG 2.1 AA compliance | Explicit spec requirement |
| **Hosting** | Static export ready | Deployable to any CDN/static host |

---

## Next Steps (Phase 1)

With research complete and all NEEDS CLARIFICATION items resolved, proceed to Phase 1:

1. **Generate data-model.md**: Define LinkItem entity and types
2. **Generate contracts**: Not applicable (no API, static content)
3. **Generate quickstart.md**: Developer setup guide
4. **Update agent context**: Add new technologies to `.specify/memory/context-claude.md`

---

**Research Phase Status**: ✅ Complete
**Ready for Phase 1**: Yes
**Outstanding Decisions**: None
