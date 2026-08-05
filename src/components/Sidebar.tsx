import { NavLink } from 'react-router-dom';
import { CreditCard, LayoutDashboard, Settings, Users, ArrowLeftRight } from 'lucide-react';
import toast from 'react-hot-toast';

export function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Cards', path: '/dashboard/cards', icon: CreditCard },
    { name: 'Transactions', path: '/dashboard/transactions', icon: ArrowLeftRight },
    { name: 'Team', path: '/dashboard/team', icon: Users },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-950 border-r border-slate-800 flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-red to-brand-blue bg-clip-text text-transparent">
          Felixstudio
        </h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Corporate Cards</p>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-brand-red/10 text-brand-red border border-brand-red/20 shadow-[0_0_15px_rgba(220,38,38,0.1)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div 
          onClick={() => toast('Profile management coming in Phase 4', { icon: '🧑‍💻' })}
          className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            <span className="text-sm font-medium text-slate-300">AD</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-200">Admin User</p>
            <p className="text-xs text-slate-500">Felixstudio LLC</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
