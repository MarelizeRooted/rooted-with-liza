-- Rooted With Liza - Complete Database Schema
-- Migration: 00001_initial_schema.sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE: profiles (extends Supabase auth.users)
-- ============================================
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone TEXT,
    whatsapp_opt_in BOOLEAN DEFAULT FALSE,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: membership_tiers
-- ============================================
CREATE TABLE membership_tiers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    price_monthly INTEGER NOT NULL,
    description TEXT NOT NULL,
    features TEXT[] NOT NULL,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: memberships
-- ============================================
CREATE TABLE memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    tier_id UUID NOT NULL REFERENCES membership_tiers(id),
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'past_due', 'paused')),
    stripe_subscription_id TEXT UNIQUE,
    stripe_customer_id TEXT,
    current_period_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    current_period_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: products
-- ============================================
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    price INTEGER NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('planners', 'kits', 'journals', 'tracks', 'bundles')),
    images TEXT[] DEFAULT '{}',
    files TEXT[] DEFAULT '{}',
    member_discount_percent INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: orders
-- ============================================
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'refunded')),
    total INTEGER NOT NULL DEFAULT 0,
    stripe_payment_intent_id TEXT UNIQUE,
    customer_email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: order_items
-- ============================================
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id),
    quantity INTEGER DEFAULT 1,
    price_at_purchase INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: bootcamps
-- ============================================
CREATE TABLE bootcamps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    price INTEGER NOT NULL,
    duration TEXT NOT NULL,
    outcomes TEXT[] NOT NULL,
    schedule TEXT NOT NULL,
    max_participants INTEGER DEFAULT 50,
    current_enrollments INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: bootcamp_enrollments
-- ============================================
CREATE TABLE bootcamp_enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    bootcamp_id UUID NOT NULL REFERENCES bootcamps(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'enrolled' CHECK (status IN ('enrolled', 'completed', 'cancelled')),
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(user_id, bootcamp_id)
);

-- ============================================
-- TABLE: workshops
-- ============================================
CREATE TABLE workshops (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    price INTEGER NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    duration TEXT NOT NULL,
    is_recurring BOOLEAN DEFAULT FALSE,
    parent_topic TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: workshop_enrollments
-- ============================================
CREATE TABLE workshop_enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    workshop_id UUID NOT NULL REFERENCES workshops(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'enrolled' CHECK (status IN ('enrolled', 'attended', 'cancelled')),
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, workshop_id)
);

-- ============================================
-- TABLE: blog_posts
-- ============================================
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    featured_image TEXT,
    category TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: lead_magnet_signups
-- ============================================
CREATE TABLE lead_magnet_signups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL,
    whatsapp_opt_in BOOLEAN DEFAULT FALSE,
    downloaded_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_lead_signups_email ON lead_magnet_signups(email);
CREATE INDEX idx_lead_signups_created_at ON lead_magnet_signups(created_at);

-- ============================================
-- TABLE: email_subscribers
-- ============================================
CREATE TABLE email_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- TABLE: site_analytics
-- ============================================
CREATE TABLE site_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_type TEXT NOT NULL CHECK (event_type IN ('page_view', 'download', 'signup', 'purchase', 'click')),
    metadata JSONB DEFAULT '{}',
    session_id TEXT,
    user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: downloads (tracks user downloads)
-- ============================================
CREATE TABLE downloads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    file_url TEXT NOT NULL,
    downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_memberships_updated_at BEFORE UPDATE ON memberships FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bootcamps_updated_at BEFORE UPDATE ON bootcamps FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_workshops_updated_at BEFORE UPDATE ON workshops FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_memberships_user_id ON memberships(user_id);
CREATE INDEX idx_memberships_tier_id ON memberships(tier_id);
CREATE INDEX idx_memberships_status ON memberships(status);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_is_active ON products(is_active);
CREATE INDEX idx_bootcamps_slug ON bootcamps(slug);
CREATE INDEX idx_bootcamps_is_active ON bootcamps(is_active);
CREATE INDEX idx_workshops_date ON workshops(date);
CREATE INDEX idx_workshops_is_active ON workshops(is_active);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_analytics_event_type ON site_analytics(event_type);
CREATE INDEX idx_analytics_created_at ON site_analytics(created_at);

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE bootcamp_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_magnet_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

