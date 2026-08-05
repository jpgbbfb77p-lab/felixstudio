import { useState } from 'react';
import { Building2, User, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export function Onboarding() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orgName, setOrgName] = useState('');
  
  const handleCreateWorkspace = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to create org
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1000);
  };

  const handleStartStripeKYB = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:8080/api/stripe/kyb-session', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-organization-id': 'temp-org-id' // Mocking the middleware injection for now
        },
        body: JSON.stringify({ returnUrl: window.location.href })
      });
      
      const data = await res.json();
      if (data.url) {
        // Redirect user to Stripe Hosted Identity Verification
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Failed to init Stripe Identity:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4 selection:bg-blue-500/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-xl relative z-10 animate-fade-up">
        {/* Progress Tracker */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= 1 ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-slate-700 text-slate-500'}`}>
              <User className="w-4 h-4" />
            </div>
            <div className={`w-12 h-px ${step >= 2 ? 'bg-blue-500' : 'bg-slate-800'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= 2 ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-slate-700 text-slate-500'}`}>
              <Building2 className="w-4 h-4" />
            </div>
            <div className={`w-12 h-px ${step >= 3 ? 'bg-blue-500' : 'bg-slate-800'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= 3 ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-slate-700 text-slate-500'}`}>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Step 1: Account (Mock Clerk/Supabase Hand-off) */}
        {step === 1 && (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Create your account</h1>
              <p className="text-slate-400">Join Felixstudio to issue corporate cards for your team.</p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <User className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-slate-300 text-sm mb-4">
                In production, this step integrates with <strong className="text-white">Clerk</strong> for secure B2B authentication. 
                Users will sign in via SSO, Google, or Email, and a `clerkUserId` will be generated.
              </p>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-brand-blue hover:bg-brand-blueHover text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              >
                <span>Simulate Auth Success</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Workspace Setup */}
        {step === 2 && (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl animate-fade-up" style={{ animationDuration: '0.3s' }}>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Set up your workspace</h1>
              <p className="text-slate-400">What is the legal name of your company?</p>
            </div>

            <form onSubmit={handleCreateWorkspace} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Legal Business Name</label>
                <input 
                  type="text" 
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="e.g. Acme Corporation LLC"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !orgName}
                className="w-full bg-brand-blue hover:bg-brand-blueHover text-white py-3 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                  <>
                    <span>Create Workspace</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Stripe Identity (KYB) */}
        {step === 3 && (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl animate-fade-up" style={{ animationDuration: '0.3s' }}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Verify your business</h1>
              <p className="text-slate-400">To issue cards, we are required by law to verify your business details. We partner with Stripe for secure verification.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p>Have your Employer Identification Number (EIN) ready.</p>
              </div>
              <div className="flex items-start space-x-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p>Have ID documents for individuals owning 25% or more of the company.</p>
              </div>
              <div className="flex items-start space-x-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p>We do not store your highly sensitive documents on our servers.</p>
              </div>
            </div>

            <button 
              onClick={handleStartStripeKYB}
              disabled={isSubmitting}
              className="w-full bg-[#635BFF] hover:bg-[#5249ea] text-white py-3.5 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(99,91,255,0.4)] hover:shadow-[0_0_30px_rgba(99,91,255,0.6)] flex items-center justify-center space-x-2"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Verify with Stripe Identity</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
