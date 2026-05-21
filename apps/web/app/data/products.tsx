import { GlossBottle, ScrubJar, OilDropper, LipIcon } from '../components/ProductBottle'

export type Category = 'scrubs' | 'glosses' | 'treatments' | 'bundles'

export interface Product {
  nm: string
  blurb: string
  price: string
  priceNum: number
  meta: string
  badge: string | null
  rating: string
  cat: Category
  slug: string
  longDesc: string
  ingredients: string
  howToUse: string[]
  art: () => React.ReactElement
}

export const PRODUCTS: Product[] = [
  {
    nm: 'Sugar Lip Scrub',
    blurb: 'Sweet polish in a pot.',
    price: '₦6,500',
    priceNum: 6500,
    meta: '15g · Strawberry & cane',
    badge: null,
    rating: '★ ★ ★ ★ ★ · 412',
    cat: 'scrubs',
    slug: 'sugar-lip-scrub',
    longDesc: 'Our Sugar Lip Scrub is a gentle physical exfoliant in a pot. Cane sugar crystals buff away dead skin and flakiness while a base of coconut oil and shea butter begins conditioning the moment you apply it. Use before your balm or treatment to maximise absorption. Strawberry-scented, rinse-off formula. Suitable for all skin types, including sensitive lips.',
    ingredients: 'Sucrose (Cane Sugar), Cocos Nucifera (Coconut) Oil, Butyrospermum Parkii (Shea) Butter, Fragrance (Strawberry), Tocopherol (Vitamin E), Phenoxyethanol, Ethylhexylglycerin',
    howToUse: [
      'Apply a small amount to dry or slightly damp lips.',
      'Massage in gentle circular motions for 30 seconds.',
      'Rinse with warm water or wipe off with a damp cloth.',
      'Use twice a week — not more. Over-exfoliating thins delicate lip skin.',
      'Follow immediately with the Pink Lips Treatment or Velvet Lip Balm.',
    ],
    art: () => <ScrubJar scale={0.95} label="Sugar" />,
  },
  {
    nm: 'Velvet Lip Balm',
    blurb: 'Daily comfort, never sticky.',
    price: '₦5,000',
    priceNum: 5000,
    meta: '10g · Shea + cocoa kiss',
    badge: 'Best-seller',
    rating: '★ ★ ★ ★ ★ · 1.2k',
    cat: 'scrubs',
    slug: 'velvet-lip-balm',
    longDesc: 'A daily lip balm that actually stays put. The shea-cocoa formula creates a protective film over the lip surface that locks in moisture for hours without greasiness or tack. No fragrance allergens. Our most-restocked product — many customers keep one at home, one in their bag, one at the office. The twist-up stick means no fuss and no mess.',
    ingredients: 'Butyrospermum Parkii (Shea) Butter, Theobroma Cacao (Cocoa) Butter, Cera Alba (Beeswax), Caprylic/Capric Triglyceride, Ricinus Communis (Castor) Seed Oil, Tocopherol (Vitamin E), Fragrance',
    howToUse: [
      'Swipe onto clean lips as needed throughout the day.',
      'Use as a base before lipstick or gloss for a smooth, long-wearing finish.',
      'Apply generously before bed as an overnight treatment — your lips will feel different by morning.',
    ],
    art: () => (
      <GlossBottle
        scale={0.85}
        label="Velvet"
        capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)"
        bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"
      />
    ),
  },
  {
    nm: 'Glass Lip Gloss',
    blurb: 'Mirror-shine, zero tack.',
    price: '₦8,500',
    priceNum: 8500,
    meta: '8ml · Vanilla kiss',
    badge: null,
    rating: '★ ★ ★ ★ ★ · 312',
    cat: 'glosses',
    slug: 'glass-lip-gloss',
    longDesc: 'High-shine without the stick. The Glass Lip Gloss uses a lightweight polybutene-castor base that reflects light evenly without grabbing onto hair or pulling at the lips. Vanilla-scented. Layers cleanly over the Velvet Lip Balm for even more dimension. The doe-foot applicator gives precise placement in a single pass.',
    ingredients: 'Polybutene, Ricinus Communis (Castor) Seed Oil, Hydrogenated Polyisobutene, Silica, Fragrance (Vanilla), Tocopherol (Vitamin E), Mica, CI 77891',
    howToUse: [
      'Apply directly to bare lips or on top of the Velvet Lip Balm.',
      'Start at the centre of your top lip with the doe-foot applicator and blend outward.',
      'Build coverage by layering — each coat adds more shine.',
      'Reapply throughout the day as desired.',
    ],
    art: () => <GlossBottle scale={0.9} label="Glass" />,
  },
  {
    nm: 'Petal Lip Oil',
    blurb: 'Dewy nourishment in a drop.',
    price: '₦12,000',
    priceNum: 12000,
    meta: '6ml · Jojoba + rosehip',
    badge: 'New',
    rating: '★ ★ ★ ★ ★ · 184',
    cat: 'glosses',
    slug: 'petal-lip-oil',
    longDesc: 'A weightless oil serum for lips that crave deep nourishment. Jojoba and rosehip seed oil deliver essential fatty acids to repair the lip barrier over time. It gives a beautiful dewy finish without the weight of a gloss — the kind of look that photographs incredibly well. The pipette dropper keeps the formula hygienic and precise.',
    ingredients: 'Simmondsia Chinensis (Jojoba) Seed Oil, Rosa Canina (Rosehip) Fruit Oil, Caprylic/Capric Triglyceride, Tocopherol (Vitamin E), Beta-Carotene, Fragrance (Rose), Helianthus Annuus (Sunflower) Seed Oil',
    howToUse: [
      'Apply 1–2 drops to clean lips using the dropper.',
      'Gently press into the lip surface and allow to absorb for 1 minute.',
      'Use alone for a dewy everyday look, or layer under the Glass Lip Gloss for maximum shine.',
      'Can also be dabbed on dry cuticles and the corners of the mouth.',
    ],
    art: () => <OilDropper scale={0.95} label="Petal" />,
  },
  {
    nm: 'Pink Lips Treatment',
    blurb: 'Softer, even-toned lips.',
    price: '₦15,000',
    priceNum: 15000,
    meta: '30ml · 4-week regimen',
    badge: null,
    rating: '★ ★ ★ ★ ★ · 87',
    cat: 'treatments',
    slug: 'pink-lips-treatment',
    longDesc: 'A 4-week topical treatment designed to even lip tone and reduce hyperpigmentation caused by sun exposure, smoking, or hormonal changes. The formula combines kojic acid — a proven melanin inhibitor derived from fungi — with bearberry extract (rich in arbutin) and stabilised vitamin C. No bleaching agents, no harsh chemicals. Consistent use for 4–6 weeks delivers a visible, natural-looking shift toward your own baseline pink.',
    ingredients: 'Aqua (Water), Niacinamide, Kojic Acid, Arctostaphylos Uva-Ursi (Bearberry) Leaf Extract, Ascorbyl Glucoside (Vitamin C), Glycerin, Sodium Hyaluronate, Allantoin, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin',
    howToUse: [
      'Apply a thin layer to clean, dry lips morning and night.',
      'Allow to absorb for 2 minutes before applying a balm or gloss on top.',
      'Do not use more than twice daily — more product does not mean faster results.',
      'Use SPF lip balm during the day to protect your progress from UV reversal.',
      'Full results visible at week 4–6. Most customers notice a difference by week 2.',
    ],
    art: () => <LipIcon scale={2.4} />,
  },
  {
    nm: 'The Ritual Set',
    blurb: 'All four staples, saved 15%.',
    price: '₦26,000',
    priceNum: 26000,
    meta: 'Limited · Gift-ready box',
    badge: 'Bundle',
    rating: '★ ★ ★ ★ ★ · 209',
    cat: 'bundles',
    slug: 'the-ritual-set',
    longDesc: 'All four of our core lip products in a gift-ready box, bundled at 15% off the individual prices. Includes the Sugar Lip Scrub, Velvet Lip Balm, Glass Lip Gloss, and Pink Lips Treatment — everything you need to start and maintain the complete Dimples Lipcare ritual. Each product is full-size. The reusable outer box is lined with blush tissue. Makes the most thoughtful gift.',
    ingredients: 'See individual product pages for full ingredient lists. All products are formulated without parabens, mineral oil, or artificial dyes.',
    howToUse: [
      'Follow the three-step ritual: Scrub twice a week, Treat morning and night, Glaze to finish.',
      'The full routine takes under five minutes from start to finish.',
      'Detailed instructions for each product are included on a card inside the box.',
    ],
    art: () => (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 0 }}>
        <div style={{ transform: 'rotate(-6deg)' }}><GlossBottle scale={0.55} label="" /></div>
        <div style={{ marginLeft: -8, marginRight: -8, zIndex: 1 }}><ScrubJar scale={0.55} label="" /></div>
        <div style={{ transform: 'rotate(8deg)' }}><OilDropper scale={0.55} label="" /></div>
      </div>
    ),
  },
]
