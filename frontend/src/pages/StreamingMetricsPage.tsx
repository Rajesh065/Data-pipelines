import React from 'react';
import { Radio, Activity } from 'lucide-react';

export const StreamingMetricsPage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
      <h1 className="text-xl font-bold text-slate-900">Streaming Telemetry & Dead-Letter Queue (DLQ)</h1>
      <p className="text-xs text-slate-500 mt-0.5">Kafka partition lag, consumer group offsets, and poisoned payload inspector</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">CONSUMER LAG</p>
        <p className="text-2xl font-bold text-slate-900">140 ms</p>
        <p className="text-xs text-emerald-600 font-semibold">100% within SLA target (&lt; 500ms)</p>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">DLQ ERROR COUNT</p>
        <p className="text-2xl font-bold text-emerald-600">0 Poisoned</p>
        <p className="text-xs text-slate-500">All messages parsed successfully</p>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">PARTITIONS HEALTH</p>
        <p className="text-2xl font-bold text-slate-900">32 / 32 Active</p>
        <p className="text-xs text-slate-500">Balanced load distribution</p>
      </div>
    </div>
  </div>
);
