/**
 * Column-Level Data Lineage & Dependency Graph: FinancialAuditLineage
 * Domain Focus: Inbound Swift MT940 records -> Ledger journal entries -> Trial balance marts -> SEC 10-K disclosures
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

export const LINEAGE_AUD_DATASET: LineageGraphEdge[] = [
  {
    lineageEdgeId: 'EDGE-AUD-001',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-002',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-003',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-004',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-005',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-006',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-007',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-008',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-009',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-010',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-011',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-012',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-013',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-014',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-015',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-016',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-017',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-018',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-019',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-020',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-021',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-022',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-023',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-024',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-025',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-026',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-027',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-028',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-029',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-030',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-031',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-032',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-033',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-034',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-035',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-036',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-037',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-038',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-039',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-040',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-041',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-042',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-043',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-044',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-045',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-046',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-047',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-048',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-049',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-050',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-051',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-052',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-053',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-054',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-055',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-056',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-057',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-058',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-059',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-060',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-061',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-062',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-063',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-064',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-065',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-066',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-067',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-068',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-069',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-070',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-071',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-072',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-073',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-074',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-075',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-076',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-077',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-078',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-079',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-080',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-081',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-082',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-083',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-084',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-085',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-086',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-087',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-088',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-089',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-090',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-091',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-092',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-093',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-094',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-095',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-096',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-097',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-098',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-099',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-100',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-101',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-102',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-103',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-104',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-105',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-106',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-107',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-108',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-109',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-110',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-111',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-112',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-113',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-114',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-115',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-116',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-117',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-118',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-119',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-120',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-121',
    sourceNode: 'lakehouse.source_table_1.col_1',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-122',
    sourceNode: 'lakehouse.source_table_2.col_2',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-123',
    sourceNode: 'lakehouse.source_table_3.col_3',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-124',
    sourceNode: 'lakehouse.source_table_4.col_4',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-125',
    sourceNode: 'lakehouse.source_table_5.col_5',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-126',
    sourceNode: 'lakehouse.source_table_6.col_6',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-127',
    sourceNode: 'lakehouse.source_table_7.col_7',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-128',
    sourceNode: 'lakehouse.source_table_8.col_8',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-129',
    sourceNode: 'lakehouse.source_table_9.col_9',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-130',
    sourceNode: 'lakehouse.source_table_10.col_10',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-131',
    sourceNode: 'lakehouse.source_table_11.col_11',
    targetNode: 'warehouse.target_mart_11.col_derived_1',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-132',
    sourceNode: 'lakehouse.source_table_12.col_12',
    targetNode: 'warehouse.target_mart_12.col_derived_2',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-133',
    sourceNode: 'lakehouse.source_table_13.col_13',
    targetNode: 'warehouse.target_mart_13.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-134',
    sourceNode: 'lakehouse.source_table_14.col_14',
    targetNode: 'warehouse.target_mart_14.col_derived_4',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-135',
    sourceNode: 'lakehouse.source_table_15.col_0',
    targetNode: 'warehouse.target_mart_15.col_derived_5',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-136',
    sourceNode: 'lakehouse.source_table_16.col_1',
    targetNode: 'warehouse.target_mart_16.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-137',
    sourceNode: 'lakehouse.source_table_17.col_2',
    targetNode: 'warehouse.target_mart_17.col_derived_7',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-138',
    sourceNode: 'lakehouse.source_table_18.col_3',
    targetNode: 'warehouse.target_mart_18.col_derived_8',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-139',
    sourceNode: 'lakehouse.source_table_19.col_4',
    targetNode: 'warehouse.target_mart_19.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-140',
    sourceNode: 'lakehouse.source_table_20.col_5',
    targetNode: 'warehouse.target_mart_0.col_derived_0',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-141',
    sourceNode: 'lakehouse.source_table_21.col_6',
    targetNode: 'warehouse.target_mart_1.col_derived_1',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-142',
    sourceNode: 'lakehouse.source_table_22.col_7',
    targetNode: 'warehouse.target_mart_2.col_derived_2',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-143',
    sourceNode: 'lakehouse.source_table_23.col_8',
    targetNode: 'warehouse.target_mart_3.col_derived_3',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-144',
    sourceNode: 'lakehouse.source_table_24.col_9',
    targetNode: 'warehouse.target_mart_4.col_derived_4',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-145',
    sourceNode: 'lakehouse.source_table_25.col_10',
    targetNode: 'warehouse.target_mart_5.col_derived_5',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-146',
    sourceNode: 'lakehouse.source_table_26.col_11',
    targetNode: 'warehouse.target_mart_6.col_derived_6',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-147',
    sourceNode: 'lakehouse.source_table_27.col_12',
    targetNode: 'warehouse.target_mart_7.col_derived_7',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-148',
    sourceNode: 'lakehouse.source_table_28.col_13',
    targetNode: 'warehouse.target_mart_8.col_derived_8',
    transformationRule: 'MATHEMATICAL_DERIVATION',
    dataClassification: 'PII_RESTRICTED',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-149',
    sourceNode: 'lakehouse.source_table_29.col_14',
    targetNode: 'warehouse.target_mart_9.col_derived_9',
    transformationRule: 'CRYPTOGRAPHIC_HASH',
    dataClassification: 'PUBLIC_INTERNAL',
    ownerTeam: 'Analytics Engineering',
    isAutomatedValidationActive: true
  },
  {
    lineageEdgeId: 'EDGE-AUD-150',
    sourceNode: 'lakehouse.source_table_0.col_0',
    targetNode: 'warehouse.target_mart_10.col_derived_0',
    transformationRule: 'DIRECT_PROJECTION',
    dataClassification: 'CONFIDENTIAL',
    ownerTeam: 'Data Engineering Core',
    isAutomatedValidationActive: true
  }
];
