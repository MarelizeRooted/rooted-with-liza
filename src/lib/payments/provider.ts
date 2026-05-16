/**
 * Payment Provider Abstraction Layer
 * 
 * This module provides a unified interface for payment operations.
 * Currently uses Paystack for one-time payments.
 * Stripe can be re-enabled for subscriptions later.
 * 
 * To switch providers:
 * 1. Set PAYMENT_PROVIDER=paystack|stripe in .env.local
 * 2. Implement the provider-specific methods
 */

export type PaymentProvider = 'paystack' | 'stripe'

export interface PaymentConfig {
  provider: PaymentProvider
  publicKey: string
  secretKey: string
  webhookSecret?: string
}

export interface OneTimePaymentData {
  amount: number // In ZAR cents (minimum 100 = R1)
  email: string
  name?: string
  phone?: string
  metadata?: Record<string, any>
  reference?: string
  description?: string
}

export interface SubscriptionPaymentData {
  amount: number
  email: string
  name?: string
  phone?: string
  metadata?: Record<string, any>
  planCode?: string
  description?: string
}

export interface PaymentResult {
  success: boolean
  reference?: string
  transactionId?: string
  authorizationUrl?: string
  message?: string
  error?: string
}

// Get current payment provider from environment
export function getPaymentProvider(): PaymentProvider {
  return (process.env.PAYMENT_PROVIDER as PaymentProvider) || 'paystack'
}

// Check if payments are enabled
export function isPaymentsEnabled(): boolean {
  return process.env.PAYMENTS_ENABLED === 'true'
}

// Get payment config for current provider
export function getPaymentConfig(): PaymentConfig {
  const provider = getPaymentProvider()
  
  if (provider === 'stripe') {
    return {
      provider: 'stripe',
      publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
      secretKey: process.env.STRIPE_SECRET_KEY || '',
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    }
  }
  
  // Default to Paystack
  return {
    provider: 'paystack',
    publicKey: process.env.PAYSTACK_PUBLIC_KEY || '',
    secretKey: process.env.PAYSTACK_SECRET_KEY || '',
    webhookSecret: process.env.PAYSTACK_WEBHOOK_SECRET,
  }
}
