import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.time('Req-res time');
    res.on('finish', () => console.timeEnd('Req-res time'));
    next();
  }
}
