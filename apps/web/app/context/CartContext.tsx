'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export interface CartItem {
  name: string
  price: string
  priceNum: number
  qty: number
  /** DB UUID — populated when the product is fetched from the API */
  productId?: string
}

interface CartCtx {
  items: CartItem[]
  count: number
  total: number
  isOpen: boolean
  /** productId is optional — pass it once products are wired to the API */
  addItem: (name: string, price: string, priceNum: number, productId?: string) => void
  removeItem: (name: string) => void
  updateQty: (name: string, qty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartCtx>({
  items: [], count: 0, total: 0, isOpen: false,
  addItem: () => {}, removeItem: () => {}, updateQty: () => {},
  clearCart: () => {}, openCart: () => {}, closeCart: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((name: string, price: string, priceNum: number, productId?: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.name === name)
      if (existing) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { name, price, priceNum, qty: 1, productId }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((name: string) => {
    setItems(prev => prev.filter(i => i.name !== name))
  }, [])

  const updateQty = useCallback((name: string, qty: number) => {
    if (qty <= 0) { removeItem(name); return }
    setItems(prev => prev.map(i => i.name === name ? { ...i, qty } : i))
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
    setIsOpen(false)
  }, [])

  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.priceNum * i.qty, 0)

  return (
    <CartContext.Provider value={{
      items, count, total, isOpen,
      addItem, removeItem, updateQty, clearCart,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() { return useContext(CartContext) }
