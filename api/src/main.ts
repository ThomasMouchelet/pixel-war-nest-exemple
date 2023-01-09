import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    methods: ["GET", "POST","PATCH","DELETE","PUT"],
  });
  await app.listen(8000);
}
bootstrap();
