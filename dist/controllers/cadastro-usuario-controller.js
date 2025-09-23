"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarUsuarioController = void 0;
const cadastrar_usuario_service_1 = require("../services/cadastrar-usuario-service");
const cadastrarUsuarioController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = "";
        // ler o body da requisição
        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const usuario = JSON.parse(body); // agora temos o objeto enviado pelo cliente
                // passa para o service
                const content = yield (0, cadastrar_usuario_service_1.serviceCadastrarUsuario)(usuario);
                response.writeHead(201, { "Content-Type": "application/json" });
                response.end(JSON.stringify(content));
            }
            catch (err) {
                response.writeHead(400, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ error: "JSON inválido" }));
            }
        }));
    }
    catch (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ error: "Erro no servidor" }));
    }
});
exports.cadastrarUsuarioController = cadastrarUsuarioController;
