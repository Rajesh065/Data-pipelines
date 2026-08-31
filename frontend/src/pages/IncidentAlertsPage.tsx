import React, { useEffect, useState } from 'react';
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
