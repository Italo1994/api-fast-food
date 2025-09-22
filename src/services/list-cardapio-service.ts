import { repositoryCardapio } from "../repositories/cardapio-repository";

export const serviceListCardapio = async (url?: string | undefined) => {
    const data = repositoryCardapio()

    return data
}