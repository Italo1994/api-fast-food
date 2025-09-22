import { repositoryPedido } from "../repositories/pedido-repository";

export const serviceListPedido = async (
    url?: string | undefined
) => {
    const data = repositoryPedido()

    return data
}