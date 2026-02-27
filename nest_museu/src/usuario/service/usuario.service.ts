import { Injectable } from '@nestjs/common';
import { TABELA_USUARIO } from './tabela.usuario';
import { UsuarioConverter } from '../dto/converter/usuario.converter';

@Injectable()
export class UsuarioService {
  listar() {
    return UsuarioConverter.toListarUsuarioResponse(TABELA_USUARIO);
  }

  listarPorId(id: number) {
    return `usuário com id: ${id}`;
  }

  salvar() {
    return 'salvando um usuario!';
  }

  atualizar(id: number) {
    return `atualizando um usuario com id: ${id}`;
  }

  deletar(id: number) {
    return `deletando um usuario com id: ${id}`;
  }
}
