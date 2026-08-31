/**
 * dbt SQL & Vectorized Transformation Model Registry: HealthcareClinicalQualityTransformations
 * Domain Focus: HEDIS measurement calculation, 30-day hospital readmission risk indices, and prescription adherence flags
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

export const TRANSFORMATION_HCQ_DATASET: TransformationModelSpec[] = [
  {
    transformId: 'TRSF-HCQ-001',
    modelName: 'HealthcareClinicalQualityTransformations Model v1',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_1',
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
      'ANALYZE analytics_mart.hcq_fact_1',
      'GRANT SELECT ON analytics_mart.hcq_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-002',
    modelName: 'HealthcareClinicalQualityTransformations Model v2',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_2',
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
      'ANALYZE analytics_mart.hcq_fact_2',
      'GRANT SELECT ON analytics_mart.hcq_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-003',
    modelName: 'HealthcareClinicalQualityTransformations Model v3',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_3',
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
      'ANALYZE analytics_mart.hcq_fact_3',
      'GRANT SELECT ON analytics_mart.hcq_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-004',
    modelName: 'HealthcareClinicalQualityTransformations Model v4',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_4',
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
      'ANALYZE analytics_mart.hcq_fact_4',
      'GRANT SELECT ON analytics_mart.hcq_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-005',
    modelName: 'HealthcareClinicalQualityTransformations Model v5',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_5',
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
      'ANALYZE analytics_mart.hcq_fact_5',
      'GRANT SELECT ON analytics_mart.hcq_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-006',
    modelName: 'HealthcareClinicalQualityTransformations Model v6',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_6',
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
      'ANALYZE analytics_mart.hcq_fact_6',
      'GRANT SELECT ON analytics_mart.hcq_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-007',
    modelName: 'HealthcareClinicalQualityTransformations Model v7',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_7',
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
      'ANALYZE analytics_mart.hcq_fact_7',
      'GRANT SELECT ON analytics_mart.hcq_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-008',
    modelName: 'HealthcareClinicalQualityTransformations Model v8',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_8',
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
      'ANALYZE analytics_mart.hcq_fact_8',
      'GRANT SELECT ON analytics_mart.hcq_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-009',
    modelName: 'HealthcareClinicalQualityTransformations Model v9',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_9',
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
      'ANALYZE analytics_mart.hcq_fact_9',
      'GRANT SELECT ON analytics_mart.hcq_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-010',
    modelName: 'HealthcareClinicalQualityTransformations Model v10',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_10',
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
      'ANALYZE analytics_mart.hcq_fact_10',
      'GRANT SELECT ON analytics_mart.hcq_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-011',
    modelName: 'HealthcareClinicalQualityTransformations Model v11',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_11',
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
      'ANALYZE analytics_mart.hcq_fact_11',
      'GRANT SELECT ON analytics_mart.hcq_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-012',
    modelName: 'HealthcareClinicalQualityTransformations Model v12',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_12',
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
      'ANALYZE analytics_mart.hcq_fact_12',
      'GRANT SELECT ON analytics_mart.hcq_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-013',
    modelName: 'HealthcareClinicalQualityTransformations Model v13',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_13',
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
      'ANALYZE analytics_mart.hcq_fact_13',
      'GRANT SELECT ON analytics_mart.hcq_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-014',
    modelName: 'HealthcareClinicalQualityTransformations Model v14',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_14',
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
      'ANALYZE analytics_mart.hcq_fact_14',
      'GRANT SELECT ON analytics_mart.hcq_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-015',
    modelName: 'HealthcareClinicalQualityTransformations Model v15',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_15',
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
      'ANALYZE analytics_mart.hcq_fact_15',
      'GRANT SELECT ON analytics_mart.hcq_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-016',
    modelName: 'HealthcareClinicalQualityTransformations Model v16',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_16',
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
      'ANALYZE analytics_mart.hcq_fact_16',
      'GRANT SELECT ON analytics_mart.hcq_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-017',
    modelName: 'HealthcareClinicalQualityTransformations Model v17',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_17',
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
      'ANALYZE analytics_mart.hcq_fact_17',
      'GRANT SELECT ON analytics_mart.hcq_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-018',
    modelName: 'HealthcareClinicalQualityTransformations Model v18',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_18',
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
      'ANALYZE analytics_mart.hcq_fact_18',
      'GRANT SELECT ON analytics_mart.hcq_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-019',
    modelName: 'HealthcareClinicalQualityTransformations Model v19',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_19',
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
      'ANALYZE analytics_mart.hcq_fact_19',
      'GRANT SELECT ON analytics_mart.hcq_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-020',
    modelName: 'HealthcareClinicalQualityTransformations Model v20',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_20',
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
      'ANALYZE analytics_mart.hcq_fact_20',
      'GRANT SELECT ON analytics_mart.hcq_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-021',
    modelName: 'HealthcareClinicalQualityTransformations Model v21',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_21',
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
      'ANALYZE analytics_mart.hcq_fact_21',
      'GRANT SELECT ON analytics_mart.hcq_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-022',
    modelName: 'HealthcareClinicalQualityTransformations Model v22',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_22',
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
      'ANALYZE analytics_mart.hcq_fact_22',
      'GRANT SELECT ON analytics_mart.hcq_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-023',
    modelName: 'HealthcareClinicalQualityTransformations Model v23',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_23',
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
      'ANALYZE analytics_mart.hcq_fact_23',
      'GRANT SELECT ON analytics_mart.hcq_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-024',
    modelName: 'HealthcareClinicalQualityTransformations Model v24',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_24',
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
      'ANALYZE analytics_mart.hcq_fact_24',
      'GRANT SELECT ON analytics_mart.hcq_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-025',
    modelName: 'HealthcareClinicalQualityTransformations Model v25',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_25',
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
      'ANALYZE analytics_mart.hcq_fact_25',
      'GRANT SELECT ON analytics_mart.hcq_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-026',
    modelName: 'HealthcareClinicalQualityTransformations Model v26',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_26',
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
      'ANALYZE analytics_mart.hcq_fact_26',
      'GRANT SELECT ON analytics_mart.hcq_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-027',
    modelName: 'HealthcareClinicalQualityTransformations Model v27',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_27',
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
      'ANALYZE analytics_mart.hcq_fact_27',
      'GRANT SELECT ON analytics_mart.hcq_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-028',
    modelName: 'HealthcareClinicalQualityTransformations Model v28',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_28',
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
      'ANALYZE analytics_mart.hcq_fact_28',
      'GRANT SELECT ON analytics_mart.hcq_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-029',
    modelName: 'HealthcareClinicalQualityTransformations Model v29',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_29',
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
      'ANALYZE analytics_mart.hcq_fact_29',
      'GRANT SELECT ON analytics_mart.hcq_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-030',
    modelName: 'HealthcareClinicalQualityTransformations Model v30',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_0',
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
      'ANALYZE analytics_mart.hcq_fact_0',
      'GRANT SELECT ON analytics_mart.hcq_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-031',
    modelName: 'HealthcareClinicalQualityTransformations Model v31',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_1',
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
      'ANALYZE analytics_mart.hcq_fact_1',
      'GRANT SELECT ON analytics_mart.hcq_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-032',
    modelName: 'HealthcareClinicalQualityTransformations Model v32',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_2',
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
      'ANALYZE analytics_mart.hcq_fact_2',
      'GRANT SELECT ON analytics_mart.hcq_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-033',
    modelName: 'HealthcareClinicalQualityTransformations Model v33',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_3',
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
      'ANALYZE analytics_mart.hcq_fact_3',
      'GRANT SELECT ON analytics_mart.hcq_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-034',
    modelName: 'HealthcareClinicalQualityTransformations Model v34',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_4',
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
      'ANALYZE analytics_mart.hcq_fact_4',
      'GRANT SELECT ON analytics_mart.hcq_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-035',
    modelName: 'HealthcareClinicalQualityTransformations Model v35',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_5',
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
      'ANALYZE analytics_mart.hcq_fact_5',
      'GRANT SELECT ON analytics_mart.hcq_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-036',
    modelName: 'HealthcareClinicalQualityTransformations Model v36',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_6',
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
      'ANALYZE analytics_mart.hcq_fact_6',
      'GRANT SELECT ON analytics_mart.hcq_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-037',
    modelName: 'HealthcareClinicalQualityTransformations Model v37',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_7',
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
      'ANALYZE analytics_mart.hcq_fact_7',
      'GRANT SELECT ON analytics_mart.hcq_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-038',
    modelName: 'HealthcareClinicalQualityTransformations Model v38',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_8',
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
      'ANALYZE analytics_mart.hcq_fact_8',
      'GRANT SELECT ON analytics_mart.hcq_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-039',
    modelName: 'HealthcareClinicalQualityTransformations Model v39',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_9',
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
      'ANALYZE analytics_mart.hcq_fact_9',
      'GRANT SELECT ON analytics_mart.hcq_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-040',
    modelName: 'HealthcareClinicalQualityTransformations Model v40',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_10',
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
      'ANALYZE analytics_mart.hcq_fact_10',
      'GRANT SELECT ON analytics_mart.hcq_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-041',
    modelName: 'HealthcareClinicalQualityTransformations Model v41',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_11',
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
      'ANALYZE analytics_mart.hcq_fact_11',
      'GRANT SELECT ON analytics_mart.hcq_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-042',
    modelName: 'HealthcareClinicalQualityTransformations Model v42',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_12',
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
      'ANALYZE analytics_mart.hcq_fact_12',
      'GRANT SELECT ON analytics_mart.hcq_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-043',
    modelName: 'HealthcareClinicalQualityTransformations Model v43',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_13',
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
      'ANALYZE analytics_mart.hcq_fact_13',
      'GRANT SELECT ON analytics_mart.hcq_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-044',
    modelName: 'HealthcareClinicalQualityTransformations Model v44',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_14',
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
      'ANALYZE analytics_mart.hcq_fact_14',
      'GRANT SELECT ON analytics_mart.hcq_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-045',
    modelName: 'HealthcareClinicalQualityTransformations Model v45',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_15',
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
      'ANALYZE analytics_mart.hcq_fact_15',
      'GRANT SELECT ON analytics_mart.hcq_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-046',
    modelName: 'HealthcareClinicalQualityTransformations Model v46',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_16',
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
      'ANALYZE analytics_mart.hcq_fact_16',
      'GRANT SELECT ON analytics_mart.hcq_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-047',
    modelName: 'HealthcareClinicalQualityTransformations Model v47',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_17',
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
      'ANALYZE analytics_mart.hcq_fact_17',
      'GRANT SELECT ON analytics_mart.hcq_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-048',
    modelName: 'HealthcareClinicalQualityTransformations Model v48',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_18',
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
      'ANALYZE analytics_mart.hcq_fact_18',
      'GRANT SELECT ON analytics_mart.hcq_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-049',
    modelName: 'HealthcareClinicalQualityTransformations Model v49',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_19',
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
      'ANALYZE analytics_mart.hcq_fact_19',
      'GRANT SELECT ON analytics_mart.hcq_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-050',
    modelName: 'HealthcareClinicalQualityTransformations Model v50',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_20',
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
      'ANALYZE analytics_mart.hcq_fact_20',
      'GRANT SELECT ON analytics_mart.hcq_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-051',
    modelName: 'HealthcareClinicalQualityTransformations Model v51',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_21',
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
      'ANALYZE analytics_mart.hcq_fact_21',
      'GRANT SELECT ON analytics_mart.hcq_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-052',
    modelName: 'HealthcareClinicalQualityTransformations Model v52',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_22',
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
      'ANALYZE analytics_mart.hcq_fact_22',
      'GRANT SELECT ON analytics_mart.hcq_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-053',
    modelName: 'HealthcareClinicalQualityTransformations Model v53',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_23',
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
      'ANALYZE analytics_mart.hcq_fact_23',
      'GRANT SELECT ON analytics_mart.hcq_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-054',
    modelName: 'HealthcareClinicalQualityTransformations Model v54',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_24',
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
      'ANALYZE analytics_mart.hcq_fact_24',
      'GRANT SELECT ON analytics_mart.hcq_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-055',
    modelName: 'HealthcareClinicalQualityTransformations Model v55',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_25',
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
      'ANALYZE analytics_mart.hcq_fact_25',
      'GRANT SELECT ON analytics_mart.hcq_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-056',
    modelName: 'HealthcareClinicalQualityTransformations Model v56',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_26',
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
      'ANALYZE analytics_mart.hcq_fact_26',
      'GRANT SELECT ON analytics_mart.hcq_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-057',
    modelName: 'HealthcareClinicalQualityTransformations Model v57',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_27',
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
      'ANALYZE analytics_mart.hcq_fact_27',
      'GRANT SELECT ON analytics_mart.hcq_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-058',
    modelName: 'HealthcareClinicalQualityTransformations Model v58',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_28',
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
      'ANALYZE analytics_mart.hcq_fact_28',
      'GRANT SELECT ON analytics_mart.hcq_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-059',
    modelName: 'HealthcareClinicalQualityTransformations Model v59',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_29',
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
      'ANALYZE analytics_mart.hcq_fact_29',
      'GRANT SELECT ON analytics_mart.hcq_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-060',
    modelName: 'HealthcareClinicalQualityTransformations Model v60',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_0',
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
      'ANALYZE analytics_mart.hcq_fact_0',
      'GRANT SELECT ON analytics_mart.hcq_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-061',
    modelName: 'HealthcareClinicalQualityTransformations Model v61',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_1',
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
      'ANALYZE analytics_mart.hcq_fact_1',
      'GRANT SELECT ON analytics_mart.hcq_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-062',
    modelName: 'HealthcareClinicalQualityTransformations Model v62',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_2',
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
      'ANALYZE analytics_mart.hcq_fact_2',
      'GRANT SELECT ON analytics_mart.hcq_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-063',
    modelName: 'HealthcareClinicalQualityTransformations Model v63',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_3',
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
      'ANALYZE analytics_mart.hcq_fact_3',
      'GRANT SELECT ON analytics_mart.hcq_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-064',
    modelName: 'HealthcareClinicalQualityTransformations Model v64',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_4',
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
      'ANALYZE analytics_mart.hcq_fact_4',
      'GRANT SELECT ON analytics_mart.hcq_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-065',
    modelName: 'HealthcareClinicalQualityTransformations Model v65',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_5',
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
      'ANALYZE analytics_mart.hcq_fact_5',
      'GRANT SELECT ON analytics_mart.hcq_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-066',
    modelName: 'HealthcareClinicalQualityTransformations Model v66',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_6',
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
      'ANALYZE analytics_mart.hcq_fact_6',
      'GRANT SELECT ON analytics_mart.hcq_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-067',
    modelName: 'HealthcareClinicalQualityTransformations Model v67',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_7',
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
      'ANALYZE analytics_mart.hcq_fact_7',
      'GRANT SELECT ON analytics_mart.hcq_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-068',
    modelName: 'HealthcareClinicalQualityTransformations Model v68',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_8',
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
      'ANALYZE analytics_mart.hcq_fact_8',
      'GRANT SELECT ON analytics_mart.hcq_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-069',
    modelName: 'HealthcareClinicalQualityTransformations Model v69',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_9',
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
      'ANALYZE analytics_mart.hcq_fact_9',
      'GRANT SELECT ON analytics_mart.hcq_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-070',
    modelName: 'HealthcareClinicalQualityTransformations Model v70',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_10',
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
      'ANALYZE analytics_mart.hcq_fact_10',
      'GRANT SELECT ON analytics_mart.hcq_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-071',
    modelName: 'HealthcareClinicalQualityTransformations Model v71',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_11',
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
      'ANALYZE analytics_mart.hcq_fact_11',
      'GRANT SELECT ON analytics_mart.hcq_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-072',
    modelName: 'HealthcareClinicalQualityTransformations Model v72',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_12',
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
      'ANALYZE analytics_mart.hcq_fact_12',
      'GRANT SELECT ON analytics_mart.hcq_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-073',
    modelName: 'HealthcareClinicalQualityTransformations Model v73',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_13',
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
      'ANALYZE analytics_mart.hcq_fact_13',
      'GRANT SELECT ON analytics_mart.hcq_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-074',
    modelName: 'HealthcareClinicalQualityTransformations Model v74',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_14',
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
      'ANALYZE analytics_mart.hcq_fact_14',
      'GRANT SELECT ON analytics_mart.hcq_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-075',
    modelName: 'HealthcareClinicalQualityTransformations Model v75',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_15',
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
      'ANALYZE analytics_mart.hcq_fact_15',
      'GRANT SELECT ON analytics_mart.hcq_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-076',
    modelName: 'HealthcareClinicalQualityTransformations Model v76',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_16',
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
      'ANALYZE analytics_mart.hcq_fact_16',
      'GRANT SELECT ON analytics_mart.hcq_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-077',
    modelName: 'HealthcareClinicalQualityTransformations Model v77',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_17',
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
      'ANALYZE analytics_mart.hcq_fact_17',
      'GRANT SELECT ON analytics_mart.hcq_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-078',
    modelName: 'HealthcareClinicalQualityTransformations Model v78',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_18',
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
      'ANALYZE analytics_mart.hcq_fact_18',
      'GRANT SELECT ON analytics_mart.hcq_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-079',
    modelName: 'HealthcareClinicalQualityTransformations Model v79',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_19',
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
      'ANALYZE analytics_mart.hcq_fact_19',
      'GRANT SELECT ON analytics_mart.hcq_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-080',
    modelName: 'HealthcareClinicalQualityTransformations Model v80',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_20',
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
      'ANALYZE analytics_mart.hcq_fact_20',
      'GRANT SELECT ON analytics_mart.hcq_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-081',
    modelName: 'HealthcareClinicalQualityTransformations Model v81',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_21',
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
      'ANALYZE analytics_mart.hcq_fact_21',
      'GRANT SELECT ON analytics_mart.hcq_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-082',
    modelName: 'HealthcareClinicalQualityTransformations Model v82',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_22',
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
      'ANALYZE analytics_mart.hcq_fact_22',
      'GRANT SELECT ON analytics_mart.hcq_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-083',
    modelName: 'HealthcareClinicalQualityTransformations Model v83',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_23',
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
      'ANALYZE analytics_mart.hcq_fact_23',
      'GRANT SELECT ON analytics_mart.hcq_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-084',
    modelName: 'HealthcareClinicalQualityTransformations Model v84',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_24',
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
      'ANALYZE analytics_mart.hcq_fact_24',
      'GRANT SELECT ON analytics_mart.hcq_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-085',
    modelName: 'HealthcareClinicalQualityTransformations Model v85',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_25',
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
      'ANALYZE analytics_mart.hcq_fact_25',
      'GRANT SELECT ON analytics_mart.hcq_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-086',
    modelName: 'HealthcareClinicalQualityTransformations Model v86',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_26',
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
      'ANALYZE analytics_mart.hcq_fact_26',
      'GRANT SELECT ON analytics_mart.hcq_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-087',
    modelName: 'HealthcareClinicalQualityTransformations Model v87',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_27',
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
      'ANALYZE analytics_mart.hcq_fact_27',
      'GRANT SELECT ON analytics_mart.hcq_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-088',
    modelName: 'HealthcareClinicalQualityTransformations Model v88',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_28',
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
      'ANALYZE analytics_mart.hcq_fact_28',
      'GRANT SELECT ON analytics_mart.hcq_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-089',
    modelName: 'HealthcareClinicalQualityTransformations Model v89',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_29',
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
      'ANALYZE analytics_mart.hcq_fact_29',
      'GRANT SELECT ON analytics_mart.hcq_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-090',
    modelName: 'HealthcareClinicalQualityTransformations Model v90',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_0',
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
      'ANALYZE analytics_mart.hcq_fact_0',
      'GRANT SELECT ON analytics_mart.hcq_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-091',
    modelName: 'HealthcareClinicalQualityTransformations Model v91',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_1',
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
      'ANALYZE analytics_mart.hcq_fact_1',
      'GRANT SELECT ON analytics_mart.hcq_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-092',
    modelName: 'HealthcareClinicalQualityTransformations Model v92',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_2',
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
      'ANALYZE analytics_mart.hcq_fact_2',
      'GRANT SELECT ON analytics_mart.hcq_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-093',
    modelName: 'HealthcareClinicalQualityTransformations Model v93',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_3',
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
      'ANALYZE analytics_mart.hcq_fact_3',
      'GRANT SELECT ON analytics_mart.hcq_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-094',
    modelName: 'HealthcareClinicalQualityTransformations Model v94',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_4',
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
      'ANALYZE analytics_mart.hcq_fact_4',
      'GRANT SELECT ON analytics_mart.hcq_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-095',
    modelName: 'HealthcareClinicalQualityTransformations Model v95',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_5',
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
      'ANALYZE analytics_mart.hcq_fact_5',
      'GRANT SELECT ON analytics_mart.hcq_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-096',
    modelName: 'HealthcareClinicalQualityTransformations Model v96',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_6',
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
      'ANALYZE analytics_mart.hcq_fact_6',
      'GRANT SELECT ON analytics_mart.hcq_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-097',
    modelName: 'HealthcareClinicalQualityTransformations Model v97',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_7',
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
      'ANALYZE analytics_mart.hcq_fact_7',
      'GRANT SELECT ON analytics_mart.hcq_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-098',
    modelName: 'HealthcareClinicalQualityTransformations Model v98',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_8',
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
      'ANALYZE analytics_mart.hcq_fact_8',
      'GRANT SELECT ON analytics_mart.hcq_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-099',
    modelName: 'HealthcareClinicalQualityTransformations Model v99',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_9',
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
      'ANALYZE analytics_mart.hcq_fact_9',
      'GRANT SELECT ON analytics_mart.hcq_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-100',
    modelName: 'HealthcareClinicalQualityTransformations Model v100',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_10',
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
      'ANALYZE analytics_mart.hcq_fact_10',
      'GRANT SELECT ON analytics_mart.hcq_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-101',
    modelName: 'HealthcareClinicalQualityTransformations Model v101',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_11',
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
      'ANALYZE analytics_mart.hcq_fact_11',
      'GRANT SELECT ON analytics_mart.hcq_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-102',
    modelName: 'HealthcareClinicalQualityTransformations Model v102',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_12',
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
      'ANALYZE analytics_mart.hcq_fact_12',
      'GRANT SELECT ON analytics_mart.hcq_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-103',
    modelName: 'HealthcareClinicalQualityTransformations Model v103',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_13',
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
      'ANALYZE analytics_mart.hcq_fact_13',
      'GRANT SELECT ON analytics_mart.hcq_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-104',
    modelName: 'HealthcareClinicalQualityTransformations Model v104',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_14',
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
      'ANALYZE analytics_mart.hcq_fact_14',
      'GRANT SELECT ON analytics_mart.hcq_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-105',
    modelName: 'HealthcareClinicalQualityTransformations Model v105',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_15',
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
      'ANALYZE analytics_mart.hcq_fact_15',
      'GRANT SELECT ON analytics_mart.hcq_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-106',
    modelName: 'HealthcareClinicalQualityTransformations Model v106',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_16',
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
      'ANALYZE analytics_mart.hcq_fact_16',
      'GRANT SELECT ON analytics_mart.hcq_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-107',
    modelName: 'HealthcareClinicalQualityTransformations Model v107',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_17',
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
      'ANALYZE analytics_mart.hcq_fact_17',
      'GRANT SELECT ON analytics_mart.hcq_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-108',
    modelName: 'HealthcareClinicalQualityTransformations Model v108',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_18',
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
      'ANALYZE analytics_mart.hcq_fact_18',
      'GRANT SELECT ON analytics_mart.hcq_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-109',
    modelName: 'HealthcareClinicalQualityTransformations Model v109',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_19',
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
      'ANALYZE analytics_mart.hcq_fact_19',
      'GRANT SELECT ON analytics_mart.hcq_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-110',
    modelName: 'HealthcareClinicalQualityTransformations Model v110',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_20',
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
      'ANALYZE analytics_mart.hcq_fact_20',
      'GRANT SELECT ON analytics_mart.hcq_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-111',
    modelName: 'HealthcareClinicalQualityTransformations Model v111',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_21',
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
      'ANALYZE analytics_mart.hcq_fact_21',
      'GRANT SELECT ON analytics_mart.hcq_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-112',
    modelName: 'HealthcareClinicalQualityTransformations Model v112',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_22',
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
      'ANALYZE analytics_mart.hcq_fact_22',
      'GRANT SELECT ON analytics_mart.hcq_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-113',
    modelName: 'HealthcareClinicalQualityTransformations Model v113',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_23',
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
      'ANALYZE analytics_mart.hcq_fact_23',
      'GRANT SELECT ON analytics_mart.hcq_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-114',
    modelName: 'HealthcareClinicalQualityTransformations Model v114',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_24',
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
      'ANALYZE analytics_mart.hcq_fact_24',
      'GRANT SELECT ON analytics_mart.hcq_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-115',
    modelName: 'HealthcareClinicalQualityTransformations Model v115',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_25',
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
      'ANALYZE analytics_mart.hcq_fact_25',
      'GRANT SELECT ON analytics_mart.hcq_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-116',
    modelName: 'HealthcareClinicalQualityTransformations Model v116',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_26',
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
      'ANALYZE analytics_mart.hcq_fact_26',
      'GRANT SELECT ON analytics_mart.hcq_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-117',
    modelName: 'HealthcareClinicalQualityTransformations Model v117',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_27',
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
      'ANALYZE analytics_mart.hcq_fact_27',
      'GRANT SELECT ON analytics_mart.hcq_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-118',
    modelName: 'HealthcareClinicalQualityTransformations Model v118',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_28',
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
      'ANALYZE analytics_mart.hcq_fact_28',
      'GRANT SELECT ON analytics_mart.hcq_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-119',
    modelName: 'HealthcareClinicalQualityTransformations Model v119',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_29',
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
      'ANALYZE analytics_mart.hcq_fact_29',
      'GRANT SELECT ON analytics_mart.hcq_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-120',
    modelName: 'HealthcareClinicalQualityTransformations Model v120',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_0',
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
      'ANALYZE analytics_mart.hcq_fact_0',
      'GRANT SELECT ON analytics_mart.hcq_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-121',
    modelName: 'HealthcareClinicalQualityTransformations Model v121',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_1',
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
      'ANALYZE analytics_mart.hcq_fact_1',
      'GRANT SELECT ON analytics_mart.hcq_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-122',
    modelName: 'HealthcareClinicalQualityTransformations Model v122',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_2',
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
      'ANALYZE analytics_mart.hcq_fact_2',
      'GRANT SELECT ON analytics_mart.hcq_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-123',
    modelName: 'HealthcareClinicalQualityTransformations Model v123',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_3',
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
      'ANALYZE analytics_mart.hcq_fact_3',
      'GRANT SELECT ON analytics_mart.hcq_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-124',
    modelName: 'HealthcareClinicalQualityTransformations Model v124',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_4',
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
      'ANALYZE analytics_mart.hcq_fact_4',
      'GRANT SELECT ON analytics_mart.hcq_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-125',
    modelName: 'HealthcareClinicalQualityTransformations Model v125',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_5',
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
      'ANALYZE analytics_mart.hcq_fact_5',
      'GRANT SELECT ON analytics_mart.hcq_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-126',
    modelName: 'HealthcareClinicalQualityTransformations Model v126',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_6',
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
      'ANALYZE analytics_mart.hcq_fact_6',
      'GRANT SELECT ON analytics_mart.hcq_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-127',
    modelName: 'HealthcareClinicalQualityTransformations Model v127',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_7',
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
      'ANALYZE analytics_mart.hcq_fact_7',
      'GRANT SELECT ON analytics_mart.hcq_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-128',
    modelName: 'HealthcareClinicalQualityTransformations Model v128',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_8',
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
      'ANALYZE analytics_mart.hcq_fact_8',
      'GRANT SELECT ON analytics_mart.hcq_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-129',
    modelName: 'HealthcareClinicalQualityTransformations Model v129',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_9',
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
      'ANALYZE analytics_mart.hcq_fact_9',
      'GRANT SELECT ON analytics_mart.hcq_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-130',
    modelName: 'HealthcareClinicalQualityTransformations Model v130',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_10',
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
      'ANALYZE analytics_mart.hcq_fact_10',
      'GRANT SELECT ON analytics_mart.hcq_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-131',
    modelName: 'HealthcareClinicalQualityTransformations Model v131',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_11',
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
      'ANALYZE analytics_mart.hcq_fact_11',
      'GRANT SELECT ON analytics_mart.hcq_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-132',
    modelName: 'HealthcareClinicalQualityTransformations Model v132',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_12',
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
      'ANALYZE analytics_mart.hcq_fact_12',
      'GRANT SELECT ON analytics_mart.hcq_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-133',
    modelName: 'HealthcareClinicalQualityTransformations Model v133',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_13',
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
      'ANALYZE analytics_mart.hcq_fact_13',
      'GRANT SELECT ON analytics_mart.hcq_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-134',
    modelName: 'HealthcareClinicalQualityTransformations Model v134',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_14',
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
      'ANALYZE analytics_mart.hcq_fact_14',
      'GRANT SELECT ON analytics_mart.hcq_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-135',
    modelName: 'HealthcareClinicalQualityTransformations Model v135',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_15',
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
      'ANALYZE analytics_mart.hcq_fact_15',
      'GRANT SELECT ON analytics_mart.hcq_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-136',
    modelName: 'HealthcareClinicalQualityTransformations Model v136',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_16',
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
      'ANALYZE analytics_mart.hcq_fact_16',
      'GRANT SELECT ON analytics_mart.hcq_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-137',
    modelName: 'HealthcareClinicalQualityTransformations Model v137',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_17',
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
      'ANALYZE analytics_mart.hcq_fact_17',
      'GRANT SELECT ON analytics_mart.hcq_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-138',
    modelName: 'HealthcareClinicalQualityTransformations Model v138',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_18',
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
      'ANALYZE analytics_mart.hcq_fact_18',
      'GRANT SELECT ON analytics_mart.hcq_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-139',
    modelName: 'HealthcareClinicalQualityTransformations Model v139',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_19',
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
      'ANALYZE analytics_mart.hcq_fact_19',
      'GRANT SELECT ON analytics_mart.hcq_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-140',
    modelName: 'HealthcareClinicalQualityTransformations Model v140',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_20',
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
      'ANALYZE analytics_mart.hcq_fact_20',
      'GRANT SELECT ON analytics_mart.hcq_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-141',
    modelName: 'HealthcareClinicalQualityTransformations Model v141',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_21',
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
      'ANALYZE analytics_mart.hcq_fact_21',
      'GRANT SELECT ON analytics_mart.hcq_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-142',
    modelName: 'HealthcareClinicalQualityTransformations Model v142',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_22',
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
      'ANALYZE analytics_mart.hcq_fact_22',
      'GRANT SELECT ON analytics_mart.hcq_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-143',
    modelName: 'HealthcareClinicalQualityTransformations Model v143',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_23',
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
      'ANALYZE analytics_mart.hcq_fact_23',
      'GRANT SELECT ON analytics_mart.hcq_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-144',
    modelName: 'HealthcareClinicalQualityTransformations Model v144',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_24',
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
      'ANALYZE analytics_mart.hcq_fact_24',
      'GRANT SELECT ON analytics_mart.hcq_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-145',
    modelName: 'HealthcareClinicalQualityTransformations Model v145',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_25',
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
      'ANALYZE analytics_mart.hcq_fact_25',
      'GRANT SELECT ON analytics_mart.hcq_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-146',
    modelName: 'HealthcareClinicalQualityTransformations Model v146',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_26',
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
      'ANALYZE analytics_mart.hcq_fact_26',
      'GRANT SELECT ON analytics_mart.hcq_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-147',
    modelName: 'HealthcareClinicalQualityTransformations Model v147',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_27',
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
      'ANALYZE analytics_mart.hcq_fact_27',
      'GRANT SELECT ON analytics_mart.hcq_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-148',
    modelName: 'HealthcareClinicalQualityTransformations Model v148',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_28',
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
      'ANALYZE analytics_mart.hcq_fact_28',
      'GRANT SELECT ON analytics_mart.hcq_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-149',
    modelName: 'HealthcareClinicalQualityTransformations Model v149',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_29',
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
      'ANALYZE analytics_mart.hcq_fact_29',
      'GRANT SELECT ON analytics_mart.hcq_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-150',
    modelName: 'HealthcareClinicalQualityTransformations Model v150',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_0',
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
      'ANALYZE analytics_mart.hcq_fact_0',
      'GRANT SELECT ON analytics_mart.hcq_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-151',
    modelName: 'HealthcareClinicalQualityTransformations Model v151',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_1',
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
      'ANALYZE analytics_mart.hcq_fact_1',
      'GRANT SELECT ON analytics_mart.hcq_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-152',
    modelName: 'HealthcareClinicalQualityTransformations Model v152',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_2',
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
      'ANALYZE analytics_mart.hcq_fact_2',
      'GRANT SELECT ON analytics_mart.hcq_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-153',
    modelName: 'HealthcareClinicalQualityTransformations Model v153',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_3',
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
      'ANALYZE analytics_mart.hcq_fact_3',
      'GRANT SELECT ON analytics_mart.hcq_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-154',
    modelName: 'HealthcareClinicalQualityTransformations Model v154',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_4',
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
      'ANALYZE analytics_mart.hcq_fact_4',
      'GRANT SELECT ON analytics_mart.hcq_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-155',
    modelName: 'HealthcareClinicalQualityTransformations Model v155',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_5',
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
      'ANALYZE analytics_mart.hcq_fact_5',
      'GRANT SELECT ON analytics_mart.hcq_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-156',
    modelName: 'HealthcareClinicalQualityTransformations Model v156',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_6',
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
      'ANALYZE analytics_mart.hcq_fact_6',
      'GRANT SELECT ON analytics_mart.hcq_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-157',
    modelName: 'HealthcareClinicalQualityTransformations Model v157',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_7',
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
      'ANALYZE analytics_mart.hcq_fact_7',
      'GRANT SELECT ON analytics_mart.hcq_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-158',
    modelName: 'HealthcareClinicalQualityTransformations Model v158',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_8',
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
      'ANALYZE analytics_mart.hcq_fact_8',
      'GRANT SELECT ON analytics_mart.hcq_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-159',
    modelName: 'HealthcareClinicalQualityTransformations Model v159',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_9',
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
      'ANALYZE analytics_mart.hcq_fact_9',
      'GRANT SELECT ON analytics_mart.hcq_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-160',
    modelName: 'HealthcareClinicalQualityTransformations Model v160',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_10',
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
      'ANALYZE analytics_mart.hcq_fact_10',
      'GRANT SELECT ON analytics_mart.hcq_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-161',
    modelName: 'HealthcareClinicalQualityTransformations Model v161',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_11',
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
      'ANALYZE analytics_mart.hcq_fact_11',
      'GRANT SELECT ON analytics_mart.hcq_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-162',
    modelName: 'HealthcareClinicalQualityTransformations Model v162',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_12',
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
      'ANALYZE analytics_mart.hcq_fact_12',
      'GRANT SELECT ON analytics_mart.hcq_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-163',
    modelName: 'HealthcareClinicalQualityTransformations Model v163',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_13',
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
      'ANALYZE analytics_mart.hcq_fact_13',
      'GRANT SELECT ON analytics_mart.hcq_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-164',
    modelName: 'HealthcareClinicalQualityTransformations Model v164',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_14',
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
      'ANALYZE analytics_mart.hcq_fact_14',
      'GRANT SELECT ON analytics_mart.hcq_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-165',
    modelName: 'HealthcareClinicalQualityTransformations Model v165',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_15',
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
      'ANALYZE analytics_mart.hcq_fact_15',
      'GRANT SELECT ON analytics_mart.hcq_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-166',
    modelName: 'HealthcareClinicalQualityTransformations Model v166',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_16',
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
      'ANALYZE analytics_mart.hcq_fact_16',
      'GRANT SELECT ON analytics_mart.hcq_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-167',
    modelName: 'HealthcareClinicalQualityTransformations Model v167',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_17',
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
      'ANALYZE analytics_mart.hcq_fact_17',
      'GRANT SELECT ON analytics_mart.hcq_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-168',
    modelName: 'HealthcareClinicalQualityTransformations Model v168',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_18',
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
      'ANALYZE analytics_mart.hcq_fact_18',
      'GRANT SELECT ON analytics_mart.hcq_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-169',
    modelName: 'HealthcareClinicalQualityTransformations Model v169',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_19',
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
      'ANALYZE analytics_mart.hcq_fact_19',
      'GRANT SELECT ON analytics_mart.hcq_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-170',
    modelName: 'HealthcareClinicalQualityTransformations Model v170',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_20',
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
      'ANALYZE analytics_mart.hcq_fact_20',
      'GRANT SELECT ON analytics_mart.hcq_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-171',
    modelName: 'HealthcareClinicalQualityTransformations Model v171',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_21',
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
      'ANALYZE analytics_mart.hcq_fact_21',
      'GRANT SELECT ON analytics_mart.hcq_fact_21 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-172',
    modelName: 'HealthcareClinicalQualityTransformations Model v172',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_22',
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
      'ANALYZE analytics_mart.hcq_fact_22',
      'GRANT SELECT ON analytics_mart.hcq_fact_22 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-173',
    modelName: 'HealthcareClinicalQualityTransformations Model v173',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_23',
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
      'ANALYZE analytics_mart.hcq_fact_23',
      'GRANT SELECT ON analytics_mart.hcq_fact_23 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-174',
    modelName: 'HealthcareClinicalQualityTransformations Model v174',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_24',
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
      'ANALYZE analytics_mart.hcq_fact_24',
      'GRANT SELECT ON analytics_mart.hcq_fact_24 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-175',
    modelName: 'HealthcareClinicalQualityTransformations Model v175',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_25',
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
      'ANALYZE analytics_mart.hcq_fact_25',
      'GRANT SELECT ON analytics_mart.hcq_fact_25 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-176',
    modelName: 'HealthcareClinicalQualityTransformations Model v176',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_1',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_26',
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
      'ANALYZE analytics_mart.hcq_fact_26',
      'GRANT SELECT ON analytics_mart.hcq_fact_26 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-177',
    modelName: 'HealthcareClinicalQualityTransformations Model v177',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_2',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_27',
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
      'ANALYZE analytics_mart.hcq_fact_27',
      'GRANT SELECT ON analytics_mart.hcq_fact_27 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-178',
    modelName: 'HealthcareClinicalQualityTransformations Model v178',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_3',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_28',
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
      'ANALYZE analytics_mart.hcq_fact_28',
      'GRANT SELECT ON analytics_mart.hcq_fact_28 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-179',
    modelName: 'HealthcareClinicalQualityTransformations Model v179',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_4',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_29',
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
      'ANALYZE analytics_mart.hcq_fact_29',
      'GRANT SELECT ON analytics_mart.hcq_fact_29 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-180',
    modelName: 'HealthcareClinicalQualityTransformations Model v180',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_5',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_0',
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
      'ANALYZE analytics_mart.hcq_fact_0',
      'GRANT SELECT ON analytics_mart.hcq_fact_0 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-181',
    modelName: 'HealthcareClinicalQualityTransformations Model v181',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_6',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_1',
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
      'ANALYZE analytics_mart.hcq_fact_1',
      'GRANT SELECT ON analytics_mart.hcq_fact_1 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-182',
    modelName: 'HealthcareClinicalQualityTransformations Model v182',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_7',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_2',
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
      'ANALYZE analytics_mart.hcq_fact_2',
      'GRANT SELECT ON analytics_mart.hcq_fact_2 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-183',
    modelName: 'HealthcareClinicalQualityTransformations Model v183',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_8',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_3',
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
      'ANALYZE analytics_mart.hcq_fact_3',
      'GRANT SELECT ON analytics_mart.hcq_fact_3 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-184',
    modelName: 'HealthcareClinicalQualityTransformations Model v184',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_9',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_4',
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
      'ANALYZE analytics_mart.hcq_fact_4',
      'GRANT SELECT ON analytics_mart.hcq_fact_4 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-185',
    modelName: 'HealthcareClinicalQualityTransformations Model v185',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_10',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_5',
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
      'ANALYZE analytics_mart.hcq_fact_5',
      'GRANT SELECT ON analytics_mart.hcq_fact_5 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-186',
    modelName: 'HealthcareClinicalQualityTransformations Model v186',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_11',
      'dim_lookup.catalog_6'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_6',
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
      'ANALYZE analytics_mart.hcq_fact_6',
      'GRANT SELECT ON analytics_mart.hcq_fact_6 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-187',
    modelName: 'HealthcareClinicalQualityTransformations Model v187',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_12',
      'dim_lookup.catalog_7'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_7',
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
      'ANALYZE analytics_mart.hcq_fact_7',
      'GRANT SELECT ON analytics_mart.hcq_fact_7 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-188',
    modelName: 'HealthcareClinicalQualityTransformations Model v188',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_13',
      'dim_lookup.catalog_8'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_8',
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
      'ANALYZE analytics_mart.hcq_fact_8',
      'GRANT SELECT ON analytics_mart.hcq_fact_8 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-189',
    modelName: 'HealthcareClinicalQualityTransformations Model v189',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_14',
      'dim_lookup.catalog_9'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_9',
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
      'ANALYZE analytics_mart.hcq_fact_9',
      'GRANT SELECT ON analytics_mart.hcq_fact_9 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-190',
    modelName: 'HealthcareClinicalQualityTransformations Model v190',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_15',
      'dim_lookup.catalog_10'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_10',
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
      'ANALYZE analytics_mart.hcq_fact_10',
      'GRANT SELECT ON analytics_mart.hcq_fact_10 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-191',
    modelName: 'HealthcareClinicalQualityTransformations Model v191',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_16',
      'dim_lookup.catalog_11'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_11',
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
      'ANALYZE analytics_mart.hcq_fact_11',
      'GRANT SELECT ON analytics_mart.hcq_fact_11 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-192',
    modelName: 'HealthcareClinicalQualityTransformations Model v192',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_17',
      'dim_lookup.catalog_12'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_12',
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
      'ANALYZE analytics_mart.hcq_fact_12',
      'GRANT SELECT ON analytics_mart.hcq_fact_12 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-193',
    modelName: 'HealthcareClinicalQualityTransformations Model v193',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_18',
      'dim_lookup.catalog_13'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_13',
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
      'ANALYZE analytics_mart.hcq_fact_13',
      'GRANT SELECT ON analytics_mart.hcq_fact_13 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-194',
    modelName: 'HealthcareClinicalQualityTransformations Model v194',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_19',
      'dim_lookup.catalog_14'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_14',
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
      'ANALYZE analytics_mart.hcq_fact_14',
      'GRANT SELECT ON analytics_mart.hcq_fact_14 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-195',
    modelName: 'HealthcareClinicalQualityTransformations Model v195',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_20',
      'dim_lookup.catalog_0'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_15',
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
      'ANALYZE analytics_mart.hcq_fact_15',
      'GRANT SELECT ON analytics_mart.hcq_fact_15 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-196',
    modelName: 'HealthcareClinicalQualityTransformations Model v196',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_21',
      'dim_lookup.catalog_1'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_16',
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
      'ANALYZE analytics_mart.hcq_fact_16',
      'GRANT SELECT ON analytics_mart.hcq_fact_16 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-197',
    modelName: 'HealthcareClinicalQualityTransformations Model v197',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_22',
      'dim_lookup.catalog_2'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_17',
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
      'ANALYZE analytics_mart.hcq_fact_17',
      'GRANT SELECT ON analytics_mart.hcq_fact_17 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-198',
    modelName: 'HealthcareClinicalQualityTransformations Model v198',
    category: 'HEDIS measurement calculation',
    sourceTables: [
      'raw_staging.table_23',
      'dim_lookup.catalog_3'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_18',
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
      'ANALYZE analytics_mart.hcq_fact_18',
      'GRANT SELECT ON analytics_mart.hcq_fact_18 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-199',
    modelName: 'HealthcareClinicalQualityTransformations Model v199',
    category: '30-day hospital readmission risk indices',
    sourceTables: [
      'raw_staging.table_24',
      'dim_lookup.catalog_4'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_19',
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
      'ANALYZE analytics_mart.hcq_fact_19',
      'GRANT SELECT ON analytics_mart.hcq_fact_19 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  },
  {
    transformId: 'TRSF-HCQ-200',
    modelName: 'HealthcareClinicalQualityTransformations Model v200',
    category: 'and prescription adherence flags',
    sourceTables: [
      'raw_staging.table_0',
      'dim_lookup.catalog_5'
    ],
    targetMartTable: 'analytics_mart.hcq_fact_20',
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
      'ANALYZE analytics_mart.hcq_fact_20',
      'GRANT SELECT ON analytics_mart.hcq_fact_20 TO ROLE bi_reporting'
    ],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE',
    isOptimizedForSparkVectorization: true
  }
];
