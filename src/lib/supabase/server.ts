import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseAdminClient: SupabaseClient | null = null

export function getSupabaseAdminClient(): SupabaseClient {
  if (supabaseAdminClient) {
    return supabaseAdminClient
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase admin environment variables not set')
    return createClient('https://placeholder.supabase.co', 'placeholder-key')
  }

  supabaseAdminClient = createClient(supabaseUrl, supabaseServiceKey)
  return supabaseAdminClient
}

// For use in API routes
export const supabaseAdmin = getSupabaseAdminClient()
