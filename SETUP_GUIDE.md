# Pre-Launch Setup Checklist

## Step 1: Supabase Setup

### 1.1 Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create an account
2. Click "New Project"
3. Name it "Rooted With Liza"
4. Select a region (closest to your users)
5. Save the generated password somewhere safe
6. Wait for the project to be created

### 1.2 Get API Keys
1. In your Supabase project, go to **Settings** → **API**
2. Copy the following:
   - **Project URL**: `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key**: `SUPABASE_SERVICE_ROLE_KEY` (under "Service role")

### 1.3 Run Database Migration
1. Go to **SQL Editor** in Supabase
2. Copy the contents of `supabase/migrations/00001_initial_schema.sql`
3. Paste and run the SQL
4. This creates all tables, indexes, RLS policies, and seed data

### 1.4 Create .env.local
Create a file named `.env.local` in the project root:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Step 2: Stripe Setup

### 2.1 Create Stripe Account
1. Go to [stripe.com](https://stripe.com) and create an account
2. Complete account verification

### 2.2 Get API Keys
1. Go to **Developers** → **API keys**
2. Copy:
   - **Publishable key**: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key**: `STRIPE_SECRET_KEY`

### 2.3 Create Products & Pricing
In Stripe Dashboard:

#### Rooted Core - R299/month
1. Go to **Products** → **Add Product**
2. Name: "Rooted Core Membership"
3. Price: R299/month (enter as ZAR, Stripe handles currency)
4. Billing period: Monthly
5. Copy the **Price ID**

#### Rooted Plus - R599/month
1. Same steps
2. Name: "Rooted Plus Membership"
3. Price: R599/month

#### Rooted Family - R999/month
1. Same steps
2. Name: "Rooted Family Membership"
3. Price: R999/month

### 2.4 Set Up Webhooks (for production)
1. Go to **Developers** → **Webhooks**
2. Add endpoint
3. URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
5. Copy the **Webhook Secret**: `STRIPE_WEBHOOK_SECRET`

---

## Step 3: Run the Application

### 3.1 Install Dependencies
```bash
cd /home/bossie1/Downloads/rooted-with-liza
npm install
```

### 3.2 Start Development Server
```bash
npm run dev
```

### 3.3 Test Locally
Open [http://localhost:3000](http://localhost:3000)

---

## Step 4: Create Supabase Auth (Auth UI)

### 4.1 Enable Auth Providers
1. In Supabase, go to **Authentication** → **Providers**
2. Enable **Email** provider (keep password enabled)
3. Configure email templates under **Authentication** → **Email Templates**

### 4.2 Update Redirect URLs
1. Go to **Authentication** → **URL Configuration**
2. Add: `http://localhost:3000/login` and `http://localhost:3000/dashboard`

---

## Step 5: Create Storage Buckets

### 5.1 Create Public Bucket
1. In Supabase, go to **Storage**
2. Create bucket named: `products`
3. Make it **Public**

### 5.2 Create Restricted Bucket
1. Create bucket named: `protected`
2. This will store member-only files

---

## Step 6: Vercel Deployment

### 6.1 Push to GitHub
1. Create a new GitHub repository
2. Initialize git and push:
```bash
cd /home/bossie1/Downloads/rooted-with-liza
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/rooted-with-liza.git
git push -u origin main
```

### 6.2 Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import the GitHub repository
3. Add environment variables from `.env.local`
4. Deploy

### 6.3 Update Supabase Redirect URLs
Add production URL to Supabase redirect URLs:
- `https://rooted-with-liza.vercel.app`

---

## Step 7: Final Testing Checklist

- [ ] Home page loads correctly
- [ ] Navigation works on all pages
- [ ] Lead magnet form submits and captures email
- [ ] Signup creates a user account
- [ ] Login authenticates user
- [ ] Admin dashboard is accessible (add admin role to user manually in Supabase)
- [ ] Products display with correct pricing
- [ ] Membership page shows all tiers
- [ ] Mobile responsive on all pages

---

## Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Need Help?

If you're stuck on any step, let me know which step and what error you're seeing.
