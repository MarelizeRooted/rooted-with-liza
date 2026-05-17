# ROOTED WITH LIZA - Redesigned Platform Specification

## 1. Concept & Vision

**Rooted With Liza** is a faith-grounded, emotionally intelligent resilience and study mentoring platform for overwhelmed teens and their parents in South Africa. Rooted in the belief that lasting change comes from internal foundation—not external pressure—we offer one flagship programme: **ROOTED Circle**.

This is not another motivational programme. ROOTED Circle is a monthly mentorship community where teens learn to build unshakeable inner foundations—emotional resilience, sustainable study systems, and the quiet confidence that comes from knowing who they are. We walk alongside parents too, helping them understand, support, and connect with their teens without adding pressure.

The platform feels like a breath of calm in a chaotic world: Japandi-inspired warmth, wabi-sabi acceptance of imperfection, and the quiet beauty of natural materials. It's a sanctuary—warm paper textures, muted earth tones, generous whitespace, and the sense that "you are welcome here, just as you are."

---

## 2. Design Language

### Aesthetic Direction
**Japandi Wabi-Sabi Minimalism** — The intersection of Japanese and Scandinavian simplicity, embracing imperfection and natural beauty. Think: morning light through linen curtains, a worn wooden desk, a cup of tea beside handwritten notes. Calm, unhurried, grounded.

### Color Palette
```
--color-olive:        #6B7B5C  /* Primary - muted olive (rooted, natural) */
--color-olive-light:  #8A9B7C  /* Primary light */
--color-olive-dark:   #4A5640  /* Primary dark */
--color-sage:         #9CAF88  /* Secondary - soft sage green */
--color-sand:         #E8E0D5  /* Warm sand */
--color-stone:        #C9C0B1  /* Stone */
--color-linen:        #F5F1EB  /* Linen white */
--color-cream:        #FAF8F5  /* Background - warm cream */
--color-beige:        #D4C4A8  /* Accent beige */
--color-charcoal:     #3D3D3D  /* Text - soft charcoal */
--color-warm-gray:    #7A7A6C  /* Secondary text */
--color-terracotta:   #C4785A  /* Accent - warm terracotta */
--color-blush:        #D4A5A5  /* Soft accent */
--color-gold:         #B8956E  /* Subtle gold accent - sparingly */
```

### Typography
- **Headings**: "Playfair Display" (serif) — elegant, grounded, trustworthy
- **Body**: "Inter" (sans-serif) — clean, readable, modern
- **Accent/Quotes**: "Cormorant Garamond" (serif) — for quotes, special moments, literary feel
- **Scale**: Generous sizing, never cramped. Headlines breathe.

### Spatial System
- Base unit: 4px
- Section padding: 96px vertical (desktop), 64px (mobile)
- Container max-width: 1120px (slightly narrower for intimacy)
- Card padding: 32px (generous)
- Component spacing: 24px
- Generous whitespace — let content breathe

### Motion Philosophy
- **Subtle and purposeful** — No bouncy animations. Everything moves like a slow breath.
- Fade-ins on scroll: opacity 0→1, 800ms ease-out (slower, more contemplative)
- Hover states: gentle lift with soft shadow (translateY -2px, 300ms ease)
- Page transitions: calm fade (400ms)
- Scroll animations: gentle rise (translateY 20px→0)

### Visual Assets
- Paper texture overlays (very subtle, 3-5% opacity)
- Soft, diffused drop shadows (0 4px 20px rgba(0,0,0,0.06))
- Rounded corners: 12px for cards (softer), 6px for buttons
- Abstract organic shapes as decorative elements
- Photography: warm, natural light, real moments—not staged
- No harsh lines or corporate stock imagery

---

## 3. Layout & Structure

### Simplified Site Architecture
```
/ (Home)
├── /rooted-circle (Flagship Programme - R1497/month)
├── /free-starter-kit (Lead Magnet)
├── /about (Founder Story & Heart)
├── /apply (Application/Interest Form)
├── /login
├── /signup
├── /dashboard (Member Portal)
│   ├── /dashboard/resources
│   ├── /dashboard/sessions
│   ├── /dashboard/account
│   └── /dashboard/membership
└── /admin (Platform Management)
```

