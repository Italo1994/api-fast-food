import { IncomingMessage, ServerResponse } from "http";
import { serviceCadastrarUsuario } from "../services/cadastrar-usuario-service";
import { Usuario } from "../models/usuario-model";

export const cadastrarUsuarioController = async (
    request: IncomingMessage,
    response: ServerResponse,
) => {

    try {
        let body = "";

        // ler o body da requisição
        request.on("data", (chunk) => {
            body += chunk;
        });

    request.on("end", async () => {
      try {
        const usuario: Usuario = JSON.parse(body); // agora temos o objeto enviado pelo cliente

        // passa para o service
        const content = await serviceCadastrarUsuario(usuario);

        response.writeHead(201, { "Content-Type": "application/json" });
        response.end(JSON.stringify(content));
      } catch (err) {
        response.writeHead(400, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ error: "JSON inválido" }));
      }
    });
  } catch (err) {
    response.writeHead(500, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Erro no servidor" }));
  }
}