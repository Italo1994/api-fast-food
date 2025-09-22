import { IncomingMessage, ServerResponse } from "http";
import { Usuario } from "../models/usuario-model";
import { serviceListarUsuarios } from "../services/list-usuario-service";
import { serviceCadastrarUsuario } from "../services/cadastrar-usuario-service";

export const getUsuarios = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    
    const content = await serviceListarUsuarios()

    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(JSON.stringify(content))
}

export const getUsuarioById = async (
    request: IncomingMessage,
    response: ServerResponse
) => {

    const content = await serviceListarUsuarios()

    response.writeHead(200, {"Content-Type": "application/json"})
    response.end(JSON.stringify(content))
}