import { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Filter, Search, MoreHorizontal, X, FileText, CheckCircle2, Clock, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface Transaction {
  id: string;
  stripeTransactionId: string;
  amount: number;
  currency: string;
  status: string;
  merchantName: string;
  merchantCategoryCode: string | null;
  createdAt: string;
  card: { id: string; last4: string; brand: string };
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  
  const orgId = 'mock-org-id';
  const API_BASE = 'http://localhost:8080/api';

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await fetch(`${API_BASE}/transactions?organizationId=${orgId}`);
      if (res.ok) {
        const data = await res.json();
        setTransactions(data);
      }
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const StatusBadge = ({ status }: { status: string }) => {
    if (status === 'cleared' || status === 'captured') {
      return <span className="flex items-center text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md text-xs font-medium"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> Cleared</span>;
    }
    if (status === 'pending') {
      return <span className="flex items-center text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md text-xs font-medium"><Clock className="w-3.5 h-3.5 mr-1.5" /> Pending</span>;
    }
    return <span className="flex items-center text-rose-400 bg-rose-400/10 px-2.5 py-1 rounded-md text-xs font-medium"><XCircle className="w-3.5 h-3.5 mr-1.5" /> Declined</span>;
  };

  return (
    <div className="space-y-8 animate-fade-up">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-white tracking-tight">Transactions</h1>
          <p className="text-slate-300 mt-1">Review activity across all corporate cards.</p>
        </div>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search merchant..." 
              className="bg-slate-900 border border-slate-700 text-sm rounded-xl pl-9 pr-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 w-full md:w-64"
            />
          </div>
          <button 
            onClick={() => toast('Advanced transaction filters coming in Phase 4', { icon: '🔍' })}
            className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 px-4 py-2.5 rounded-xl font-medium transition-colors flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </header>

      {/* Main Table Area */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700/50 bg-slate-900/50">
                <th className="px-6 py-4 text-xs font-medium text-slate-300 uppercase tracking-wider">Merchant / Date</th>
                <th className="px-6 py-4 text-xs font-medium text-slate-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-medium text-slate-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-medium text-slate-300 uppercase tracking-wider">Card</th>
                <th className="px-6 py-4 text-xs font-medium text-slate-300 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                    Loading transactions...
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                    No transactions found.
                  </td>
                </tr>
              ) : (
                transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700/50">
                          {tx.amount < 0 ? <ArrowUpRight className="w-4 h-4 text-slate-300" /> : <ArrowDownRight className="w-4 h-4 text-emerald-400" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-200">{tx.merchantName}</p>
                          <p className="text-xs text-slate-400">{new Date(tx.createdAt).toLocaleDateString()} at {new Date(tx.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${tx.amount > 0 ? 'text-emerald-400' : 'text-slate-200'}`}>
                        {tx.amount > 0 ? '+' : ''}{(tx.amount / 100).toLocaleString('en-US', { style: 'currency', currency: tx.currency.toUpperCase() })}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={tx.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2 text-sm text-slate-300">
                        <CreditCard className="w-4 h-4 text-slate-500" />
                        <span>•• {tx.card.last4}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button 
                        onClick={() => setSelectedTx(tx)}
                        className="text-slate-500 hover:text-blue-400 transition-colors p-2"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {selectedTx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedTx(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl animate-fade-up" style={{ animationDuration: '0.2s' }}>
            <div className="p-6 border-b border-slate-800 flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  <FileText className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{selectedTx.merchantName}</h2>
                  <p className="text-sm text-slate-400">{new Date(selectedTx.createdAt).toLocaleString()}</p>
                </div>
              </div>
              <button onClick={() => setSelectedTx(null)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-slate-300 text-sm">Authorization Amount</span>
                <span className={`text-3xl font-bold tracking-tight ${selectedTx.amount > 0 ? 'text-emerald-400' : 'text-white'}`}>
                  {selectedTx.amount > 0 ? '+' : ''}{(selectedTx.amount / 100).toLocaleString('en-US', { style: 'currency', currency: selectedTx.currency.toUpperCase() })}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                  <span className="block text-xs text-slate-500 mb-1 uppercase tracking-wider">Status</span>
                  <StatusBadge status={selectedTx.status} />
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                  <span className="block text-xs text-slate-500 mb-1 uppercase tracking-wider">Card</span>
                  <span className="text-sm font-medium text-slate-300 flex items-center">
                    <CreditCard className="w-4 h-4 mr-2 text-slate-500" />
                    {selectedTx.card.brand} •• {selectedTx.card.last4}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white mb-2">Technical Details</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Stripe Transaction ID</span>
                  <span className="text-slate-300 font-mono text-xs">{selectedTx.stripeTransactionId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Category Code (MCC)</span>
                  <span className="text-slate-300 font-mono">{selectedTx.merchantCategoryCode || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
