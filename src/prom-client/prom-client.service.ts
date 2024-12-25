import { Injectable } from '@nestjs/common';
import * as client from 'prom-client';

@Injectable()
export class PromClientService {
  startCollecting() {
    client.collectDefaultMetrics();
  }

  public async getMetrics(): Promise<string> {
    return await client.register.metrics();
  }
}
