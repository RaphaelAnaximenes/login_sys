import { Request, Response } from 'express';

export function notFoundException(req: Request, res: Response) {
  res.status(404).send('404 Not Found');
  console.log(`\x1b[31m NOT FOUND \x1b[0m was returned for requesting \x1b[33m ${req.url} \x1b[0m`);
  
}
