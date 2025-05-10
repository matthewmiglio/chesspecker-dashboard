import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getAllChessPeckerSets } from "@/lib/api/chessPeckerSetsApi";

interface ChessSetRow {
  set_id: number;
  email: string;
  puzzle_ids: string[]; // Or: `string` if it's serialized JSON
  elo: number;
  size: number;
  repeats: number;
  name: string;
  repeat_index: number;
  puzzle_index: number;
  create_time: string;
}


const ChessPeckerSetsTable = () => {
  const [sets, setSets] = useState<ChessSetRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await getAllChessPeckerSets();
      if (data) setSets(data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <Card className="border-none shadow-md mb-8">
      <CardContent className="p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">♟️ ChessPecker Sets</h2>

        {loading ? (
          <p className="text-gray-500 animate-pulse-subtle">Loading sets...</p>
        ) : sets.length === 0 ? (
          <p className="text-gray-500">No sets found.</p>
        ) : (
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="py-2 px-4">Set Name</th>
                <th className="py-2 px-4">User ID</th>
                <th className="py-2 px-4">Elo Target</th>
                <th className="py-2 px-4">Puzzles</th>
                <th className="py-2 px-4">Repeats</th>
                <th className="py-2 px-4">Created</th>
              </tr>
            </thead>
            <tbody>
              {sets.map((row) => (
                <tr key={row.set_id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{row.name}</td>
                  <td className="py-2 px-4">{row.email}</td>
                  <td className="py-2 px-4">{row.elo}</td>
                  <td className="py-2 px-4">{row.size}</td>
                  <td className="py-2 px-4">{row.repeats}</td>
                  <td className="py-2 px-4">{new Date(row.create_time).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>

          </table>
        )}
      </CardContent>
    </Card>
  );
};

export default ChessPeckerSetsTable;
