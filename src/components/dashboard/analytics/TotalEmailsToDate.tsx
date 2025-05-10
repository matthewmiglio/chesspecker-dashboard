// src/components/dashboard/analytics/TotalEmailsToDate.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TotalEmailsToDate = ({ data }: { data: any[] }) => {
  const emails = new Set(data.map(row => row.email));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Unique Emails</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{emails.size}</p>
        <p className="text-sm text-gray-500">All-time set creators</p>
      </CardContent>
    </Card>
  );
};

export default TotalEmailsToDate;
