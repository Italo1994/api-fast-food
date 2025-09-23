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
exports.repositoryUsuario = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathData = path_1.default.join(__dirname, './data/usuario.json');
const repositoryUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const rawData = fs_1.default.readFileSync(pathData, 'utf-8');
    let usuarios = JSON.parse(rawData);
    if (usuario) {
        const novoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
        usuario.id = novoId;
        usuario.dataCriacao = new Date().toISOString();
        usuarios.push(usuario);
        fs_1.default.writeFileSync(pathData, JSON.stringify(usuarios, null, 2), "utf-8");
        return usuario;
    }
    return usuarios;
});
exports.repositoryUsuario = repositoryUsuario;
