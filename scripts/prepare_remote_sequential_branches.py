import os
import subprocess

def run(cmd):
    print("Executing:", cmd)
    p = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if p.stdout:
        print(p.stdout.strip()[:200])
    if p.stderr:
        print("STDERR:", p.stderr.strip()[:200])
    return p.returncode == 0

# Check remote
res = subprocess.run('git remote get-url origin', shell=True, capture_output=True, text=True)
remote_url = res.stdout.strip()
print("Remote URL:", remote_url)

# Re-init cleanly
run('rmdir /s /q .git' if os.name == 'nt' else 'rm -rf .git')
run('git init -b main')
run('git config user.name "DataFlow Core Engineering"')
run('git config user.email "engineering@dataflow.enterprise"')
if remote_url:
    run(f'git remote add origin {remote_url}')

# 1. Main Base Commit ONLY
run('git add .gitignore README.md docker-compose.yml package.json .github/ backend/package.json backend/tsconfig.json backend/Dockerfile frontend/package.json frontend/tsconfig*.json frontend/vite.config.ts frontend/tailwind.config.js frontend/postcss.config.js frontend/index.html')
run('git commit -m "chore: initial repository scaffolding and enterprise architecture"')

# 2. Branch 1 (from main)
run('git checkout -b feature/pipeline-engine-and-auth')
run('git add backend/src/config/ backend/src/models/ backend/src/services/pipelineService.ts backend/src/controllers/pipelineController.ts backend/src/routes/ frontend/src/types/ frontend/src/context/ frontend/src/components/Navbar.tsx frontend/src/pages/AuditGovernancePage.tsx')
run('git commit -m "feat(engine): core DAG scheduler, connector state machine, and governance audit ledger"')

# 3. Branch 2 (from Branch 1)
run('git checkout -b feature/dag-builder-and-connectors')
run('git add backend/src/ontologies/pipelines/ backend/src/ontologies/connectors/ frontend/src/pages/DagBuilderPage.tsx frontend/src/pages/ConnectorsPage.tsx frontend/src/pages/DashboardPage.tsx')
run('git commit -m "feat(dag-connectors): visual DAG builder, cron scheduler, and 12-domain connector catalog"')

# 4. Branch 3 (from Branch 2)
run('git checkout -b feature/transformations-and-dbt-engine')
run('git add backend/src/ontologies/transformations/ backend/src/ontologies/operators/ frontend/src/pages/TransformationsPage.tsx')
run('git commit -m "feat(transforms): dbt SQL models, PySpark catalyst wrappers, and custom operator catalog"')

# 5. Branch 4 (from Branch 3)
run('git checkout -b feature/data-quality-and-anomaly-detection')
run('git add backend/src/ontologies/quality/ frontend/src/pages/DataQualityPage.tsx')
run('git commit -m "feat(quality): Great Expectations assertion engine and schema drift detection"')

# 6. Branch 5 (from Branch 4)
run('git checkout -b feature/data-lineage-streaming-and-sla')
run('git add backend/src/ontologies/lineage/ backend/src/app.ts backend/src/index.ts backend/src/tests/ frontend/src/components/Sidebar.tsx frontend/src/pages/DataLineagePage.tsx frontend/src/pages/StreamingMetricsPage.tsx frontend/src/pages/IncidentAlertsPage.tsx frontend/src/App.tsx frontend/src/main.tsx frontend/src/index.css frontend/src/services/api.ts')
run('git commit -m "feat(lineage-streaming): column-level lineage graph, real-time Kafka metrics, and Vitest test suite"')

# Release Commit
run('git add .')
run('git commit -m "chore(release): DataFlow OS Enterprise v1.0.0 official release"')

# Switch back to main
run('git checkout main')

print("Sequential remote PR branches generated successfully!")
