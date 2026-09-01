import React from 'react';
import { Terminal, Play } from 'lucide-react';

export const TransformationsPage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-slate-900">dbt SQL Studio & PySpark Catalyst Engine</h1>
        <p className="text-xs text-slate-500 mt-0.5">Incremental merge transformations, dimensional modeling, and materialization plans</p>
      </div>
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
        <Play className="w-4 h-4 fill-white" />
        <span>Run dbt Model</span>
      </button>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
      <div className="bg-slate-900 rounded-2xl p-4 text-slate-100 font-mono text-xs overflow-x-auto space-y-2">
        <p className="text-slate-400">-- dbt incremental model: fct_financial_settlement.sql</p>
        <p className="text-emerald-400">SELECT</p>
        <p className="pl-4">txn_id, customer_id, amount_cents, currency_code, settled_at</p>
        <p className="text-emerald-400">FROM</p>
        <p className="pl-4">raw_transactions_cdc</p>
        <p className="text-emerald-400">WHERE</p>
        <p className="pl-4">settled_at &gt; (SELECT MAX(settled_at) FROM target_table)</p>
      </div>
    </div>
  </div>
);
