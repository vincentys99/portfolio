# Portfolio Website — Build Plan

Oct 1, 2026 · @Vincent

## Overview & goal

A store-themed portfolio where recruiters "shop" my skills by selecting them on a collection page, add them to a cart, and check out by contacting me. Success means a recruiter or hiring manager understands within 30 seconds that I'm a web developer who builds and ships A/B tests, and then reaches out.

- Built with Next.js, hosted on Vercel (Hobby plan) at a free vercel.app address; a custom domain comes after the MVP works well.
- The old vincentys99.github.io repo becomes a redirect to the new site.
- Mobile-first: most visitors will be on phones, so every page is designed for mobile before desktop.
- Drafted mostly with Claude Code, using this doc as the brief.

## Audience & conversion

The site is built for recruiters and hiring managers; freelance clients are out of scope for now. Target roles are CRO Specialist, Software Engineer, and later Head of Growth, so the site leads with experimentation and backs it with engineering.

| Audience | What they need | How the site serves it |
| --- | --- | --- |
| Recruiters | Role fit, location (Selangor, remote), CV, a way to reach me, in under a minute | Sticky header with CV download and Contact on every page |
| Hiring managers | Proof: what I've built, how I think, results | Quick views with concrete specs and short proof stories; full pages for flagship work |

| Conversion level | Action |
| --- | --- |
| Primary | Checkout completed (contact form sent, with cart contents attached) |
| Secondary | CV download, LinkedIn or GitHub click, email copied |
| Micro | Card selected, quick view opened, add to cart, "Did you know" interaction |

All three levels are tracked as analytics events, so the site doubles as a CRO case study of its own.

## Store concept

Every store element maps to one portfolio element, so the metaphor stays consistent and never confuses a visitor about what they're looking at.

| Store element | Portfolio meaning |
| --- | --- |
| Storefront (home) | Who I am and what I do, featured products, "Shop by role" bundles, and a link to the full collection |
| Collection page (/shop) | Every product as a selectable card, grouped by category |
| Product | A single skill |
| Category | Specialty, Technical, Tools & platforms, or How I work |
| "Featured" / "Bestseller" badge | My strongest skills (A/B testing first) |
| Quick view | Proof without leaving the collection: specs, where I used it, a short story or result |
| Flagship product page | A full page for my strongest work (A/B testing, the Shopify app) |
| Product reviews | Quotes from colleagues or managers |
| "Frequently bought together" | Related skills (e.g. JavaScript with A/B test development) |
| Bundle deal | One tap selects a role's skill set (CRO Specialist, Software Engineer), shown on the homepage |
| Out of stock | A playful note on skills I'm still learning |
| Cart | The recruiter's shortlist, built by selecting cards and adding them all at once, then reviewed on a full cart page |
| Checkout | Contact form, pre-filled with the cart |
| Order confirmation | Thank-you page with expected reply time and next steps |
| "Did you know..." widgets | A/B testing facts, placed like upsell widgets |

## Product catalogue

The catalogue has four categories, with a featured Specialty category for A/B testing and CRO on top, because that is the skill that sets me apart and the one my target roles hire for.

| Category | Products | Notes |
| --- | --- | --- |
| Specialty (featured) | A/B test development, Experiment setup & QA, Conversion rate optimisation, Analytics & tracking | Platforms: VWO, Optimizely, AB Tasty, Omniconvert Explore, Google Optimize (retired by Google in 2023). Tracking: GA4, GTM |
| Technical | JavaScript, TypeScript, HTML, CSS, Tailwind, jQuery, React / Next.js, Shopify Liquid, GraphQL, Python, T-SQL, ASP.NET / .NET Framework, APIs | Languages and frameworks only; Next.js can point to this site as its proof |
| Tools & platforms | Shopify (including an app with active users that I build and maintain in a team of three), MS SQL Server & SSMS, Microsoft Azure, Power BI, Tableau, SAP BusinessObjects, Figma (building from designs as the source of truth) | The Shopify app is a strong candidate for a featured product or story |
| How I work | Fast learner on the job, Remote collaboration, Builder in a small team, Attention to detail | Proof from work history: learning A/B testing at Convx, remote work for PRISM+ SG, the Shopify app team, building from Figma designs |

