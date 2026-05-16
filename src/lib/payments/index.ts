/**
 * Payment Module Index
 * 
 * Export all payment providers and utilities
 */

export { 
  getPaymentProvider, 
  getPaymentConfig, 
  isPaymentsEnabled,
  type PaymentProvider,
  type PaymentConfig,
  type OneTimePaymentData,
  type SubscriptionPaymentData,
  type PaymentResult 
} from './provider'

export { PaystackProvider, getPaystackProvider } from './providers/paystack'
export { StripeProvider, getStripeProvider } from './providers/stripe'

// Factory function to get the active payment provider
export function getActivePaymentProvider() {
  const provider = process.env.PAYMENT_PROVIDER || 'paystack'
  
  if (provider === 'stripe') {
    const { getStripeProvider } = require('./providers/stripe')
    return getStripeProvider()
  }
  
  const { getPaystackProvider } = require('./providers/paystack')
  return getPaystackProvider()
}
