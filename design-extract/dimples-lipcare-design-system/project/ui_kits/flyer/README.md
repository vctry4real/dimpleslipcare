# Dimples Lipcare — Instagram Business Flyer

A 1080 × 1350 portrait flyer (Instagram-native 4:5) — the explicit ask from the brief. Built as composable React components so the same modules can be reskinned or rearranged.

## Structure

```
index.html                 ← canvas-scaled stage, loads all parts
flyer.css                  ← flyer-specific layout & illustration styles
FlyerStage.jsx             ← scales 1080×1350 to fit any viewport
FlyerMast.jsx              ← monogram + wordmark + tagline strip
FlyerHero.jsx              ← "All in One Lipcare Brand" + product cluster
FlyerProducts.jsx          ← five-product list with sensorial blurbs
FlyerTrainings.jsx         ← "We Also Offer Trainings" with the five offers
FlyerContact.jsx           ← phones, Instagram, TikTok
FlyerOrnaments.jsx         ← reusable hearts, sparkles, divider rules
ProductBottle.jsx          ← CSS-illustrated gloss bottle / scrub jar / oil dropper
```

## Notes
- **Product visuals are CSS illustrations** with deliberate `<image-slot>` regions; drop in real product photography for a finished look.
- The flyer uses **one serif italic moment** ("Soft, glossy & moisturized lips.") — the rest is Jost.
- Decorative hearts and sparkles use SVG from `assets/`, never emoji.
- The CTA chip uses `backdrop-filter: blur` for the frosted "boutique counter" feel.
