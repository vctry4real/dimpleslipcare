export type UserRole = 'CUSTOMER' | 'ADMIN'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  role: UserRole
  emailVerified: boolean
  createdAt: string
}

export interface UserProfile extends User {
  loyaltyPoints?: number
  loyaltyTier?: LoyaltyTier
}

export type LoyaltyTier = 'Pink' | 'Rose' | 'Crimson'

export interface AuthTokens {
  accessToken: string
}

export interface RegisterDto {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
}

export interface LoginDto {
  email: string
  password: string
}
