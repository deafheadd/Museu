export function criarSwaggerOperacao(ENTITY_NAME: string) {
  return {
    LISTAR: {
      ACAO: `Listagem dos cadastros de ${ENTITY_NAME} existentes no sistema`,
      SUCESSO: `A consulta dos cadastros de ${ENTITY_NAME} foi realizada`,
      ERRO: `Falha na consulta dos cadastros de ${ENTITY_NAME} no sistema`,
    },
    PORID: {
      ACAO: `Mostrar o cadastro de ${ENTITY_NAME} por um identificador único no sistema`,
      SUCESSO: `O cadastro de ${ENTITY_NAME} foi localizado com sucesso no sistema`,
      ERRO: `O cadastro de ${ENTITY_NAME} não foi localizado no sistema`,
      NAO_LOCALIZADO: `O código informado no cadastro de ${ENTITY_NAME} não foi localizado no sistema`,
    },
    SALVAR: {
      ACAO: `Criar um novo cadastro de ${ENTITY_NAME} com um identificador único no sistema`,
      SUCESSO: `O cadastro de ${ENTITY_NAME} foi realizado com sucesso no sistema`,
      ERRO: `O cadastro de ${ENTITY_NAME} não foi criado no sistema`,
      EXISTE: `${ENTITY_NAME} já está cadastrado no sistema`,
    },
    ATUALIZAR: {
      ACAO: `Atualizar o cadastro de ${ENTITY_NAME} com um identificador único no sistema`,
      SUCESSO: `O cadastro de ${ENTITY_NAME} foi atualizado com sucesso no sistema`,
      ERRO: `Falha na atualização do cadastro de ${ENTITY_NAME} no sistema`,
      NAO_LOCALIZADO: `O código informado no cadastro de ${ENTITY_NAME} não foi localizado no sistema`,
    },
    EXCLUIR: {
      ACAO: `Excluir o cadastro de ${ENTITY_NAME} por um identificador único no sistema`,
      SUCESSO: `O cadastro de ${ENTITY_NAME} foi excluído com sucesso do sistema`,
      ERRO: `Falha na exclusão de ${ENTITY_NAME} do sistema`,
      NAO_LOCALIZADO: `O código informado no cadastro de ${ENTITY_NAME} não foi localizado no sistema`,
    },
  };
}
