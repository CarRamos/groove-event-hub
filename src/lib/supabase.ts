import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate that the environment variables are proper URLs and keys
if (!supabaseUrl?.startsWith('https://') || !supabaseAnonKey) {
  throw new Error(
    'Invalid Supabase credentials. Please check your .env file and ensure you have set valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for our database tables
export type Venue = {
  id: string;
  name: string;
  address: string;
  city: string;
  description: string | null;
  capacity: number | null;
  created_at: string;
  // Adding missing properties
  image_url: string | null;
  video_url: string | null;
  latitude: number;
  longitude: number;
  amenities: string[];
  music_types: string[];
  rating: number;
  social_links: {
    platform: string;
    url: string;
  }[];
  events?: Event[];
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  venue_id: string;
  image_url: string | null;
  lineup: string[];
  features: string[];
  video_url: string | null;
  created_at: string;
};

export type GuestlistEntry = {
  id: string;
  event_id: string;
  name: string;
  email: string;
  phone: string;
  number_of_guests: number;
  created_at: string;
};