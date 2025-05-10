import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const SetCreateGraph = ({ data }: { data: any[] }) => {
  const dailyCounts: Record<string, number> = {};

  data.forEach(row => {
    const day = row.create_time.split("T")[0];
    dailyCounts[day] = (dailyCounts[day] || 0) + 1;
  });

  const chartData = Object.entries(dailyCounts).map(([date, count]) => ({
    date,
    count,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Set Creation Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SetCreateGraph;
