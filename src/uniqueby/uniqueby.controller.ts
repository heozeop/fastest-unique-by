import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { UniquebyService } from './uniqueby.service';
import { Data } from 'src/type/data.type';
import { readFileWithStream } from 'src/utils/readByStream';
import { checkExecutionTime } from 'src/utils/checkExecutionTime';

@Controller('uniqueby')
export class UniquebyController implements OnModuleInit {
  private data: Data[];
  constructor(private readonly uniquebyService: UniquebyService) {}

  async onModuleInit() {
    this.data = (await readFileWithStream('data.json')) as Data[];
  }

  @Get('set')
  async uniqueBySet() {
    return checkExecutionTime(() =>
      this.uniquebyService.uniqueBySet(this.data, 'key'),
    );
  }
  @Get('lodash')
  async uniqueByLodash() {
    return checkExecutionTime(() =>
      this.uniquebyService.uniqueByLodash(this.data, 'key'),
    );
  }

  @Get('immutable')
  async uniqueByImmutable() {
    return checkExecutionTime(() =>
      this.uniquebyService.uniqueByImmutableSet(this.data, 'key'),
    );
  }

  @Get('map')
  async uniqueByMap() {
    return checkExecutionTime(() =>
      this.uniquebyService.uniqueByMap(this.data, 'key'),
    );
  }
}
