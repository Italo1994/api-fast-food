import fs from 'fs'
import path from 'path'
import { Prato } from '../models/pratos-model'
import { Cardapio } from '../models/cardapio-model'

const pathData = path.join(__dirname, "./data/cardapio.json")

export const repositoryCardapio = async (
        nomePrato?: string | undefined
):  Promise<Cardapio | Prato[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile: Cardapio = JSON.parse(rawData)

    if(nomePrato) {
        const pratosFiltrados = jsonFile.categorias
        .flatMap((categoria) => categoria.itens)
        .filter(( prato: Prato) => prato.nome.toLowerCase() === nomePrato.toLowerCase())

        return pratosFiltrados
    }

    return jsonFile
}