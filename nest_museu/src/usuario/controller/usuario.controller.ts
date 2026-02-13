import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';

@Controller('/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  listar(): string {
    return this.usuarioService.listar();
  }

  @Get(':id')
  listarPorId(@Param('id') id: number): string {
    return this.usuarioService.listarPorId(id);
  }

  @Post()
  salvar(): string {
    return this.usuarioService.salvar();
  }

  @Put(':id')
  atualizar(@Param('id') id: number): string {
    return this.usuarioService.atualizar(id);
  }

  @Delete(':id')
  deletar(@Param('id') id: number): string {
    return this.usuarioService.deletar(id);
  }
}
