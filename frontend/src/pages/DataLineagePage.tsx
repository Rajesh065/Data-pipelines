import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { LineageEdge } from '../types';

export const DataLineagePage: React.FC = () => {
  const [edges, setEdges] = useState<LineageEdge[]>([]);
  useEffect(() => { api.getLineage().then(setEdges).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Column-Level End-to-End Lineage Graph</h1>
      <div className="space-y-3">
        {edges.map(e => (
          <div key={e.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center text-xs font-mono">
            <span className="text-emerald-400">{e.sourceTable}.{e.sourceColumn}</span>
            <span className="text-slate-500 font-bold">─── [{e.transformationType}] ───▶</span>
            <span className="text-cyan-400">{e.targetTable}.{e.targetColumn}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
