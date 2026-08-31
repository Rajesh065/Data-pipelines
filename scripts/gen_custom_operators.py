import os

def write(p, c):
    d = os.path.dirname(p)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(p, 'w', encoding='utf-8') as out:
        out.write(c.strip() + '\n')
    print('Created:', p)

# Stream processing & Airflow Custom Operators Catalog
operator_families = [
    ("DistributedSparkOperators", "SPK", "PySpark resilient distributed datasets (RDD) and Spark SQL catalyst optimizer task executors"),
    ("ApacheFlinkStatefulOperators", "FLK", "Flink event-time tumbling/sliding window aggregators and RocksDB state backend checkpointing"),
    ("DeltaLakeCompactionOperators", "DLT", "Apache Delta Lake OPTIMIZE Z-ORDER compaction, schema enforcement, and vacuum retention operators"),
    ("KafkaSchemaRegistryOperators", "KSR", "Avro, Protobuf, and JSON Schema serialization validation, evolution compatibility checkers")
]

for op_name, prefix, desc in operator_families:
    ops = []
    for i in range(1, 151):
        item = f"""  {{
    operatorId: 'OP-{prefix}-{i:03d}',
    name: '{op_name} Task Runner #{i}',
    category: '{desc.split(",")[i % len(desc.split(","))].strip()}',
    executorClass: 'org.dataflow.engine.operators.{prefix}_{op_name}_{i}',
    defaultMemoryMb: {4096 + (i % 8) * 1024},
    defaultCpuCores: {2 + (i % 6) * 2},
    maxRetryAttempts: 3,
    supportsDynamicScaling: true
  }}"""
        ops.append(item)

    content = f"""/**
 * Custom DataFlow Engine Operators: {op_name}
 * Description: {desc}
 */

export interface CustomOperatorSpec {{
  operatorId: string;
  name: string;
  category: string;
  executorClass: string;
  defaultMemoryMb: number;
  defaultCpuCores: number;
  maxRetryAttempts: number;
  supportsDynamicScaling: boolean;
}}

export const OPERATOR_{prefix}_DATASET: CustomOperatorSpec[] = [
{',\n'.join(ops)}
];
"""
    write(f'backend/src/ontologies/operators/{op_name.lower()}.ts', content)

print("Custom Operators generated successfully!")
