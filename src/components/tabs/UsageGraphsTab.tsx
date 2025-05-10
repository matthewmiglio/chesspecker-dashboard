import DashboardSidebar from '../dashboard/DashboardSidebar';
import { useSidebar } from '../dashboard/SidebarProvider';
import { useEffect, useState } from 'react';
import { getAllChessPeckerSets } from '@/lib/api/chessPeckerSetsApi';

import TotalEmailsToDate from "@/components/dashboard/analytics/TotalEmailsToDate";
import CorrectIncorrectGraph from "@/components/dashboard/analytics/CorrectIncorrectGraph";
import LichessPuzzleRequestGraph from "@/components/dashboard/analytics/LichessPuzzleRequestGraph";
import StartsGraph from "@/components/dashboard/analytics/StartsGraph";
import SetCreateGraph from "@/components/dashboard/analytics/SetCreateGraph";

const UsageGraphsTab = () => {
  const { isCollapsed } = useSidebar();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const fetched = await getAllChessPeckerSets();
      if (fetched) setData(fetched);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />

      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Usage Analytics</h1>
          </div>
        </header>

        <main className="p-6 space-y-8">
          {loading ? (
            <p className="text-gray-500">Loading analytics...</p>
          ) : (
            <>
              <TotalEmailsToDate data={data} />
              <CorrectIncorrectGraph data={data} />
              <LichessPuzzleRequestGraph data={data} />
              <StartsGraph data={data} />
              <SetCreateGraph data={data} />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default UsageGraphsTab;
