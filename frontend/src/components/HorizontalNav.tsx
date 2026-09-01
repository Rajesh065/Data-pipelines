import React from 'react';
import {
  LayoutDashboard,
  GitMerge,
  Database,
  Terminal,
  CheckCircle2,
  Workflow,
  Radio,
  FileCheck2
} from 'lucide-react';

export const HorizontalNav: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Pipeline Command Center', icon: LayoutDashboard, badge: 'Live' },
    { id: 'dagbuilder', label: 'Visual DAG Studio', icon: GitMerge },
    { id: 'connectors', label: 'Ingestion Connectors', icon: Database, badge: '6' },
    { id: 'transformations', label: 'dbt & SQL Studio', icon: Terminal },
    { id: 'quality', label: 'Great Expectations Quality', icon: CheckCircle2 },
    { id: 'lineage', label: 'Column Lineage Graph', icon: Workflow },
    { id: 'streaming', label: 'Streaming Metrics & DLQ', icon: Radio },
    { id: 'governance', label: 'Data Contracts & Audit', icon: FileCheck2 }
  ];

  return (
    <nav className="bg-white border-b border-slate-200 px-6 overflow-x-auto shadow-xs sticky top-[57px] z-30">
      <div className="flex items-center gap-1.5 min-w-max py-2 max-w-7xl mx-auto">
        {navItems.map(item => {
          const Icon = item.icon;
          const active = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                active
                  ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-emerald-700' : 'text-slate-400'}`} />
              <span>{item.label}</span>
              {item.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                  active ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-100 text-slate-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
