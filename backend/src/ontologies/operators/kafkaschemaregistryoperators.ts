/**
 * Custom DataFlow Engine Operators: KafkaSchemaRegistryOperators
 * Description: Avro, Protobuf, and JSON Schema serialization validation, evolution compatibility checkers
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

export const OPERATOR_KSR_DATASET: CustomOperatorSpec[] = [
  {
    operatorId: 'OP-KSR-001',
    name: 'KafkaSchemaRegistryOperators Task Runner #1',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_1',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-002',
    name: 'KafkaSchemaRegistryOperators Task Runner #2',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_2',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-003',
    name: 'KafkaSchemaRegistryOperators Task Runner #3',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_3',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-004',
    name: 'KafkaSchemaRegistryOperators Task Runner #4',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_4',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-005',
    name: 'KafkaSchemaRegistryOperators Task Runner #5',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_5',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-006',
    name: 'KafkaSchemaRegistryOperators Task Runner #6',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_6',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-007',
    name: 'KafkaSchemaRegistryOperators Task Runner #7',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_7',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-008',
    name: 'KafkaSchemaRegistryOperators Task Runner #8',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_8',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-009',
    name: 'KafkaSchemaRegistryOperators Task Runner #9',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_9',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-010',
    name: 'KafkaSchemaRegistryOperators Task Runner #10',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_10',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-011',
    name: 'KafkaSchemaRegistryOperators Task Runner #11',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_11',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-012',
    name: 'KafkaSchemaRegistryOperators Task Runner #12',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_12',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-013',
    name: 'KafkaSchemaRegistryOperators Task Runner #13',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_13',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-014',
    name: 'KafkaSchemaRegistryOperators Task Runner #14',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_14',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-015',
    name: 'KafkaSchemaRegistryOperators Task Runner #15',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_15',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-016',
    name: 'KafkaSchemaRegistryOperators Task Runner #16',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_16',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-017',
    name: 'KafkaSchemaRegistryOperators Task Runner #17',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_17',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-018',
    name: 'KafkaSchemaRegistryOperators Task Runner #18',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_18',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-019',
    name: 'KafkaSchemaRegistryOperators Task Runner #19',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_19',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-020',
    name: 'KafkaSchemaRegistryOperators Task Runner #20',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_20',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-021',
    name: 'KafkaSchemaRegistryOperators Task Runner #21',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_21',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-022',
    name: 'KafkaSchemaRegistryOperators Task Runner #22',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_22',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-023',
    name: 'KafkaSchemaRegistryOperators Task Runner #23',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_23',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-024',
    name: 'KafkaSchemaRegistryOperators Task Runner #24',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_24',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-025',
    name: 'KafkaSchemaRegistryOperators Task Runner #25',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_25',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-026',
    name: 'KafkaSchemaRegistryOperators Task Runner #26',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_26',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-027',
    name: 'KafkaSchemaRegistryOperators Task Runner #27',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_27',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-028',
    name: 'KafkaSchemaRegistryOperators Task Runner #28',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_28',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-029',
    name: 'KafkaSchemaRegistryOperators Task Runner #29',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_29',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-030',
    name: 'KafkaSchemaRegistryOperators Task Runner #30',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_30',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-031',
    name: 'KafkaSchemaRegistryOperators Task Runner #31',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_31',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-032',
    name: 'KafkaSchemaRegistryOperators Task Runner #32',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_32',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-033',
    name: 'KafkaSchemaRegistryOperators Task Runner #33',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_33',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-034',
    name: 'KafkaSchemaRegistryOperators Task Runner #34',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_34',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-035',
    name: 'KafkaSchemaRegistryOperators Task Runner #35',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_35',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-036',
    name: 'KafkaSchemaRegistryOperators Task Runner #36',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_36',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-037',
    name: 'KafkaSchemaRegistryOperators Task Runner #37',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_37',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-038',
    name: 'KafkaSchemaRegistryOperators Task Runner #38',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_38',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-039',
    name: 'KafkaSchemaRegistryOperators Task Runner #39',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_39',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-040',
    name: 'KafkaSchemaRegistryOperators Task Runner #40',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_40',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-041',
    name: 'KafkaSchemaRegistryOperators Task Runner #41',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_41',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-042',
    name: 'KafkaSchemaRegistryOperators Task Runner #42',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_42',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-043',
    name: 'KafkaSchemaRegistryOperators Task Runner #43',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_43',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-044',
    name: 'KafkaSchemaRegistryOperators Task Runner #44',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_44',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-045',
    name: 'KafkaSchemaRegistryOperators Task Runner #45',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_45',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-046',
    name: 'KafkaSchemaRegistryOperators Task Runner #46',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_46',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-047',
    name: 'KafkaSchemaRegistryOperators Task Runner #47',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_47',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-048',
    name: 'KafkaSchemaRegistryOperators Task Runner #48',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_48',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-049',
    name: 'KafkaSchemaRegistryOperators Task Runner #49',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_49',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-050',
    name: 'KafkaSchemaRegistryOperators Task Runner #50',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_50',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-051',
    name: 'KafkaSchemaRegistryOperators Task Runner #51',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_51',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-052',
    name: 'KafkaSchemaRegistryOperators Task Runner #52',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_52',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-053',
    name: 'KafkaSchemaRegistryOperators Task Runner #53',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_53',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-054',
    name: 'KafkaSchemaRegistryOperators Task Runner #54',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_54',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-055',
    name: 'KafkaSchemaRegistryOperators Task Runner #55',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_55',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-056',
    name: 'KafkaSchemaRegistryOperators Task Runner #56',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_56',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-057',
    name: 'KafkaSchemaRegistryOperators Task Runner #57',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_57',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-058',
    name: 'KafkaSchemaRegistryOperators Task Runner #58',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_58',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-059',
    name: 'KafkaSchemaRegistryOperators Task Runner #59',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_59',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-060',
    name: 'KafkaSchemaRegistryOperators Task Runner #60',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_60',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-061',
    name: 'KafkaSchemaRegistryOperators Task Runner #61',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_61',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-062',
    name: 'KafkaSchemaRegistryOperators Task Runner #62',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_62',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-063',
    name: 'KafkaSchemaRegistryOperators Task Runner #63',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_63',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-064',
    name: 'KafkaSchemaRegistryOperators Task Runner #64',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_64',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-065',
    name: 'KafkaSchemaRegistryOperators Task Runner #65',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_65',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-066',
    name: 'KafkaSchemaRegistryOperators Task Runner #66',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_66',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-067',
    name: 'KafkaSchemaRegistryOperators Task Runner #67',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_67',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-068',
    name: 'KafkaSchemaRegistryOperators Task Runner #68',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_68',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-069',
    name: 'KafkaSchemaRegistryOperators Task Runner #69',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_69',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-070',
    name: 'KafkaSchemaRegistryOperators Task Runner #70',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_70',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-071',
    name: 'KafkaSchemaRegistryOperators Task Runner #71',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_71',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-072',
    name: 'KafkaSchemaRegistryOperators Task Runner #72',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_72',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-073',
    name: 'KafkaSchemaRegistryOperators Task Runner #73',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_73',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-074',
    name: 'KafkaSchemaRegistryOperators Task Runner #74',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_74',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-075',
    name: 'KafkaSchemaRegistryOperators Task Runner #75',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_75',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-076',
    name: 'KafkaSchemaRegistryOperators Task Runner #76',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_76',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-077',
    name: 'KafkaSchemaRegistryOperators Task Runner #77',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_77',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-078',
    name: 'KafkaSchemaRegistryOperators Task Runner #78',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_78',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-079',
    name: 'KafkaSchemaRegistryOperators Task Runner #79',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_79',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-080',
    name: 'KafkaSchemaRegistryOperators Task Runner #80',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_80',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-081',
    name: 'KafkaSchemaRegistryOperators Task Runner #81',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_81',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-082',
    name: 'KafkaSchemaRegistryOperators Task Runner #82',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_82',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-083',
    name: 'KafkaSchemaRegistryOperators Task Runner #83',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_83',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-084',
    name: 'KafkaSchemaRegistryOperators Task Runner #84',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_84',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-085',
    name: 'KafkaSchemaRegistryOperators Task Runner #85',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_85',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-086',
    name: 'KafkaSchemaRegistryOperators Task Runner #86',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_86',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-087',
    name: 'KafkaSchemaRegistryOperators Task Runner #87',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_87',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-088',
    name: 'KafkaSchemaRegistryOperators Task Runner #88',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_88',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-089',
    name: 'KafkaSchemaRegistryOperators Task Runner #89',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_89',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-090',
    name: 'KafkaSchemaRegistryOperators Task Runner #90',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_90',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-091',
    name: 'KafkaSchemaRegistryOperators Task Runner #91',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_91',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-092',
    name: 'KafkaSchemaRegistryOperators Task Runner #92',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_92',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-093',
    name: 'KafkaSchemaRegistryOperators Task Runner #93',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_93',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-094',
    name: 'KafkaSchemaRegistryOperators Task Runner #94',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_94',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-095',
    name: 'KafkaSchemaRegistryOperators Task Runner #95',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_95',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-096',
    name: 'KafkaSchemaRegistryOperators Task Runner #96',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_96',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-097',
    name: 'KafkaSchemaRegistryOperators Task Runner #97',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_97',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-098',
    name: 'KafkaSchemaRegistryOperators Task Runner #98',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_98',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-099',
    name: 'KafkaSchemaRegistryOperators Task Runner #99',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_99',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-100',
    name: 'KafkaSchemaRegistryOperators Task Runner #100',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_100',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-101',
    name: 'KafkaSchemaRegistryOperators Task Runner #101',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_101',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-102',
    name: 'KafkaSchemaRegistryOperators Task Runner #102',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_102',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-103',
    name: 'KafkaSchemaRegistryOperators Task Runner #103',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_103',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-104',
    name: 'KafkaSchemaRegistryOperators Task Runner #104',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_104',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-105',
    name: 'KafkaSchemaRegistryOperators Task Runner #105',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_105',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-106',
    name: 'KafkaSchemaRegistryOperators Task Runner #106',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_106',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-107',
    name: 'KafkaSchemaRegistryOperators Task Runner #107',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_107',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-108',
    name: 'KafkaSchemaRegistryOperators Task Runner #108',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_108',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-109',
    name: 'KafkaSchemaRegistryOperators Task Runner #109',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_109',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-110',
    name: 'KafkaSchemaRegistryOperators Task Runner #110',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_110',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-111',
    name: 'KafkaSchemaRegistryOperators Task Runner #111',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_111',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-112',
    name: 'KafkaSchemaRegistryOperators Task Runner #112',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_112',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-113',
    name: 'KafkaSchemaRegistryOperators Task Runner #113',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_113',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-114',
    name: 'KafkaSchemaRegistryOperators Task Runner #114',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_114',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-115',
    name: 'KafkaSchemaRegistryOperators Task Runner #115',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_115',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-116',
    name: 'KafkaSchemaRegistryOperators Task Runner #116',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_116',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-117',
    name: 'KafkaSchemaRegistryOperators Task Runner #117',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_117',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-118',
    name: 'KafkaSchemaRegistryOperators Task Runner #118',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_118',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-119',
    name: 'KafkaSchemaRegistryOperators Task Runner #119',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_119',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-120',
    name: 'KafkaSchemaRegistryOperators Task Runner #120',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_120',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-121',
    name: 'KafkaSchemaRegistryOperators Task Runner #121',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_121',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-122',
    name: 'KafkaSchemaRegistryOperators Task Runner #122',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_122',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-123',
    name: 'KafkaSchemaRegistryOperators Task Runner #123',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_123',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-124',
    name: 'KafkaSchemaRegistryOperators Task Runner #124',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_124',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-125',
    name: 'KafkaSchemaRegistryOperators Task Runner #125',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_125',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-126',
    name: 'KafkaSchemaRegistryOperators Task Runner #126',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_126',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-127',
    name: 'KafkaSchemaRegistryOperators Task Runner #127',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_127',
    defaultMemoryMb: 11264,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-128',
    name: 'KafkaSchemaRegistryOperators Task Runner #128',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_128',
    defaultMemoryMb: 4096,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-129',
    name: 'KafkaSchemaRegistryOperators Task Runner #129',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_129',
    defaultMemoryMb: 5120,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-130',
    name: 'KafkaSchemaRegistryOperators Task Runner #130',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_130',
    defaultMemoryMb: 6144,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-131',
    name: 'KafkaSchemaRegistryOperators Task Runner #131',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_131',
    defaultMemoryMb: 7168,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-132',
    name: 'KafkaSchemaRegistryOperators Task Runner #132',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_132',
    defaultMemoryMb: 8192,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-133',
    name: 'KafkaSchemaRegistryOperators Task Runner #133',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_133',
    defaultMemoryMb: 9216,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-134',
    name: 'KafkaSchemaRegistryOperators Task Runner #134',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_134',
    defaultMemoryMb: 10240,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-135',
    name: 'KafkaSchemaRegistryOperators Task Runner #135',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_135',
    defaultMemoryMb: 11264,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-136',
    name: 'KafkaSchemaRegistryOperators Task Runner #136',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_136',
    defaultMemoryMb: 4096,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-137',
    name: 'KafkaSchemaRegistryOperators Task Runner #137',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_137',
    defaultMemoryMb: 5120,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-138',
    name: 'KafkaSchemaRegistryOperators Task Runner #138',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_138',
    defaultMemoryMb: 6144,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-139',
    name: 'KafkaSchemaRegistryOperators Task Runner #139',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_139',
    defaultMemoryMb: 7168,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-140',
    name: 'KafkaSchemaRegistryOperators Task Runner #140',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_140',
    defaultMemoryMb: 8192,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-141',
    name: 'KafkaSchemaRegistryOperators Task Runner #141',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_141',
    defaultMemoryMb: 9216,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-142',
    name: 'KafkaSchemaRegistryOperators Task Runner #142',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_142',
    defaultMemoryMb: 10240,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-143',
    name: 'KafkaSchemaRegistryOperators Task Runner #143',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_143',
    defaultMemoryMb: 11264,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-144',
    name: 'KafkaSchemaRegistryOperators Task Runner #144',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_144',
    defaultMemoryMb: 4096,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-145',
    name: 'KafkaSchemaRegistryOperators Task Runner #145',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_145',
    defaultMemoryMb: 5120,
    defaultCpuCores: 4,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-146',
    name: 'KafkaSchemaRegistryOperators Task Runner #146',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_146',
    defaultMemoryMb: 6144,
    defaultCpuCores: 6,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-147',
    name: 'KafkaSchemaRegistryOperators Task Runner #147',
    category: 'evolution compatibility checkers',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_147',
    defaultMemoryMb: 7168,
    defaultCpuCores: 8,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-148',
    name: 'KafkaSchemaRegistryOperators Task Runner #148',
    category: 'Avro',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_148',
    defaultMemoryMb: 8192,
    defaultCpuCores: 10,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-149',
    name: 'KafkaSchemaRegistryOperators Task Runner #149',
    category: 'Protobuf',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_149',
    defaultMemoryMb: 9216,
    defaultCpuCores: 12,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  },
  {
    operatorId: 'OP-KSR-150',
    name: 'KafkaSchemaRegistryOperators Task Runner #150',
    category: 'and JSON Schema serialization validation',
    executorClass: 'org.dataflow.engine.operators.KSR_KafkaSchemaRegistryOperators_150',
    defaultMemoryMb: 10240,
    defaultCpuCores: 2,
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  }
];
