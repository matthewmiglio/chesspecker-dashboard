
import { useState, useEffect } from 'react';

interface UserStats {
  totalUsers: number;
  activePlayers: number;
  gamesPlayed: number;
  newSignups: number;
  userChange: number;
  activePlayersChange: number;
  gamesPlayedChange: number;
  newSignupsChange: number;
}

export function useUserStats() {
  const [stats, setStats] = useState<UserStats>({
    totalUsers: 0,
    activePlayers: 0,
    gamesPlayed: 0,
    newSignups: 0,
    userChange: 0,
    activePlayersChange: 0,
    gamesPlayedChange: 0,
    newSignupsChange: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      // Simulate API call with a timeout
      setTimeout(() => {
        // Mock data
        setStats({
          totalUsers: 2457,
          activePlayers: 872,
          gamesPlayed: 345,
          newSignups: 56,
          userChange: 12.5,
          activePlayersChange: 8.2,
          gamesPlayedChange: -3.1,
          newSignupsChange: 24.7,
        });
        setLoading(false);
      }, 1200);
    };

    fetchStats();
  }, []);

  return { stats, loading };
}
