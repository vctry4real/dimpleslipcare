export type OrderStatus = 'delivered' | 'transit' | 'processing' | 'cancelled'

export interface OrderItem {
  nm: string
  qty: number
  price: number
}

export interface Order {
  id: string
  date: string
  isoDate: string
  items: OrderItem[]
  subtotal: number
  ship: number
  total: number
  status: OrderStatus
  address: string
  payment: string
  tracking?: string
}

export interface Address {
  id: string
  label: string
  recipientName: string
  line1: string
  line2?: string
  city: string
  state: string
  phone: string
  isDefault: boolean
}

export interface SavedItem {
  slug: string
  nm: string
  price: string
  priceNum: number
  blurb: string
}

export const MOCK_USER = {
  firstName: 'Adaeze',
  lastName: 'Okonkwo',
  email: 'adaeze.o@gmail.com',
  phone: '0812 345 6789',
  newsletter: true,
  smsAlerts: false,
}

export const MOCK_ORDERS: Order[] = [
  {
    id: 'DMP-2026-0042',
    date: 'May 14, 2026',
    isoDate: '2026-05-14',
    items: [
      { nm: 'The Ritual Set', qty: 1, price: 26000 },
      { nm: 'Pink Lips Treatment', qty: 1, price: 15000 },
    ],
    subtotal: 41000,
    ship: 2500,
    total: 43500,
    status: 'transit',
    address: '14 Bode Thomas St, Surulere, Lagos',
    payment: 'Card · •••• 4821',
    tracking: 'GIG-2026-LGS-8847',
  },
  {
    id: 'DMP-2026-0031',
    date: 'Apr 29, 2026',
    isoDate: '2026-04-29',
    items: [
      { nm: 'Glass Lip Gloss', qty: 2, price: 8500 },
      { nm: 'Sugar Lip Scrub', qty: 1, price: 6500 },
    ],
    subtotal: 23500,
    ship: 0,
    total: 23500,
    status: 'delivered',
    address: '14 Bode Thomas St, Surulere, Lagos',
    payment: 'Bank transfer',
  },
  {
    id: 'DMP-2025-0189',
    date: 'Dec 11, 2025',
    isoDate: '2025-12-11',
    items: [
      { nm: 'Petal Lip Oil', qty: 1, price: 12000 },
      { nm: 'Velvet Lip Balm', qty: 1, price: 5000 },
    ],
    subtotal: 17000,
    ship: 0,
    total: 17000,
    status: 'delivered',
    address: '3B Admiralty Way, Lekki Phase 1, Lagos',
    payment: 'Card · •••• 4821',
  },
  {
    id: 'DMP-2025-0145',
    date: 'Oct 2, 2025',
    isoDate: '2025-10-02',
    items: [
      { nm: 'The Ritual Set', qty: 1, price: 26000 },
    ],
    subtotal: 26000,
    ship: 2500,
    total: 28500,
    status: 'delivered',
    address: '14 Bode Thomas St, Surulere, Lagos',
    payment: 'Paystack',
  },
]

export const MOCK_ADDRESSES: Address[] = [
  {
    id: 'addr-1',
    label: 'Home',
    recipientName: 'Adaeze Okonkwo',
    line1: '14 Bode Thomas Street',
    city: 'Surulere',
    state: 'Lagos',
    phone: '0812 345 6789',
    isDefault: true,
  },
  {
    id: 'addr-2',
    label: 'Office',
    recipientName: 'Adaeze Okonkwo',
    line1: '3B Admiralty Way',
    line2: 'Lekki Phase 1',
    city: 'Lekki',
    state: 'Lagos',
    phone: '0812 345 6789',
    isDefault: false,
  },
]

export const MOCK_SAVED: SavedItem[] = [
  { slug: 'petal-lip-oil',      nm: 'Petal Lip Oil',      price: '₦12,000', priceNum: 12000, blurb: 'Weightless glow, petal-soft.' },
  { slug: 'pink-lips-treatment',nm: 'Pink Lips Treatment', price: '₦15,000', priceNum: 15000, blurb: 'The 28-day reset.' },
  { slug: 'velvet-lip-balm',    nm: 'Velvet Lip Balm',    price: '₦5,000',  priceNum: 5000,  blurb: 'Daily comfort, never sticky.' },
]

export function getOrder(id: string): Order | undefined {
  return MOCK_ORDERS.find(o => o.id === id)
}

export const STATUS_LABEL: Record<OrderStatus, string> = {
  delivered:  'Delivered',
  transit:    'In transit',
  processing: 'Processing',
  cancelled:  'Cancelled',
}

export const STATUS_COLOR: Record<OrderStatus, string> = {
  delivered:  'var(--ok)',
  transit:    'var(--accent)',
  processing: '#c07a20',
  cancelled:  'var(--fg-3)',
}
