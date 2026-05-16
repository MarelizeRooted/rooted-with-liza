/**
 * Paystack Payment Provider
 * 
 * South Africa's most popular payment gateway.
 * Supports ZAR, one-time payments, and subscriptions.
 */

import { OneTimePaymentData, PaymentResult } from '../provider'

const PAYSTACK_BASE_URL = 'https://api.paystack.co'

export class PaystackProvider {
  private secretKey: string
  private publicKey: string

  constructor(secretKey: string, publicKey: string) {
    this.secretKey = secretKey
    this.publicKey = publicKey
  }

  /**
   * Initialize a one-time payment/transaction
   */
  async initializePayment(data: OneTimePaymentData): Promise<PaymentResult> {
    try {
      const reference = data.reference || `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      const payload = {
        amount: Math.max(data.amount, 100), // Minimum 100 kobo (R1)
        email: data.email,
        name: data.name,
        phone: data.phone,
        metadata: {
          ...data.metadata,
          platform: 'rooted-with-liza',
        },
        reference,
        description: data.description || 'Rooted With Liza Purchase',
        currency: 'ZAR',
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      }

      const response = await fetch(`${PAYSTACK_BASE_URL}/transaction/initialize`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.secretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.status && result.data) {
        return {
          success: true,
          reference: result.data.reference,
          transactionId: result.data.id.toString(),
          authorizationUrl: result.data.authorization_url,
          message: 'Payment initialized successfully',
        }
      }

      return {
        success: false,
        error: result.message || 'Failed to initialize payment',
      }
    } catch (error: any) {
      console.error('Paystack initialization error:', error)
      return {
        success: false,
        error: error.message || 'Payment initialization failed',
      }
    }
  }

  /**
   * Verify a transaction by reference
   */
  async verifyPayment(reference: string): Promise<PaymentResult & { 
    amount?: number
    status?: string
    customerEmail?: string
  }> {
    try {
      const response = await fetch(
        `${PAYSTACK_BASE_URL}/transaction/verify/${reference}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.secretKey}`,
          },
        }
      )

      const result = await response.json()

      if (result.status && result.data) {
        return {
          success: result.data.status === 'success',
          reference: result.data.reference,
          transactionId: result.data.id.toString(),
          amount: result.data.amount,
          status: result.data.status,
          customerEmail: result.data.customer?.email,
          message: 'Payment verified',
        }
      }

      return {
        success: false,
        error: result.message || 'Payment verification failed',
      }
    } catch (error: any) {
      console.error('Paystack verification error:', error)
      return {
        success: false,
        error: error.message || 'Payment verification failed',
      }
    }
  }

  /**
   * List all transactions (for admin)
   */
  async listTransactions(perPage: number = 50): Promise<any> {
    try {
      const response = await fetch(
        `${PAYSTACK_BASE_URL}/transaction?per_page=${perPage}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.secretKey}`,
          },
        }
      )

      return await response.json()
    } catch (error) {
      console.error('Paystack list error:', error)
      return { status: false, error: 'Failed to fetch transactions' }
    }
  }

  /**
   * Refund a transaction
   */
  async refundTransaction(transactionId: string, amount?: number): Promise<PaymentResult> {
    try {
      const payload: any = { transaction: transactionId }
      if (amount) payload.amount = amount

      const response = await fetch(`${PAYSTACK_BASE_URL}/refund`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.secretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.status) {
        return {
          success: true,
          message: 'Refund processed successfully',
        }
      }

      return {
        success: false,
        error: result.message || 'Refund failed',
      }
    } catch (error: any) {
      console.error('Paystack refund error:', error)
      return {
        success: false,
        error: error.message || 'Refund failed',
      }
    }
  }

  /**
   * Get transaction details
   */
  async getTransaction(transactionId: string): Promise<any> {
    try {
      const response = await fetch(
        `${PAYSTACK_BASE_URL}/transaction/${transactionId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.secretKey}`,
          },
        }
      )

      return await response.json()
    } catch (error) {
      console.error('Paystack get transaction error:', error)
      return { status: false, error: 'Failed to fetch transaction' }
    }
  }
}

// Helper function to get Paystack provider instance
export function getPaystackProvider(): PaystackProvider {
  return new PaystackProvider(
    process.env.PAYSTACK_SECRET_KEY || '',
    process.env.PAYSTACK_PUBLIC_KEY || ''
  )
}
