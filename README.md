# Rooted With Liza

A structured resilience and study support platform for overwhelmed teens and parents.

## Overview

**Rooted With Liza** is a production-ready web platform providing:
- Study systems and exam preparation tools
- Emotional resilience training
- Burnout recovery systems
- Parental guidance
- Productivity and routine building
- Academic confidence development

### Business Model

1. **Free Lead Funnel** - "Overwhelmed Teen Starter Kit" for email capture
2. **Digital Shop** - One-time product purchases
3. **Monthly Memberships** - Core (R299), Plus (R599), Family (R999)
4. **Bootcamps** - High-value standalone programs (R799-R1499)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Payments**: Stripe
- **Hosting**: Vercel (free tier compatible)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Stripe account

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Database Setup

1. Create a new Supabase project
2. Run the migration file at `supabase/migrations/00001_initial_schema.sql`
3. The migration includes seed data for membership tiers, products, bootcamps, workshops, and blog posts

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── membership/             # Membership tiers page
│   ├── shop/                   # Digital products shop
│   ├── bootcamps/              # Bootcamp programs
│   ├── workshops/               # Parent workshops
│   ├── about/                   # Founder story
│   ├── blog/                    # Resources & articles
│   ├── lead-magnet/             # Free starter kit download
│   ├── login/                   # User login
│   ├── signup/                  # User signup
│   ├── dashboard/               # Member dashboard
│   └── admin/                   # Admin panel
│       ├── page.tsx             # Dashboard overview
│       ├── users/               # User management
│       ├── products/            # Product management
│       └── leads/               # Lead capture list
├── components/
│   ├── ui/                     # Reusable UI components
│   └── layout/                 # Layout components
├── lib/
│   ├── utils.ts                # Utility functions
│   └── supabase/              # Supabase clients
└── supabase/
    └── migrations/             # Database migrations
```

## Features

### Public Pages
- [x] Home page with emotional but grounded messaging
- [x] Membership tiers with full comparison
- [x] Shop with product grid and filters
- [x] Bootcamp listings with enrollment
- [x] Parent workshop schedule
- [x] About page with founder story
- [x] Blog/resources with articles
- [x] Lead magnet download with email capture

### Member Dashboard
- [x] Resource access
- [x] Session calendar
- [x] Account settings
- [x] Membership management

### Admin Panel
- [x] Dashboard with stats overview
- [x] User management
- [x] Product management
- [x] Lead capture tracking
- [ ] Bootcamp management
- [ ] Workshop management
- [ ] Blog CMS
- [ ] Analytics dashboard

### Integration Points (To Complete)
- [ ] Supabase Auth integration
- [ ] Stripe subscription management
- [ ] Email automation setup
- [ ] WhatsApp integration for opt-ins

## Design System

### Colors
- **Olive**: `#6B7B5C` (primary)
- **Sand**: `#E8E0D5` (secondary)
- **Cream**: `#F7F4F0` (background)
- **Terracotta**: `#C4785A` (accent)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Cormorant Garamond (serif)

### Style
- Soft minimal Japandi-inspired aesthetic
- Paper textures
- Calm, structured layout
- Mobile-first responsive design

## TODO

- [ ] Complete Stripe integration for payments
- [ ] Set up email automation
- [ ] Implement WhatsApp opt-in integration
- [ ] Build remaining admin pages (bootcamps, workshops, blog, analytics)
- [ ] Add authentication guards
- [ ] Implement file upload for products
- [ ] Create actual downloadable PDF content
- [ ] Add search functionality
- [ ] Implement shopping cart
- [ ] Build checkout flow

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Supabase

1. Create project at [supabase.com](https://supabase.com)
2. Run migrations in SQL editor
3. Copy connection details to `.env`

### Stripe

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from dashboard
3. Set up products and pricing in Stripe dashboard
4. Configure webhook endpoint

## License

Private - All rights reserved.
