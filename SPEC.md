# ROOTED WITH LIZA - Platform Specification

## 1. Concept & Vision

**Rooted With Liza** is a structured resilience and study support platform for overwhelmed teens and their parents. Unlike motivational blogs or life-coaching sites, it provides tangible, actionable digital systems—study frameworks, exam prep tools, resilience training, and parental guidance—delivered through a membership-based business model.

The platform feels like a calm, grounded sanctuary: warm paper textures, muted earth tones, and Japandi-inspired minimalism. It's honest about the struggle, practical in its solutions, and credible through the founder's background in education and teen counseling.

---

## 2. Design Language

### Aesthetic Direction
Soft minimal Japandi-inspired aesthetic with paper textures. Think: a well-organized study desk in a sunlit room, not a corporate wellness app.

### Color Palette
```
--color-olive:       #6B7B5C  /* Primary - muted olive green */
--color-olive-light: #8A9B7C  /* Primary light */
--color-olive-dark:  #4A5640  /* Primary dark */
--color-sand:        #E8E0D5  /* Secondary - warm sand */
--color-cream:       #F7F4F0  /* Background - cream */
--color-beige:       #D4C4A8  /* Accent beige */
--color-charcoal:    #3D3D3D  /* Text - soft charcoal */
--color-warm-gray:   #7A7A6C  /* Secondary text */
--color-terracotta:  #C4785A  /* Accent - warm terracotta */
--color-blush:       #D4A5A5  /* Soft accent */
```

### Typography
- **Headings**: "Playfair Display" (serif) - elegant, grounded
- **Body**: "Inter" (sans-serif) - clean, readable
- **Accent**: "Cormorant Garamond" (serif) - for quotes and special text

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px
- Card padding: 24px
- Component spacing: 16px

### Motion Philosophy
- Subtle fade-ins on scroll (opacity 0→1, 600ms ease-out)
- Hover states: gentle lift with shadow (translateY -2px, 200ms)
- Page transitions: soft fade (300ms)
- No bouncy animations—calm and measured

### Visual Assets
- Paper texture overlays (subtle, 5-10% opacity)
- Soft drop shadows (0 4px 12px rgba(0,0,0,0.08))
- Rounded corners: 8px for cards, 4px for buttons
- No stock photo clichés—use abstract shapes and textural elements

---

## 3. Layout & Structure

### Site Architecture
```
/ (Home)
├── /membership (Membership Tiers)
├── /shop (Digital Products)
├── /bootcamps (Programs)
├── /workshops (Parent Workshops)
├── /about (Founder Story)
├── /blog (Resources & Articles)
├── /lead-magnet (Free Starter Kit)
├── /checkout (Stripe Integration)
├── /login
├── /signup
├── /dashboard (Member Portal)
│   ├── /dashboard/resources
│   ├── /dashboard/plan
│   └── /dashboard/account
└── /admin (Platform Management)
    ├── /admin/dashboard
    ├── /admin/users
    ├── /admin/products
    ├── /admin/memberships
    ├── /admin/bootcamps
    ├── /admin/workshops
    ├── /admin/blog
    ├── /admin/leads
    └── /admin/analytics
```

### Page Rhythm
- Hero sections: expansive, 60vh minimum
- Content sections: alternating full-width and contained
- CTAs: contextual, not aggressive
- White space: generous, never cramped

### Responsive Strategy
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Stack layouts on mobile, grid on desktop
- Touch-friendly tap targets (min 44px)

---

## 4. Features & Interactions

### Lead Magnet System
**"Overwhelmed Teen Starter Kit"**
- 5-day reset plan
- Study schedule template
- Procrastination fix guide
- Exam stress toolkit
- Parent communication guide
- Resilience mini exercise

**Capture Flow:**
1. Landing page CTA → Lead magnet form
2. Email + WhatsApp opt-in
3. Instant download access + email sequence
4. Tag for email segmentation

### Membership Tiers

#### ROOTED CORE - R299/month
- Monthly study system pack
- Printable planners
- Basic exam kits
- Resilience worksheets
- Community access
- Monthly group teaching session
- Parent guidance PDFs

#### ROOTED PLUS - R599/month (Main Tier)
Everything in Core PLUS:
- Weekly live group sessions (alternating teen + parent focus)
- Full exam prep library
- Full digital resource vault
- Monthly parent workshop included
- Teen accountability sessions
- Burnout recovery systems
- Productivity + study frameworks
- Priority Q&A access

#### ROOTED FAMILY - R999/month
Everything in Plus PLUS:
- Small group coaching sessions (limited capacity)
- Personalized study planning feedback
- Bootcamps included
- Priority support
- Family implementation strategy sessions
- Early access to new resources

### Shop System
Products:
- Exam kits
- Printable planners
- Resilience journals
- Study systems
- Focus trackers
- Burnout recovery kits
- Revision packs

**Pricing Logic:**
- Non-members: full price
- Core members: 10% discount
- Plus members: 20% discount or included
- Family members: full access or heavily discounted

### Bootcamps
Standalone programs (R799-R1499):
- Exam Reset Bootcamp (4 weeks)
- Study Systems Bootcamp
- Burnout Recovery Bootcamp

**Access Rules:**
- Core: discount access
- Plus: 1 included per quarter
- Family: full access

### Parent Workshops
- Monthly topics rotating
- Included in Plus/Family
- Standalone purchase option
- Live session + recording access

---

## 5. Component Inventory

### Navigation
- Sticky header with logo, nav links, CTA button
- Mobile: hamburger menu with slide-out drawer
- States: default, scrolled (compact), mobile-open

