# Tasks: Linktree-Style Landing Page

**Feature**: 001-linktree-landing-page
**Branch**: `001-linktree-landing-page`
**Input**: Design documents from `/specs/001-linktree-landing-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

**Tests**: Tests are NOT explicitly requested in the feature specification, so test tasks are omitted. Focus is on implementation and manual validation.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US3)
- Include exact file paths in descriptions

## Path Conventions
- Next.js App Router structure: `app/`, `components/`, `lib/`, `public/`
- All paths relative to repository root: `/Users/cweissteiner/Petra/oh-linktree/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and shadcn/ui component library setup

- [X] T001 Initialize shadcn/ui with CLI: run `npx shadcn@latest init --legacy-peer-deps` with settings (style: new-york, CSS variables: yes)
- [X] T002 Install required shadcn/ui components: run `npx shadcn@latest add button card avatar separator badge tooltip --legacy-peer-deps`
- [X] T003 [P] Configure brand colors in app/globals.css with onlineheldinnen color palette (#6369d1, #e01e5a, #8e6704, #f2f3fa)
- [X] T004 [P] Configure Google Fonts (Mulish, Montserrat) in app/layout.tsx using next/font/google

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core type definitions and data structures that all components depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 [P] Create TypeScript type definitions in lib/types.ts (LinkItem, LinkCategory enum, PageMetadata, HeaderConfig interfaces)
- [X] T006 [P] Create links configuration data file in lib/links-data.ts with sample onlineheldinnen links (main website, Instagram, etc.)
- [X] T007 Update app/layout.tsx with complete metadata configuration (Open Graph, Twitter Cards, locale de_DE)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Instagram User Navigates to Link Page (Priority: P1) 🎯 MVP

**Goal**: Deliver functional landing page with branded header, clickable link cards, and responsive mobile-first layout

**Independent Test**: Access page at localhost:3000, verify header displays with branding, all links are visible and clickable, page is responsive on mobile (320px-1920px width), all links open correctly (external links in new tab)

### Implementation for User Story 1

- [X] T008 [P] [US1] Create Header component in components/header.tsx with logo, heading, subheading using HeaderConfig
- [X] T009 [P] [US1] Create LinkCard component in components/link-card.tsx with title, description, icon, hover effects
- [X] T010 [US1] Implement main landing page in app/page.tsx integrating Header and LinkCard components with links data
- [X] T011 [US1] Add responsive layout styles to app/page.tsx (max-width container, vertical card stack, mobile padding)
- [X] T012 [US1] Implement link opening behavior in LinkCard component (external links in new tab with rel="noopener noreferrer")
- [X] T013 [US1] Add hover states and transitions to LinkCard component (translateY, shadow, background color)
- [X] T014 [US1] Ensure mobile-first responsive design with Tailwind breakpoints in all components

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. Page loads with branded header, all links clickable, mobile-responsive.

---

## Phase 4: User Story 2 - Quick Access to Specific Resources (Priority: P2)

**Goal**: Enhance usability through visual organization, clear icons, and logical link ordering

**Independent Test**: Present page to users and verify links are visually distinguishable through icons, categories are identifiable, most important links appear at top (sorted by priority)

### Implementation for User Story 2

- [X] T015 [P] [US2] Integrate Lucide React icons in LinkCard component (map icon names to components: home, instagram, facebook, etc.)
- [X] T016 [US2] Implement priority-based sorting in lib/links-data.ts with getActiveLinks() helper function
- [ ] T017 [US2] Add optional category badges/visual indicators to LinkCard component using LinkCategory enum
- [X] T018 [US2] Enhance LinkCard layout with icon positioning (left-aligned icon, text content, visual hierarchy)
- [X] T019 [US2] Update links data in lib/links-data.ts with appropriate icons and priorities for all links

**Checkpoint**: At this point, User Stories 1 AND 2 should both work. Page has clear visual organization, icons for all links, sorted by importance.

---

## Phase 5: User Story 3 - Consistent Brand Experience (Priority: P1)

**Goal**: Ensure visual consistency with main onlineheldinnen.de website through colors, typography, and design elements

**Independent Test**: Visual comparison with onlineheldinnen.de - verify color palette matches (#6369d1, #e01e5a, #8e6704, #f2f3fa), typography uses Mulish for headers and Montserrat for body, buttons/links use brand colors and rounded corners

### Implementation for User Story 3

- [X] T020 [P] [US3] Apply brand purple (#6369d1) to primary interactive elements in LinkCard hover states
- [X] T021 [P] [US3] Apply brand typography to components (Mulish for headings in Header, Montserrat for body in LinkCard)
- [X] T022 [P] [US3] Set brand background color (#f2f3fa) for page in app/page.tsx
- [X] T023 [US3] Apply brand design patterns to cards (8px border-radius, shadow, padding 24px 34px per research findings)
- [X] T024 [US3] Ensure brand navy (#1d1f45) used for heading text and brand text color (#3d3d4e) for body
- [X] T025 [US3] Add brand-appropriate footer with copyright text styled with brand colors

**Checkpoint**: All P1 user stories complete. Page fully branded, matches onlineheldinnen.de visual identity.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories, accessibility, and deployment readiness

- [X] T026 [P] Add logo asset to public/logo.svg (placeholder or actual onlineheldinnen logo)
- [X] T027 [P] Add Open Graph image to public/og-image.png (1200x630px with onlineheldinnen branding)
- [X] T028 [P] Implement accessibility features in LinkCard (keyboard navigation, focus states, ARIA labels for icons)
- [X] T029 [P] Implement accessibility features in Header (semantic HTML header tag, alt text for logo)
- [X] T030 [P] Add skip-to-content link for keyboard users in app/layout.tsx
- [X] T031 Verify semantic HTML structure (header, main, footer tags) across app/page.tsx
- [ ] T032 Test keyboard navigation (tab through all links, enter to activate) on full page
- [X] T033 Add getActiveLinks() filter logic in lib/links-data.ts to hide inactive links (isActive: false)
- [X] T034 Optimize page performance with next/image for logo in Header component
- [X] T035 Add loading="lazy" to non-critical images if any additional images added
- [X] T036 Run development server (`npm run dev`) and validate page on multiple screen sizes (320px, 768px, 1920px)
- [X] T037 Build production bundle (`npm run build`) and verify no errors
- [ ] T038 Test production build locally (`npm start`) and run manual smoke test
- [ ] T039 Validate against quickstart.md - confirm all setup steps work and page matches specification
- [ ] T040 Verify FR-006 performance target (page load <2 seconds on 3G - test with Chrome DevTools throttling)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3, 4, 5)**: All depend on Foundational phase completion
  - US1 and US3 are both P1 priority - US1 should complete first (base functionality before branding polish)
  - US2 (P2) can start after US1 completes, or in parallel if developer capacity allows
- **Polish (Phase 6)**: Depends on US1 and US3 (P1 stories) being complete minimum, ideally all stories

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories - CORE FUNCTIONALITY
- **User Story 2 (P2)**: Can start after US1 completes (depends on LinkCard component) - ENHANCEMENT
- **User Story 3 (P1)**: Can start after US1 completes (applies branding to existing components) - BRAND CONSISTENCY

### Within Each User Story

- **US1**: Header and LinkCard components [P] parallel → Main page integrates both → Layout/responsive → Behavior → Testing
- **US2**: Icons, sorting, categories can largely be done in parallel [P] → Integrate into LinkCard → Update data
- **US3**: Color applications can be done in parallel [P] → Typography → Design patterns → Footer

### Parallel Opportunities

- T003 and T004 (Phase 1) can run in parallel
- T005, T006, T007 (Phase 2) can run in parallel
- T008 and T009 (US1) can run in parallel - different components
- T015, T016, T017 (US2) can largely run in parallel
- T020, T021, T022 (US3) can run in parallel - different styling concerns
- T026, T027, T028, T029, T030 (Phase 6) can run in parallel - different files/concerns

---

## Parallel Example: User Story 1

```bash
# Launch Header and LinkCard components together (US1):
Task T008: "Create Header component in components/header.tsx"
Task T009: "Create LinkCard component in components/link-card.tsx"

# After components exist, continue with integration and behavior:
Task T010: "Implement main landing page in app/page.tsx"
```

---

## Parallel Example: User Story 3

```bash
# Launch all brand color applications together (US3):
Task T020: "Apply brand purple to LinkCard hover states"
Task T021: "Apply brand typography to components"
Task T022: "Set brand background color for page"

# Continue with design patterns and footer:
Task T023: "Apply brand design patterns to cards"
```

---

## Implementation Strategy

### MVP First (User Story 1 + User Story 3 - Both P1)

1. Complete Phase 1: Setup → shadcn/ui installed, fonts configured, colors defined
2. Complete Phase 2: Foundational → Types defined, data structure ready, metadata configured (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 → Core functionality complete (header, links, responsive)
4. Complete Phase 5: User Story 3 → Brand consistency applied (MVP complete with P1 stories)
5. **STOP and VALIDATE**: Test P1 stories independently, verify spec compliance
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Basic functional page ✅
3. Add User Story 3 → Test independently → Branded page matching onlineheldinnen.de ✅ (MVP with both P1 stories)
4. Add User Story 2 → Test independently → Enhanced UX with icons and organization ✅ (Full feature)
5. Complete Phase 6: Polish → Production-ready ✅

### Suggested MVP Scope

**Minimum Viable Product = User Story 1 + User Story 3 (both P1)**

This delivers:
- Functional landing page with all links (US1)
- Consistent branding with onlineheldinnen.de (US3)
- Mobile-responsive design
- Clickable, accessible links
- Ready for Instagram bio link

User Story 2 (P2) can be added in a second iteration for enhanced UX.

---

## Summary

**Total Tasks**: 40 tasks
**Task Count by Phase**:
- Phase 1 (Setup): 4 tasks
- Phase 2 (Foundational): 3 tasks
- Phase 3 (US1 - P1): 7 tasks
- Phase 4 (US2 - P2): 5 tasks
- Phase 5 (US3 - P1): 6 tasks
- Phase 6 (Polish): 15 tasks

**Task Count by User Story**:
- User Story 1 (P1): 7 tasks - Core functionality
- User Story 2 (P2): 5 tasks - UX enhancements
- User Story 3 (P1): 6 tasks - Brand consistency

**Parallel Opportunities Identified**: 15+ tasks marked [P] for parallel execution

**Independent Test Criteria**:
- **US1**: Page loads, links clickable, mobile responsive
- **US2**: Icons visible, links sorted, visually organized
- **US3**: Colors match onlineheldinnen.de, typography consistent, brand design patterns applied

**Suggested MVP Scope**: Phase 1 + Phase 2 + Phase 3 (US1) + Phase 5 (US3) = 20 tasks
**Full Feature Scope**: All 40 tasks

---

## Notes

- [P] tasks = different files, no dependencies, can run in parallel
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- No tests included as not explicitly requested in spec
- Manual validation guided by acceptance scenarios in spec.md
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Use `--legacy-peer-deps` flag for all npm operations due to React 19

---

## Format Validation

✅ All tasks follow required format: `- [ ] [TaskID] [P?] [Story?] Description with file path`
✅ Tasks organized by user story for independent implementation
✅ Setup phase has no story labels (infrastructure)
✅ Foundational phase has no story labels (shared prerequisites)
✅ User story phases have story labels ([US1], [US2], [US3])
✅ Polish phase has no story labels (cross-cutting concerns)
✅ File paths included in all implementation tasks
✅ Parallel markers [P] added where tasks can run simultaneously