**Removed Pages:**
- /membership (replaced by /rooted-circle)
- /shop (products absorbed into member benefits)
- /bootcamps (now part of ROOTED Circle)
- /workshops (now part of ROOTED Circle)
- /blog (resources now in member dashboard)

### Page Rhythm
- Hero sections: expansive, 70vh minimum, lots of breathing room
- Content sections: contained width, never overwhelming
- CTAs: gentle nudges, not aggressive sales tactics
- White space: abundant—never crowded or busy

### Responsive Strategy
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Stack layouts on mobile, gentle grid on desktop
- Touch-friendly tap targets (min 48px)
- Images scale gracefully, never distorted

---

## 4. ROOTED Circle — The Flagship Programme

### The Offer
**ROOTED Circle** is a monthly membership at **R1,497/month**—a mentorship community for teens who are ready to build unshakeable inner foundations.

### What ROOTED Circle Includes

#### For Teens:
- **Weekly Group Mentorship Sessions** — Alternating teen-focused and family-inclusive sessions, held in a small group setting (max 12 families)
- **The Resilience Framework** — A structured programme building emotional regulation, stress management, and inner quiet
- **Study Systems Training** — Practical, sustainable study methods that work with your brain, not against it
- **Monthly Theme Exploration** — Each month focuses on a core topic: identity, purpose, rest, boundaries, etc.
- **Private Community Access** — A safe space to connect with other teens on the same journey
- **Resource Library** — Curated tools, worksheets, and guides available 24/7

#### For Parents:
- **Monthly Parent Workshop** — Deep-dive sessions on understanding your teen, supporting without enabling, and creating home environments that nurture growth
- **Parent Community** — Connect with other parents walking the same path
- **Direct Access to Liza** — Monthly Q&A sessions for parent questions
- **Family Implementation Guides** — Practical ways to support your teen's growth at home

### The Transformation
Teens don't just get study tips—they learn to:
- Understand their own emotional landscape
- Build resilience before crisis hits
- Create sustainable routines that honour rest
- Develop quiet confidence independent of grades
- Connect their faith to their daily lives
- Parent differently too—with less fear, more trust

### Application Required
ROOTED Circle is selective. We accept families through an application process because:
- This work requires commitment from both teen and parent
- Small groups mean genuine connection—we vet for readiness
- We want to ensure every family gets genuine value

### Pricing Philosophy
R1,497/month is an investment in transformation, not a transaction. This includes:
- 4+ live sessions per month
- Full resource library
- Parent workshop + Q&A
- Community access
- Direct mentorship support

---

## 5. Free Starter Kit — The Lead Magnet

### Purpose
The **Free Starter Kit** is a low-commitment entry point for families exploring Rooted. It provides immediate value while introducing our philosophy.

### What's Included
- **The Overwhelmed Teen Reset Guide** — A 5-day gentle reset plan
- **The Sunday Reset Template** — A printable weekly planning tool
- **The Parent Pause** — A short guide for parents on regulated breathing and presence
- **The First Step Quiz** — A reflection tool to understand your teen's current state
- **Welcome Series** — 3 short emails introducing Rooted's heart and approach

### Capture Flow
1. Landing page headline resonates with parent's heart
2. Brief form: Name, Email, WhatsApp (optional)
3. Instant download access
4. Welcome email with next steps
5. Gentle follow-up sequence (not aggressive)

---

## 6. Component Inventory

### Navigation
- **Desktop**: Logo left, simple nav links center, "Apply" CTA right
- **Mobile**: Logo left, hamburger right, slide-out drawer
- **States**: default, scrolled (slightly more background), mobile-open
- **Style**: Clean, minimal, no unnecessary decorations

