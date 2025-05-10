
import React from 'react';
import { SidebarProvider } from "@/components/dashboard/SidebarProvider";
import AdminDashboard from '@/components/dashboard/AdminDashboard';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen bg-gray-50">
        <AdminDashboard />
      </div>
    </SidebarProvider>
  );
};

export default Index;
