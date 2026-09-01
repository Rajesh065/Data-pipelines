import { DagPipeline, IngestionConnector, DataQualityAssertion } from '../types';

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
  getPipelines: () => fetchJson<DagPipeline[]>('/pipelines'),
  getPipelineById: (id: string) => fetchJson<DagPipeline>(`/pipelines/${id}`),
  triggerPipeline: (id: string) => fetchJson<any>(`/pipelines/${id}/trigger`, { method: 'POST' }),
  getConnectors: () => fetchJson<IngestionConnector[]>('/connectors'),
  getQualityRules: () => fetchJson<DataQualityAssertion[]>('/quality')
};
