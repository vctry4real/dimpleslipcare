'use client'

import { type ReactNode } from 'react'
import { AuthProvider } from '../context/AuthContext'
import { CartProvider } from '../context/CartContext'
import CartDrawer from './CartDrawer'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </AuthProvider>
  )
}
