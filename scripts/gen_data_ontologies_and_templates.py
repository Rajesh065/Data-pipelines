import os

def write(p, c):
    d = os.path.dirname(p)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(p, 'w', encoding='utf-8') as out:
        out.write(c.strip() + '\n')
    print('Created:', p)

print("Step 2: Generating rich Data Engineering Ontologies & DAG Templates...")

# 1. Pipeline DAG Templates across 12 Enterprise Domains (150 DAGs per domain)
domains = [
    ("FinancialSettlementETL", "FIN", "High-frequency transaction ledger clearing, currency FX normalization, and anti-money laundering (AML) pattern extraction"),
    ("HealthcareHl7FhirIngest", "HL7", "Electronic Health Record (EHR) HL7 v2 and FHIR R4 clinical observation ingestion and HIPAA compliant pseudonymization"),
    ("EcommerceClickstreamRealTime", "ECM", "Real-time user web events, cart abandonment anomaly triggers, and recommendation vector feature extraction"),
    ("IoTSensorTelemetryBatch", "IOT", "Industrial SCADA sensor timeseries ingestion, rolling statistical anomaly detection, and predictive maintenance metrics"),
    ("AdTechRealTimeBiddingStream", "ADT", "Sub-millisecond programmatic advertising bid request ingestion, fraud bot filtering, and attribution modeling"),
    ("SupplyChainInventorySync", "SCM", "Multi-warehouse stock replenishment CDC, purchase order reconciliation, and supplier SLA monitoring"),
    ("CybersecuritySIEMLogParser", "SEC", "Distributed firewall and auth log parsing, Sigma rule evaluation, and incident response event routing"),
    ("GenomicsVariantCallingPipeline", "GEN", "Next-generation sequencing BAM/VCF file batch parsing, genomic variant annotation, and cohort clustering"),
    ("BankingFraudDetectionStream", "FRD", "Real-time Kafka credit card transaction feature calculation, graph network scoring, and card blocking webhook dispatch"),
    ("TelecommunicationsCDRAnalytics", "TEL", "Call Detail Record (CDR) batch aggregation, cellular tower handoff telemetry, and subscriber churn modeling"),
    ("CloudInfrastructureCostAudit", "FINOPS", "Multi-cloud AWS/Azure/GCP billing itemization, unallocated resource tagging, and anomaly alerting"),
    ("Customer360IdentityResolution", "CRM", "Multi-channel user identity graph resolution, deterministic matching, and golden record synthesis")
]

for dom_name, prefix, desc in domains:
    dags = []
    for i in range(1, 151):
        dag_str = f"""  {{
    dagId: 'DAG-{prefix}-{i:03d}',
    pipelineName: '{dom_name} Production Workflow #{i}',
    domain: '{dom_name}',
    category: '{desc.split(",")[i % len(desc.split(","))].strip()}',
    cronSchedule: '{0 + (i % 60)} {0 + (i % 24)} * * *',
    sourceProtocol: '{'POSTGRES' if i % 4 == 0 else ('KAFKA' if i % 3 == 0 else ('SNOWFLAKE' if i % 2 == 0 else 'ICEBERG'))}',
    sinkProtocol: '{'SNOWFLAKE' if i % 2 == 0 else 'BIGQUERY'}',
    batchSizeRecords: {50000 + (i % 20) * 10000},
    maxParallelTasks: {4 + (i % 12)},
    slaThresholdMinutes: {15 + (i % 45)},
    retryPolicy: {{ maxRetries: 3, backoffExponentialFactor: 2.0, initialDelaySeconds: 30 }},
    validationAssertionsCount: {8 + (i % 16)},
    lineageTrackedColumns: ['record_id', 'source_timestamp', 'payload_hash', 'cleared_amount', 'tenant_id']
  }}"""
        dags.append(dag_str)

    content = f"""/**
 * Enterprise Data Pipeline DAG Specification: {dom_name}
 * Domain Focus: {desc}
 * Standard: DataFlow OS Orchestration Engine
 */

export interface EnterprisePipelineDAG {{
  dagId: string;
  pipelineName: string;
  domain: string;
  category: string;
  cronSchedule: string;
  sourceProtocol: string;
  sinkProtocol: string;
  batchSizeRecords: number;
  maxParallelTasks: number;
  slaThresholdMinutes: number;
  retryPolicy: {{ maxRetries: number; backoffExponentialFactor: number; initialDelaySeconds: number }};
  validationAssertionsCount: number;
  lineageTrackedColumns: string[];
}}

export const PIPELINE_{prefix}_DATASET: EnterprisePipelineDAG[] = [
{',\n'.join(dags)}
];

export class {prefix}_PipelineCatalog {{
  static search(query: string): EnterprisePipelineDAG[] {{
    const q = query.toLowerCase().trim();
    if (!q) return PIPELINE_{prefix}_DATASET.slice(0, 20);
    return PIPELINE_{prefix}_DATASET.filter(p => p.pipelineName.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }}
}}
"""
    write(f'backend/src/ontologies/pipelines/{dom_name.lower()}.ts', content)

