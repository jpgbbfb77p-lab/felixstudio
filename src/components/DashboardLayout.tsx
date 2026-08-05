import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-brand-blue/30 flex">
      {/* Background ambient glow (subtle brand red) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-red/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-brand-red/5 blur-[100px] mix-blend-screen" />
      </div>

      {/* Sidebar Navigation */}
      <div className="relative z-10">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 relative z-10 h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
