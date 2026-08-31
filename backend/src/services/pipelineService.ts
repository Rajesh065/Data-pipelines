import { mockDataStore } from '../models/mockData';
import { PipelineDAG, Connector } from '../models/types';

export class PipelineService {
  static getPipelines(): PipelineDAG[] { return mockDataStore.pipelines; }
  static getPipelineById(id: string): PipelineDAG | null { return mockDataStore.pipelines.find(p => p.id === id) || null; }
  static getConnectors(): Connector[] { return mockDataStore.connectors; }
  static getTransformations() { return mockDataStore.transformations; }
  static getQualityAssertions() { return mockDataStore.qualityAssertions; }
  static getLineage() { return mockDataStore.lineage; }
  static getStreamingMetrics() { return mockDataStore.streamingTelemetry; }
  static getIncidents() { return mockDataStore.incidentAlerts; }

  static triggerPipelineRun(pipelineId: string) {
    const pipe = this.getPipelineById(pipelineId);
    if (!pipe) return null;
    pipe.lastRunTimestamp = new Date().toISOString();
    pipe.status = 'RUNNING';
    return { success: true, pipelineId, executionId: 'exec-' + Date.now(), status: 'RUNNING', triggeredAt: pipe.lastRunTimestamp };
  }
}