"How I work" describes my working style instead of claiming personality traits, and every product points to real work history. Quotes from ex-colleagues are the strongest proof for this category. Humor and professionalism show through the site's copy rather than as products.

### Product card, quick view and flagship pages

Every product uses the same fields, stored as data. The card shows the name, tagline and category; the quick view shows the rest. Only flagship products (my A/B testing work and the Shopify app) get a full page, with room for a longer story:

- **Name and tagline**: one line on what the skill means in my work.
- **Specs**: years of use, where used (PRISM+, Convx Asia, earlier roles), related tools. Concrete specs instead of percentage skill bars, which recruiters tend to distrust.
- **Proof**: one short story or anonymised result.
- **Reviews**: an optional quote from a colleague or manager.
- **Frequently bought together**: two or three related skills.
- **Did you know**: one relevant A/B testing fact.
- **Select**: every card toggles between selected and unselected, and a sticky "Add selected to cart" bar adds them all at once.

## Sitemap & pages

Version 1 follows a real store's journey (homepage, collection, cart, checkout), plus a sticky header that lets a recruiter jump straight to contact or the CV from anywhere.

&#91;embedded content: sitemap and visitor journey · 7 routes, 1 shortcut\]

Categories are sections on the collection page, with filter chips to jump between them, rather than separate pages, which keeps the site small and quick to browse on a phone.

## Key features

Seven features carry the concept; the fast path matters most, because the store must never slow down a recruiter who just wants the basics.

- **Fast path**: a sticky header with Download CV and Contact on every page, so a recruiter can skip the store entirely.
- **Homepage**: a short intro (who I am, what I do), featured products with add-to-cart, "Shop by role" bundles, and a "Browse all skills" link. The key skills must be visible here, because every visitor who doesn't click through to the collection is lost.
- **Collection page**: every product as a selectable card, grouped by category, with a quick view (bottom sheet on mobile, side panel on desktop) for the proof. It lives at /shop.
- **Cart**: filled from the homepage or the collection page, confirmed with a small "Added to cart" message, and reviewed on a full cart page at /cart. A count badge sits in the header. The cart is saved in the browser so it survives a refresh.
- **Checkout**: a short form (name, company, role hiring for, email, message) with the cart items attached. It works with an empty cart too ("just say hi"). It is sent by email through a Next.js API route and Resend, with spam protection.
- **Did you know...**: short, sourced A/B testing facts shown in quick views and in the cart, stored in one data file so they are easy to add to.
- **Live A/B test**: the site runs a real test on itself, such as two hero headlines split 50/50. A small panel tells visitors which variant they're in and how the test works, which demonstrates the skill instead of describing it.

## Content inventory

Content, not code, is the real bottleneck: gather this before the build starts, since Claude Code can write the site but not the material behind it.

- [ ] Short bio (2–3 sentences) and a longer About text
- [ ] Professional photo
- [ ] Updated CV as a PDF
- [ ] 3–5 anonymised A/B test stories (check what PRISM+ and Convx Asia allow me to show)
- [ ] One short proof story for each "How I work" product
- [ ] 2–3 quotes from colleagues or managers
- [ ] 10–15 "Did you know" A/B testing facts, each with a source
- [ ] Links: LinkedIn, GitHub, contact email
- [ ] Domain name chosen and bought (after the MVP works)
- [ ] 3–5 reference sites for the design

## Design direction

The look should read as a clean, modern online store first and a playful portfolio second, so it feels professional to a recruiter at a glance. Palette and fonts are still open and get settled from the reference sites before building.

