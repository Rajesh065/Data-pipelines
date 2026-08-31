export type UserRole = 'ADMIN' | 'DATA_ENGINEER' | 'ANALYTICS_ENGINEER' | 'DATA_SCIENTIST' | 'GOVERNANCE_OFFICER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  team: string;
  accessTier: string;
  createdAt: string;
}

export type PipelineStatus = 'ACTIVE' | 'PAUSED' | 'RUNNING' | 'FAILED' | 'SUCCESS';
export type ScheduleFrequency = 'HOURLY' | 'DAILY' | 'WEEKLY' | 'STREAMING_CONTINUOUS' | 'ON_DEMAND';

export interface DAGTaskNode {
  id: string;
  name: string;
  taskType: 'EXTRACT' | 'TRANSFORM' | 'VALIDATE' | 'LOAD' | 'NOTIFY';
  operator: string;
  dependsOn: string[];
  retryCount: number;
  timeoutSeconds: number;
}

export interface PipelineDAG {
  id: string;
  name: string;
  description: string;
  schedule: ScheduleFrequency;
  cronExpression?: string;
  sourceConnectorId: string;
  sinkConnectorId: string;
  tasks: DAGTaskNode[];
  status: PipelineStatus;
  lastRunTimestamp?: string;
  lastRunDurationSec?: number;
  recordsProcessedLastRun?: number;
  slaMinutes: number;
  ownerEmail: string;
}

export interface Connector {
  id: string;
  name: string;
  type: 'SOURCE' | 'SINK';
  protocol: 'POSTGRES' | 'SNOWFLAKE' | 'KAFKA' | 'S3_DATA_LAKE' | 'ICEBERG' | 'BIGQUERY' | 'MONGODB';
  hostEndpoint: string;
  databaseSchema?: string;
  batchSize: number;
  syncMode: 'INCREMENTAL_CDC' | 'FULL_SNAPSHOT' | 'STREAMING_EVENT';
  status: 'HEALTHY' | 'DEGRADED' | 'DISCONNECTED';
}

export interface TransformationRule {
  id: string;
  name: string;
  engine: 'DBT_SQL' | 'PYSPARK' | 'POLARS_DATAFRAME';
  targetModel: string;
  sqlQuerySnippet: string;
  materialization: 'VIEW' | 'TABLE' | 'INCREMENTAL';
  isIncremental: boolean;
}

export interface DataQualityAssertion {
  id: string;
  ruleName: string;
  tableName: string;
  columnName: string;
  assertionType: 'NOT_NULL' | 'UNIQUE_VALUES' | 'RANGE_THRESHOLD' | 'REGEX_MATCH' | 'SCHEMA_DRIFT';
  expectedConstraint: string;
  lastRunPassed: boolean;
  failedRowCount: number;
  severity: 'BLOCKING_CRITICAL' | 'WARNING';
}

export interface LineageEdge {
  id: string;
  sourceTable: string;
  sourceColumn: string;
  targetTable: string;
  targetColumn: string;
  transformationType: 'DIRECT_COPY' | 'AGGREGATION' | 'JOIN_DERIVED' | 'ENCRYPTED_MASK';
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
  pipelineId: string;
  pipelineName: string;
  alertType: 'SLA_BREACH' | 'QUALITY_CHECK_FAILED' | 'CONSUMER_LAG_HIGH' | 'TASK_CRASH';
  severity: 'P1_CRITICAL' | 'P2_HIGH' | 'P3_MODERATE';
  triggeredAt: string;
  status: 'TRIGGERED' | 'ACKNOWLEDGED' | 'RESOLVED';
  runbookUrl: string;
}
