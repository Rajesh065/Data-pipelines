import { Router } from 'express';
import { PipelineController } from '../controllers/pipelineController';

const router = Router();
router.get('/pipelines', PipelineController.getPipelines);
router.get('/pipelines/:id', PipelineController.getPipelineById);
router.post('/pipelines/:id/trigger', PipelineController.triggerPipeline);
router.get('/connectors', PipelineController.getConnectors);
router.get('/quality', PipelineController.getQualityRules);

export default router;
