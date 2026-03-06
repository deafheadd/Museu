import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GlobalExceptionFilter } from './common/exceptions/filters/global.exception';
import { UsuarioModule } from './usuario/usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(UsuarioModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(8000);
}
bootstrap();
