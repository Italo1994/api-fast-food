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
exports.calcularTotalPedido = void 0;
const cardapio_repository_1 = require("../repositories/cardapio-repository");
const pedido_repository_1 = require("../repositories/pedido-repository");
const calcularTotalPedido = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = (url === null || url === void 0 ? void 0 : url.split("?p=")[1]) || "";
    const idPedido = Number(queryString);
    let pedido = yield (0, pedido_repository_1.repositoryPedido)(idPedido); // retorna todos os pedidos do json
    let cardapio = yield (0, cardapio_repository_1.repositoryCardapio)(); // retorna o cardápio do json
    const pedidos = pedido;
    let pratosFiltrados = [];
    let totalPedido = 0;
    if (!pedido) {
        throw new Error(`Pedido com id ${idPedido} não encontrado`);
    }
    const todosPratos = cardapio.categorias.flatMap(categoria => categoria.itens); // retorna todos os pratos do pedido
    const pratosDoPedido = [];
    pedido.flatMap(pedido => {
        pedido.itens.flatMap(prato => {
            pratosDoPedido.push(prato);
        });
    });
    pedidos.forEach(pedido => {
        pedido.itens.forEach(item => {
            todosPratos.flatMap(prato => {
                if (item.pratoId === prato.pratoId) { // ver se o id do prato no pedido é igual ao do id do prato no cardápio
                    pratosFiltrados.push(prato); // adiciona somente os pratos que estão no pedido
                }
            });
        });
    });
    pratosFiltrados.flatMap(pratoCardapio => {
        pratosDoPedido.flatMap(item => {
            if (pratoCardapio.pratoId === item.pratoId) {
                totalPedido += pratoCardapio.preco * item.quantidade;
            }
        });
    });
    let valorTotal = pedidos.flatMap(item => item.valorTotal = totalPedido); // retorna o valor total do pedido
    return Number(valorTotal);
});
exports.calcularTotalPedido = calcularTotalPedido;
