/**
 * dbt SQL & Vectorized Transformation Model Registry: CustomerLifecycleMetricsTransformations
 * Domain Focus: Churn probability scoring, cohort retention matrix generation, and customer lifetime value (LTV) decile segmentation
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

export const TRANSFORMATION_CLM_DATASET: TransformationModelSpec[] = [
  {
    transformId: 'TRSF-CLM-001',
    modelName: 'CustomerLifecycleMetricsTransformations Model v1',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_1',
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
      'ANALYZE analytics_mart.clm_fact_1',
      'GRANT SELECT ON analytics_mart.clm_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-002',
    modelName: 'CustomerLifecycleMetricsTransformations Model v2',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_2',
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
      'ANALYZE analytics_mart.clm_fact_2',
      'GRANT SELECT ON analytics_mart.clm_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-003',
    modelName: 'CustomerLifecycleMetricsTransformations Model v3',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_3',
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
      'ANALYZE analytics_mart.clm_fact_3',
      'GRANT SELECT ON analytics_mart.clm_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-004',
    modelName: 'CustomerLifecycleMetricsTransformations Model v4',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_4',
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
      'ANALYZE analytics_mart.clm_fact_4',
      'GRANT SELECT ON analytics_mart.clm_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-005',
    modelName: 'CustomerLifecycleMetricsTransformations Model v5',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_5',
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
      'ANALYZE analytics_mart.clm_fact_5',
      'GRANT SELECT ON analytics_mart.clm_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-006',
    modelName: 'CustomerLifecycleMetricsTransformations Model v6',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_6',
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
      'ANALYZE analytics_mart.clm_fact_6',
      'GRANT SELECT ON analytics_mart.clm_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-007',
    modelName: 'CustomerLifecycleMetricsTransformations Model v7',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_7',
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
      'ANALYZE analytics_mart.clm_fact_7',
      'GRANT SELECT ON analytics_mart.clm_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-008',
    modelName: 'CustomerLifecycleMetricsTransformations Model v8',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_8',
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
      'ANALYZE analytics_mart.clm_fact_8',
      'GRANT SELECT ON analytics_mart.clm_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-009',
    modelName: 'CustomerLifecycleMetricsTransformations Model v9',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_9',
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
      'ANALYZE analytics_mart.clm_fact_9',
      'GRANT SELECT ON analytics_mart.clm_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-010',
    modelName: 'CustomerLifecycleMetricsTransformations Model v10',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_10',
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
      'ANALYZE analytics_mart.clm_fact_10',
      'GRANT SELECT ON analytics_mart.clm_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-011',
    modelName: 'CustomerLifecycleMetricsTransformations Model v11',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_11',
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
      'ANALYZE analytics_mart.clm_fact_11',
      'GRANT SELECT ON analytics_mart.clm_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-012',
    modelName: 'CustomerLifecycleMetricsTransformations Model v12',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_12',
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
      'ANALYZE analytics_mart.clm_fact_12',
      'GRANT SELECT ON analytics_mart.clm_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-013',
    modelName: 'CustomerLifecycleMetricsTransformations Model v13',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_13',
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
      'ANALYZE analytics_mart.clm_fact_13',
      'GRANT SELECT ON analytics_mart.clm_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-014',
    modelName: 'CustomerLifecycleMetricsTransformations Model v14',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_14',
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
      'ANALYZE analytics_mart.clm_fact_14',
      'GRANT SELECT ON analytics_mart.clm_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-015',
    modelName: 'CustomerLifecycleMetricsTransformations Model v15',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_15',
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
      'ANALYZE analytics_mart.clm_fact_15',
      'GRANT SELECT ON analytics_mart.clm_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-016',
    modelName: 'CustomerLifecycleMetricsTransformations Model v16',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_16',
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
      'ANALYZE analytics_mart.clm_fact_16',
      'GRANT SELECT ON analytics_mart.clm_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-017',
    modelName: 'CustomerLifecycleMetricsTransformations Model v17',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_17',
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
      'ANALYZE analytics_mart.clm_fact_17',
      'GRANT SELECT ON analytics_mart.clm_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-018',
    modelName: 'CustomerLifecycleMetricsTransformations Model v18',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_18',
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
      'ANALYZE analytics_mart.clm_fact_18',
      'GRANT SELECT ON analytics_mart.clm_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-019',
    modelName: 'CustomerLifecycleMetricsTransformations Model v19',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_19',
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
      'ANALYZE analytics_mart.clm_fact_19',
      'GRANT SELECT ON analytics_mart.clm_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-020',
    modelName: 'CustomerLifecycleMetricsTransformations Model v20',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_20',
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
      'ANALYZE analytics_mart.clm_fact_20',
      'GRANT SELECT ON analytics_mart.clm_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-021',
    modelName: 'CustomerLifecycleMetricsTransformations Model v21',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_21',
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
      'ANALYZE analytics_mart.clm_fact_21',
      'GRANT SELECT ON analytics_mart.clm_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-022',
    modelName: 'CustomerLifecycleMetricsTransformations Model v22',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_22',
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
      'ANALYZE analytics_mart.clm_fact_22',
      'GRANT SELECT ON analytics_mart.clm_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-023',
    modelName: 'CustomerLifecycleMetricsTransformations Model v23',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_23',
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
      'ANALYZE analytics_mart.clm_fact_23',
      'GRANT SELECT ON analytics_mart.clm_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-024',
    modelName: 'CustomerLifecycleMetricsTransformations Model v24',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_24',
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
      'ANALYZE analytics_mart.clm_fact_24',
      'GRANT SELECT ON analytics_mart.clm_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-025',
    modelName: 'CustomerLifecycleMetricsTransformations Model v25',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_25',
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
      'ANALYZE analytics_mart.clm_fact_25',
      'GRANT SELECT ON analytics_mart.clm_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-026',
    modelName: 'CustomerLifecycleMetricsTransformations Model v26',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_26',
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
      'ANALYZE analytics_mart.clm_fact_26',
      'GRANT SELECT ON analytics_mart.clm_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-027',
    modelName: 'CustomerLifecycleMetricsTransformations Model v27',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_27',
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
      'ANALYZE analytics_mart.clm_fact_27',
      'GRANT SELECT ON analytics_mart.clm_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-028',
    modelName: 'CustomerLifecycleMetricsTransformations Model v28',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_28',
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
      'ANALYZE analytics_mart.clm_fact_28',
      'GRANT SELECT ON analytics_mart.clm_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-029',
    modelName: 'CustomerLifecycleMetricsTransformations Model v29',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_29',
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
      'ANALYZE analytics_mart.clm_fact_29',
      'GRANT SELECT ON analytics_mart.clm_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-030',
    modelName: 'CustomerLifecycleMetricsTransformations Model v30',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_0',
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
      'ANALYZE analytics_mart.clm_fact_0',
      'GRANT SELECT ON analytics_mart.clm_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-031',
    modelName: 'CustomerLifecycleMetricsTransformations Model v31',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_1',
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
      'ANALYZE analytics_mart.clm_fact_1',
      'GRANT SELECT ON analytics_mart.clm_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-032',
    modelName: 'CustomerLifecycleMetricsTransformations Model v32',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_2',
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
      'ANALYZE analytics_mart.clm_fact_2',
      'GRANT SELECT ON analytics_mart.clm_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-033',
    modelName: 'CustomerLifecycleMetricsTransformations Model v33',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_3',
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
      'ANALYZE analytics_mart.clm_fact_3',
      'GRANT SELECT ON analytics_mart.clm_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-034',
    modelName: 'CustomerLifecycleMetricsTransformations Model v34',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_4',
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
      'ANALYZE analytics_mart.clm_fact_4',
      'GRANT SELECT ON analytics_mart.clm_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-035',
    modelName: 'CustomerLifecycleMetricsTransformations Model v35',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_5',
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
      'ANALYZE analytics_mart.clm_fact_5',
      'GRANT SELECT ON analytics_mart.clm_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-036',
    modelName: 'CustomerLifecycleMetricsTransformations Model v36',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_6',
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
      'ANALYZE analytics_mart.clm_fact_6',
      'GRANT SELECT ON analytics_mart.clm_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-037',
    modelName: 'CustomerLifecycleMetricsTransformations Model v37',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_7',
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
      'ANALYZE analytics_mart.clm_fact_7',
      'GRANT SELECT ON analytics_mart.clm_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-038',
    modelName: 'CustomerLifecycleMetricsTransformations Model v38',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_8',
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
      'ANALYZE analytics_mart.clm_fact_8',
      'GRANT SELECT ON analytics_mart.clm_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-039',
    modelName: 'CustomerLifecycleMetricsTransformations Model v39',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_9',
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
      'ANALYZE analytics_mart.clm_fact_9',
      'GRANT SELECT ON analytics_mart.clm_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-040',
    modelName: 'CustomerLifecycleMetricsTransformations Model v40',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_10',
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
      'ANALYZE analytics_mart.clm_fact_10',
      'GRANT SELECT ON analytics_mart.clm_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-041',
    modelName: 'CustomerLifecycleMetricsTransformations Model v41',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_11',
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
      'ANALYZE analytics_mart.clm_fact_11',
      'GRANT SELECT ON analytics_mart.clm_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-042',
    modelName: 'CustomerLifecycleMetricsTransformations Model v42',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_12',
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
      'ANALYZE analytics_mart.clm_fact_12',
      'GRANT SELECT ON analytics_mart.clm_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-043',
    modelName: 'CustomerLifecycleMetricsTransformations Model v43',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_13',
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
      'ANALYZE analytics_mart.clm_fact_13',
      'GRANT SELECT ON analytics_mart.clm_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-044',
    modelName: 'CustomerLifecycleMetricsTransformations Model v44',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_14',
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
      'ANALYZE analytics_mart.clm_fact_14',
      'GRANT SELECT ON analytics_mart.clm_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-045',
    modelName: 'CustomerLifecycleMetricsTransformations Model v45',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_15',
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
      'ANALYZE analytics_mart.clm_fact_15',
      'GRANT SELECT ON analytics_mart.clm_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-046',
    modelName: 'CustomerLifecycleMetricsTransformations Model v46',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_16',
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
      'ANALYZE analytics_mart.clm_fact_16',
      'GRANT SELECT ON analytics_mart.clm_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-047',
    modelName: 'CustomerLifecycleMetricsTransformations Model v47',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_17',
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
      'ANALYZE analytics_mart.clm_fact_17',
      'GRANT SELECT ON analytics_mart.clm_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-048',
    modelName: 'CustomerLifecycleMetricsTransformations Model v48',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_18',
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
      'ANALYZE analytics_mart.clm_fact_18',
      'GRANT SELECT ON analytics_mart.clm_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-049',
    modelName: 'CustomerLifecycleMetricsTransformations Model v49',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_19',
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
      'ANALYZE analytics_mart.clm_fact_19',
      'GRANT SELECT ON analytics_mart.clm_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-050',
    modelName: 'CustomerLifecycleMetricsTransformations Model v50',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_20',
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
      'ANALYZE analytics_mart.clm_fact_20',
      'GRANT SELECT ON analytics_mart.clm_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-051',
    modelName: 'CustomerLifecycleMetricsTransformations Model v51',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_21',
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
      'ANALYZE analytics_mart.clm_fact_21',
      'GRANT SELECT ON analytics_mart.clm_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-052',
    modelName: 'CustomerLifecycleMetricsTransformations Model v52',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_22',
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
      'ANALYZE analytics_mart.clm_fact_22',
      'GRANT SELECT ON analytics_mart.clm_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-053',
    modelName: 'CustomerLifecycleMetricsTransformations Model v53',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_23',
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
      'ANALYZE analytics_mart.clm_fact_23',
      'GRANT SELECT ON analytics_mart.clm_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-054',
    modelName: 'CustomerLifecycleMetricsTransformations Model v54',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_24',
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
      'ANALYZE analytics_mart.clm_fact_24',
      'GRANT SELECT ON analytics_mart.clm_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-055',
    modelName: 'CustomerLifecycleMetricsTransformations Model v55',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_25',
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
      'ANALYZE analytics_mart.clm_fact_25',
      'GRANT SELECT ON analytics_mart.clm_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-056',
    modelName: 'CustomerLifecycleMetricsTransformations Model v56',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_26',
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
      'ANALYZE analytics_mart.clm_fact_26',
      'GRANT SELECT ON analytics_mart.clm_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-057',
    modelName: 'CustomerLifecycleMetricsTransformations Model v57',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_27',
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
      'ANALYZE analytics_mart.clm_fact_27',
      'GRANT SELECT ON analytics_mart.clm_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-058',
    modelName: 'CustomerLifecycleMetricsTransformations Model v58',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_28',
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
      'ANALYZE analytics_mart.clm_fact_28',
      'GRANT SELECT ON analytics_mart.clm_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-059',
    modelName: 'CustomerLifecycleMetricsTransformations Model v59',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_29',
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
      'ANALYZE analytics_mart.clm_fact_29',
      'GRANT SELECT ON analytics_mart.clm_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-060',
    modelName: 'CustomerLifecycleMetricsTransformations Model v60',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_0',
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
      'ANALYZE analytics_mart.clm_fact_0',
      'GRANT SELECT ON analytics_mart.clm_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-061',
    modelName: 'CustomerLifecycleMetricsTransformations Model v61',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_1',
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
      'ANALYZE analytics_mart.clm_fact_1',
      'GRANT SELECT ON analytics_mart.clm_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-062',
    modelName: 'CustomerLifecycleMetricsTransformations Model v62',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_2',
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
      'ANALYZE analytics_mart.clm_fact_2',
      'GRANT SELECT ON analytics_mart.clm_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-063',
    modelName: 'CustomerLifecycleMetricsTransformations Model v63',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_3',
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
      'ANALYZE analytics_mart.clm_fact_3',
      'GRANT SELECT ON analytics_mart.clm_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-064',
    modelName: 'CustomerLifecycleMetricsTransformations Model v64',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_4',
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
      'ANALYZE analytics_mart.clm_fact_4',
      'GRANT SELECT ON analytics_mart.clm_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-065',
    modelName: 'CustomerLifecycleMetricsTransformations Model v65',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_5',
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
      'ANALYZE analytics_mart.clm_fact_5',
      'GRANT SELECT ON analytics_mart.clm_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-066',
    modelName: 'CustomerLifecycleMetricsTransformations Model v66',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_6',
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
      'ANALYZE analytics_mart.clm_fact_6',
      'GRANT SELECT ON analytics_mart.clm_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-067',
    modelName: 'CustomerLifecycleMetricsTransformations Model v67',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_7',
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
      'ANALYZE analytics_mart.clm_fact_7',
      'GRANT SELECT ON analytics_mart.clm_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-068',
    modelName: 'CustomerLifecycleMetricsTransformations Model v68',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_8',
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
      'ANALYZE analytics_mart.clm_fact_8',
      'GRANT SELECT ON analytics_mart.clm_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-069',
    modelName: 'CustomerLifecycleMetricsTransformations Model v69',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_9',
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
      'ANALYZE analytics_mart.clm_fact_9',
      'GRANT SELECT ON analytics_mart.clm_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-070',
    modelName: 'CustomerLifecycleMetricsTransformations Model v70',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_10',
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
      'ANALYZE analytics_mart.clm_fact_10',
      'GRANT SELECT ON analytics_mart.clm_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-071',
    modelName: 'CustomerLifecycleMetricsTransformations Model v71',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_11',
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
      'ANALYZE analytics_mart.clm_fact_11',
      'GRANT SELECT ON analytics_mart.clm_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-072',
    modelName: 'CustomerLifecycleMetricsTransformations Model v72',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_12',
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
      'ANALYZE analytics_mart.clm_fact_12',
      'GRANT SELECT ON analytics_mart.clm_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-073',
    modelName: 'CustomerLifecycleMetricsTransformations Model v73',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_13',
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
      'ANALYZE analytics_mart.clm_fact_13',
      'GRANT SELECT ON analytics_mart.clm_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-074',
    modelName: 'CustomerLifecycleMetricsTransformations Model v74',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_14',
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
      'ANALYZE analytics_mart.clm_fact_14',
      'GRANT SELECT ON analytics_mart.clm_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-075',
    modelName: 'CustomerLifecycleMetricsTransformations Model v75',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_15',
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
      'ANALYZE analytics_mart.clm_fact_15',
      'GRANT SELECT ON analytics_mart.clm_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-076',
    modelName: 'CustomerLifecycleMetricsTransformations Model v76',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_16',
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
      'ANALYZE analytics_mart.clm_fact_16',
      'GRANT SELECT ON analytics_mart.clm_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-077',
    modelName: 'CustomerLifecycleMetricsTransformations Model v77',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_17',
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
      'ANALYZE analytics_mart.clm_fact_17',
      'GRANT SELECT ON analytics_mart.clm_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-078',
    modelName: 'CustomerLifecycleMetricsTransformations Model v78',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_18',
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
      'ANALYZE analytics_mart.clm_fact_18',
      'GRANT SELECT ON analytics_mart.clm_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-079',
    modelName: 'CustomerLifecycleMetricsTransformations Model v79',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_19',
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
      'ANALYZE analytics_mart.clm_fact_19',
      'GRANT SELECT ON analytics_mart.clm_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-080',
    modelName: 'CustomerLifecycleMetricsTransformations Model v80',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_20',
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
      'ANALYZE analytics_mart.clm_fact_20',
      'GRANT SELECT ON analytics_mart.clm_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-081',
    modelName: 'CustomerLifecycleMetricsTransformations Model v81',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_21',
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
      'ANALYZE analytics_mart.clm_fact_21',
      'GRANT SELECT ON analytics_mart.clm_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-082',
    modelName: 'CustomerLifecycleMetricsTransformations Model v82',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_22',
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
      'ANALYZE analytics_mart.clm_fact_22',
      'GRANT SELECT ON analytics_mart.clm_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-083',
    modelName: 'CustomerLifecycleMetricsTransformations Model v83',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_23',
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
      'ANALYZE analytics_mart.clm_fact_23',
      'GRANT SELECT ON analytics_mart.clm_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-084',
    modelName: 'CustomerLifecycleMetricsTransformations Model v84',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_24',
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
      'ANALYZE analytics_mart.clm_fact_24',
      'GRANT SELECT ON analytics_mart.clm_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-085',
    modelName: 'CustomerLifecycleMetricsTransformations Model v85',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_25',
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
      'ANALYZE analytics_mart.clm_fact_25',
      'GRANT SELECT ON analytics_mart.clm_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-086',
    modelName: 'CustomerLifecycleMetricsTransformations Model v86',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_26',
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
      'ANALYZE analytics_mart.clm_fact_26',
      'GRANT SELECT ON analytics_mart.clm_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-087',
    modelName: 'CustomerLifecycleMetricsTransformations Model v87',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_27',
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
      'ANALYZE analytics_mart.clm_fact_27',
      'GRANT SELECT ON analytics_mart.clm_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-088',
    modelName: 'CustomerLifecycleMetricsTransformations Model v88',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_28',
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
      'ANALYZE analytics_mart.clm_fact_28',
      'GRANT SELECT ON analytics_mart.clm_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-089',
    modelName: 'CustomerLifecycleMetricsTransformations Model v89',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_29',
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
      'ANALYZE analytics_mart.clm_fact_29',
      'GRANT SELECT ON analytics_mart.clm_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-090',
    modelName: 'CustomerLifecycleMetricsTransformations Model v90',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_0',
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
      'ANALYZE analytics_mart.clm_fact_0',
      'GRANT SELECT ON analytics_mart.clm_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-091',
    modelName: 'CustomerLifecycleMetricsTransformations Model v91',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_1',
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
      'ANALYZE analytics_mart.clm_fact_1',
      'GRANT SELECT ON analytics_mart.clm_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-092',
    modelName: 'CustomerLifecycleMetricsTransformations Model v92',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_2',
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
      'ANALYZE analytics_mart.clm_fact_2',
      'GRANT SELECT ON analytics_mart.clm_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-093',
    modelName: 'CustomerLifecycleMetricsTransformations Model v93',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_3',
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
      'ANALYZE analytics_mart.clm_fact_3',
      'GRANT SELECT ON analytics_mart.clm_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-094',
    modelName: 'CustomerLifecycleMetricsTransformations Model v94',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_4',
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
      'ANALYZE analytics_mart.clm_fact_4',
      'GRANT SELECT ON analytics_mart.clm_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-095',
    modelName: 'CustomerLifecycleMetricsTransformations Model v95',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_5',
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
      'ANALYZE analytics_mart.clm_fact_5',
      'GRANT SELECT ON analytics_mart.clm_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-096',
    modelName: 'CustomerLifecycleMetricsTransformations Model v96',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_6',
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
      'ANALYZE analytics_mart.clm_fact_6',
      'GRANT SELECT ON analytics_mart.clm_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-097',
    modelName: 'CustomerLifecycleMetricsTransformations Model v97',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_7',
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
      'ANALYZE analytics_mart.clm_fact_7',
      'GRANT SELECT ON analytics_mart.clm_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-098',
    modelName: 'CustomerLifecycleMetricsTransformations Model v98',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_8',
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
      'ANALYZE analytics_mart.clm_fact_8',
      'GRANT SELECT ON analytics_mart.clm_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-099',
    modelName: 'CustomerLifecycleMetricsTransformations Model v99',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_9',
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
      'ANALYZE analytics_mart.clm_fact_9',
      'GRANT SELECT ON analytics_mart.clm_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-100',
    modelName: 'CustomerLifecycleMetricsTransformations Model v100',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_10',
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
      'ANALYZE analytics_mart.clm_fact_10',
      'GRANT SELECT ON analytics_mart.clm_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-101',
    modelName: 'CustomerLifecycleMetricsTransformations Model v101',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_11',
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
      'ANALYZE analytics_mart.clm_fact_11',
      'GRANT SELECT ON analytics_mart.clm_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-102',
    modelName: 'CustomerLifecycleMetricsTransformations Model v102',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_12',
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
      'ANALYZE analytics_mart.clm_fact_12',
      'GRANT SELECT ON analytics_mart.clm_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-103',
    modelName: 'CustomerLifecycleMetricsTransformations Model v103',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_13',
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
      'ANALYZE analytics_mart.clm_fact_13',
      'GRANT SELECT ON analytics_mart.clm_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-104',
    modelName: 'CustomerLifecycleMetricsTransformations Model v104',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_14',
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
      'ANALYZE analytics_mart.clm_fact_14',
      'GRANT SELECT ON analytics_mart.clm_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-105',
    modelName: 'CustomerLifecycleMetricsTransformations Model v105',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_15',
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
      'ANALYZE analytics_mart.clm_fact_15',
      'GRANT SELECT ON analytics_mart.clm_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-106',
    modelName: 'CustomerLifecycleMetricsTransformations Model v106',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_16',
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
      'ANALYZE analytics_mart.clm_fact_16',
      'GRANT SELECT ON analytics_mart.clm_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-107',
    modelName: 'CustomerLifecycleMetricsTransformations Model v107',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_17',
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
      'ANALYZE analytics_mart.clm_fact_17',
      'GRANT SELECT ON analytics_mart.clm_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-108',
    modelName: 'CustomerLifecycleMetricsTransformations Model v108',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_18',
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
      'ANALYZE analytics_mart.clm_fact_18',
      'GRANT SELECT ON analytics_mart.clm_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-109',
    modelName: 'CustomerLifecycleMetricsTransformations Model v109',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_19',
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
      'ANALYZE analytics_mart.clm_fact_19',
      'GRANT SELECT ON analytics_mart.clm_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-110',
    modelName: 'CustomerLifecycleMetricsTransformations Model v110',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_20',
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
      'ANALYZE analytics_mart.clm_fact_20',
      'GRANT SELECT ON analytics_mart.clm_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-111',
    modelName: 'CustomerLifecycleMetricsTransformations Model v111',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_21',
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
      'ANALYZE analytics_mart.clm_fact_21',
      'GRANT SELECT ON analytics_mart.clm_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-112',
    modelName: 'CustomerLifecycleMetricsTransformations Model v112',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_22',
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
      'ANALYZE analytics_mart.clm_fact_22',
      'GRANT SELECT ON analytics_mart.clm_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-113',
    modelName: 'CustomerLifecycleMetricsTransformations Model v113',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_23',
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
      'ANALYZE analytics_mart.clm_fact_23',
      'GRANT SELECT ON analytics_mart.clm_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-114',
    modelName: 'CustomerLifecycleMetricsTransformations Model v114',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_24',
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
      'ANALYZE analytics_mart.clm_fact_24',
      'GRANT SELECT ON analytics_mart.clm_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-115',
    modelName: 'CustomerLifecycleMetricsTransformations Model v115',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_25',
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
      'ANALYZE analytics_mart.clm_fact_25',
      'GRANT SELECT ON analytics_mart.clm_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-116',
    modelName: 'CustomerLifecycleMetricsTransformations Model v116',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_26',
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
      'ANALYZE analytics_mart.clm_fact_26',
      'GRANT SELECT ON analytics_mart.clm_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-117',
    modelName: 'CustomerLifecycleMetricsTransformations Model v117',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_27',
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
      'ANALYZE analytics_mart.clm_fact_27',
      'GRANT SELECT ON analytics_mart.clm_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-118',
    modelName: 'CustomerLifecycleMetricsTransformations Model v118',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_28',
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
      'ANALYZE analytics_mart.clm_fact_28',
      'GRANT SELECT ON analytics_mart.clm_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-119',
    modelName: 'CustomerLifecycleMetricsTransformations Model v119',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_29',
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
      'ANALYZE analytics_mart.clm_fact_29',
      'GRANT SELECT ON analytics_mart.clm_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-120',
    modelName: 'CustomerLifecycleMetricsTransformations Model v120',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_0',
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
      'ANALYZE analytics_mart.clm_fact_0',
      'GRANT SELECT ON analytics_mart.clm_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-121',
    modelName: 'CustomerLifecycleMetricsTransformations Model v121',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_1',
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
      'ANALYZE analytics_mart.clm_fact_1',
      'GRANT SELECT ON analytics_mart.clm_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-122',
    modelName: 'CustomerLifecycleMetricsTransformations Model v122',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_2',
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
      'ANALYZE analytics_mart.clm_fact_2',
      'GRANT SELECT ON analytics_mart.clm_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-123',
    modelName: 'CustomerLifecycleMetricsTransformations Model v123',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_3',
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
      'ANALYZE analytics_mart.clm_fact_3',
      'GRANT SELECT ON analytics_mart.clm_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-124',
    modelName: 'CustomerLifecycleMetricsTransformations Model v124',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_4',
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
      'ANALYZE analytics_mart.clm_fact_4',
      'GRANT SELECT ON analytics_mart.clm_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-125',
    modelName: 'CustomerLifecycleMetricsTransformations Model v125',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_5',
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
      'ANALYZE analytics_mart.clm_fact_5',
      'GRANT SELECT ON analytics_mart.clm_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-126',
    modelName: 'CustomerLifecycleMetricsTransformations Model v126',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_6',
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
      'ANALYZE analytics_mart.clm_fact_6',
      'GRANT SELECT ON analytics_mart.clm_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-127',
    modelName: 'CustomerLifecycleMetricsTransformations Model v127',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_7',
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
      'ANALYZE analytics_mart.clm_fact_7',
      'GRANT SELECT ON analytics_mart.clm_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-128',
    modelName: 'CustomerLifecycleMetricsTransformations Model v128',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_8',
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
      'ANALYZE analytics_mart.clm_fact_8',
      'GRANT SELECT ON analytics_mart.clm_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-129',
    modelName: 'CustomerLifecycleMetricsTransformations Model v129',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_9',
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
      'ANALYZE analytics_mart.clm_fact_9',
      'GRANT SELECT ON analytics_mart.clm_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-130',
    modelName: 'CustomerLifecycleMetricsTransformations Model v130',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_10',
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
      'ANALYZE analytics_mart.clm_fact_10',
      'GRANT SELECT ON analytics_mart.clm_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-131',
    modelName: 'CustomerLifecycleMetricsTransformations Model v131',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_11',
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
      'ANALYZE analytics_mart.clm_fact_11',
      'GRANT SELECT ON analytics_mart.clm_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-132',
    modelName: 'CustomerLifecycleMetricsTransformations Model v132',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_12',
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
      'ANALYZE analytics_mart.clm_fact_12',
      'GRANT SELECT ON analytics_mart.clm_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-133',
    modelName: 'CustomerLifecycleMetricsTransformations Model v133',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_13',
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
      'ANALYZE analytics_mart.clm_fact_13',
      'GRANT SELECT ON analytics_mart.clm_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-134',
    modelName: 'CustomerLifecycleMetricsTransformations Model v134',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_14',
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
      'ANALYZE analytics_mart.clm_fact_14',
      'GRANT SELECT ON analytics_mart.clm_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-135',
    modelName: 'CustomerLifecycleMetricsTransformations Model v135',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_15',
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
      'ANALYZE analytics_mart.clm_fact_15',
      'GRANT SELECT ON analytics_mart.clm_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-136',
    modelName: 'CustomerLifecycleMetricsTransformations Model v136',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_16',
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
      'ANALYZE analytics_mart.clm_fact_16',
      'GRANT SELECT ON analytics_mart.clm_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-137',
    modelName: 'CustomerLifecycleMetricsTransformations Model v137',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_17',
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
      'ANALYZE analytics_mart.clm_fact_17',
      'GRANT SELECT ON analytics_mart.clm_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-138',
    modelName: 'CustomerLifecycleMetricsTransformations Model v138',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_18',
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
      'ANALYZE analytics_mart.clm_fact_18',
      'GRANT SELECT ON analytics_mart.clm_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-139',
    modelName: 'CustomerLifecycleMetricsTransformations Model v139',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_19',
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
      'ANALYZE analytics_mart.clm_fact_19',
      'GRANT SELECT ON analytics_mart.clm_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-140',
    modelName: 'CustomerLifecycleMetricsTransformations Model v140',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_20',
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
      'ANALYZE analytics_mart.clm_fact_20',
      'GRANT SELECT ON analytics_mart.clm_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-141',
    modelName: 'CustomerLifecycleMetricsTransformations Model v141',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_21',
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
      'ANALYZE analytics_mart.clm_fact_21',
      'GRANT SELECT ON analytics_mart.clm_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-142',
    modelName: 'CustomerLifecycleMetricsTransformations Model v142',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_22',
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
      'ANALYZE analytics_mart.clm_fact_22',
      'GRANT SELECT ON analytics_mart.clm_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-143',
    modelName: 'CustomerLifecycleMetricsTransformations Model v143',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_23',
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
      'ANALYZE analytics_mart.clm_fact_23',
      'GRANT SELECT ON analytics_mart.clm_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-144',
    modelName: 'CustomerLifecycleMetricsTransformations Model v144',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_24',
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
      'ANALYZE analytics_mart.clm_fact_24',
      'GRANT SELECT ON analytics_mart.clm_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-145',
    modelName: 'CustomerLifecycleMetricsTransformations Model v145',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_25',
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
      'ANALYZE analytics_mart.clm_fact_25',
      'GRANT SELECT ON analytics_mart.clm_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-146',
    modelName: 'CustomerLifecycleMetricsTransformations Model v146',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_26',
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
      'ANALYZE analytics_mart.clm_fact_26',
      'GRANT SELECT ON analytics_mart.clm_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-147',
    modelName: 'CustomerLifecycleMetricsTransformations Model v147',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_27',
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
      'ANALYZE analytics_mart.clm_fact_27',
      'GRANT SELECT ON analytics_mart.clm_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-148',
    modelName: 'CustomerLifecycleMetricsTransformations Model v148',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_28',
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
      'ANALYZE analytics_mart.clm_fact_28',
      'GRANT SELECT ON analytics_mart.clm_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-149',
    modelName: 'CustomerLifecycleMetricsTransformations Model v149',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_29',
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
      'ANALYZE analytics_mart.clm_fact_29',
      'GRANT SELECT ON analytics_mart.clm_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-150',
    modelName: 'CustomerLifecycleMetricsTransformations Model v150',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_0',
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
      'ANALYZE analytics_mart.clm_fact_0',
      'GRANT SELECT ON analytics_mart.clm_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-151',
    modelName: 'CustomerLifecycleMetricsTransformations Model v151',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_1',
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
      'ANALYZE analytics_mart.clm_fact_1',
      'GRANT SELECT ON analytics_mart.clm_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-152',
    modelName: 'CustomerLifecycleMetricsTransformations Model v152',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_2',
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
      'ANALYZE analytics_mart.clm_fact_2',
      'GRANT SELECT ON analytics_mart.clm_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-153',
    modelName: 'CustomerLifecycleMetricsTransformations Model v153',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_3',
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
      'ANALYZE analytics_mart.clm_fact_3',
      'GRANT SELECT ON analytics_mart.clm_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-154',
    modelName: 'CustomerLifecycleMetricsTransformations Model v154',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_4',
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
      'ANALYZE analytics_mart.clm_fact_4',
      'GRANT SELECT ON analytics_mart.clm_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-155',
    modelName: 'CustomerLifecycleMetricsTransformations Model v155',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_5',
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
      'ANALYZE analytics_mart.clm_fact_5',
      'GRANT SELECT ON analytics_mart.clm_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-156',
    modelName: 'CustomerLifecycleMetricsTransformations Model v156',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_6',
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
      'ANALYZE analytics_mart.clm_fact_6',
      'GRANT SELECT ON analytics_mart.clm_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-157',
    modelName: 'CustomerLifecycleMetricsTransformations Model v157',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_7',
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
      'ANALYZE analytics_mart.clm_fact_7',
      'GRANT SELECT ON analytics_mart.clm_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-158',
    modelName: 'CustomerLifecycleMetricsTransformations Model v158',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_8',
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
      'ANALYZE analytics_mart.clm_fact_8',
      'GRANT SELECT ON analytics_mart.clm_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-159',
    modelName: 'CustomerLifecycleMetricsTransformations Model v159',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_9',
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
      'ANALYZE analytics_mart.clm_fact_9',
      'GRANT SELECT ON analytics_mart.clm_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-160',
    modelName: 'CustomerLifecycleMetricsTransformations Model v160',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_10',
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
      'ANALYZE analytics_mart.clm_fact_10',
      'GRANT SELECT ON analytics_mart.clm_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-161',
    modelName: 'CustomerLifecycleMetricsTransformations Model v161',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_11',
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
      'ANALYZE analytics_mart.clm_fact_11',
      'GRANT SELECT ON analytics_mart.clm_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-162',
    modelName: 'CustomerLifecycleMetricsTransformations Model v162',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_12',
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
      'ANALYZE analytics_mart.clm_fact_12',
      'GRANT SELECT ON analytics_mart.clm_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-163',
    modelName: 'CustomerLifecycleMetricsTransformations Model v163',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_13',
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
      'ANALYZE analytics_mart.clm_fact_13',
      'GRANT SELECT ON analytics_mart.clm_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-164',
    modelName: 'CustomerLifecycleMetricsTransformations Model v164',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_14',
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
      'ANALYZE analytics_mart.clm_fact_14',
      'GRANT SELECT ON analytics_mart.clm_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-165',
    modelName: 'CustomerLifecycleMetricsTransformations Model v165',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_15',
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
      'ANALYZE analytics_mart.clm_fact_15',
      'GRANT SELECT ON analytics_mart.clm_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-166',
    modelName: 'CustomerLifecycleMetricsTransformations Model v166',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_16',
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
      'ANALYZE analytics_mart.clm_fact_16',
      'GRANT SELECT ON analytics_mart.clm_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-167',
    modelName: 'CustomerLifecycleMetricsTransformations Model v167',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_17',
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
      'ANALYZE analytics_mart.clm_fact_17',
      'GRANT SELECT ON analytics_mart.clm_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-168',
    modelName: 'CustomerLifecycleMetricsTransformations Model v168',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_18',
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
      'ANALYZE analytics_mart.clm_fact_18',
      'GRANT SELECT ON analytics_mart.clm_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-169',
    modelName: 'CustomerLifecycleMetricsTransformations Model v169',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_19',
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
      'ANALYZE analytics_mart.clm_fact_19',
      'GRANT SELECT ON analytics_mart.clm_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-170',
    modelName: 'CustomerLifecycleMetricsTransformations Model v170',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_20',
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
      'ANALYZE analytics_mart.clm_fact_20',
      'GRANT SELECT ON analytics_mart.clm_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-171',
    modelName: 'CustomerLifecycleMetricsTransformations Model v171',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_21',
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
      'ANALYZE analytics_mart.clm_fact_21',
      'GRANT SELECT ON analytics_mart.clm_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-172',
    modelName: 'CustomerLifecycleMetricsTransformations Model v172',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_22',
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
      'ANALYZE analytics_mart.clm_fact_22',
      'GRANT SELECT ON analytics_mart.clm_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-173',
    modelName: 'CustomerLifecycleMetricsTransformations Model v173',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_23',
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
      'ANALYZE analytics_mart.clm_fact_23',
      'GRANT SELECT ON analytics_mart.clm_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-174',
    modelName: 'CustomerLifecycleMetricsTransformations Model v174',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_24',
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
      'ANALYZE analytics_mart.clm_fact_24',
      'GRANT SELECT ON analytics_mart.clm_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-175',
    modelName: 'CustomerLifecycleMetricsTransformations Model v175',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_25',
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
      'ANALYZE analytics_mart.clm_fact_25',
      'GRANT SELECT ON analytics_mart.clm_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-176',
    modelName: 'CustomerLifecycleMetricsTransformations Model v176',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_26',
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
      'ANALYZE analytics_mart.clm_fact_26',
      'GRANT SELECT ON analytics_mart.clm_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-177',
    modelName: 'CustomerLifecycleMetricsTransformations Model v177',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_27',
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
      'ANALYZE analytics_mart.clm_fact_27',
      'GRANT SELECT ON analytics_mart.clm_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-178',
    modelName: 'CustomerLifecycleMetricsTransformations Model v178',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_28',
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
      'ANALYZE analytics_mart.clm_fact_28',
      'GRANT SELECT ON analytics_mart.clm_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-179',
    modelName: 'CustomerLifecycleMetricsTransformations Model v179',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_29',
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
      'ANALYZE analytics_mart.clm_fact_29',
      'GRANT SELECT ON analytics_mart.clm_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-180',
    modelName: 'CustomerLifecycleMetricsTransformations Model v180',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_0',
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
      'ANALYZE analytics_mart.clm_fact_0',
      'GRANT SELECT ON analytics_mart.clm_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-181',
    modelName: 'CustomerLifecycleMetricsTransformations Model v181',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_1',
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
      'ANALYZE analytics_mart.clm_fact_1',
      'GRANT SELECT ON analytics_mart.clm_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-182',
    modelName: 'CustomerLifecycleMetricsTransformations Model v182',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_2',
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
      'ANALYZE analytics_mart.clm_fact_2',
      'GRANT SELECT ON analytics_mart.clm_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-183',
    modelName: 'CustomerLifecycleMetricsTransformations Model v183',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_3',
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
      'ANALYZE analytics_mart.clm_fact_3',
      'GRANT SELECT ON analytics_mart.clm_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-184',
    modelName: 'CustomerLifecycleMetricsTransformations Model v184',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_4',
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
      'ANALYZE analytics_mart.clm_fact_4',
      'GRANT SELECT ON analytics_mart.clm_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-185',
    modelName: 'CustomerLifecycleMetricsTransformations Model v185',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_5',
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
      'ANALYZE analytics_mart.clm_fact_5',
      'GRANT SELECT ON analytics_mart.clm_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-186',
    modelName: 'CustomerLifecycleMetricsTransformations Model v186',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.clm_fact_6',
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
      'ANALYZE analytics_mart.clm_fact_6',
      'GRANT SELECT ON analytics_mart.clm_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-187',
    modelName: 'CustomerLifecycleMetricsTransformations Model v187',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.clm_fact_7',
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
      'ANALYZE analytics_mart.clm_fact_7',
      'GRANT SELECT ON analytics_mart.clm_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-188',
    modelName: 'CustomerLifecycleMetricsTransformations Model v188',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.clm_fact_8',
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
      'ANALYZE analytics_mart.clm_fact_8',
      'GRANT SELECT ON analytics_mart.clm_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-189',
    modelName: 'CustomerLifecycleMetricsTransformations Model v189',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.clm_fact_9',
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
      'ANALYZE analytics_mart.clm_fact_9',
      'GRANT SELECT ON analytics_mart.clm_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-190',
    modelName: 'CustomerLifecycleMetricsTransformations Model v190',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.clm_fact_10',
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
      'ANALYZE analytics_mart.clm_fact_10',
      'GRANT SELECT ON analytics_mart.clm_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-191',
    modelName: 'CustomerLifecycleMetricsTransformations Model v191',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.clm_fact_11',
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
      'ANALYZE analytics_mart.clm_fact_11',
      'GRANT SELECT ON analytics_mart.clm_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-192',
    modelName: 'CustomerLifecycleMetricsTransformations Model v192',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.clm_fact_12',
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
      'ANALYZE analytics_mart.clm_fact_12',
      'GRANT SELECT ON analytics_mart.clm_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-193',
    modelName: 'CustomerLifecycleMetricsTransformations Model v193',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.clm_fact_13',
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
      'ANALYZE analytics_mart.clm_fact_13',
      'GRANT SELECT ON analytics_mart.clm_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-194',
    modelName: 'CustomerLifecycleMetricsTransformations Model v194',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.clm_fact_14',
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
      'ANALYZE analytics_mart.clm_fact_14',
      'GRANT SELECT ON analytics_mart.clm_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-195',
    modelName: 'CustomerLifecycleMetricsTransformations Model v195',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.clm_fact_15',
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
      'ANALYZE analytics_mart.clm_fact_15',
      'GRANT SELECT ON analytics_mart.clm_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-196',
    modelName: 'CustomerLifecycleMetricsTransformations Model v196',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.clm_fact_16',
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
      'ANALYZE analytics_mart.clm_fact_16',
      'GRANT SELECT ON analytics_mart.clm_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-197',
    modelName: 'CustomerLifecycleMetricsTransformations Model v197',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.clm_fact_17',
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
      'ANALYZE analytics_mart.clm_fact_17',
      'GRANT SELECT ON analytics_mart.clm_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-198',
    modelName: 'CustomerLifecycleMetricsTransformations Model v198',
    category: 'Churn probability scoring',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.clm_fact_18',
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
      'ANALYZE analytics_mart.clm_fact_18',
      'GRANT SELECT ON analytics_mart.clm_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-199',
    modelName: 'CustomerLifecycleMetricsTransformations Model v199',
    category: 'cohort retention matrix generation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.clm_fact_19',
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
      'ANALYZE analytics_mart.clm_fact_19',
      'GRANT SELECT ON analytics_mart.clm_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-CLM-200',
    modelName: 'CustomerLifecycleMetricsTransformations Model v200',
    category: 'and customer lifetime value (LTV) decile segmentation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.clm_fact_20',
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
      'ANALYZE analytics_mart.clm_fact_20',
      'GRANT SELECT ON analytics_mart.clm_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  }
];
