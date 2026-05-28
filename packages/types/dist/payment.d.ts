export type PaymentChannel = 'card' | 'bank_transfer' | 'ussd' | 'mobile_money' | 'qr';
export interface InitializePaymentDto {
    orderId: string;
}
export interface PaystackInitResponse {
    reference: string;
    accessCode: string;
    authorizationUrl: string;
}
export interface PaystackMetadata {
    orderId: string;
    orderNumber: string;
    userId: string;
    customerId?: string;
}
export interface PaystackChargeEvent {
    id: number;
    event: 'charge.success';
    data: {
        id: number;
        reference: string;
        amount: number;
        status: 'success';
        channel: PaymentChannel;
        paid_at: string;
        metadata: PaystackMetadata;
        customer: {
            email: string;
        };
    };
}
export interface Payment {
    id: string;
    orderId: string;
    paystackRef: string;
    amount: number;
    status: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
    channel?: PaymentChannel;
    paidAt?: string;
    createdAt: string;
}
//# sourceMappingURL=payment.d.ts.map