import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './common/exceptions/filters/global.exception';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioResponse } from './usuario/dto/response/usuario.response';

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

  const configSwagger = new DocumentBuilder()
    .setTitle('Sistema de Gestão para museu')
    .setDescription('API para gestão de museu')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger, {
    extraModels: [UsuarioResponse],
  });

  SwaggerModule.setup('api_museu', app, document);

  await app.listen(8000);
}
bootstrap();