- Mobile patterns borrowed from real stores: collection grid with category filter chips, selectable cards, a sticky "Add selected to cart" bar, quick view as a bottom sheet, "Added to cart" confirmation, full cart page.
- Large tap targets within thumb reach; nothing important hidden behind hover.
- One accent colour for calls to action (Add selected to cart, Checkout, Download CV), used nowhere else.
- Fast loading: optimised images, minimal animation, aiming for a strong mobile Lighthouse score.

## Tech stack & architecture

The stack stays small and free: Next.js on Vercel, with all content kept as data files in the repo, so there is no CMS or database to run.

| Area | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js (App Router), TypeScript |  |
| Styling | Tailwind CSS | Doubles as proof for the Tailwind product |
| Hosting | Vercel Hobby, vercel.app address first; custom domain after the MVP | Hobby is for personal, non-commercial use; a portfolio fits |
| Content | `products.ts` and `facts.ts` data files | Cards, quick views and flagship pages generated from data |
| Cart state | Selection and cart in React context, saved in localStorage |  |
| Contact form | Next.js API route + Resend | Honeypot or Turnstile against spam |
| A/B split | Next.js middleware assigns a variant and stores it in a cookie | Variant logged with every analytics event |
| Analytics | GA4, loaded through GTM | GTM custom events for each conversion level; load GTM after the page is interactive to protect mobile speed |
| Repo | GitHub, deployed automatically to Vercel on push | vincentys99.github.io repo becomes a redirect page |

## MVP scope vs later

Version 1 is the smallest site a recruiter can use end to end: browse, add to cart, check out, download the CV. Everything else ships after it is live.

| Version 1 (launch) | Later |
| --- | --- |
| Collection page with selectable cards and category filter | More role bundles beyond the first two |
| Quick views for every product; full pages for 2–3 flagship items | Live A/B test on the hero, with its results published |
| Homepage with featured products and two role bundles; cart page and checkout with email | Reviews and quotes from colleagues |
| Thank-you page | "Out of stock" skills |
| Sticky header with CV and Contact | Dark mode |
| "Did you know" with 5 facts | More facts and an A/B testing explainer page |
| Mobile-first layout, analytics events | Blog or write-ups |

## Build order for Claude Code

Deploy an empty site on day one, then build one working piece per session, so there is always a live version and each Claude Code session has a narrow, clear task.

1. Create the repo with Next.js, TypeScript and Tailwind; deploy to Vercel on the free vercel.app address.
2. Export this doc to Markdown and add it to the repo as `CLAUDE.md`, so Claude Code reads it every session.
3. Define the data model: `products.ts` (categories, card fields, flagship flag, bundles) and `facts.ts`.
4. Build the layout: sticky header with cart icon, CV and Contact; footer.
5. Build the collection page at /shop: selectable product cards grouped by category, filter chips, sticky "Add selected to cart" bar.
6. Build the homepage at /: intro hero, featured products, "Shop by role" bundles, "Browse all skills" link to /shop.
7. Build the quick view (bottom sheet on mobile, side panel on desktop), then the flagship product page template.
8. Add the cart: selection state, context, localStorage, "Added to cart" confirmation, cart page at /cart.
9. Add checkout: form, API route, email, thank-you page.
10. Add GA4 through GTM, with events for all conversion levels.
11. Add "Did you know" cards.
12. Test on real phones, run Lighthouse, fix issues; launch, redirect vincentys99.github.io, then buy the custom domain.
13. After launch: the live A/B test via middleware, then the items under Later.

## Open questions

- [ ] Which domain name? (Deferred until the MVP runs well on Vercel.)
- [x] Which A/B testing tools and platforms go on the Specialty products? Answered in the Product catalogue.
- [ ] Can company and client names appear, or should all stories be anonymised?
- [x] Which soft skills make the cut? Decided: four "How I work" products.
- [x] Should earlier experience (e.g. SAP BusinessObjects) appear as a product? Yes, under Tools & platforms.
- [x] Analytics: GA4, loaded through GTM.
- [x] Email service for the checkout form: Resend.
