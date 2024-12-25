import { Module } from '@nestjs/common';
import { UniquebyService } from './uniqueby.service';
import { UniquebyController } from './uniqueby.controller';
import { readFileWithStream } from 'src/utils/readByStream';

@Module({
  controllers: [UniquebyController],
  providers: [UniquebyService],
})
export class UniquebyModule {}
