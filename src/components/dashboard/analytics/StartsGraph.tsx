import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StartsGraph = ({ data }: { data: any[] }) => {
  const totalStarts = data.reduce((acc, row) => acc + row.repeats, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Start Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{totalStarts}</p>
        <p className="text-sm text-gray-500">Repeat sessions across all sets</p>
      </CardContent>
    </Card>
  );
};

export default StartsGraph;
