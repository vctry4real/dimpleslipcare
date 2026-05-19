---
name: dimples-lipcare-design
description: Use this skill to generate well-branded interfaces and assets for Dimples Lipcare — a luxury feminine lipcare brand (soft baby pink, white, deep pink; glossy, soft, classy, beauty-focused) — for production or throwaway prototypes/mocks/social flyers. Contains design guidelines, color & type tokens, fonts, brand assets, and UI kit components for prototyping marketing pages and Instagram-style flyers.
user-invocable: true
---

Read the **README.md** file at the root of this skill, and explore the other available files. The README has the brand context, content tone, full visual foundations, and an index of everything in the system.

## What's here

- `colors_and_type.css` — THE source of truth for all tokens (color scales, gradients, type families, radii, shadows, spacing, motion). Always link this first.
- `assets/` — brand SVGs: `logo-wordmark.svg`, `logo-monogram.svg`, `motif-heart.svg`, `motif-sparkle.svg`, `motif-droplet.svg`, `pattern-petals.svg`. Copy these out; do not redraw them.
- `ui_kits/website/` — full marketing-site recreation (sticky header, hero with product cluster, trust strip, product grid, ritual section, deep-pink trainings panel, testimonial, contact + newsletter, footer). Modular JSX components.
- `ui_kits/flyer/` — Instagram-native 1080×1350 business flyer with the same component vocabulary.
- `preview/` — atomic specimen cards rendered into the Design System tab.

## When invoked

If creating visual artifacts (slides, mocks, throwaway prototypes, flyers, social posts): copy `colors_and_type.css` and the relevant `assets/` files into the output project, link the CSS first thing, and reuse the JSX patterns from `ui_kits/`. The brand's signature moves are:

1. **One serif italic moment per screen** (Cormorant Garamond italic) — everything else is Jost.
2. **Pink-tinted shadows, never gray** — `rgba(140, 45, 74, …)`.
3. **Pill buttons with the `--grad-deep` gradient** for primary CTAs.
4. **Frosted price-pills** with `backdrop-filter: blur(10px)` over product photos.
5. **SVG hearts & sparkles**, never emoji.
6. **Generous whitespace** — luxury reads as room to breathe.

If working on production code, copy the assets, read the rules in README.md to become an expert in designing with this brand, and mirror the component patterns from the UI kits.

If the user invokes this skill without other guidance, ask what they want to build (Instagram post? landing page section? packaging mockup? new product card?), ask 2–3 clarifying questions, then act as an expert designer who outputs HTML artifacts or production code depending on the need.
