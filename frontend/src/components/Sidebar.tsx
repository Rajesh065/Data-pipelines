import React from 'react';
import { LayoutDashboard, GitMerge, Cable, Binary, CheckCircle2, Network, Radio, AlertTriangle, ShieldAlert } from 'lucide-react';

export const Sidebar: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const items = [
    { id: 'dashboard', label: 'Cluster Overview', icon: LayoutDashboard },
    { id: 'dagbuilder', label: 'Visual DAG Builder', icon: GitMerge },
    { id: 'connectors', label: 'Connector Hub', icon: Cable },
    { id: 'transformations', label: 'dbt & SQL Studio', icon: Binary },
    { id: 'quality', label: 'Data Quality Suite', icon: CheckCircle2 },
    { id: 'lineage', label: 'Column Lineage Graph', icon: Network },
    { id: 'streaming', label: 'Real-Time Streaming', icon: Radio },
    { id: 'incidents', label: 'SLA Incidents & DLQ', icon: AlertTriangle },
    { id: 'governance', label: 'Governance & Catalog', icon: ShieldAlert }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col justify-between">
      <div className="space-y-1.5">
        {items.map(item => {
          const Icon = item.icon;
          const active = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
                active ? 'bg-emerald-600/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-inner' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
