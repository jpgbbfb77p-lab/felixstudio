import { ArrowUpRight, ArrowDownRight, CreditCard, Activity, DollarSign } from 'lucide-react';
import toast from 'react-hot-toast';

export function Dashboard() {
  const stats = [
    { name: 'Available Balance', value: '$124,500.00', change: '+2.5%', isPositive: true, icon: DollarSign },
    { name: 'Total Spend (MTD)', value: '$12,340.50', change: '-4.1%', isPositive: true, icon: Activity },
    { name: 'Active Cards', value: '24', change: '+3', isPositive: true, icon: CreditCard },
  ];

  const recentTransactions = [
    { id: 1, merchant: 'Amazon Web Services', date: 'Today, 2:45 PM', amount: '-$1,240.00', status: 'Cleared', card: '•• 4242' },
    { id: 2, merchant: 'Slack Technologies', date: 'Yesterday, 10:20 AM', amount: '-$450.00', status: 'Cleared', card: '•• 8910' },
    { id: 3, merchant: 'Stripe ACH Transfer', date: 'Aug 4, 2026', amount: '+$50,000.00', status: 'Cleared', card: 'Funding' },
    { id: 4, merchant: 'Uber Eats (Team Lunch)', date: 'Aug 3, 2026', amount: '-$125.40', status: 'Pending', card: '•• 4242' },
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-white tracking-tight">Overview</h1>
          <p className="text-slate-300 mt-1">Welcome back to Felixstudio control panel.</p>
        </div>
        <button 
          onClick={() => toast('Funding connections coming in Phase 4', { icon: '🏦' })}
          className="bg-brand-blue hover:bg-brand-blueHover text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center space-x-2"
        >
          <span>Add Funds</span>
        </button>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={stat.name} 
            onClick={() => toast(`Advanced metrics for ${stat.name} coming soon`, { icon: '📊' })}
            className={`bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl relative overflow-hidden group animate-fade-up-delay-${idx + 1} cursor-pointer hover:bg-slate-800/60 transition-colors`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <stat.icon className="w-24 h-24 text-blue-500" />
            </div>
            
            <p className="text-slate-300 text-sm font-medium">{stat.name}</p>
            <div className="mt-4 flex items-baseline space-x-3">
              <h2 className="text-3xl font-bold text-white tracking-tight">{stat.value}</h2>
            </div>
            
            <div className="mt-4 flex items-center text-sm">
              <span className={`flex items-center font-medium ${stat.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {stat.change}
              </span>
              <span className="text-slate-400 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 animate-fade-up-delay-3">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">Spend Analytics</h3>
            <select 
              onChange={() => toast('Advanced date filters coming soon', { icon: '📅' })}
              className="bg-slate-800 border border-slate-700/50 text-sm rounded-lg px-3 py-1.5 text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>Year to Date</option>
            </select>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {/* Mock Chart Bars */}
            {[40, 70, 45, 90, 65, 85, 120, 50, 75, 100, 60, 80].map((height, i) => (
              <div 
                key={i} 
                onClick={() => toast('Detailed daily breakdown coming soon', { icon: '📈' })}
                className="flex-1 bg-slate-800 rounded-t-sm relative group cursor-pointer hover:bg-slate-700 transition-colors" 
                style={{ height: '100%' }}
              >
                <div 
                  className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 animate-fade-up-delay-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
            <button 
              onClick={() => toast('Full activity log available in Transactions tab', { icon: '🔄' })}
              className="text-sm text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
            >
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div 
                key={tx.id} 
                onClick={() => toast('Transaction details available in Transactions tab', { icon: '💳' })}
                className="flex items-center justify-between p-3 hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 rounded-xl transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600/50 transition-colors">
                    {tx.amount.startsWith('+') ? <ArrowDownRight className="w-5 h-5 text-emerald-400" /> : <Activity className="w-5 h-5 text-slate-300" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">{tx.merchant}</p>
                    <p className="text-xs text-slate-400">{tx.card} • {tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-200'}`}>
                    {tx.amount}
                  </p>
                  <p className="text-xs text-slate-400">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
