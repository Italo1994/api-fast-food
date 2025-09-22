import { repositoryCardapio } from "../repositories/cardapio-repository";

export const serviceFilterItemCardapio = async (
    url: string | undefined
) => {

    const queryString = url?.split("?p=")[1] || ""

    const pratoFormatado = queryString.split("%20")
    
    let nomePrato = pratoFormatado.toString()
    nomePrato = nomePrato.split(",").join(" ")
    nomePrato = decodeURIComponent(nomePrato)
    
    const data = await repositoryCardapio(nomePrato)

    return data
}