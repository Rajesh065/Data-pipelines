/**
 * Column-Level Data Lineage & Dependency Graph: RealTimeFeatureStoreLineage
 * Domain Focus: Kafka streaming topics -> Flink stateful windowing -> Redis online store & Feast offline store
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

export const LINEAGE_RFS_DATASET: LineageGraphEdge[] = [
  {
    lineageEdgeId: 'EDGE-RFS-001',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-002',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-003',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-004',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-005',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-006',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-007',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-008',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-009',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-010',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-011',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-012',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-013',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-014',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-015',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-016',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-017',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-018',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-019',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-020',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-021',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-022',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-023',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-024',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-025',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-026',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-027',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-028',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-029',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-030',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-031',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-032',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-033',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-034',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-035',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-036',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-037',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-038',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-039',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-040',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-041',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-042',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-043',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-044',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-045',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-046',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-047',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-048',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-049',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-050',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-051',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-052',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-053',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-054',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-055',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-056',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-057',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-058',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-059',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-060',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-061',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-062',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-063',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-064',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-065',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-066',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-067',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-068',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-069',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-070',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-071',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-072',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-073',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-074',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-075',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-076',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-077',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-078',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-079',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-080',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-081',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-082',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-083',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-084',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-085',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-086',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-087',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-088',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-089',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-090',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-091',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-092',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-093',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-094',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-095',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-096',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-097',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-098',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-099',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-100',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-101',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-102',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-103',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-104',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-105',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-106',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-107',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-108',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-109',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-110',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-111',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-112',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-113',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-114',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-115',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-116',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-117',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-118',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-119',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-120',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-121',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-122',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-123',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-124',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-125',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-126',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-127',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-128',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-129',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-130',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-131',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-132',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-133',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-134',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-135',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-136',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-137',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-138',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-139',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-140',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-141',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-142',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-143',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-144',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-145',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-146',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-147',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-148',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-149',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-RFS-150',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  }
];
