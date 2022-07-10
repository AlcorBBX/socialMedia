import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // чтобы добавлялись слеш апи и тп
  app.setGlobalPrefix('api');
  await app.listen(5000, () => {
    console.log('Server started on port: 5000');
  });
}
bootstrap();
