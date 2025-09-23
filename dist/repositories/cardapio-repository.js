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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryCardapio = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathData = path_1.default.join(__dirname, "./data/cardapio.json");
const repositoryCardapio = (nomePrato) => __awaiter(void 0, void 0, void 0, function* () {
    const rawData = fs_1.default.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);
    if (nomePrato) {
        const pratosFiltrados = jsonFile.categorias
            .flatMap((categoria) => categoria.itens)
            .filter((prato) => prato.nome.toLowerCase() === nomePrato.toLowerCase());
        return pratosFiltrados;
    }
    return jsonFile;
});
exports.repositoryCardapio = repositoryCardapio;