### Hero Section
- Large headline (warm invitation, not a sales pitch)
- Subheadline (clear value proposition in plain language)
- Primary CTA + optional secondary link
- Subtle organic shape or warm gradient background
- Generous vertical padding

### Programme Card (ROOTED Circle)
- Clean, minimal design
- Price prominently displayed
- Key benefits as gentle list
- "Apply Now" CTA
- Soft background, no harsh borders

### Testimonial Card
- Quote in accent font (Cormorant Garamond)
- Author name + brief descriptor
- Warm background
- No aggressive styling—let the words speak

### Lead Magnet Form
- Warm headline
- Brief description of what they receive
- Minimal fields (name, email, whatsapp optional)
- Single CTA button
- Privacy reassurance
- States: default, loading, success, error

### Footer
- Simple, clean layout
- Logo + brief mission statement
- Essential links only
- Social links subtle
- Copyright with warmth

---

## 7. Tone of Voice

### Core Attributes
- **Grounded** — We speak from experience, not theory
- **Warm** — Like a conversation with a trusted friend
- **Honest** — We don't sugarcoat, but we deliver truth gently
- **Faith-anchored** — Our work is spiritual, even when not explicitly religious
- **Non-judgmental** — No shame, no pressure, just presence
- **Hopeful** — We believe change is possible, even when it's hard

### Writing Principles
- Use "I" and "we" more than "you" (relational, not transactional)
- Speak to the parent's heart, not just the teen's struggles
- Acknowledge difficulty without dwelling on it
- Focus on what's possible, not what's broken
- Keep language simple—no educational jargon
- Embrace pauses—short sentences have power
- UK English throughout

### Phrases to Avoid
- "Transform your teen today"
- "Proven formula"
- "Ultimate guide"
- "Exclusive offer"
- "Don't miss out"
- "Limited time"
- "Success stories"
- "Results may vary" (too clinical)

### Phrases to Embrace
- "Walk alongside"
- "At your own pace"
- "Gentle reset"
- "Quiet confidence"
- "Unshakeable foundations"
- "At the heart of"
- "Rooted in"
- "You are not alone"

---

## 8. Technical Approach

### Stack (Unchanged)
- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Payments**: Paystack (R1497/month subscriptions)
- **Hosting**: Vercel

### Database Updates Needed
```
-- membership_tiers (update)
  - id, name, slug, price_monthly, description, features, sort_order, created_at
  - Change to single tier: ROOTED Circle - R1497/month

-- memberships (unchanged structure)
  - id, user_id, tier_id, status, stripe_subscription_id, current_period_end, created_at

-- intake_applications (new)
  - id, name, email, phone, teen_age, teen_grade, parent_concerns, how_they_heard, status, created_at
```

### Key Pages to Build/Update
1. Homepage (complete rewrite)
2. /rooted-circle (new page - R1497/month flagship)
3. /free-starter-kit (update existing lead-magnet)
4. /about (update with founder positioning)
5. /apply (new page - application form)
6. Navigation (simplify)
7. Footer (simplify)

### Navigation Links (Simplified)
```
- Home (/)
- ROOTED Circle (/rooted-circle)
- Free Starter Kit (/free-starter-kit)
- About (/about)
- Apply (/apply)
```

---

## 9. Launch Priorities

### Phase 1: Core Pages (This Implementation)
- [x] Homepage with new messaging
- [x] ROOTED Circle page
- [x] Free Starter Kit page
- [x] About page
- [x] Apply page
- [x] Simplified navigation
- [x] Updated footer
- [x] Login/Signup pages

### Phase 2: Member Experience
- [ ] Dashboard with resources
- [ ] Session scheduling/information
- [ ] Community space
- [ ] Parent portal

### Phase 3: Admin & Operations
- [ ] Application management
- [ ] Member management
- [ ] Payment processing via Paystack
- [ ] Email sequences

---

## 10. Success Metrics (For Future Reference)

- Application conversion rate from homepage
- Free kit download to application conversion
- Member retention beyond 3 months
- Parent engagement in workshops
- Teen satisfaction with sessions
- Referral rate from existing members