-- Profiles: users can read their own profile, admins can read all
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles" ON profiles FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Memberships: users can view their own membership
CREATE POLICY "Users can view own memberships" ON memberships FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage memberships" ON memberships FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Orders: users can view their own orders
CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage orders" ON orders FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Public read for tiers, products, bootcamps, workshops, blog posts
ALTER TABLE membership_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE bootcamps ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active membership tiers" ON membership_tiers FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view active products" ON products FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view active bootcamps" ON bootcamps FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view active workshops" ON workshops FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view published blog posts" ON blog_posts FOR SELECT USING (published = TRUE);

-- Admins can manage all content
CREATE POLICY "Admins can manage membership tiers" ON membership_tiers FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage products" ON products FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage bootcamps" ON bootcamps FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage workshops" ON workshops FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage blog posts" ON blog_posts FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- ============================================
-- SEED DATA: Membership Tiers
-- ============================================
INSERT INTO membership_tiers (name, slug, price_monthly, description, features, sort_order) VALUES
(
    'Rooted Core',
    'rooted-core',
    299,
    'Your foundation for structured study and resilience.',
    ARRAY[
        'Monthly study system pack',
        'Printable planners',
        'Basic exam kits',
        'Resilience worksheets',
        'Community access',
        'Monthly group teaching session',
        'Parent guidance PDFs'
    ],
    1
),
(
    'Rooted Plus',
    'rooted-plus',
    599,
    'Everything in Core, plus weekly sessions and full resource access.',
    ARRAY[
        'Everything in Core',
        'Weekly live group sessions (teen + parent focus)',
        'Full exam prep library',
        'Full digital resource vault',
        'Monthly parent workshop included',
        'Teen accountability sessions',
        'Burnout recovery systems',
        'Productivity + study frameworks',
        'Priority Q&A access'
    ],
    2
),
(
    'Rooted Family',
    'rooted-family',
    999,
    'Complete family support with personal coaching.',
    ARRAY[
        'Everything in Plus',
        'Small group coaching sessions',
        'Personalised study planning feedback',
        'Bootcamps included',
        'Priority support',
        'Family implementation strategy sessions',
        'Early access to new resources'
    ],
    3
);

-- ============================================
-- SEED DATA: Sample Products
-- ============================================
INSERT INTO products (name, slug, description, short_description, price, category, member_discount_percent, is_active, is_featured) VALUES
(
    'Exam Prep Kit - Senior Phase',
    'exam-prep-kit-senior',
    'A comprehensive exam preparation kit for Grades 7-9. Includes study schedule templates, revision techniques, stress management tools, and practice planning worksheets.',
    'Complete exam preparation toolkit for Grades 7-9',
    199,
    'kits',
    20,
    TRUE,
    TRUE
),
(
    'Study Planner Printable Pack',
    'study-planner-pack',
    'A collection of printable study planners including weekly schedules, subject trackers, and goal-setting worksheets. Downloadable PDF format.',
    'Weekly planners, subject trackers, and goal-setting sheets',
    99,
    'planners',
    10,
    TRUE,
    TRUE
),
(
    'Resilience Journal for Teens',
    'resilience-journal-teens',
    'A guided journal for building emotional resilience. Includes daily prompts, reflection exercises, and coping strategy templates.',
    'Daily prompts and exercises for building emotional strength',
    149,
    'journals',
    15,
    TRUE,
    FALSE
),
(
    'Focus & Productivity Tracker',
    'focus-tracker',
    'Track your study sessions, breaks, and productivity patterns. Includes daily, weekly, and monthly tracking sheets.',
    'Monitor your focus patterns and improve productivity',
    79,
    'tracks',
    10,
    TRUE,
    FALSE
),
(
    'Burnout Recovery Kit',
    'burnout-recovery-kit',
    'A gentle but practical toolkit for recovering from study burnout. Includes self-assessment tools, recovery plans, and gradual re-entry strategies.',
    'Practical tools for recovering from study burnout',
    249,
    'kits',
    25,
    TRUE,
    TRUE
),
(
    'Complete Study Systems Bundle',
    'study-systems-bundle',
    'Get all our study system resources at once. Includes the Study Planner Pack, Exam Prep Kit, Focus Tracker, and Resilience Journal at a special bundle price.',
    'All our study resources in one comprehensive bundle',
    499,
    'bundles',
    30,
    TRUE,
    TRUE
);

