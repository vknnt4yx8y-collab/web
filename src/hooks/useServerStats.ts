import { useState, useEffect, useCallback } from 'react';
import type { ServerStats } from '../types';

// Mock data for development (used when database is not connected)
const MOCK_STATS: ServerStats = {
  id: 1,
  player_count: 247,
  max_players: 500,
  server_status: 'online',
  last_updated: new Date().toISOString(),
};

const REFRESH_INTERVAL = 60_000; // 60 seconds

export function useServerStats() {
  const [stats, setStats] = useState<ServerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      // In production, replace this with your Bolt Database query:
      // const { data } = await supabase.from('server_stats').select('*').single();
      // For now, use mock data with a simulated network delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Randomize player count slightly to simulate live updates
      const variation = Math.floor(Math.random() * 30) - 15;
      setStats({
        ...MOCK_STATS,
        player_count: Math.max(0, MOCK_STATS.player_count + variation),
        last_updated: new Date().toISOString(),
      });
      setError(null);
    } catch (err) {
      setError('Failed to fetch server stats');
      console.error('Error fetching server stats:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
}
