export interface Prato {
    pratoId: number;
    nome: string;
    preco: number;
    quantidade: number;
    ingredientes: string[];
    categoria: string;
    disponivel: boolean;
    descricao: string;
}