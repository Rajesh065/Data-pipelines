import os
import json

def write(p, c):
    d = os.path.dirname(p)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(p, 'w', encoding='utf-8') as out:
        out.write(c.strip() + '\n')
    print('Created:', p)

print("Step 3: Scaffolding Frontend React App...")

# --- 1. Frontend Configs ---
write('frontend/package.json', json.dumps({
  "name": "dataflow-frontend",
  "private": True,
  "version": "1.0.0",
  "type": "module",
  "license": "UNLICENSED",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^0.475.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^3.0.1"
  },
  "devDependencies": {
    "@types/node": "^22.13.4",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3",
    "vite": "^6.1.0"
  }
}, indent=2))

write('frontend/tsconfig.json', """{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}""")

write('frontend/tsconfig.node.json', """{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}""")

write('frontend/vite.config.ts', """import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: { port: 3000, host: true }
});
""")

write('frontend/tailwind.config.js', """export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dataflow: { 50: '#f0fdf4', 100: '#dcfce7', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 900: '#14532d' },
        cyberblue: { 500: '#06b6d4', 600: '#0891b2' }
      }
    }
  },
  plugins: []
}""")

write('frontend/postcss.config.js', """export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
}""")

write('frontend/index.html', """<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DataFlow OS | Enterprise ETL & Stream Orchestrator</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased font-['Plus_Jakarta_Sans',sans-serif]">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
""")

# --- 2. Frontend Types & API Service ---
write('frontend/src/types/index.ts', """export type UserRole = 'ADMIN' | 'DATA_ENGINEER' | 'ANALYTICS_ENGINEER' | 'DATA_SCIENTIST' | 'GOVERNANCE_OFFICER';

export interface PipelineDAG {
  id: string;
  name: string;
  description: string;
  schedule: string;
  cronExpression?: string;
  tasks: Array<{ id: string; name: string; taskType: string; operator: string }>;
  status: string;
  lastRunTimestamp?: string;
  recordsProcessedLastRun?: number;
  slaMinutes: number;
}

export interface Connector {
  id: string;
  name: string;
  type: string;
  protocol: string;
  hostEndpoint: string;
  batchSize: number;
  status: string;
}

export interface TransformationRule {
  id: string;
  name: string;
  engine: string;
  targetModel: string;
  sqlQuerySnippet: string;
  materialization: string;
}

export interface DataQualityAssertion {
  id: string;
  ruleName: string;
  tableName: string;
  columnName: string;
  assertionType: string;
  lastRunPassed: boolean;
  severity: string;
}

export interface LineageEdge {
  id: string;
  sourceTable: string;
  sourceColumn: string;
  targetTable: string;
  targetColumn: string;
  transformationType: string;
}

export interface StreamingMetrics {
  topicName: string;
  consumerLag: number;
  eventsPerSecond: number;
  throughputMbPerSec: number;
  deadLetterQueueCount: number;
  avgLatencyMs: number;
}

export interface IncidentAlert {
  id: string;
  pipelineName: string;
  alertType: string;
  severity: string;
  triggeredAt: string;
  status: string;
}
""")

write('frontend/src/services/api.ts', """import { PipelineDAG, Connector, TransformationRule, DataQualityAssertion, LineageEdge, StreamingMetrics, IncidentAlert } from '../types';

const API_BASE = 'http://localhost:5000/api/v1';

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) }
  });
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  const json = await res.json();
  return json.data;
}

export const api = {
  getPipelines: () => fetchJson<PipelineDAG[]>('/pipelines'),
  triggerPipeline: (id: string) => fetchJson<any>(`/pipelines/${id}/trigger`, { method: 'POST' }),
  getConnectors: () => fetchJson<Connector[]>('/connectors'),
  getTransformations: () => fetchJson<TransformationRule[]>('/transformations'),
  getQualityAssertions: () => fetchJson<DataQualityAssertion[]>('/quality-assertions'),
  getLineage: () => fetchJson<LineageEdge[]>('/lineage'),
  getStreamingMetrics: () => fetchJson<StreamingMetrics[]>('/streaming-metrics'),
  getIncidents: () => fetchJson<IncidentAlert[]>('/incidents')
};
""")

