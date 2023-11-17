import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://zubnbzeluoigqrlekvwg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Ym5iemVsdW9pZ3FybGVrdndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5ODg5OTQsImV4cCI6MjAxNTU2NDk5NH0.OWcr5QAqdHObatJtiUm3G5yBawPg-NAl3zUnJCV-pnA')

export {supabase};