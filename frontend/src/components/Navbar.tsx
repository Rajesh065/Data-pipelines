import React from 'react';
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
