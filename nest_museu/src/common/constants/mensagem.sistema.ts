export enum MENSAGEM_SISTEMA {
  ENTIDADE_NAO_ENCONTRADA = 'ENTIDADE_NAO_ENCONTRADA',
  ENTIDADE_CADASTRADA = 'ENTIDADE_CADASTRADA',
  ENTIDADE_ALTERADA = 'ENTIDADE_ALTERADA',
  ENTIDADE_EXCLUIDA = 'ENTIDADE_EXCLUIDA',
  ENTIDADE_LOCALIZADA = 'ENTIDADE_LOCALIZADA',

  EMAIL_CADASTRADO = 'EMAIL_CADASTRADO',
}

type MensagemValor = string | ((...args: any[]) => string);

type MensagemGenerica = {
  [key in MENSAGEM_SISTEMA]: MensagemValor;
};

const MENSAGEM_GENERICA: MensagemGenerica = {
  [MENSAGEM_SISTEMA.ENTIDADE_NAO_ENCONTRADA]: (entidade: string) => `${entidade} não localizado no sitema.`,
  [MENSAGEM_SISTEMA.ENTIDADE_CADASTRADA]: (entidade: string) => `${entidade} foi cadastrada no sitema com sucesso.`,
  [MENSAGEM_SISTEMA.ENTIDADE_ALTERADA]: (entidade: string) => `${entidade} foi alterada no sitema com sucesso.`,
  [MENSAGEM_SISTEMA.ENTIDADE_EXCLUIDA]: (entidade: string) => `${entidade} foi excluida no sitema com sucesso.`,
  [MENSAGEM_SISTEMA.ENTIDADE_LOCALIZADA]: (entidade: string) => `${entidade} foi localizada no sitema com sucesso.`,
  [MENSAGEM_SISTEMA.EMAIL_CADASTRADO]: (entidade: string) =>
    `O endereço de email para ${entidade} já existe no sistema.`,
};

export function gerarMensagem(chave: MENSAGEM_SISTEMA, ...params: any[]): string {
  const mensagem = MENSAGEM_GENERICA[chave];
  if (typeof mensagem === 'function') {
    return mensagem(params);
  }
  return mensagem;
}
