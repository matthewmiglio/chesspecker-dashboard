import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LichessPuzzleRequestGraph = ({ data }: { data: any[] }) => {
  const totalRequests = data.reduce((acc, row) => acc + row.size, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Puzzle Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{totalRequests.toLocaleString()}</p>
        <p className="text-sm text-gray-500">Across all sets</p>
      </CardContent>
    </Card>
  );
};

export default LichessPuzzleRequestGraph;
