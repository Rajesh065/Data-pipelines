import React from 'react';
import {
  LayoutDashboard,
  GitMerge,
  Database,
  Terminal,
  CheckCircle2,
  Workflow,
  Radio,
  FileCheck2,
  Settings
} from 'lucide-react';

export const Sidebar: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const sections = [
    {
      title: 'ORCHESTRATION & DAGS',
      items: [
        { id: 'dashboard', label: 'Pipeline Command Center', icon: LayoutDashboard, badge: 'Live' },
        { id: 'dagbuilder', label: 'Visual DAG Studio', icon: GitMerge },
        { id: 'connectors', label: 'Ingestion Connectors', icon: Database, badge: '6' }
      ]
    },
    {
      title: 'TRANSFORMATION & QUALITY',
      items: [
        { id: 'transformations', label: 'dbt & SQL Studio', icon: Terminal },
        { id: 'quality', label: 'Great Expectations Quality', icon: CheckCircle2 },
        { id: 'lineage', label: 'Column Lineage Graph', icon: Workflow }
      ]
    },
    {
      title: 'TELEMETRY & GOVERNANCE',
      items: [
        { id: 'streaming', label: 'Streaming Metrics & DLQ', icon: Radio },
        { id: 'governance', label: 'Data Contracts & Audit', icon: FileCheck2 }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between py-4 px-3 shadow-xs select-none">
      <div className="space-y-6">
        {sections.map(sec => (
          <div key={sec.title} className="space-y-1">
            <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2 font-mono">
              {sec.title}
            </p>
            {sec.items.map(item => {
              const Icon = item.icon;
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${active ? 'text-emerald-700' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
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
        ))}
      </div>

      {/* Cluster Node Telemetry */}
      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Spark Cluster Active
          </span>
          <span className="text-slate-500 font-mono">8 Worker Pods</span>
        </div>
        <p className="text-[10px] text-slate-500 mt-1">CPU: 42% | Memory: 64% (256 GB)</p>
      </div>
    </aside>
  );
};
