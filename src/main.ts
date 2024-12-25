import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // Express 기반일 때
  const server = app.getHttpServer();
  // Express의 최상위 라우터 객체
  const router = server._events.request._router;

  // router.stack을 순회하면서 라우트 정보 출력
  const routes = [];
  router.stack
    .filter((layer) => layer.route) // route가 있는 레이어만 필터
    .forEach((layer) => {
      const path = layer.route?.path;
      const method = layer.route?.stack[0].method.toUpperCase();
      routes.push({ method, path });
    });

  console.log('Registered Routes:', routes);
}
bootstrap();
