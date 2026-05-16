// User & Auth Types
export interface User {
  id: string
  email: string
  created_at: string
}

export interface Profile {
  id: string
  user_id: string
  full_name: string
  phone?: string
  whatsapp_opt_in: boolean
  role: 'user' | 'admin'
  created_at: string
  updated_at: string
}

// Membership Types
export interface MembershipTier {
  id: string
  name: string
  slug: string
  price_monthly: number
  description: string
  features: string[]
  sort_order: number
  is_active: boolean
  created_at: string
}

export interface Membership {
  id: string
  user_id: string
  tier_id: string
  tier?: MembershipTier
  status: 'active' | 'cancelled' | 'past_due' | 'paused'
  stripe_subscription_id?: string
  current_period_start: string
  current_period_end: string
  created_at: string
  updated_at: string
}

// Product Types
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  short_description: string
  price: number
  category: 'planners' | 'kits' | 'journals' | 'tracks' | 'bundles'
  images: string[]
  files: string[]
  member_discount_percent: number
  is_active: boolean
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  user_id: string
  status: 'pending' | 'completed' | 'refunded'
  total: number
  stripe_payment_intent_id?: string
  created_at: string
  updated_at: string
  items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product?: Product
  price_at_purchase: number
}

// Bootcamp Types
export interface Bootcamp {
  id: string
  name: string
  slug: string
  description: string
  short_description: string
  price: number
  duration: string
  outcomes: string[]
  schedule: string
  max_participants: number
  current_enrollments: number
  is_active: boolean
  image_url?: string
  created_at: string
  updated_at: string
}

export interface BootcampEnrollment {
  id: string
  user_id: string
  bootcamp_id: string
  bootcamp?: Bootcamp
  status: 'enrolled' | 'completed' | 'cancelled'
  enrolled_at: string
  completed_at?: string
}

// Workshop Types
export interface Workshop {
  id: string
  title: string
  slug: string
  description: string
  short_description: string
  price: number
  date: string
  duration: string
  is_recurring: boolean
  parent_topic: string
  is_active: boolean
  image_url?: string
  created_at: string
  updated_at: string
}

export interface WorkshopEnrollment {
  id: string
  user_id: string
  workshop_id: string
  workshop?: Workshop
  status: 'enrolled' | 'attended' | 'cancelled'
  enrolled_at: string
}

// Blog Types
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image?: string
  category: string
  tags: string[]
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

// Lead Magnet Types
export interface LeadMagnetSignup {
  id: string
  email: string
  whatsapp_opt_in: boolean
  downloaded_at?: string
  created_at: string
}

export interface EmailSubscriber {
  id: string
  email: string
  status: 'active' | 'unsubscribed'
  subscribed_at: string
  unsubscribed_at?: string
}

// Analytics Types
export interface SiteAnalytics {
  id: string
  event_type: 'page_view' | 'download' | 'signup' | 'purchase' | 'click'
  metadata: Record<string, any>
  session_id: string
  created_at: string
}

// API Response Types
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}
