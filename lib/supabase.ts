import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PROJECT_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase env vars: NEXT_PROJECT_URL and NEXT_PUBLIC_KEY are required.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
