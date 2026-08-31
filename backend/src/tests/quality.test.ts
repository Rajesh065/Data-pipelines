import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('Data Quality & Assertions', () => {
  it('should retrieve quality assertion rules', async () => {
    const res = await request(app).get('/api/v1/quality-assertions');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});
