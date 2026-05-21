export type PaymentChannel =
  | 'card'
  | 'bank_transfer'
  | 'ussd'
  | 'mobile_money'
  | 'qr'

export interface InitializePaymentDto {
  orderId: string
}

export interface PaystackInitResponse {
  /** Unique reference for the transaction */
  reference: string
  /** One-time access code for the Paystack inline popup */
  accessCode: string
  /** Hosted URL fallback */
  authorizationUrl: string
}

/** Shape of metadata we store on the Paystack transaction */
export interface PaystackMetadata {
  orderId: string
  orderNumber: string
  userId: string
  customerId?: string
}

/** Paystack webhook charge.success payload (subset) */
export interface PaystackChargeEvent {
  id: number
  event: 'charge.success'
  data: {
    id: number
    reference: string
    amount: number       // in kobo
    status: 'success'
    channel: PaymentChannel
    paid_at: string
    metadata: PaystackMetadata
    customer: {
      email: string
    }
  }
}

export interface Payment {
  id: string
  orderId: string
  paystackRef: string
  amount: number
  status: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
  channel?: PaymentChannel
  paidAt?: string
  createdAt: string
}
