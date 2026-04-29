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
END $$;

-- 2. Force Supabase to reload the schema cache
NOTIFY pgrst, 'reload schema';
