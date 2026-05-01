-- 1. Add missing columns if they don't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='blogs' AND column_name='slug') THEN
        ALTER TABLE public.blogs ADD COLUMN slug TEXT UNIQUE;
        -- Generate slugs for existing posts
        UPDATE public.blogs SET slug = lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) WHERE slug IS NULL;
        ALTER TABLE public.blogs ALTER COLUMN slug SET NOT NULL;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='blogs' AND column_name='category') THEN
        ALTER TABLE public.blogs ADD COLUMN category TEXT DEFAULT 'Assessment';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='blogs' AND column_name='status') THEN
        ALTER TABLE public.blogs ADD COLUMN status TEXT DEFAULT 'published';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='blogs' AND column_name='views') THEN
        ALTER TABLE public.blogs ADD COLUMN views INTEGER DEFAULT 0;
    END IF;
END $$;

-- 2. Create RPC function to securely increment views
CREATE OR REPLACE FUNCTION increment_blog_views(blog_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.blogs
  SET views = COALESCE(views, 0) + 1
  WHERE id = blog_id;
END;
$$;

-- Grant access to the function
GRANT EXECUTE ON FUNCTION increment_blog_views(UUID) TO anon, authenticated;

-- 3. Force Supabase to reload the schema cache
NOTIFY pgrst, 'reload schema';
