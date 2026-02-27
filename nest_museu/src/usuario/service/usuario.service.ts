import { Injectable } from '@nestjs/common';
import { UsuarioConverter } from '../dto/converter/usuario.converter';
import { TABELA_USUARIO } from './tabela.usuario';
import { UsuarioResponse } from '../dto/response/usuario.response';

@Injectable()
export class UsuarioService {
  listar() {
    return UsuarioConverter.toListarUsuarioResponse(TABELA_USUARIO);
  }

  listarPorId(id: number): UsuarioResponse | null {
    const usuario = TABELA_USUARIO.find((usuario) => usuario.idUsuario === id);
    return usuario ? UsuarioConverter.toUsuarioResponse(usuario) : null;
  }

  salvar() {
    return 'salvando um usuario!';
  }

  atualizar(id: number) {
    return `atualizando um usuario com id: ${id}`;
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
