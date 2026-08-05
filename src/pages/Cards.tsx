import { useState, useEffect } from 'react';
import { Plus, CreditCard, Lock, Unlock, Settings2, Loader2, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface Card {
  id: string;
  last4: string;
  expMonth: number;
  expYear: number;
  brand: string;
  status: string;
  spendingLimit: number | null;
  limitInterval: string | null;
  user?: { firstName: string; lastName: string };
}

export function Cards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock org and user ID for Phase 1 internal pilot
  const orgId = 'mock-org-id';
  const userId = 'mock-user-id';
  const API_BASE = 'http://localhost:8080/api';

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      // In a real app we'd pass auth tokens
      const res = await fetch(`${API_BASE}/cards`);
      if (res.ok) {
        const data = await res.json();
        setCards(data);
      }
    } catch (error) {
      console.error('Failed to fetch cards:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCardStatus = async (cardId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    try {
      // Optimistic update
      setCards(cards.map(c => c.id === cardId ? { ...c, status: newStatus } : c));
      
      await fetch(`${API_BASE}/cards/${cardId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (error) {
      console.error('Failed to update card status:', error);
      // Revert on error
      fetchCards();
    }
  };

  return (
    <div className="space-y-8 animate-fade-up">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-white tracking-tight">Virtual Cards</h1>
          <p className="text-slate-300 mt-1">Manage team spending and issue new corporate cards.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-blue hover:bg-brand-blueHover text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Issue Card</span>
        </button>
      </header>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.length === 0 ? (
            <div className="col-span-full bg-slate-900/40 border border-slate-700/50 rounded-2xl p-12 text-center">
              <CreditCard className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No active cards</h3>
              <p className="text-slate-300 max-w-sm mx-auto">You haven't issued any virtual cards yet. Click "Issue Card" to get started.</p>
            </div>
          ) : (
            cards.map((card, idx) => (
              <div 
                key={card.id} 
                className={`bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden group animate-fade-up-delay-${(idx % 4) + 1}`}
              >
                {/* Visual Card Representation */}
                <div className={`relative h-48 rounded-xl p-6 mb-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 ${card.status === 'active' ? 'bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-600/50' : 'bg-slate-900 border border-slate-700/50 opacity-60'}`}>
                  {/* Decorative background sweeps */}
                  {card.status === 'active' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
                    </>
                  )}
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-lg font-semibold text-white tracking-widest">{card.brand}</span>
                    {card.status !== 'active' && (
                      <span className="bg-rose-500/20 text-rose-400 text-xs px-2 py-1 rounded font-medium flex items-center">
                        <Lock className="w-3 h-3 mr-1" /> Frozen
                      </span>
                    )}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex space-x-2 mb-2">
                      <span className="text-white tracking-widest">••••</span>
                      <span className="text-white tracking-widest">••••</span>
                      <span className="text-white tracking-widest">••••</span>
                      <span className="text-white tracking-widest font-mono text-lg">{card.last4}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs text-slate-200 uppercase tracking-wider">
                        {card.user ? `${card.user.firstName} ${card.user.lastName}` : 'Team Member'}
                      </div>
                      <div className="text-xs text-slate-200 font-mono">
                        {String(card.expMonth).padStart(2, '0')}/{card.expYear.toString().slice(-2)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-sm text-slate-300">Monthly Limit</p>
                    <p className="text-base font-medium text-white">
                      {card.spendingLimit ? `$${(card.spendingLimit / 100).toLocaleString()}` : 'Unlimited'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => toggleCardStatus(card.id, card.status)}
                      className={`p-2 rounded-lg transition-colors ${card.status === 'active' ? 'text-slate-400 hover:text-rose-400 hover:bg-rose-500/10' : 'text-rose-400 bg-rose-500/10 hover:bg-rose-500/20'}`}
                      title={card.status === 'active' ? 'Freeze Card' : 'Unfreeze Card'}
                    >
                      {card.status === 'active' ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
                    </button>
                    <button 
                      onClick={() => toast('Card settings coming in Phase 4', { icon: '⚙️' })}
                      className="p-2 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-brand-blueHover/10 transition-colors"
                    >
                      <Settings2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Issue Card Modal */}
      {isModalOpen && (
        <IssueCardModal 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={() => {
            setIsModalOpen(false);
            fetchCards();
          }}
          orgId={orgId}
          userId={userId}
        />
      )}
    </div>
  );
}

// Separate Modal Component
function IssueCardModal({ onClose, onSuccess, orgId, userId }: { onClose: () => void, onSuccess: () => void, orgId: string, userId: string }) {
  const [limit, setLimit] = useState('500');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('http://localhost:8080/api/cards/issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organizationId: orgId,
          userId: userId,
          spendingLimit: parseInt(limit) * 100, // convert to cents
          limitInterval: 'monthly'
        })
      });
      
      if (res.ok) {
        onSuccess();
      } else {
        console.error('Failed to issue card');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-up" 
        style={{ animationDuration: '0.2s' }}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-fade-up" style={{ animationDuration: '0.3s' }}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-xl font-bold text-white mb-2">Issue New Card</h2>
        <p className="text-sm text-slate-300 mb-6">Create a new virtual corporate card instantly.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Assign to Team Member</label>
            <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option value={userId}>Admin User (You)</option>
              {/* In reality, fetch users from org */}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Monthly Spending Limit ($)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-slate-500 font-medium">$</span>
              </div>
              <input 
                type="number" 
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="500"
                min="0"
                required
              />
            </div>
          </div>
          
          <div className="pt-4 flex space-x-3">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl font-medium transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 bg-brand-blue hover:bg-brand-blueHover text-white py-2.5 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Issue Card'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
