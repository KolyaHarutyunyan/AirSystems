import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerUtil } from './util/swagger.util';
import { PORT } from './constants';

export async function bootstrap() {
  const swaggerUtil = new SwaggerUtil();
  const app = await NestFactory.create(AppModule);

  // Middlewares
  app.enableCors();

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  //swagger documentation setup
  swaggerUtil.setupSwagger(app);

  await app
    .listen(PORT)
    .then(() => console.log(`server running on port ${PORT}`));
}
bootstrap();
