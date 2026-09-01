export type DagRunStatus = 'RUNNING' | 'SUCCESS' | 'FAILED' | 'QUEUED' | 'PAUSED';

export interface DagPipeline {
  id: string;
  name: string;
  domain: string;
  scheduleInterval: string;
  tasksCount: number;
  lastExecutionDurationSec: number;
  recordsProcessedToday: number;
  status: DagRunStatus;
  slaTargetMinutes: number;
  sourceConnector: string;
  targetWarehouse: string;
  upstreamDependencies: string[];
}

export interface IngestionConnector {
  id: string;
  name: string;
  connectorType: string;
  sourceSystem: string;
  targetTable: string;
  throughputRecordsSec: number;
  replicationLagMs: number;
  status: string;
}

export interface DataQualityAssertion {
  assertionId: string;
  pipelineId: string;
  ruleType: string;
  targetColumn: string;
  expectedCondition: string;
  passRatePct: number;
  failedRowsCount: number;
  lastEvaluatedAt: string;
  status: string;
}