# 2. Great Expectations Data Quality Rulesets (8 categories)
quality_domains = [
    ("SchemaDriftAndNullChecks", "SDN", "Strict column data type assertions, unexpected new column detectors, and null ratio constraints"),
    ("NumericRangeAndDistribution", "NRD", "Z-score anomaly bounds, min-max thresholds, and standard deviation bounds"),
    ("StringFormatAndRegexValidators", "SFR", "ISO-8601 timestamps, UUIDv4 identifiers, email formats, and custom regex expressions"),
    ("ReferentialIntegrityAndUniqueness", "RIU", "Foreign key existence verification, primary key uniqueness constraints, and orphan record counters"),
    ("RowVolumeAndFreshnessSLA", "RVF", "Expected minimum batch volume assertions, data arrival latency bounds, and partition completeness"),
    ("StatisticalDistributionAndDrift", "SDD", "Kullback-Leibler divergence, Kolmogorov-Smirnov test assertions, and population drift detectors")
]

for q_name, prefix, desc in quality_domains:
    assertions = []
    for i in range(1, 151):
        item = f"""  {{
    assertionId: 'ASSERT-{prefix}-{i:03d}',
    ruleName: '{q_name} Assertion Check #{i}',
    category: '{desc.split(",")[i % len(desc.split(","))].strip()}',
    targetTable: 'enterprise_data_mart.table_{i % 30}',
    targetColumn: 'column_attr_{i % 20}',
    evaluationEngine: '{'SQL_ASSERTION' if i % 2 == 0 else 'GREAT_EXPECTATIONS'}',
    isBlocking: {'true' if i % 3 == 0 else 'false'},
    alertSeverity: '{'CRITICAL_P1' if i % 3 == 0 else 'HIGH_P2'}',
    autoRemediationAction: '{'QUARANTINE_ROW_TO_DLQ' if i % 2 == 0 else 'RETRY_STAGE_WITH_BACKOFF'}'
  }}"""
        assertions.append(item)

    content = f"""/**
 * Data Quality & Great Expectations Ruleset: {q_name}
 * Description: {desc}
 */

export interface DataQualityRule {{
  assertionId: string;
  ruleName: string;
  category: string;
  targetTable: string;
  targetColumn: string;
  evaluationEngine: string;
  isBlocking: boolean;
  alertSeverity: string;
  autoRemediationAction: string;
}}

export const QUALITY_{prefix}_DATASET: DataQualityRule[] = [
{',\n'.join(assertions)}
];
"""
    write(f'backend/src/ontologies/quality/{q_name.lower()}.ts', content)

# 3. Connectors & Protocol Adapters Schema Catalog
connectors_list = [
    ("RelationalSQLConnectors", "SQL", ["PostgreSQL CDC Connector", "MySQL Debezium CDC", "Oracle GoldenGate Stream", "SQL Server CDC Engine", "CockroachDB Changefeed"]),
    ("CloudDataWarehouseConnectors", "DWH", ["Snowflake Snowpipe Streaming", "Google BigQuery Storage API", "AWS Redshift Serverless Sink", "Databricks Delta Sharing"]),
    ("StreamingBrokerConnectors", "STR", ["Apache Kafka Consumer Adapter", "AWS Kinesis Firehose Stream", "RabbitMQ AMQP Adapter", "Apache Pulsar Mesh Client"]),
    ("ObjectStorageLakeConnectors", "LAK", ["Apache Iceberg REST Catalog", "AWS S3 Parquet Compactor", "Google Cloud Storage Writer", "Azure ADLS Gen2 Client"]),
    ("NoSQLAndDocumentConnectors", "NOSQL", ["MongoDB Change Streams", "AWS DynamoDB Streams Adapter", "Cassandra CQL CDC Engine", "Redis PubSub Streamer"])
]

for cat_name, prefix, conns in connectors_list:
    conn_defs = []
    for i in range(1, 121):
        c_name = conns[i % len(conns)]
        c_str = f"""  {{
    connectorId: 'CONN-{prefix}-{i:03d}',
    name: '{c_name} (Cluster #{i})',
    category: '{cat_name}',
    protocolType: '{'STREAMING' if 'Stream' in c_name or 'Kafka' in c_name else 'BATCH_CDC'}',
    supportedCompression: ['SNAPPY', 'ZSTD', 'GZIP'],
    maxThroughputMbPerSec: {100 + (i % 40) * 25},
    connectionPoolSize: {16 + (i % 32)},
    supportsSchemaEvolution: true,
    supportsTransactions: {'true' if i % 2 == 0 else 'false'}
  }}"""
        conn_defs.append(c_str)

    content = f"""/**
 * Connector Schema & Protocol Directory: {cat_name}
 */

export interface ConnectorSpec {{
  connectorId: string;
  name: string;
  category: string;
  protocolType: string;
  supportedCompression: string[];
  maxThroughputMbPerSec: number;
  connectionPoolSize: number;
  supportsSchemaEvolution: boolean;
  supportsTransactions: boolean;
}}

export const CONNECTORS_{prefix}_DATASET: ConnectorSpec[] = [
{',\n'.join(conn_defs)}
];
"""
    write(f'backend/src/ontologies/connectors/{cat_name.lower()}.ts', content)

print("Data Engineering Ontologies & DAG Templates generated successfully!")
