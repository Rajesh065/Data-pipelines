import { User, DagPipeline, IngestionConnector, DataQualityAssertion } from './types';

export const mockDataStore: {
  users: User[];
  pipelines: DagPipeline[];
  connectors: IngestionConnector[];
  qualityRules: DataQualityAssertion[];
} = {
  users: [
    { id: 'usr-de-1', name: 'Sophia Kowalski', email: 'sophia.kowalski@dataflow.enterprise', role: 'DATA_ENGINEER', team: 'Core Lakehouse Infrastructure', accessTier: 'INFRA_ADMIN_TIER', createdAt: '2025-01-10T08:00:00.000Z' },
    { id: 'usr-de-2', name: 'Tate Armstrong', email: 'tate.armstrong@dataflow.enterprise', role: 'ANALYTICS_ENGINEER', team: 'dbt Transformations & Marts', accessTier: 'ANALYTICS_PRO_TIER', createdAt: '2025-01-15T09:00:00.000Z' }
  ],

  pipelines: [
    {
      id: 'dag-fin-settlement-01',
      name: 'Financial Real-Time Ledger Settlement & Clearing',
      domain: 'FINANCIAL_SETTLEMENT',
      scheduleInterval: 'CRON: */15 * * * *',
      tasksCount: 14,
      lastExecutionDurationSec: 184,
      recordsProcessedToday: 18420000,
      status: 'SUCCESS',
      slaTargetMinutes: 5,
      sourceConnector: 'PostgreSQL Core Banking (CDC Debezium)',
      targetWarehouse: 'Snowflake Analytics Financial Mart',
      upstreamDependencies: ['kafka_stream_ingest', 'dbt_incremental_ledger']
    },
    {
      id: 'dag-hl7-fhir-ingest-02',
      name: 'Clinical HL7 v2 / FHIR Observation ETL Stream',
      domain: 'HEALTHCARE_FHIR_INGEST',
      scheduleInterval: 'STREAMING: CONTINUOUS',
      tasksCount: 18,
      lastExecutionDurationSec: 42,
      recordsProcessedToday: 6240000,
      status: 'RUNNING',
      slaTargetMinutes: 2,
      sourceConnector: 'Apache Kafka Hospital Gateway',
      targetWarehouse: 'Apache Iceberg Clinical Lakehouse',
      upstreamDependencies: ['schema_validator', 'hipaa_pii_masker']
    },
    {
      id: 'dag-clickstream-enrich-03',
      name: 'Ecommerce Global Clickstream Sessionizer & Attribution',
      domain: 'ECOMMERCE_CLICKSTREAM',
      scheduleInterval: 'CRON: 0 * * * *',
      tasksCount: 12,
      lastExecutionDurationSec: 320,
      recordsProcessedToday: 45200000,
      status: 'SUCCESS',
      slaTargetMinutes: 10,
      sourceConnector: 'AWS S3 Raw Events Bucket',
      targetWarehouse: 'BigQuery Marketing Attribution Mart',
      upstreamDependencies: ['s3_parquet_compact', 'dbt_sessionize_window']
    }
  ],

  connectors: [
    { id: 'conn-pg-01', name: 'PostgreSQL Production CDC (Debezium)', connectorType: 'RELATIONAL_CDC', sourceSystem: 'prod-orders-db-cluster', targetTable: 'raw_orders_cdc', throughputRecordsSec: 14200, replicationLagMs: 85, status: 'ACTIVE_HEALTHY' },
    { id: 'conn-kafka-01', name: 'Apache Kafka Event Bus (Confluent)', connectorType: 'STREAMING_KAFKA', sourceSystem: 'telemetry-sensor-topics', targetTable: 'bronze_iot_telemetry', throughputRecordsSec: 88500, replicationLagMs: 140, status: 'ACTIVE_HEALTHY' },
    { id: 'conn-snow-01', name: 'Snowflake Enterprise Lakehouse Sink', connectorType: 'LAKEHOUSE_ICEBERG', sourceSystem: 'iceberg_gold_analytics', targetTable: 'fct_daily_settlement', throughputRecordsSec: 24000, replicationLagMs: 210, status: 'ACTIVE_HEALTHY' }
  ],

  qualityRules: [
    { assertionId: 'qa-01', pipelineId: 'dag-fin-settlement-01', ruleType: 'COLUMN_VALUES_NOT_NULL', targetColumn: 'transaction_id', expectedCondition: 'NULL_COUNT == 0', passRatePct: 100.0, failedRowsCount: 0, lastEvaluatedAt: '2026-08-31T22:30:00.000Z', status: 'PASSED' },
    { assertionId: 'qa-02', pipelineId: 'dag-fin-settlement-01', ruleType: 'REFERENTIAL_FK_INTEGRITY', targetColumn: 'customer_account_id', expectedCondition: 'EXISTS_IN(dim_accounts)', passRatePct: 99.98, failedRowsCount: 12, lastEvaluatedAt: '2026-08-31T22:30:00.000Z', status: 'WARNING' }
  ]
};
