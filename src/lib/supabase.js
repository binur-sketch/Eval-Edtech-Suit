import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if we need to use a mock client (no URL or the known dead domain)
const isInvalidUrl = !supabaseUrl || supabaseUrl.includes('obasddxdmawlwskczwan');

// Initial mock data
const initialMockBlogs = [
  {
    id: 1,
    title: 'Welcome to eVAL Admin',
    excerpt: 'This is a mock blog post because the database is currently unreachable.',
    content: '<p>This is a mock blog post.</p>',
    category: 'Assessment',
    author: 'eVAL Team',
    date: new Date().toISOString().split('T')[0],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    status: 'published',
    views: 100
  }
];

const getMockBlogs = () => {
  const stored = localStorage.getItem('mock_blogs');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('mock_blogs', JSON.stringify(initialMockBlogs));
  return initialMockBlogs;
};

const saveMockBlogs = (blogs) => {
  localStorage.setItem('mock_blogs', JSON.stringify(blogs));
};

export const supabase = isInvalidUrl ? {
  auth: {
    signInWithPassword: async ({ email, password }) => {
      if (email && password) {
        localStorage.setItem('mock_user', JSON.stringify({ email }));
        return { data: { user: { email } }, error: null };
      }
      return { data: null, error: { message: 'Invalid credentials' } };
    },
    getUser: async () => {
      const user = localStorage.getItem('mock_user');
      if (user) return { data: { user: JSON.parse(user) }, error: null };
      return { data: { user: null }, error: null };
    },
    signOut: async () => {
      localStorage.removeItem('mock_user');
      return { error: null };
    }
  },
  from: (table) => {
    if (table === 'blogs') {
      return {
        select: () => ({
          order: async () => {
            const blogs = getMockBlogs();
            return { data: [...blogs].reverse(), error: null };
          }
        }),
        insert: async (payload) => {
          const blogs = getMockBlogs();
          const newBlog = { id: Date.now(), ...payload[0] };
          blogs.push(newBlog);
          saveMockBlogs(blogs);
          return { data: [newBlog], error: null };
        },
        update: (updateData) => ({
          eq: async (col, val) => {
            let blogs = getMockBlogs();
            blogs = blogs.map(b => b[col] === val ? { ...b, ...updateData } : b);
            saveMockBlogs(blogs);
            return { data: null, error: null };
          }
        }),
        delete: () => ({
          eq: async (col, val) => {
            let blogs = getMockBlogs();
            blogs = blogs.filter(b => b[col] !== val);
            saveMockBlogs(blogs);
            return { data: null, error: null };
          }
        })
      };
    }
    return {
      select: () => ({ order: async () => ({ data: [], error: null }) }),
      insert: async () => ({ data: null, error: null })
    };
  },
  storage: {
    from: () => ({
      upload: async (path, file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            localStorage.setItem(`mock_img_${path}`, reader.result);
            resolve({ data: { path }, error: null });
          };
          reader.onerror = () => {
            resolve({ data: null, error: new Error('Failed to read file') });
          };
          reader.readAsDataURL(file);
        });
      },
      getPublicUrl: (path) => {
        const dataUrl = localStorage.getItem(`mock_img_${path}`);
        if (dataUrl) {
          return { data: { publicUrl: dataUrl } };
        }
        return { data: { publicUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop' } };
      }
    })
  }
} : createClient(supabaseUrl, supabaseAnonKey);
