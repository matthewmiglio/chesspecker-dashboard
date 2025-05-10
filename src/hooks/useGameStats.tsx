
import { useState, useEffect } from 'react';

interface UserActivityData {
  name: string;
  active: number;
  new: number;
}

interface GameTypeData {
  name: string;
  games: number;
}

export function useGameStats() {
  const [userActivity, setUserActivity] = useState<UserActivityData[]>([]);
  const [gameTypes, setGameTypes] = useState<GameTypeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      // Simulate API call with a timeout
      setTimeout(() => {
        // Mock data for user activity
        setUserActivity([
          { name: 'Mon', active: 340, new: 43 },
          { name: 'Tue', active: 380, new: 28 },
          { name: 'Wed', active: 410, new: 35 },
          { name: 'Thu', active: 390, new: 41 },
          { name: 'Fri', active: 480, new: 56 },
          { name: 'Sat', active: 520, new: 64 },
          { name: 'Sun', active: 470, new: 52 },
        ]);

        // Mock data for game types
        setGameTypes([
          { name: 'Blitz', games: 412 },
          { name: 'Rapid', games: 273 },
          { name: 'Classical', games: 156 },
          { name: 'Bullet', games: 389 },
          { name: 'Puzzle', games: 221 },
        ]);

        setLoading(false);
      }, 1200);
    };

    fetchStats();
  }, []);

  return { userActivity, gameTypes, loading };
}
