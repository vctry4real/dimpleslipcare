export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PACKED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
export interface OrderItem {
    id: string;
    productId: string;
    productName: string;
    productSlug: string;
    quantity: number;
    unitPrice: number;
    total: number;
}
export interface Order {
    id: string;
    orderNumber: string;
    userId: string;
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    subtotal: number;
    shippingFee: number;
    total: number;
    items: OrderItem[];
    address: OrderAddress;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}
export interface OrderAddress {
    recipientName: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    phone: string;
}
export interface CreateOrderDto {
    addressId: string;
    shippingMethod: 'standard' | 'express' | 'pickup';
    notes?: string;
    redeemPoints?: number;
}
export interface Address {
    id: string;
    userId: string;
    label: string;
    recipientName: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    phone: string;
    isDefault: boolean;
}
export interface CreateAddressDto {
    label: string;
    recipientName: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    phone: string;
    isDefault?: boolean;
}
export declare const SHIPPING_FEES: Record<CreateOrderDto['shippingMethod'], number>;
//# sourceMappingURL=order.d.ts.map