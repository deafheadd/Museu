import { Controller, Delete, Get, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApiResponse } from '../../common/responses/api.response';
import { ResponseBuilder } from '../../common/responses/builder.response';
import { UsuarioResponse } from '../dto/response/usuario.response';
import { UsuarioService } from '../service/usuario.service';

@Controller('/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  listar(@Req() req: Request): ApiResponse<UsuarioResponse[]> {
    const response = this.usuarioService.listar();
    return ResponseBuilder.status<UsuarioResponse[]>(HttpStatus.OK)
      .mensagem('Listagem de Usuários')
      .path(req.path)
      .dados(response)
      .build();
  }

  @Get(':id')
  listarPorId(@Param('id') id: number, @Req() req: Request): ApiResponse<UsuarioResponse> {
    const response = this.usuarioService.listarPorId(id);

    if (response) {
      return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
        .mensagem('Usuário encontrado')
        .path(req.path)
        .dados(response)
        .build();
    } else {
      return ResponseBuilder.status<UsuarioResponse>(HttpStatus.NOT_FOUND)
        .mensagem('Usuário não encontrado')
        .path(req.path)
        .error('Usuário com o ID especificado não existe')
        .build();
    }
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
  deletar(@Param('id') id: number, @Req() req: Request) {
    const response = this.usuarioService.deletar(id);
    return ResponseBuilder.status(HttpStatus.OK).mensagem(response).path(req.path).build();
  }
}
