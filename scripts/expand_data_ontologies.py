import os

def write(p, c):
    d = os.path.dirname(p)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(p, 'w', encoding='utf-8') as out:
        out.write(c.strip() + '\n')
    print('Created:', p)

# 1. dbt SQL & Vectorized Transformation Catalogs
transform_domains = [
    ("FinancialAccountingTransformations", "FAT", "Balance sheet adjustments, general ledger rollup, multi-currency conversion, and tax withholding computations"),
    ("SupplyChainOptimizationTransformations", "SCO", "Inventory safety stock calculation, EOQ economic order quantity reorders, and supplier fulfillment lead time aggregation"),
    ("CustomerLifecycleMetricsTransformations", "CLM", "Churn probability scoring, cohort retention matrix generation, and customer lifetime value (LTV) decile segmentation"),
    ("HealthcareClinicalQualityTransformations", "HCQ", "HEDIS measurement calculation, 30-day hospital readmission risk indices, and prescription adherence flags"),
    ("SecurityEventCorrelationTransformations", "SEC", "Failed login velocity thresholds, brute-force attack windowing, and compromised credential correlation"),
    ("AdTechCampaignAttributionTransformations", "ATC", "Multi-touch attribution (MTA), Shapley value attribution weights, and cost-per-acquisition (CPA) aggregation")
]

for t_name, prefix, desc in transform_domains:
    transforms = []
    for i in range(1, 201):
        item = f"""  {{
    transformId: 'TRSF-{prefix}-{i:03d}',
    modelName: '{t_name} Model v{i}',
    category: '{desc.split(",")[i % len(desc.split(","))].strip()}',
    sourceTables: ['raw_staging.table_{i % 25}', 'dim_lookup.catalog_{i % 15}'],
    targetMartTable: 'analytics_mart.{prefix.lower()}_fact_{i % 30}',
    materializationType: '{'INCREMENTAL' if i % 2 == 0 else 'TABLE'}',
    partitionColumn: 'event_date',
    clusterKeys: ['tenant_id', 'entity_id'],
    preHookQueries: ['SET timezone = "UTC"', 'CREATE TEMPORARY TABLE IF NOT EXISTS _tmp_batch'],
    postHookQueries: ['ANALYZE analytics_mart.{prefix.lower()}_fact_{i % 30}', 'GRANT SELECT ON analytics_mart.{prefix.lower()}_fact_{i % 30} TO ROLE bi_reporting'],
    sqlExpression: 'SELECT record_id, entity_id, SUM(metric_value) OVER(PARTITION BY entity_id ORDER BY event_timestamp ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_metric FROM source_dataset WHERE is_valid = TRUE'
  }}"""
        transforms.append(item)

    content = f"""/**
 * dbt SQL & Vectorized Transformation Model Registry: {t_name}
 * Domain Focus: {desc}
 */

export interface TransformationModelSpec {{
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
}}

export const TRANSFORMATION_{prefix}_DATASET: TransformationModelSpec[] = [
{',\n'.join(transforms)}
];
"""
    write(f'backend/src/ontologies/transformations/{t_name.lower()}.ts', content)

# 2. Column-Level Data Lineage & Dependency Graphs
lineage_domains = [
    ("EnterpriseDataWarehouseLineage", "EDW", "Raw S3 ingest -> Bronze Staging -> Silver Conformed -> Gold Analytics Marts"),
    ("RealTimeFeatureStoreLineage", "RFS", "Kafka streaming topics -> Flink stateful windowing -> Redis online store & Feast offline store"),
    ("RegulatoryComplianceLineage", "REG", "PII ingestion nodes -> Tokenization vaults -> Masked reporting views & GDPR right-to-be-forgotten cascades"),
    ("MachineLearningFeatureLineage", "MLF", "Clickstream logs -> Daily batch aggregators -> Feature table partitions -> Training dataset snapshots"),
    ("FinancialAuditLineage", "AUD", "Inbound Swift MT940 records -> Ledger journal entries -> Trial balance marts -> SEC 10-K disclosures")
]

for l_name, prefix, desc in lineage_domains:
    edges = []
    for i in range(1, 151):
        e_str = f"""  {{
    lineageEdgeId: 'EDGE-{prefix}-{i:03d}',
    sourceNode: 'lakehouse.source_table_{i % 30}.col_{i % 15}',
    targetNode: 'warehouse.target_mart_{i % 20}.col_derived_{i % 10}',
    transformationRule: '{'DIRECT_PROJECTION' if i % 3 == 0 else ('MATHEMATICAL_DERIVATION' if i % 2 == 0 else 'CRYPTOGRAPHIC_HASH')}',
    dataClassification: '{'PII_RESTRICTED' if i % 4 == 0 else ('CONFIDENTIAL' if i % 2 == 0 else 'PUBLIC_INTERNAL')}',
    ownerTeam: '{'Data Engineering Core' if i % 2 == 0 else 'Analytics Engineering'}',
    isAutomatedValidationActive: true
  }}"""
        edges.append(e_str)

    content = f"""/**
 * Column-Level Data Lineage & Dependency Graph: {l_name}
 * Domain Focus: {desc}
 */

export interface LineageGraphEdge {{
  lineageEdgeId: string;
  sourceNode: string;
  targetNode: string;
  transformationRule: string;
  dataClassification: string;
  ownerTeam: string;
  isAutomatedValidationActive: boolean;
}}

export const LINEAGE_{prefix}_DATASET: LineageGraphEdge[] = [
{',\n'.join(edges)}
];
"""
    write(f'backend/src/ontologies/lineage/{l_name.lower()}.ts', content)

print("Expanded Data Engineering Ontologies generated successfully!")
