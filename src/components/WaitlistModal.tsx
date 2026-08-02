import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

export default function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !company) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid work email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8080';
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          company_name: company,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setSubmitted(true);
      } else if (response.status === 409) {
        setError('This email is already on the waitlist.');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    setCompany('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-md bg-[#0A0204] border border-white/10 p-8 shadow-2xl animate-fade-up"
        style={{
          boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.25)'
        }}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close waitlist modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-8 text-center">
              <h3 className="font-bebas text-3xl text-white uppercase tracking-wide mb-2">Apply for Early Access</h3>
              <p className="font-inter text-sm text-white/60">
                Join the waitlist to get priority access to the Felixstudio corporate card platform.
              </p>
            </div>

            {error && (
              <div className="mb-4 bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-xs font-inter rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-inter text-[10px] tracking-widest uppercase text-white/50 mb-1.5">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-red-500/50 outline-none px-4 py-3 text-sm text-white font-inter transition-colors"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block font-inter text-[10px] tracking-widest uppercase text-white/50 mb-1.5">Company Name</label>
                <input 
                  type="text" 
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-red-500/50 outline-none px-4 py-3 text-sm text-white font-inter transition-colors"
                  placeholder="Acme Corp"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group mt-6 inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 disabled:bg-red-800 disabled:cursor-not-allowed px-6 py-4 text-xs tracking-widest uppercase text-white transition-all duration-200 font-inter"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-green-950/40 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-bebas text-3xl text-white uppercase tracking-wide mb-3">Application Received</h3>
            <p className="font-inter text-sm text-white/60 leading-relaxed mb-8">
              Thank you for your interest in Felixstudio. Our team is reviewing your application and will be in touch shortly.
            </p>
            <button 
              onClick={handleClose}
              className="border border-white/20 hover:border-white/40 px-8 py-3 text-xs tracking-widest uppercase text-white transition-all duration-200 font-inter"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
