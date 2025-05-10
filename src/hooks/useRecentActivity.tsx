
import { useState, useEffect } from 'react';

interface Activity {
  user: string;
  action: string;
  game: string;
  time: string;
  status: 'Completed' | 'In Progress' | 'Pending';
}

export function useRecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      // Simulate API call with a timeout
      setTimeout(() => {
        // Mock data
        setActivities([
          {
            user: 'GrandMaster42',
            action: 'Completed game',
            game: 'Rapid',
            time: '2 mins ago',
            status: 'Completed'
          },
          {
            user: 'ChessQueen',
            action: 'Started game',
            game: 'Blitz',
            time: '5 mins ago',
            status: 'In Progress'
          },
          {
            user: 'KnightRider',
            action: 'Won tournament',
            game: 'Classical',
            time: '10 mins ago',
            status: 'Completed'
          },
          {
            user: 'RookMaster',
            action: 'Joined tournament',
            game: 'Bullet',
            time: '15 mins ago',
            status: 'Pending'
          },
          {
            user: 'BishopPro',
            action: 'Completed puzzle',
            game: 'Puzzle',
            time: '20 mins ago',
            status: 'Completed'
          },
          {
            user: 'PawnStar',
            action: 'Started game',
            game: 'Blitz',
            time: '25 mins ago',
            status: 'In Progress'
          },
          {
            user: 'QueenMove',
            action: 'Abandoned game',
            game: 'Rapid',
            time: '30 mins ago',
            status: 'Completed'
          },
        ]);
        setLoading(false);
      }, 1200);
    };

    fetchActivities();
  }, []);

  return { activities, loading };
}
