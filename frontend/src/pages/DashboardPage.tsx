import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { DagPipeline, IngestionConnector } from '../types';
import {
  GitMerge,
  Play,
  CheckCircle2,
  Clock,
  Database,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  ArrowUpRight,
  Radio,
  Layers
} from 'lucide-react';

export const DashboardPage: React.FC<{ onNavigate: (t: string) => void }> = ({ onNavigate }) => {
  const [pipelines, setPipelines] = useState<DagPipeline[]>([]);
  const [connectors, setConnectors] = useState<IngestionConnector[]>([]);

  useEffect(() => {
    api.getPipelines().then(setPipelines).catch(() => {});
    api.getConnectors().then(setConnectors).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome / Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
              DataFlow OS Distributed Orchestrator
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 mt-1.5">Production Pipeline Operations Hub</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Running <strong className="text-slate-700 font-semibold">{pipelines.length} enterprise DAGs</strong> across Spark Catalyst & dbt Incremental Lakehouse models.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('dagbuilder')}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all"
          >
            <GitMerge className="w-4 h-4" />
            <span>Open Visual DAG Studio</span>
          </button>
          <button
            onClick={() => onNavigate('connectors')}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all border border-slate-200"
          >
            <Database className="w-4 h-4" />
            <span>Connectors Hub</span>
          </button>
        </div>
      </div>

      {/* Real-Time Telemetry Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>DATA INGESTION TODAY</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">69.84M Rows</p>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold mt-1">
            <span>4.82 TB compressed in Iceberg</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>ACTIVE CONNECTORS</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Database className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">{connectors.length || 3} Online</p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mt-1">
            <span>Postgres CDC, Kafka, Snowflake</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>GREAT EXPECTATIONS QA</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">99.98% Pass</p>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold mt-1">
            <span>1,240 Assertion rules verified</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>STREAMING LAG</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Radio className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">140 ms</p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mt-1">
            <span>Zero consumer partition skew</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Active DAG Execution Pipeline Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Active Production DAG Pipeline Runs</h2>
              <p className="text-[11px] text-slate-500">Real-time task executor status and SLA target monitoring</p>
            </div>
            <button
              onClick={() => onNavigate('dagbuilder')}
              className="text-emerald-700 hover:text-emerald-800 text-xs font-bold flex items-center gap-1"
            >
              <span>View Canvas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {pipelines.map(dag => (
              <div key={dag.id} className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/80 px-2 rounded-xl transition-all">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-900">{dag.name}</span>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{dag.id}</span>
                  </div>
                  <p className="text-xs text-slate-500">{dag.sourceConnector} ➔ {dag.targetWarehouse}</p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span>{dag.scheduleInterval}</span>
                    <span>•</span>
                    <span>{dag.tasksCount} Tasks</span>
                    <span>•</span>
                    <span>{(dag.recordsProcessedToday / 1000000).toFixed(1)}M Rows</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    dag.status === 'RUNNING' ? 'bg-amber-100 text-amber-800' :
                    dag.status === 'SUCCESS' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {dag.status}
                  </span>

                  <button
                    onClick={() => api.triggerPipeline(dag.id)}
                    className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all"
                    title="Trigger Pipeline Now"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Ingestion Connector Live Metrics */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-slate-900">Ingestion Connectors Status</h2>
            <p className="text-[11px] text-slate-500">CDC & Streaming Ingestion Pipelines</p>
          </div>

          <div className="space-y-3">
            {connectors.map(conn => (
              <div key={conn.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{conn.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono">{conn.sourceSystem}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-[9px] font-bold text-slate-400 uppercase font-mono">THROUGHPUT</p>
                    <p className="text-xs font-bold text-slate-800">{(conn.throughputRecordsSec / 1000).toFixed(1)}k rec/s</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-[9px] font-bold text-slate-400 uppercase font-mono">REPLICATION LAG</p>
                    <p className="text-xs font-bold text-slate-800">{conn.replicationLagMs} ms</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
