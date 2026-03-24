import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { USUARIO } from 'src/usuario/contants/usuario.constant';

export class UsuarioRequest {
  @IsString()
  @ApiProperty({ description: USUARIO.SWAGGER.nomeUsuario, example: 'John Doe' })
  nomeUsuario: string = '';

  @IsString()
  @ApiProperty({ description: USUARIO.SWAGGER.email, example: 'johndoe@example.com' })
  email: string = '';

  @IsString()
  @ApiProperty({ description: USUARIO.SWAGGER.senha, example: '********' })
  senha: string = '';
}
