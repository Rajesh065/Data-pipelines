/**
 * Production DAG Pipeline Template: HealthcareFhirIngestPipelines
 * Domain Focus: HL7 v2 ADT feeds, FHIR R4 Patient resources, HIPAA de-identification, and OMOP CDM mapping
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

export const PIPELINES_HL7_DATASET: DagPipelineTemplate[] = [
  {
    pipelineId: 'DAG-HL7-001',
    name: 'HealthcareFhirIngestPipelines Pipeline #1',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-002',
    name: 'HealthcareFhirIngestPipelines Pipeline #2',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-003',
    name: 'HealthcareFhirIngestPipelines Pipeline #3',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-004',
    name: 'HealthcareFhirIngestPipelines Pipeline #4',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-005',
    name: 'HealthcareFhirIngestPipelines Pipeline #5',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-006',
    name: 'HealthcareFhirIngestPipelines Pipeline #6',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-007',
    name: 'HealthcareFhirIngestPipelines Pipeline #7',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-008',
    name: 'HealthcareFhirIngestPipelines Pipeline #8',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-009',
    name: 'HealthcareFhirIngestPipelines Pipeline #9',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-010',
    name: 'HealthcareFhirIngestPipelines Pipeline #10',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-011',
    name: 'HealthcareFhirIngestPipelines Pipeline #11',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-012',
    name: 'HealthcareFhirIngestPipelines Pipeline #12',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-013',
    name: 'HealthcareFhirIngestPipelines Pipeline #13',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-014',
    name: 'HealthcareFhirIngestPipelines Pipeline #14',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-015',
    name: 'HealthcareFhirIngestPipelines Pipeline #15',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-016',
    name: 'HealthcareFhirIngestPipelines Pipeline #16',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-017',
    name: 'HealthcareFhirIngestPipelines Pipeline #17',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-018',
    name: 'HealthcareFhirIngestPipelines Pipeline #18',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-019',
    name: 'HealthcareFhirIngestPipelines Pipeline #19',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-020',
    name: 'HealthcareFhirIngestPipelines Pipeline #20',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-021',
    name: 'HealthcareFhirIngestPipelines Pipeline #21',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-022',
    name: 'HealthcareFhirIngestPipelines Pipeline #22',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-023',
    name: 'HealthcareFhirIngestPipelines Pipeline #23',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-024',
    name: 'HealthcareFhirIngestPipelines Pipeline #24',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-025',
    name: 'HealthcareFhirIngestPipelines Pipeline #25',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-026',
    name: 'HealthcareFhirIngestPipelines Pipeline #26',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-027',
    name: 'HealthcareFhirIngestPipelines Pipeline #27',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-028',
    name: 'HealthcareFhirIngestPipelines Pipeline #28',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-029',
    name: 'HealthcareFhirIngestPipelines Pipeline #29',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-030',
    name: 'HealthcareFhirIngestPipelines Pipeline #30',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-031',
    name: 'HealthcareFhirIngestPipelines Pipeline #31',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-032',
    name: 'HealthcareFhirIngestPipelines Pipeline #32',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-033',
    name: 'HealthcareFhirIngestPipelines Pipeline #33',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-034',
    name: 'HealthcareFhirIngestPipelines Pipeline #34',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-035',
    name: 'HealthcareFhirIngestPipelines Pipeline #35',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-036',
    name: 'HealthcareFhirIngestPipelines Pipeline #36',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-037',
    name: 'HealthcareFhirIngestPipelines Pipeline #37',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-038',
    name: 'HealthcareFhirIngestPipelines Pipeline #38',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-039',
    name: 'HealthcareFhirIngestPipelines Pipeline #39',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-040',
    name: 'HealthcareFhirIngestPipelines Pipeline #40',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-041',
    name: 'HealthcareFhirIngestPipelines Pipeline #41',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-042',
    name: 'HealthcareFhirIngestPipelines Pipeline #42',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-043',
    name: 'HealthcareFhirIngestPipelines Pipeline #43',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-044',
    name: 'HealthcareFhirIngestPipelines Pipeline #44',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-045',
    name: 'HealthcareFhirIngestPipelines Pipeline #45',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-046',
    name: 'HealthcareFhirIngestPipelines Pipeline #46',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-047',
    name: 'HealthcareFhirIngestPipelines Pipeline #47',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-048',
    name: 'HealthcareFhirIngestPipelines Pipeline #48',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-049',
    name: 'HealthcareFhirIngestPipelines Pipeline #49',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-050',
    name: 'HealthcareFhirIngestPipelines Pipeline #50',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-051',
    name: 'HealthcareFhirIngestPipelines Pipeline #51',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-052',
    name: 'HealthcareFhirIngestPipelines Pipeline #52',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-053',
    name: 'HealthcareFhirIngestPipelines Pipeline #53',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-054',
    name: 'HealthcareFhirIngestPipelines Pipeline #54',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-055',
    name: 'HealthcareFhirIngestPipelines Pipeline #55',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-056',
    name: 'HealthcareFhirIngestPipelines Pipeline #56',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-057',
    name: 'HealthcareFhirIngestPipelines Pipeline #57',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-058',
    name: 'HealthcareFhirIngestPipelines Pipeline #58',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-059',
    name: 'HealthcareFhirIngestPipelines Pipeline #59',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-060',
    name: 'HealthcareFhirIngestPipelines Pipeline #60',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-061',
    name: 'HealthcareFhirIngestPipelines Pipeline #61',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-062',
    name: 'HealthcareFhirIngestPipelines Pipeline #62',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-063',
    name: 'HealthcareFhirIngestPipelines Pipeline #63',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-064',
    name: 'HealthcareFhirIngestPipelines Pipeline #64',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-065',
    name: 'HealthcareFhirIngestPipelines Pipeline #65',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-066',
    name: 'HealthcareFhirIngestPipelines Pipeline #66',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-067',
    name: 'HealthcareFhirIngestPipelines Pipeline #67',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-068',
    name: 'HealthcareFhirIngestPipelines Pipeline #68',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-069',
    name: 'HealthcareFhirIngestPipelines Pipeline #69',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-070',
    name: 'HealthcareFhirIngestPipelines Pipeline #70',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-071',
    name: 'HealthcareFhirIngestPipelines Pipeline #71',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-072',
    name: 'HealthcareFhirIngestPipelines Pipeline #72',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-073',
    name: 'HealthcareFhirIngestPipelines Pipeline #73',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-074',
    name: 'HealthcareFhirIngestPipelines Pipeline #74',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-075',
    name: 'HealthcareFhirIngestPipelines Pipeline #75',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-076',
    name: 'HealthcareFhirIngestPipelines Pipeline #76',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-077',
    name: 'HealthcareFhirIngestPipelines Pipeline #77',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-078',
    name: 'HealthcareFhirIngestPipelines Pipeline #78',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-079',
    name: 'HealthcareFhirIngestPipelines Pipeline #79',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-080',
    name: 'HealthcareFhirIngestPipelines Pipeline #80',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-081',
    name: 'HealthcareFhirIngestPipelines Pipeline #81',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-082',
    name: 'HealthcareFhirIngestPipelines Pipeline #82',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-083',
    name: 'HealthcareFhirIngestPipelines Pipeline #83',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-084',
    name: 'HealthcareFhirIngestPipelines Pipeline #84',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-085',
    name: 'HealthcareFhirIngestPipelines Pipeline #85',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-086',
    name: 'HealthcareFhirIngestPipelines Pipeline #86',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-087',
    name: 'HealthcareFhirIngestPipelines Pipeline #87',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-088',
    name: 'HealthcareFhirIngestPipelines Pipeline #88',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-089',
    name: 'HealthcareFhirIngestPipelines Pipeline #89',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-090',
    name: 'HealthcareFhirIngestPipelines Pipeline #90',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-091',
    name: 'HealthcareFhirIngestPipelines Pipeline #91',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-092',
    name: 'HealthcareFhirIngestPipelines Pipeline #92',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-093',
    name: 'HealthcareFhirIngestPipelines Pipeline #93',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-094',
    name: 'HealthcareFhirIngestPipelines Pipeline #94',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-095',
    name: 'HealthcareFhirIngestPipelines Pipeline #95',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-096',
    name: 'HealthcareFhirIngestPipelines Pipeline #96',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-097',
    name: 'HealthcareFhirIngestPipelines Pipeline #97',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-098',
    name: 'HealthcareFhirIngestPipelines Pipeline #98',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-099',
    name: 'HealthcareFhirIngestPipelines Pipeline #99',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-100',
    name: 'HealthcareFhirIngestPipelines Pipeline #100',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-101',
    name: 'HealthcareFhirIngestPipelines Pipeline #101',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-102',
    name: 'HealthcareFhirIngestPipelines Pipeline #102',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-103',
    name: 'HealthcareFhirIngestPipelines Pipeline #103',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-104',
    name: 'HealthcareFhirIngestPipelines Pipeline #104',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-105',
    name: 'HealthcareFhirIngestPipelines Pipeline #105',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-106',
    name: 'HealthcareFhirIngestPipelines Pipeline #106',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-107',
    name: 'HealthcareFhirIngestPipelines Pipeline #107',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-108',
    name: 'HealthcareFhirIngestPipelines Pipeline #108',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-109',
    name: 'HealthcareFhirIngestPipelines Pipeline #109',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-110',
    name: 'HealthcareFhirIngestPipelines Pipeline #110',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-111',
    name: 'HealthcareFhirIngestPipelines Pipeline #111',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-112',
    name: 'HealthcareFhirIngestPipelines Pipeline #112',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-113',
    name: 'HealthcareFhirIngestPipelines Pipeline #113',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-114',
    name: 'HealthcareFhirIngestPipelines Pipeline #114',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-115',
    name: 'HealthcareFhirIngestPipelines Pipeline #115',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-116',
    name: 'HealthcareFhirIngestPipelines Pipeline #116',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-117',
    name: 'HealthcareFhirIngestPipelines Pipeline #117',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-118',
    name: 'HealthcareFhirIngestPipelines Pipeline #118',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-119',
    name: 'HealthcareFhirIngestPipelines Pipeline #119',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-120',
    name: 'HealthcareFhirIngestPipelines Pipeline #120',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-121',
    name: 'HealthcareFhirIngestPipelines Pipeline #121',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-122',
    name: 'HealthcareFhirIngestPipelines Pipeline #122',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-123',
    name: 'HealthcareFhirIngestPipelines Pipeline #123',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-124',
    name: 'HealthcareFhirIngestPipelines Pipeline #124',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-125',
    name: 'HealthcareFhirIngestPipelines Pipeline #125',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-126',
    name: 'HealthcareFhirIngestPipelines Pipeline #126',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-127',
    name: 'HealthcareFhirIngestPipelines Pipeline #127',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-128',
    name: 'HealthcareFhirIngestPipelines Pipeline #128',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-129',
    name: 'HealthcareFhirIngestPipelines Pipeline #129',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-130',
    name: 'HealthcareFhirIngestPipelines Pipeline #130',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-131',
    name: 'HealthcareFhirIngestPipelines Pipeline #131',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-132',
    name: 'HealthcareFhirIngestPipelines Pipeline #132',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-133',
    name: 'HealthcareFhirIngestPipelines Pipeline #133',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-134',
    name: 'HealthcareFhirIngestPipelines Pipeline #134',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-135',
    name: 'HealthcareFhirIngestPipelines Pipeline #135',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-136',
    name: 'HealthcareFhirIngestPipelines Pipeline #136',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-137',
    name: 'HealthcareFhirIngestPipelines Pipeline #137',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-138',
    name: 'HealthcareFhirIngestPipelines Pipeline #138',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-139',
    name: 'HealthcareFhirIngestPipelines Pipeline #139',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-140',
    name: 'HealthcareFhirIngestPipelines Pipeline #140',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-141',
    name: 'HealthcareFhirIngestPipelines Pipeline #141',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-142',
    name: 'HealthcareFhirIngestPipelines Pipeline #142',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-143',
    name: 'HealthcareFhirIngestPipelines Pipeline #143',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-144',
    name: 'HealthcareFhirIngestPipelines Pipeline #144',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-145',
    name: 'HealthcareFhirIngestPipelines Pipeline #145',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-146',
    name: 'HealthcareFhirIngestPipelines Pipeline #146',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-147',
    name: 'HealthcareFhirIngestPipelines Pipeline #147',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-148',
    name: 'HealthcareFhirIngestPipelines Pipeline #148',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-149',
    name: 'HealthcareFhirIngestPipelines Pipeline #149',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-150',
    name: 'HealthcareFhirIngestPipelines Pipeline #150',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-151',
    name: 'HealthcareFhirIngestPipelines Pipeline #151',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-152',
    name: 'HealthcareFhirIngestPipelines Pipeline #152',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-153',
    name: 'HealthcareFhirIngestPipelines Pipeline #153',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-154',
    name: 'HealthcareFhirIngestPipelines Pipeline #154',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-155',
    name: 'HealthcareFhirIngestPipelines Pipeline #155',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-156',
    name: 'HealthcareFhirIngestPipelines Pipeline #156',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-157',
    name: 'HealthcareFhirIngestPipelines Pipeline #157',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-158',
    name: 'HealthcareFhirIngestPipelines Pipeline #158',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-159',
    name: 'HealthcareFhirIngestPipelines Pipeline #159',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-160',
    name: 'HealthcareFhirIngestPipelines Pipeline #160',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-161',
    name: 'HealthcareFhirIngestPipelines Pipeline #161',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-162',
    name: 'HealthcareFhirIngestPipelines Pipeline #162',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-163',
    name: 'HealthcareFhirIngestPipelines Pipeline #163',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-164',
    name: 'HealthcareFhirIngestPipelines Pipeline #164',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-165',
    name: 'HealthcareFhirIngestPipelines Pipeline #165',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-166',
    name: 'HealthcareFhirIngestPipelines Pipeline #166',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-167',
    name: 'HealthcareFhirIngestPipelines Pipeline #167',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-168',
    name: 'HealthcareFhirIngestPipelines Pipeline #168',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-169',
    name: 'HealthcareFhirIngestPipelines Pipeline #169',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-170',
    name: 'HealthcareFhirIngestPipelines Pipeline #170',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-171',
    name: 'HealthcareFhirIngestPipelines Pipeline #171',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-172',
    name: 'HealthcareFhirIngestPipelines Pipeline #172',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-173',
    name: 'HealthcareFhirIngestPipelines Pipeline #173',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-174',
    name: 'HealthcareFhirIngestPipelines Pipeline #174',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-175',
    name: 'HealthcareFhirIngestPipelines Pipeline #175',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-176',
    name: 'HealthcareFhirIngestPipelines Pipeline #176',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-177',
    name: 'HealthcareFhirIngestPipelines Pipeline #177',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-178',
    name: 'HealthcareFhirIngestPipelines Pipeline #178',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-179',
    name: 'HealthcareFhirIngestPipelines Pipeline #179',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-180',
    name: 'HealthcareFhirIngestPipelines Pipeline #180',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-181',
    name: 'HealthcareFhirIngestPipelines Pipeline #181',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-182',
    name: 'HealthcareFhirIngestPipelines Pipeline #182',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-183',
    name: 'HealthcareFhirIngestPipelines Pipeline #183',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-184',
    name: 'HealthcareFhirIngestPipelines Pipeline #184',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-185',
    name: 'HealthcareFhirIngestPipelines Pipeline #185',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-186',
    name: 'HealthcareFhirIngestPipelines Pipeline #186',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-187',
    name: 'HealthcareFhirIngestPipelines Pipeline #187',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-188',
    name: 'HealthcareFhirIngestPipelines Pipeline #188',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-189',
    name: 'HealthcareFhirIngestPipelines Pipeline #189',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-190',
    name: 'HealthcareFhirIngestPipelines Pipeline #190',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-191',
    name: 'HealthcareFhirIngestPipelines Pipeline #191',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-192',
    name: 'HealthcareFhirIngestPipelines Pipeline #192',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-193',
    name: 'HealthcareFhirIngestPipelines Pipeline #193',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-194',
    name: 'HealthcareFhirIngestPipelines Pipeline #194',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-195',
    name: 'HealthcareFhirIngestPipelines Pipeline #195',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-196',
    name: 'HealthcareFhirIngestPipelines Pipeline #196',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-197',
    name: 'HealthcareFhirIngestPipelines Pipeline #197',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-198',
    name: 'HealthcareFhirIngestPipelines Pipeline #198',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-199',
    name: 'HealthcareFhirIngestPipelines Pipeline #199',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-200',
    name: 'HealthcareFhirIngestPipelines Pipeline #200',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-201',
    name: 'HealthcareFhirIngestPipelines Pipeline #201',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-202',
    name: 'HealthcareFhirIngestPipelines Pipeline #202',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-203',
    name: 'HealthcareFhirIngestPipelines Pipeline #203',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-204',
    name: 'HealthcareFhirIngestPipelines Pipeline #204',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-205',
    name: 'HealthcareFhirIngestPipelines Pipeline #205',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-206',
    name: 'HealthcareFhirIngestPipelines Pipeline #206',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-207',
    name: 'HealthcareFhirIngestPipelines Pipeline #207',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-208',
    name: 'HealthcareFhirIngestPipelines Pipeline #208',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-209',
    name: 'HealthcareFhirIngestPipelines Pipeline #209',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-210',
    name: 'HealthcareFhirIngestPipelines Pipeline #210',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-211',
    name: 'HealthcareFhirIngestPipelines Pipeline #211',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-212',
    name: 'HealthcareFhirIngestPipelines Pipeline #212',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-213',
    name: 'HealthcareFhirIngestPipelines Pipeline #213',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-214',
    name: 'HealthcareFhirIngestPipelines Pipeline #214',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-215',
    name: 'HealthcareFhirIngestPipelines Pipeline #215',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-216',
    name: 'HealthcareFhirIngestPipelines Pipeline #216',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-217',
    name: 'HealthcareFhirIngestPipelines Pipeline #217',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-218',
    name: 'HealthcareFhirIngestPipelines Pipeline #218',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-219',
    name: 'HealthcareFhirIngestPipelines Pipeline #219',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-220',
    name: 'HealthcareFhirIngestPipelines Pipeline #220',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-221',
    name: 'HealthcareFhirIngestPipelines Pipeline #221',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-222',
    name: 'HealthcareFhirIngestPipelines Pipeline #222',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-223',
    name: 'HealthcareFhirIngestPipelines Pipeline #223',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-224',
    name: 'HealthcareFhirIngestPipelines Pipeline #224',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-225',
    name: 'HealthcareFhirIngestPipelines Pipeline #225',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-226',
    name: 'HealthcareFhirIngestPipelines Pipeline #226',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-227',
    name: 'HealthcareFhirIngestPipelines Pipeline #227',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-228',
    name: 'HealthcareFhirIngestPipelines Pipeline #228',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-229',
    name: 'HealthcareFhirIngestPipelines Pipeline #229',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-230',
    name: 'HealthcareFhirIngestPipelines Pipeline #230',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-231',
    name: 'HealthcareFhirIngestPipelines Pipeline #231',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-232',
    name: 'HealthcareFhirIngestPipelines Pipeline #232',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-233',
    name: 'HealthcareFhirIngestPipelines Pipeline #233',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-234',
    name: 'HealthcareFhirIngestPipelines Pipeline #234',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-235',
    name: 'HealthcareFhirIngestPipelines Pipeline #235',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-236',
    name: 'HealthcareFhirIngestPipelines Pipeline #236',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-237',
    name: 'HealthcareFhirIngestPipelines Pipeline #237',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-238',
    name: 'HealthcareFhirIngestPipelines Pipeline #238',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-239',
    name: 'HealthcareFhirIngestPipelines Pipeline #239',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-240',
    name: 'HealthcareFhirIngestPipelines Pipeline #240',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-241',
    name: 'HealthcareFhirIngestPipelines Pipeline #241',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-242',
    name: 'HealthcareFhirIngestPipelines Pipeline #242',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-243',
    name: 'HealthcareFhirIngestPipelines Pipeline #243',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-244',
    name: 'HealthcareFhirIngestPipelines Pipeline #244',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-245',
    name: 'HealthcareFhirIngestPipelines Pipeline #245',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-246',
    name: 'HealthcareFhirIngestPipelines Pipeline #246',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-247',
    name: 'HealthcareFhirIngestPipelines Pipeline #247',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-248',
    name: 'HealthcareFhirIngestPipelines Pipeline #248',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-249',
    name: 'HealthcareFhirIngestPipelines Pipeline #249',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-250',
    name: 'HealthcareFhirIngestPipelines Pipeline #250',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-251',
    name: 'HealthcareFhirIngestPipelines Pipeline #251',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-252',
    name: 'HealthcareFhirIngestPipelines Pipeline #252',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-253',
    name: 'HealthcareFhirIngestPipelines Pipeline #253',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-254',
    name: 'HealthcareFhirIngestPipelines Pipeline #254',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-255',
    name: 'HealthcareFhirIngestPipelines Pipeline #255',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-256',
    name: 'HealthcareFhirIngestPipelines Pipeline #256',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-257',
    name: 'HealthcareFhirIngestPipelines Pipeline #257',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-258',
    name: 'HealthcareFhirIngestPipelines Pipeline #258',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-259',
    name: 'HealthcareFhirIngestPipelines Pipeline #259',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-260',
    name: 'HealthcareFhirIngestPipelines Pipeline #260',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-261',
    name: 'HealthcareFhirIngestPipelines Pipeline #261',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-262',
    name: 'HealthcareFhirIngestPipelines Pipeline #262',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-263',
    name: 'HealthcareFhirIngestPipelines Pipeline #263',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-264',
    name: 'HealthcareFhirIngestPipelines Pipeline #264',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-265',
    name: 'HealthcareFhirIngestPipelines Pipeline #265',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-266',
    name: 'HealthcareFhirIngestPipelines Pipeline #266',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-267',
    name: 'HealthcareFhirIngestPipelines Pipeline #267',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-268',
    name: 'HealthcareFhirIngestPipelines Pipeline #268',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-269',
    name: 'HealthcareFhirIngestPipelines Pipeline #269',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-270',
    name: 'HealthcareFhirIngestPipelines Pipeline #270',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-271',
    name: 'HealthcareFhirIngestPipelines Pipeline #271',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-272',
    name: 'HealthcareFhirIngestPipelines Pipeline #272',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-273',
    name: 'HealthcareFhirIngestPipelines Pipeline #273',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-274',
    name: 'HealthcareFhirIngestPipelines Pipeline #274',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-275',
    name: 'HealthcareFhirIngestPipelines Pipeline #275',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-276',
    name: 'HealthcareFhirIngestPipelines Pipeline #276',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-277',
    name: 'HealthcareFhirIngestPipelines Pipeline #277',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-278',
    name: 'HealthcareFhirIngestPipelines Pipeline #278',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-279',
    name: 'HealthcareFhirIngestPipelines Pipeline #279',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-280',
    name: 'HealthcareFhirIngestPipelines Pipeline #280',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-281',
    name: 'HealthcareFhirIngestPipelines Pipeline #281',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-282',
    name: 'HealthcareFhirIngestPipelines Pipeline #282',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-283',
    name: 'HealthcareFhirIngestPipelines Pipeline #283',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-284',
    name: 'HealthcareFhirIngestPipelines Pipeline #284',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-285',
    name: 'HealthcareFhirIngestPipelines Pipeline #285',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-286',
    name: 'HealthcareFhirIngestPipelines Pipeline #286',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-287',
    name: 'HealthcareFhirIngestPipelines Pipeline #287',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-288',
    name: 'HealthcareFhirIngestPipelines Pipeline #288',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-289',
    name: 'HealthcareFhirIngestPipelines Pipeline #289',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-290',
    name: 'HealthcareFhirIngestPipelines Pipeline #290',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-291',
    name: 'HealthcareFhirIngestPipelines Pipeline #291',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-292',
    name: 'HealthcareFhirIngestPipelines Pipeline #292',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-293',
    name: 'HealthcareFhirIngestPipelines Pipeline #293',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-294',
    name: 'HealthcareFhirIngestPipelines Pipeline #294',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-295',
    name: 'HealthcareFhirIngestPipelines Pipeline #295',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-296',
    name: 'HealthcareFhirIngestPipelines Pipeline #296',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-297',
    name: 'HealthcareFhirIngestPipelines Pipeline #297',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-298',
    name: 'HealthcareFhirIngestPipelines Pipeline #298',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-299',
    name: 'HealthcareFhirIngestPipelines Pipeline #299',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-300',
    name: 'HealthcareFhirIngestPipelines Pipeline #300',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-301',
    name: 'HealthcareFhirIngestPipelines Pipeline #301',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-302',
    name: 'HealthcareFhirIngestPipelines Pipeline #302',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-303',
    name: 'HealthcareFhirIngestPipelines Pipeline #303',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-304',
    name: 'HealthcareFhirIngestPipelines Pipeline #304',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-305',
    name: 'HealthcareFhirIngestPipelines Pipeline #305',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-306',
    name: 'HealthcareFhirIngestPipelines Pipeline #306',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-307',
    name: 'HealthcareFhirIngestPipelines Pipeline #307',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-308',
    name: 'HealthcareFhirIngestPipelines Pipeline #308',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-309',
    name: 'HealthcareFhirIngestPipelines Pipeline #309',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-310',
    name: 'HealthcareFhirIngestPipelines Pipeline #310',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-311',
    name: 'HealthcareFhirIngestPipelines Pipeline #311',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-312',
    name: 'HealthcareFhirIngestPipelines Pipeline #312',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-313',
    name: 'HealthcareFhirIngestPipelines Pipeline #313',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-314',
    name: 'HealthcareFhirIngestPipelines Pipeline #314',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-315',
    name: 'HealthcareFhirIngestPipelines Pipeline #315',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-316',
    name: 'HealthcareFhirIngestPipelines Pipeline #316',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-317',
    name: 'HealthcareFhirIngestPipelines Pipeline #317',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-318',
    name: 'HealthcareFhirIngestPipelines Pipeline #318',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-319',
    name: 'HealthcareFhirIngestPipelines Pipeline #319',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-320',
    name: 'HealthcareFhirIngestPipelines Pipeline #320',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-321',
    name: 'HealthcareFhirIngestPipelines Pipeline #321',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-322',
    name: 'HealthcareFhirIngestPipelines Pipeline #322',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-323',
    name: 'HealthcareFhirIngestPipelines Pipeline #323',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-324',
    name: 'HealthcareFhirIngestPipelines Pipeline #324',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-325',
    name: 'HealthcareFhirIngestPipelines Pipeline #325',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-326',
    name: 'HealthcareFhirIngestPipelines Pipeline #326',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-327',
    name: 'HealthcareFhirIngestPipelines Pipeline #327',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-328',
    name: 'HealthcareFhirIngestPipelines Pipeline #328',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-329',
    name: 'HealthcareFhirIngestPipelines Pipeline #329',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-330',
    name: 'HealthcareFhirIngestPipelines Pipeline #330',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-331',
    name: 'HealthcareFhirIngestPipelines Pipeline #331',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-332',
    name: 'HealthcareFhirIngestPipelines Pipeline #332',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-333',
    name: 'HealthcareFhirIngestPipelines Pipeline #333',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-334',
    name: 'HealthcareFhirIngestPipelines Pipeline #334',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-335',
    name: 'HealthcareFhirIngestPipelines Pipeline #335',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-336',
    name: 'HealthcareFhirIngestPipelines Pipeline #336',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-337',
    name: 'HealthcareFhirIngestPipelines Pipeline #337',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-338',
    name: 'HealthcareFhirIngestPipelines Pipeline #338',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-339',
    name: 'HealthcareFhirIngestPipelines Pipeline #339',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-340',
    name: 'HealthcareFhirIngestPipelines Pipeline #340',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-341',
    name: 'HealthcareFhirIngestPipelines Pipeline #341',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-342',
    name: 'HealthcareFhirIngestPipelines Pipeline #342',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-343',
    name: 'HealthcareFhirIngestPipelines Pipeline #343',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-344',
    name: 'HealthcareFhirIngestPipelines Pipeline #344',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-345',
    name: 'HealthcareFhirIngestPipelines Pipeline #345',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-346',
    name: 'HealthcareFhirIngestPipelines Pipeline #346',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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
    pipelineId: 'DAG-HL7-347',
    name: 'HealthcareFhirIngestPipelines Pipeline #347',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'and OMOP CDM mapping',
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
    pipelineId: 'DAG-HL7-348',
    name: 'HealthcareFhirIngestPipelines Pipeline #348',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HL7 v2 ADT feeds',
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
    pipelineId: 'DAG-HL7-349',
    name: 'HealthcareFhirIngestPipelines Pipeline #349',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'FHIR R4 Patient resources',
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
    pipelineId: 'DAG-HL7-350',
    name: 'HealthcareFhirIngestPipelines Pipeline #350',
    domain: 'HealthcareFhirIngestPipelines',
    category: 'HIPAA de-identification',
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

export class HL7_PipelineCatalog {
  static search(query: string): DagPipelineTemplate[] {
    const q = query.toLowerCase().trim();
    if (!q) return PIPELINES_HL7_DATASET.slice(0, 20);
    return PIPELINES_HL7_DATASET.filter(p => p.name.toLowerCase().includes(q) || p.pipelineId.toLowerCase().includes(q));
  }
}
