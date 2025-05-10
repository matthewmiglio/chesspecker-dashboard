import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RawTablesTab from "@/components/tabs/RawTablesTab";
import DashboardHomeTab from "@/components/tabs/DashboardHome";
import UsageGraphsTab from "@/components/tabs/UsageGraphsTab";
import NotFound from "./pages/NotFound";
import { SidebarProvider } from "./components/dashboard/SidebarProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            {/* Redirect from root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard/raw-tables" replace />} />

            {/* Dashboard routes */}
            <Route path="/dashboard/home" element={<DashboardHomeTab />} />
            <Route path="/dashboard/raw-tables" element={<RawTablesTab />} />
            <Route path="/dashboard/usage-graphs" element={<UsageGraphsTab />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
