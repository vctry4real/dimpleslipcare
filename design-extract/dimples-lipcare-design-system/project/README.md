# Dimples Lipcare — Design System

A luxury, feminine brand identity for **Dimples Lipcare**, a boutique lipcare house offering lip scrubs, balms, glosses, oils, and pigmentation treatments — plus formulation trainings for aspiring brand founders.

> **Tagline:** *Soft, Glossy & Moisturized Lips*
> **Promise line:** *All in One Lipcare Brand*

---

## Brand context

Dimples Lipcare lives at the intersection of **high-end cosmetic editorial** and **warm, approachable Instagram-native beauty**. Think glass display counters in a soft-pink boutique, lit by warm tungsten — but also a founder on TikTok unboxing a fresh batch of strawberry scrub. The brand sells finished products *and* sells the dream of starting your own lipcare line, so the design has to feel both desirable *and* teachable.

### Products represented
| Line | Role | Vibe |
|---|---|---|
| **Lip Scrubs** | Exfoliation, the "ritual starter" | Sugary, granular, sweet |
| **Lip Balms** | Daily care, hydration | Soft, everyday, hero |
| **Lip Glosses** | High-shine finish, the show-piece | Glassy, mirror-shine |
| **Lip Oils** | Treatment + gloss hybrid | Dewy, dropper, modern |
| **Pink Lips Treatment** | Pigmentation / lightening | Clinical-feminine, results-led |

### Trainings (a second revenue stream)
- Lipcare formulation training
- Product making
- Branding guide
- Support & certificate
- Start your own lipcare brand

