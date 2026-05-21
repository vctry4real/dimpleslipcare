export type ProductCategory = 'scrubs' | 'glosses' | 'treatments' | 'bundles'

export interface Product {
  id: string
  name: string
  slug: string
  blurb: string
  description: string
  /** Price in kobo (multiply NGN by 100) */
  price: number
  badge?: string | null
  rating: number
  reviewCount: number
  isActive: boolean
  category: ProductCategory
  images: ProductImage[]
  inventory?: ProductInventory
  createdAt: string
  updatedAt: string
}

export interface ProductImage {
  id: string
  url: string
  alt?: string
  isPrimary: boolean
}

export interface ProductInventory {
  quantity: number
  reserved: number
  available: number
}

export interface ProductListItem {
  id: string
  name: string
  slug: string
  blurb: string
  price: number
  badge?: string | null
  rating: number
  reviewCount: number
  category: ProductCategory
  primaryImage?: string
}

export interface CreateProductDto {
  name: string
  slug: string
  blurb: string
  description: string
  price: number
  badge?: string
  categoryId: string
  initialStock: number
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
