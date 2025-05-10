
import React from 'react';
import { useSidebar } from './SidebarProvider';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const DashboardSidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div 
      className={`fixed left-0 top-0 h-screen bg-chess-dark text-white transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && <div className="text-xl font-bold">Chess Admin</div>}
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-chess-accent/20 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {[
            { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
            { icon: <Users size={20} />, label: 'Users', active: false },
            { icon: <Calendar size={20} />, label: 'Games', active: false },
            { icon: <Settings size={20} />, label: 'Settings', active: false },
          ].map((item, idx) => (
            <li key={idx}>
              <a 
                href="#" 
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-chess-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                <span className="min-w-[20px]">{item.icon}</span>
                {!isCollapsed && <span className="ml-4">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-chess-accent/20 flex items-center justify-center">
              <span>A</span>
            </div>
            <div className="text-sm">Admin User</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSidebar;
