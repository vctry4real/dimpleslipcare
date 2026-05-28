/**
 * Typed API client for the Dimples NestJS backend.
 *
 * Access-token is kept in module-level memory (never in localStorage) so it
 * never touches the DOM. A 30-day httpOnly refresh cookie is set by the
 * server and is sent automatically via `credentials: 'include'`.
 */

const BASE =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1'

let _token: string | null = null

export function setToken(t: string | null) {
  _token = t
}
export function getToken() {
  return _token
}

// ─── Core fetch wrapper ────────────────────────────────────────────────────

interface ReqInit extends RequestInit {
  /** Pass true to skip the automatic token-refresh retry on 401. */
  skipRefresh?: boolean
}

async function req<T>(path: string, init?: ReqInit): Promise<T> {
  const hdrs: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init?.headers as Record<string, string> | undefined),
  }
  if (_token) hdrs['Authorization'] = `Bearer ${_token}`

  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: hdrs,
    credentials: 'include',
  })

  // Silently refresh the access-token once, then retry
  if (res.status === 401 && !init?.skipRefresh) {
    try {
      const r = await fetch(`${BASE}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      if (r.ok) {
        const { accessToken } = (await r.json()) as { accessToken: string }
        setToken(accessToken)
        return req<T>(path, { ...init, skipRefresh: true })
      }
    } catch {
      // refresh itself failed — fall through to throw UNAUTHORIZED
    }
    setToken(null)
    const err = Object.assign(new Error('UNAUTHORIZED'), { status: 401 })
    throw err
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: res.statusText }))
    const msg = body?.message ?? body?.error ?? res.statusText
    const err = Object.assign(new Error(Array.isArray(msg) ? msg.join(', ') : msg), {
      status: res.status,
    })
    throw err
  }

  const text = await res.text()
  return (text ? JSON.parse(text) : undefined) as T
}

// ─── Auth ──────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
}

export const auth = {
  register: (d: {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
  }) => req<AuthUser>('/auth/register', { method: 'POST', body: JSON.stringify(d) }),

  login: (d: { email: string; password: string }) =>
    req<{ accessToken: string; user: AuthUser }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(d),
    }),

  logout: () => req<void>('/auth/logout', { method: 'POST' }),

  refresh: () =>
    req<{ accessToken: string }>('/auth/refresh', {
      method: 'POST',
      skipRefresh: true,
    } as ReqInit),
}

// ─── Users / Addresses ─────────────────────────────────────────────────────

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

export interface UserProfile extends AuthUser {
  phone?: string
  emailVerified: boolean
  createdAt: string
  loyalty?: { balance: number }
}

export const users = {
  getProfile: () => req<UserProfile>('/users/me'),

  updateProfile: (d: { firstName?: string; lastName?: string; phone?: string }) =>
    req<AuthUser>('/users/me', { method: 'PATCH', body: JSON.stringify(d) }),

  getAddresses: () => req<Address[]>('/users/me/addresses'),

  createAddress: (d: {
    label: string
    recipientName: string
    line1: string
    line2?: string
    city: string
    state: string
    phone: string
    isDefault?: boolean
  }) =>
    req<Address>('/users/me/addresses', {
      method: 'POST',
      body: JSON.stringify(d),
    }),

  deleteAddress: (id: string) =>
    req<{ deleted: boolean }>(`/users/me/addresses/${id}`, { method: 'DELETE' }),
}

// ─── Cart ──────────────────────────────────────────────────────────────────

export interface ApiCartItem {
  productId: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    slug: string
    images?: Array<{ url: string; isPrimary: boolean }>
  }
}

export interface ApiCart {
  id: string
  items: ApiCartItem[]
}

export const cart = {
  get: () => req<ApiCart>('/cart'),

  addItem: (productId: string, quantity: number) =>
    req<ApiCart>('/cart/items', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    }),

  updateItem: (productId: string, quantity: number) =>
    req<ApiCart>(`/cart/items/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    }),

  clear: () => req<{ cleared: boolean }>('/cart', { method: 'DELETE' }),
}

// ─── Orders ────────────────────────────────────────────────────────────────

export interface OrderItem {
  productId: string
  quantity: number
  unitPrice: number
  total: number
  product?: { name: string; slug: string }
}

export interface Order {
  id: string
  orderNumber: string
  status: string
  paymentStatus: string
  subtotal: number
  shippingFee: number
  total: number
  notes?: string
  items: OrderItem[]
  address?: Address
  createdAt: string
}

export const orders = {
  create: (d: {
    addressId: string
    shippingMethod: 'standard' | 'express' | 'pickup'
    notes?: string
    redeemPoints?: number
  }) => req<Order>('/orders', { method: 'POST', body: JSON.stringify(d) }),

  list: () => req<Order[]>('/orders'),

  get: (id: string) => req<Order>(`/orders/${id}`),
}

// ─── Products ─────────────────────────────────────────────────────────────

export interface ApiProductImage {
  url: string
  alt?: string | null
  isPrimary: boolean
  sortOrder: number
}

export interface ApiProduct {
  id: string
  name: string
  slug: string
  blurb: string
  description: string
  ingredients: string | null
  howToUse: string[]
  /** Price in kobo (NGN × 100) */
  price: number
  badge: string | null
  rating: number
  reviewCount: number
  isActive: boolean
  category: { name: string; slug: string }
  images: ApiProductImage[]
  inventory?: { quantity: number; reserved: number }
}

export const products = {
  list: (category?: string) =>
    req<ApiProduct[]>(`/products${category ? `?category=${encodeURIComponent(category)}` : ''}`),

  get: (slug: string) => req<ApiProduct>(`/products/${encodeURIComponent(slug)}`),
}

// ─── Payments ──────────────────────────────────────────────────────────────

export interface PaystackInitResult {
  reference: string
  accessCode: string
  authorizationUrl: string
}

export const payments = {
  initialize: (orderId: string) =>
    req<PaystackInitResult>('/payments/initialize', {
      method: 'POST',
      body: JSON.stringify({ orderId }),
    }),
}
