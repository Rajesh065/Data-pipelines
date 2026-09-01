import { Request, Response } from 'express';
import { PipelineService } from '../services/pipelineService';

export class PipelineController {
  static getPipelines(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getPipelines() }); }
  static getPipelineById(req: Request, res: Response): void {
    const pipeline = PipelineService.getPipelineById(req.params.id);
    if (!pipeline) { res.status(404).json({ success: false, message: 'Pipeline not found' }); return; }
    res.json({ success: true, data: pipeline });
  }
  static triggerPipeline(req: Request, res: Response): void {
    const result = PipelineService.triggerPipeline(req.params.id);
    if (!result) { res.status(404).json({ success: false, message: 'Pipeline not found' }); return; }
    res.json({ success: true, data: result });
  }
  static getConnectors(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getConnectors() }); }
  static getQualityRules(req: Request, res: Response): void { res.json({ success: true, data: PipelineService.getQualityRules() }); }
}
