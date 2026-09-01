export type UserRole = 'ADMIN' | 'DATA_ENGINEER' | 'ANALYTICS_ENGINEER' | 'MLOPS_ENGINEER' | 'DATA_GOVERNANCE_OFFICER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  team: string;
  accessTier: string;
  createdAt: string;
}

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
  connectorType: 'RELATIONAL_CDC' | 'STREAMING_KAFKA' | 'CLOUD_OBJECT_S3' | 'LAKEHOUSE_ICEBERG' | 'NOSQL_DOCUMENT';
  sourceSystem: string;
  targetTable: string;
  throughputRecordsSec: number;
  replicationLagMs: number;
  status: 'ACTIVE_HEALTHY' | 'SYNCING' | 'PAUSED' | 'DEGRADED';
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
  status: 'PASSED' | 'WARNING' | 'FAILED';
}
