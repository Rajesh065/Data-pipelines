/**
 * Data Quality & Great Expectations Ruleset: RowVolumeAndFreshnessSLA
 * Description: Expected minimum batch volume assertions, data arrival latency bounds, and partition completeness
 */

export interface DataQualityRule {
  assertionId: string;
  ruleName: string;
  category: string;
  targetTable: string;
  targetColumn: string;
  evaluationEngine: string;
  isBlocking: boolean;
  alertSeverity: string;
  autoRemediationAction: string;
  thresholdConfig: {
    minPassingRatio: number;
    maxAllowedFailedRows: number;
    evaluationSamplePercentage: number;
    publishIncidentWebhook: boolean;
  };
}

export const QUALITY_RVF_DATASET: DataQualityRule[] = [
  {
    assertionId: 'ASSERT-RVF-001',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #1',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_1',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-002',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #2',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_2',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-003',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #3',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_3',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-004',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #4',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_4',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-005',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #5',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_5',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-006',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #6',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_6',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-007',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #7',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_7',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-008',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #8',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_8',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-009',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #9',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_9',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-010',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #10',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_10',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-011',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #11',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_11',
    targetColumn: 'column_attr_11',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-012',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #12',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_12',
    targetColumn: 'column_attr_12',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-013',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #13',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_13',
    targetColumn: 'column_attr_13',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-014',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #14',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_14',
    targetColumn: 'column_attr_14',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-015',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #15',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_15',
    targetColumn: 'column_attr_15',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-016',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #16',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_16',
    targetColumn: 'column_attr_16',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-017',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #17',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_17',
    targetColumn: 'column_attr_17',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-018',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #18',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_18',
    targetColumn: 'column_attr_18',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-019',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #19',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_19',
    targetColumn: 'column_attr_19',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-020',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #20',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_20',
    targetColumn: 'column_attr_0',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-021',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #21',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_21',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-022',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #22',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_22',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-023',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #23',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_23',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-024',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #24',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_24',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-025',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #25',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_25',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-026',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #26',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_26',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-027',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #27',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_27',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-028',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #28',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_28',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-029',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #29',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_29',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-030',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #30',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_0',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-031',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #31',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_1',
    targetColumn: 'column_attr_11',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-032',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #32',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_2',
    targetColumn: 'column_attr_12',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-033',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #33',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_3',
    targetColumn: 'column_attr_13',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-034',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #34',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_4',
    targetColumn: 'column_attr_14',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-035',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #35',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_5',
    targetColumn: 'column_attr_15',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-036',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #36',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_6',
    targetColumn: 'column_attr_16',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-037',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #37',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_7',
    targetColumn: 'column_attr_17',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-038',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #38',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_8',
    targetColumn: 'column_attr_18',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-039',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #39',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_9',
    targetColumn: 'column_attr_19',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-040',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #40',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_10',
    targetColumn: 'column_attr_0',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-041',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #41',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_11',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-042',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #42',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_12',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-043',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #43',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_13',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-044',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #44',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_14',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-045',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #45',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_15',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-046',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #46',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_16',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-047',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #47',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_17',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-048',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #48',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_18',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-049',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #49',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_19',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-050',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #50',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_20',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-051',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #51',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_21',
    targetColumn: 'column_attr_11',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-052',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #52',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_22',
    targetColumn: 'column_attr_12',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-053',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #53',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_23',
    targetColumn: 'column_attr_13',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-054',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #54',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_24',
    targetColumn: 'column_attr_14',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-055',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #55',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_25',
    targetColumn: 'column_attr_15',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-056',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #56',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_26',
    targetColumn: 'column_attr_16',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-057',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #57',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_27',
    targetColumn: 'column_attr_17',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-058',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #58',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_28',
    targetColumn: 'column_attr_18',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-059',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #59',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_29',
    targetColumn: 'column_attr_19',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-060',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #60',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_0',
    targetColumn: 'column_attr_0',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-061',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #61',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_1',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-062',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #62',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_2',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-063',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #63',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_3',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-064',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #64',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_4',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-065',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #65',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_5',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-066',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #66',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_6',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-067',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #67',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_7',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-068',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #68',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_8',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-069',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #69',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_9',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-070',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #70',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_10',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-071',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #71',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_11',
    targetColumn: 'column_attr_11',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-072',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #72',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_12',
    targetColumn: 'column_attr_12',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-073',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #73',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_13',
    targetColumn: 'column_attr_13',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-074',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #74',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_14',
    targetColumn: 'column_attr_14',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-075',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #75',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_15',
    targetColumn: 'column_attr_15',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-076',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #76',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_16',
    targetColumn: 'column_attr_16',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-077',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #77',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_17',
    targetColumn: 'column_attr_17',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-078',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #78',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_18',
    targetColumn: 'column_attr_18',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-079',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #79',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_19',
    targetColumn: 'column_attr_19',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-080',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #80',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_20',
    targetColumn: 'column_attr_0',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-081',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #81',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_21',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-082',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #82',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_22',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-083',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #83',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_23',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-084',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #84',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_24',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-085',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #85',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_25',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-086',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #86',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_26',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-087',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #87',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_27',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-088',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #88',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_28',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-089',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #89',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_29',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-090',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #90',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_0',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-091',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #91',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_1',
    targetColumn: 'column_attr_11',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-092',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #92',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_2',
    targetColumn: 'column_attr_12',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-093',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #93',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_3',
    targetColumn: 'column_attr_13',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-094',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #94',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_4',
    targetColumn: 'column_attr_14',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-095',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #95',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_5',
    targetColumn: 'column_attr_15',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-096',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #96',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_6',
    targetColumn: 'column_attr_16',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-097',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #97',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_7',
    targetColumn: 'column_attr_17',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-098',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #98',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_8',
    targetColumn: 'column_attr_18',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-099',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #99',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_9',
    targetColumn: 'column_attr_19',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-100',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #100',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_10',
    targetColumn: 'column_attr_0',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-101',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #101',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_11',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-102',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #102',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_12',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-103',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #103',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_13',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-104',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #104',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_14',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-105',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #105',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_15',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-106',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #106',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_16',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-107',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #107',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_17',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-108',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #108',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_18',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-109',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #109',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_19',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-110',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #110',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_20',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-111',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #111',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_21',
    targetColumn: 'column_attr_11',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-112',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #112',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_22',
    targetColumn: 'column_attr_12',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-113',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #113',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_23',
    targetColumn: 'column_attr_13',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-114',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #114',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_24',
    targetColumn: 'column_attr_14',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-115',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #115',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_25',
    targetColumn: 'column_attr_15',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-116',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #116',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_26',
    targetColumn: 'column_attr_16',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-117',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #117',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_27',
    targetColumn: 'column_attr_17',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-118',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #118',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_28',
    targetColumn: 'column_attr_18',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-119',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #119',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_29',
    targetColumn: 'column_attr_19',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-120',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #120',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_0',
    targetColumn: 'column_attr_0',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-121',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #121',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_1',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-122',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #122',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_2',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-123',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #123',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_3',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-124',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #124',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_4',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-125',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #125',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_5',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-126',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #126',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_6',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-127',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #127',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_7',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-128',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #128',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_8',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-129',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #129',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_9',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-130',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #130',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_10',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-131',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #131',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_11',
    targetColumn: 'column_attr_11',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-132',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #132',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_12',
    targetColumn: 'column_attr_12',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-133',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #133',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_13',
    targetColumn: 'column_attr_13',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-134',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #134',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_14',
    targetColumn: 'column_attr_14',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-135',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #135',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_15',
    targetColumn: 'column_attr_15',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-136',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #136',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_16',
    targetColumn: 'column_attr_16',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-137',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #137',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_17',
    targetColumn: 'column_attr_17',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-138',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #138',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_18',
    targetColumn: 'column_attr_18',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-139',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #139',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_19',
    targetColumn: 'column_attr_19',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-140',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #140',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_20',
    targetColumn: 'column_attr_0',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-141',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #141',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_21',
    targetColumn: 'column_attr_1',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-142',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #142',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_22',
    targetColumn: 'column_attr_2',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-143',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #143',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_23',
    targetColumn: 'column_attr_3',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-144',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #144',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_24',
    targetColumn: 'column_attr_4',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-145',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #145',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_25',
    targetColumn: 'column_attr_5',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-146',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #146',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_26',
    targetColumn: 'column_attr_6',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-147',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #147',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_27',
    targetColumn: 'column_attr_7',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-148',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #148',
    category: 'data arrival latency bounds',
    targetTable: 'enterprise_data_mart.table_28',
    targetColumn: 'column_attr_8',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-149',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #149',
    category: 'and partition completeness',
    targetTable: 'enterprise_data_mart.table_29',
    targetColumn: 'column_attr_9',
    evaluationEngine: 'GREAT_EXPECTATIONS',
    isBlocking: false,
    alertSeverity: 'HIGH_P2',
    autoRemediationAction: 'RETRY_STAGE_WITH_BACKOFF',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  },
  {
    assertionId: 'ASSERT-RVF-150',
    ruleName: 'RowVolumeAndFreshnessSLA Assertion Check #150',
    category: 'Expected minimum batch volume assertions',
    targetTable: 'enterprise_data_mart.table_0',
    targetColumn: 'column_attr_10',
    evaluationEngine: 'SQL_ASSERTION',
    isBlocking: true,
    alertSeverity: 'CRITICAL_P1',
    autoRemediationAction: 'QUARANTINE_ROW_TO_DLQ',
    thresholdConfig: {
      minPassingRatio: 0.9995,
      maxAllowedFailedRows: 10,
      evaluationSamplePercentage: 100,
      publishIncidentWebhook: true
    }
  }
];
