import { Controller, Get } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
  @Get()
  listar() {
    return 'meu primeiro controller em nestjs';
  }
}
