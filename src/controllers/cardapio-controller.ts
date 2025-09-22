import { IncomingMessage, request, ServerResponse } from "http";
import { serviceListCardapio } from "../services/list-cardapio-service";
import { serviceFilterItemCardapio } from "../services/filter-item-cardapio-service";

export const getListCardapio = async (
    request: IncomingMessage,
    response: ServerResponse
) => {

    const content = await serviceListCardapio()

    response.writeHead(200, { "Content-Type": "application/json"});
    response.end(JSON.stringify(content))
}

export const getFilterPrato = async (
    request: IncomingMessage,
    response: ServerResponse
) => {

    const content = await serviceFilterItemCardapio(request.url)

    console.log("prato ",content)

    response.writeHead(200, { "Content-Type": "application/json"});
    response.end(JSON.stringify(content))
}