import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱  Seeding Dimples Lipcare database…')

  // ── Categories ──────────────────────────────────────────────────────────────
  const [scrubs, glosses, treatments, bundles] = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'scrubs' },
      update: {},
      create: { name: 'Scrubs & Balms', slug: 'scrubs' },
    }),
    prisma.category.upsert({
      where: { slug: 'glosses' },
      update: {},
      create: { name: 'Glosses & Oils', slug: 'glosses' },
    }),
    prisma.category.upsert({
      where: { slug: 'treatments' },
      update: {},
      create: { name: 'Treatments', slug: 'treatments' },
    }),
    prisma.category.upsert({
      where: { slug: 'bundles' },
      update: {},
      create: { name: 'Bundles', slug: 'bundles' },
    }),
  ])

  console.log('  ✔  Categories')

  // ── Products ────────────────────────────────────────────────────────────────
  // Prices are in kobo (NGN × 100)
  const productData = [
    {
      name: 'Sugar Lip Scrub',
      slug: 'sugar-lip-scrub',
      blurb: 'Sweet polish in a pot.',
      description:
        'Our Sugar Lip Scrub is a gentle physical exfoliant in a pot. Cane sugar crystals buff away dead skin and flakiness while a base of coconut oil and shea butter begins conditioning the moment you apply it. Use before your balm or treatment to maximise absorption. Strawberry-scented, rinse-off formula. Suitable for all skin types, including sensitive lips.',
      ingredients:
        'Sucrose (Cane Sugar), Cocos Nucifera (Coconut) Oil, Butyrospermum Parkii (Shea) Butter, Fragrance (Strawberry), Tocopherol (Vitamin E), Phenoxyethanol, Ethylhexylglycerin',
      howToUse: [
        'Apply a small amount to dry or slightly damp lips.',
        'Massage in gentle circular motions for 30 seconds.',
        'Rinse with warm water or wipe off with a damp cloth.',
        'Use twice a week — not more. Over-exfoliating thins delicate lip skin.',
        'Follow immediately with the Pink Lips Treatment or Velvet Lip Balm.',
      ],
      price: 650000, // ₦6,500
      badge: null,
      rating: 5.0,
      reviewCount: 412,
      categoryId: scrubs.id,
      stock: 120,
    },
    {
      name: 'Velvet Lip Balm',
      slug: 'velvet-lip-balm',
      blurb: 'Daily comfort, never sticky.',
      description:
        'A daily lip balm that actually stays put. The shea-cocoa formula creates a protective film over the lip surface that locks in moisture for hours without greasiness or tack. No fragrance allergens. Our most-restocked product — many customers keep one at home, one in their bag, one at the office. The twist-up stick means no fuss and no mess.',
      ingredients:
        'Butyrospermum Parkii (Shea) Butter, Theobroma Cacao (Cocoa) Butter, Cera Alba (Beeswax), Caprylic/Capric Triglyceride, Ricinus Communis (Castor) Seed Oil, Tocopherol (Vitamin E), Fragrance',
      howToUse: [
        'Swipe onto clean lips as needed throughout the day.',
        'Use as a base before lipstick or gloss for a smooth, long-wearing finish.',
        'Apply generously before bed as an overnight treatment — your lips will feel different by morning.',
      ],
      price: 500000, // ₦5,000
      badge: 'Best-seller',
      rating: 5.0,
      reviewCount: 1200,
      categoryId: scrubs.id,
      stock: 250,
    },
    {
      name: 'Glass Lip Gloss',
      slug: 'glass-lip-gloss',
      blurb: 'Mirror-shine, zero tack.',
      description:
        'High-shine without the stick. The Glass Lip Gloss uses a lightweight polybutene-castor base that reflects light evenly without grabbing onto hair or pulling at the lips. Vanilla-scented. Layers cleanly over the Velvet Lip Balm for even more dimension. The doe-foot applicator gives precise placement in a single pass.',
      ingredients:
        'Polybutene, Ricinus Communis (Castor) Seed Oil, Hydrogenated Polyisobutene, Silica, Fragrance (Vanilla), Tocopherol (Vitamin E), Mica, CI 77891',
      howToUse: [
        'Apply directly to bare lips or on top of the Velvet Lip Balm.',
        'Start at the centre of your top lip with the doe-foot applicator and blend outward.',
        'Build coverage by layering — each coat adds more shine.',
        'Reapply throughout the day as desired.',
      ],
      price: 850000, // ₦8,500
      badge: null,
      rating: 5.0,
      reviewCount: 312,
      categoryId: glosses.id,
      stock: 180,
    },
    {
      name: 'Petal Lip Oil',
      slug: 'petal-lip-oil',
      blurb: 'Dewy nourishment in a drop.',
      description:
        'A weightless oil serum for lips that crave deep nourishment. Jojoba and rosehip seed oil deliver essential fatty acids to repair the lip barrier over time. It gives a beautiful dewy finish without the weight of a gloss — the kind of look that photographs incredibly well. The pipette dropper keeps the formula hygienic and precise.',
      ingredients:
        'Simmondsia Chinensis (Jojoba) Seed Oil, Rosa Canina (Rosehip) Fruit Oil, Caprylic/Capric Triglyceride, Tocopherol (Vitamin E), Beta-Carotene, Fragrance (Rose), Helianthus Annuus (Sunflower) Seed Oil',
      howToUse: [
        'Apply 1–2 drops to clean lips using the dropper.',
        'Gently press into the lip surface and allow to absorb for 1 minute.',
        'Use alone for a dewy everyday look, or layer under the Glass Lip Gloss for maximum shine.',
        'Can also be dabbed on dry cuticles and the corners of the mouth.',
      ],
      price: 1200000, // ₦12,000
      badge: 'New',
      rating: 5.0,
      reviewCount: 184,
      categoryId: glosses.id,
      stock: 90,
    },
    {
      name: 'Pink Lips Treatment',
      slug: 'pink-lips-treatment',
      blurb: 'Softer, even-toned lips.',
      description:
        'A 4-week topical treatment designed to even lip tone and reduce hyperpigmentation caused by sun exposure, smoking, or hormonal changes. The formula combines kojic acid — a proven melanin inhibitor derived from fungi — with bearberry extract (rich in arbutin) and stabilised vitamin C. No bleaching agents, no harsh chemicals. Consistent use for 4–6 weeks delivers a visible, natural-looking shift toward your own baseline pink.',
      ingredients:
        'Aqua (Water), Niacinamide, Kojic Acid, Arctostaphylos Uva-Ursi (Bearberry) Leaf Extract, Ascorbyl Glucoside (Vitamin C), Glycerin, Sodium Hyaluronate, Allantoin, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin',
      howToUse: [
        'Apply a thin layer to clean, dry lips morning and night.',
        'Allow to absorb for 2 minutes before applying a balm or gloss on top.',
        'Do not use more than twice daily — more product does not mean faster results.',
        'Use SPF lip balm during the day to protect your progress from UV reversal.',
        'Full results visible at week 4–6. Most customers notice a difference by week 2.',
      ],
      price: 1500000, // ₦15,000
      badge: null,
      rating: 5.0,
      reviewCount: 87,
      categoryId: treatments.id,
      stock: 60,
    },
    {
      name: 'The Ritual Set',
      slug: 'the-ritual-set',
      blurb: 'All four staples, saved 15%.',
      description:
        'All four of our core lip products in a gift-ready box, bundled at 15% off the individual prices. Includes the Sugar Lip Scrub, Velvet Lip Balm, Glass Lip Gloss, and Pink Lips Treatment — everything you need to start and maintain the complete Dimples Lipcare ritual. Each product is full-size. The reusable outer box is lined with blush tissue. Makes the most thoughtful gift.',
      ingredients:
        'See individual product pages for full ingredient lists. All products are formulated without parabens, mineral oil, or artificial dyes.',
      howToUse: [
        'Follow the three-step ritual: Scrub twice a week, Treat morning and night, Glaze to finish.',
        'The full routine takes under five minutes from start to finish.',
        'Detailed instructions for each product are included on a card inside the box.',
      ],
      price: 2600000, // ₦26,000
      badge: 'Bundle',
      rating: 5.0,
      reviewCount: 209,
      categoryId: bundles.id,
      stock: 45,
    },
  ]

  for (const { stock, ...data } of productData) {
    const product = await prisma.product.upsert({
      where: { slug: data.slug },
      update: { ...data },
      create: { ...data },
    })

    await prisma.inventory.upsert({
      where: { productId: product.id },
      update: { quantity: stock },
      create: { productId: product.id, quantity: stock, reserved: 0 },
    })

    console.log(`  ✔  ${product.name}`)
  }

  console.log('\n✅  Seed complete.')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
