import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { IngestionConnector } from '../types';
import { Database, Plus, CheckCircle2, Activity } from 'lucide-react';

export const ConnectorsPage: React.FC = () => {
  const [connectors, setConnectors] = useState<IngestionConnector[]>([]);

  useEffect(() => {
    api.getConnectors().then(setConnectors).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Multi-Source Ingestion Connectors Hub</h1>
          <p className="text-xs text-slate-500 mt-0.5">PostgreSQL CDC, Apache Kafka 3.4, Snowflake, S3 & Iceberg connectors</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
          <Plus className="w-4 h-4" />
          <span>Add New Connector</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {connectors.map(c => (
          <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm text-slate-900">{c.name}</span>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Active</span>
            </div>
            <p className="text-xs font-mono text-emerald-700">Source: {c.sourceSystem}</p>
            <p className="text-xs text-slate-500">Target Table: {c.targetTable}</p>
            <div className="pt-2 border-t border-slate-100 flex justify-between text-xs text-slate-700 font-bold">
              <span>Throughput: {c.throughputRecordsSec} r/s</span>
              <span>Lag: {c.replicationLagMs}ms</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
