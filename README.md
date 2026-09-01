# ⚡ DataFlow OS - Enterprise Data Engineering & Pipeline Orchestration Platform

[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-Passing-brightgreen)](.github/workflows/ci.yml)
[![Security Scan](https://img.shields.io/badge/Security-Verified-blue)](.github/workflows/security-scan.yml)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

**DataFlow OS** is an enterprise-grade Data Engineering, Distributed DAG Pipeline Orchestration, Multi-Source Ingestion, dbt SQL Transformation, Great Expectations Quality Assertion, and Column-Level Lineage platform.

---

## 🌟 Key Architecture & Features

1. **📊 Real-Time Orchestration Command Center**: Live DAG run velocity, cluster compute resource utilization, and SLA compliance tracking.
2. **🌲 Interactive Visual DAG Studio**: Node-based dependency visualizer with multi-stage execution states (Extract, Transform, Quality, Load).
3. **🔌 Multi-Source Ingestion Hub**: Real-time connectors for PostgreSQL CDC, Apache Kafka 3.4, Snowflake Lakehouse, Amazon S3, Apache Iceberg, and MongoDB Atlas.
4. **🔄 dbt SQL & PySpark Catalyst Engine**: SQL transformation models with incremental merge strategies and automated execution plan optimization.
5. **✅ Great Expectations Data Quality Suite**: Automated schema drift detection, column uniqueness assertions, and anomaly monitors.
6. **🔗 Column-Level Lineage Graph**: Trace data provenance from source relational databases to downstream business analytics dashboards.
7. **🌊 Streaming Metrics & Dead-Letter Queue (DLQ)**: Kafka consumer group lag monitoring and poisoned payload remediation.
8. **🔒 Governance & Cryptographic Audit Ledger**: Data contract enforcement, PII masking rules, and pipeline deployment audit trail.

---

## 📦 Installation Instructions

```bash
# 1. Install all monorepo dependencies
npm install
```

---

## 🛠️ Build Instructions

```bash
# Build backend and frontend production assets
npm run build
```

---

## 🚀 Run Instructions

```bash
# Start backend API (http://localhost:5000)
npm run dev:backend

# Start frontend UI (http://localhost:3000)
npm run dev:frontend

# Run automated tests
npm test
```
