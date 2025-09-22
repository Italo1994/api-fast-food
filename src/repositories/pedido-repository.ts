import fs from 'fs'
import path from 'path'
import { Pedido } from '../models/pedido-model'

const pathData = path.join(__dirname, './data/pedido.json')

export const repositoryPedido = async (
    idPedido?: number
): Promise<Pedido | Pedido[] | undefined> => {

    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile: Pedido[] = JSON.parse(rawData)

    if(idPedido) {
        const pedidoFiltrado = jsonFile.filter((pedido) => pedido.id === idPedido)
        
         return pedidoFiltrado

    }

    return jsonFile
}