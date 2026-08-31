/**
 * Column-Level Data Lineage & Dependency Graph: RegulatoryComplianceLineage
 * Domain Focus: PII ingestion nodes -> Tokenization vaults -> Masked reporting views & GDPR right-to-be-forgotten cascades
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

export const LINEAGE_REG_DATASET: LineageGraphEdge[] = [
  {
    lineageEdgeId: 'EDGE-REG-001',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-002',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-003',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-004',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-005',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-006',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-007',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-008',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-009',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-010',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-011',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-012',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-013',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-014',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-015',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-016',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-017',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-018',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-019',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-020',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-021',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-022',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-023',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-024',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-025',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-026',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-027',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-028',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-029',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-030',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-031',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-032',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-033',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-034',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-035',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-036',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-037',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-038',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-039',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-040',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-041',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-042',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-043',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-044',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-045',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-046',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-047',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-048',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-049',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-050',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-051',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-052',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-053',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-054',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-055',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-056',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-057',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-058',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-059',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-060',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-061',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-062',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-063',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-064',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-065',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-066',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-067',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-068',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-069',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-070',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-071',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-072',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-073',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-074',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-075',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-076',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-077',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-078',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-079',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-080',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-081',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-082',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-083',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-084',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-085',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-086',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-087',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-088',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-089',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-090',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-091',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-092',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-093',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-094',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-095',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-096',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-097',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-098',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-099',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-100',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-101',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-102',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-103',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-104',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-105',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-106',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-107',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-108',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-109',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-110',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-111',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-112',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-113',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-114',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-115',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-116',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-117',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-118',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-119',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-120',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-121',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-122',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-123',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-124',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-125',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-126',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-127',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-128',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-129',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-130',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-131',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-132',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-133',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-134',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-135',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-136',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-137',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-138',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-139',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-140',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-141',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-142',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-143',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-144',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-145',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-146',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-147',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-148',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-149',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-REG-150',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  }
];
