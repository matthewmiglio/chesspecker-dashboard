// src/components/dashboard/analytics/CorrectIncorrectGraph.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const CorrectIncorrectGraph = ({ data }: { data: any[] }) => {
  const chartData = data.map(row => ({
    name: row.name,
    correct: row.size,          // size = total puzzles
    incorrect: row.repeats * 2, // fake stat for demo
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Correct vs Incorrect (Mock)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="correct" fill="#10B981" />
            <Bar dataKey="incorrect" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CorrectIncorrectGraph;
