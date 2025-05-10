
import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import StatisticsSection from './StatisticsSection';
import ActivityCharts from './ActivityCharts';
import RecentActivityTable from './RecentActivityTable';
import { useSidebar } from './SidebarProvider';

const AdminDashboard = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Chess Admin Dashboard</h1>
          </div>
        </header>
        
        <main className="p-6">
          <StatisticsSection />
          <ActivityCharts />
          <RecentActivityTable />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
