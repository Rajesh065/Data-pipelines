import { mockDataStore } from '../models/mockData';
import { DagPipeline, IngestionConnector, DataQualityAssertion } from '../models/types';

export class PipelineService {
  static getPipelines(): DagPipeline[] { return mockDataStore.pipelines; }
  static getPipelineById(id: string): DagPipeline | undefined { return mockDataStore.pipelines.find(p => p.id === id); }
  static triggerPipeline(id: string) {
    const pipe = mockDataStore.pipelines.find(p => p.id === id);
    if (!pipe) return null;
    pipe.status = 'RUNNING';
    return { success: true, pipelineId: id, name: pipe.name, startedAt: new Date().toISOString(), executionState: 'DISPATCHED_TO_SPARK_EXECUTOR' };
  }
  static getConnectors(): IngestionConnector[] { return mockDataStore.connectors; }
  static getQualityRules(): DataQualityAssertion[] { return mockDataStore.qualityRules; }
}
