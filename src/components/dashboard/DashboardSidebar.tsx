import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils"; // optional: your clsx/tailwind merge util

const SidebarItem = ({ to, label, icon }: { to: string; label: string; icon: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center px-4 py-3 rounded-md text-sm font-medium transition",
        isActive
          ? "bg-purple-100 text-purple-700"
          : "text-gray-600 hover:bg-gray-100"
      )
    }
  >
    <span className="mr-3">{icon}</span>
    {label}
  </NavLink>
);

const DashboardSidebar = () => (
  <aside className="w-64 h-full bg-white border-r shadow-sm p-4 space-y-2">
    <h2 className="text-xl font-bold mb-4">Chess Admin</h2>
    <SidebarItem to="/dashboard/home" label="Dashboard" icon="📊" />
    <SidebarItem to="/dashboard/raw-tables" label="Raw tables" icon="📊" />
    <SidebarItem to="/dashboard/usage-graphs" label="Usage Graphs" icon="📈" />
  </aside>
);

export default DashboardSidebar;