-- ============================================
-- SEED DATA: Sample Bootcamps
-- ============================================
INSERT INTO bootcamps (name, slug, description, short_description, price, duration, outcomes, schedule, max_participants) VALUES
(
    'Exam Reset Bootcamp',
    'exam-reset-bootcamp',
    'A 4-week intensive program designed to help teens reset their exam approach. Learn proven study techniques, build sustainable routines, and develop confidence for exam success.',
    '4-week program to transform your exam approach',
    1299,
    '4 weeks',
    ARRAY[
        'Understanding your personal learning style',
        'Building a sustainable study schedule',
        'Mastering active recall techniques',
        'Managing exam anxiety effectively',
        'Creating effective revision plans',
        'Building lasting study habits'
    ],
    'Live sessions every Tuesday at 4pm',
    30
),
(
    'Study Systems Bootcamp',
    'study-systems-bootcamp',
    'Learn how to build a complete study system that works for your brain. This 3-week bootcamp covers planning, execution, review, and adaptation.',
    'Build a study system that actually works',
    999,
    '3 weeks',
    ARRAY[
        'Designing your ideal study environment',
        'Creating subject-specific study approaches',
        'Building review cycles that stick',
        'Using spaced repetition effectively',
        'Tracking progress and adjusting'
    ],
    'Live sessions every Thursday at 4pm',
    40
),
(
    'Burnout Recovery Bootcamp',
    'burnout-recovery-bootcamp',
    'A compassionate 4-week program for teens who are experiencing study burnout. Gentle, practical recovery strategies with ongoing support.',
    '4-week compassionate recovery program',
    1199,
    '4 weeks',
    ARRAY[
        'Understanding burnout and its signs',
        'Creating a gentle recovery plan',
        'Gradual reintroduction to study',
        'Building sustainable routines',
        'Developing self-compassion practices',
        'Preventing future burnout'
    ],
    'Live sessions every Wednesday at 4pm',
    25
);

-- ============================================
-- SEED DATA: Sample Workshops
-- ============================================
INSERT INTO workshops (title, slug, description, short_description, price, date, duration, is_recurring, parent_topic) VALUES
(
    'Understanding Teen Study Stress',
    'teen-study-stress',
    'A monthly workshop for parents to understand the sources of study stress in teens and learn practical ways to support them without adding pressure.',
    'Monthly parent workshop on study stress',
    199,
    NOW() + INTERVAL '14 days',
    '90 minutes',
    TRUE,
    'Parent Support'
),
(
    'Building Teen Resilience',
    'building-teen-resilience',
    'Learn practical strategies for helping your teen develop emotional resilience that will serve them throughout their academic journey and beyond.',
    'Practical resilience-building strategies',
    199,
    NOW() + INTERVAL '28 days',
    '90 minutes',
    TRUE,
    'Parent Support'
),
(
    'Creating Home Study Routines',
    'home-study-routines',
    'A workshop on creating effective study routines at home that support your teen without becoming a source of conflict.',
    'Building sustainable home study routines',
    199,
    NOW() + INTERVAL '42 days',
    '90 minutes',
    TRUE,
    'Parent Support'
);

