export const logger = {
  info: (msg: string, meta?: any) => console.log(`[INFO] ${msg}`, meta || ''),
  warn: (msg: string, meta?: any) => console.warn(`[WARN] ${msg}`, meta || ''),
  error: (msg: string, meta?: any) => console.error(`[ERROR] ${msg}`, meta || ''),
  audit: (action: string, user: string, pipeline?: string) => console.log(`[DATAFLOW-AUDIT] Action: ${action} | User: ${user} | Pipeline: ${pipeline || 'N/A'}`)
};
