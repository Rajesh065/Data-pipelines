/**
 * Production DAG Pipeline Template: EcommerceClickstreamPipelines
 * Domain Focus: Snowplow event enrichment, bot filtering, session attribution models, and cart abandonment analytics
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

export const PIPELINES_ECOM_DATASET: DagPipelineTemplate[] = [
  {
    pipelineId: 'DAG-ECOM-001',
    name: 'EcommerceClickstreamPipelines Pipeline #1',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-002',
    name: 'EcommerceClickstreamPipelines Pipeline #2',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-003',
    name: 'EcommerceClickstreamPipelines Pipeline #3',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-004',
    name: 'EcommerceClickstreamPipelines Pipeline #4',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-005',
    name: 'EcommerceClickstreamPipelines Pipeline #5',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-006',
    name: 'EcommerceClickstreamPipelines Pipeline #6',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-007',
    name: 'EcommerceClickstreamPipelines Pipeline #7',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-008',
    name: 'EcommerceClickstreamPipelines Pipeline #8',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-009',
    name: 'EcommerceClickstreamPipelines Pipeline #9',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-010',
    name: 'EcommerceClickstreamPipelines Pipeline #10',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-011',
    name: 'EcommerceClickstreamPipelines Pipeline #11',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-012',
    name: 'EcommerceClickstreamPipelines Pipeline #12',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-013',
    name: 'EcommerceClickstreamPipelines Pipeline #13',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-014',
    name: 'EcommerceClickstreamPipelines Pipeline #14',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-015',
    name: 'EcommerceClickstreamPipelines Pipeline #15',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-016',
    name: 'EcommerceClickstreamPipelines Pipeline #16',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-017',
    name: 'EcommerceClickstreamPipelines Pipeline #17',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-018',
    name: 'EcommerceClickstreamPipelines Pipeline #18',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-019',
    name: 'EcommerceClickstreamPipelines Pipeline #19',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-020',
    name: 'EcommerceClickstreamPipelines Pipeline #20',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-021',
    name: 'EcommerceClickstreamPipelines Pipeline #21',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-022',
    name: 'EcommerceClickstreamPipelines Pipeline #22',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-023',
    name: 'EcommerceClickstreamPipelines Pipeline #23',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-024',
    name: 'EcommerceClickstreamPipelines Pipeline #24',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-025',
    name: 'EcommerceClickstreamPipelines Pipeline #25',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-026',
    name: 'EcommerceClickstreamPipelines Pipeline #26',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-027',
    name: 'EcommerceClickstreamPipelines Pipeline #27',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-028',
    name: 'EcommerceClickstreamPipelines Pipeline #28',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-029',
    name: 'EcommerceClickstreamPipelines Pipeline #29',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-030',
    name: 'EcommerceClickstreamPipelines Pipeline #30',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-031',
    name: 'EcommerceClickstreamPipelines Pipeline #31',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-032',
    name: 'EcommerceClickstreamPipelines Pipeline #32',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-033',
    name: 'EcommerceClickstreamPipelines Pipeline #33',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-034',
    name: 'EcommerceClickstreamPipelines Pipeline #34',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-035',
    name: 'EcommerceClickstreamPipelines Pipeline #35',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-036',
    name: 'EcommerceClickstreamPipelines Pipeline #36',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-037',
    name: 'EcommerceClickstreamPipelines Pipeline #37',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-038',
    name: 'EcommerceClickstreamPipelines Pipeline #38',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-039',
    name: 'EcommerceClickstreamPipelines Pipeline #39',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-040',
    name: 'EcommerceClickstreamPipelines Pipeline #40',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-041',
    name: 'EcommerceClickstreamPipelines Pipeline #41',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-042',
    name: 'EcommerceClickstreamPipelines Pipeline #42',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-043',
    name: 'EcommerceClickstreamPipelines Pipeline #43',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-044',
    name: 'EcommerceClickstreamPipelines Pipeline #44',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-045',
    name: 'EcommerceClickstreamPipelines Pipeline #45',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-046',
    name: 'EcommerceClickstreamPipelines Pipeline #46',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-047',
    name: 'EcommerceClickstreamPipelines Pipeline #47',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-048',
    name: 'EcommerceClickstreamPipelines Pipeline #48',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-049',
    name: 'EcommerceClickstreamPipelines Pipeline #49',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-050',
    name: 'EcommerceClickstreamPipelines Pipeline #50',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-051',
    name: 'EcommerceClickstreamPipelines Pipeline #51',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-052',
    name: 'EcommerceClickstreamPipelines Pipeline #52',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-053',
    name: 'EcommerceClickstreamPipelines Pipeline #53',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-054',
    name: 'EcommerceClickstreamPipelines Pipeline #54',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-055',
    name: 'EcommerceClickstreamPipelines Pipeline #55',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-056',
    name: 'EcommerceClickstreamPipelines Pipeline #56',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-057',
    name: 'EcommerceClickstreamPipelines Pipeline #57',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-058',
    name: 'EcommerceClickstreamPipelines Pipeline #58',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-059',
    name: 'EcommerceClickstreamPipelines Pipeline #59',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-060',
    name: 'EcommerceClickstreamPipelines Pipeline #60',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-061',
    name: 'EcommerceClickstreamPipelines Pipeline #61',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-062',
    name: 'EcommerceClickstreamPipelines Pipeline #62',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-063',
    name: 'EcommerceClickstreamPipelines Pipeline #63',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-064',
    name: 'EcommerceClickstreamPipelines Pipeline #64',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-065',
    name: 'EcommerceClickstreamPipelines Pipeline #65',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-066',
    name: 'EcommerceClickstreamPipelines Pipeline #66',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-067',
    name: 'EcommerceClickstreamPipelines Pipeline #67',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-068',
    name: 'EcommerceClickstreamPipelines Pipeline #68',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-069',
    name: 'EcommerceClickstreamPipelines Pipeline #69',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-070',
    name: 'EcommerceClickstreamPipelines Pipeline #70',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-071',
    name: 'EcommerceClickstreamPipelines Pipeline #71',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-072',
    name: 'EcommerceClickstreamPipelines Pipeline #72',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-073',
    name: 'EcommerceClickstreamPipelines Pipeline #73',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-074',
    name: 'EcommerceClickstreamPipelines Pipeline #74',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-075',
    name: 'EcommerceClickstreamPipelines Pipeline #75',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-076',
    name: 'EcommerceClickstreamPipelines Pipeline #76',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-077',
    name: 'EcommerceClickstreamPipelines Pipeline #77',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-078',
    name: 'EcommerceClickstreamPipelines Pipeline #78',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-079',
    name: 'EcommerceClickstreamPipelines Pipeline #79',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-080',
    name: 'EcommerceClickstreamPipelines Pipeline #80',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-081',
    name: 'EcommerceClickstreamPipelines Pipeline #81',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-082',
    name: 'EcommerceClickstreamPipelines Pipeline #82',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-083',
    name: 'EcommerceClickstreamPipelines Pipeline #83',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-084',
    name: 'EcommerceClickstreamPipelines Pipeline #84',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-085',
    name: 'EcommerceClickstreamPipelines Pipeline #85',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-086',
    name: 'EcommerceClickstreamPipelines Pipeline #86',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-087',
    name: 'EcommerceClickstreamPipelines Pipeline #87',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-088',
    name: 'EcommerceClickstreamPipelines Pipeline #88',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-089',
    name: 'EcommerceClickstreamPipelines Pipeline #89',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-090',
    name: 'EcommerceClickstreamPipelines Pipeline #90',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-091',
    name: 'EcommerceClickstreamPipelines Pipeline #91',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-092',
    name: 'EcommerceClickstreamPipelines Pipeline #92',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-093',
    name: 'EcommerceClickstreamPipelines Pipeline #93',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-094',
    name: 'EcommerceClickstreamPipelines Pipeline #94',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-095',
    name: 'EcommerceClickstreamPipelines Pipeline #95',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-096',
    name: 'EcommerceClickstreamPipelines Pipeline #96',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-097',
    name: 'EcommerceClickstreamPipelines Pipeline #97',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-098',
    name: 'EcommerceClickstreamPipelines Pipeline #98',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-099',
    name: 'EcommerceClickstreamPipelines Pipeline #99',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-100',
    name: 'EcommerceClickstreamPipelines Pipeline #100',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-101',
    name: 'EcommerceClickstreamPipelines Pipeline #101',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-102',
    name: 'EcommerceClickstreamPipelines Pipeline #102',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-103',
    name: 'EcommerceClickstreamPipelines Pipeline #103',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-104',
    name: 'EcommerceClickstreamPipelines Pipeline #104',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-105',
    name: 'EcommerceClickstreamPipelines Pipeline #105',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-106',
    name: 'EcommerceClickstreamPipelines Pipeline #106',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-107',
    name: 'EcommerceClickstreamPipelines Pipeline #107',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-108',
    name: 'EcommerceClickstreamPipelines Pipeline #108',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-109',
    name: 'EcommerceClickstreamPipelines Pipeline #109',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-110',
    name: 'EcommerceClickstreamPipelines Pipeline #110',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-111',
    name: 'EcommerceClickstreamPipelines Pipeline #111',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-112',
    name: 'EcommerceClickstreamPipelines Pipeline #112',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-113',
    name: 'EcommerceClickstreamPipelines Pipeline #113',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-114',
    name: 'EcommerceClickstreamPipelines Pipeline #114',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-115',
    name: 'EcommerceClickstreamPipelines Pipeline #115',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-116',
    name: 'EcommerceClickstreamPipelines Pipeline #116',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-117',
    name: 'EcommerceClickstreamPipelines Pipeline #117',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-118',
    name: 'EcommerceClickstreamPipelines Pipeline #118',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-119',
    name: 'EcommerceClickstreamPipelines Pipeline #119',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-120',
    name: 'EcommerceClickstreamPipelines Pipeline #120',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-121',
    name: 'EcommerceClickstreamPipelines Pipeline #121',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-122',
    name: 'EcommerceClickstreamPipelines Pipeline #122',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-123',
    name: 'EcommerceClickstreamPipelines Pipeline #123',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-124',
    name: 'EcommerceClickstreamPipelines Pipeline #124',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-125',
    name: 'EcommerceClickstreamPipelines Pipeline #125',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-126',
    name: 'EcommerceClickstreamPipelines Pipeline #126',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-127',
    name: 'EcommerceClickstreamPipelines Pipeline #127',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-128',
    name: 'EcommerceClickstreamPipelines Pipeline #128',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-129',
    name: 'EcommerceClickstreamPipelines Pipeline #129',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-130',
    name: 'EcommerceClickstreamPipelines Pipeline #130',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-131',
    name: 'EcommerceClickstreamPipelines Pipeline #131',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-132',
    name: 'EcommerceClickstreamPipelines Pipeline #132',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-133',
    name: 'EcommerceClickstreamPipelines Pipeline #133',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-134',
    name: 'EcommerceClickstreamPipelines Pipeline #134',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-135',
    name: 'EcommerceClickstreamPipelines Pipeline #135',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-136',
    name: 'EcommerceClickstreamPipelines Pipeline #136',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-137',
    name: 'EcommerceClickstreamPipelines Pipeline #137',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-138',
    name: 'EcommerceClickstreamPipelines Pipeline #138',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-139',
    name: 'EcommerceClickstreamPipelines Pipeline #139',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-140',
    name: 'EcommerceClickstreamPipelines Pipeline #140',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-141',
    name: 'EcommerceClickstreamPipelines Pipeline #141',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-142',
    name: 'EcommerceClickstreamPipelines Pipeline #142',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-143',
    name: 'EcommerceClickstreamPipelines Pipeline #143',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-144',
    name: 'EcommerceClickstreamPipelines Pipeline #144',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-145',
    name: 'EcommerceClickstreamPipelines Pipeline #145',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-146',
    name: 'EcommerceClickstreamPipelines Pipeline #146',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-147',
    name: 'EcommerceClickstreamPipelines Pipeline #147',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-148',
    name: 'EcommerceClickstreamPipelines Pipeline #148',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-149',
    name: 'EcommerceClickstreamPipelines Pipeline #149',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-150',
    name: 'EcommerceClickstreamPipelines Pipeline #150',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-151',
    name: 'EcommerceClickstreamPipelines Pipeline #151',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-152',
    name: 'EcommerceClickstreamPipelines Pipeline #152',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-153',
    name: 'EcommerceClickstreamPipelines Pipeline #153',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-154',
    name: 'EcommerceClickstreamPipelines Pipeline #154',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-155',
    name: 'EcommerceClickstreamPipelines Pipeline #155',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-156',
    name: 'EcommerceClickstreamPipelines Pipeline #156',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-157',
    name: 'EcommerceClickstreamPipelines Pipeline #157',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-158',
    name: 'EcommerceClickstreamPipelines Pipeline #158',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-159',
    name: 'EcommerceClickstreamPipelines Pipeline #159',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-160',
    name: 'EcommerceClickstreamPipelines Pipeline #160',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-161',
    name: 'EcommerceClickstreamPipelines Pipeline #161',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-162',
    name: 'EcommerceClickstreamPipelines Pipeline #162',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-163',
    name: 'EcommerceClickstreamPipelines Pipeline #163',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-164',
    name: 'EcommerceClickstreamPipelines Pipeline #164',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-165',
    name: 'EcommerceClickstreamPipelines Pipeline #165',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-166',
    name: 'EcommerceClickstreamPipelines Pipeline #166',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-167',
    name: 'EcommerceClickstreamPipelines Pipeline #167',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-168',
    name: 'EcommerceClickstreamPipelines Pipeline #168',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-169',
    name: 'EcommerceClickstreamPipelines Pipeline #169',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-170',
    name: 'EcommerceClickstreamPipelines Pipeline #170',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-171',
    name: 'EcommerceClickstreamPipelines Pipeline #171',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-172',
    name: 'EcommerceClickstreamPipelines Pipeline #172',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-173',
    name: 'EcommerceClickstreamPipelines Pipeline #173',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-174',
    name: 'EcommerceClickstreamPipelines Pipeline #174',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-175',
    name: 'EcommerceClickstreamPipelines Pipeline #175',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-176',
    name: 'EcommerceClickstreamPipelines Pipeline #176',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-177',
    name: 'EcommerceClickstreamPipelines Pipeline #177',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-178',
    name: 'EcommerceClickstreamPipelines Pipeline #178',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-179',
    name: 'EcommerceClickstreamPipelines Pipeline #179',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-180',
    name: 'EcommerceClickstreamPipelines Pipeline #180',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-181',
    name: 'EcommerceClickstreamPipelines Pipeline #181',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-182',
    name: 'EcommerceClickstreamPipelines Pipeline #182',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-183',
    name: 'EcommerceClickstreamPipelines Pipeline #183',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-184',
    name: 'EcommerceClickstreamPipelines Pipeline #184',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-185',
    name: 'EcommerceClickstreamPipelines Pipeline #185',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-186',
    name: 'EcommerceClickstreamPipelines Pipeline #186',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-187',
    name: 'EcommerceClickstreamPipelines Pipeline #187',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-188',
    name: 'EcommerceClickstreamPipelines Pipeline #188',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-189',
    name: 'EcommerceClickstreamPipelines Pipeline #189',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-190',
    name: 'EcommerceClickstreamPipelines Pipeline #190',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-191',
    name: 'EcommerceClickstreamPipelines Pipeline #191',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-192',
    name: 'EcommerceClickstreamPipelines Pipeline #192',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-193',
    name: 'EcommerceClickstreamPipelines Pipeline #193',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-194',
    name: 'EcommerceClickstreamPipelines Pipeline #194',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-195',
    name: 'EcommerceClickstreamPipelines Pipeline #195',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-196',
    name: 'EcommerceClickstreamPipelines Pipeline #196',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-197',
    name: 'EcommerceClickstreamPipelines Pipeline #197',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-198',
    name: 'EcommerceClickstreamPipelines Pipeline #198',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-199',
    name: 'EcommerceClickstreamPipelines Pipeline #199',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-200',
    name: 'EcommerceClickstreamPipelines Pipeline #200',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-201',
    name: 'EcommerceClickstreamPipelines Pipeline #201',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-202',
    name: 'EcommerceClickstreamPipelines Pipeline #202',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-203',
    name: 'EcommerceClickstreamPipelines Pipeline #203',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-204',
    name: 'EcommerceClickstreamPipelines Pipeline #204',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-205',
    name: 'EcommerceClickstreamPipelines Pipeline #205',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-206',
    name: 'EcommerceClickstreamPipelines Pipeline #206',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-207',
    name: 'EcommerceClickstreamPipelines Pipeline #207',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-208',
    name: 'EcommerceClickstreamPipelines Pipeline #208',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-209',
    name: 'EcommerceClickstreamPipelines Pipeline #209',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-210',
    name: 'EcommerceClickstreamPipelines Pipeline #210',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-211',
    name: 'EcommerceClickstreamPipelines Pipeline #211',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-212',
    name: 'EcommerceClickstreamPipelines Pipeline #212',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-213',
    name: 'EcommerceClickstreamPipelines Pipeline #213',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-214',
    name: 'EcommerceClickstreamPipelines Pipeline #214',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-215',
    name: 'EcommerceClickstreamPipelines Pipeline #215',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-216',
    name: 'EcommerceClickstreamPipelines Pipeline #216',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-217',
    name: 'EcommerceClickstreamPipelines Pipeline #217',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-218',
    name: 'EcommerceClickstreamPipelines Pipeline #218',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-219',
    name: 'EcommerceClickstreamPipelines Pipeline #219',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-220',
    name: 'EcommerceClickstreamPipelines Pipeline #220',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-221',
    name: 'EcommerceClickstreamPipelines Pipeline #221',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-222',
    name: 'EcommerceClickstreamPipelines Pipeline #222',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-223',
    name: 'EcommerceClickstreamPipelines Pipeline #223',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-224',
    name: 'EcommerceClickstreamPipelines Pipeline #224',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-225',
    name: 'EcommerceClickstreamPipelines Pipeline #225',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-226',
    name: 'EcommerceClickstreamPipelines Pipeline #226',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-227',
    name: 'EcommerceClickstreamPipelines Pipeline #227',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-228',
    name: 'EcommerceClickstreamPipelines Pipeline #228',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-229',
    name: 'EcommerceClickstreamPipelines Pipeline #229',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-230',
    name: 'EcommerceClickstreamPipelines Pipeline #230',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-231',
    name: 'EcommerceClickstreamPipelines Pipeline #231',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-232',
    name: 'EcommerceClickstreamPipelines Pipeline #232',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-233',
    name: 'EcommerceClickstreamPipelines Pipeline #233',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-234',
    name: 'EcommerceClickstreamPipelines Pipeline #234',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-235',
    name: 'EcommerceClickstreamPipelines Pipeline #235',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-236',
    name: 'EcommerceClickstreamPipelines Pipeline #236',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-237',
    name: 'EcommerceClickstreamPipelines Pipeline #237',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-238',
    name: 'EcommerceClickstreamPipelines Pipeline #238',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-239',
    name: 'EcommerceClickstreamPipelines Pipeline #239',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-240',
    name: 'EcommerceClickstreamPipelines Pipeline #240',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-241',
    name: 'EcommerceClickstreamPipelines Pipeline #241',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-242',
    name: 'EcommerceClickstreamPipelines Pipeline #242',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-243',
    name: 'EcommerceClickstreamPipelines Pipeline #243',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-244',
    name: 'EcommerceClickstreamPipelines Pipeline #244',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-245',
    name: 'EcommerceClickstreamPipelines Pipeline #245',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-246',
    name: 'EcommerceClickstreamPipelines Pipeline #246',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-247',
    name: 'EcommerceClickstreamPipelines Pipeline #247',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-248',
    name: 'EcommerceClickstreamPipelines Pipeline #248',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-249',
    name: 'EcommerceClickstreamPipelines Pipeline #249',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-250',
    name: 'EcommerceClickstreamPipelines Pipeline #250',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-251',
    name: 'EcommerceClickstreamPipelines Pipeline #251',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-252',
    name: 'EcommerceClickstreamPipelines Pipeline #252',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-253',
    name: 'EcommerceClickstreamPipelines Pipeline #253',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-254',
    name: 'EcommerceClickstreamPipelines Pipeline #254',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-255',
    name: 'EcommerceClickstreamPipelines Pipeline #255',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-256',
    name: 'EcommerceClickstreamPipelines Pipeline #256',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-257',
    name: 'EcommerceClickstreamPipelines Pipeline #257',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-258',
    name: 'EcommerceClickstreamPipelines Pipeline #258',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-259',
    name: 'EcommerceClickstreamPipelines Pipeline #259',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-260',
    name: 'EcommerceClickstreamPipelines Pipeline #260',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-261',
    name: 'EcommerceClickstreamPipelines Pipeline #261',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-262',
    name: 'EcommerceClickstreamPipelines Pipeline #262',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-263',
    name: 'EcommerceClickstreamPipelines Pipeline #263',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-264',
    name: 'EcommerceClickstreamPipelines Pipeline #264',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-265',
    name: 'EcommerceClickstreamPipelines Pipeline #265',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-266',
    name: 'EcommerceClickstreamPipelines Pipeline #266',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-267',
    name: 'EcommerceClickstreamPipelines Pipeline #267',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-268',
    name: 'EcommerceClickstreamPipelines Pipeline #268',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-269',
    name: 'EcommerceClickstreamPipelines Pipeline #269',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-270',
    name: 'EcommerceClickstreamPipelines Pipeline #270',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-271',
    name: 'EcommerceClickstreamPipelines Pipeline #271',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-272',
    name: 'EcommerceClickstreamPipelines Pipeline #272',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-273',
    name: 'EcommerceClickstreamPipelines Pipeline #273',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-274',
    name: 'EcommerceClickstreamPipelines Pipeline #274',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-275',
    name: 'EcommerceClickstreamPipelines Pipeline #275',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-276',
    name: 'EcommerceClickstreamPipelines Pipeline #276',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-277',
    name: 'EcommerceClickstreamPipelines Pipeline #277',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-278',
    name: 'EcommerceClickstreamPipelines Pipeline #278',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-279',
    name: 'EcommerceClickstreamPipelines Pipeline #279',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-280',
    name: 'EcommerceClickstreamPipelines Pipeline #280',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-281',
    name: 'EcommerceClickstreamPipelines Pipeline #281',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-282',
    name: 'EcommerceClickstreamPipelines Pipeline #282',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-283',
    name: 'EcommerceClickstreamPipelines Pipeline #283',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-284',
    name: 'EcommerceClickstreamPipelines Pipeline #284',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-285',
    name: 'EcommerceClickstreamPipelines Pipeline #285',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-286',
    name: 'EcommerceClickstreamPipelines Pipeline #286',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-287',
    name: 'EcommerceClickstreamPipelines Pipeline #287',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-288',
    name: 'EcommerceClickstreamPipelines Pipeline #288',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-289',
    name: 'EcommerceClickstreamPipelines Pipeline #289',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-290',
    name: 'EcommerceClickstreamPipelines Pipeline #290',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-291',
    name: 'EcommerceClickstreamPipelines Pipeline #291',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-292',
    name: 'EcommerceClickstreamPipelines Pipeline #292',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-293',
    name: 'EcommerceClickstreamPipelines Pipeline #293',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-294',
    name: 'EcommerceClickstreamPipelines Pipeline #294',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-295',
    name: 'EcommerceClickstreamPipelines Pipeline #295',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-296',
    name: 'EcommerceClickstreamPipelines Pipeline #296',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-297',
    name: 'EcommerceClickstreamPipelines Pipeline #297',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-298',
    name: 'EcommerceClickstreamPipelines Pipeline #298',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-299',
    name: 'EcommerceClickstreamPipelines Pipeline #299',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-300',
    name: 'EcommerceClickstreamPipelines Pipeline #300',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-301',
    name: 'EcommerceClickstreamPipelines Pipeline #301',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-302',
    name: 'EcommerceClickstreamPipelines Pipeline #302',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-303',
    name: 'EcommerceClickstreamPipelines Pipeline #303',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-304',
    name: 'EcommerceClickstreamPipelines Pipeline #304',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-305',
    name: 'EcommerceClickstreamPipelines Pipeline #305',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-306',
    name: 'EcommerceClickstreamPipelines Pipeline #306',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-307',
    name: 'EcommerceClickstreamPipelines Pipeline #307',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-308',
    name: 'EcommerceClickstreamPipelines Pipeline #308',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-309',
    name: 'EcommerceClickstreamPipelines Pipeline #309',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-310',
    name: 'EcommerceClickstreamPipelines Pipeline #310',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-311',
    name: 'EcommerceClickstreamPipelines Pipeline #311',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-312',
    name: 'EcommerceClickstreamPipelines Pipeline #312',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-313',
    name: 'EcommerceClickstreamPipelines Pipeline #313',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-314',
    name: 'EcommerceClickstreamPipelines Pipeline #314',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-315',
    name: 'EcommerceClickstreamPipelines Pipeline #315',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-316',
    name: 'EcommerceClickstreamPipelines Pipeline #316',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-317',
    name: 'EcommerceClickstreamPipelines Pipeline #317',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-318',
    name: 'EcommerceClickstreamPipelines Pipeline #318',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-319',
    name: 'EcommerceClickstreamPipelines Pipeline #319',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-320',
    name: 'EcommerceClickstreamPipelines Pipeline #320',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-321',
    name: 'EcommerceClickstreamPipelines Pipeline #321',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-322',
    name: 'EcommerceClickstreamPipelines Pipeline #322',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-323',
    name: 'EcommerceClickstreamPipelines Pipeline #323',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-324',
    name: 'EcommerceClickstreamPipelines Pipeline #324',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-325',
    name: 'EcommerceClickstreamPipelines Pipeline #325',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-326',
    name: 'EcommerceClickstreamPipelines Pipeline #326',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-327',
    name: 'EcommerceClickstreamPipelines Pipeline #327',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-328',
    name: 'EcommerceClickstreamPipelines Pipeline #328',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-329',
    name: 'EcommerceClickstreamPipelines Pipeline #329',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-330',
    name: 'EcommerceClickstreamPipelines Pipeline #330',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-331',
    name: 'EcommerceClickstreamPipelines Pipeline #331',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-332',
    name: 'EcommerceClickstreamPipelines Pipeline #332',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-333',
    name: 'EcommerceClickstreamPipelines Pipeline #333',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-334',
    name: 'EcommerceClickstreamPipelines Pipeline #334',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-335',
    name: 'EcommerceClickstreamPipelines Pipeline #335',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-336',
    name: 'EcommerceClickstreamPipelines Pipeline #336',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-337',
    name: 'EcommerceClickstreamPipelines Pipeline #337',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-338',
    name: 'EcommerceClickstreamPipelines Pipeline #338',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-339',
    name: 'EcommerceClickstreamPipelines Pipeline #339',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-340',
    name: 'EcommerceClickstreamPipelines Pipeline #340',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-341',
    name: 'EcommerceClickstreamPipelines Pipeline #341',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-342',
    name: 'EcommerceClickstreamPipelines Pipeline #342',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-343',
    name: 'EcommerceClickstreamPipelines Pipeline #343',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-344',
    name: 'EcommerceClickstreamPipelines Pipeline #344',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-345',
    name: 'EcommerceClickstreamPipelines Pipeline #345',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-346',
    name: 'EcommerceClickstreamPipelines Pipeline #346',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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
    pipelineId: 'DAG-ECOM-347',
    name: 'EcommerceClickstreamPipelines Pipeline #347',
    domain: 'EcommerceClickstreamPipelines',
    category: 'and cart abandonment analytics',
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
    pipelineId: 'DAG-ECOM-348',
    name: 'EcommerceClickstreamPipelines Pipeline #348',
    domain: 'EcommerceClickstreamPipelines',
    category: 'Snowplow event enrichment',
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
    pipelineId: 'DAG-ECOM-349',
    name: 'EcommerceClickstreamPipelines Pipeline #349',
    domain: 'EcommerceClickstreamPipelines',
    category: 'bot filtering',
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
    pipelineId: 'DAG-ECOM-350',
    name: 'EcommerceClickstreamPipelines Pipeline #350',
    domain: 'EcommerceClickstreamPipelines',
    category: 'session attribution models',
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

export class ECOM_PipelineCatalog {
  static search(query: string): DagPipelineTemplate[] {
    const q = query.toLowerCase().trim();
    if (!q) return PIPELINES_ECOM_DATASET.slice(0, 20);
    return PIPELINES_ECOM_DATASET.filter(p => p.name.toLowerCase().includes(q) || p.pipelineId.toLowerCase().includes(q));
  }
}
