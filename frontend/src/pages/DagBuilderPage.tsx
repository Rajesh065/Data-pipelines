import React from 'react';
import { GitMerge, Play, Database, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const DagBuilderPage: React.FC = () => {
  const steps = [
    { title: '1. Source Ingest', desc: 'PostgreSQL CDC Debezium Feed', type: 'EXTRACT', status: 'COMPLETED' },
    { title: '2. Schema Check', desc: 'Avro Confluent Registry Validation', type: 'VALIDATE', status: 'COMPLETED' },
    { title: '3. dbt Transform', desc: 'Spark Catalyst Incremental Join', type: 'TRANSFORM', status: 'RUNNING' },
    { title: '4. Great Expectations', desc: 'Column Uniqueness & Null Filter', type: 'QUALITY', status: 'PENDING' },
    { title: '5. Lakehouse Load', desc: 'Apache Iceberg Gold Table Partition', type: 'LOAD', status: 'PENDING' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Interactive Visual DAG Studio & Scheduler</h1>
          <p className="text-xs text-slate-500 mt-0.5">End-to-end task dependency graph and distributed Spark execution engine</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
          <Play className="w-4 h-4 fill-white" />
          <span>Execute DAG Workflow</span>
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-sm font-bold text-slate-900">Active DAG Execution Path: Financial Settlement (DAG-FIN-001)</h2>
          <p className="text-xs text-slate-500">Scheduled: Every 15 minutes • SLA Target: 5 minutes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  step.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' :
                  step.status === 'RUNNING' ? 'bg-amber-100 text-amber-800' :
                  'bg-slate-200 text-slate-600'
                }`}>
                  {step.status}
                </span>
                <p className="font-bold text-xs text-slate-900 mt-2">{step.title}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{step.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[10px] font-mono text-slate-400">
                {step.type} STAGE
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
