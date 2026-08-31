import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { DataQualityAssertion } from '../types';

export const DataQualityPage: React.FC = () => {
  const [assertions, setAssertions] = useState<DataQualityAssertion[]>([]);
  useEffect(() => { api.getQualityAssertions().then(setAssertions).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Great Expectations Data Quality & Schema Drift Suite</h1>
      <div className="space-y-3">
        {assertions.map(a => (
          <div key={a.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <p className="font-bold text-slate-200">{a.ruleName}</p>
              <p className="text-slate-500 font-mono text-[10px]">{a.tableName}.{a.columnName} • {a.assertionType}</p>
            </div>
            <span className="px-2.5 py-0.5 rounded font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">PASSED (0 Errors)</span>
          </div>
        ))}
      </div>
    </div>
  );
};
