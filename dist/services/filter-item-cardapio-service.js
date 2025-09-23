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
exports.serviceFilterItemCardapio = void 0;
const cardapio_repository_1 = require("../repositories/cardapio-repository");
const serviceFilterItemCardapio = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = (url === null || url === void 0 ? void 0 : url.split("?p=")[1]) || "";
    const pratoFormatado = queryString.split("%20");
    let nomePrato = pratoFormatado.toString();
    nomePrato = nomePrato.split(",").join(" ");
    nomePrato = decodeURIComponent(nomePrato);
    const data = yield (0, cardapio_repository_1.repositoryCardapio)(nomePrato);
    return data;
});
exports.serviceFilterItemCardapio = serviceFilterItemCardapio;
