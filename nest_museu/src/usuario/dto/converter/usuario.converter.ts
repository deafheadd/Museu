import { plainToInstance } from 'class-transformer';
import { Usuario } from '../../entities/usuario';
import { TABELA_USUARIO } from '../../service/tabela.usuario';
import { UsuarioResponse } from '../response/usuario.response';

export class UsuarioConverter {
  static toUsuarioResponse(usuario: Usuario): UsuarioResponse {
    return plainToInstance(UsuarioResponse, usuario, {
      excludeExtraneousValues: true,
    });
  }

  static toListarUsuarioResponse(usuarios: typeof TABELA_USUARIO): UsuarioResponse[] {
    return plainToInstance(UsuarioResponse, usuarios, {
      excludeExtraneousValues: true,
    });
  }
}
