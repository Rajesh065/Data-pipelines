import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { HorizontalNav } from './components/HorizontalNav';
import { DashboardPage } from './pages/DashboardPage';
import { DagBuilderPage } from './pages/DagBuilderPage';
import { ConnectorsPage } from './pages/ConnectorsPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { DataQualityPage } from './pages/DataQualityPage';
import { DataLineagePage } from './pages/DataLineagePage';
import { StreamingMetricsPage } from './pages/StreamingMetricsPage';
import { AuditGovernancePage } from './pages/AuditGovernancePage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
        <Navbar onNewPipeline={() => setCurrentTab('dagbuilder')} />
        <HorizontalNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          {currentTab === 'dashboard' && <DashboardPage onNavigate={setCurrentTab} />}
          {currentTab === 'dagbuilder' && <DagBuilderPage />}
          {currentTab === 'connectors' && <ConnectorsPage />}
          {currentTab === 'transformations' && <TransformationsPage />}
          {currentTab === 'quality' && <DataQualityPage />}
          {currentTab === 'lineage' && <DataLineagePage />}
          {currentTab === 'streaming' && <StreamingMetricsPage />}
          {currentTab === 'governance' && <AuditGovernancePage />}
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
