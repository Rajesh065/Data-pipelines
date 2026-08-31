/**
 * Custom DataFlow Engine Operators: ApacheFlinkStatefulOperators
 * Description: Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing
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

export const OPERATOR_FLK_DATASET: CustomOperatorSpec[] = [
  {
    operatorId: 'OP-FLK-001',
    name: 'ApacheFlinkStatefulOperators Task Runner #1',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_1',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-002',
    name: 'ApacheFlinkStatefulOperators Task Runner #2',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_2',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-003',
    name: 'ApacheFlinkStatefulOperators Task Runner #3',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_3',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-004',
    name: 'ApacheFlinkStatefulOperators Task Runner #4',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_4',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-005',
    name: 'ApacheFlinkStatefulOperators Task Runner #5',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_5',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-006',
    name: 'ApacheFlinkStatefulOperators Task Runner #6',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_6',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-007',
    name: 'ApacheFlinkStatefulOperators Task Runner #7',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_7',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-008',
    name: 'ApacheFlinkStatefulOperators Task Runner #8',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_8',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-009',
    name: 'ApacheFlinkStatefulOperators Task Runner #9',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_9',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-010',
    name: 'ApacheFlinkStatefulOperators Task Runner #10',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_10',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-011',
    name: 'ApacheFlinkStatefulOperators Task Runner #11',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_11',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-012',
    name: 'ApacheFlinkStatefulOperators Task Runner #12',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_12',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-013',
    name: 'ApacheFlinkStatefulOperators Task Runner #13',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_13',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-014',
    name: 'ApacheFlinkStatefulOperators Task Runner #14',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_14',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-015',
    name: 'ApacheFlinkStatefulOperators Task Runner #15',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_15',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-016',
    name: 'ApacheFlinkStatefulOperators Task Runner #16',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_16',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-017',
    name: 'ApacheFlinkStatefulOperators Task Runner #17',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_17',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-018',
    name: 'ApacheFlinkStatefulOperators Task Runner #18',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_18',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-019',
    name: 'ApacheFlinkStatefulOperators Task Runner #19',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_19',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-020',
    name: 'ApacheFlinkStatefulOperators Task Runner #20',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_20',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-021',
    name: 'ApacheFlinkStatefulOperators Task Runner #21',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_21',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-022',
    name: 'ApacheFlinkStatefulOperators Task Runner #22',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_22',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-023',
    name: 'ApacheFlinkStatefulOperators Task Runner #23',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_23',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-024',
    name: 'ApacheFlinkStatefulOperators Task Runner #24',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_24',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-025',
    name: 'ApacheFlinkStatefulOperators Task Runner #25',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_25',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-026',
    name: 'ApacheFlinkStatefulOperators Task Runner #26',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_26',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-027',
    name: 'ApacheFlinkStatefulOperators Task Runner #27',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_27',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-028',
    name: 'ApacheFlinkStatefulOperators Task Runner #28',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_28',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-029',
    name: 'ApacheFlinkStatefulOperators Task Runner #29',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_29',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-030',
    name: 'ApacheFlinkStatefulOperators Task Runner #30',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_30',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-031',
    name: 'ApacheFlinkStatefulOperators Task Runner #31',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_31',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-032',
    name: 'ApacheFlinkStatefulOperators Task Runner #32',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_32',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-033',
    name: 'ApacheFlinkStatefulOperators Task Runner #33',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_33',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-034',
    name: 'ApacheFlinkStatefulOperators Task Runner #34',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_34',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-035',
    name: 'ApacheFlinkStatefulOperators Task Runner #35',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_35',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-036',
    name: 'ApacheFlinkStatefulOperators Task Runner #36',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_36',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-037',
    name: 'ApacheFlinkStatefulOperators Task Runner #37',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_37',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-038',
    name: 'ApacheFlinkStatefulOperators Task Runner #38',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_38',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-039',
    name: 'ApacheFlinkStatefulOperators Task Runner #39',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_39',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-040',
    name: 'ApacheFlinkStatefulOperators Task Runner #40',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_40',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-041',
    name: 'ApacheFlinkStatefulOperators Task Runner #41',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_41',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-042',
    name: 'ApacheFlinkStatefulOperators Task Runner #42',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_42',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-043',
    name: 'ApacheFlinkStatefulOperators Task Runner #43',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_43',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-044',
    name: 'ApacheFlinkStatefulOperators Task Runner #44',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_44',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-045',
    name: 'ApacheFlinkStatefulOperators Task Runner #45',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_45',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-046',
    name: 'ApacheFlinkStatefulOperators Task Runner #46',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_46',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-047',
    name: 'ApacheFlinkStatefulOperators Task Runner #47',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_47',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-048',
    name: 'ApacheFlinkStatefulOperators Task Runner #48',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_48',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-049',
    name: 'ApacheFlinkStatefulOperators Task Runner #49',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_49',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-050',
    name: 'ApacheFlinkStatefulOperators Task Runner #50',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_50',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-051',
    name: 'ApacheFlinkStatefulOperators Task Runner #51',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_51',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-052',
    name: 'ApacheFlinkStatefulOperators Task Runner #52',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_52',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-053',
    name: 'ApacheFlinkStatefulOperators Task Runner #53',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_53',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-054',
    name: 'ApacheFlinkStatefulOperators Task Runner #54',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_54',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-055',
    name: 'ApacheFlinkStatefulOperators Task Runner #55',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_55',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-056',
    name: 'ApacheFlinkStatefulOperators Task Runner #56',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_56',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-057',
    name: 'ApacheFlinkStatefulOperators Task Runner #57',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_57',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-058',
    name: 'ApacheFlinkStatefulOperators Task Runner #58',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_58',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-059',
    name: 'ApacheFlinkStatefulOperators Task Runner #59',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_59',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-060',
    name: 'ApacheFlinkStatefulOperators Task Runner #60',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_60',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-061',
    name: 'ApacheFlinkStatefulOperators Task Runner #61',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_61',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-062',
    name: 'ApacheFlinkStatefulOperators Task Runner #62',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_62',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-063',
    name: 'ApacheFlinkStatefulOperators Task Runner #63',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_63',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-064',
    name: 'ApacheFlinkStatefulOperators Task Runner #64',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_64',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-065',
    name: 'ApacheFlinkStatefulOperators Task Runner #65',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_65',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-066',
    name: 'ApacheFlinkStatefulOperators Task Runner #66',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_66',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-067',
    name: 'ApacheFlinkStatefulOperators Task Runner #67',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_67',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-068',
    name: 'ApacheFlinkStatefulOperators Task Runner #68',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_68',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-069',
    name: 'ApacheFlinkStatefulOperators Task Runner #69',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_69',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-070',
    name: 'ApacheFlinkStatefulOperators Task Runner #70',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_70',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-071',
    name: 'ApacheFlinkStatefulOperators Task Runner #71',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_71',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-072',
    name: 'ApacheFlinkStatefulOperators Task Runner #72',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_72',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-073',
    name: 'ApacheFlinkStatefulOperators Task Runner #73',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_73',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-074',
    name: 'ApacheFlinkStatefulOperators Task Runner #74',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_74',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-075',
    name: 'ApacheFlinkStatefulOperators Task Runner #75',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_75',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-076',
    name: 'ApacheFlinkStatefulOperators Task Runner #76',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_76',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-077',
    name: 'ApacheFlinkStatefulOperators Task Runner #77',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_77',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-078',
    name: 'ApacheFlinkStatefulOperators Task Runner #78',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_78',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-079',
    name: 'ApacheFlinkStatefulOperators Task Runner #79',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_79',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-080',
    name: 'ApacheFlinkStatefulOperators Task Runner #80',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_80',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-081',
    name: 'ApacheFlinkStatefulOperators Task Runner #81',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_81',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-082',
    name: 'ApacheFlinkStatefulOperators Task Runner #82',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_82',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-083',
    name: 'ApacheFlinkStatefulOperators Task Runner #83',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_83',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-084',
    name: 'ApacheFlinkStatefulOperators Task Runner #84',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_84',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-085',
    name: 'ApacheFlinkStatefulOperators Task Runner #85',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_85',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-086',
    name: 'ApacheFlinkStatefulOperators Task Runner #86',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_86',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-087',
    name: 'ApacheFlinkStatefulOperators Task Runner #87',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_87',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-088',
    name: 'ApacheFlinkStatefulOperators Task Runner #88',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_88',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-089',
    name: 'ApacheFlinkStatefulOperators Task Runner #89',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_89',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-090',
    name: 'ApacheFlinkStatefulOperators Task Runner #90',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_90',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-091',
    name: 'ApacheFlinkStatefulOperators Task Runner #91',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_91',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-092',
    name: 'ApacheFlinkStatefulOperators Task Runner #92',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_92',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-093',
    name: 'ApacheFlinkStatefulOperators Task Runner #93',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_93',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-094',
    name: 'ApacheFlinkStatefulOperators Task Runner #94',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_94',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-095',
    name: 'ApacheFlinkStatefulOperators Task Runner #95',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_95',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-096',
    name: 'ApacheFlinkStatefulOperators Task Runner #96',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_96',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-097',
    name: 'ApacheFlinkStatefulOperators Task Runner #97',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_97',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-098',
    name: 'ApacheFlinkStatefulOperators Task Runner #98',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_98',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-099',
    name: 'ApacheFlinkStatefulOperators Task Runner #99',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_99',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-100',
    name: 'ApacheFlinkStatefulOperators Task Runner #100',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_100',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-101',
    name: 'ApacheFlinkStatefulOperators Task Runner #101',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_101',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-102',
    name: 'ApacheFlinkStatefulOperators Task Runner #102',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_102',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-103',
    name: 'ApacheFlinkStatefulOperators Task Runner #103',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_103',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-104',
    name: 'ApacheFlinkStatefulOperators Task Runner #104',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_104',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-105',
    name: 'ApacheFlinkStatefulOperators Task Runner #105',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_105',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-106',
    name: 'ApacheFlinkStatefulOperators Task Runner #106',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_106',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-107',
    name: 'ApacheFlinkStatefulOperators Task Runner #107',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_107',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-108',
    name: 'ApacheFlinkStatefulOperators Task Runner #108',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_108',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-109',
    name: 'ApacheFlinkStatefulOperators Task Runner #109',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_109',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-110',
    name: 'ApacheFlinkStatefulOperators Task Runner #110',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_110',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-111',
    name: 'ApacheFlinkStatefulOperators Task Runner #111',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_111',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-112',
    name: 'ApacheFlinkStatefulOperators Task Runner #112',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_112',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-113',
    name: 'ApacheFlinkStatefulOperators Task Runner #113',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_113',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-114',
    name: 'ApacheFlinkStatefulOperators Task Runner #114',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_114',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-115',
    name: 'ApacheFlinkStatefulOperators Task Runner #115',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_115',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-116',
    name: 'ApacheFlinkStatefulOperators Task Runner #116',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_116',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-117',
    name: 'ApacheFlinkStatefulOperators Task Runner #117',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_117',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-118',
    name: 'ApacheFlinkStatefulOperators Task Runner #118',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_118',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-119',
    name: 'ApacheFlinkStatefulOperators Task Runner #119',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_119',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-120',
    name: 'ApacheFlinkStatefulOperators Task Runner #120',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_120',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-121',
    name: 'ApacheFlinkStatefulOperators Task Runner #121',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_121',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-122',
    name: 'ApacheFlinkStatefulOperators Task Runner #122',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_122',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-123',
    name: 'ApacheFlinkStatefulOperators Task Runner #123',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_123',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-124',
    name: 'ApacheFlinkStatefulOperators Task Runner #124',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_124',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-125',
    name: 'ApacheFlinkStatefulOperators Task Runner #125',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_125',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-126',
    name: 'ApacheFlinkStatefulOperators Task Runner #126',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_126',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-127',
    name: 'ApacheFlinkStatefulOperators Task Runner #127',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_127',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-128',
    name: 'ApacheFlinkStatefulOperators Task Runner #128',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_128',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-129',
    name: 'ApacheFlinkStatefulOperators Task Runner #129',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_129',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-130',
    name: 'ApacheFlinkStatefulOperators Task Runner #130',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_130',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-131',
    name: 'ApacheFlinkStatefulOperators Task Runner #131',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_131',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-132',
    name: 'ApacheFlinkStatefulOperators Task Runner #132',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_132',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-133',
    name: 'ApacheFlinkStatefulOperators Task Runner #133',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_133',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-134',
    name: 'ApacheFlinkStatefulOperators Task Runner #134',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_134',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-135',
    name: 'ApacheFlinkStatefulOperators Task Runner #135',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_135',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-136',
    name: 'ApacheFlinkStatefulOperators Task Runner #136',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_136',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-137',
    name: 'ApacheFlinkStatefulOperators Task Runner #137',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_137',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-138',
    name: 'ApacheFlinkStatefulOperators Task Runner #138',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_138',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-139',
    name: 'ApacheFlinkStatefulOperators Task Runner #139',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_139',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-140',
    name: 'ApacheFlinkStatefulOperators Task Runner #140',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_140',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-141',
    name: 'ApacheFlinkStatefulOperators Task Runner #141',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_141',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-142',
    name: 'ApacheFlinkStatefulOperators Task Runner #142',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_142',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-143',
    name: 'ApacheFlinkStatefulOperators Task Runner #143',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_143',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-144',
    name: 'ApacheFlinkStatefulOperators Task Runner #144',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_144',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-145',
    name: 'ApacheFlinkStatefulOperators Task Runner #145',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_145',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-146',
    name: 'ApacheFlinkStatefulOperators Task Runner #146',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_146',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-147',
    name: 'ApacheFlinkStatefulOperators Task Runner #147',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_147',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-148',
    name: 'ApacheFlinkStatefulOperators Task Runner #148',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_148',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-149',
    name: 'ApacheFlinkStatefulOperators Task Runner #149',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_149',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-FLK-150',
    name: 'ApacheFlinkStatefulOperators Task Runner #150',
    category: 'Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing',
    executorClass: 'org.dataflow.engine.operators.FLK_ApacheFlinkStatefulOperators_150',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  }
];
