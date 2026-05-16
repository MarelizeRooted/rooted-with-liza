# Pre-Launch Setup Checklist

## ✅ CODE STATUS
Your Rooted With Liza platform code is **READY** and committed to git. You just need to push it to GitHub and configure the external services.

---

## STEP 1: Push Code to GitHub

### 1.1 Create GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `rooted-with-liza`
4. Make it **Public** or **Private** as you prefer
5. **DO NOT** initialize with README (we already have code)
6. Click **Create repository**

### 1.2 Push to GitHub
Once created, run these commands in your terminal:

```bash
cd /home/bossie1/Downloads/rooted-with-liza

# Add the remote (use YOUR username)
git remote add origin https://github.com/MarelizeRooted/rooted-with-liza.git

# Push the code
git branch -M main
git push -u origin main
```

---

## STEP 2: Supabase Setup

### 2.1 Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create an account
2. Click **New Project**
3. Name it: "Rooted With Liza"
4. Select a region closest to South Africa
5. Save the generated database password somewhere safe
6. Wait for project creation (~2 minutes)

### 2.2 Get API Keys
1. In your Supabase project, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY`

### 2.3 Run Database Migration
1. Go to **SQL Editor** in Supabase
2. Click **New query**
3. Open file: `supabase/migrations/00001_initial_schema.sql`
4. Copy ALL contents into the SQL editor
5. Click **Run** (or press Ctrl+Enter)
6. You should see "Success" for all statements

### 2.4 Configure Authentication
1. Go to **Authentication** → **Providers**
2. Ensure **Email** is enabled (keep password enabled)
3. Go to **Authentication** → **URL Configuration**
4. Add these sites to **Redirect URLs**:
   - `http://localhost:3000` (for local testing)
   - `http://localhost:3000/login`
   - `http://localhost:3000/dashboard`
   - `https://rooted-with-liza.vercel.app` (after Vercel deploy)

### 2.5 Create Storage Buckets
1. Go to **Storage** in Supabase
2. Create bucket named: `products` → make it **Public**
3. Create bucket named: `protected` → keep it **Private**

---

## STEP 3: Paystack Setup (Active Payment Provider)

### 3.1 Create Paystack Account
1. Go to [paystack.com](https://paystack.com)
2. Click **Sign Up** → use your email
3. Complete verification (need to verify for live payments)

### 3.2 Get API Keys
1. Go to **Dashboard** → **Settings** → **API Keys**
2. Copy:
   - **Public Key** → `PAYSTACK_PUBLIC_KEY`
   - **Secret Key** → `PAYSTACK_SECRET_KEY`

### 3.3 Configure Webhook
1. Go to **Settings** → **Webhooks**
2. Click **Add Webhook**
3. URL: `https://yourdomain.com/api/payments/webhook`
   - For local testing: use ngrok (instructions below)
   - For production: your Vercel URL
4. Select events: `charge.success`, `charge.failed`

### 3.4 Test with Paystack Demo
- Use test mode first
- Test card: `5524 0800 0000 0016` (success)
- Test card: `5524 0800 0000 0017` (fail)

---

## STEP 4: Local Development Setup

### 4.1 Create .env.local
Create a file named `.env.local` in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Paystack (Active)
PAYMENT_PROVIDER=paystack
PAYSTACK_PUBLIC_KEY=pk_test_your-key
PAYSTACK_SECRET_KEY=sk_test_your-key

# Stripe (Future - optional for now)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4.2 Install & Run
```bash
cd /home/bossie1/Downloads/rooted-with-liza
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

---

## STEP 5: Vercel Deployment

### 5.1 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **Add New** → **Project**
4. Import your `rooted-with-liza` repository
5. Click **Deploy**

### 5.2 Add Environment Variables
Before deploying, add all variables from `.env.local`:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service key |
| `PAYMENT_PROVIDER` | `paystack` |
| `PAYSTACK_PUBLIC_KEY` | Your Paystack public key |
| `PAYSTACK_SECRET_KEY` | Your Paystack secret key |
| `NEXT_PUBLIC_APP_URL` | Your Vercel URL (e.g., `https://rooted-with-liza.vercel.app`) |

### 5.3 Update Paystack Webhook
After getting your Vercel URL:
1. Go to Paystack Dashboard → Settings → Webhooks
2. Add: `https://rooted-with-liza.vercel.app/api/payments/webhook`

### 5.4 Update Supabase Redirect URLs
1. Go to Supabase → Authentication → URL Configuration
2. Add your Vercel URL to redirect URLs

---

## STEP 6: Make Yourself Admin

### 6.1 Create Admin User
1. Go to your live site → Sign Up
2. Complete signup with your email

### 6.2 Grant Admin Role
1. Go to Supabase → **Table Editor** → **profiles**
2. Find your user row
3. Edit `role` column → change to `admin`
4. Save

Now you can access `/admin` dashboard.

---

## STEP 7: Final Testing Checklist

### Public Pages
- [ ] Home page loads correctly
- [ ] Navigation works on all pages
- [ ] Lead magnet form captures emails
- [ ] Signup creates user account
- [ ] Login authenticates user
- [ ] Membership page shows all 3 tiers
- [ ] Shop page displays products
- [ ] Bootcamp page shows bootcamps
- [ ] About page displays content
- [ ] Blog page loads
- [ ] Mobile responsive on all pages

### Admin Dashboard
- [ ] `/admin` dashboard loads
- [ ] User list displays
- [ ] Product management works
- [ ] Lead magnet signups viewable

### Payments
- [ ] Test Paystack payment flow works
- [ ] Payment success page displays
- [ ] Payment cancel page displays
- [ ] Orders are recorded in database

---

## Local Testing with Webhooks (Optional)

To test Paystack webhooks locally, use ngrok:

```bash
# Install ngrok (if needed)
npm install -g ngrok

# Run ngrok to get a public URL
ngrok http 3000

# Use the https URL from ngrok in Paystack webhook settings
```

---

## Quick Reference

| Service | Website | Key Docs |
|---------|---------|----------|
| Supabase | supabase.com | supabase.com/docs |
| Paystack | paystack.com | paystack.com/docs |
| Vercel | vercel.com | vercel.com/docs |
| GitHub | github.com | docs.github.com |

---

## Missing Items to Complete Before Launch

These items require your input:

1. **Paystack Account** - Need to create account and get API keys
2. **Supabase Account** - Need to create project and run migration
3. **Vercel Account** - Need to connect GitHub and deploy
4. **Product Content** - Add real products, images, descriptions
5. **Blog Content** - Create actual blog posts
6. **Legal Pages** - Create Privacy Policy and Terms of Service pages
7. **Domain Name** - Optionally point your own domain to Vercel

---

## Need Help?

If you're stuck on any step:
1. Note which step number
2. Describe what you see (error message or unexpected behavior)
3. I'll help you troubleshoot
