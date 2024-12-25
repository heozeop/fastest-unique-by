import { Controller, Get, Res } from '@nestjs/common';
import { PromClientService } from './prom-client.service';
import { Response } from 'express';

@Controller('metrics')
export class PromClientController {
  constructor(private readonly promClientService: PromClientService) {}

  @Get()
  async getMetrics(@Res() res: Response) {
    res.set('Content-Type', 'text/plain');
    res.send(await this.promClientService.getMetrics());
  }
}
