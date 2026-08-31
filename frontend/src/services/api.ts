import { PipelineDAG, Connector, TransformationRule, DataQualityAssertion, LineageEdge, StreamingMetrics, IncidentAlert } from '../types';

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