-- ============================================
-- SEED DATA: Sample Blog Posts
-- ============================================
INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, published, published_at) VALUES
(
    'Why "Just Try Harder" Doesn''t Work for Overwhelmed Teens',
    'why-try-harder-doesnt-work',
    'The push to work harder often makes things worse. Here''s what actually helps when teens are struggling with school.',
    '<p>You''ve probably said it before. Or maybe you''ve had it said to you. "You just need to try harder."</p><p>It makes sense on the surface. If a teen is struggling, the logical solution seems to be... try harder, focus more, put in more effort.</p><p>But for overwhelmed teens, this advice doesn''t just fail to help—it often makes things significantly worse.</p><h2>What''s Really Happening</h2><p>When a teen is overwhelmed, their nervous system is already in overdrive. They''re not holding back because they don''t care. They''re holding back because their system is flooded.</p><p>Pushing harder in this state activates the stress response further. It''s like pressing the gas pedal when the engine is already redlining.</p><h2>What Actually Helps</h2><p>Instead of "try harder," consider:</p><ul><li><strong>Understanding what''s actually overwhelming</strong>—is it the volume, the difficulty, the pressure, the lack of sleep, all of the above?</li><li><strong>Creating small, manageable steps</strong>—not a complete overhaul, just one tiny adjustment</li><li><strong>Addressing the physical foundation</strong>—sleep, food, movement, breaks</li><li><strong>Building skills, not just effort</strong>—learning HOW to study effectively</li></ul><p>The teens who succeed aren''t necessarily the ones who try hardest. They''re the ones who have systems that work with their brain, not against it.</p>',
    'Teen Burnout',
    ARRAY['burnout', 'study stress', 'parenting', 'overwhelm'],
    TRUE,
    NOW() - INTERVAL '3 days'
),
(
    'The 5-Day Study Reset: A Practical Guide',
    '5-day-study-reset',
    'A step-by-step guide to resetting your study habits when things have gotten off track. Takes about 30 minutes a day.',
    '<p>Sometimes study habits just... slip. A holiday, an illness, a rough week. Before you know it, you''re behind and everything feels overwhelming.</p><p>This 5-day reset is designed to help you get back on track without making dramatic changes or setting yourself up for failure.</p><h2>Day 1: Assessment</h2><p>Before you can fix anything, you need to understand where you are. Spend 20-30 minutes answering these questions honestly:</p><ul><li>What''s working in my study routine?</li><li>What''s not working?</li><li>When do I actually study best?</li><li>What''s my biggest obstacle right now?</li></ul><h2>Day 2: Simplify</h2><p>Don''t try to rebuild everything at once. Pick ONE thing to fix. Just one.</p><h2>Day 3: Set Up Systems</h2><p>Create the structures that will support your new approach. This might be a planner, a study space, or a simple schedule.</p><h2>Day 4: Test and Adjust</h2><p>Try your new system for one day. Notice what works and what doesn''t. Adjust.</p><h2>Day 5: Commit to the Process</h2><p>Systems take time to become habits. Commit to giving this approach at least 2 weeks before deciding if it works.</p>',
    'Study Systems',
    ARRAY['study skills', 'reset', 'practical guide', 'planning'],
    TRUE,
    NOW() - INTERVAL '7 days'
),
(
    'For Parents: How to Talk to Your Teen About School Stress',
    'talk-teen-school-stress',
    'Practical conversation starters and approaches for parents who want to support their teen without making things worse.',
    '<p>You want to help. You can see your teen is struggling. But every time you bring up school, they shut down.</p><p>This is incredibly common, and it''s not personal. Teens are navigating enormous pressure, and they often feel like they''re already failing—reminders about it don''t help.</p><h2>What Doesn''t Work</h2><ul><li>"You just need to organize yourself better"</li><li>"Other kids handle this fine"</li><li>"If you just paid more attention in class..."</li><li>"We didn''t have these problems when I was your age"</li></ul><h2>What Actually Helps</h2><p>Start with listening, not solving. "You seem stressed. I''m here if you want to talk, no judgment."</p><p>If they do open up, resist the urge to immediately offer solutions. Sometimes they just need to feel heard.</p><p>Ask open-ended questions: "What''s the hardest part about [subject] right now?" rather than "Why aren''t you studying?"</p><p>Focus on support, not surveillance. "How can I help?" rather than "I need to see your grades."</p>',
    'Parent Guidance',
    ARRAY['parenting', 'communication', 'support', 'stress'],
    TRUE,
    NOW() - INTERVAL '10 days'
);
