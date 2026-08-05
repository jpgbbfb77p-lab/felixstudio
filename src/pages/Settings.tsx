import { useState } from 'react';
import { Settings as SettingsIcon, Shield, CreditCard, Building, Loader2, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export function Settings() {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerifyBusiness = async () => {
    setIsVerifying(true);
    try {
      const res = await fetch('http://localhost:8080/api/stripe/kyb-onboarding-link');
      if (res.ok) {
        const data = await res.json();
        toast.success('Redirecting to Stripe Hosted Onboarding...', { icon: '🔒' });
        
        // Simulate redirect delay
        setTimeout(() => {
          toast(`Mock Redirect URL: ${data.url}`, { duration: 5000 });
          setIsVerifying(false);
        }, 1500);
      } else {
        toast.error('Failed to generate verification link');
        setIsVerifying(false);
      }
    } catch (error) {
      toast.error('Network error. Is the backend running?');
      setIsVerifying(false);
    }
  };
  return (
    <div className="space-y-8 animate-fade-up">
      <header>
        <h1 className="text-3xl font-semibold text-white tracking-tight">Settings</h1>
        <p className="text-slate-400 mt-1">Manage your workspace preferences and billing.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation Sidebar Placeholder */}
        <div className="lg:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-slate-800 text-white rounded-xl font-medium border border-slate-700 flex items-center space-x-3 cursor-pointer">
            <Building className="w-5 h-5 text-blue-400" />
            <span>Workspace</span>
          </button>
          <button 
            onClick={() => toast('Security settings coming soon', { icon: '🛡️' })}
            className="w-full text-left px-4 py-3 hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 rounded-xl font-medium transition-colors flex items-center space-x-3 cursor-pointer"
          >
            <Shield className="w-5 h-5" />
            <span>Security</span>
          </button>
          <button 
            onClick={() => toast('Billing integrations coming soon', { icon: '💳' })}
            className="w-full text-left px-4 py-3 hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 rounded-xl font-medium transition-colors flex items-center space-x-3 cursor-pointer"
          >
            <CreditCard className="w-5 h-5" />
            <span>Billing & Plans</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2">
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                <SettingsIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Workspace Settings</h2>
                <p className="text-sm text-slate-400">Settings panel is under construction.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800/50">
                <p className="text-slate-300 text-sm">
                  We are currently integrating with Stripe Identity to provide a seamless KYC/KYB flow directly in your settings dashboard. This will allow you to upgrade your tier and increase your issuing limits.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">Current Status</span>
                    <span className="inline-flex w-fit px-2 py-1 bg-amber-500/10 text-amber-400 rounded text-xs font-medium border border-amber-500/20">Action Required</span>
                  </div>
                  <button 
                    onClick={handleVerifyBusiness}
                    disabled={isVerifying}
                    className="bg-brand-blue hover:bg-brand-blueHover text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isVerifying ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Verify Business</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
