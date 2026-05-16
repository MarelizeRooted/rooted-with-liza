'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

interface PaymentButtonProps {
  amount: number // in ZAR
  email: string
  productId: string
  productType: 'product' | 'bootcamp' | 'workshop'
  description: string
  disabled?: boolean
  className?: string
}

export function PaymentButton({
  amount,
  email,
  productId,
  productType,
  description,
  disabled,
  className,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePayment = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/payments/paystack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          email,
          description,
          productId,
          productType,
        }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setLoading(false)
        return
      }

      // Redirect to Paystack payment page
      if (data.authorizationUrl) {
        window.location.href = data.authorizationUrl
      }
    } catch (err) {
      setError('Payment initialization failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <Button
        onClick={handlePayment}
        disabled={disabled || loading}
        loading={loading}
        className="w-full"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Pay R{amount}
      </Button>
      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
      <p className="text-xs text-warm-gray mt-2 text-center">
        Secure payment via Paystack • Powered by Stripe
      </p>
    </div>
  )
}

// For guest checkout without email
export function GuestPaymentButton({
  amount,
  productId,
  productType,
  description,
  disabled,
  className,
}: Omit<PaymentButtonProps, 'email'> & { emailPrompt?: boolean }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePayment = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/payments/paystack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100,
          email,
          description,
          productId,
          productType,
        }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setLoading(false)
        return
      }

      if (data.authorizationUrl) {
        window.location.href = data.authorizationUrl
      }
    } catch (err) {
      setError('Payment initialization failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border border-sand rounded-card mb-3 focus:outline-none focus:ring-2 focus:ring-olive"
      />
      <Button
        onClick={handlePayment}
        disabled={disabled || loading}
        loading={loading}
        className="w-full"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Pay R{amount}
      </Button>
      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
      <p className="text-xs text-warm-gray mt-2 text-center">
        Secure payment via Paystack
      </p>
    </div>
  )
}
