import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { DashboardLayout } from './components/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Cards } from './pages/Cards';
import { Transactions } from './pages/Transactions';
import { Team } from './pages/Team';
import { Settings } from './pages/Settings';
import { Onboarding } from './pages/Onboarding';
import { Layout as PublicLayout } from './components/Layout'; // Existing layout
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Internal Control Panel */}
          <Route path="/dashboard" element={
            <ErrorBoundary>
              <DashboardLayout />
            </ErrorBoundary>
          }>
            <Route index element={<Dashboard />} />
            <Route path="cards" element={<Cards />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="team" element={<Team />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Public Website / Default fallback */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<div className="p-8"><h1 className="text-2xl font-bold">Felixstudio Marketing Page</h1></div>} />
          </Route>

          {/* Onboarding Flow */}
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(10, 10, 10, 0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(220, 38, 38, 0.3)', // subtle red border
              color: '#fff',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  );
}
