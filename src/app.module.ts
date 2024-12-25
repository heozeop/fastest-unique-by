import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromClientModule } from './prom-client/prom-client.module';

@Module({
  imports: [PromClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
