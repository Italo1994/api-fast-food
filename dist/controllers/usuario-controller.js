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
exports.getUsuarioById = exports.getUsuarios = void 0;
const list_usuario_service_1 = require("../services/list-usuario-service");
const getUsuarios = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, list_usuario_service_1.serviceListarUsuarios)();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));
});
exports.getUsuarios = getUsuarios;
const getUsuarioById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, list_usuario_service_1.serviceListarUsuarios)();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));
});
exports.getUsuarioById = getUsuarioById;
