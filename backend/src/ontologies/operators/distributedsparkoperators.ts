/**
 * Custom DataFlow Engine Operators: DistributedSparkOperators
 * Description: PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors
 */

export interface CustomOperatorSpec {
  operatorId: string;
  name: string;
  category: string;
  executorClass: string;
  defaultMemoryMb: number;
  defaultCpuCores: number;
  maxRetryAttempts: number;
  supportsDynamicScaling: boolean;
}

export const OPERATOR_SPK_DATASET: CustomOperatorSpec[] = [
  {
    operatorId: 'OP-SPK-001',
    name: 'DistributedSparkOperators Task Runner #1',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_1',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-002',
    name: 'DistributedSparkOperators Task Runner #2',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_2',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-003',
    name: 'DistributedSparkOperators Task Runner #3',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_3',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-004',
    name: 'DistributedSparkOperators Task Runner #4',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_4',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-005',
    name: 'DistributedSparkOperators Task Runner #5',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_5',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-006',
    name: 'DistributedSparkOperators Task Runner #6',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_6',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-007',
    name: 'DistributedSparkOperators Task Runner #7',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_7',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-008',
    name: 'DistributedSparkOperators Task Runner #8',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_8',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-009',
    name: 'DistributedSparkOperators Task Runner #9',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_9',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-010',
    name: 'DistributedSparkOperators Task Runner #10',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_10',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-011',
    name: 'DistributedSparkOperators Task Runner #11',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_11',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-012',
    name: 'DistributedSparkOperators Task Runner #12',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_12',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-013',
    name: 'DistributedSparkOperators Task Runner #13',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_13',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-014',
    name: 'DistributedSparkOperators Task Runner #14',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_14',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-015',
    name: 'DistributedSparkOperators Task Runner #15',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_15',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-016',
    name: 'DistributedSparkOperators Task Runner #16',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_16',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-017',
    name: 'DistributedSparkOperators Task Runner #17',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_17',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-018',
    name: 'DistributedSparkOperators Task Runner #18',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_18',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-019',
    name: 'DistributedSparkOperators Task Runner #19',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_19',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-020',
    name: 'DistributedSparkOperators Task Runner #20',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_20',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-021',
    name: 'DistributedSparkOperators Task Runner #21',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_21',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-022',
    name: 'DistributedSparkOperators Task Runner #22',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_22',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-023',
    name: 'DistributedSparkOperators Task Runner #23',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_23',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-024',
    name: 'DistributedSparkOperators Task Runner #24',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_24',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-025',
    name: 'DistributedSparkOperators Task Runner #25',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_25',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-026',
    name: 'DistributedSparkOperators Task Runner #26',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_26',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-027',
    name: 'DistributedSparkOperators Task Runner #27',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_27',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-028',
    name: 'DistributedSparkOperators Task Runner #28',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_28',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-029',
    name: 'DistributedSparkOperators Task Runner #29',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_29',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-030',
    name: 'DistributedSparkOperators Task Runner #30',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_30',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-031',
    name: 'DistributedSparkOperators Task Runner #31',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_31',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-032',
    name: 'DistributedSparkOperators Task Runner #32',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_32',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-033',
    name: 'DistributedSparkOperators Task Runner #33',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_33',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-034',
    name: 'DistributedSparkOperators Task Runner #34',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_34',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-035',
    name: 'DistributedSparkOperators Task Runner #35',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_35',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-036',
    name: 'DistributedSparkOperators Task Runner #36',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_36',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-037',
    name: 'DistributedSparkOperators Task Runner #37',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_37',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-038',
    name: 'DistributedSparkOperators Task Runner #38',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_38',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-039',
    name: 'DistributedSparkOperators Task Runner #39',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_39',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-040',
    name: 'DistributedSparkOperators Task Runner #40',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_40',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-041',
    name: 'DistributedSparkOperators Task Runner #41',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_41',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-042',
    name: 'DistributedSparkOperators Task Runner #42',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_42',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-043',
    name: 'DistributedSparkOperators Task Runner #43',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_43',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-044',
    name: 'DistributedSparkOperators Task Runner #44',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_44',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-045',
    name: 'DistributedSparkOperators Task Runner #45',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_45',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-046',
    name: 'DistributedSparkOperators Task Runner #46',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_46',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-047',
    name: 'DistributedSparkOperators Task Runner #47',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_47',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-048',
    name: 'DistributedSparkOperators Task Runner #48',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_48',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-049',
    name: 'DistributedSparkOperators Task Runner #49',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_49',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-050',
    name: 'DistributedSparkOperators Task Runner #50',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_50',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-051',
    name: 'DistributedSparkOperators Task Runner #51',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_51',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-052',
    name: 'DistributedSparkOperators Task Runner #52',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_52',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-053',
    name: 'DistributedSparkOperators Task Runner #53',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_53',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-054',
    name: 'DistributedSparkOperators Task Runner #54',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_54',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-055',
    name: 'DistributedSparkOperators Task Runner #55',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_55',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-056',
    name: 'DistributedSparkOperators Task Runner #56',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_56',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-057',
    name: 'DistributedSparkOperators Task Runner #57',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_57',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-058',
    name: 'DistributedSparkOperators Task Runner #58',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_58',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-059',
    name: 'DistributedSparkOperators Task Runner #59',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_59',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-060',
    name: 'DistributedSparkOperators Task Runner #60',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_60',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-061',
    name: 'DistributedSparkOperators Task Runner #61',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_61',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-062',
    name: 'DistributedSparkOperators Task Runner #62',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_62',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-063',
    name: 'DistributedSparkOperators Task Runner #63',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_63',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-064',
    name: 'DistributedSparkOperators Task Runner #64',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_64',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-065',
    name: 'DistributedSparkOperators Task Runner #65',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_65',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-066',
    name: 'DistributedSparkOperators Task Runner #66',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_66',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-067',
    name: 'DistributedSparkOperators Task Runner #67',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_67',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-068',
    name: 'DistributedSparkOperators Task Runner #68',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_68',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-069',
    name: 'DistributedSparkOperators Task Runner #69',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_69',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-070',
    name: 'DistributedSparkOperators Task Runner #70',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_70',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-071',
    name: 'DistributedSparkOperators Task Runner #71',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_71',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-072',
    name: 'DistributedSparkOperators Task Runner #72',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_72',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-073',
    name: 'DistributedSparkOperators Task Runner #73',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_73',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-074',
    name: 'DistributedSparkOperators Task Runner #74',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_74',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-075',
    name: 'DistributedSparkOperators Task Runner #75',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_75',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-076',
    name: 'DistributedSparkOperators Task Runner #76',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_76',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-077',
    name: 'DistributedSparkOperators Task Runner #77',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_77',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-078',
    name: 'DistributedSparkOperators Task Runner #78',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_78',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-079',
    name: 'DistributedSparkOperators Task Runner #79',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_79',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-080',
    name: 'DistributedSparkOperators Task Runner #80',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_80',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-081',
    name: 'DistributedSparkOperators Task Runner #81',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_81',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-082',
    name: 'DistributedSparkOperators Task Runner #82',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_82',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-083',
    name: 'DistributedSparkOperators Task Runner #83',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_83',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-084',
    name: 'DistributedSparkOperators Task Runner #84',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_84',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-085',
    name: 'DistributedSparkOperators Task Runner #85',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_85',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-086',
    name: 'DistributedSparkOperators Task Runner #86',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_86',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-087',
    name: 'DistributedSparkOperators Task Runner #87',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_87',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-088',
    name: 'DistributedSparkOperators Task Runner #88',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_88',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-089',
    name: 'DistributedSparkOperators Task Runner #89',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_89',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-090',
    name: 'DistributedSparkOperators Task Runner #90',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_90',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-091',
    name: 'DistributedSparkOperators Task Runner #91',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_91',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-092',
    name: 'DistributedSparkOperators Task Runner #92',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_92',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-093',
    name: 'DistributedSparkOperators Task Runner #93',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_93',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-094',
    name: 'DistributedSparkOperators Task Runner #94',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_94',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-095',
    name: 'DistributedSparkOperators Task Runner #95',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_95',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-096',
    name: 'DistributedSparkOperators Task Runner #96',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_96',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-097',
    name: 'DistributedSparkOperators Task Runner #97',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_97',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-098',
    name: 'DistributedSparkOperators Task Runner #98',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_98',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-099',
    name: 'DistributedSparkOperators Task Runner #99',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_99',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-100',
    name: 'DistributedSparkOperators Task Runner #100',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_100',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-101',
    name: 'DistributedSparkOperators Task Runner #101',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_101',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-102',
    name: 'DistributedSparkOperators Task Runner #102',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_102',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-103',
    name: 'DistributedSparkOperators Task Runner #103',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_103',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-104',
    name: 'DistributedSparkOperators Task Runner #104',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_104',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-105',
    name: 'DistributedSparkOperators Task Runner #105',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_105',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-106',
    name: 'DistributedSparkOperators Task Runner #106',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_106',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-107',
    name: 'DistributedSparkOperators Task Runner #107',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_107',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-108',
    name: 'DistributedSparkOperators Task Runner #108',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_108',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-109',
    name: 'DistributedSparkOperators Task Runner #109',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_109',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-110',
    name: 'DistributedSparkOperators Task Runner #110',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_110',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-111',
    name: 'DistributedSparkOperators Task Runner #111',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_111',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-112',
    name: 'DistributedSparkOperators Task Runner #112',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_112',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-113',
    name: 'DistributedSparkOperators Task Runner #113',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_113',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-114',
    name: 'DistributedSparkOperators Task Runner #114',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_114',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-115',
    name: 'DistributedSparkOperators Task Runner #115',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_115',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-116',
    name: 'DistributedSparkOperators Task Runner #116',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_116',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-117',
    name: 'DistributedSparkOperators Task Runner #117',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_117',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-118',
    name: 'DistributedSparkOperators Task Runner #118',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_118',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-119',
    name: 'DistributedSparkOperators Task Runner #119',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_119',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-120',
    name: 'DistributedSparkOperators Task Runner #120',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_120',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-121',
    name: 'DistributedSparkOperators Task Runner #121',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_121',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-122',
    name: 'DistributedSparkOperators Task Runner #122',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_122',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-123',
    name: 'DistributedSparkOperators Task Runner #123',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_123',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-124',
    name: 'DistributedSparkOperators Task Runner #124',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_124',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-125',
    name: 'DistributedSparkOperators Task Runner #125',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_125',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-126',
    name: 'DistributedSparkOperators Task Runner #126',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_126',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-127',
    name: 'DistributedSparkOperators Task Runner #127',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_127',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-128',
    name: 'DistributedSparkOperators Task Runner #128',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_128',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-129',
    name: 'DistributedSparkOperators Task Runner #129',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_129',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-130',
    name: 'DistributedSparkOperators Task Runner #130',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_130',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-131',
    name: 'DistributedSparkOperators Task Runner #131',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_131',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-132',
    name: 'DistributedSparkOperators Task Runner #132',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_132',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-133',
    name: 'DistributedSparkOperators Task Runner #133',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_133',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-134',
    name: 'DistributedSparkOperators Task Runner #134',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_134',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-135',
    name: 'DistributedSparkOperators Task Runner #135',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_135',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-136',
    name: 'DistributedSparkOperators Task Runner #136',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_136',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-137',
    name: 'DistributedSparkOperators Task Runner #137',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_137',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-138',
    name: 'DistributedSparkOperators Task Runner #138',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_138',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-139',
    name: 'DistributedSparkOperators Task Runner #139',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_139',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-140',
    name: 'DistributedSparkOperators Task Runner #140',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_140',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-141',
    name: 'DistributedSparkOperators Task Runner #141',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_141',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-142',
    name: 'DistributedSparkOperators Task Runner #142',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_142',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-143',
    name: 'DistributedSparkOperators Task Runner #143',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_143',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-144',
    name: 'DistributedSparkOperators Task Runner #144',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_144',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-145',
    name: 'DistributedSparkOperators Task Runner #145',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_145',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-146',
    name: 'DistributedSparkOperators Task Runner #146',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_146',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-147',
    name: 'DistributedSparkOperators Task Runner #147',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_147',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-148',
    name: 'DistributedSparkOperators Task Runner #148',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_148',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-149',
    name: 'DistributedSparkOperators Task Runner #149',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_149',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-SPK-150',
    name: 'DistributedSparkOperators Task Runner #150',
    category: 'PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors',
    executorClass: 'org.dataflow.engine.operators.SPK_DistributedSparkOperators_150',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  }
];