### Hero Section
- Large headline (emotional but grounded)
- Subheadline (problem/solution clarity)
- Primary CTA + secondary link
- Subtle background texture

### Membership Card
- Tier name + price
- Feature list with checkmarks
- CTA button
- "Most Popular" badge for Plus
- States: default, hover (lift), selected

### Product Card
- Product image/preview
- Title + brief description
- Price (with member pricing if applicable)
- Quick-add to cart
- States: default, hover, in-cart

### Lead Magnet Form
- Headline + description
- Email input (required)
- WhatsApp opt-in checkbox
- Submit button
- Privacy note
- States: default, loading, success, error

### Testimonial Card
- Quote text
- Author name + role
- Optional avatar
- Soft background

### Blog Card
- Featured image
- Category tag
- Title + excerpt
- Read time
- Date
- States: default, hover

### Admin Dashboard Card
- Metric value (large)
- Label
- Trend indicator (optional)
- Soft background

### Data Table (Admin)
- Header row
- Sortable columns
- Row actions (edit, delete)
- Pagination
- Empty state

---

## 6. Technical Approach

### Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Payments**: Stripe
- **Hosting**: Vercel (free tier)

### Database Schema

```
-- users (Supabase Auth integration)
-- profiles (extends auth users)

-- membership_tiers
  - id, name, slug, price_monthly, description, features, sort_order, created_at

-- memberships
  - id, user_id, tier_id, status, stripe_subscription_id, current_period_end, created_at

-- products
  - id, name, slug, description, price, category, images, files, is_active, member_discount_percent, created_at

-- orders
  - id, user_id, status, total, stripe_payment_intent_id, created_at

-- order_items
  - id, order_id, product_id, price_at_purchase

-- bootcamps
  - id, name, slug, description, price, duration, outcomes, schedule, max_participants, is_active, created_at

-- bootcamp_enrollments
  - id, user_id, bootcamp_id, status, enrolled_at, completed_at

-- workshops
  - id, title, slug, description, price, date, duration, is_recurring, parent_topic, is_active, created_at

-- workshop_enrollments
  - id, user_id, workshop_id, status, enrolled_at

-- blog_posts
  - id, title, slug, excerpt, content, featured_image, category, tags, published, published_at, created_at

-- lead_magnets
  - id, email, whatsapp_opt_in, downloaded_at, created_at

-- email_subscribers
  - id, email, status, subscribed_at, unsubscribed_at

-- site_analytics
  - id, event_type, metadata (jsonb), session_id, created_at
```

### API Design

**Public Routes:**
- `GET /api/products` - List active products
- `GET /api/products/[slug]` - Single product
- `GET /api/bootcamps` - List bootcamps
- `GET /api/workshops` - List upcoming workshops
- `GET /api/blog` - List published posts
- `GET /api/blog/[slug]` - Single post
- `POST /api/leads` - Capture lead magnet signup
- `POST /api/checkout` - Create Stripe checkout session

**Auth Routes (Protected):**
- `GET /api/user/membership` - Current user's membership
- `GET /api/user/downloads` - User's purchased files
- `POST /api/user/update-profile`

**Admin Routes (Role-protected):**
- `GET /api/admin/users` - List all users
- `GET /api/admin/users/[id]` - Single user detail
- `PUT /api/admin/users/[id]` - Update user
- `DELETE /api/admin/users/[id]` - Delete user
- `GET/POST/PUT/DELETE /api/admin/products`
- `GET/POST/PUT/DELETE /api/admin/bootcamps`
- `GET/POST/PUT/DELETE /api/admin/workshops`
- `GET/POST/PUT/DELETE /api/admin/blog`
- `GET /api/admin/leads` - Email capture list
- `GET /api/admin/analytics` - Site analytics

### Authentication Strategy
- Supabase Auth with email/password
- JWT tokens stored in httpOnly cookies
- Role-based access: 'user', 'admin'
- Protected routes via middleware

### Storage Strategy
- Supabase Storage for:
  - Product files (PDFs, templates)
  - Blog featured images
  - Admin uploads
- Public buckets for downloadable content
- Signed URLs for protected files

---

## 7. Scalability Principles

1. **Database-driven content**: All products, bootcamps, workshops loaded from DB—not hardcoded
2. **CMS-style admin**: Non-technical users can add/edit all content
3. **Modular membership content**: Tier access controlled via role + tier checks
4. **Stripe webhooks**: Handle subscriptions, payments, failures automatically
5. **Caching**: Static generation for public pages, revalidation for dynamic

---

## 8. Admin Dashboard Scope

### Dashboard Home
- Total users
- Active memberships
- Monthly revenue
- Recent signups chart
- Quick actions

### User Management
- User list with search/filter
- User detail: profile, membership, orders, activity
- Manual membership adjustment
- Send password reset

### Product Management
- Product list with categories
- Create/edit product form
- Upload files/images
- Set member pricing
- Toggle active/inactive

### Bootcamp Management
- Bootcamp list
- Create/edit bootcamp
- Enrollment management
- Set capacity

### Workshop Management
- Workshop list
- Create/edit workshop
- Schedule management
- Enrollment tracking

### Blog CMS
- Post list
- Rich text editor
- Image upload
- Category/tag management
- Publish/unpublish

### Lead Management
- Email capture list
- Export to CSV
- Segment by download date, opt-in status
- Integration with email service

### Analytics
- Page views
- Conversion tracking
- Revenue reports
- Membership trends
- Popular products
