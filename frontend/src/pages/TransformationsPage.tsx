import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { TransformationRule } from '../types';

export const TransformationsPage: React.FC = () => {
  const [transforms, setTransforms] = useState<TransformationRule[]>([]);
  useEffect(() => { api.getTransformations().then(setTransforms).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">dbt SQL & PySpark Transformation Studio</h1>
      <div className="space-y-4">
        {transforms.map(t => (
          <div key={t.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <div className="flex justify-between items-center">
              <span className="font-black text-sm text-white">{t.name}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">{t.engine}</span>
            </div>
            <p className="text-xs text-slate-400">Target Model: <span className="font-mono text-emerald-400">{t.targetModel}</span> ({t.materialization})</p>
            <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto">{t.sqlQuerySnippet}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};
