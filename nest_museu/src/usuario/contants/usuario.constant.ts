import { criarSwaggerOperacao } from 'src/common/constants/operacao.swagger';
import { gerarMensagem, MENSAGEM_SISTEMA } from '../../common/constants/mensagem.sistema';
import { gerarRotasRecurso } from 'src/common/constants/url.sistema';

const ENTITY_NAME = 'Usuario';
const ALIAS_NAME = 'Usuário';

export const USUARIO = {
  ENTITY: ENTITY_NAME,
  ALIAS: ALIAS_NAME,
  SWAGGER: {
    idUsuario: `Código do ${ENTITY_NAME} de identificação única`,
    nomeUsuario: `Nome do ${ENTITY_NAME}`,
    email: `E-mail do ${ENTITY_NAME}`,
    senha: `Senha do ${ENTITY_NAME}`,
    ativo: `Status do ${ENTITY_NAME}`,
  },
  MENSAGEM: getMensagem(ALIAS_NAME),
  OPERACAO: criarSwaggerOperacao(ENTITY_NAME),
  ROTA: gerarRotasRecurso(ENTITY_NAME),
};

export function getMensagem(entity: string) {
  return {
    ENTIDADE_NAO_ENCONTRADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_NAO_ENCONTRADA, entity),
    ENTIDADE_CADASTRADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_CADASTRADA, entity),
    ENTIDADE_ALTERADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_ALTERADA, entity),
    ENTIDADE_EXCLUIDA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_EXCLUIDA, entity),
    ENTIDADE_LOCALIZADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_LOCALIZADA, entity),
    EMAIL_CADASTRADO: gerarMensagem(MENSAGEM_SISTEMA.EMAIL_CADASTRADO, entity),
    ENTIDADE_LISTAGEM: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_LISTAGEM, entity),
  };
}
