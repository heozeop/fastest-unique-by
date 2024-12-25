import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromClientModule } from './prom-client/prom-client.module';
import { UniquebyModule } from './uniqueby/uniqueby.module';

@Module({
  imports: [PromClientModule, UniquebyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
