import { useState, useEffect } from 'react';
import type { NewsItem } from '../types';

// Mock news data for development
const MOCK_NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'Update v1.3.0 - The Nether Expansion',
    date: '2026-02-20',
    content: 'We have completely revamped the Nether zones with new biomes, dangerous mobs, and exclusive loot tables. Explore the Crimson Forest, Soul Sand Valley, and the mysterious Bastion Remnants.',
    excerpt: 'We have completely revamped the Nether zones with new biomes, dangerous mobs, and exclusive loot tables.',
    patch_version: 'v1.3.0',
    created_at: '2026-02-20T10:00:00Z',
  },
  {
    id: 2,
    title: 'Grand Exchange Now Live!',
    date: '2026-02-10',
    content: 'The Grand Exchange is now fully operational! Trade items with players from across the server. Set buy and sell offers, browse current prices, and participate in the growing economy.',
    excerpt: 'The Grand Exchange is now fully operational! Trade items with players from across the server.',
    patch_version: 'v1.2.5',
    created_at: '2026-02-10T14:30:00Z',
  },
  {
    id: 3,
    title: 'Season 2 PvP Tournament Results',
    date: '2026-01-28',
    content: 'Congratulations to all participants in our Season 2 PvP Tournament! The top players have been awarded exclusive titles, cosmetics, and in-game currency.',
    excerpt: 'Congratulations to all participants in our Season 2 PvP Tournament!',
    patch_version: 'v1.2.0',
    created_at: '2026-01-28T18:00:00Z',
  },
];

export function useNews(limit: number = 3) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // In production, replace this with your Bolt Database query:
        // const { data } = await supabase.from('news').select('*').order('created_at', { ascending: false }).limit(limit);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setNews(MOCK_NEWS.slice(0, limit));
        setError(null);
      } catch (err) {
        setError('Failed to fetch news');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [limit]);

  return { news, loading, error };
}
