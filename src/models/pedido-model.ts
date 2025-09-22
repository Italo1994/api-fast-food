import { StatusPagamento, StatusPedido } from "../utils/status-enum";
import { Prato } from "./pratos-model";

export interface Pedido {
        id: number;
        userId: number;
        itens: Array<Prato>;
        valorTotal: number;
        statusPedido: StatusPedido;
        statusPagamento: StatusPagamento;
        dataPedido: Date;
        quantidade: number;
}