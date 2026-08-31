import { Request, Response } from 'express';
import { PipelineService } from '../services/pipelineService';

export class PipelineController {
  static getPipelines(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getPipelines() }); }
  static getConnectors(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getConnectors() }); }
  static getTransformations(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getTransformations() }); }
  static getQualityAssertions(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getQualityAssertions() }); }
  static getLineage(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getLineage() }); }
  static getStreamingMetrics(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getStreamingMetrics() }); }
  static getIncidents(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getIncidents() }); }

  static triggerRun(req: Request, res: Response): void {
    const resRun = PipelineService.triggerPipelineRun(req.params.id);
    if (!resRun) { res.status(404).json({ success: false, message: 'Pipeline not found' }); return; }
    res.json({ success: true, data: resRun });
  }
}