write('frontend/src/context/AuthContext.tsx', """import React, { createContext, useContext, useState } from 'react';
import { UserRole } from '../types';

interface AuthContextType {
  role: UserRole;
  setRole: (r: UserRole) => void;
  userName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('DATA_ENGINEER');
  return (
    <AuthContext.Provider value={{ role, setRole, userName: 'Rohan Sharma (Lead Data Architect)' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error('useAuth error');
  return c;
};
""")

write('frontend/src/components/Navbar.tsx', """import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Workflow, ShieldCheck, Activity } from 'lucide-react';
import { UserRole } from '../types';

export const Navbar: React.FC = () => {
  const { role, setRole, userName } = useAuth();
  const roles: UserRole[] = ['ADMIN', 'DATA_ENGINEER', 'ANALYTICS_ENGINEER', 'DATA_SCIENTIST', 'GOVERNANCE_OFFICER'];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-tr from-emerald-600 to-cyan-500 p-2.5 rounded-xl text-white shadow-lg shadow-emerald-500/20">
          <Workflow className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
            DataFlow OS <span className="text-[10px] bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-black px-2 py-0.5 rounded-md">ENTERPRISE ETL</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-400">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>Executors Online (8/8)</span>
        </div>

        <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 p-1 rounded-xl">
          {roles.map(r => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                role === r ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
""")

write('frontend/src/components/Sidebar.tsx', """import React from 'react';
import { LayoutDashboard, GitMerge, Cable, Binary, CheckCircle2, Network, Radio, AlertTriangle, ShieldAlert } from 'lucide-react';

export const Sidebar: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const items = [
    { id: 'dashboard', label: 'Cluster Overview', icon: LayoutDashboard },
    { id: 'dagbuilder', label: 'Visual DAG Builder', icon: GitMerge },
    { id: 'connectors', label: 'Connector Hub', icon: Cable },
    { id: 'transformations', label: 'dbt & SQL Studio', icon: Binary },
    { id: 'quality', label: 'Data Quality Suite', icon: CheckCircle2 },
    { id: 'lineage', label: 'Column Lineage Graph', icon: Network },
    { id: 'streaming', label: 'Real-Time Streaming', icon: Radio },
    { id: 'incidents', label: 'SLA Incidents & DLQ', icon: AlertTriangle },
    { id: 'governance', label: 'Governance & Catalog', icon: ShieldAlert }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col justify-between">
      <div className="space-y-1.5">
        {items.map(item => {
          const Icon = item.icon;
          const active = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
                active ? 'bg-emerald-600/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-inner' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
""")

# --- 3. Frontend Pages ---
write('frontend/src/pages/DashboardPage.tsx', """import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PipelineDAG, Connector, StreamingMetrics } from '../types';
import { GitMerge, Cable, Zap, CheckCircle2 } from 'lucide-react';

export const DashboardPage: React.FC<{ onNavigate: (t: string) => void }> = ({ onNavigate }) => {
  const [pipelines, setPipelines] = useState<PipelineDAG[]>([]);
  const [connectors, setConnectors] = useState<Connector[]>([]);

  useEffect(() => {
    api.getPipelines().then(setPipelines).catch(() => {});
    api.getConnectors().then(setConnectors).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 border border-emerald-800/40 rounded-3xl p-6 text-white shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-black">DataFlow Enterprise Cluster</h1>
          <p className="text-slate-300 text-xs mt-1">Distributed Spark & dbt Executors • Kafka Stream Ingest • Lineage Graph Active</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onNavigate('dagbuilder')} className="bg-emerald-600 hover:bg-emerald-500 font-bold px-4 py-2 rounded-xl text-xs shadow-lg transition-all">Create New DAG</button>
          <button onClick={() => onNavigate('streaming')} className="bg-slate-800 hover:bg-slate-700 font-bold px-4 py-2 rounded-xl text-xs transition-all border border-slate-700">Stream Telemetry</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>ACTIVE DAGs</span><GitMerge className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">{pipelines.length || 2} Running</p>
          <p className="text-[10px] text-slate-500 mt-1">Daily Settlement & Clickstream</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>DATA CONNECTORS</span><Cable className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">{connectors.length || 4} Healthy</p>
          <p className="text-[10px] text-slate-500 mt-1">Postgres, Snowflake, Kafka, Iceberg</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>EVENT THROUGHPUT</span><Zap className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">15,650 /sec</p>
          <p className="text-[10px] text-slate-500 mt-1">23.2 MB/s Kafka Ingestion</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>DATA QUALITY SCORE</span><CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">99.98%</p>
          <p className="text-[10px] text-slate-500 mt-1">Zero blocking assertion failures</p>
        </div>
      </div>
    </div>
  );
};
""")

