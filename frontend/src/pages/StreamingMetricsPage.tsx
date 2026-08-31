import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { StreamingMetrics } from '../types';

export const StreamingMetricsPage: React.FC = () => {
  const [metrics, setMetrics] = useState<StreamingMetrics[]>([]);
  useEffect(() => { api.getStreamingMetrics().then(setMetrics).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Real-Time Streaming Telemetry & Consumer Lag</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map(m => (
          <div key={m.topicName} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl">
            <span className="font-black text-sm text-white">{m.topicName}</span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <div>Events/Sec: <span className="text-emerald-400 font-bold">{m.eventsPerSecond.toLocaleString()}</span></div>
              <div>Throughput: <span className="text-cyan-400 font-bold">{m.throughputMbPerSec} MB/s</span></div>
              <div>Consumer Lag: <span className="text-amber-400 font-bold">{m.consumerLag} msg</span></div>
              <div>DLQ Drops: <span className="text-emerald-400 font-bold">{m.deadLetterQueueCount}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
