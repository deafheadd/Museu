import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioConverter } from '../dto/converter/usuario.converter';
import { UsuarioRequest } from '../dto/request/usuario.request';
import { UsuarioResponse } from '../dto/response/usuario.response';
import { fieldUsuarios } from '../contants/usuario.constant';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Pageable } from 'src/common/pagination/pageable.response';
import { Page } from 'src/common/pagination/pagination.system';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(
    page: number,
    pageSize: number,
    field: string,
    sort: 'ASC' | 'DESC',
    search?: string,
  ): Promise<Page<UsuarioResponse>> {
    const pageable = new Pageable(page, pageSize, field, sort, fieldUsuarios);

    const query = this.usuarioRepository
      .createQueryBuilder('usuario')
      .orderBy(`${field}`, sort)
      .skip(pageable.offset)
      .take(pageable.limit);

    if (search) {
      query.where(`${field} LIKE: :search_pesquisa`, {
        search_pesquisa: `%${search}%`,
      });
    }

    const [usuarios, totalElements] = await query.getManyAndCount();

    const listaUsuarios = UsuarioConverter.toListarUsuarioResponse(usuarios);

    return Page.of(listaUsuarios, totalElements, pageable);
  }

  porId(id: number): UsuarioResponse | null {
    return null;
  }

  salvar(usuarioRequest: UsuarioRequest): UsuarioResponse | null {
    return null;
  }

  atualizar(id: number, usuarioRequest: UsuarioRequest): UsuarioResponse | null {
    return null;
  }

  excluir(id: number): string | null {
    return null;
  }
}
