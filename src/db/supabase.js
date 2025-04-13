import { createClient } from '@supabase/supabase-js';

// Hardcode URL/Key for testing (replace with yours)
const supabaseUrl = 'https://siikotiyfloxmwlvwhlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpaWtvdGl5ZmxveG13bHZ3aGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NDc4NjIsImV4cCI6MjA2MDAyMzg2Mn0.5KZhJobJ4-xgEwt3p03UWEQ2KKgnDGBr8eUmAGXv7Lg';

const supabase = createClient(supabaseUrl, supabaseKey);

// Test connection immediately
supabase.auth.getSession().then(({ data }) => {
  console.log("Direct Supabase test:", data);
}).catch(console.error);

export default supabase;
export { supabaseUrl };