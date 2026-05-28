export interface CartItem {
    id: string;
    productId: string;
    productName: string;
    productSlug: string;
    price: number;
    quantity: number;
    subtotal: number;
    imageUrl?: string;
}
export interface Cart {
    id: string;
    items: CartItem[];
    itemCount: number;
    subtotal: number;
    userId?: string;
    sessionId?: string;
}
export interface AddToCartDto {
    productId: string;
    quantity: number;
}
export interface UpdateCartItemDto {
    quantity: number;
}
//# sourceMappingURL=cart.d.ts.map