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
exports.getFilterPrato = exports.getListCardapio = void 0;
const list_cardapio_service_1 = require("../services/list-cardapio-service");
const filter_item_cardapio_service_1 = require("../services/filter-item-cardapio-service");
const getListCardapio = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, list_cardapio_service_1.serviceListCardapio)();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));
});
exports.getListCardapio = getListCardapio;
const getFilterPrato = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, filter_item_cardapio_service_1.serviceFilterItemCardapio)(request.url);
    console.log("prato ", content);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));
});
exports.getFilterPrato = getFilterPrato;
