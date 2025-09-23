"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const http = __importStar(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cardapio_controller_1 = require("./controllers/cardapio-controller");
const pedido_controller_1 = require("./controllers/pedido-controller");
const routes_1 = require("./routes/routes");
const cadastro_usuario_controller_1 = require("./controllers/cadastro-usuario-controller");
const usuario_controller_1 = require("./controllers/usuario-controller");
const port = 3333;
const server = http.createServer((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    if (request.url === "/api-docs") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`
            <!DOCTYPE html>
            <html>
                <head>
                <title>API Docs</title>
                <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css" />
                </head>
                <body>
                <div id="swagger-ui"></div>
                <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
                <script>
                    window.onload = () => {
                    SwaggerUIBundle({
                        url: '/api-docs/swagger.json',
                        dom_id: '#swagger-ui'
                    })
                    }
                </script>
                </body>
            </html>
            `);
        return;
    }
    if (request.url === "/api-docs/swagger.json") {
        const swaggerPath = path_1.default.join(__dirname, "swagger.json");
        const swaggerFile = fs_1.default.readFileSync(swaggerPath, "utf-8");
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(swaggerFile);
        return;
    }
    if (request.method === "GET" && request.url === routes_1.ApiRoutes.LIST_CARDAPIO) {
        return yield (0, cardapio_controller_1.getListCardapio)(request, response);
    }
    if (request.method === "GET" && ((_a = request.url) === null || _a === void 0 ? void 0 : _a.startsWith(routes_1.ApiRoutes.LIST_PRATO))) {
        return yield (0, cardapio_controller_1.getFilterPrato)(request, response);
    }
    if (request.method === "GET" && request.url === routes_1.ApiRoutes.LIST_PEDIDOS) {
        return yield (0, pedido_controller_1.getListPedidos)(request, response);
    }
    if (request.method === "GET" && ((_b = request.url) === null || _b === void 0 ? void 0 : _b.startsWith(routes_1.ApiRoutes.LIST_PEDIDOS_VALOR_TOTAL))) {
        return yield (0, pedido_controller_1.getValorTotalPedido)(request, response);
    }
    if (request.method === "GET" && ((_c = request.url) === null || _c === void 0 ? void 0 : _c.startsWith(routes_1.ApiRoutes.LIST_PEDIDO_BY_ID)) && request.url !== routes_1.ApiRoutes.LIST_PEDIDOS) {
        return yield (0, pedido_controller_1.getPedido)(request, response);
    }
    if (request.method === "GET" && ((_d = request.url) === null || _d === void 0 ? void 0 : _d.startsWith("/api/v1/list/usuarios"))) {
        return yield (0, usuario_controller_1.getUsuarios)(request, response);
    }
    if (request.method === "POST" && request.url === "/api/v1/usuarios") {
        return yield (0, cadastro_usuario_controller_1.cadastrarUsuarioController)(request, response);
    }
}));
server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
});
