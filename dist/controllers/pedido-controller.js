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
exports.getValorTotalPedido = exports.getPedido = exports.getListPedidos = void 0;
const list_pedido_service_1 = require("../services/list-pedido-service");
const filter_pedido_service_1 = require("../services/filter-pedido-service");
const calcular_preco_total_pedido_service_1 = require("../services/calcular-preco-total-pedido-service");
const getListPedidos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, list_pedido_service_1.serviceListPedido)();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));
});
exports.getListPedidos = getListPedidos;
const getPedido = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, filter_pedido_service_1.serviceFilterPedido)(request.url);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));
});
exports.getPedido = getPedido;
const getValorTotalPedido = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, calcular_preco_total_pedido_service_1.calcularTotalPedido)(request.url);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));
});
exports.getValorTotalPedido = getValorTotalPedido;
