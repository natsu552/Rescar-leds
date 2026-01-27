// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// URL do seu projeto Supabase
const SUPABASE_URL = 'https://uvywywtmtcjtslwlltha.supabase.co'

// Sua anon key (pública, usada no frontend)
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2eXd5d3RtdGNqdHNsd2xsdGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjQ1MzAsImV4cCI6MjA4NDk0MDUzMH0.ROlS5uyf7xqkdzhRwRMlfdksIXqWYjctOZbE_xmUM-M'

// Cria o cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

