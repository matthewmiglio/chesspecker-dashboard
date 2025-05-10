
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRecentActivity } from '@/hooks/useRecentActivity';

const RecentActivityTable = () => {
  const { activities, loading } = useRecentActivity();

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-500">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Activity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Game</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array(5).fill(0).map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-4"><div className="h-4 w-24 bg-gray-200 rounded animate-pulse-subtle"></div></td>
                    <td className="py-3 px-4"><div className="h-4 w-32 bg-gray-200 rounded animate-pulse-subtle"></div></td>
                    <td className="py-3 px-4"><div className="h-4 w-20 bg-gray-200 rounded animate-pulse-subtle"></div></td>
                    <td className="py-3 px-4"><div className="h-4 w-16 bg-gray-200 rounded animate-pulse-subtle"></div></td>
                    <td className="py-3 px-4"><div className="h-4 w-16 bg-gray-200 rounded animate-pulse-subtle"></div></td>
                  </tr>
                ))
              ) : (
                activities.map((activity, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium mr-3">
                          {activity.user.substring(0, 1)}
                        </div>
                        {activity.user}
                      </div>
                    </td>
                    <td className="py-3 px-4">{activity.action}</td>
                    <td className="py-3 px-4">{activity.game}</td>
                    <td className="py-3 px-4">{activity.time}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        activity.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : activity.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityTable;
