import { User, PipelineDAG, Connector, TransformationRule, DataQualityAssertion, LineageEdge, StreamingMetrics, IncidentAlert } from './types';

export const mockDataStore = {
  users: [
    { id: 'usr-de-1', name: 'Rohan Sharma', email: 'rohan.sharma@dataflow.enterprise', role: 'DATA_ENGINEER' as const, team: 'Core ETL Infrastructure', accessTier: 'ADMIN_SUPERUSER', createdAt: '2025-01-10T08:00:00.000Z' },
    { id: 'usr-ae-1', name: 'Maya Lin', email: 'maya.lin@dataflow.enterprise', role: 'ANALYTICS_ENGINEER' as const, team: 'dbt Models & Marts', accessTier: 'ANALYTICS_POWER_USER', createdAt: '2025-02-15T09:00:00.000Z' }
  ],

  pipelines: [
    {
      id: 'pipe-101',
      name: 'Financial Transactions Daily Settlement ETL',
      description: 'Ingests high-throughput credit card settlement ledgers, deduplicates records, applies fx conversion, and loads to Snowflake warehouse.',
      schedule: 'HOURLY' as const,
      cronExpression: '0 * * * *',
      sourceConnectorId: 'conn-pg-01',
      sinkConnectorId: 'conn-sf-01',
      tasks: [
        { id: 't1', name: 'CDC Ingest Ledger', taskType: 'EXTRACT' as const, operator: 'PostgresCdcOperator', dependsOn: [], retryCount: 3, timeoutSeconds: 300 },
        { id: 't2', name: 'dbt FX Normalization', taskType: 'TRANSFORM' as const, operator: 'DbtModelOperator', dependsOn: ['t1'], retryCount: 2, timeoutSeconds: 600 },
        { id: 't3', name: 'Great Expectations Check', taskType: 'VALIDATE' as const, operator: 'DataQualityAssertionOperator', dependsOn: ['t2'], retryCount: 1, timeoutSeconds: 180 },
        { id: 't4', name: 'Snowflake Incremental Load', taskType: 'LOAD' as const, operator: 'SnowflakeUpsertOperator', dependsOn: ['t3'], retryCount: 3, timeoutSeconds: 400 }
      ],
      status: 'ACTIVE' as const,
      lastRunTimestamp: '2026-08-31T14:00:00.000Z',
      lastRunDurationSec: 142,
      recordsProcessedLastRun: 2450000,
      slaMinutes: 30,
      ownerEmail: 'rohan.sharma@dataflow.enterprise'
    },
    {
      id: 'pipe-102',
      name: 'Clickstream Real-Time Kafka Ingestion & Sessionization',
      description: 'Consumes real-time web telemetry events from Kafka, parses user clickstreams, detects bounce sessions, and streams to Iceberg data lake.',
      schedule: 'STREAMING_CONTINUOUS' as const,
      sourceConnectorId: 'conn-kf-01',
      sinkConnectorId: 'conn-s3-01',
      tasks: [
        { id: 'st1', name: 'Kafka Stream Consume', taskType: 'EXTRACT' as const, operator: 'KafkaStreamingConsumer', dependsOn: [], retryCount: 5, timeoutSeconds: 0 },
        { id: 'st2', name: 'PySpark Sessionizer', taskType: 'TRANSFORM' as const, operator: 'SparkStreamingJob', dependsOn: ['st1'], retryCount: 3, timeoutSeconds: 0 },
        { id: 'st3', name: 'Apache Iceberg Sink', taskType: 'LOAD' as const, operator: 'IcebergAppendOperator', dependsOn: ['st2'], retryCount: 3, timeoutSeconds: 0 }
      ],
      status: 'RUNNING' as const,
      lastRunTimestamp: '2026-08-31T14:45:00.000Z',
      lastRunDurationSec: 0,
      recordsProcessedLastRun: 18500000,
      slaMinutes: 5,
      ownerEmail: 'maya.lin@dataflow.enterprise'
    }
  ],

  connectors: [
    { id: 'conn-pg-01', name: 'Production OLTP Postgres Cluster', type: 'SOURCE' as const, protocol: 'POSTGRES' as const, hostEndpoint: 'pg-prod-us-east-1.internal:5432', databaseSchema: 'transactions_public', batchSize: 50000, syncMode: 'INCREMENTAL_CDC' as const, status: 'HEALTHY' as const },
    { id: 'conn-sf-01', name: 'Enterprise Snowflake Data Warehouse', type: 'SINK' as const, protocol: 'SNOWFLAKE' as const, hostEndpoint: 'xy12345.us-east-1.snowflakecomputing.com', databaseSchema: 'FINANCE_ANALYTICS_MART', batchSize: 100000, syncMode: 'INCREMENTAL_CDC' as const, status: 'HEALTHY' as const },
    { id: 'conn-kf-01', name: 'Apache Kafka Event Streaming Mesh', type: 'SOURCE' as const, protocol: 'KAFKA' as const, hostEndpoint: 'kafka-broker-mesh:9092', databaseSchema: 'telemetry.clickstream.raw', batchSize: 20000, syncMode: 'STREAMING_EVENT' as const, status: 'HEALTHY' as const },
    { id: 'conn-s3-01', name: 'AWS S3 Apache Iceberg Data Lake', type: 'SINK' as const, protocol: 'ICEBERG' as const, hostEndpoint: 's3://enterprise-data-lake-prod/iceberg/', databaseSchema: 'gold_analytics', batchSize: 250000, syncMode: 'STREAMING_EVENT' as const, status: 'HEALTHY' as const }
  ],

  transformations: [
    { id: 'tr-1', name: 'stg_financial_settlement_clearing', engine: 'DBT_SQL' as const, targetModel: 'analytics_mart.fact_settlements', sqlQuerySnippet: 'SELECT transaction_id, user_id, amount * fx_rate AS normalized_usd, settled_at FROM {{ ref("stg_raw_tx") }} WHERE status = "CLEARED"', materialization: 'INCREMENTAL' as const, isIncremental: true },
    { id: 'tr-2', name: 'pyspark_user_session_windowing', engine: 'PYSPARK' as const, targetModel: 'lake.user_sessions', sqlQuerySnippet: 'df.groupBy(window(col("timestamp"), "30 minutes"), "user_id").agg(count("event_id").alias("event_count"))', materialization: 'TABLE' as const, isIncremental: false }
  ],

  qualityAssertions: [
    { id: 'qa-1', ruleName: 'assert_transaction_id_not_null', tableName: 'fact_settlements', columnName: 'transaction_id', assertionType: 'NOT_NULL' as const, expectedConstraint: 'IS NOT NULL', lastRunPassed: true, failedRowCount: 0, severity: 'BLOCKING_CRITICAL' as const },
    { id: 'qa-2', ruleName: 'assert_positive_settlement_amount', tableName: 'fact_settlements', columnName: 'normalized_usd', assertionType: 'RANGE_THRESHOLD' as const, expectedConstraint: 'normalized_usd > 0.00', lastRunPassed: true, failedRowCount: 0, severity: 'BLOCKING_CRITICAL' as const }
  ],

  lineage: [
    { id: 'lin-1', sourceTable: 'transactions_raw', sourceColumn: 'raw_amount', targetTable: 'stg_financial_tx', targetColumn: 'amount', transformationType: 'DIRECT_COPY' as const },
    { id: 'lin-2', sourceTable: 'stg_financial_tx', sourceColumn: 'amount', targetTable: 'fact_settlements', targetColumn: 'normalized_usd', transformationType: 'AGGREGATION' as const }
  ],

  streamingTelemetry: [
    { topicName: 'telemetry.clickstream.raw', consumerLag: 42, eventsPerSecond: 12450, throughputMbPerSec: 18.4, deadLetterQueueCount: 0, avgLatencyMs: 14.2 },
    { topicName: 'finance.settlements.inbound', consumerLag: 0, eventsPerSecond: 3200, throughputMbPerSec: 4.8, deadLetterQueueCount: 0, avgLatencyMs: 8.5 }
  ],

  incidentAlerts: [
    { id: 'alt-01', pipelineId: 'pipe-101', pipelineName: 'Financial Transactions Daily Settlement ETL', alertType: 'SLA_BREACH' as const, severity: 'P2_HIGH' as const, triggeredAt: '2026-08-30T18:00:00.000Z', status: 'RESOLVED' as const, runbookUrl: 'https://wiki.dataflow.enterprise/runbooks/sla-breach-settlement' }
  ]
};
