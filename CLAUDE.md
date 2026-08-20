# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint
```

## Architecture

This is a Next.js 16 marketing site for Iteralab (Chilean software company) using TypeScript, Tailwind CSS 4, and Framer Motion.

### Structure

- `src/app/` - Next.js App Router (layout.tsx, page.tsx, globals.css)
- `src/components/marketing/` - Page sections (Navbar, Hero, PricingCards, Footer, etc.)
- `src/components/ui/` - Reusable components (Button, Card, Badge, AnimatedSection)
- `src/components/seo/` - `JsonLd` component that injects structured data
- `src/lib/constants.ts` - Site config, pricing, navigation links
- `src/lib/agents.ts` - Product catalog (4 AI agents, incl. per-agent FAQ)
- `src/lib/faq.ts` - Single source of truth for the site FAQ
- `src/lib/seo.ts` - JSON-LD schema builders for AEO
- `src/lib/llms.ts` - Generates `/llms.txt` and `/llms-full.txt` for AI crawlers
- `src/lib/utils.ts` - Utilities: `cn()` for class merging, `formatCLP()` for currency

### SEO / AEO

The site is AEO-optimized. See `docs/AEO-OPTIMIZATION.md` for the full guide and `docs/architecture.md` for the SEO section. Key rules:

- **Never duplicate content**: edit the source of truth (`agents.ts`, `faq.ts`) and schemas/llms.txt/sitemap regenerate.
- Keep FAQ answers answer-first (respond in the first sentence); Google penalizes FAQPage content not visible on the page.
- One H1 per page; canonical set on every route.

### Key Patterns

**Path alias**: `@/*` maps to `./src/*`

**Component variants**: UI components use variant props with separate config objects
```typescript
variant?: 'primary' | 'secondary' | 'ghost'
size?: 'sm' | 'md' | 'lg'
```

**Client components**: Use `'use client'` only for interactive components (Navbar, AnimatedSection, WhatsAppFloat)

**Animations**: Framer Motion via AnimatedSection wrapper for scroll-triggered effects

**Styling**: Dark theme (Zinc 950/900 base) with Indigo accents, glass morphism effects via `.glass` class

### Fonts

- Space Grotesk: Display/headings
- Inter: Body text

Both loaded via next/font with `font-display: swap`

## Locale

Spanish (Chile) - es_CL. Currency formatting uses Chilean Peso (CLP).
