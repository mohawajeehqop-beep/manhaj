import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database tables structure
export interface Role {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  created_at: string;
}

export interface YearlyGoal {
  id: string;
  role_id: string;
  title: string;
  description?: string;
  created_at: string;
}

export interface Season {
  id: string;
  user_id: string;
  name: string;
  start_date: string;
  end_date: string;
  focus_type: string;
  created_at: string;
}

export interface MonthlyProject {
  id: string;
  user_id: string;
  title: string;
  progress: number;
  target_date: string;
  created_at: string;
}

export interface WeeklyTask {
  id: string;
  user_id: string;
  title: string;
  day: string;
  priority: number;
  completed: boolean;
  created_at: string;
}

export interface DailyTask {
  id: string;
  user_id: string;
  title: string;
  priority: number;
  big_task: boolean;
  completed: boolean;
  date: string;
  created_at: string;
}

export interface DeepWorkSession {
  id: string;
  user_id: string;
  duration: number;
  completed_at?: string;
  created_at: string;
}

export interface Reflection {
  id: string;
  user_id: string;
  type: 'daily' | 'weekly';
  accomplished: string;
  distractions: string;
  notes?: string;
  created_at: string;
}
