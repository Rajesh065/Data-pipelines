export type UserRole = 'ADMIN' | 'DATA_ENGINEER' | 'ANALYTICS_ENGINEER' | 'DATA_SCIENTIST' | 'GOVERNANCE_OFFICER';

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
