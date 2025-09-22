import { IncomingMessage, ServerResponse } from "http";
import { serviceListPedido } from "../services/list-pedido-service";
import { serviceFilterPedido } from "../services/filter-pedido-service";
import { calcularTotalPedido } from "../services/calcular-preco-total-pedido-service";

export const getListPedidos = async (
    request: IncomingMessage,
    response: ServerResponse,
) => {

    const content = await serviceListPedido()
    
    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(JSON.stringify(content))
}


export const getPedido = async (
    request: IncomingMessage,
    response: ServerResponse,
) => {

    const content = await serviceFilterPedido(request.url)
        
    response.writeHead(200, { "Content-Type": "application/json"});
    response.end(JSON.stringify(content))
}


export const getValorTotalPedido = async (
    request: IncomingMessage,
    response: ServerResponse
) => {

    const content = await calcularTotalPedido(request.url)

    response.writeHead(200, { "Content-Type": "application/json"});
    response.end(JSON.stringify(content))
}