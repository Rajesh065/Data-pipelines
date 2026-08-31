import { Router } from 'express';
import { PipelineController } from '../controllers/pipelineController';

const router = Router();
router.get('/pipelines', PipelineController.getPipelines);
router.post('/pipelines/:id/trigger', PipelineController.triggerRun);
router.get('/connectors', PipelineController.getConnectors);
router.get('/transformations', PipelineController.getTransformations);
router.get('/quality-assertions', PipelineController.getQualityAssertions);
router.get('/lineage', PipelineController.getLineage);
router.get('/streaming-metrics', PipelineController.getStreamingMetrics);
router.get('/incidents', PipelineController.getIncidents);

export default router;
