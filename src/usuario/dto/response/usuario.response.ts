import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { USUARIO } from 'src/usuario/contants/usuario.constant';

export class UsuarioResponse {
  @Expose()
  @ApiProperty({ description: USUARIO.SWAGGER.idUsuario, example: '1' })
  idUsuario: number = 0;

  @Expose()
  @ApiProperty({ description: USUARIO.SWAGGER.nomeUsuario, example: 'John Doe' })
  nomeUsuario: string = '';

  @Expose()
  @ApiProperty({ description: USUARIO.SWAGGER.email, example: 'johndoe@example.com' })
  email: string = '';

  @Expose()
  @ApiProperty({ description: USUARIO.SWAGGER.ativo, example: 'ativo | inativo' })
  ativo: boolean = true;
}
