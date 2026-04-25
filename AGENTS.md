# OOH Website — Agent Instructions

## ⚠️ Critical: Next.js Version

This project runs **Next.js 16** (not 13/14/15). APIs, conventions, and file structure may differ from training data. Read `node_modules/next/dist/docs/` before writing code for any unfamiliar Next.js API.

---

## Commands

```bash
npm run dev      # Start dev server (Next.js + embedded Sanity Studio at /studio)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

No test runner is configured.

---

## Architecture

### Route Structure (App Router only)

```
src/app/
  layout.tsx                        ← Root layout: Inter font, global metadata
  (frontstore)/                     ← Route group — no URL prefix
    layout.tsx                      ← Public layout: <Header> + <Footer>
    page.tsx                        ← "/"
    about/page.tsx, services/page.tsx, contact/page.tsx
  studio/[[...tool]]/page.tsx       ← Embedded Sanity Studio at "/studio"
```

### Folder Conventions

- `src/features/<feature>/` — feature-owned display components (home, about, services)
- `src/components/layouts/` — Header, Footer, Navigation (shared across all pages)
- `src/components/shared/` — reusable card components
- `src/components/ui/` — shadcn/ui primitives (Button, Input, Select, Textarea)
- `src/lib/actions/` — typed data-fetching wrappers (server-side only)
- `src/sanity/schemaTypes/` — Sanity content models
- `src/sanity/lib/queries/` — GROQ query strings (one file per feature domain)

### Server / Client Split

- Page routes and layout components are **async Server Components** by default
- Mark only interactive components with `"use client"` (sliders, forms, mobile nav)
- Pages fetch data by calling `await Promise.all([action1(), action2()])` at the top level

---

## Data Fetching

### Established Pattern

1. Define the GROQ query with `defineQuery()` in `src/sanity/lib/queries/<domain>.ts`
2. Export a typed interface + async fetcher in `src/lib/actions/<domain>.action.ts`
3. Fetch in Server Components using the action function

```ts
// src/sanity/lib/queries/home.ts
export const HERO_SLIDES_QUERY = defineQuery(`*[_type == "heroSlide"] | order(order asc) { ... }`);

// src/lib/actions/home.action.ts
export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  return (await client.fetch(HERO_SLIDES_QUERY, {}, { next: { revalidate: 60 } })) ?? [];
};
```

### Rules

- All fetches use ISR: `{ next: { revalidate: 60 } }` — always include this option
- `useCdn: true` on the Sanity client
- Images are resolved at query time with `asset-> { url }` — returns plain string URLs; **do not** use `urlFor()` from `@sanity/image-url` unless the query returns a Sanity image reference object
- `sanityFetch` / `SanityLive` from `src/sanity/lib/live.ts` are defined but **not yet used** — do not introduce them without discussion
- **Do not define queries inline inside feature action files** (e.g., `src/features/home/actions/service.action.ts` does this incorrectly — the established pattern puts queries in `src/sanity/lib/queries/`)

---

## Sanity CMS

- **Project ID**: `sczq67fa` / **Dataset**: `production`
- **Studio**: Embedded at `/studio` — restart the dev server after schema changes
- **Schema types** (all in `src/sanity/schemaTypes/`): `businessInfo`, `heroSlide`, `service`, `testimonial`, `teamMember`, `milestone`, `post`, `author`, `category`, `blockContent`
- **Studio structure** groups: Settings, Home, Services, About, Blog — see `src/sanity/structure.ts`
- All schema types use `defineType` / `defineField` from `sanity`; export from `src/sanity/schemaTypes/index.ts`
- `longDescription` on `service` is `array` (Portable Text) — type it with `PortableTextBlock[]` from `@portabletext/types`, not `unknown[]`

---

## Styling

- **Tailwind CSS v4** — CSS-first config via `@import "tailwindcss"` in `globals.css` (no `tailwind.config.js`)
- **shadcn/ui** — style `radix-vega`, CSS variables mode; components in `src/components/ui/`
- **Brand tokens** (use these, not hardcoded hex): `var(--navy)`, `var(--navy-light)`, `var(--navy-dark)`, `var(--gold)`, `var(--gold-light)`, `var(--gold-dark)`, `var(--cream)`, `var(--surface)`, `var(--surface-alt)`
- **Tailwind arbitrary value syntax**: `bg-[var(--navy)]`, `text-[var(--gold)]`
- **`cn()` helper**: always use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class merging
- **`container-ooh`**: custom CSS class defined in `globals.css` — use for page-level containers
- **Animations**: use `framer-motion`; animation utilities from `tw-animate-css`
- Icons: `lucide-react`

---

## Forms

- Forms use **`react-hook-form`** + **`zod`** (`@hookform/resolvers/zod`) — define a `z.object` schema, infer the type with `z.infer<typeof schema>`, pass `zodResolver(schema)` to `useForm`
- Form components are always `"use client"` — see `src/features/home/components/contacts/contact-form.tsx` as the reference implementation
- Use shadcn/ui primitives (`Input`, `Textarea`, `Select`, `Button`) — never raw HTML form elements

---

## Portable Text

- `@portabletext/react` is installed — use `<PortableText value={...} />` to render `blockContent` / `longDescription` arrays
- Type the field as `PortableTextBlock[]` from `@portabletext/types` in TypeScript interfaces

---

## TypeScript

- Path alias: `@/*` → `./src/*` — use this everywhere, no relative `../` imports across feature boundaries
- Strict mode enabled; **React Compiler** is enabled (`reactCompiler: true` in `next.config.ts`) — do **not** add manual `useMemo`/`useCallback`/`memo` unless profiling proves it necessary
- **No TypeGen** — schema types are hand-maintained interfaces in `src/lib/actions/*.action.ts`; keep them in sync with schema changes
- Page-level SEO: export a `metadata` constant (`Metadata` from `next`) from each route file — see `src/app/(frontstore)/services/page.tsx` for the pattern

---

## Known Issues / Gotchas

| Area | Issue |
|------|-------|
| `env.ts` | `assertValue()` wraps hardcoded strings — env var guard is non-functional; actual values are in `.env.local` |
| `(frontstore)/layout.tsx` | Has unused imports: `getBusinessInfo`, `client`, `BUSINESS_ADDRESS` |
| `service.action.ts` in features/ | Defines queries inline — inconsistent with established pattern; prefer `src/sanity/lib/queries/` |
| `getBusinessInfo()` | Missing `{ next: { revalidate: 60 } }` — won't participate in ISR cycle |
