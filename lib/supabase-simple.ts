import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://cgekyuqiweketrrvgrxy.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZWt5dXFpd2VrZXRycnZncnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MTA2MTAsImV4cCI6MjA2NjQ4NjYxMH0._dEdzZaJmDpA-HTzFyUIHTQCJgnywA0J7HWaBvC_uME"

export const supabase = createClient(supabaseUrl, supabaseKey)
