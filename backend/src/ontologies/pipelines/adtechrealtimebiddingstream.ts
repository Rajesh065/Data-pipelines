/**
 * Production DAG Pipeline Template: AdTechRealtimeBiddingStream
 * Domain Focus: OpenRTB bid request parsing, CTR prediction feature extraction, impression deduplication, and DSP attribution
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

export const PIPELINES_RTB_DATASET: DagPipelineTemplate[] = [
  {
    pipelineId: 'DAG-RTB-001',
    name: 'AdTechRealtimeBiddingStream Pipeline #1',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-002',
    name: 'AdTechRealtimeBiddingStream Pipeline #2',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-003',
    name: 'AdTechRealtimeBiddingStream Pipeline #3',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-004',
    name: 'AdTechRealtimeBiddingStream Pipeline #4',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-005',
    name: 'AdTechRealtimeBiddingStream Pipeline #5',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-006',
    name: 'AdTechRealtimeBiddingStream Pipeline #6',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-007',
    name: 'AdTechRealtimeBiddingStream Pipeline #7',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-008',
    name: 'AdTechRealtimeBiddingStream Pipeline #8',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-009',
    name: 'AdTechRealtimeBiddingStream Pipeline #9',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-010',
    name: 'AdTechRealtimeBiddingStream Pipeline #10',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-011',
    name: 'AdTechRealtimeBiddingStream Pipeline #11',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-012',
    name: 'AdTechRealtimeBiddingStream Pipeline #12',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-013',
    name: 'AdTechRealtimeBiddingStream Pipeline #13',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-014',
    name: 'AdTechRealtimeBiddingStream Pipeline #14',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-015',
    name: 'AdTechRealtimeBiddingStream Pipeline #15',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-016',
    name: 'AdTechRealtimeBiddingStream Pipeline #16',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-017',
    name: 'AdTechRealtimeBiddingStream Pipeline #17',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-018',
    name: 'AdTechRealtimeBiddingStream Pipeline #18',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-019',
    name: 'AdTechRealtimeBiddingStream Pipeline #19',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-020',
    name: 'AdTechRealtimeBiddingStream Pipeline #20',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-021',
    name: 'AdTechRealtimeBiddingStream Pipeline #21',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-022',
    name: 'AdTechRealtimeBiddingStream Pipeline #22',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-023',
    name: 'AdTechRealtimeBiddingStream Pipeline #23',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-024',
    name: 'AdTechRealtimeBiddingStream Pipeline #24',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-025',
    name: 'AdTechRealtimeBiddingStream Pipeline #25',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-026',
    name: 'AdTechRealtimeBiddingStream Pipeline #26',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-027',
    name: 'AdTechRealtimeBiddingStream Pipeline #27',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-028',
    name: 'AdTechRealtimeBiddingStream Pipeline #28',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-029',
    name: 'AdTechRealtimeBiddingStream Pipeline #29',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-030',
    name: 'AdTechRealtimeBiddingStream Pipeline #30',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-031',
    name: 'AdTechRealtimeBiddingStream Pipeline #31',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-032',
    name: 'AdTechRealtimeBiddingStream Pipeline #32',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-033',
    name: 'AdTechRealtimeBiddingStream Pipeline #33',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-034',
    name: 'AdTechRealtimeBiddingStream Pipeline #34',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-035',
    name: 'AdTechRealtimeBiddingStream Pipeline #35',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-036',
    name: 'AdTechRealtimeBiddingStream Pipeline #36',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-037',
    name: 'AdTechRealtimeBiddingStream Pipeline #37',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-038',
    name: 'AdTechRealtimeBiddingStream Pipeline #38',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-039',
    name: 'AdTechRealtimeBiddingStream Pipeline #39',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-040',
    name: 'AdTechRealtimeBiddingStream Pipeline #40',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-041',
    name: 'AdTechRealtimeBiddingStream Pipeline #41',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-042',
    name: 'AdTechRealtimeBiddingStream Pipeline #42',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-043',
    name: 'AdTechRealtimeBiddingStream Pipeline #43',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-044',
    name: 'AdTechRealtimeBiddingStream Pipeline #44',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-045',
    name: 'AdTechRealtimeBiddingStream Pipeline #45',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-046',
    name: 'AdTechRealtimeBiddingStream Pipeline #46',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-047',
    name: 'AdTechRealtimeBiddingStream Pipeline #47',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-048',
    name: 'AdTechRealtimeBiddingStream Pipeline #48',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-049',
    name: 'AdTechRealtimeBiddingStream Pipeline #49',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-050',
    name: 'AdTechRealtimeBiddingStream Pipeline #50',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-051',
    name: 'AdTechRealtimeBiddingStream Pipeline #51',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-052',
    name: 'AdTechRealtimeBiddingStream Pipeline #52',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-053',
    name: 'AdTechRealtimeBiddingStream Pipeline #53',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-054',
    name: 'AdTechRealtimeBiddingStream Pipeline #54',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-055',
    name: 'AdTechRealtimeBiddingStream Pipeline #55',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-056',
    name: 'AdTechRealtimeBiddingStream Pipeline #56',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-057',
    name: 'AdTechRealtimeBiddingStream Pipeline #57',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-058',
    name: 'AdTechRealtimeBiddingStream Pipeline #58',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-059',
    name: 'AdTechRealtimeBiddingStream Pipeline #59',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-060',
    name: 'AdTechRealtimeBiddingStream Pipeline #60',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-061',
    name: 'AdTechRealtimeBiddingStream Pipeline #61',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-062',
    name: 'AdTechRealtimeBiddingStream Pipeline #62',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-063',
    name: 'AdTechRealtimeBiddingStream Pipeline #63',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-064',
    name: 'AdTechRealtimeBiddingStream Pipeline #64',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-065',
    name: 'AdTechRealtimeBiddingStream Pipeline #65',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-066',
    name: 'AdTechRealtimeBiddingStream Pipeline #66',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-067',
    name: 'AdTechRealtimeBiddingStream Pipeline #67',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-068',
    name: 'AdTechRealtimeBiddingStream Pipeline #68',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-069',
    name: 'AdTechRealtimeBiddingStream Pipeline #69',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-070',
    name: 'AdTechRealtimeBiddingStream Pipeline #70',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-071',
    name: 'AdTechRealtimeBiddingStream Pipeline #71',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-072',
    name: 'AdTechRealtimeBiddingStream Pipeline #72',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-073',
    name: 'AdTechRealtimeBiddingStream Pipeline #73',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-074',
    name: 'AdTechRealtimeBiddingStream Pipeline #74',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-075',
    name: 'AdTechRealtimeBiddingStream Pipeline #75',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-076',
    name: 'AdTechRealtimeBiddingStream Pipeline #76',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-077',
    name: 'AdTechRealtimeBiddingStream Pipeline #77',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-078',
    name: 'AdTechRealtimeBiddingStream Pipeline #78',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-079',
    name: 'AdTechRealtimeBiddingStream Pipeline #79',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-080',
    name: 'AdTechRealtimeBiddingStream Pipeline #80',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-081',
    name: 'AdTechRealtimeBiddingStream Pipeline #81',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-082',
    name: 'AdTechRealtimeBiddingStream Pipeline #82',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-083',
    name: 'AdTechRealtimeBiddingStream Pipeline #83',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-084',
    name: 'AdTechRealtimeBiddingStream Pipeline #84',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-085',
    name: 'AdTechRealtimeBiddingStream Pipeline #85',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-086',
    name: 'AdTechRealtimeBiddingStream Pipeline #86',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-087',
    name: 'AdTechRealtimeBiddingStream Pipeline #87',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-088',
    name: 'AdTechRealtimeBiddingStream Pipeline #88',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-089',
    name: 'AdTechRealtimeBiddingStream Pipeline #89',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-090',
    name: 'AdTechRealtimeBiddingStream Pipeline #90',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-091',
    name: 'AdTechRealtimeBiddingStream Pipeline #91',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-092',
    name: 'AdTechRealtimeBiddingStream Pipeline #92',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-093',
    name: 'AdTechRealtimeBiddingStream Pipeline #93',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-094',
    name: 'AdTechRealtimeBiddingStream Pipeline #94',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-095',
    name: 'AdTechRealtimeBiddingStream Pipeline #95',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-096',
    name: 'AdTechRealtimeBiddingStream Pipeline #96',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-097',
    name: 'AdTechRealtimeBiddingStream Pipeline #97',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-098',
    name: 'AdTechRealtimeBiddingStream Pipeline #98',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-099',
    name: 'AdTechRealtimeBiddingStream Pipeline #99',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-100',
    name: 'AdTechRealtimeBiddingStream Pipeline #100',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-101',
    name: 'AdTechRealtimeBiddingStream Pipeline #101',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-102',
    name: 'AdTechRealtimeBiddingStream Pipeline #102',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-103',
    name: 'AdTechRealtimeBiddingStream Pipeline #103',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-104',
    name: 'AdTechRealtimeBiddingStream Pipeline #104',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-105',
    name: 'AdTechRealtimeBiddingStream Pipeline #105',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-106',
    name: 'AdTechRealtimeBiddingStream Pipeline #106',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-107',
    name: 'AdTechRealtimeBiddingStream Pipeline #107',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-108',
    name: 'AdTechRealtimeBiddingStream Pipeline #108',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-109',
    name: 'AdTechRealtimeBiddingStream Pipeline #109',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-110',
    name: 'AdTechRealtimeBiddingStream Pipeline #110',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-111',
    name: 'AdTechRealtimeBiddingStream Pipeline #111',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-112',
    name: 'AdTechRealtimeBiddingStream Pipeline #112',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-113',
    name: 'AdTechRealtimeBiddingStream Pipeline #113',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-114',
    name: 'AdTechRealtimeBiddingStream Pipeline #114',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-115',
    name: 'AdTechRealtimeBiddingStream Pipeline #115',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-116',
    name: 'AdTechRealtimeBiddingStream Pipeline #116',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-117',
    name: 'AdTechRealtimeBiddingStream Pipeline #117',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-118',
    name: 'AdTechRealtimeBiddingStream Pipeline #118',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-119',
    name: 'AdTechRealtimeBiddingStream Pipeline #119',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-120',
    name: 'AdTechRealtimeBiddingStream Pipeline #120',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-121',
    name: 'AdTechRealtimeBiddingStream Pipeline #121',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-122',
    name: 'AdTechRealtimeBiddingStream Pipeline #122',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-123',
    name: 'AdTechRealtimeBiddingStream Pipeline #123',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-124',
    name: 'AdTechRealtimeBiddingStream Pipeline #124',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-125',
    name: 'AdTechRealtimeBiddingStream Pipeline #125',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-126',
    name: 'AdTechRealtimeBiddingStream Pipeline #126',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-127',
    name: 'AdTechRealtimeBiddingStream Pipeline #127',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-128',
    name: 'AdTechRealtimeBiddingStream Pipeline #128',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-129',
    name: 'AdTechRealtimeBiddingStream Pipeline #129',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-130',
    name: 'AdTechRealtimeBiddingStream Pipeline #130',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-131',
    name: 'AdTechRealtimeBiddingStream Pipeline #131',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-132',
    name: 'AdTechRealtimeBiddingStream Pipeline #132',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-133',
    name: 'AdTechRealtimeBiddingStream Pipeline #133',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-134',
    name: 'AdTechRealtimeBiddingStream Pipeline #134',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-135',
    name: 'AdTechRealtimeBiddingStream Pipeline #135',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-136',
    name: 'AdTechRealtimeBiddingStream Pipeline #136',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-137',
    name: 'AdTechRealtimeBiddingStream Pipeline #137',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-138',
    name: 'AdTechRealtimeBiddingStream Pipeline #138',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-139',
    name: 'AdTechRealtimeBiddingStream Pipeline #139',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-140',
    name: 'AdTechRealtimeBiddingStream Pipeline #140',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-141',
    name: 'AdTechRealtimeBiddingStream Pipeline #141',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-142',
    name: 'AdTechRealtimeBiddingStream Pipeline #142',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-143',
    name: 'AdTechRealtimeBiddingStream Pipeline #143',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-144',
    name: 'AdTechRealtimeBiddingStream Pipeline #144',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-145',
    name: 'AdTechRealtimeBiddingStream Pipeline #145',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-146',
    name: 'AdTechRealtimeBiddingStream Pipeline #146',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-147',
    name: 'AdTechRealtimeBiddingStream Pipeline #147',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-148',
    name: 'AdTechRealtimeBiddingStream Pipeline #148',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-149',
    name: 'AdTechRealtimeBiddingStream Pipeline #149',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-150',
    name: 'AdTechRealtimeBiddingStream Pipeline #150',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-151',
    name: 'AdTechRealtimeBiddingStream Pipeline #151',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-152',
    name: 'AdTechRealtimeBiddingStream Pipeline #152',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-153',
    name: 'AdTechRealtimeBiddingStream Pipeline #153',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-154',
    name: 'AdTechRealtimeBiddingStream Pipeline #154',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-155',
    name: 'AdTechRealtimeBiddingStream Pipeline #155',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-156',
    name: 'AdTechRealtimeBiddingStream Pipeline #156',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-157',
    name: 'AdTechRealtimeBiddingStream Pipeline #157',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-158',
    name: 'AdTechRealtimeBiddingStream Pipeline #158',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-159',
    name: 'AdTechRealtimeBiddingStream Pipeline #159',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-160',
    name: 'AdTechRealtimeBiddingStream Pipeline #160',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-161',
    name: 'AdTechRealtimeBiddingStream Pipeline #161',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-162',
    name: 'AdTechRealtimeBiddingStream Pipeline #162',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-163',
    name: 'AdTechRealtimeBiddingStream Pipeline #163',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-164',
    name: 'AdTechRealtimeBiddingStream Pipeline #164',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-165',
    name: 'AdTechRealtimeBiddingStream Pipeline #165',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-166',
    name: 'AdTechRealtimeBiddingStream Pipeline #166',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-167',
    name: 'AdTechRealtimeBiddingStream Pipeline #167',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-168',
    name: 'AdTechRealtimeBiddingStream Pipeline #168',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-169',
    name: 'AdTechRealtimeBiddingStream Pipeline #169',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-170',
    name: 'AdTechRealtimeBiddingStream Pipeline #170',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-171',
    name: 'AdTechRealtimeBiddingStream Pipeline #171',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-172',
    name: 'AdTechRealtimeBiddingStream Pipeline #172',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-173',
    name: 'AdTechRealtimeBiddingStream Pipeline #173',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-174',
    name: 'AdTechRealtimeBiddingStream Pipeline #174',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-175',
    name: 'AdTechRealtimeBiddingStream Pipeline #175',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-176',
    name: 'AdTechRealtimeBiddingStream Pipeline #176',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-177',
    name: 'AdTechRealtimeBiddingStream Pipeline #177',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-178',
    name: 'AdTechRealtimeBiddingStream Pipeline #178',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-179',
    name: 'AdTechRealtimeBiddingStream Pipeline #179',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-180',
    name: 'AdTechRealtimeBiddingStream Pipeline #180',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-181',
    name: 'AdTechRealtimeBiddingStream Pipeline #181',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-182',
    name: 'AdTechRealtimeBiddingStream Pipeline #182',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-183',
    name: 'AdTechRealtimeBiddingStream Pipeline #183',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-184',
    name: 'AdTechRealtimeBiddingStream Pipeline #184',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-185',
    name: 'AdTechRealtimeBiddingStream Pipeline #185',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-186',
    name: 'AdTechRealtimeBiddingStream Pipeline #186',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-187',
    name: 'AdTechRealtimeBiddingStream Pipeline #187',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-188',
    name: 'AdTechRealtimeBiddingStream Pipeline #188',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-189',
    name: 'AdTechRealtimeBiddingStream Pipeline #189',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-190',
    name: 'AdTechRealtimeBiddingStream Pipeline #190',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-191',
    name: 'AdTechRealtimeBiddingStream Pipeline #191',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-192',
    name: 'AdTechRealtimeBiddingStream Pipeline #192',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-193',
    name: 'AdTechRealtimeBiddingStream Pipeline #193',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-194',
    name: 'AdTechRealtimeBiddingStream Pipeline #194',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-195',
    name: 'AdTechRealtimeBiddingStream Pipeline #195',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-196',
    name: 'AdTechRealtimeBiddingStream Pipeline #196',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-197',
    name: 'AdTechRealtimeBiddingStream Pipeline #197',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-198',
    name: 'AdTechRealtimeBiddingStream Pipeline #198',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-199',
    name: 'AdTechRealtimeBiddingStream Pipeline #199',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-200',
    name: 'AdTechRealtimeBiddingStream Pipeline #200',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-201',
    name: 'AdTechRealtimeBiddingStream Pipeline #201',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-202',
    name: 'AdTechRealtimeBiddingStream Pipeline #202',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-203',
    name: 'AdTechRealtimeBiddingStream Pipeline #203',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-204',
    name: 'AdTechRealtimeBiddingStream Pipeline #204',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-205',
    name: 'AdTechRealtimeBiddingStream Pipeline #205',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-206',
    name: 'AdTechRealtimeBiddingStream Pipeline #206',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-207',
    name: 'AdTechRealtimeBiddingStream Pipeline #207',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-208',
    name: 'AdTechRealtimeBiddingStream Pipeline #208',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-209',
    name: 'AdTechRealtimeBiddingStream Pipeline #209',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-210',
    name: 'AdTechRealtimeBiddingStream Pipeline #210',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-211',
    name: 'AdTechRealtimeBiddingStream Pipeline #211',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-212',
    name: 'AdTechRealtimeBiddingStream Pipeline #212',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-213',
    name: 'AdTechRealtimeBiddingStream Pipeline #213',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-214',
    name: 'AdTechRealtimeBiddingStream Pipeline #214',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-215',
    name: 'AdTechRealtimeBiddingStream Pipeline #215',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-216',
    name: 'AdTechRealtimeBiddingStream Pipeline #216',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-217',
    name: 'AdTechRealtimeBiddingStream Pipeline #217',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-218',
    name: 'AdTechRealtimeBiddingStream Pipeline #218',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-219',
    name: 'AdTechRealtimeBiddingStream Pipeline #219',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-220',
    name: 'AdTechRealtimeBiddingStream Pipeline #220',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-221',
    name: 'AdTechRealtimeBiddingStream Pipeline #221',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-222',
    name: 'AdTechRealtimeBiddingStream Pipeline #222',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-223',
    name: 'AdTechRealtimeBiddingStream Pipeline #223',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-224',
    name: 'AdTechRealtimeBiddingStream Pipeline #224',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-225',
    name: 'AdTechRealtimeBiddingStream Pipeline #225',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-226',
    name: 'AdTechRealtimeBiddingStream Pipeline #226',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-227',
    name: 'AdTechRealtimeBiddingStream Pipeline #227',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-228',
    name: 'AdTechRealtimeBiddingStream Pipeline #228',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-229',
    name: 'AdTechRealtimeBiddingStream Pipeline #229',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-230',
    name: 'AdTechRealtimeBiddingStream Pipeline #230',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-231',
    name: 'AdTechRealtimeBiddingStream Pipeline #231',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-232',
    name: 'AdTechRealtimeBiddingStream Pipeline #232',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-233',
    name: 'AdTechRealtimeBiddingStream Pipeline #233',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-234',
    name: 'AdTechRealtimeBiddingStream Pipeline #234',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-235',
    name: 'AdTechRealtimeBiddingStream Pipeline #235',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-236',
    name: 'AdTechRealtimeBiddingStream Pipeline #236',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-237',
    name: 'AdTechRealtimeBiddingStream Pipeline #237',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-238',
    name: 'AdTechRealtimeBiddingStream Pipeline #238',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-239',
    name: 'AdTechRealtimeBiddingStream Pipeline #239',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-240',
    name: 'AdTechRealtimeBiddingStream Pipeline #240',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-241',
    name: 'AdTechRealtimeBiddingStream Pipeline #241',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-242',
    name: 'AdTechRealtimeBiddingStream Pipeline #242',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-243',
    name: 'AdTechRealtimeBiddingStream Pipeline #243',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-244',
    name: 'AdTechRealtimeBiddingStream Pipeline #244',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-245',
    name: 'AdTechRealtimeBiddingStream Pipeline #245',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-246',
    name: 'AdTechRealtimeBiddingStream Pipeline #246',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-247',
    name: 'AdTechRealtimeBiddingStream Pipeline #247',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-248',
    name: 'AdTechRealtimeBiddingStream Pipeline #248',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-249',
    name: 'AdTechRealtimeBiddingStream Pipeline #249',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-250',
    name: 'AdTechRealtimeBiddingStream Pipeline #250',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-251',
    name: 'AdTechRealtimeBiddingStream Pipeline #251',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-252',
    name: 'AdTechRealtimeBiddingStream Pipeline #252',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-253',
    name: 'AdTechRealtimeBiddingStream Pipeline #253',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-254',
    name: 'AdTechRealtimeBiddingStream Pipeline #254',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-255',
    name: 'AdTechRealtimeBiddingStream Pipeline #255',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-256',
    name: 'AdTechRealtimeBiddingStream Pipeline #256',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-257',
    name: 'AdTechRealtimeBiddingStream Pipeline #257',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-258',
    name: 'AdTechRealtimeBiddingStream Pipeline #258',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-259',
    name: 'AdTechRealtimeBiddingStream Pipeline #259',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-260',
    name: 'AdTechRealtimeBiddingStream Pipeline #260',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-261',
    name: 'AdTechRealtimeBiddingStream Pipeline #261',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-262',
    name: 'AdTechRealtimeBiddingStream Pipeline #262',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-263',
    name: 'AdTechRealtimeBiddingStream Pipeline #263',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-264',
    name: 'AdTechRealtimeBiddingStream Pipeline #264',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-265',
    name: 'AdTechRealtimeBiddingStream Pipeline #265',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-266',
    name: 'AdTechRealtimeBiddingStream Pipeline #266',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-267',
    name: 'AdTechRealtimeBiddingStream Pipeline #267',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-268',
    name: 'AdTechRealtimeBiddingStream Pipeline #268',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-269',
    name: 'AdTechRealtimeBiddingStream Pipeline #269',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-270',
    name: 'AdTechRealtimeBiddingStream Pipeline #270',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-271',
    name: 'AdTechRealtimeBiddingStream Pipeline #271',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-272',
    name: 'AdTechRealtimeBiddingStream Pipeline #272',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-273',
    name: 'AdTechRealtimeBiddingStream Pipeline #273',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-274',
    name: 'AdTechRealtimeBiddingStream Pipeline #274',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-275',
    name: 'AdTechRealtimeBiddingStream Pipeline #275',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-276',
    name: 'AdTechRealtimeBiddingStream Pipeline #276',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-277',
    name: 'AdTechRealtimeBiddingStream Pipeline #277',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-278',
    name: 'AdTechRealtimeBiddingStream Pipeline #278',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-279',
    name: 'AdTechRealtimeBiddingStream Pipeline #279',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-280',
    name: 'AdTechRealtimeBiddingStream Pipeline #280',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-281',
    name: 'AdTechRealtimeBiddingStream Pipeline #281',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-282',
    name: 'AdTechRealtimeBiddingStream Pipeline #282',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-283',
    name: 'AdTechRealtimeBiddingStream Pipeline #283',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-284',
    name: 'AdTechRealtimeBiddingStream Pipeline #284',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-285',
    name: 'AdTechRealtimeBiddingStream Pipeline #285',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-286',
    name: 'AdTechRealtimeBiddingStream Pipeline #286',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-287',
    name: 'AdTechRealtimeBiddingStream Pipeline #287',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-288',
    name: 'AdTechRealtimeBiddingStream Pipeline #288',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-289',
    name: 'AdTechRealtimeBiddingStream Pipeline #289',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-290',
    name: 'AdTechRealtimeBiddingStream Pipeline #290',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-291',
    name: 'AdTechRealtimeBiddingStream Pipeline #291',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-292',
    name: 'AdTechRealtimeBiddingStream Pipeline #292',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-293',
    name: 'AdTechRealtimeBiddingStream Pipeline #293',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-294',
    name: 'AdTechRealtimeBiddingStream Pipeline #294',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-295',
    name: 'AdTechRealtimeBiddingStream Pipeline #295',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-296',
    name: 'AdTechRealtimeBiddingStream Pipeline #296',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-297',
    name: 'AdTechRealtimeBiddingStream Pipeline #297',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-298',
    name: 'AdTechRealtimeBiddingStream Pipeline #298',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-299',
    name: 'AdTechRealtimeBiddingStream Pipeline #299',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-300',
    name: 'AdTechRealtimeBiddingStream Pipeline #300',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-301',
    name: 'AdTechRealtimeBiddingStream Pipeline #301',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-302',
    name: 'AdTechRealtimeBiddingStream Pipeline #302',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-303',
    name: 'AdTechRealtimeBiddingStream Pipeline #303',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-304',
    name: 'AdTechRealtimeBiddingStream Pipeline #304',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-305',
    name: 'AdTechRealtimeBiddingStream Pipeline #305',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-306',
    name: 'AdTechRealtimeBiddingStream Pipeline #306',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-307',
    name: 'AdTechRealtimeBiddingStream Pipeline #307',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-308',
    name: 'AdTechRealtimeBiddingStream Pipeline #308',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-309',
    name: 'AdTechRealtimeBiddingStream Pipeline #309',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-310',
    name: 'AdTechRealtimeBiddingStream Pipeline #310',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-311',
    name: 'AdTechRealtimeBiddingStream Pipeline #311',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-312',
    name: 'AdTechRealtimeBiddingStream Pipeline #312',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-313',
    name: 'AdTechRealtimeBiddingStream Pipeline #313',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-314',
    name: 'AdTechRealtimeBiddingStream Pipeline #314',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-315',
    name: 'AdTechRealtimeBiddingStream Pipeline #315',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-316',
    name: 'AdTechRealtimeBiddingStream Pipeline #316',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-317',
    name: 'AdTechRealtimeBiddingStream Pipeline #317',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-318',
    name: 'AdTechRealtimeBiddingStream Pipeline #318',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-319',
    name: 'AdTechRealtimeBiddingStream Pipeline #319',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-320',
    name: 'AdTechRealtimeBiddingStream Pipeline #320',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-321',
    name: 'AdTechRealtimeBiddingStream Pipeline #321',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-322',
    name: 'AdTechRealtimeBiddingStream Pipeline #322',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-323',
    name: 'AdTechRealtimeBiddingStream Pipeline #323',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-324',
    name: 'AdTechRealtimeBiddingStream Pipeline #324',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-325',
    name: 'AdTechRealtimeBiddingStream Pipeline #325',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-326',
    name: 'AdTechRealtimeBiddingStream Pipeline #326',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-327',
    name: 'AdTechRealtimeBiddingStream Pipeline #327',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-328',
    name: 'AdTechRealtimeBiddingStream Pipeline #328',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-329',
    name: 'AdTechRealtimeBiddingStream Pipeline #329',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-330',
    name: 'AdTechRealtimeBiddingStream Pipeline #330',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-331',
    name: 'AdTechRealtimeBiddingStream Pipeline #331',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-332',
    name: 'AdTechRealtimeBiddingStream Pipeline #332',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-333',
    name: 'AdTechRealtimeBiddingStream Pipeline #333',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-334',
    name: 'AdTechRealtimeBiddingStream Pipeline #334',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-335',
    name: 'AdTechRealtimeBiddingStream Pipeline #335',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-336',
    name: 'AdTechRealtimeBiddingStream Pipeline #336',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-337',
    name: 'AdTechRealtimeBiddingStream Pipeline #337',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-338',
    name: 'AdTechRealtimeBiddingStream Pipeline #338',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-339',
    name: 'AdTechRealtimeBiddingStream Pipeline #339',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-340',
    name: 'AdTechRealtimeBiddingStream Pipeline #340',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-341',
    name: 'AdTechRealtimeBiddingStream Pipeline #341',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-342',
    name: 'AdTechRealtimeBiddingStream Pipeline #342',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-343',
    name: 'AdTechRealtimeBiddingStream Pipeline #343',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-344',
    name: 'AdTechRealtimeBiddingStream Pipeline #344',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-345',
    name: 'AdTechRealtimeBiddingStream Pipeline #345',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-346',
    name: 'AdTechRealtimeBiddingStream Pipeline #346',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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
    pipelineId: 'DAG-RTB-347',
    name: 'AdTechRealtimeBiddingStream Pipeline #347',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'and DSP attribution',
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
    pipelineId: 'DAG-RTB-348',
    name: 'AdTechRealtimeBiddingStream Pipeline #348',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'OpenRTB bid request parsing',
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
    pipelineId: 'DAG-RTB-349',
    name: 'AdTechRealtimeBiddingStream Pipeline #349',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'CTR prediction feature extraction',
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
    pipelineId: 'DAG-RTB-350',
    name: 'AdTechRealtimeBiddingStream Pipeline #350',
    domain: 'AdTechRealtimeBiddingStream',
    category: 'impression deduplication',
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

export class RTB_PipelineCatalog {
  static search(query: string): DagPipelineTemplate[] {
    const q = query.toLowerCase().trim();
    if (!q) return PIPELINES_RTB_DATASET.slice(0, 20);
    return PIPELINES_RTB_DATASET.filter(p => p.name.toLowerCase().includes(q) || p.pipelineId.toLowerCase().includes(q));
  }
}