### Contact
- **Phone:** 09038796354 · 09025333560
- **Instagram:** [@Dimples_lipcare](https://instagram.com/Dimples_lipcare)
- **TikTok:** [@Dimples_lipcare](https://www.tiktok.com/@Dimples_lipcare)

### Sources & inputs
- No codebase, no Figma, no existing brand book was provided.
- The system below is generated **from scratch** from the brief: soft baby pink + white + deep pink, glossy & elegant, modern Instagram business flyer style.
- All product imagery in the UI kits uses **CSS-rendered placeholder bottles/tubes** with a clearly marked `<image-slot>` zone for the user to drop in real product photography. **The brand needs real product photos to feel finished — see "Caveats" at the bottom.**

---

## Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← agent-invocable skill manifest
colors_and_type.css        ← THE source of truth for tokens
preview/                   ← cards rendered into the Design System tab
  type-*.html              ← type specimens & scale
  color-*.html             ← palette, gradients, semantic
  spacing-*.html           ← radii, shadows, spacing scale
  component-*.html         ← buttons, product card, badges, form, etc
  brand-*.html             ← logo, motifs, sparkle/heart marks
assets/                    ← logos & SVG motifs (hearts, sparkles, gloss highlight)
  logo-wordmark.svg
  logo-monogram.svg
  motif-heart.svg
  motif-sparkle.svg
  motif-droplet.svg
  pattern-petals.svg
ui_kits/
  website/                 ← marketing site recreation (hero, products, trainings, contact)
    index.html             ← interactive flyer-style landing page
    *.jsx                  ← components
  flyer/                   ← the Instagram business flyer (1080×1350)
    index.html
    *.jsx
```

---

## CONTENT FUNDAMENTALS

### Voice & tone
Dimples speaks like a **knowledgeable best friend who happens to formulate cosmetics**. Warm, sensorial, confident, never clinical. It uses "you" generously and "we" when referring to the brand. It does not shout. It coos.

| Axis | Where it sits |
|---|---|
| Formal ↔ Casual | leans casual-elegant — refined but never starchy |
| We ↔ You | "you" for benefits, "we" for promises |
| Plain ↔ Sensorial | sensorial — *velvety, glossy, plush, dewy, kissable* |
| Quiet ↔ Loud | quiet — confidence by space, not volume |

### Casing
- **Display headlines (serif italic):** *Sentence case* with intentional line breaks. `Soft, glossy & moisturized lips.`
- **Section labels (eyebrows):** `ALL CAPS · WIDE TRACKING` (`.eyebrow`) — *e.g.* `OUR PRODUCTS`, `WE ALSO OFFER TRAININGS`.
- **Buttons:** `Title Case` or short sentence — `Shop the collection`, `Book a training`.
- **Body:** sentence case, Oxford comma, no shouting.

### Vocabulary — yes / no list
✅ **Yes:** velvety, glossy, plush, dewy, kissable, ritual, treatment, batch, hand-poured, formulation, signature, blend, finish, glaze.
🚫 **No:** "amazing", "awesome", emoji-as-bullet (we have proper sparkles for that), excessive exclamation marks, all-caps shouting, "literally", "obsessed".

### Sample copy

**Hero (long)**
> *Soft, glossy & moisturized lips.*
> A hand-poured lipcare ritual — scrubs, balms, glosses, oils, and a pink lips treatment that actually works. All from one tiny pink studio.

**Hero (short / flyer)**
> *Soft, glossy & moisturized lips.* — All in one lipcare brand.

**Product blurbs** (one short sensorial line + one practical line)
- **Sugar Lip Scrub** — *Sweet polish in a pot.* Buff away dry flakes; finish with our balm.
- **Velvet Lip Balm** — *Daily comfort, never sticky.* Shea + sweet almond, light cocoa kiss.
- **Glass Lip Gloss** — *Mirror-shine, zero tack.* Plumping, with a hint of vanilla.
- **Petal Lip Oil** — *Dewy nourishment in a drop.* Jojoba + rosehip, dropper applicator.
- **Pink Lips Treatment** — *For softer, even-toned lips.* Twice daily, four weeks.

**Training CTA**
> *Build your own lipcare line — start to shelf.* Five modules, real formulations, your certificate at the end.

### Emoji policy
**No emoji in production UI.** Hearts and sparkles are part of our visual identity but are always rendered as **SVG motifs from `assets/`**, never as 💕✨. This keeps the look editorial rather than chatty. Social-media captions are the only place emoji are permitted, and even then sparingly.

---

## VISUAL FOUNDATIONS

### Colors
The palette is a **two-temperature pink system**: a warm, near-white blush canvas, anchored by a deep wine-rose accent. White and a faint champagne carry the "luxury cosmetic" warmth; greens and blues are intentionally absent.

| Token | Role |
|---|---|
| `--blush-50/100` | Page canvas, near-white wash |
| `--blush-200` | The **hero baby pink** — most-used surface |
| `--blush-300/400/500` | Petal mids — for chips, soft fills |
| `--blush-700` | **Primary deep-pink accent** (CTAs, links, eyebrows) |
| `--blush-800/900` | Wine plum — footer, deep CTA, on-pink text |
| `--cream`, `--champagne`, `--rosegold` | Warm neutrals — packaging-adjacent tones |
| `--ink` | Body text, deep aubergine (not pure black — pure black is forbidden) |

**Pure `#000` is never used.** Body text is `--ink` (`#2a1822`), a deep aubergine that reads black but harmonizes with pink.

### Gradients (the "gloss")
Three signature gradients live in `colors_and_type.css`:
- `--grad-petal` — soft baby-pink wash (hero backgrounds)
- `--grad-gloss` — white-to-pink-to-white sheen (lip gloss highlight, logo)
- `--grad-deep` — rose-to-wine (deep CTA, footer)
- `--grad-rosegold` — champagne-to-bronze (foil accents on chips and price tags)
- `--grad-sheen` — radial white sheen used as an **overlay** to fake gloss on any photo or shape (`.gloss-overlay`).

### Typography
A two-family system with one accent.

| Family | Role | Notes |
|---|---|---|
| **Cormorant Garamond** (serif) | Display, H1–H3, editorial pull-quotes — usually in *italic* for emotional moments | Beauty-industry standard with delicate ball terminals |
| **Jost** (sans) | UI, buttons, body, H4–H5, eyebrows | Geometric, modern, slightly warm |
| **Love Ya Like A Sister** | Signature & flourishes only — the "Dimples" wordmark uses it | Brand-supplied font, casual handwritten marker style |

> ✅ **Brand font installed:** `fonts/LoveYaLikeASister-Regular.ttf` is the signature font. Cormorant Garamond and Jost remain Google Fonts substitutes for the serif and sans roles — swap them out if you have licensed alternatives.

### Spacing
4pt base scale (`--s-1` = 4px → `--s-24` = 96px). Use **generous whitespace** between sections (`--s-16` minimum) — luxury reads as room to breathe.

### Backgrounds
- **Default canvas:** `--bg-1` (very near-white blush). Pure white is reserved for cards floating on pink.
- **Hero backgrounds:** `--grad-petal` plus a soft `--grad-sheen` radial overlay top-left to imply window-light.
- **Pattern:** `assets/pattern-petals.svg` — a low-opacity (5–8%) repeating petal motif, used sparingly behind section headers and on flyer corners. Never tile across the entire page.
- **Full-bleed product imagery:** when real product photos arrive, they go in `.product-hero` containers with a `--grad-sheen` overlay clipped to a soft-rounded rectangle (`--r-xl`).

### Borders
- Hairline borders use `--line` (`#f1dde2`) — pink, not gray.
- Border weights: `1px` always. Heavier borders are not used; instead, increase elevation via shadow.

### Shadows (pink-tinted, soft)
All shadows have a wine-rose tint (`rgba(140, 45, 74, …)`), never neutral gray. Five levels, plus two specialty:
- `--shadow-1/2/3/4` — elevation 1–4
- `--shadow-glass` — outer shadow + inner top highlight (for product chips and glossy cards)
- `--shadow-inset-gloss` — inner sheen, used inside pills/buttons to fake plastic gloss

### Corner radii
Generous, never sharp.
- Inputs & small chips: `--r-md` (16px)
- Cards: `--r-lg` (24px)
- Hero panels & product cards: `--r-xl` (32px)
- Buttons: `--r-pill` (fully rounded) — always
- Sharp 90° corners are forbidden except for legal disclaimer footers.

### Cards
Cards float on the pink canvas in pure white (`--pearl`), with `--shadow-2` at rest and `--shadow-3` on hover. No visible borders — elevation does the work. Product cards carry an additional **gloss highlight** (`.gloss-overlay` `::after`) over the top 40%.

### Animation
- Default easing: `--ease-out` (`cubic-bezier(.16, 1, .3, 1)`) — a soft over-shoot
- Default duration: `--t-med` (240ms) for most state changes, `--t-slow` (420ms) for entrances
- **No bounces, no spring overshoots, no auto-playing carousels.** Movement is *gliding*, never *boingy*.
- Sparkle motifs may twinkle (opacity 0.6 → 1 → 0.6, 3.5s loop). Hearts pulse 1 → 1.04 → 1 at 2.4s.

### Hover states
- **Buttons (primary):** background brightens by ~6% and shadow goes from `--shadow-2` → `--shadow-3`. No color shift.
- **Cards:** lift via shadow upgrade, scale `1.0` → `1.01`, never more.
- **Links:** underline grows from 0 → 100% width left-to-right over 240ms.
- **Product chips:** the `--grad-sheen` highlight slides 0 → +30% across the chip.

### Press / active states
- **Buttons:** scale to `0.98`, shadow drops to `--shadow-1`, no color change.
- **Cards:** scale `0.995`, shadow drops one level.

### Transparency & blur
Used sparingly. The signature use is the **frosted price-pill** floating on a product photo:
`background: rgba(255,255,255,.7); backdrop-filter: blur(12px);`
Reserved for chips and floating navigation on hero photography. Body content never sits on blur.

### Imagery direction
- **Warm, soft daylight** — never cool, never moody. Slight overexposure on highlights to imply gloss.
- **Backgrounds in photos** should pick up `--blush-200` or `--cream` — pink-on-pink is preferred over white seamless.
- **Grain / B&W:** not used. The brand is glossy and colorful by definition.
- Product photos crop tight, with shadow falling at 5 o'clock for a "boutique counter" feel.

### Layout rules
- Max content width: **1200px** on desktop; **1080px** on flyer.
- Section vertical padding: `--s-16` to `--s-24`.
- **Asymmetry over centering** — the design uses off-axis product placements with a sparkle or heart filling the negative space. Dead-center compositions feel stamp-like; we avoid them outside the flyer.
- One serif moment per screen. Two if you must. Three is shouting.

---

## ICONOGRAPHY

Dimples uses **custom SVG motifs** for its decorative vocabulary, and **Lucide** (CDN) for any utility UI icons (chevrons, phone, mail, instagram, tiktok). No icon font is bundled.

### Custom motifs (in `assets/`)
| File | Use |
|---|---|
| `motif-heart.svg` | Decorative heart with soft inner shadow — flyer corners, "love" moments |
| `motif-sparkle.svg` | Four-point sparkle / twinkle — fills negative space, signals "glossy" |
| `motif-droplet.svg` | Lip-oil droplet, used for the oil product line and as bullet replacements |
| `pattern-petals.svg` | Repeating petal tile, 5–8% opacity, behind section eyebrows only |
| `logo-wordmark.svg` | "Dimples Lipcare" — Love Ya Like A Sister "Dimples" + Jost "LIPCARE" lockup |
| `logo-monogram.svg` | "D" monogram inside a soft-pink circle, for avatars and favicons |

### Utility icons — Lucide via CDN
For UI affordances (phone, message, instagram, tiktok, chevron, arrow-right, check, star), the kits load Lucide from `https://unpkg.com/lucide@latest`. Stroke width is set to **1.5** (Lucide default is 2 — we always reduce to feel daintier). Color inherits `currentColor`.

> ⚠️ **Substitution flag:** Lucide is a substitute for a hypothetical custom icon set. If the brand commissions custom icons later, drop them in `assets/icons/` and update the kits.

### Emoji & unicode
- **Emoji:** never in UI. Social captions only.
- **Unicode marks:** `·` (middle dot) is used between metadata fields. `—` (em dash) and `&` ampersand are part of the editorial voice.

---

## How to use this system

1. Link `colors_and_type.css` first thing in any HTML file.
2. Use the semantic tokens (`var(--accent)`, `var(--bg-1)`, etc), never raw hex.
3. Default any new piece of UI to white card + pink-tinted shadow + pill button.
4. Reach for one of the four signature gradients before inventing a new one.
5. Add ONE serif italic moment per screen. Keep the rest in Jost.
6. When in doubt, add air, not ornament.

---

## Caveats — please review

1. **No real product photography exists yet.** The UI kits show CSS-illustrated bottles/tubes with `<image-slot>` drop zones. The brand will look dramatically better once real photos replace these.
2. **Partial font substitution.** Cormorant Garamond (serif) and Jost (sans) are still Google Fonts substitutes — only the signature (Love Ya Like A Sister) is brand-supplied. If you have licensed serif/sans fonts, drop them in `fonts/` and I'll swap.
3. **Tonal shift in the wordmark.** Love Ya Like A Sister is a casual handwritten marker font, more playful than the previously-substituted elegant calligraphic script. The wordmark now reads warmer and friendlier than "luxury cosmetic editorial." Confirm this matches your brand intent.
3. **Logo is generated.** I created a wordmark and monogram from the brand name. If Dimples already has a logo, swap `assets/logo-wordmark.svg` and `assets/logo-monogram.svg` and the rest of the system will pick it up.
4. **No content for trainings beyond the bullet list.** Pricing, schedule, and trainer bio are placeholders.

## What I'd love your help iterating on

- 📸 **Real product photography** — even iPhone shots in window light would be a huge upgrade
- 🖋 **Confirm the "Love Ya Like A Sister" wordmark vibe** — it's notably more casual/playful than the original elegant script
- 💬 **Sample real customer testimonials** to swap into the carousel placeholders
- 🎨 **Tell me if the deep-pink is too rose or too wine** — easy to dial
