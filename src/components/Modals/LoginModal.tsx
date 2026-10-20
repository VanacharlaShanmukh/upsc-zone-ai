import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('aditya.aspirant@upsczone.ai');
  const [password, setPassword] = useState('••••••••••');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess('Aditya S.');
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-atlas-navyDeep/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-atlas-card border border-atlas-border rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-md text-atlas-textMuted hover:text-atlas-navy hover:bg-atlas-paperSecondary transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 mb-6 border-b border-atlas-border text-center">
          <div className="w-12 h-12 rounded-full bg-atlas-navy text-atlas-paper flex items-center justify-center mx-auto mb-3 shadow-atlas-sm">
            <Lock className="w-5 h-5 text-atlas-terracotta" />
          </div>
          <span className="text-[10px] font-mono tracking-coordinates text-atlas-terracotta uppercase font-bold">
            CANDIDATE REPOSITORY ACCESS
          </span>
          <h3 className="font-serif text-2xl font-bold text-atlas-navy mt-1">
            Sign In to UPSC ZONE AI
          </h3>
          <p className="text-xs text-atlas-textMuted mt-1">
            Access your personalized study schedule, test history, and saved notes.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="p-3 mb-5 rounded bg-atlas-paperSecondary/60 border border-atlas-border text-xs text-atlas-text space-y-1">
          <p className="font-semibold text-atlas-navy font-mono text-[11px]">
            DEMONSTRATION CANDIDATE PROFILE:
          </p>
          <p className="text-atlas-textMuted">
            Pre-loaded with sample data for <strong>Aditya S. (Target: CSE 2026)</strong>.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold text-atlas-navy mb-1.5 uppercase">
              Registered Aspirant Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-atlas-textMuted absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded border border-atlas-border bg-atlas-paperSecondary/30 text-sm text-atlas-navy focus:ring-2 focus:ring-atlas-terracotta focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-atlas-navy mb-1.5 uppercase">
              Secret Passcode
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-atlas-textMuted absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded border border-atlas-border bg-atlas-paperSecondary/30 text-sm text-atlas-navy focus:ring-2 focus:ring-atlas-terracotta focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded bg-atlas-navy text-atlas-paper font-semibold text-sm hover:bg-atlas-navyDeep transition-colors shadow-atlas-sm flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <span>Authenticating Candidate...</span>
            ) : (
              <>
                <span>Enter Candidate Portal</span>
                <ArrowRight className="w-4 h-4 text-atlas-terracotta" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-atlas-border text-center text-xs text-atlas-textMuted">
          <p>
            New to the Knowledge Atlas?{' '}
            <button
              onClick={onClose}
              className="text-atlas-terracotta font-semibold hover:underline"
            >
              Start Free Preparation
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
