/**
 * Column-Level Data Lineage & Dependency Graph: EnterpriseDataWarehouseLineage
 * Domain Focus: Raw S3 ingest -> Bronze Staging -> Silver Conformed -> Gold Analytics Marts
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

export const LINEAGE_EDW_DATASET: LineageGraphEdge[] = [
  {
    lineageEdgeId: 'EDGE-EDW-001',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-002',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-003',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-004',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-005',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-006',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-007',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-008',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-009',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-010',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-011',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-012',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-013',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-014',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-015',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-016',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-017',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-018',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-019',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-020',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-021',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-022',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-023',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-024',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-025',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-026',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-027',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-028',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-029',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-030',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-031',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-032',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-033',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-034',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-035',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-036',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-037',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-038',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-039',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-040',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-041',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-042',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-043',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-044',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-045',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-046',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-047',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-048',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-049',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-050',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-051',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-052',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-053',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-054',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-055',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-056',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-057',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-058',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-059',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-060',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-061',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-062',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-063',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-064',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-065',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-066',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-067',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-068',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-069',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-070',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-071',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-072',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-073',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-074',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-075',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-076',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-077',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-078',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-079',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-080',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-081',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-082',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-083',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-084',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-085',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-086',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-087',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-088',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-089',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-090',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-091',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-092',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-093',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-094',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-095',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-096',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-097',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-098',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-099',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-100',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-101',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-102',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-103',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-104',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-105',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-106',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-107',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-108',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-109',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-110',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-111',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-112',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-113',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-114',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-115',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-116',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-117',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-118',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-119',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-120',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-121',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-122',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-123',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-124',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-125',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-126',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-127',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-128',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-129',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-130',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-131',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-132',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-133',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-134',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-135',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-136',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-137',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-138',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-139',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-140',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-141',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-142',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-143',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-144',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-145',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-146',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-147',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-148',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-149',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-EDW-150',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  }
];
