
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, TrendingDown } from 'lucide-react';
import { useUserStats } from '@/hooks/useUserStats';

const StatisticsSection = () => {
  const { stats, loading } = useUserStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatsCard
        title="Total Users"
        value={stats.totalUsers}
        icon={<Users className="text-blue-500" />}
        change={stats.userChange}
        positive={stats.userChange > 0}
        loading={loading}
      />
      <StatsCard
        title="Active Players"
        value={stats.activePlayers}
        icon={<Users className="text-green-500" />}
        change={stats.activePlayersChange}
        positive={stats.activePlayersChange > 0}
        loading={loading}
      />
      <StatsCard
        title="Games Today"
        value={stats.gamesPlayed}
        icon={<Users className="text-purple-500" />}
        change={stats.gamesPlayedChange}
        positive={stats.gamesPlayedChange > 0}
        loading={loading}
      />
      <StatsCard
        title="New Signups"
        value={stats.newSignups}
        icon={<Users className="text-indigo-500" />}
        change={stats.newSignupsChange}
        positive={stats.newSignupsChange > 0}
        loading={loading}
      />
    </div>
  );
};

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  change: number;
  positive: boolean;
  loading?: boolean;
}

const StatsCard = ({ title, value, icon, change, positive, loading = false }: StatsCardProps) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            {loading ? (
              <div className="h-8 w-24 bg-gray-200 animate-pulse-subtle rounded mt-1"></div>
            ) : (
              <p className="text-2xl font-bold mt-1">{value.toLocaleString()}</p>
            )}
          </div>
          <div className="p-3 rounded-full bg-gray-100">{icon}</div>
        </div>
        
        {!loading && (
          <div className="flex items-center mt-4">
            {positive ? (
              <TrendingUp size={16} className="text-green-500 mr-1" />
            ) : (
              <TrendingDown size={16} className="text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(change)}% {positive ? 'increase' : 'decrease'}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatisticsSection;
