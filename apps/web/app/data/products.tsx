/**
 * Product art map — maps DB slug → React render function.
 * This is the only frontend-specific product data; all other product
 * information (name, price, description, etc.) comes from the API.
 */
import { GlossBottle, ScrubJar, OilDropper, LipIcon } from '../components/ProductBottle'

export const PRODUCT_ART: Record<string, () => React.ReactElement> = {
  'sugar-lip-scrub': () => <ScrubJar scale={0.95} label="Sugar" />,
  'velvet-lip-balm': () => (
    <GlossBottle
      scale={0.85}
      label="Velvet"
      capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)"
      bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"
    />
  ),
  'glass-lip-gloss': () => <GlossBottle scale={0.9} label="Glass" />,
  'petal-lip-oil': () => <OilDropper scale={0.95} label="Petal" />,
  'pink-lips-treatment': () => <LipIcon scale={2.4} />,
  'the-ritual-set': () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 0 }}>
      <div style={{ transform: 'rotate(-6deg)' }}><GlossBottle scale={0.55} label="" /></div>
      <div style={{ marginLeft: -8, marginRight: -8, zIndex: 1 }}><ScrubJar scale={0.55} label="" /></div>
      <div style={{ transform: 'rotate(8deg)' }}><OilDropper scale={0.55} label="" /></div>
    </div>
  ),
}

/** Format kobo price to display string, e.g. 650000 → "₦6,500" */
export function formatPrice(kobo: number): string {
  return `₦${(kobo / 100).toLocaleString('en-NG')}`
}

/** Format rating count to display string, e.g. 1200 → "★ ★ ★ ★ ★ · 1.2k" */
export function formatRating(count: number): string {
  if (count === 0) return '★ ★ ★ ★ ★'
  const fmt = count >= 1000 ? `${(count / 1000).toFixed(1)}k` : String(count)
  return `★ ★ ★ ★ ★ · ${fmt}`
}
