// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://iwkjhgiyototvrhnxlwc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3a2poZ2l5b3RvdHZyaG54bHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5MzE5NDIsImV4cCI6MjA0ODUwNzk0Mn0.Gu2C3UAT932Rz4Znc3so1M4ZDf5pi0Op1AKjbnNs2m0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);