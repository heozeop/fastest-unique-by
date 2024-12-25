import { Controller, Get } from '@nestjs/common';
import { UniquebyService } from './uniqueby.service';
import data from '../../data.json';
import { Data } from 'src/type/data.type';

@Controller('uniqueby')
export class UniquebyController {
  constructor(private readonly uniquebyService: UniquebyService) {}

  @Get('set')
  uniqueBySet() {
    return this.uniquebyService.uniqueBySet(data as Data[], 'key');
  }

  @Get('lodash')
  uniqueByLodash() {
    return this.uniquebyService.uniqueByLodash(data as Data[], 'key');
  }

  @Get('immutable')
  uniqueByImmutable() {
    return this.uniquebyService.uniqueByImmutableSet(data as Data[], 'key');
  }

  @Get('map')
  uniqueByMap() {
    return this.uniquebyService.uniqueByMap(data as Data[], 'key');
  }
}
