import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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