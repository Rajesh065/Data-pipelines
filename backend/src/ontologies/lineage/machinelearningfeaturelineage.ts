/**
 * Column-Level Data Lineage & Dependency Graph: MachineLearningFeatureLineage
 * Domain Focus: Clickstream logs -> Daily batch aggregators -> Feature table partitions -> Training dataset snapshots
 */

export interface LineageGraphEdge {
  lineageEdgeId: string;
  sourceNode: string;
  targetNode: string;
  transformationRule: string;
  dataClassification: string;
  ownerTeam: string;
  isAutomatedValidationActive: boolean;
}

export const LINEAGE_MLF_DATASET: LineageGraphEdge[] = [
  {
    lineageEdgeId: 'EDGE-MLF-001',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-002',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-003',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-004',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-005',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-006',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-007',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-008',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-009',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-010',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-011',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-012',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-013',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-014',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-015',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-016',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-017',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-018',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-019',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-020',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-021',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-022',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-023',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-024',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-025',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-026',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-027',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-028',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-029',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-030',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-031',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-032',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-033',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-034',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-035',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-036',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-037',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-038',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-039',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-040',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-041',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-042',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-043',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-044',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-045',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-046',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-047',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-048',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-049',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-050',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-051',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-052',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-053',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-054',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-055',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-056',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-057',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-058',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-059',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-060',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-061',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-062',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-063',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-064',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-065',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-066',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-067',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-068',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-069',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-070',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-071',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-072',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-073',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-074',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-075',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-076',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-077',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-078',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-079',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-080',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-081',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-082',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-083',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-084',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-085',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-086',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-087',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-088',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-089',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-090',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-091',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-092',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-093',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-094',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-095',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-096',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-097',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-098',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-099',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-100',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-101',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-102',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-103',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-104',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-105',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-106',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-107',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-108',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-109',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-110',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-111',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-112',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-113',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-114',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-115',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-116',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-117',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-118',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-119',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-120',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-121',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-122',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-123',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-124',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-125',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-126',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-127',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-128',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-129',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-130',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-131',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-132',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-133',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-134',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-135',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-136',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-137',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-138',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-139',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-140',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-141',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-142',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-143',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-144',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-145',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-146',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-147',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-148',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-149',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-MLF-150',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  }
];
