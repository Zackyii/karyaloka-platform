import { createClient } from "@supabase/supabase-js"

// Hardcode untuk testing
const supabaseUrl = "https://cgekyuqiweketrrvgrxy.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZWt5dXFpd2VrZXRycnZncnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MTA2MTAsImV4cCI6MjA2NjQ4NjYxMH0._dEdzZaJmDpA-HTzFyUIHTQCJgnywA0J7HWaBvC_uME"
const supabaseServiceKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZWt5dXFpd2VrZXRycnZncnh5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDkxMDYxMCwiZXhwIjoyMDY2NDg2NjEwfQ.FVpND-OieqNy2lqyZc08YVQMKeTWsQvq-bDrR5vwSvc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Type definitions tetap sama
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: "artist" | "collector" | "admin"
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: "artist" | "collector" | "admin"
          bio?: string | null
        }
        Update: {
          full_name?: string | null
          avatar_url?: string | null
          role?: "artist" | "collector" | "admin"
          bio?: string | null
        }
      }
      artworks: {
        Row: {
          id: string
          title: string
          description: string | null
          image_url: string
          price: number
          category: string
          tags: string[]
          artist_id: string
          status: "draft" | "published" | "sold"
          views: number
          likes: number
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description?: string | null
          image_url: string
          price: number
          category: string
          tags?: string[]
          artist_id: string
          status?: "draft" | "published" | "sold"
        }
        Update: {
          title?: string
          description?: string | null
          image_url?: string
          price?: number
          category?: string
          tags?: string[]
          status?: "draft" | "published" | "sold"
        }
      }
    }
  }
}
