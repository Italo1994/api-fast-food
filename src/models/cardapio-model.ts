import { Prato } from "./pratos-model"

export interface Cardapio {
  categorias: {
    nome: string;
    itens: Prato[];
  }[];
}