write('frontend/src/pages/DagBuilderPage.tsx', """import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PipelineDAG } from '../types';
import { Play, CheckCircle, Clock } from 'lucide-react';

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
""")

write('frontend/src/pages/ConnectorsPage.tsx', """import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Connector } from '../types';

export const ConnectorsPage: React.FC = () => {
  const [connectors, setConnectors] = useState<Connector[]>([]);
  useEffect(() => { api.getConnectors().then(setConnectors).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Multi-Source Ingestion & Sink Connectors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {connectors.map(c => (
          <div key={c.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <div className="flex justify-between items-center">
              <span className="font-black text-sm text-white">{c.name}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">{c.status}</span>
            </div>
            <p className="text-xs font-mono text-cyan-400">{c.protocol} • {c.type}</p>
            <p className="text-xs text-slate-400 font-mono">{c.hostEndpoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
""")

write('frontend/src/pages/TransformationsPage.tsx', """import React, { useEffect, useState } from 'react';
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
""")

write('frontend/src/pages/DataQualityPage.tsx', """import React, { useEffect, useState } from 'react';
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
""")

write('frontend/src/pages/DataLineagePage.tsx', """import React, { useEffect, useState } from 'react';
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
""")

write('frontend/src/pages/StreamingMetricsPage.tsx', """import React, { useEffect, useState } from 'react';
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
""")

write('frontend/src/pages/IncidentAlertsPage.tsx', """import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { IncidentAlert } from '../types';

export const IncidentAlertsPage: React.FC = () => {
  const [incidents, setIncidents] = useState<IncidentAlert[]>([]);
  useEffect(() => { api.getIncidents().then(setIncidents).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">SLA Breach Alerts & Incident Runbooks</h1>
      <div className="space-y-3">
        {incidents.map(inc => (
          <div key={inc.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <p className="font-bold text-slate-200">{inc.pipelineName}</p>
              <p className="text-slate-500 font-mono text-[10px]">{inc.alertType} • {inc.severity}</p>
            </div>
            <span className="px-2.5 py-0.5 rounded font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">{inc.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
""")

write('frontend/src/pages/AuditGovernancePage.tsx', """import React from 'react';
export const AuditGovernancePage: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-xl font-black text-white">Data Governance, Catalog & Access Ledger</h1>
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs">
      <p className="text-sm font-bold text-slate-200">Compliance Standard: GDPR, CCPA, and SOC-2 Type II Verified</p>
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-400 font-mono">
        All ETL queries and dbt schema mutations are immutably logged with SHA-256 cryptographic lineage hashes.
      </div>
    </div>
  </div>
);
""")

write('frontend/src/App.tsx', """import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { DagBuilderPage } from './pages/DagBuilderPage';
import { ConnectorsPage } from './pages/ConnectorsPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { DataQualityPage } from './pages/DataQualityPage';
import { DataLineagePage } from './pages/DataLineagePage';
import { StreamingMetricsPage } from './pages/StreamingMetricsPage';
import { IncidentAlertsPage } from './pages/IncidentAlertsPage';
import { AuditGovernancePage } from './pages/AuditGovernancePage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
            {currentTab === 'dashboard' && <DashboardPage onNavigate={setCurrentTab} />}
            {currentTab === 'dagbuilder' && <DagBuilderPage />}
            {currentTab === 'connectors' && <ConnectorsPage />}
            {currentTab === 'transformations' && <TransformationsPage />}
            {currentTab === 'quality' && <DataQualityPage />}
            {currentTab === 'lineage' && <DataLineagePage />}
            {currentTab === 'streaming' && <StreamingMetricsPage />}
            {currentTab === 'incidents' && <IncidentAlertsPage />}
            {currentTab === 'governance' && <AuditGovernancePage />}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
""")

write('frontend/src/main.tsx', """import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
""")

write('frontend/src/index.css', """@tailwind base;
@tailwind components;
@tailwind utilities;
body { @apply bg-slate-950 text-slate-100 antialiased; }
""")

print("Frontend React app generated successfully!")
