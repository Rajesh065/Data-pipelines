import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('DataFlow Pipeline Orchestrator API', () => {
  it('should return system health and active workers', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('should list enterprise DAG pipelines', async () => {
    const res = await request(app).get('/api/v1/pipelines');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data[0].id).toBeDefined();
  });

  it('should trigger pipeline execution', async () => {
    const res = await request(app).post('/api/v1/pipelines/dag-fin-settlement-01/trigger');
    expect(res.status).toBe(200);
    expect(res.body.data.success).toBe(true);
  });
});
