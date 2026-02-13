import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  listar() {
    return 'Todos meus usuários';
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
