export class ListaRateioPremio {
  descricaoFaixa!: string;
  faixa!: number;
  numeroDeGanhadores!: number;
  valorPremio!: number;
}

export interface Premiaco {
  acertos: string;
  vencedores: number;
  premio: string;
}

export interface Cidade {
  cidade: string;
  vencedores: string;
  latitude: string;
  longitude: string;
}

export interface EstadosPremiado {
  nome: string;
  uf: string;
  vencedores: string;
  latitude: string;
  longitude: string;
  cidades: Cidade[];
}

export interface ListaLoto {
  loteria: string;
  nome: string;
  concurso: number;
  data: string;
  local: string;
  dezenas: string[];
  premiacoes: Premiaco[];
  estadosPremiados: EstadosPremiado[];
  acumulou: boolean;
  acumuladaProxConcurso: string;
  dataProxConcurso: string;
  proxConcurso: number;
  timeCoracao?: any;
  mesSorte?: any;
}

export class ListaNumeros {
  numeros!: number[];
}

export class ListaNumerosString{
  numeros!: string;
}
