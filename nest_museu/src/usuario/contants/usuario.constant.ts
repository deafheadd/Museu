import { gerarMensagem, MENSAGEM_SISTEMA } from '../../common/constants/mensagem.sistema';

const ENTITY_NAME = 'Usuario';
const ALIAS_NAME = 'Usuário';

export const USUARIO = {
  MENSAGEM: getMensagem(ALIAS_NAME),
};

export function getMensagem(entity: string) {
  return {
    ENTIDADE_NAO_ENCONTRADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_NAO_ENCONTRADA, entity),
    ENTIDADE_CADASTRADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_CADASTRADA, entity),
    ENTIDADE_ALTERADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_ALTERADA, entity),
    ENTIDADE_EXCLUIDA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_EXCLUIDA, entity),
    ENTIDADE_LOCALIZADA: gerarMensagem(MENSAGEM_SISTEMA.ENTIDADE_LOCALIZADA, entity),

    EMAIL_CADASTRADO: gerarMensagem(MENSAGEM_SISTEMA.EMAIL_CADASTRADO, entity),
  };
}
