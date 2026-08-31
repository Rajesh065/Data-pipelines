import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Connector } from '../types';

export const ConnectorsPage: React.FC = () => {
  const [connectors, setConnectors] = useState<Connector[]>([]);
  useEffect(() => { api.getConnectors().then(setConnectors).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Multi-Source Ingestion & Sink Connectors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {connectors.map(c => (
          <div key={c.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <div className="flex justify-between items-center">
              <span className="font-black text-sm text-white">{c.name}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">{c.status}</span>
            </div>
            <p className="text-xs font-mono text-cyan-400">{c.protocol} • {c.type}</p>
            <p className="text-xs text-slate-400 font-mono">{c.hostEndpoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
