import { Request, Response, NextFunction } from "express";
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  console.log(`\x1b[32m ${req.method} \x1b[0m was requested from \x1b[33m ${req.url} \x1b[0m`);
  next();
}
