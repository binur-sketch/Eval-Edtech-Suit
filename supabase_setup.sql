-- RUN THIS ENTIRE SCRIPT IN YOUR SUPABASE SQL EDITOR --

-- 1. Create the blogs table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image TEXT,
    author TEXT NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable RLS on the blogs table
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- 3. Create policies for the blogs table
-- Allow anyone to read blogs (Public access)
CREATE POLICY "Enable read access for all users" 
ON public.blogs FOR SELECT 
USING (true);

-- Allow authenticated admins to insert/update/delete blogs
CREATE POLICY "Enable insert for authenticated users only" 
ON public.blogs FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users only" 
ON public.blogs FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users only" 
ON public.blogs FOR DELETE 
TO authenticated 
USING (true);

-- 4. Create the storage bucket for blog images if it doesn't exist
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- 5. Enable RLS on the storage.objects table
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 6. Create policies for the storage bucket
-- Allow anyone to view blog images
CREATE POLICY "Public Access to Blog Images"
ON storage.objects FOR SELECT
USING ( bucket_id = 'blog-images' );

-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'blog-images' );

-- Allow authenticated users to update their images
CREATE POLICY "Allow authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'blog-images' );

-- Allow authenticated users to delete images
CREATE POLICY "Allow authenticated deletes"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'blog-images' );

-- 7. (Optional but recommended) Run this to create the first admin user
-- NOTE: Replace 'admin@virsoftech.com' and 'SecurePassword123!' with your desired credentials.
-- It is recommended to create users directly via the Supabase Authentication Dashboard instead.
