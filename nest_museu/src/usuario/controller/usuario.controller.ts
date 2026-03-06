import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApiResponse } from '../../common/responses/api.response';
import { ResponseBuilder } from '../../common/responses/builder.response';
import { UsuarioRequest } from '../dto/request/usuario.request';
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
      .metodo(req.method)
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
        .metodo(req.method)
        .dados(response)
        .build();
    } else {
      return ResponseBuilder.status<UsuarioResponse>(HttpStatus.NOT_FOUND)
        .mensagem('Usuário não encontrado')
        .path(req.path)
        .metodo(req.method)
        .error('Usuário com o ID especificado não existe')
        .build();
    }
  }

  @Post()
  salvar(@Body() usuarioRequest: UsuarioRequest, @Req() req: Request): ApiResponse<UsuarioResponse> {
    const response = this.usuarioService.salvar(usuarioRequest);
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
      .mensagem('Usuario registrado com sucesso')
      .path(req.path)
      .metodo(req.method)
      .dados(response)
      .build();
  }

  @Put(':id')
  atualizar(
    @Param('id') id: number,
    @Body() usuarioRequest: UsuarioRequest,
    @Req() req: Request,
  ): ApiResponse<UsuarioResponse> {
    const response = this.usuarioService.atualizar(id, usuarioRequest);

    if (response) {
      return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
        .mensagem('Usuário atualizado com sucesso')
        .path(req.path)
        .metodo(req.method)
        .dados(response)
        .build();
    } else {
      return ResponseBuilder.status<UsuarioResponse>(HttpStatus.NOT_FOUND)
        .mensagem('Usuário não encontrado')
        .path(req.path)
        .metodo(req.method)
        .error('Usuário com o ID especificado não existe')
        .build();
    }
  }

  @Delete(':id')
  deletar(@Param('id') id: number, @Req() req: Request) {
    const response = this.usuarioService.deletar(id);

    if (response) {
      return ResponseBuilder.status(HttpStatus.OK).mensagem(response).path(req.path).metodo(req.method).build();
    } else {
      return ResponseBuilder.status(HttpStatus.NOT_FOUND).mensagem(response).path(req.path).metodo(req.method).build();
    }
  }
}
