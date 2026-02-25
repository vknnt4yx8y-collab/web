export interface ServerStats {
  id: number;
  player_count: number;
  max_players: number;
  server_status: 'online' | 'offline';
  last_updated: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  patch_version: string;
  featured_image?: string;
  created_at: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface DeepDiveContent {
  title: string;
  description: string;
  bulletPoints: string[];
  ctaText: string;
  ctaLink: string;
  imagePlaceholder: string;
  imageAlt: string;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}
