# Payment Integration - Paystack (Active)

## Overview

**Rooted With Liza** uses a modular payment abstraction layer that supports multiple payment providers. Currently, **Paystack** is the active provider for one-time payments, with **Stripe** preserved for future subscription billing.

## Why Paystack?

| Factor | Paystack | Stripe | Payfast |
|--------|----------|--------|---------|
| South African Rand (ZAR) | ✅ Native | ✅ | ✅ |
| One-time payments | ✅ | ✅ | ✅ |
| Subscriptions | ✅ | ✅ | ✅ |
| Mobile-optimized checkout | ✅ Excellent | ✅ Good | ⚠️ Basic |
| Parent-friendly (ease of use) | ✅ Very easy | ✅ Easy | ⚠️ Older UX |
| Free tier | ✅ Yes | ✅ Yes | ❌ Transaction fees |
| Future-proofing | ✅ Acquired by Stripe | ✅ Industry standard | ⚠️ Legacy |

**Paystack was chosen because:**
1. Native ZAR support without currency conversion
2. Mobile-first checkout (important for parents on phones)
3. Low friction UX reduces cart abandonment
4. Free sandbox environment for testing
5. Stripe acquisition means easy migration to Stripe later

## Architecture

```
src/lib/payments/
├── provider.ts          # Payment abstraction layer (types, config)
├── index.ts            # Main exports
└── providers/
    ├── paystack.ts     # Paystack implementation (active)
    └── stripe.ts       # Stripe implementation (stub for future)

src/app/api/payments/
├── paystack/
│   └── route.ts       # Paystack payment initialization
└── webhook/
    └── route.ts        # Paystack webhook handler
```

## Environment Variables

```env
# Payment Provider Selection
PAYMENT_PROVIDER=paystack    # or 'stripe' for future
PAYMENTS_ENABLED=true

# Paystack (Active)
PAYSTACK_PUBLIC_KEY=pk_live_...
PAYSTACK_SECRET_KEY=sk_live_...
PAYSTACK_WEBHOOK_SECRET=whsec_...

# Stripe (For Future Subscriptions)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Switching Providers

To enable Stripe for subscriptions later:

1. Set `PAYMENT_PROVIDER=stripe` in `.env.local`
2. Create Stripe products and pricing
3. Implement subscription methods in `providers/stripe.ts`
4. Deploy

No code changes required - the abstraction handles the rest.

## Paystack Setup

### 1. Create Paystack Account
- Visit https://paystack.com
- Verify your account (required for live transactions)

### 2. Get API Keys
- Dashboard → Settings → API Keys
- Use Test keys for development
- Use Live keys for production

### 3. Configure Webhook
- Dashboard → Settings → Webhooks
- Add: `https://yourdomain.com/api/payments/webhook`

### 4. Test Integration
- Use Paystack's test cards:
  - Success: 5524 0800 0000 0016
  - Fail: 5524 0800 0000 0017

## Payment Flow

1. User clicks "Buy Now" on product
2. Modal/expand shows email input + Pay button
3. Click triggers `/api/payments/paystack` POST
4. Backend initializes transaction with Paystack
5. User redirected to Paystack checkout
6. On success → `/payment/success` page
7. On cancel → `/payment/cancel` page
8. Webhook notifies `/api/payments/webhook` of result

## Database Integration

Successful payments are stored in the `orders` table:

```sql
INSERT INTO orders (
  user_id,           -- NULL for guest, set if logged in
  status,            -- 'pending' | 'completed' | 'refunded'
  total,             -- Amount in ZAR cents
  stripe_payment_intent_id,  -- Reference from Paystack
  customer_email     -- For guest checkout
);
```

## Security

- All payment processing happens server-side
- Webhook signature verification (production)
- No sensitive data stored in frontend
- Environment variables for all secrets

## Components

### PaymentButton
For logged-in users with saved email:
```tsx
<PaymentButton
  amount={199}
  email="user@example.com"
  productId="exam-prep-kit"
  productType="product"
  description="Exam Prep Kit"
/>
```

### GuestPaymentButton
For guest checkout:
```tsx
<GuestPaymentButton
  amount={199}
  productId="exam-prep-kit"
  productType="product"
  description="Exam Prep Kit"
/>
```

Both redirect to Paystack's hosted checkout page.

## Future: Stripe Subscriptions

When ready to add monthly membership subscriptions:

1. Keep Paystack for one-time purchases
2. Add Stripe for recurring billing
3. Use Stripe's subscription webhooks to manage membership status
4. Link memberships table to Stripe customer IDs

The architecture is designed to support this hybrid approach.
