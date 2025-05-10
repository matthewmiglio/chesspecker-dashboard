import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getAllDailyStats } from "@/lib/api/dailyStatsApi";

interface DailyUsageRow {
  day: string;
  correct_puzzles: number;
  incorrect_puzzles: number;
  puzzle_requests: number;
  puzzle_starts: number;
  set_creates: number;
}

const BareStatsCard = () => {
  const [allStats, setAllStats] = useState<DailyUsageRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true);
      const data = await getAllDailyStats();
      if (data) setAllStats(data);
      setLoading(false);
    };

    loadStats();
  }, []);

  return (
    <Card className="border-none shadow-md mb-8">
      <CardContent className="p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">📅 Daily Usage Table</h2>

        {loading ? (
          <p className="text-gray-500 animate-pulse-subtle">Loading daily stats...</p>
        ) : allStats.length === 0 ? (
          <p className="text-gray-500">No data found.</p>
        ) : (
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4 text-green-600">✅ Correct</th>
                <th className="py-2 px-4 text-red-600">❌ Incorrect</th>
                <th className="py-2 px-4 text-blue-600">🔄 Requests</th>
                <th className="py-2 px-4 text-purple-600">🚀 Starts</th>
                <th className="py-2 px-4 text-indigo-600">📦 Set Creates</th>
              </tr>
            </thead>
            <tbody>
              {allStats.map((row, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{row.day}</td>
                  <td className="py-2 px-4">{row.correct_puzzles}</td>
                  <td className="py-2 px-4">{row.incorrect_puzzles}</td>
                  <td className="py-2 px-4">{row.puzzle_requests}</td>
                  <td className="py-2 px-4">{row.puzzle_starts}</td>
                  <td className="py-2 px-4">{row.set_creates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  );
};

export default BareStatsCard;
