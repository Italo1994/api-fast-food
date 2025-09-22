import * as http from 'http'
import fs from 'fs'
import path from 'path'

import { getFilterPrato, getListCardapio } from './controllers/cardapio-controller'
import { getListPedidos, getPedido, getValorTotalPedido } from './controllers/pedido-controller'
import { ApiRoutes } from './routes/routes'
import { cadastrarUsuarioController } from './controllers/cadastro-usuario-controller'
import { getUsuarios } from './controllers/usuario-controller'

const port = 3333

const server = http.createServer( async (
    request: http.IncomingMessage, 
    response: http.ServerResponse) => {

        if (request.url === "/api-docs") {
            response.writeHead(200, { "Content-Type": "text/html" })
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
            `)
            return
        }


        if (request.url === "/api-docs/swagger.json") {
            const swaggerPath = path.join(__dirname, "swagger.json")
            const swaggerFile = fs.readFileSync(swaggerPath, "utf-8")

            response.writeHead(200, { "Content-Type": "application/json" })
            response.end(swaggerFile)
            return
        }


        if(request.method === "GET" && request.url === ApiRoutes.LIST_CARDAPIO) {
           return await getListCardapio(request, response)
        }

        if(request.method === "GET" && request.url?.startsWith(ApiRoutes.LIST_PRATO)) {
           return await getFilterPrato(request, response)
        }

        if(request.method === "GET" && request.url === ApiRoutes.LIST_PEDIDOS) {
           return await getListPedidos(request, response)
        }

        if(request.method === "GET" && request.url?.startsWith(ApiRoutes.LIST_PEDIDOS_VALOR_TOTAL) ) {
            return await getValorTotalPedido(request, response)
        }

        if (request.method === "GET" && request.url?.startsWith(ApiRoutes.LIST_PEDIDO_BY_ID) && request.url !== ApiRoutes.LIST_PEDIDOS) {
            return await getPedido(request, response)
        }

        if (request.method === "GET" && request.url?.startsWith("/api/v1/list/usuarios")) {
            return await getUsuarios(request, response)
        }

         if (request.method === "POST" && request.url === "/api/v1/usuarios") {
            return await cadastrarUsuarioController(request, response)
        }

        
    })

server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`)
})