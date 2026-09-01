import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { DataQualityAssertion } from '../types';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const DataQualityPage: React.FC = () => {
  const [rules, setRules] = useState<DataQualityAssertion[]>([]);

  useEffect(() => {
    api.getQualityRules().then(setRules).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Great Expectations Data Quality Suite</h1>
          <p className="text-xs text-slate-500 mt-0.5">Automated schema drift detection, null threshold filters, and foreign key integrity</p>
        </div>
      </div>

      <div className="space-y-3">
        {rules.map(r => (
          <div key={r.assertionId} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex justify-between items-center">
            <div>
              <p className="font-bold text-sm text-slate-900">{r.ruleType} on [{r.targetColumn}]</p>
              <p className="text-xs text-slate-500 font-mono">Condition: {r.expectedCondition}</p>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              r.status === 'PASSED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              {r.passRatePct}% Pass ({r.status})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
