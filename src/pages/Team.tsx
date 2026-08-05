import { Users, Mail, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

export function Team() {
  return (
    <div className="space-y-8 animate-fade-up">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-white tracking-tight">Team</h1>
          <p className="text-slate-400 mt-1">Manage workspace members and their roles.</p>
        </div>
        <button 
          onClick={() => toast('SSO & Team invites coming in Phase 4', { icon: '📧' })}
          className="bg-brand-blue hover:bg-brand-blueHover text-white px-4 py-2.5 rounded-xl font-medium transition-colors flex items-center space-x-2 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          <Plus className="w-4 h-4" />
          <span>Invite Member</span>
        </button>
      </header>

      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-12 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 mb-6">
          <Users className="w-8 h-8 text-slate-400" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Team Management Coming Soon</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          We are currently implementing our Role-Based Access Control (RBAC) and SSO integration. Soon you'll be able to invite team members and assign granular card limits.
        </p>
        
        <div className="inline-flex items-center text-sm text-slate-500 space-x-2 bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800/50">
          <Mail className="w-4 h-4" />
          <span>Stay tuned for Phase 4!</span>
        </div>
      </div>
    </div>
  );
}
