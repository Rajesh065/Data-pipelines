/**
 * Production DAG Pipeline Template: FinancialSettlementPipelines
 * Domain Focus: Double-entry bookkeeping, ISO 20022 message parsing, swift clearing, and regulatory reconciliation
 * Orchestration Engine: DataFlow OS Distributed Scheduler
 */

export interface DagPipelineTemplate {
  pipelineId: string;
  name: string;
  domain: string;
  category: string;
  cronSchedule: string;
  batchSizeRows: number;
  targetSlaMinutes: number;
  retryPolicy: {
    maxRetries: number;
    backoffMultiplierSec: number;
    notifyOnFailure: boolean;
    alertSlackChannel: string;
  };
  storageFormat: string;
  isProductionActive: boolean;
}

export const PIPELINES_FIN_DATASET: DagPipelineTemplate[] = [
  {
    pipelineId: 'DAG-FIN-001',
    name: 'FinancialSettlementPipelines Pipeline #1',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-002',
    name: 'FinancialSettlementPipelines Pipeline #2',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-003',
    name: 'FinancialSettlementPipelines Pipeline #3',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-004',
    name: 'FinancialSettlementPipelines Pipeline #4',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-005',
    name: 'FinancialSettlementPipelines Pipeline #5',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-006',
    name: 'FinancialSettlementPipelines Pipeline #6',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-007',
    name: 'FinancialSettlementPipelines Pipeline #7',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-008',
    name: 'FinancialSettlementPipelines Pipeline #8',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-009',
    name: 'FinancialSettlementPipelines Pipeline #9',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-010',
    name: 'FinancialSettlementPipelines Pipeline #10',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-011',
    name: 'FinancialSettlementPipelines Pipeline #11',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-012',
    name: 'FinancialSettlementPipelines Pipeline #12',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-013',
    name: 'FinancialSettlementPipelines Pipeline #13',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-014',
    name: 'FinancialSettlementPipelines Pipeline #14',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-015',
    name: 'FinancialSettlementPipelines Pipeline #15',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-016',
    name: 'FinancialSettlementPipelines Pipeline #16',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-017',
    name: 'FinancialSettlementPipelines Pipeline #17',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-018',
    name: 'FinancialSettlementPipelines Pipeline #18',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-019',
    name: 'FinancialSettlementPipelines Pipeline #19',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-020',
    name: 'FinancialSettlementPipelines Pipeline #20',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-021',
    name: 'FinancialSettlementPipelines Pipeline #21',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-022',
    name: 'FinancialSettlementPipelines Pipeline #22',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-023',
    name: 'FinancialSettlementPipelines Pipeline #23',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-024',
    name: 'FinancialSettlementPipelines Pipeline #24',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-025',
    name: 'FinancialSettlementPipelines Pipeline #25',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-026',
    name: 'FinancialSettlementPipelines Pipeline #26',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-027',
    name: 'FinancialSettlementPipelines Pipeline #27',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-028',
    name: 'FinancialSettlementPipelines Pipeline #28',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-029',
    name: 'FinancialSettlementPipelines Pipeline #29',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-030',
    name: 'FinancialSettlementPipelines Pipeline #30',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-031',
    name: 'FinancialSettlementPipelines Pipeline #31',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-032',
    name: 'FinancialSettlementPipelines Pipeline #32',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-033',
    name: 'FinancialSettlementPipelines Pipeline #33',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-034',
    name: 'FinancialSettlementPipelines Pipeline #34',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-035',
    name: 'FinancialSettlementPipelines Pipeline #35',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-036',
    name: 'FinancialSettlementPipelines Pipeline #36',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-037',
    name: 'FinancialSettlementPipelines Pipeline #37',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-038',
    name: 'FinancialSettlementPipelines Pipeline #38',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-039',
    name: 'FinancialSettlementPipelines Pipeline #39',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-040',
    name: 'FinancialSettlementPipelines Pipeline #40',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-041',
    name: 'FinancialSettlementPipelines Pipeline #41',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-042',
    name: 'FinancialSettlementPipelines Pipeline #42',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-043',
    name: 'FinancialSettlementPipelines Pipeline #43',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-044',
    name: 'FinancialSettlementPipelines Pipeline #44',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-045',
    name: 'FinancialSettlementPipelines Pipeline #45',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-046',
    name: 'FinancialSettlementPipelines Pipeline #46',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-047',
    name: 'FinancialSettlementPipelines Pipeline #47',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-048',
    name: 'FinancialSettlementPipelines Pipeline #48',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-049',
    name: 'FinancialSettlementPipelines Pipeline #49',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-050',
    name: 'FinancialSettlementPipelines Pipeline #50',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-051',
    name: 'FinancialSettlementPipelines Pipeline #51',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-052',
    name: 'FinancialSettlementPipelines Pipeline #52',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-053',
    name: 'FinancialSettlementPipelines Pipeline #53',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-054',
    name: 'FinancialSettlementPipelines Pipeline #54',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-055',
    name: 'FinancialSettlementPipelines Pipeline #55',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-056',
    name: 'FinancialSettlementPipelines Pipeline #56',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-057',
    name: 'FinancialSettlementPipelines Pipeline #57',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-058',
    name: 'FinancialSettlementPipelines Pipeline #58',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-059',
    name: 'FinancialSettlementPipelines Pipeline #59',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-060',
    name: 'FinancialSettlementPipelines Pipeline #60',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-061',
    name: 'FinancialSettlementPipelines Pipeline #61',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-062',
    name: 'FinancialSettlementPipelines Pipeline #62',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-063',
    name: 'FinancialSettlementPipelines Pipeline #63',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-064',
    name: 'FinancialSettlementPipelines Pipeline #64',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-065',
    name: 'FinancialSettlementPipelines Pipeline #65',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-066',
    name: 'FinancialSettlementPipelines Pipeline #66',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-067',
    name: 'FinancialSettlementPipelines Pipeline #67',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-068',
    name: 'FinancialSettlementPipelines Pipeline #68',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-069',
    name: 'FinancialSettlementPipelines Pipeline #69',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-070',
    name: 'FinancialSettlementPipelines Pipeline #70',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-071',
    name: 'FinancialSettlementPipelines Pipeline #71',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-072',
    name: 'FinancialSettlementPipelines Pipeline #72',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-073',
    name: 'FinancialSettlementPipelines Pipeline #73',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-074',
    name: 'FinancialSettlementPipelines Pipeline #74',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-075',
    name: 'FinancialSettlementPipelines Pipeline #75',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-076',
    name: 'FinancialSettlementPipelines Pipeline #76',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-077',
    name: 'FinancialSettlementPipelines Pipeline #77',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-078',
    name: 'FinancialSettlementPipelines Pipeline #78',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-079',
    name: 'FinancialSettlementPipelines Pipeline #79',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-080',
    name: 'FinancialSettlementPipelines Pipeline #80',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-081',
    name: 'FinancialSettlementPipelines Pipeline #81',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-082',
    name: 'FinancialSettlementPipelines Pipeline #82',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-083',
    name: 'FinancialSettlementPipelines Pipeline #83',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-084',
    name: 'FinancialSettlementPipelines Pipeline #84',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-085',
    name: 'FinancialSettlementPipelines Pipeline #85',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-086',
    name: 'FinancialSettlementPipelines Pipeline #86',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-087',
    name: 'FinancialSettlementPipelines Pipeline #87',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-088',
    name: 'FinancialSettlementPipelines Pipeline #88',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-089',
    name: 'FinancialSettlementPipelines Pipeline #89',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-090',
    name: 'FinancialSettlementPipelines Pipeline #90',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-091',
    name: 'FinancialSettlementPipelines Pipeline #91',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-092',
    name: 'FinancialSettlementPipelines Pipeline #92',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-093',
    name: 'FinancialSettlementPipelines Pipeline #93',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-094',
    name: 'FinancialSettlementPipelines Pipeline #94',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-095',
    name: 'FinancialSettlementPipelines Pipeline #95',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-096',
    name: 'FinancialSettlementPipelines Pipeline #96',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-097',
    name: 'FinancialSettlementPipelines Pipeline #97',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-098',
    name: 'FinancialSettlementPipelines Pipeline #98',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-099',
    name: 'FinancialSettlementPipelines Pipeline #99',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-100',
    name: 'FinancialSettlementPipelines Pipeline #100',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-101',
    name: 'FinancialSettlementPipelines Pipeline #101',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-102',
    name: 'FinancialSettlementPipelines Pipeline #102',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-103',
    name: 'FinancialSettlementPipelines Pipeline #103',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-104',
    name: 'FinancialSettlementPipelines Pipeline #104',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-105',
    name: 'FinancialSettlementPipelines Pipeline #105',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-106',
    name: 'FinancialSettlementPipelines Pipeline #106',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-107',
    name: 'FinancialSettlementPipelines Pipeline #107',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-108',
    name: 'FinancialSettlementPipelines Pipeline #108',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-109',
    name: 'FinancialSettlementPipelines Pipeline #109',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-110',
    name: 'FinancialSettlementPipelines Pipeline #110',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-111',
    name: 'FinancialSettlementPipelines Pipeline #111',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-112',
    name: 'FinancialSettlementPipelines Pipeline #112',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-113',
    name: 'FinancialSettlementPipelines Pipeline #113',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-114',
    name: 'FinancialSettlementPipelines Pipeline #114',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-115',
    name: 'FinancialSettlementPipelines Pipeline #115',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-116',
    name: 'FinancialSettlementPipelines Pipeline #116',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-117',
    name: 'FinancialSettlementPipelines Pipeline #117',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-118',
    name: 'FinancialSettlementPipelines Pipeline #118',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-119',
    name: 'FinancialSettlementPipelines Pipeline #119',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-120',
    name: 'FinancialSettlementPipelines Pipeline #120',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-121',
    name: 'FinancialSettlementPipelines Pipeline #121',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-122',
    name: 'FinancialSettlementPipelines Pipeline #122',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-123',
    name: 'FinancialSettlementPipelines Pipeline #123',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-124',
    name: 'FinancialSettlementPipelines Pipeline #124',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-125',
    name: 'FinancialSettlementPipelines Pipeline #125',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-126',
    name: 'FinancialSettlementPipelines Pipeline #126',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-127',
    name: 'FinancialSettlementPipelines Pipeline #127',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-128',
    name: 'FinancialSettlementPipelines Pipeline #128',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-129',
    name: 'FinancialSettlementPipelines Pipeline #129',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-130',
    name: 'FinancialSettlementPipelines Pipeline #130',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-131',
    name: 'FinancialSettlementPipelines Pipeline #131',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-132',
    name: 'FinancialSettlementPipelines Pipeline #132',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-133',
    name: 'FinancialSettlementPipelines Pipeline #133',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-134',
    name: 'FinancialSettlementPipelines Pipeline #134',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-135',
    name: 'FinancialSettlementPipelines Pipeline #135',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-136',
    name: 'FinancialSettlementPipelines Pipeline #136',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-137',
    name: 'FinancialSettlementPipelines Pipeline #137',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-138',
    name: 'FinancialSettlementPipelines Pipeline #138',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-139',
    name: 'FinancialSettlementPipelines Pipeline #139',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-140',
    name: 'FinancialSettlementPipelines Pipeline #140',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-141',
    name: 'FinancialSettlementPipelines Pipeline #141',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-142',
    name: 'FinancialSettlementPipelines Pipeline #142',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-143',
    name: 'FinancialSettlementPipelines Pipeline #143',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-144',
    name: 'FinancialSettlementPipelines Pipeline #144',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-145',
    name: 'FinancialSettlementPipelines Pipeline #145',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-146',
    name: 'FinancialSettlementPipelines Pipeline #146',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-147',
    name: 'FinancialSettlementPipelines Pipeline #147',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-148',
    name: 'FinancialSettlementPipelines Pipeline #148',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-149',
    name: 'FinancialSettlementPipelines Pipeline #149',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-150',
    name: 'FinancialSettlementPipelines Pipeline #150',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-151',
    name: 'FinancialSettlementPipelines Pipeline #151',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-152',
    name: 'FinancialSettlementPipelines Pipeline #152',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-153',
    name: 'FinancialSettlementPipelines Pipeline #153',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-154',
    name: 'FinancialSettlementPipelines Pipeline #154',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-155',
    name: 'FinancialSettlementPipelines Pipeline #155',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-156',
    name: 'FinancialSettlementPipelines Pipeline #156',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-157',
    name: 'FinancialSettlementPipelines Pipeline #157',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-158',
    name: 'FinancialSettlementPipelines Pipeline #158',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-159',
    name: 'FinancialSettlementPipelines Pipeline #159',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-160',
    name: 'FinancialSettlementPipelines Pipeline #160',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-161',
    name: 'FinancialSettlementPipelines Pipeline #161',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-162',
    name: 'FinancialSettlementPipelines Pipeline #162',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-163',
    name: 'FinancialSettlementPipelines Pipeline #163',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-164',
    name: 'FinancialSettlementPipelines Pipeline #164',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-165',
    name: 'FinancialSettlementPipelines Pipeline #165',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-166',
    name: 'FinancialSettlementPipelines Pipeline #166',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-167',
    name: 'FinancialSettlementPipelines Pipeline #167',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-168',
    name: 'FinancialSettlementPipelines Pipeline #168',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-169',
    name: 'FinancialSettlementPipelines Pipeline #169',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-170',
    name: 'FinancialSettlementPipelines Pipeline #170',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-171',
    name: 'FinancialSettlementPipelines Pipeline #171',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-172',
    name: 'FinancialSettlementPipelines Pipeline #172',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-173',
    name: 'FinancialSettlementPipelines Pipeline #173',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-174',
    name: 'FinancialSettlementPipelines Pipeline #174',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-175',
    name: 'FinancialSettlementPipelines Pipeline #175',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-176',
    name: 'FinancialSettlementPipelines Pipeline #176',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-177',
    name: 'FinancialSettlementPipelines Pipeline #177',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-178',
    name: 'FinancialSettlementPipelines Pipeline #178',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-179',
    name: 'FinancialSettlementPipelines Pipeline #179',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-180',
    name: 'FinancialSettlementPipelines Pipeline #180',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-181',
    name: 'FinancialSettlementPipelines Pipeline #181',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-182',
    name: 'FinancialSettlementPipelines Pipeline #182',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-183',
    name: 'FinancialSettlementPipelines Pipeline #183',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-184',
    name: 'FinancialSettlementPipelines Pipeline #184',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-185',
    name: 'FinancialSettlementPipelines Pipeline #185',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-186',
    name: 'FinancialSettlementPipelines Pipeline #186',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-187',
    name: 'FinancialSettlementPipelines Pipeline #187',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-188',
    name: 'FinancialSettlementPipelines Pipeline #188',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-189',
    name: 'FinancialSettlementPipelines Pipeline #189',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-190',
    name: 'FinancialSettlementPipelines Pipeline #190',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-191',
    name: 'FinancialSettlementPipelines Pipeline #191',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-192',
    name: 'FinancialSettlementPipelines Pipeline #192',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-193',
    name: 'FinancialSettlementPipelines Pipeline #193',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-194',
    name: 'FinancialSettlementPipelines Pipeline #194',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-195',
    name: 'FinancialSettlementPipelines Pipeline #195',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-196',
    name: 'FinancialSettlementPipelines Pipeline #196',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-197',
    name: 'FinancialSettlementPipelines Pipeline #197',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-198',
    name: 'FinancialSettlementPipelines Pipeline #198',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-199',
    name: 'FinancialSettlementPipelines Pipeline #199',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-200',
    name: 'FinancialSettlementPipelines Pipeline #200',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-201',
    name: 'FinancialSettlementPipelines Pipeline #201',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-202',
    name: 'FinancialSettlementPipelines Pipeline #202',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-203',
    name: 'FinancialSettlementPipelines Pipeline #203',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-204',
    name: 'FinancialSettlementPipelines Pipeline #204',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-205',
    name: 'FinancialSettlementPipelines Pipeline #205',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-206',
    name: 'FinancialSettlementPipelines Pipeline #206',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-207',
    name: 'FinancialSettlementPipelines Pipeline #207',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-208',
    name: 'FinancialSettlementPipelines Pipeline #208',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-209',
    name: 'FinancialSettlementPipelines Pipeline #209',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-210',
    name: 'FinancialSettlementPipelines Pipeline #210',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-211',
    name: 'FinancialSettlementPipelines Pipeline #211',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-212',
    name: 'FinancialSettlementPipelines Pipeline #212',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-213',
    name: 'FinancialSettlementPipelines Pipeline #213',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-214',
    name: 'FinancialSettlementPipelines Pipeline #214',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-215',
    name: 'FinancialSettlementPipelines Pipeline #215',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-216',
    name: 'FinancialSettlementPipelines Pipeline #216',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-217',
    name: 'FinancialSettlementPipelines Pipeline #217',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-218',
    name: 'FinancialSettlementPipelines Pipeline #218',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-219',
    name: 'FinancialSettlementPipelines Pipeline #219',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-220',
    name: 'FinancialSettlementPipelines Pipeline #220',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-221',
    name: 'FinancialSettlementPipelines Pipeline #221',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-222',
    name: 'FinancialSettlementPipelines Pipeline #222',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-223',
    name: 'FinancialSettlementPipelines Pipeline #223',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-224',
    name: 'FinancialSettlementPipelines Pipeline #224',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-225',
    name: 'FinancialSettlementPipelines Pipeline #225',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-226',
    name: 'FinancialSettlementPipelines Pipeline #226',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-227',
    name: 'FinancialSettlementPipelines Pipeline #227',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-228',
    name: 'FinancialSettlementPipelines Pipeline #228',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-229',
    name: 'FinancialSettlementPipelines Pipeline #229',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-230',
    name: 'FinancialSettlementPipelines Pipeline #230',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-231',
    name: 'FinancialSettlementPipelines Pipeline #231',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-232',
    name: 'FinancialSettlementPipelines Pipeline #232',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-233',
    name: 'FinancialSettlementPipelines Pipeline #233',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-234',
    name: 'FinancialSettlementPipelines Pipeline #234',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-235',
    name: 'FinancialSettlementPipelines Pipeline #235',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-236',
    name: 'FinancialSettlementPipelines Pipeline #236',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-237',
    name: 'FinancialSettlementPipelines Pipeline #237',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-238',
    name: 'FinancialSettlementPipelines Pipeline #238',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-239',
    name: 'FinancialSettlementPipelines Pipeline #239',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-240',
    name: 'FinancialSettlementPipelines Pipeline #240',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-241',
    name: 'FinancialSettlementPipelines Pipeline #241',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-242',
    name: 'FinancialSettlementPipelines Pipeline #242',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-243',
    name: 'FinancialSettlementPipelines Pipeline #243',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-244',
    name: 'FinancialSettlementPipelines Pipeline #244',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-245',
    name: 'FinancialSettlementPipelines Pipeline #245',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-246',
    name: 'FinancialSettlementPipelines Pipeline #246',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-247',
    name: 'FinancialSettlementPipelines Pipeline #247',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-248',
    name: 'FinancialSettlementPipelines Pipeline #248',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-249',
    name: 'FinancialSettlementPipelines Pipeline #249',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-250',
    name: 'FinancialSettlementPipelines Pipeline #250',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-251',
    name: 'FinancialSettlementPipelines Pipeline #251',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-252',
    name: 'FinancialSettlementPipelines Pipeline #252',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-253',
    name: 'FinancialSettlementPipelines Pipeline #253',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-254',
    name: 'FinancialSettlementPipelines Pipeline #254',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-255',
    name: 'FinancialSettlementPipelines Pipeline #255',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-256',
    name: 'FinancialSettlementPipelines Pipeline #256',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-257',
    name: 'FinancialSettlementPipelines Pipeline #257',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-258',
    name: 'FinancialSettlementPipelines Pipeline #258',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-259',
    name: 'FinancialSettlementPipelines Pipeline #259',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-260',
    name: 'FinancialSettlementPipelines Pipeline #260',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-261',
    name: 'FinancialSettlementPipelines Pipeline #261',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-262',
    name: 'FinancialSettlementPipelines Pipeline #262',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-263',
    name: 'FinancialSettlementPipelines Pipeline #263',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-264',
    name: 'FinancialSettlementPipelines Pipeline #264',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-265',
    name: 'FinancialSettlementPipelines Pipeline #265',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-266',
    name: 'FinancialSettlementPipelines Pipeline #266',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-267',
    name: 'FinancialSettlementPipelines Pipeline #267',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-268',
    name: 'FinancialSettlementPipelines Pipeline #268',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-269',
    name: 'FinancialSettlementPipelines Pipeline #269',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-270',
    name: 'FinancialSettlementPipelines Pipeline #270',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-271',
    name: 'FinancialSettlementPipelines Pipeline #271',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-272',
    name: 'FinancialSettlementPipelines Pipeline #272',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-273',
    name: 'FinancialSettlementPipelines Pipeline #273',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-274',
    name: 'FinancialSettlementPipelines Pipeline #274',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-275',
    name: 'FinancialSettlementPipelines Pipeline #275',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-276',
    name: 'FinancialSettlementPipelines Pipeline #276',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-277',
    name: 'FinancialSettlementPipelines Pipeline #277',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-278',
    name: 'FinancialSettlementPipelines Pipeline #278',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-279',
    name: 'FinancialSettlementPipelines Pipeline #279',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-280',
    name: 'FinancialSettlementPipelines Pipeline #280',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-281',
    name: 'FinancialSettlementPipelines Pipeline #281',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-282',
    name: 'FinancialSettlementPipelines Pipeline #282',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-283',
    name: 'FinancialSettlementPipelines Pipeline #283',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-284',
    name: 'FinancialSettlementPipelines Pipeline #284',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-285',
    name: 'FinancialSettlementPipelines Pipeline #285',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-286',
    name: 'FinancialSettlementPipelines Pipeline #286',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-287',
    name: 'FinancialSettlementPipelines Pipeline #287',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-288',
    name: 'FinancialSettlementPipelines Pipeline #288',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-289',
    name: 'FinancialSettlementPipelines Pipeline #289',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-290',
    name: 'FinancialSettlementPipelines Pipeline #290',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-291',
    name: 'FinancialSettlementPipelines Pipeline #291',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-292',
    name: 'FinancialSettlementPipelines Pipeline #292',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-293',
    name: 'FinancialSettlementPipelines Pipeline #293',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-294',
    name: 'FinancialSettlementPipelines Pipeline #294',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-295',
    name: 'FinancialSettlementPipelines Pipeline #295',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-296',
    name: 'FinancialSettlementPipelines Pipeline #296',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-297',
    name: 'FinancialSettlementPipelines Pipeline #297',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-298',
    name: 'FinancialSettlementPipelines Pipeline #298',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-299',
    name: 'FinancialSettlementPipelines Pipeline #299',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-300',
    name: 'FinancialSettlementPipelines Pipeline #300',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-301',
    name: 'FinancialSettlementPipelines Pipeline #301',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-302',
    name: 'FinancialSettlementPipelines Pipeline #302',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-303',
    name: 'FinancialSettlementPipelines Pipeline #303',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-304',
    name: 'FinancialSettlementPipelines Pipeline #304',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-305',
    name: 'FinancialSettlementPipelines Pipeline #305',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-306',
    name: 'FinancialSettlementPipelines Pipeline #306',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-307',
    name: 'FinancialSettlementPipelines Pipeline #307',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-308',
    name: 'FinancialSettlementPipelines Pipeline #308',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-309',
    name: 'FinancialSettlementPipelines Pipeline #309',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-310',
    name: 'FinancialSettlementPipelines Pipeline #310',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-311',
    name: 'FinancialSettlementPipelines Pipeline #311',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-312',
    name: 'FinancialSettlementPipelines Pipeline #312',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-313',
    name: 'FinancialSettlementPipelines Pipeline #313',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-314',
    name: 'FinancialSettlementPipelines Pipeline #314',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-315',
    name: 'FinancialSettlementPipelines Pipeline #315',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-316',
    name: 'FinancialSettlementPipelines Pipeline #316',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-317',
    name: 'FinancialSettlementPipelines Pipeline #317',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-318',
    name: 'FinancialSettlementPipelines Pipeline #318',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-319',
    name: 'FinancialSettlementPipelines Pipeline #319',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-320',
    name: 'FinancialSettlementPipelines Pipeline #320',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-321',
    name: 'FinancialSettlementPipelines Pipeline #321',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-322',
    name: 'FinancialSettlementPipelines Pipeline #322',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-323',
    name: 'FinancialSettlementPipelines Pipeline #323',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-324',
    name: 'FinancialSettlementPipelines Pipeline #324',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-325',
    name: 'FinancialSettlementPipelines Pipeline #325',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-326',
    name: 'FinancialSettlementPipelines Pipeline #326',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-327',
    name: 'FinancialSettlementPipelines Pipeline #327',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-328',
    name: 'FinancialSettlementPipelines Pipeline #328',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-329',
    name: 'FinancialSettlementPipelines Pipeline #329',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-330',
    name: 'FinancialSettlementPipelines Pipeline #330',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-331',
    name: 'FinancialSettlementPipelines Pipeline #331',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-332',
    name: 'FinancialSettlementPipelines Pipeline #332',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-333',
    name: 'FinancialSettlementPipelines Pipeline #333',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-334',
    name: 'FinancialSettlementPipelines Pipeline #334',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-335',
    name: 'FinancialSettlementPipelines Pipeline #335',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-336',
    name: 'FinancialSettlementPipelines Pipeline #336',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 11,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-337',
    name: 'FinancialSettlementPipelines Pipeline #337',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 12,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-338',
    name: 'FinancialSettlementPipelines Pipeline #338',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 13,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-339',
    name: 'FinancialSettlementPipelines Pipeline #339',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 14,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-340',
    name: 'FinancialSettlementPipelines Pipeline #340',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 15,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-341',
    name: 'FinancialSettlementPipelines Pipeline #341',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 100000,
    targetSlaMinutes: 16,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-342',
    name: 'FinancialSettlementPipelines Pipeline #342',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 150000,
    targetSlaMinutes: 17,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-343',
    name: 'FinancialSettlementPipelines Pipeline #343',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 200000,
    targetSlaMinutes: 18,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-344',
    name: 'FinancialSettlementPipelines Pipeline #344',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 250000,
    targetSlaMinutes: 19,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-345',
    name: 'FinancialSettlementPipelines Pipeline #345',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */4 * * *',
    batchSizeRows: 300000,
    targetSlaMinutes: 5,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-346',
    name: 'FinancialSettlementPipelines Pipeline #346',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */5 * * *',
    batchSizeRows: 350000,
    targetSlaMinutes: 6,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-347',
    name: 'FinancialSettlementPipelines Pipeline #347',
    domain: 'FinancialSettlementPipelines',
    category: 'and regulatory reconciliation',
    cronSchedule: '0 */6 * * *',
    batchSizeRows: 400000,
    targetSlaMinutes: 7,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-348',
    name: 'FinancialSettlementPipelines Pipeline #348',
    domain: 'FinancialSettlementPipelines',
    category: 'Double-entry bookkeeping',
    cronSchedule: '0 */1 * * *',
    batchSizeRows: 450000,
    targetSlaMinutes: 8,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-349',
    name: 'FinancialSettlementPipelines Pipeline #349',
    domain: 'FinancialSettlementPipelines',
    category: 'ISO 20022 message parsing',
    cronSchedule: '0 */2 * * *',
    batchSizeRows: 500000,
    targetSlaMinutes: 9,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  },
  {
    pipelineId: 'DAG-FIN-350',
    name: 'FinancialSettlementPipelines Pipeline #350',
    domain: 'FinancialSettlementPipelines',
    category: 'swift clearing',
    cronSchedule: '0 */3 * * *',
    batchSizeRows: 50000,
    targetSlaMinutes: 10,
    retryPolicy: {
      maxRetries: 3,
      backoffMultiplierSec: 30,
      notifyOnFailure: true,
      alertSlackChannel: '#data-ops-alerts'
    },
    storageFormat: 'APACHE_ICEBERG_V2',
    isProductionActive: true
  }
];

export class FIN_PipelineCatalog {
  static search(query: string): DagPipelineTemplate[] {
    const q = query.toLowerCase().trim();
    if (!q) return PIPELINES_FIN_DATASET.slice(0, 20);
    return PIPELINES_FIN_DATASET.filter(p => p.name.toLowerCase().includes(q) || p.pipelineId.toLowerCase().includes(q));
  }
}
