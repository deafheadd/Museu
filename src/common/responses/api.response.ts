export interface ApiResponse<T> {
  status: number;
  timestamp: string;
  mensagem?: string | null;
  error?: string;
  path?: string;
  metodo?: string;
  dados?: T | T[] | null;
}
