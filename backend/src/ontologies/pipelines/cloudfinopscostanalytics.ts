/**
 * Production DAG Pipeline Template: CloudFinOpsCostAnalytics
 * Domain Focus: AWS Cost and Usage Report (CUR) parsing, Kubernetes pod cost attribution, and commitment discount optimization
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

export const PIPELINES_COST_DATASET: DagPipelineTemplate[] = [
  {
    pipelineId: 'DAG-COST-001',
    name: 'CloudFinOpsCostAnalytics Pipeline #1',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-002',
    name: 'CloudFinOpsCostAnalytics Pipeline #2',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-003',
    name: 'CloudFinOpsCostAnalytics Pipeline #3',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-004',
    name: 'CloudFinOpsCostAnalytics Pipeline #4',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-005',
    name: 'CloudFinOpsCostAnalytics Pipeline #5',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-006',
    name: 'CloudFinOpsCostAnalytics Pipeline #6',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-007',
    name: 'CloudFinOpsCostAnalytics Pipeline #7',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-008',
    name: 'CloudFinOpsCostAnalytics Pipeline #8',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-009',
    name: 'CloudFinOpsCostAnalytics Pipeline #9',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-010',
    name: 'CloudFinOpsCostAnalytics Pipeline #10',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-011',
    name: 'CloudFinOpsCostAnalytics Pipeline #11',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-012',
    name: 'CloudFinOpsCostAnalytics Pipeline #12',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-013',
    name: 'CloudFinOpsCostAnalytics Pipeline #13',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-014',
    name: 'CloudFinOpsCostAnalytics Pipeline #14',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-015',
    name: 'CloudFinOpsCostAnalytics Pipeline #15',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-016',
    name: 'CloudFinOpsCostAnalytics Pipeline #16',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-017',
    name: 'CloudFinOpsCostAnalytics Pipeline #17',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-018',
    name: 'CloudFinOpsCostAnalytics Pipeline #18',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-019',
    name: 'CloudFinOpsCostAnalytics Pipeline #19',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-020',
    name: 'CloudFinOpsCostAnalytics Pipeline #20',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-021',
    name: 'CloudFinOpsCostAnalytics Pipeline #21',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-022',
    name: 'CloudFinOpsCostAnalytics Pipeline #22',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-023',
    name: 'CloudFinOpsCostAnalytics Pipeline #23',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-024',
    name: 'CloudFinOpsCostAnalytics Pipeline #24',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-025',
    name: 'CloudFinOpsCostAnalytics Pipeline #25',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-026',
    name: 'CloudFinOpsCostAnalytics Pipeline #26',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-027',
    name: 'CloudFinOpsCostAnalytics Pipeline #27',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-028',
    name: 'CloudFinOpsCostAnalytics Pipeline #28',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-029',
    name: 'CloudFinOpsCostAnalytics Pipeline #29',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-030',
    name: 'CloudFinOpsCostAnalytics Pipeline #30',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-031',
    name: 'CloudFinOpsCostAnalytics Pipeline #31',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-032',
    name: 'CloudFinOpsCostAnalytics Pipeline #32',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-033',
    name: 'CloudFinOpsCostAnalytics Pipeline #33',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-034',
    name: 'CloudFinOpsCostAnalytics Pipeline #34',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-035',
    name: 'CloudFinOpsCostAnalytics Pipeline #35',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-036',
    name: 'CloudFinOpsCostAnalytics Pipeline #36',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-037',
    name: 'CloudFinOpsCostAnalytics Pipeline #37',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-038',
    name: 'CloudFinOpsCostAnalytics Pipeline #38',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-039',
    name: 'CloudFinOpsCostAnalytics Pipeline #39',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-040',
    name: 'CloudFinOpsCostAnalytics Pipeline #40',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-041',
    name: 'CloudFinOpsCostAnalytics Pipeline #41',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-042',
    name: 'CloudFinOpsCostAnalytics Pipeline #42',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-043',
    name: 'CloudFinOpsCostAnalytics Pipeline #43',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-044',
    name: 'CloudFinOpsCostAnalytics Pipeline #44',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-045',
    name: 'CloudFinOpsCostAnalytics Pipeline #45',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-046',
    name: 'CloudFinOpsCostAnalytics Pipeline #46',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-047',
    name: 'CloudFinOpsCostAnalytics Pipeline #47',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-048',
    name: 'CloudFinOpsCostAnalytics Pipeline #48',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-049',
    name: 'CloudFinOpsCostAnalytics Pipeline #49',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-050',
    name: 'CloudFinOpsCostAnalytics Pipeline #50',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-051',
    name: 'CloudFinOpsCostAnalytics Pipeline #51',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-052',
    name: 'CloudFinOpsCostAnalytics Pipeline #52',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-053',
    name: 'CloudFinOpsCostAnalytics Pipeline #53',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-054',
    name: 'CloudFinOpsCostAnalytics Pipeline #54',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-055',
    name: 'CloudFinOpsCostAnalytics Pipeline #55',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-056',
    name: 'CloudFinOpsCostAnalytics Pipeline #56',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-057',
    name: 'CloudFinOpsCostAnalytics Pipeline #57',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-058',
    name: 'CloudFinOpsCostAnalytics Pipeline #58',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-059',
    name: 'CloudFinOpsCostAnalytics Pipeline #59',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-060',
    name: 'CloudFinOpsCostAnalytics Pipeline #60',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-061',
    name: 'CloudFinOpsCostAnalytics Pipeline #61',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-062',
    name: 'CloudFinOpsCostAnalytics Pipeline #62',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-063',
    name: 'CloudFinOpsCostAnalytics Pipeline #63',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-064',
    name: 'CloudFinOpsCostAnalytics Pipeline #64',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-065',
    name: 'CloudFinOpsCostAnalytics Pipeline #65',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-066',
    name: 'CloudFinOpsCostAnalytics Pipeline #66',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-067',
    name: 'CloudFinOpsCostAnalytics Pipeline #67',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-068',
    name: 'CloudFinOpsCostAnalytics Pipeline #68',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-069',
    name: 'CloudFinOpsCostAnalytics Pipeline #69',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-070',
    name: 'CloudFinOpsCostAnalytics Pipeline #70',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-071',
    name: 'CloudFinOpsCostAnalytics Pipeline #71',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-072',
    name: 'CloudFinOpsCostAnalytics Pipeline #72',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-073',
    name: 'CloudFinOpsCostAnalytics Pipeline #73',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-074',
    name: 'CloudFinOpsCostAnalytics Pipeline #74',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-075',
    name: 'CloudFinOpsCostAnalytics Pipeline #75',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-076',
    name: 'CloudFinOpsCostAnalytics Pipeline #76',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-077',
    name: 'CloudFinOpsCostAnalytics Pipeline #77',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-078',
    name: 'CloudFinOpsCostAnalytics Pipeline #78',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-079',
    name: 'CloudFinOpsCostAnalytics Pipeline #79',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-080',
    name: 'CloudFinOpsCostAnalytics Pipeline #80',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-081',
    name: 'CloudFinOpsCostAnalytics Pipeline #81',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-082',
    name: 'CloudFinOpsCostAnalytics Pipeline #82',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-083',
    name: 'CloudFinOpsCostAnalytics Pipeline #83',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-084',
    name: 'CloudFinOpsCostAnalytics Pipeline #84',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-085',
    name: 'CloudFinOpsCostAnalytics Pipeline #85',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-086',
    name: 'CloudFinOpsCostAnalytics Pipeline #86',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-087',
    name: 'CloudFinOpsCostAnalytics Pipeline #87',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-088',
    name: 'CloudFinOpsCostAnalytics Pipeline #88',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-089',
    name: 'CloudFinOpsCostAnalytics Pipeline #89',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-090',
    name: 'CloudFinOpsCostAnalytics Pipeline #90',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-091',
    name: 'CloudFinOpsCostAnalytics Pipeline #91',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-092',
    name: 'CloudFinOpsCostAnalytics Pipeline #92',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-093',
    name: 'CloudFinOpsCostAnalytics Pipeline #93',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-094',
    name: 'CloudFinOpsCostAnalytics Pipeline #94',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-095',
    name: 'CloudFinOpsCostAnalytics Pipeline #95',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-096',
    name: 'CloudFinOpsCostAnalytics Pipeline #96',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-097',
    name: 'CloudFinOpsCostAnalytics Pipeline #97',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-098',
    name: 'CloudFinOpsCostAnalytics Pipeline #98',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-099',
    name: 'CloudFinOpsCostAnalytics Pipeline #99',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-100',
    name: 'CloudFinOpsCostAnalytics Pipeline #100',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-101',
    name: 'CloudFinOpsCostAnalytics Pipeline #101',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-102',
    name: 'CloudFinOpsCostAnalytics Pipeline #102',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-103',
    name: 'CloudFinOpsCostAnalytics Pipeline #103',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-104',
    name: 'CloudFinOpsCostAnalytics Pipeline #104',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-105',
    name: 'CloudFinOpsCostAnalytics Pipeline #105',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-106',
    name: 'CloudFinOpsCostAnalytics Pipeline #106',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-107',
    name: 'CloudFinOpsCostAnalytics Pipeline #107',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-108',
    name: 'CloudFinOpsCostAnalytics Pipeline #108',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-109',
    name: 'CloudFinOpsCostAnalytics Pipeline #109',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-110',
    name: 'CloudFinOpsCostAnalytics Pipeline #110',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-111',
    name: 'CloudFinOpsCostAnalytics Pipeline #111',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-112',
    name: 'CloudFinOpsCostAnalytics Pipeline #112',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-113',
    name: 'CloudFinOpsCostAnalytics Pipeline #113',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-114',
    name: 'CloudFinOpsCostAnalytics Pipeline #114',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-115',
    name: 'CloudFinOpsCostAnalytics Pipeline #115',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-116',
    name: 'CloudFinOpsCostAnalytics Pipeline #116',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-117',
    name: 'CloudFinOpsCostAnalytics Pipeline #117',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-118',
    name: 'CloudFinOpsCostAnalytics Pipeline #118',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-119',
    name: 'CloudFinOpsCostAnalytics Pipeline #119',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-120',
    name: 'CloudFinOpsCostAnalytics Pipeline #120',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-121',
    name: 'CloudFinOpsCostAnalytics Pipeline #121',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-122',
    name: 'CloudFinOpsCostAnalytics Pipeline #122',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-123',
    name: 'CloudFinOpsCostAnalytics Pipeline #123',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-124',
    name: 'CloudFinOpsCostAnalytics Pipeline #124',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-125',
    name: 'CloudFinOpsCostAnalytics Pipeline #125',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-126',
    name: 'CloudFinOpsCostAnalytics Pipeline #126',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-127',
    name: 'CloudFinOpsCostAnalytics Pipeline #127',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-128',
    name: 'CloudFinOpsCostAnalytics Pipeline #128',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-129',
    name: 'CloudFinOpsCostAnalytics Pipeline #129',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-130',
    name: 'CloudFinOpsCostAnalytics Pipeline #130',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-131',
    name: 'CloudFinOpsCostAnalytics Pipeline #131',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-132',
    name: 'CloudFinOpsCostAnalytics Pipeline #132',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-133',
    name: 'CloudFinOpsCostAnalytics Pipeline #133',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-134',
    name: 'CloudFinOpsCostAnalytics Pipeline #134',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-135',
    name: 'CloudFinOpsCostAnalytics Pipeline #135',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-136',
    name: 'CloudFinOpsCostAnalytics Pipeline #136',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-137',
    name: 'CloudFinOpsCostAnalytics Pipeline #137',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-138',
    name: 'CloudFinOpsCostAnalytics Pipeline #138',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-139',
    name: 'CloudFinOpsCostAnalytics Pipeline #139',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-140',
    name: 'CloudFinOpsCostAnalytics Pipeline #140',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-141',
    name: 'CloudFinOpsCostAnalytics Pipeline #141',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-142',
    name: 'CloudFinOpsCostAnalytics Pipeline #142',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-143',
    name: 'CloudFinOpsCostAnalytics Pipeline #143',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-144',
    name: 'CloudFinOpsCostAnalytics Pipeline #144',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-145',
    name: 'CloudFinOpsCostAnalytics Pipeline #145',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-146',
    name: 'CloudFinOpsCostAnalytics Pipeline #146',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-147',
    name: 'CloudFinOpsCostAnalytics Pipeline #147',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-148',
    name: 'CloudFinOpsCostAnalytics Pipeline #148',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-149',
    name: 'CloudFinOpsCostAnalytics Pipeline #149',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-150',
    name: 'CloudFinOpsCostAnalytics Pipeline #150',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-151',
    name: 'CloudFinOpsCostAnalytics Pipeline #151',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-152',
    name: 'CloudFinOpsCostAnalytics Pipeline #152',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-153',
    name: 'CloudFinOpsCostAnalytics Pipeline #153',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-154',
    name: 'CloudFinOpsCostAnalytics Pipeline #154',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-155',
    name: 'CloudFinOpsCostAnalytics Pipeline #155',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-156',
    name: 'CloudFinOpsCostAnalytics Pipeline #156',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-157',
    name: 'CloudFinOpsCostAnalytics Pipeline #157',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-158',
    name: 'CloudFinOpsCostAnalytics Pipeline #158',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-159',
    name: 'CloudFinOpsCostAnalytics Pipeline #159',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-160',
    name: 'CloudFinOpsCostAnalytics Pipeline #160',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-161',
    name: 'CloudFinOpsCostAnalytics Pipeline #161',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-162',
    name: 'CloudFinOpsCostAnalytics Pipeline #162',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-163',
    name: 'CloudFinOpsCostAnalytics Pipeline #163',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-164',
    name: 'CloudFinOpsCostAnalytics Pipeline #164',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-165',
    name: 'CloudFinOpsCostAnalytics Pipeline #165',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-166',
    name: 'CloudFinOpsCostAnalytics Pipeline #166',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-167',
    name: 'CloudFinOpsCostAnalytics Pipeline #167',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-168',
    name: 'CloudFinOpsCostAnalytics Pipeline #168',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-169',
    name: 'CloudFinOpsCostAnalytics Pipeline #169',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-170',
    name: 'CloudFinOpsCostAnalytics Pipeline #170',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-171',
    name: 'CloudFinOpsCostAnalytics Pipeline #171',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-172',
    name: 'CloudFinOpsCostAnalytics Pipeline #172',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-173',
    name: 'CloudFinOpsCostAnalytics Pipeline #173',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-174',
    name: 'CloudFinOpsCostAnalytics Pipeline #174',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-175',
    name: 'CloudFinOpsCostAnalytics Pipeline #175',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-176',
    name: 'CloudFinOpsCostAnalytics Pipeline #176',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-177',
    name: 'CloudFinOpsCostAnalytics Pipeline #177',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-178',
    name: 'CloudFinOpsCostAnalytics Pipeline #178',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-179',
    name: 'CloudFinOpsCostAnalytics Pipeline #179',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-180',
    name: 'CloudFinOpsCostAnalytics Pipeline #180',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-181',
    name: 'CloudFinOpsCostAnalytics Pipeline #181',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-182',
    name: 'CloudFinOpsCostAnalytics Pipeline #182',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-183',
    name: 'CloudFinOpsCostAnalytics Pipeline #183',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-184',
    name: 'CloudFinOpsCostAnalytics Pipeline #184',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-185',
    name: 'CloudFinOpsCostAnalytics Pipeline #185',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-186',
    name: 'CloudFinOpsCostAnalytics Pipeline #186',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-187',
    name: 'CloudFinOpsCostAnalytics Pipeline #187',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-188',
    name: 'CloudFinOpsCostAnalytics Pipeline #188',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-189',
    name: 'CloudFinOpsCostAnalytics Pipeline #189',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-190',
    name: 'CloudFinOpsCostAnalytics Pipeline #190',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-191',
    name: 'CloudFinOpsCostAnalytics Pipeline #191',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-192',
    name: 'CloudFinOpsCostAnalytics Pipeline #192',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-193',
    name: 'CloudFinOpsCostAnalytics Pipeline #193',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-194',
    name: 'CloudFinOpsCostAnalytics Pipeline #194',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-195',
    name: 'CloudFinOpsCostAnalytics Pipeline #195',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-196',
    name: 'CloudFinOpsCostAnalytics Pipeline #196',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-197',
    name: 'CloudFinOpsCostAnalytics Pipeline #197',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-198',
    name: 'CloudFinOpsCostAnalytics Pipeline #198',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-199',
    name: 'CloudFinOpsCostAnalytics Pipeline #199',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-200',
    name: 'CloudFinOpsCostAnalytics Pipeline #200',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-201',
    name: 'CloudFinOpsCostAnalytics Pipeline #201',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-202',
    name: 'CloudFinOpsCostAnalytics Pipeline #202',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-203',
    name: 'CloudFinOpsCostAnalytics Pipeline #203',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-204',
    name: 'CloudFinOpsCostAnalytics Pipeline #204',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-205',
    name: 'CloudFinOpsCostAnalytics Pipeline #205',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-206',
    name: 'CloudFinOpsCostAnalytics Pipeline #206',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-207',
    name: 'CloudFinOpsCostAnalytics Pipeline #207',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-208',
    name: 'CloudFinOpsCostAnalytics Pipeline #208',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-209',
    name: 'CloudFinOpsCostAnalytics Pipeline #209',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-210',
    name: 'CloudFinOpsCostAnalytics Pipeline #210',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-211',
    name: 'CloudFinOpsCostAnalytics Pipeline #211',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-212',
    name: 'CloudFinOpsCostAnalytics Pipeline #212',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-213',
    name: 'CloudFinOpsCostAnalytics Pipeline #213',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-214',
    name: 'CloudFinOpsCostAnalytics Pipeline #214',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-215',
    name: 'CloudFinOpsCostAnalytics Pipeline #215',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-216',
    name: 'CloudFinOpsCostAnalytics Pipeline #216',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-217',
    name: 'CloudFinOpsCostAnalytics Pipeline #217',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-218',
    name: 'CloudFinOpsCostAnalytics Pipeline #218',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-219',
    name: 'CloudFinOpsCostAnalytics Pipeline #219',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-220',
    name: 'CloudFinOpsCostAnalytics Pipeline #220',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-221',
    name: 'CloudFinOpsCostAnalytics Pipeline #221',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-222',
    name: 'CloudFinOpsCostAnalytics Pipeline #222',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-223',
    name: 'CloudFinOpsCostAnalytics Pipeline #223',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-224',
    name: 'CloudFinOpsCostAnalytics Pipeline #224',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-225',
    name: 'CloudFinOpsCostAnalytics Pipeline #225',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-226',
    name: 'CloudFinOpsCostAnalytics Pipeline #226',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-227',
    name: 'CloudFinOpsCostAnalytics Pipeline #227',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-228',
    name: 'CloudFinOpsCostAnalytics Pipeline #228',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-229',
    name: 'CloudFinOpsCostAnalytics Pipeline #229',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-230',
    name: 'CloudFinOpsCostAnalytics Pipeline #230',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-231',
    name: 'CloudFinOpsCostAnalytics Pipeline #231',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-232',
    name: 'CloudFinOpsCostAnalytics Pipeline #232',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-233',
    name: 'CloudFinOpsCostAnalytics Pipeline #233',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-234',
    name: 'CloudFinOpsCostAnalytics Pipeline #234',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-235',
    name: 'CloudFinOpsCostAnalytics Pipeline #235',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-236',
    name: 'CloudFinOpsCostAnalytics Pipeline #236',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-237',
    name: 'CloudFinOpsCostAnalytics Pipeline #237',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-238',
    name: 'CloudFinOpsCostAnalytics Pipeline #238',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-239',
    name: 'CloudFinOpsCostAnalytics Pipeline #239',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-240',
    name: 'CloudFinOpsCostAnalytics Pipeline #240',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-241',
    name: 'CloudFinOpsCostAnalytics Pipeline #241',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-242',
    name: 'CloudFinOpsCostAnalytics Pipeline #242',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-243',
    name: 'CloudFinOpsCostAnalytics Pipeline #243',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-244',
    name: 'CloudFinOpsCostAnalytics Pipeline #244',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-245',
    name: 'CloudFinOpsCostAnalytics Pipeline #245',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-246',
    name: 'CloudFinOpsCostAnalytics Pipeline #246',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-247',
    name: 'CloudFinOpsCostAnalytics Pipeline #247',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-248',
    name: 'CloudFinOpsCostAnalytics Pipeline #248',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-249',
    name: 'CloudFinOpsCostAnalytics Pipeline #249',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-250',
    name: 'CloudFinOpsCostAnalytics Pipeline #250',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-251',
    name: 'CloudFinOpsCostAnalytics Pipeline #251',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-252',
    name: 'CloudFinOpsCostAnalytics Pipeline #252',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-253',
    name: 'CloudFinOpsCostAnalytics Pipeline #253',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-254',
    name: 'CloudFinOpsCostAnalytics Pipeline #254',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-255',
    name: 'CloudFinOpsCostAnalytics Pipeline #255',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-256',
    name: 'CloudFinOpsCostAnalytics Pipeline #256',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-257',
    name: 'CloudFinOpsCostAnalytics Pipeline #257',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-258',
    name: 'CloudFinOpsCostAnalytics Pipeline #258',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-259',
    name: 'CloudFinOpsCostAnalytics Pipeline #259',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-260',
    name: 'CloudFinOpsCostAnalytics Pipeline #260',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-261',
    name: 'CloudFinOpsCostAnalytics Pipeline #261',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-262',
    name: 'CloudFinOpsCostAnalytics Pipeline #262',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-263',
    name: 'CloudFinOpsCostAnalytics Pipeline #263',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-264',
    name: 'CloudFinOpsCostAnalytics Pipeline #264',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-265',
    name: 'CloudFinOpsCostAnalytics Pipeline #265',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-266',
    name: 'CloudFinOpsCostAnalytics Pipeline #266',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-267',
    name: 'CloudFinOpsCostAnalytics Pipeline #267',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-268',
    name: 'CloudFinOpsCostAnalytics Pipeline #268',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-269',
    name: 'CloudFinOpsCostAnalytics Pipeline #269',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-270',
    name: 'CloudFinOpsCostAnalytics Pipeline #270',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-271',
    name: 'CloudFinOpsCostAnalytics Pipeline #271',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-272',
    name: 'CloudFinOpsCostAnalytics Pipeline #272',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-273',
    name: 'CloudFinOpsCostAnalytics Pipeline #273',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-274',
    name: 'CloudFinOpsCostAnalytics Pipeline #274',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-275',
    name: 'CloudFinOpsCostAnalytics Pipeline #275',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-276',
    name: 'CloudFinOpsCostAnalytics Pipeline #276',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-277',
    name: 'CloudFinOpsCostAnalytics Pipeline #277',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-278',
    name: 'CloudFinOpsCostAnalytics Pipeline #278',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-279',
    name: 'CloudFinOpsCostAnalytics Pipeline #279',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-280',
    name: 'CloudFinOpsCostAnalytics Pipeline #280',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-281',
    name: 'CloudFinOpsCostAnalytics Pipeline #281',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-282',
    name: 'CloudFinOpsCostAnalytics Pipeline #282',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-283',
    name: 'CloudFinOpsCostAnalytics Pipeline #283',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-284',
    name: 'CloudFinOpsCostAnalytics Pipeline #284',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-285',
    name: 'CloudFinOpsCostAnalytics Pipeline #285',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-286',
    name: 'CloudFinOpsCostAnalytics Pipeline #286',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-287',
    name: 'CloudFinOpsCostAnalytics Pipeline #287',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-288',
    name: 'CloudFinOpsCostAnalytics Pipeline #288',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-289',
    name: 'CloudFinOpsCostAnalytics Pipeline #289',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-290',
    name: 'CloudFinOpsCostAnalytics Pipeline #290',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-291',
    name: 'CloudFinOpsCostAnalytics Pipeline #291',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-292',
    name: 'CloudFinOpsCostAnalytics Pipeline #292',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-293',
    name: 'CloudFinOpsCostAnalytics Pipeline #293',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-294',
    name: 'CloudFinOpsCostAnalytics Pipeline #294',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-295',
    name: 'CloudFinOpsCostAnalytics Pipeline #295',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-296',
    name: 'CloudFinOpsCostAnalytics Pipeline #296',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-297',
    name: 'CloudFinOpsCostAnalytics Pipeline #297',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-298',
    name: 'CloudFinOpsCostAnalytics Pipeline #298',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-299',
    name: 'CloudFinOpsCostAnalytics Pipeline #299',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-300',
    name: 'CloudFinOpsCostAnalytics Pipeline #300',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-301',
    name: 'CloudFinOpsCostAnalytics Pipeline #301',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-302',
    name: 'CloudFinOpsCostAnalytics Pipeline #302',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-303',
    name: 'CloudFinOpsCostAnalytics Pipeline #303',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-304',
    name: 'CloudFinOpsCostAnalytics Pipeline #304',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-305',
    name: 'CloudFinOpsCostAnalytics Pipeline #305',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-306',
    name: 'CloudFinOpsCostAnalytics Pipeline #306',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-307',
    name: 'CloudFinOpsCostAnalytics Pipeline #307',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-308',
    name: 'CloudFinOpsCostAnalytics Pipeline #308',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-309',
    name: 'CloudFinOpsCostAnalytics Pipeline #309',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-310',
    name: 'CloudFinOpsCostAnalytics Pipeline #310',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-311',
    name: 'CloudFinOpsCostAnalytics Pipeline #311',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-312',
    name: 'CloudFinOpsCostAnalytics Pipeline #312',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-313',
    name: 'CloudFinOpsCostAnalytics Pipeline #313',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-314',
    name: 'CloudFinOpsCostAnalytics Pipeline #314',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-315',
    name: 'CloudFinOpsCostAnalytics Pipeline #315',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-316',
    name: 'CloudFinOpsCostAnalytics Pipeline #316',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-317',
    name: 'CloudFinOpsCostAnalytics Pipeline #317',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-318',
    name: 'CloudFinOpsCostAnalytics Pipeline #318',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-319',
    name: 'CloudFinOpsCostAnalytics Pipeline #319',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-320',
    name: 'CloudFinOpsCostAnalytics Pipeline #320',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-321',
    name: 'CloudFinOpsCostAnalytics Pipeline #321',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-322',
    name: 'CloudFinOpsCostAnalytics Pipeline #322',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-323',
    name: 'CloudFinOpsCostAnalytics Pipeline #323',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-324',
    name: 'CloudFinOpsCostAnalytics Pipeline #324',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-325',
    name: 'CloudFinOpsCostAnalytics Pipeline #325',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-326',
    name: 'CloudFinOpsCostAnalytics Pipeline #326',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-327',
    name: 'CloudFinOpsCostAnalytics Pipeline #327',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-328',
    name: 'CloudFinOpsCostAnalytics Pipeline #328',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-329',
    name: 'CloudFinOpsCostAnalytics Pipeline #329',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-330',
    name: 'CloudFinOpsCostAnalytics Pipeline #330',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-331',
    name: 'CloudFinOpsCostAnalytics Pipeline #331',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-332',
    name: 'CloudFinOpsCostAnalytics Pipeline #332',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-333',
    name: 'CloudFinOpsCostAnalytics Pipeline #333',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-334',
    name: 'CloudFinOpsCostAnalytics Pipeline #334',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-335',
    name: 'CloudFinOpsCostAnalytics Pipeline #335',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-336',
    name: 'CloudFinOpsCostAnalytics Pipeline #336',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-337',
    name: 'CloudFinOpsCostAnalytics Pipeline #337',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-338',
    name: 'CloudFinOpsCostAnalytics Pipeline #338',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-339',
    name: 'CloudFinOpsCostAnalytics Pipeline #339',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-340',
    name: 'CloudFinOpsCostAnalytics Pipeline #340',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-341',
    name: 'CloudFinOpsCostAnalytics Pipeline #341',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-342',
    name: 'CloudFinOpsCostAnalytics Pipeline #342',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-343',
    name: 'CloudFinOpsCostAnalytics Pipeline #343',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-344',
    name: 'CloudFinOpsCostAnalytics Pipeline #344',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-345',
    name: 'CloudFinOpsCostAnalytics Pipeline #345',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-346',
    name: 'CloudFinOpsCostAnalytics Pipeline #346',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-347',
    name: 'CloudFinOpsCostAnalytics Pipeline #347',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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
    pipelineId: 'DAG-COST-348',
    name: 'CloudFinOpsCostAnalytics Pipeline #348',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'AWS Cost and Usage Report (CUR) parsing',
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
    pipelineId: 'DAG-COST-349',
    name: 'CloudFinOpsCostAnalytics Pipeline #349',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'Kubernetes pod cost attribution',
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
    pipelineId: 'DAG-COST-350',
    name: 'CloudFinOpsCostAnalytics Pipeline #350',
    domain: 'CloudFinOpsCostAnalytics',
    category: 'and commitment discount optimization',
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

export class COST_PipelineCatalog {
  static search(query: string): DagPipelineTemplate[] {
    const q = query.toLowerCase().trim();
    if (!q) return PIPELINES_COST_DATASET.slice(0, 20);
    return PIPELINES_COST_DATASET.filter(p => p.name.toLowerCase().includes(q) || p.pipelineId.toLowerCase().includes(q));
  }
}
