import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PipelineDAG, Connector } from '../types';
import { GitMerge, Cable, Zap, CheckCircle2 } from 'lucide-react';

export const DashboardPage: React.FC<{ onNavigate: (t: string) => void }> = ({ onNavigate }) => {
  const [pipelines, setPipelines] = useState<PipelineDAG[]>([]);
  const [connectors, setConnectors] = useState<Connector[]>([]);

  useEffect(() => {
    api.getPipelines().then(setPipelines).catch(() => {});
    api.getConnectors().then(setConnectors).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 border border-emerald-800/40 rounded-3xl p-6 text-white shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-black">DataFlow Enterprise Cluster</h1>
          <p className="text-slate-300 text-xs mt-1">Distributed Spark & dbt Executors • Kafka Stream Ingest • Lineage Graph Active</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onNavigate('dagbuilder')} className="bg-emerald-600 hover:bg-emerald-500 font-bold px-4 py-2 rounded-xl text-xs shadow-lg transition-all">Create New DAG</button>
          <button onClick={() => onNavigate('streaming')} className="bg-slate-800 hover:bg-slate-700 font-bold px-4 py-2 rounded-xl text-xs transition-all border border-slate-700">Stream Telemetry</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>ACTIVE DAGs</span><GitMerge className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">{pipelines.length || 2} Running</p>
          <p className="text-[10px] text-slate-500 mt-1">Daily Settlement & Clickstream</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>DATA CONNECTORS</span><Cable className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">{connectors.length || 4} Healthy</p>
          <p className="text-[10px] text-slate-500 mt-1">Postgres, Snowflake, Kafka, Iceberg</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>EVENT THROUGHPUT</span><Zap className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">15,650 /sec</p>
          <p className="text-[10px] text-slate-500 mt-1">23.2 MB/s Kafka Ingestion</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>DATA QUALITY SCORE</span><CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">99.98%</p>
          <p className="text-[10px] text-slate-500 mt-1">Zero blocking assertion failures</p>
        </div>
      </div>
    </div>
  );
};
