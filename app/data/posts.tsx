import type { ReactNode } from 'react'

export type PostVariant = 'deep' | 'petal' | 'gloss' | 'rosegold'

export interface JournalPost {
  slug: string
  tag: string
  title: string
  readTime: string
  date: string
  isoDate: string
  excerpt: string
  variant: PostVariant
  body: ReactNode
}

export const POSTS: JournalPost[] = [
  {
    slug: 'whats-actually-in-a-lip-gloss',
    tag: 'Formulation',
    title: "What's actually in a lip gloss",
    readTime: '5 min read',
    date: 'March 12, 2026',
    isoDate: '2026-03-12',
    excerpt: 'Reading an INCI label takes a minute. Reading it well takes a couple of products and a notes app. Here\'s the short version.',
    variant: 'deep',
    body: (
      <>
        <p className="post-lead">
          Reading an INCI label takes a minute. Reading it well takes a couple of products, a notes app, and one short explainer. This is the explainer.
        </p>
        <p>
          Every cosmetic sold legally has an ingredient list — the long, hyphenated paragraph on the back of the box. It&apos;s printed in INCI: International Nomenclature of Cosmetic Ingredients. INCI uses Latin and chemistry names so that &ldquo;shea butter&rdquo; reads the same in Lagos as it does in Lyon.
        </p>
        <p>
          Here&apos;s the thing nobody tells you when you start reading them: ingredients are listed in order of how much is in the product. The first ingredient is almost the entire formula. The last few might be a single drop in the whole batch.
        </p>
        <h2>The skeleton of a gloss</h2>
        <p>
          Strip a gloss down and what you&apos;re really looking at is three groups: <strong>the oils that carry shine</strong>, <strong>the wax or polymer that gives it cushion</strong>, and <strong>everything else</strong> — pigments, scent, preservatives, vitamins. The everything-else makes up maybe two percent of the bottle.
        </p>
        <ul>
          <li><strong>Oils for shine.</strong> Castor, jojoba, caprylic/capric triglyceride. Look for these in the first three lines.</li>
          <li><strong>Cushion.</strong> Hydrogenated polyisobutene or a wax blend. Without it, gloss runs off in five minutes.</li>
          <li><strong>Pigment.</strong> Mica + iron oxides for sheer; lakes for opaque. Both can be naturally derived.</li>
          <li><strong>Vitamin E (Tocopherol).</strong> Tiny amount, big shelf-life impact. We always include it.</li>
        </ul>
        <div className="post-pullquote">
          &ldquo;If the first ingredient on a gloss is mineral oil, put it down. Mineral oil sits on top of your lips, never penetrates, and slowly draws out the moisture underneath.&rdquo;
          <span className="post-pullquote-by">— Dimples, on reading labels</span>
        </div>
        <h2>What to skip</h2>
        <p>
          Synthetic fragrance is the single most common reason lips dry out by lunchtime. It shows up on a label as &ldquo;fragrance&rdquo; or &ldquo;parfum&rdquo; with no further detail — a single line that can legally hide thirty different chemicals. We don&apos;t use it. We scent our glosses with absolutes — actual extracts of vanilla, rose, or coconut — listed by name.
        </p>
        <p>
          Mineral oil (sometimes Paraffinum Liquidum) is the other one. It&apos;s cheap, it&apos;s almost everywhere in drugstore products, and it forms a film that pulls moisture out instead of locking it in. Once you start checking, you&apos;ll see it everywhere.
        </p>
        <h2>Read three labels this week</h2>
        <p>
          Pull out three lip products from your bag right now. Read the INCI on each. Look at where the oils sit, what&apos;s pretending to be fragrance, whether the wax is named or anonymous. Three labels and you&apos;ll be quietly fluent for the rest of your life.
        </p>
        <p className="post-sig">— D</p>
      </>
    ),
  },
  {
    slug: 'the-four-week-pink-lips-reset',
    tag: 'Ritual',
    title: 'The four-week pink lips reset',
    readTime: '7 min read',
    date: 'March 5, 2026',
    isoDate: '2026-03-05',
    excerpt: 'Why softer, more even-toned lips take exactly four weeks, and the simple rhythm that gets you there.',
    variant: 'petal',
    body: (
      <>
        <p className="post-lead">
          Most people expect a treatment to work in a week. Four weeks feels long until you understand what&apos;s actually happening to the skin on your lips — then it feels like the bare minimum.
        </p>
        <p>
          The lip surface renews itself roughly every twenty-one days. New skin cells form at the base, push upward, and eventually shed. Any treatment that works on tone — whether it&apos;s kojic acid, bearberry extract, or vitamin C — needs to be present through at least one full renewal cycle to show visible results.
        </p>
        <h2>Why one week isn&apos;t enough</h2>
        <p>
          In the first week of using the Pink Lips Treatment, the active ingredients are getting absorbed into the layers beneath the surface. You might notice your lips feel more hydrated. You won&apos;t see any tonal change yet. This is normal, and it&apos;s not a reason to stop.
        </p>
        <p>
          By week two, most people start noticing something — not a dramatic difference, but a softening. The darkest patches at the corners tend to shift first. The overall tone starts to look more uniform.
        </p>
        <div className="post-pullquote">
          &ldquo;Week two is where most people give up, right before the results they came for start to show. Don&apos;t be those people.&rdquo;
          <span className="post-pullquote-by">— The Dimples journal</span>
        </div>
        <h2>The rhythm that makes it work</h2>
        <ul>
          <li><strong>Scrub twice a week.</strong> The Sugar Lip Scrub removes the dead surface layer so the treatment can actually reach the skin it&apos;s meant to treat. No scrub means the treatment is working through a barrier.</li>
          <li><strong>Treatment morning and night.</strong> A thin layer — you don&apos;t need much. Let it absorb for sixty seconds before layering anything on top.</li>
          <li><strong>Balm or gloss after.</strong> Locks in the treatment and keeps the lip surface hydrated. Dry lips slow the renewal cycle.</li>
        </ul>
        <h2>After four weeks</h2>
        <p>
          Most people who complete a consistent four-week cycle see a clear difference in both tone and texture. The darkening from old lipsticks, sun exposure, or dehydration tends to lift noticeably. The result isn&apos;t a different lip colour — it&apos;s your natural colour, clearer and more even than before.
        </p>
        <p>
          For maintenance, once a day is enough. Some people drop to every other day after the first cycle and find that holds results perfectly well.
        </p>
        <p className="post-sig">— D</p>
      </>
    ),
  },
  {
    slug: 'from-a-kitchen-table-to-15k-orders',
    tag: 'Founder',
    title: 'From a kitchen table to 15k orders',
    readTime: '9 min read',
    date: 'February 24, 2026',
    isoDate: '2026-02-24',
    excerpt: 'The first ten units of Velvet Balm were poured in a borrowed kitchen. The hundredth was poured the same way.',
    variant: 'gloss',
    body: (
      <>
        <p className="post-lead">
          The first ten units of what would become Velvet Lip Balm were poured in a borrowed kitchen, with a borrowed scale, into containers I&apos;d ordered too many of. They sold out in a week. I thought it was a fluke.
        </p>
        <p>
          It wasn&apos;t a fluke. The second batch sold faster. By the fourth I had stopped borrowing the kitchen and started buying ingredients in larger quantities. By the ninth I had a logo, a NAFDAC number, and a mild panic about storage.
        </p>
        <h2>What I got wrong early</h2>
        <p>
          I priced based on what I thought people would pay, not on what it actually cost me to make. Which meant I was technically selling but not actually building anything — every naira I made went straight back into the next batch with nothing left over.
        </p>
        <p>
          The formula I use now: raw materials + packaging + labour time at a fair hourly rate, multiplied by 2.5 for retail. It felt high when I first landed on it. Then I ran the numbers on the first eighteen months without it and understood why nothing had accumulated.
        </p>
        <div className="post-pullquote">
          &ldquo;Every founder I&apos;ve trained who isn&apos;t making money is pricing based on fear, not cost. They&apos;re charging what they think the market will bear instead of what they need to sustain a business.&rdquo;
          <span className="post-pullquote-by">— From the Dimples training programme</span>
        </div>
        <h2>What actually changed things</h2>
        <p>
          Three things, in order. A proper INCI label. Instagram, posted consistently. And learning to say no to custom orders that weren&apos;t worth the time. The third one was the hardest.
        </p>
        <p>
          The studio off Allen Avenue happened because of a supplier relationship I spent two years building. The wholesale terms I can now offer came from understanding exactly what my cost-per-unit was. The trainings programme came from being asked, by the same five or six people, whether I would teach what I knew.
        </p>
        <h2>If I started again tomorrow</h2>
        <ul>
          <li>Fix the pricing formula before the first sale.</li>
          <li>Get the NAFDAC registration done in month one, not month eleven.</li>
          <li>Stop trying to do everything — find one product that works completely before adding a second.</li>
          <li>Take photos in daylight. Always.</li>
        </ul>
        <p className="post-sig">— D</p>
      </>
    ),
  },
  {
    slug: 'why-we-never-use-synthetic-fragrance',
    tag: 'Studio notes',
    title: "Why we'll never use synthetic fragrance",
    readTime: '4 min read',
    date: 'February 17, 2026',
    isoDate: '2026-02-17',
    excerpt: "It's cheap, it's everywhere, and it's the single biggest reason most people's lips dry out by lunchtime.",
    variant: 'rosegold',
    body: (
      <>
        <p className="post-lead">
          Synthetic fragrance is the most common ingredient in cosmetics that shouldn&apos;t be. It&apos;s cheap to source, easy to use, and almost completely unregulated — a single word on a label that can legally mean anything.
        </p>
        <p>
          When a product lists &ldquo;fragrance&rdquo; or &ldquo;parfum&rdquo; in its ingredient list, that word is covering for up to a hundred individual chemicals. Manufacturers aren&apos;t required to disclose them — they&apos;re protected as trade secrets. Some of those chemicals are harmless. Some are known skin sensitisers. A few are potential carcinogens at repeated exposure. You have no way to know which.
        </p>
        <h2>Why it dries your lips specifically</h2>
        <p>
          Lip skin is thinner than facial skin and has no sebaceous glands — it can&apos;t produce its own moisture. It depends entirely on what you put on it. Most synthetic fragrance compounds are alcohols or aldehyde derivatives, which strip the lip surface as they evaporate. The product feels fresh for an hour, then your lips feel drier than before you applied it.
        </p>
        <div className="post-pullquote">
          &ldquo;A product that makes your lips feel good for an hour and worse by three is not a lip product. It&apos;s a habit.&rdquo;
          <span className="post-pullquote-by">— The Dimples journal</span>
        </div>
        <h2>What we use instead</h2>
        <p>
          We scent our products with absolutes — actual botanical extracts. Vanilla absolute from Madagascar. Rose absolute from Morocco. Coconut and mint from Nigerian suppliers we&apos;ve used since the beginning. Each one is listed by its real INCI name on the label.
        </p>
        <p>
          Absolutes cost more than synthetic fragrance. Significantly more. We absorb that cost because the alternative is putting something on people&apos;s lips that we can&apos;t fully account for. That&apos;s not a trade-off we&apos;re willing to make.
        </p>
        <h2>How to check your own products</h2>
        <p>
          Scan the ingredient list for &ldquo;Fragrance&rdquo;, &ldquo;Parfum&rdquo;, or &ldquo;Aroma&rdquo;. If you see any of these without a specific botanical name next to them, the product is using synthetic fragrance. That&apos;s your call to make — but you should be making it knowingly.
        </p>
        <p className="post-sig">— D</p>
      </>
    ),
  },
  {
    slug: 'how-to-price-your-first-batch',
    tag: 'Training',
    title: 'How to price your first batch',
    readTime: '6 min read',
    date: 'February 10, 2026',
    isoDate: '2026-02-10',
    excerpt: 'The cost-up formula founders learn in module v of our programme — distilled into a single, honest page.',
    variant: 'petal',
    body: (
      <>
        <p className="post-lead">
          The single most common mistake new lipcare founders make is pricing based on what they think the market will pay. The right starting point is what it actually costs you to make the product.
        </p>
        <p>
          This is the formula we teach in week twelve of the trainings programme. It&apos;s not complicated, but it requires honest numbers — and most people are reluctant to sit down with honest numbers at the start.
        </p>
        <h2>The cost-up formula</h2>
        <p>
          Start with your cost of goods: every raw material in one unit at the price you actually paid, divided by how many units that quantity makes. Add your packaging. Add your labels. Add your time — at a fair hourly rate, not zero.
        </p>
        <ul>
          <li><strong>Raw materials per unit</strong> — weigh everything. No estimating.</li>
          <li><strong>Packaging per unit</strong> — jar, lid, and any extras.</li>
          <li><strong>Labelling per unit</strong> — including printing and application time.</li>
          <li><strong>Labour per unit</strong> — your time making the batch divided by how many units the batch produces. Minimum ₦1,500 per hour.</li>
        </ul>
        <p>Add all four. That number is your cost of goods per unit. Multiply by 2.5 for retail price.</p>
        <div className="post-pullquote">
          &ldquo;A 2.5x multiplier sounds like a lot until you&apos;ve paid for three batches of spoiled stock, a broken scale, and six months of posting on Instagram before a single person outside your family orders.&rdquo;
          <span className="post-pullquote-by">— Module v, Dimples Training Programme</span>
        </div>
        <h2>Why 2.5x and not less</h2>
        <p>
          The margin between your cost and your retail price has to cover: restocking raw materials, replacing equipment when it fails, packaging updates when you redesign, marketing (even if it&apos;s just content creation time), platform fees, and eventually — when you&apos;re ready — stock for a stockist.
        </p>
        <p>
          Founders who price at 1.5x or 2x tell themselves they&apos;re being competitive. What they&apos;re actually doing is slowly running their business into the ground while appearing to grow.
        </p>
        <h2>When to adjust</h2>
        <p>
          Once you have twelve months of sales data, you can look at your actual margins and adjust. Until then, the formula holds. Do not undercut yourself at the start to win customers you can&apos;t afford to retain.
        </p>
        <p className="post-sig">— D</p>
      </>
    ),
  },
  {
    slug: 'a-day-in-the-dimples-studio',
    tag: 'Behind the scenes',
    title: 'A day in the Dimples studio',
    readTime: '3 min read',
    date: 'February 3, 2026',
    isoDate: '2026-02-03',
    excerpt: 'What an average Wednesday looks like — from raw materials being weighed at 9am to the last order labelled at 6.',
    variant: 'deep',
    body: (
      <>
        <p className="post-lead">
          People ask what a normal day in the studio actually looks like. The honest answer: smaller than you&apos;d imagine, and more specific than you&apos;d expect.
        </p>
        <p>
          Wednesday is usually a production day. That means a full batch of at least two products, plus whatever orders need to go out before the 1pm courier cut-off.
        </p>
        <h2>Morning: 8am to 12</h2>
        <p>
          The first hour is raw materials. Everything gets weighed individually, labelled, and staged in order of use. We do this before anything is heated because fixing a formula error when the wax is already melted is much harder than catching it on the scale.
        </p>
        <p>
          By 9:30 the double boiler is on. We melt slowly and at a controlled temperature — shea has a habit of going grainy if you rush it. While the first phase heats, the packaging for the day&apos;s batch is being cleaned and laid out. Every jar gets wiped with isopropyl. Every lid gets checked for defects.
        </p>
        <div className="post-pullquote">
          &ldquo;Batch work is repetitive by design. The repetition is how you catch the thing that&apos;s slightly wrong before it becomes fifty units of slightly wrong.&rdquo;
          <span className="post-pullquote-by">— The Dimples studio</span>
        </div>
        <h2>Afternoon: 12 to 6</h2>
        <p>
          The 1pm cut-off is a real deadline. Orders from the night before get packed, weighed, labelled, and handed to the courier by 12:50 if possible. Then the afternoon is finishing the batch: cooling, filling, setting, labelling.
        </p>
        <p>
          We photograph every new batch before it goes into storage. Not for marketing — for quality control. The photos go into a folder by date and batch number. If there&apos;s ever a complaint six months later, we can pull up exactly what that batch looked like the day it was made.
        </p>
        <h2>What it isn&apos;t</h2>
        <p>
          It isn&apos;t glamorous. It&apos;s a small, warm room, a lot of careful weighing, and a real satisfaction when fifty identical jars are lined up at the end of the day. That satisfaction doesn&apos;t stop being there just because it&apos;s the hundredth Wednesday you&apos;ve done it.
        </p>
        <p className="post-sig">— D</p>
      </>
    ),
  },
]

export function getPost(slug: string): JournalPost | undefined {
  return POSTS.find(p => p.slug === slug)
}
