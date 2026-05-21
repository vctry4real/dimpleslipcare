'use client'

import { useState } from 'react'
import { useCart } from '../context/CartContext'

interface Props {
  name: string
  price: string
  priceNum: number
}

export default function AddToBagButton({ name, price, priceNum }: Props) {
  const [qty, setQty] = useState(1)
  const { addItem } = useCart()

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(name, price, priceNum)
    setQty(1)
  }

  return (
    <div className="pdp-qty-row">
      <div className="pdp-qty">
        <button onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
        <span>{qty}</span>
        <button onClick={() => setQty(q => q + 1)} aria-label="Increase quantity">+</button>
      </div>
      <button className="btn-primary pdp-add-btn" onClick={handleAdd}>
        Add{qty > 1 ? ` ${qty}` : ''} to bag →
      </button>
    </div>
  )
}
