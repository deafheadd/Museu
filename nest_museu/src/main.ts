import { NestFactory } from '@nestjs/core';
import { UsuarioModule } from './usuario/usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(UsuarioModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(8000);
}
bootstrap();
