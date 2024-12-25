import { Module } from '@nestjs/common';
import { UniquebyService } from './uniqueby.service';
import { UniquebyController } from './uniqueby.controller';

@Module({
  controllers: [UniquebyController],
  providers: [UniquebyService],
})
export class UniquebyModule {}
