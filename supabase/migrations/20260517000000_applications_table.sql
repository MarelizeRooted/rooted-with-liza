-- Migration: Add applications table for ROOTED Circle applications
-- Date: 2026-05-17

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  teen_name TEXT NOT NULL,
  teen_age TEXT NOT NULL,
  teen_grade TEXT NOT NULL,
  what_struggling TEXT NOT NULL,
  heard_about TEXT,
  commitment BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'accepted', 'declined')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated users (for the apply form)
CREATE POLICY "Allow insert for authenticated users" ON applications
  FOR INSERT TO authenticated, anon
  WITH CHECK (true);

-- Allow admins to read all applications
CREATE POLICY "Allow admin to read all" ON applications
  FOR SELECT TO authenticated
  USING (auth.role() = 'authenticated');

-- Allow admin updates
CREATE POLICY "Allow admin to update" ON applications
  FOR UPDATE TO authenticated
  USING (auth.role() = 'authenticated');

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
