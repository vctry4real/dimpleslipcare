export interface CartItem {
  id: string
  productId: string
  productName: string
  productSlug: string
  price: number        // in kobo
  quantity: number
  subtotal: number     // price * quantity
  imageUrl?: string
}

export interface Cart {
  id: string
  items: CartItem[]
  itemCount: number
  subtotal: number     // in kobo
  userId?: string
  sessionId?: string
}

export interface AddToCartDto {
  productId: string
  quantity: number
}

export interface UpdateCartItemDto {
  quantity: number
}
