
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useGameStats } from '@/hooks/useGameStats';

const ActivityCharts = () => {
  const { userActivity, gameTypes, loading } = useGameStats();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">User Activity</CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          {loading ? (
            <div className="h-80 w-full bg-gray-100 rounded animate-pulse-subtle"></div>
          ) : (
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={userActivity} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip 
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '4px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="active" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="new" stroke="#10B981" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Game Types</CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          {loading ? (
            <div className="h-80 w-full bg-gray-100 rounded animate-pulse-subtle"></div>
          ) : (
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={gameTypes} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip 
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '4px' }}
                />
                <Legend />
                <Bar dataKey="games" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityCharts;
