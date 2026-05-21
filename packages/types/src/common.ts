/** Standard paginated response wrapper */
export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  perPage: number
  totalPages: number
}

/** Standard API error shape */
export interface ApiError {
  statusCode: number
  message: string | string[]
  error: string
}

export interface PaginationQuery {
  page?: number
  perPage?: number
}

/** Kobo ↔ Naira helpers (kept in types so both apps share them) */
export const toKobo  = (naira: number): number => Math.round(naira * 100)
export const toNaira = (kobo:  number): number => kobo / 100

export const formatNaira = (kobo: number): string =>
  '₦' + toNaira(kobo).toLocaleString('en-NG', { minimumFractionDigits: 0 })
