import React from 'react';
import { Workflow, Database, ArrowRight } from 'lucide-react';

export const DataLineagePage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
      <h1 className="text-xl font-bold text-slate-900">End-to-End Column-Level Data Lineage</h1>
      <p className="text-xs text-slate-500 mt-0.5">Trace data provenance from Postgres CDC source to Snowflake BI Analytics marts</p>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex items-center justify-between text-xs font-mono">
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="font-bold text-slate-800">raw_postgres.orders</p>
        <p className="text-slate-500">col: order_id, cust_id</p>
      </div>
      <ArrowRight className="w-5 h-5 text-slate-400" />
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="font-bold text-slate-800">stg_orders (dbt)</p>
        <p className="text-slate-500">clean & hash customer</p>
      </div>
      <ArrowRight className="w-5 h-5 text-slate-400" />
      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800">
        <p className="font-bold">fct_daily_revenue (Gold Mart)</p>
        <p>aggregated metric</p>
      </div>
    </div>
  </div>
);
