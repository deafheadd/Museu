import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioConverter } from '../dto/converter/usuario.converter';
import { UsuarioRequest } from '../dto/request/usuario.request';
import { UsuarioResponse } from '../dto/response/usuario.response';
import { TABELA_USUARIO } from './tabela.usuario';

@Injectable()
export class UsuarioService {
  listar() {
    return UsuarioConverter.toListarUsuarioResponse(TABELA_USUARIO);
  }

  listarPorId(id: number): UsuarioResponse {
    const usuario = TABELA_USUARIO.find((usuario) => usuario.idUsuario === id);

    if (!usuario) {
      throw new NotFoundException('Usuario não encontrado');
    }

    return UsuarioConverter.toUsuarioResponse(usuario);
  }

  salvar(usuarioRequest: UsuarioRequest): UsuarioResponse {
    const id = TABELA_USUARIO.length + 1;

    const usuario = UsuarioConverter.toUsuario(usuarioRequest);
    usuario.idUsuario = id;

    TABELA_USUARIO.push(usuario);

    return UsuarioConverter.toUsuarioResponse(usuario);
  }

  atualizar(id: number, usuarioRequest: UsuarioRequest) {
    const usuarioCadastrado = TABELA_USUARIO.find((usuario) => usuario.idUsuario === id);

    if (!usuarioCadastrado) {
      return null;
    }

    const usuario = UsuarioConverter.toUsuario(usuarioRequest);
    usuario.idUsuario = id;

    Object.assign(usuarioCadastrado, usuario);

    return UsuarioConverter.toUsuarioResponse(usuarioCadastrado);
  }

  deletar(id: number) {
    const usuario = TABELA_USUARIO.findIndex((usuario) => usuario.idUsuario === id);

    if (usuario > -1) {
      TABELA_USUARIO.splice(usuario, 1);
      return 'Usuário deletado com sucesso!';
    } else {
      return 'Usuário não encontrado!';
    }
  }
}
