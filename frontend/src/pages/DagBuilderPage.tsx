import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PipelineDAG } from '../types';
import { Play } from 'lucide-react';

export const DagBuilderPage: React.FC = () => {
  const [pipelines, setPipelines] = useState<PipelineDAG[]>([]);
  const [selectedPipe, setSelectedPipe] = useState<PipelineDAG | null>(null);

  useEffect(() => {
    api.getPipelines().then(data => {
      setPipelines(data);
      if (data.length > 0) setSelectedPipe(data[0]);
    });
  }, []);

  const triggerRun = async (id: string) => {
    await api.triggerPipeline(id);
    const updated = await api.getPipelines();
    setPipelines(updated);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Visual DAG Pipeline Designer & Scheduler</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-3">
          {pipelines.map(p => (
            <div
              key={p.id}
              onClick={() => setSelectedPipe(p)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                selectedPipe?.id === p.id ? 'bg-slate-850 border-emerald-500 shadow-lg' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-white">{p.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">{p.status}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">{p.description}</p>
            </div>
          ))}
        </div>

        {selectedPipe && (
          <div className="lg:col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-base font-black text-white">{selectedPipe.name}</h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Schedule: {selectedPipe.schedule} ({selectedPipe.cronExpression || 'Continuous'})</p>
              </div>
              <button
                onClick={() => triggerRun(selectedPipe.id)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all"
              >
                <Play className="w-4 h-4 fill-white" /> Trigger Run Now
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400">DAG Task Execution Graph</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedPipe.tasks.map((task, idx) => (
                  <div key={task.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-emerald-400 font-bold">Step #{idx+1}: {task.taskType}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{task.operator}</span>
                    </div>
                    <p className="font-bold text-sm text-slate-200">{task.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
