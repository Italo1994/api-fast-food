"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagamento = exports.StatusPedido = void 0;
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["PENDENTE"] = "pendente";
    StatusPedido["PREPARANDO"] = "preparando";
    StatusPedido["ENTREGUE"] = "entregue";
    StatusPedido["CANCELADO"] = "cancelado";
})(StatusPedido || (exports.StatusPedido = StatusPedido = {}));
var StatusPagamento;
(function (StatusPagamento) {
    StatusPagamento["PENDENTE"] = "pendente";
    StatusPagamento["PAGO"] = "pago";
    StatusPagamento["RECUSADO"] = "recusado";
})(StatusPagamento || (exports.StatusPagamento = StatusPagamento = {}));
