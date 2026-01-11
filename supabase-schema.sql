-- Create the entries table
CREATE TABLE entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  note TEXT
);

-- Create index on date for faster queries
CREATE INDEX idx_entries_date ON entries(date);

-- Enable Row Level Security (RLS)
ALTER TABLE entries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since this is single-user)
-- For production, you'd want to restrict this to authenticated users
CREATE POLICY "Allow all operations" ON entries
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Optional: If you want to use Supabase Auth in the future
-- CREATE POLICY "Users can CRUD their own entries" ON entries
--   FOR ALL
--   USING (auth.uid() IS NOT NULL)
--   WITH CHECK (auth.uid() IS NOT NULL);
