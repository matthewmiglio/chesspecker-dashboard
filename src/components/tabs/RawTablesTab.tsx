
import DashboardSidebar from '../dashboard/DashboardSidebar';
import { useSidebar } from '../dashboard/SidebarProvider';
import BareStatsCard from "../dashboard/BareStatsCard";
import ChessPeckerSetsTable from "../dashboard/ChessPeckerSetsTable";

const RawTablesTab = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />

      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Raw Usage Tables</h1>
          </div>
        </header>


        <main className="p-6">
          <ChessPeckerSetsTable />
          <BareStatsCard />
        </main>
      </div>
    </div>
  );
};

export default RawTablesTab;
