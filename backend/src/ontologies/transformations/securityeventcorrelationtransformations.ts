/**
 * dbt SQL & Vectorized Transformation Model Registry: SecurityEventCorrelationTransformations
 * Domain Focus: Failed login velocity thresholds, brute-force attack windowing, and compromised credential correlation
 */

export interface TransformationModelSpec {
  transformId: string;
  modelName: string;
  category: string;
  sourceTables: string[];
  targetMartTable: string;
  materializationType: string;
  partitionColumn: string;
  clusterKeys: string[];
  preHookQueries: string[];
  postHookQueries: string[];
  sqlExpression: string;
  isOptimizedForSparkVectorization: boolean;
}

export const TRANSFORMATION_SEC_DATASET: TransformationModelSpec[] = [
  {
    transformId: 'TRSF-SEC-001',
    modelName: 'SecurityEventCorrelationTransformations Model v1',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_1',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_1',
      'GRANT SELECT ON analytics_mart.sec_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-002',
    modelName: 'SecurityEventCorrelationTransformations Model v2',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_2',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_2',
      'GRANT SELECT ON analytics_mart.sec_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-003',
    modelName: 'SecurityEventCorrelationTransformations Model v3',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_3',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_3',
      'GRANT SELECT ON analytics_mart.sec_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-004',
    modelName: 'SecurityEventCorrelationTransformations Model v4',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_4',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_4',
      'GRANT SELECT ON analytics_mart.sec_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-005',
    modelName: 'SecurityEventCorrelationTransformations Model v5',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_5',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_5',
      'GRANT SELECT ON analytics_mart.sec_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-006',
    modelName: 'SecurityEventCorrelationTransformations Model v6',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_6',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_6',
      'GRANT SELECT ON analytics_mart.sec_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-007',
    modelName: 'SecurityEventCorrelationTransformations Model v7',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_7',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_7',
      'GRANT SELECT ON analytics_mart.sec_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-008',
    modelName: 'SecurityEventCorrelationTransformations Model v8',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_8',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_8',
      'GRANT SELECT ON analytics_mart.sec_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-009',
    modelName: 'SecurityEventCorrelationTransformations Model v9',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_9',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_9',
      'GRANT SELECT ON analytics_mart.sec_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-010',
    modelName: 'SecurityEventCorrelationTransformations Model v10',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_10',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_10',
      'GRANT SELECT ON analytics_mart.sec_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-011',
    modelName: 'SecurityEventCorrelationTransformations Model v11',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_11',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_11',
      'GRANT SELECT ON analytics_mart.sec_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-012',
    modelName: 'SecurityEventCorrelationTransformations Model v12',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_12',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_12',
      'GRANT SELECT ON analytics_mart.sec_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-013',
    modelName: 'SecurityEventCorrelationTransformations Model v13',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_13',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_13',
      'GRANT SELECT ON analytics_mart.sec_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-014',
    modelName: 'SecurityEventCorrelationTransformations Model v14',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_14',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_14',
      'GRANT SELECT ON analytics_mart.sec_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-015',
    modelName: 'SecurityEventCorrelationTransformations Model v15',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_15',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_15',
      'GRANT SELECT ON analytics_mart.sec_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-016',
    modelName: 'SecurityEventCorrelationTransformations Model v16',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_16',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_16',
      'GRANT SELECT ON analytics_mart.sec_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-017',
    modelName: 'SecurityEventCorrelationTransformations Model v17',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_17',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_17',
      'GRANT SELECT ON analytics_mart.sec_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-018',
    modelName: 'SecurityEventCorrelationTransformations Model v18',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_18',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_18',
      'GRANT SELECT ON analytics_mart.sec_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-019',
    modelName: 'SecurityEventCorrelationTransformations Model v19',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_19',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_19',
      'GRANT SELECT ON analytics_mart.sec_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-020',
    modelName: 'SecurityEventCorrelationTransformations Model v20',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_20',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_20',
      'GRANT SELECT ON analytics_mart.sec_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-021',
    modelName: 'SecurityEventCorrelationTransformations Model v21',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_21',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_21',
      'GRANT SELECT ON analytics_mart.sec_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-022',
    modelName: 'SecurityEventCorrelationTransformations Model v22',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_22',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_22',
      'GRANT SELECT ON analytics_mart.sec_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-023',
    modelName: 'SecurityEventCorrelationTransformations Model v23',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_23',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_23',
      'GRANT SELECT ON analytics_mart.sec_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-024',
    modelName: 'SecurityEventCorrelationTransformations Model v24',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_24',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_24',
      'GRANT SELECT ON analytics_mart.sec_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-025',
    modelName: 'SecurityEventCorrelationTransformations Model v25',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_25',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_25',
      'GRANT SELECT ON analytics_mart.sec_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-026',
    modelName: 'SecurityEventCorrelationTransformations Model v26',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_26',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_26',
      'GRANT SELECT ON analytics_mart.sec_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-027',
    modelName: 'SecurityEventCorrelationTransformations Model v27',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_27',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_27',
      'GRANT SELECT ON analytics_mart.sec_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-028',
    modelName: 'SecurityEventCorrelationTransformations Model v28',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_28',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_28',
      'GRANT SELECT ON analytics_mart.sec_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-029',
    modelName: 'SecurityEventCorrelationTransformations Model v29',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_29',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_29',
      'GRANT SELECT ON analytics_mart.sec_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-030',
    modelName: 'SecurityEventCorrelationTransformations Model v30',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_0',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_0',
      'GRANT SELECT ON analytics_mart.sec_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-031',
    modelName: 'SecurityEventCorrelationTransformations Model v31',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_1',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_1',
      'GRANT SELECT ON analytics_mart.sec_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-032',
    modelName: 'SecurityEventCorrelationTransformations Model v32',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_2',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_2',
      'GRANT SELECT ON analytics_mart.sec_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-033',
    modelName: 'SecurityEventCorrelationTransformations Model v33',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_3',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_3',
      'GRANT SELECT ON analytics_mart.sec_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-034',
    modelName: 'SecurityEventCorrelationTransformations Model v34',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_4',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_4',
      'GRANT SELECT ON analytics_mart.sec_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-035',
    modelName: 'SecurityEventCorrelationTransformations Model v35',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_5',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_5',
      'GRANT SELECT ON analytics_mart.sec_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-036',
    modelName: 'SecurityEventCorrelationTransformations Model v36',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_6',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_6',
      'GRANT SELECT ON analytics_mart.sec_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-037',
    modelName: 'SecurityEventCorrelationTransformations Model v37',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_7',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_7',
      'GRANT SELECT ON analytics_mart.sec_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-038',
    modelName: 'SecurityEventCorrelationTransformations Model v38',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_8',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_8',
      'GRANT SELECT ON analytics_mart.sec_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-039',
    modelName: 'SecurityEventCorrelationTransformations Model v39',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_9',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_9',
      'GRANT SELECT ON analytics_mart.sec_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-040',
    modelName: 'SecurityEventCorrelationTransformations Model v40',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_10',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_10',
      'GRANT SELECT ON analytics_mart.sec_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-041',
    modelName: 'SecurityEventCorrelationTransformations Model v41',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_11',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_11',
      'GRANT SELECT ON analytics_mart.sec_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-042',
    modelName: 'SecurityEventCorrelationTransformations Model v42',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_12',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_12',
      'GRANT SELECT ON analytics_mart.sec_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-043',
    modelName: 'SecurityEventCorrelationTransformations Model v43',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_13',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_13',
      'GRANT SELECT ON analytics_mart.sec_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-044',
    modelName: 'SecurityEventCorrelationTransformations Model v44',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_14',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_14',
      'GRANT SELECT ON analytics_mart.sec_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-045',
    modelName: 'SecurityEventCorrelationTransformations Model v45',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_15',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_15',
      'GRANT SELECT ON analytics_mart.sec_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-046',
    modelName: 'SecurityEventCorrelationTransformations Model v46',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_16',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_16',
      'GRANT SELECT ON analytics_mart.sec_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-047',
    modelName: 'SecurityEventCorrelationTransformations Model v47',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_17',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_17',
      'GRANT SELECT ON analytics_mart.sec_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-048',
    modelName: 'SecurityEventCorrelationTransformations Model v48',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_18',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_18',
      'GRANT SELECT ON analytics_mart.sec_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-049',
    modelName: 'SecurityEventCorrelationTransformations Model v49',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_19',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_19',
      'GRANT SELECT ON analytics_mart.sec_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-050',
    modelName: 'SecurityEventCorrelationTransformations Model v50',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_20',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_20',
      'GRANT SELECT ON analytics_mart.sec_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-051',
    modelName: 'SecurityEventCorrelationTransformations Model v51',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_21',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_21',
      'GRANT SELECT ON analytics_mart.sec_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-052',
    modelName: 'SecurityEventCorrelationTransformations Model v52',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_22',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_22',
      'GRANT SELECT ON analytics_mart.sec_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-053',
    modelName: 'SecurityEventCorrelationTransformations Model v53',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_23',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_23',
      'GRANT SELECT ON analytics_mart.sec_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-054',
    modelName: 'SecurityEventCorrelationTransformations Model v54',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_24',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_24',
      'GRANT SELECT ON analytics_mart.sec_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-055',
    modelName: 'SecurityEventCorrelationTransformations Model v55',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_25',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_25',
      'GRANT SELECT ON analytics_mart.sec_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-056',
    modelName: 'SecurityEventCorrelationTransformations Model v56',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_26',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_26',
      'GRANT SELECT ON analytics_mart.sec_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-057',
    modelName: 'SecurityEventCorrelationTransformations Model v57',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_27',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_27',
      'GRANT SELECT ON analytics_mart.sec_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-058',
    modelName: 'SecurityEventCorrelationTransformations Model v58',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_28',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_28',
      'GRANT SELECT ON analytics_mart.sec_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-059',
    modelName: 'SecurityEventCorrelationTransformations Model v59',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_29',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_29',
      'GRANT SELECT ON analytics_mart.sec_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-060',
    modelName: 'SecurityEventCorrelationTransformations Model v60',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_0',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_0',
      'GRANT SELECT ON analytics_mart.sec_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-061',
    modelName: 'SecurityEventCorrelationTransformations Model v61',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_1',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_1',
      'GRANT SELECT ON analytics_mart.sec_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-062',
    modelName: 'SecurityEventCorrelationTransformations Model v62',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_2',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_2',
      'GRANT SELECT ON analytics_mart.sec_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-063',
    modelName: 'SecurityEventCorrelationTransformations Model v63',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_3',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_3',
      'GRANT SELECT ON analytics_mart.sec_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-064',
    modelName: 'SecurityEventCorrelationTransformations Model v64',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_4',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_4',
      'GRANT SELECT ON analytics_mart.sec_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-065',
    modelName: 'SecurityEventCorrelationTransformations Model v65',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_5',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_5',
      'GRANT SELECT ON analytics_mart.sec_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-066',
    modelName: 'SecurityEventCorrelationTransformations Model v66',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_6',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_6',
      'GRANT SELECT ON analytics_mart.sec_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-067',
    modelName: 'SecurityEventCorrelationTransformations Model v67',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_7',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_7',
      'GRANT SELECT ON analytics_mart.sec_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-068',
    modelName: 'SecurityEventCorrelationTransformations Model v68',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_8',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_8',
      'GRANT SELECT ON analytics_mart.sec_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-069',
    modelName: 'SecurityEventCorrelationTransformations Model v69',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_9',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_9',
      'GRANT SELECT ON analytics_mart.sec_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-070',
    modelName: 'SecurityEventCorrelationTransformations Model v70',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_10',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_10',
      'GRANT SELECT ON analytics_mart.sec_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-071',
    modelName: 'SecurityEventCorrelationTransformations Model v71',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_11',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_11',
      'GRANT SELECT ON analytics_mart.sec_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-072',
    modelName: 'SecurityEventCorrelationTransformations Model v72',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_12',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_12',
      'GRANT SELECT ON analytics_mart.sec_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-073',
    modelName: 'SecurityEventCorrelationTransformations Model v73',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_13',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_13',
      'GRANT SELECT ON analytics_mart.sec_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-074',
    modelName: 'SecurityEventCorrelationTransformations Model v74',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_14',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_14',
      'GRANT SELECT ON analytics_mart.sec_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-075',
    modelName: 'SecurityEventCorrelationTransformations Model v75',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_15',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_15',
      'GRANT SELECT ON analytics_mart.sec_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-076',
    modelName: 'SecurityEventCorrelationTransformations Model v76',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_16',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_16',
      'GRANT SELECT ON analytics_mart.sec_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-077',
    modelName: 'SecurityEventCorrelationTransformations Model v77',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_17',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_17',
      'GRANT SELECT ON analytics_mart.sec_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-078',
    modelName: 'SecurityEventCorrelationTransformations Model v78',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_18',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_18',
      'GRANT SELECT ON analytics_mart.sec_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-079',
    modelName: 'SecurityEventCorrelationTransformations Model v79',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_19',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_19',
      'GRANT SELECT ON analytics_mart.sec_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-080',
    modelName: 'SecurityEventCorrelationTransformations Model v80',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_20',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_20',
      'GRANT SELECT ON analytics_mart.sec_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-081',
    modelName: 'SecurityEventCorrelationTransformations Model v81',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_21',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_21',
      'GRANT SELECT ON analytics_mart.sec_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-082',
    modelName: 'SecurityEventCorrelationTransformations Model v82',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_22',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_22',
      'GRANT SELECT ON analytics_mart.sec_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-083',
    modelName: 'SecurityEventCorrelationTransformations Model v83',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_23',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_23',
      'GRANT SELECT ON analytics_mart.sec_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-084',
    modelName: 'SecurityEventCorrelationTransformations Model v84',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_24',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_24',
      'GRANT SELECT ON analytics_mart.sec_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-085',
    modelName: 'SecurityEventCorrelationTransformations Model v85',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_25',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_25',
      'GRANT SELECT ON analytics_mart.sec_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-086',
    modelName: 'SecurityEventCorrelationTransformations Model v86',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_26',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_26',
      'GRANT SELECT ON analytics_mart.sec_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-087',
    modelName: 'SecurityEventCorrelationTransformations Model v87',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_27',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_27',
      'GRANT SELECT ON analytics_mart.sec_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-088',
    modelName: 'SecurityEventCorrelationTransformations Model v88',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_28',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_28',
      'GRANT SELECT ON analytics_mart.sec_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-089',
    modelName: 'SecurityEventCorrelationTransformations Model v89',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_29',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_29',
      'GRANT SELECT ON analytics_mart.sec_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-090',
    modelName: 'SecurityEventCorrelationTransformations Model v90',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_0',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_0',
      'GRANT SELECT ON analytics_mart.sec_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-091',
    modelName: 'SecurityEventCorrelationTransformations Model v91',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_1',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_1',
      'GRANT SELECT ON analytics_mart.sec_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-092',
    modelName: 'SecurityEventCorrelationTransformations Model v92',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_2',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_2',
      'GRANT SELECT ON analytics_mart.sec_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-093',
    modelName: 'SecurityEventCorrelationTransformations Model v93',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_3',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_3',
      'GRANT SELECT ON analytics_mart.sec_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-094',
    modelName: 'SecurityEventCorrelationTransformations Model v94',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_4',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_4',
      'GRANT SELECT ON analytics_mart.sec_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-095',
    modelName: 'SecurityEventCorrelationTransformations Model v95',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_5',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_5',
      'GRANT SELECT ON analytics_mart.sec_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-096',
    modelName: 'SecurityEventCorrelationTransformations Model v96',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_6',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_6',
      'GRANT SELECT ON analytics_mart.sec_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-097',
    modelName: 'SecurityEventCorrelationTransformations Model v97',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_7',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_7',
      'GRANT SELECT ON analytics_mart.sec_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-098',
    modelName: 'SecurityEventCorrelationTransformations Model v98',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_8',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_8',
      'GRANT SELECT ON analytics_mart.sec_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-099',
    modelName: 'SecurityEventCorrelationTransformations Model v99',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_9',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_9',
      'GRANT SELECT ON analytics_mart.sec_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-100',
    modelName: 'SecurityEventCorrelationTransformations Model v100',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_10',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_10',
      'GRANT SELECT ON analytics_mart.sec_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-101',
    modelName: 'SecurityEventCorrelationTransformations Model v101',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_11',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_11',
      'GRANT SELECT ON analytics_mart.sec_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-102',
    modelName: 'SecurityEventCorrelationTransformations Model v102',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_12',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_12',
      'GRANT SELECT ON analytics_mart.sec_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-103',
    modelName: 'SecurityEventCorrelationTransformations Model v103',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_13',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_13',
      'GRANT SELECT ON analytics_mart.sec_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-104',
    modelName: 'SecurityEventCorrelationTransformations Model v104',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_14',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_14',
      'GRANT SELECT ON analytics_mart.sec_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-105',
    modelName: 'SecurityEventCorrelationTransformations Model v105',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_15',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_15',
      'GRANT SELECT ON analytics_mart.sec_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-106',
    modelName: 'SecurityEventCorrelationTransformations Model v106',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_16',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_16',
      'GRANT SELECT ON analytics_mart.sec_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-107',
    modelName: 'SecurityEventCorrelationTransformations Model v107',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_17',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_17',
      'GRANT SELECT ON analytics_mart.sec_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-108',
    modelName: 'SecurityEventCorrelationTransformations Model v108',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_18',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_18',
      'GRANT SELECT ON analytics_mart.sec_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-109',
    modelName: 'SecurityEventCorrelationTransformations Model v109',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_19',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_19',
      'GRANT SELECT ON analytics_mart.sec_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-110',
    modelName: 'SecurityEventCorrelationTransformations Model v110',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_20',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_20',
      'GRANT SELECT ON analytics_mart.sec_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-111',
    modelName: 'SecurityEventCorrelationTransformations Model v111',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_21',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_21',
      'GRANT SELECT ON analytics_mart.sec_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-112',
    modelName: 'SecurityEventCorrelationTransformations Model v112',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_22',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_22',
      'GRANT SELECT ON analytics_mart.sec_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-113',
    modelName: 'SecurityEventCorrelationTransformations Model v113',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_23',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_23',
      'GRANT SELECT ON analytics_mart.sec_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-114',
    modelName: 'SecurityEventCorrelationTransformations Model v114',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_24',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_24',
      'GRANT SELECT ON analytics_mart.sec_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-115',
    modelName: 'SecurityEventCorrelationTransformations Model v115',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_25',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_25',
      'GRANT SELECT ON analytics_mart.sec_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-116',
    modelName: 'SecurityEventCorrelationTransformations Model v116',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_26',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_26',
      'GRANT SELECT ON analytics_mart.sec_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-117',
    modelName: 'SecurityEventCorrelationTransformations Model v117',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_27',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_27',
      'GRANT SELECT ON analytics_mart.sec_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-118',
    modelName: 'SecurityEventCorrelationTransformations Model v118',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_28',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_28',
      'GRANT SELECT ON analytics_mart.sec_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-119',
    modelName: 'SecurityEventCorrelationTransformations Model v119',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_29',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_29',
      'GRANT SELECT ON analytics_mart.sec_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-120',
    modelName: 'SecurityEventCorrelationTransformations Model v120',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_0',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_0',
      'GRANT SELECT ON analytics_mart.sec_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-121',
    modelName: 'SecurityEventCorrelationTransformations Model v121',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_1',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_1',
      'GRANT SELECT ON analytics_mart.sec_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-122',
    modelName: 'SecurityEventCorrelationTransformations Model v122',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_2',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_2',
      'GRANT SELECT ON analytics_mart.sec_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-123',
    modelName: 'SecurityEventCorrelationTransformations Model v123',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_3',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_3',
      'GRANT SELECT ON analytics_mart.sec_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-124',
    modelName: 'SecurityEventCorrelationTransformations Model v124',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_4',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_4',
      'GRANT SELECT ON analytics_mart.sec_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-125',
    modelName: 'SecurityEventCorrelationTransformations Model v125',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_5',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_5',
      'GRANT SELECT ON analytics_mart.sec_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-126',
    modelName: 'SecurityEventCorrelationTransformations Model v126',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_6',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_6',
      'GRANT SELECT ON analytics_mart.sec_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-127',
    modelName: 'SecurityEventCorrelationTransformations Model v127',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_7',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_7',
      'GRANT SELECT ON analytics_mart.sec_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-128',
    modelName: 'SecurityEventCorrelationTransformations Model v128',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_8',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_8',
      'GRANT SELECT ON analytics_mart.sec_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-129',
    modelName: 'SecurityEventCorrelationTransformations Model v129',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_9',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_9',
      'GRANT SELECT ON analytics_mart.sec_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-130',
    modelName: 'SecurityEventCorrelationTransformations Model v130',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_10',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_10',
      'GRANT SELECT ON analytics_mart.sec_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-131',
    modelName: 'SecurityEventCorrelationTransformations Model v131',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_11',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_11',
      'GRANT SELECT ON analytics_mart.sec_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-132',
    modelName: 'SecurityEventCorrelationTransformations Model v132',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_12',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_12',
      'GRANT SELECT ON analytics_mart.sec_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-133',
    modelName: 'SecurityEventCorrelationTransformations Model v133',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_13',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_13',
      'GRANT SELECT ON analytics_mart.sec_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-134',
    modelName: 'SecurityEventCorrelationTransformations Model v134',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_14',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_14',
      'GRANT SELECT ON analytics_mart.sec_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-135',
    modelName: 'SecurityEventCorrelationTransformations Model v135',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_15',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_15',
      'GRANT SELECT ON analytics_mart.sec_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-136',
    modelName: 'SecurityEventCorrelationTransformations Model v136',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_16',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_16',
      'GRANT SELECT ON analytics_mart.sec_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-137',
    modelName: 'SecurityEventCorrelationTransformations Model v137',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_17',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_17',
      'GRANT SELECT ON analytics_mart.sec_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-138',
    modelName: 'SecurityEventCorrelationTransformations Model v138',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_18',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_18',
      'GRANT SELECT ON analytics_mart.sec_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-139',
    modelName: 'SecurityEventCorrelationTransformations Model v139',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_19',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_19',
      'GRANT SELECT ON analytics_mart.sec_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-140',
    modelName: 'SecurityEventCorrelationTransformations Model v140',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_20',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_20',
      'GRANT SELECT ON analytics_mart.sec_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-141',
    modelName: 'SecurityEventCorrelationTransformations Model v141',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_21',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_21',
      'GRANT SELECT ON analytics_mart.sec_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-142',
    modelName: 'SecurityEventCorrelationTransformations Model v142',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_22',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_22',
      'GRANT SELECT ON analytics_mart.sec_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-143',
    modelName: 'SecurityEventCorrelationTransformations Model v143',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_23',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_23',
      'GRANT SELECT ON analytics_mart.sec_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-144',
    modelName: 'SecurityEventCorrelationTransformations Model v144',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_24',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_24',
      'GRANT SELECT ON analytics_mart.sec_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-145',
    modelName: 'SecurityEventCorrelationTransformations Model v145',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_25',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_25',
      'GRANT SELECT ON analytics_mart.sec_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-146',
    modelName: 'SecurityEventCorrelationTransformations Model v146',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_26',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_26',
      'GRANT SELECT ON analytics_mart.sec_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-147',
    modelName: 'SecurityEventCorrelationTransformations Model v147',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_27',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_27',
      'GRANT SELECT ON analytics_mart.sec_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-148',
    modelName: 'SecurityEventCorrelationTransformations Model v148',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_28',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_28',
      'GRANT SELECT ON analytics_mart.sec_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-149',
    modelName: 'SecurityEventCorrelationTransformations Model v149',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_29',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_29',
      'GRANT SELECT ON analytics_mart.sec_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-150',
    modelName: 'SecurityEventCorrelationTransformations Model v150',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_0',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_0',
      'GRANT SELECT ON analytics_mart.sec_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-151',
    modelName: 'SecurityEventCorrelationTransformations Model v151',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_1',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_1',
      'GRANT SELECT ON analytics_mart.sec_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-152',
    modelName: 'SecurityEventCorrelationTransformations Model v152',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_2',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_2',
      'GRANT SELECT ON analytics_mart.sec_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-153',
    modelName: 'SecurityEventCorrelationTransformations Model v153',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_3',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_3',
      'GRANT SELECT ON analytics_mart.sec_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-154',
    modelName: 'SecurityEventCorrelationTransformations Model v154',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_4',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_4',
      'GRANT SELECT ON analytics_mart.sec_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-155',
    modelName: 'SecurityEventCorrelationTransformations Model v155',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_5',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_5',
      'GRANT SELECT ON analytics_mart.sec_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-156',
    modelName: 'SecurityEventCorrelationTransformations Model v156',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_6',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_6',
      'GRANT SELECT ON analytics_mart.sec_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-157',
    modelName: 'SecurityEventCorrelationTransformations Model v157',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_7',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_7',
      'GRANT SELECT ON analytics_mart.sec_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-158',
    modelName: 'SecurityEventCorrelationTransformations Model v158',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_8',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_8',
      'GRANT SELECT ON analytics_mart.sec_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-159',
    modelName: 'SecurityEventCorrelationTransformations Model v159',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_9',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_9',
      'GRANT SELECT ON analytics_mart.sec_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-160',
    modelName: 'SecurityEventCorrelationTransformations Model v160',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_10',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_10',
      'GRANT SELECT ON analytics_mart.sec_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-161',
    modelName: 'SecurityEventCorrelationTransformations Model v161',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_11',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_11',
      'GRANT SELECT ON analytics_mart.sec_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-162',
    modelName: 'SecurityEventCorrelationTransformations Model v162',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_12',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_12',
      'GRANT SELECT ON analytics_mart.sec_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-163',
    modelName: 'SecurityEventCorrelationTransformations Model v163',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_13',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_13',
      'GRANT SELECT ON analytics_mart.sec_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-164',
    modelName: 'SecurityEventCorrelationTransformations Model v164',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_14',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_14',
      'GRANT SELECT ON analytics_mart.sec_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-165',
    modelName: 'SecurityEventCorrelationTransformations Model v165',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_15',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_15',
      'GRANT SELECT ON analytics_mart.sec_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-166',
    modelName: 'SecurityEventCorrelationTransformations Model v166',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_16',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_16',
      'GRANT SELECT ON analytics_mart.sec_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-167',
    modelName: 'SecurityEventCorrelationTransformations Model v167',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_17',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_17',
      'GRANT SELECT ON analytics_mart.sec_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-168',
    modelName: 'SecurityEventCorrelationTransformations Model v168',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_18',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_18',
      'GRANT SELECT ON analytics_mart.sec_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-169',
    modelName: 'SecurityEventCorrelationTransformations Model v169',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_19',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_19',
      'GRANT SELECT ON analytics_mart.sec_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-170',
    modelName: 'SecurityEventCorrelationTransformations Model v170',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_20',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_20',
      'GRANT SELECT ON analytics_mart.sec_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-171',
    modelName: 'SecurityEventCorrelationTransformations Model v171',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_21',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_21',
      'GRANT SELECT ON analytics_mart.sec_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-172',
    modelName: 'SecurityEventCorrelationTransformations Model v172',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_22',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_22',
      'GRANT SELECT ON analytics_mart.sec_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-173',
    modelName: 'SecurityEventCorrelationTransformations Model v173',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_23',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_23',
      'GRANT SELECT ON analytics_mart.sec_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-174',
    modelName: 'SecurityEventCorrelationTransformations Model v174',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_24',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_24',
      'GRANT SELECT ON analytics_mart.sec_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-175',
    modelName: 'SecurityEventCorrelationTransformations Model v175',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_25',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_25',
      'GRANT SELECT ON analytics_mart.sec_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-176',
    modelName: 'SecurityEventCorrelationTransformations Model v176',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_26',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_26',
      'GRANT SELECT ON analytics_mart.sec_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-177',
    modelName: 'SecurityEventCorrelationTransformations Model v177',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_27',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_27',
      'GRANT SELECT ON analytics_mart.sec_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-178',
    modelName: 'SecurityEventCorrelationTransformations Model v178',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_28',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_28',
      'GRANT SELECT ON analytics_mart.sec_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-179',
    modelName: 'SecurityEventCorrelationTransformations Model v179',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_29',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_29',
      'GRANT SELECT ON analytics_mart.sec_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-180',
    modelName: 'SecurityEventCorrelationTransformations Model v180',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_0',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_0',
      'GRANT SELECT ON analytics_mart.sec_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-181',
    modelName: 'SecurityEventCorrelationTransformations Model v181',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_1',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_1',
      'GRANT SELECT ON analytics_mart.sec_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-182',
    modelName: 'SecurityEventCorrelationTransformations Model v182',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_2',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_2',
      'GRANT SELECT ON analytics_mart.sec_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-183',
    modelName: 'SecurityEventCorrelationTransformations Model v183',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_3',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_3',
      'GRANT SELECT ON analytics_mart.sec_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-184',
    modelName: 'SecurityEventCorrelationTransformations Model v184',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_4',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_4',
      'GRANT SELECT ON analytics_mart.sec_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-185',
    modelName: 'SecurityEventCorrelationTransformations Model v185',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_5',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_5',
      'GRANT SELECT ON analytics_mart.sec_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-186',
    modelName: 'SecurityEventCorrelationTransformations Model v186',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.sec_fact_6',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_6',
      'GRANT SELECT ON analytics_mart.sec_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-187',
    modelName: 'SecurityEventCorrelationTransformations Model v187',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.sec_fact_7',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_7',
      'GRANT SELECT ON analytics_mart.sec_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-188',
    modelName: 'SecurityEventCorrelationTransformations Model v188',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.sec_fact_8',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_8',
      'GRANT SELECT ON analytics_mart.sec_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-189',
    modelName: 'SecurityEventCorrelationTransformations Model v189',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.sec_fact_9',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_9',
      'GRANT SELECT ON analytics_mart.sec_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-190',
    modelName: 'SecurityEventCorrelationTransformations Model v190',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.sec_fact_10',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_10',
      'GRANT SELECT ON analytics_mart.sec_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-191',
    modelName: 'SecurityEventCorrelationTransformations Model v191',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.sec_fact_11',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_11',
      'GRANT SELECT ON analytics_mart.sec_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-192',
    modelName: 'SecurityEventCorrelationTransformations Model v192',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.sec_fact_12',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_12',
      'GRANT SELECT ON analytics_mart.sec_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-193',
    modelName: 'SecurityEventCorrelationTransformations Model v193',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.sec_fact_13',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_13',
      'GRANT SELECT ON analytics_mart.sec_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-194',
    modelName: 'SecurityEventCorrelationTransformations Model v194',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.sec_fact_14',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_14',
      'GRANT SELECT ON analytics_mart.sec_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-195',
    modelName: 'SecurityEventCorrelationTransformations Model v195',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.sec_fact_15',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_15',
      'GRANT SELECT ON analytics_mart.sec_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-196',
    modelName: 'SecurityEventCorrelationTransformations Model v196',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.sec_fact_16',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_16',
      'GRANT SELECT ON analytics_mart.sec_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-197',
    modelName: 'SecurityEventCorrelationTransformations Model v197',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.sec_fact_17',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_17',
      'GRANT SELECT ON analytics_mart.sec_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-198',
    modelName: 'SecurityEventCorrelationTransformations Model v198',
    category: 'Failed login velocity thresholds',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.sec_fact_18',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_18',
      'GRANT SELECT ON analytics_mart.sec_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-199',
    modelName: 'SecurityEventCorrelationTransformations Model v199',
    category: 'brute-force attack windowing',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.sec_fact_19',
    materializationType: 'TABLE',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_19',
      'GRANT SELECT ON analytics_mart.sec_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-SEC-200',
    modelName: 'SecurityEventCorrelationTransformations Model v200',
    category: 'and compromised credential correlation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.sec_fact_20',
    materializationType: 'INCREMENTAL',
    partitionColumn: 'event_date',
    clusterKeys: [
      'tenant_id',
      'entity_id'
    ],
    preHookQueries: [
      'SET timezone = "UTC"',
      'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'
    ],
    postHookQueries: [
      'ANALYZE analytics_mart.sec_fact_20',
      'GRANT SELECT ON analytics_mart.sec_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  }
];
