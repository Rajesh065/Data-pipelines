import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { DagBuilderPage } from './pages/DagBuilderPage';
import { ConnectorsPage } from './pages/ConnectorsPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { DataQualityPage } from './pages/DataQualityPage';
import { DataLineagePage } from './pages/DataLineagePage';
import { StreamingMetricsPage } from './pages/StreamingMetricsPage';
import { IncidentAlertsPage } from './pages/IncidentAlertsPage';
import { AuditGovernancePage } from './pages/AuditGovernancePage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
            {currentTab === 'dashboard' && <DashboardPage onNavigate={setCurrentTab} />}
            {currentTab === 'dagbuilder' && <DagBuilderPage />}
            {currentTab === 'connectors' && <ConnectorsPage />}
            {currentTab === 'transformations' && <TransformationsPage />}
            {currentTab === 'quality' && <DataQualityPage />}
            {currentTab === 'lineage' && <DataLineagePage />}
            {currentTab === 'streaming' && <StreamingMetricsPage />}
            {currentTab === 'incidents' && <IncidentAlertsPage />}
            {currentTab === 'governance' && <AuditGovernancePage />}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
