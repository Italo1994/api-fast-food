
import { repositoryPedido } from "../repositories/pedido-repository";

export const serviceFilterPedido = async (
    url: string | undefined
) => {

    const queryString = url?.split("?p=")[1] || ""
    let idPedido = Number(queryString)

    const data = await repositoryPedido(idPedido)

    return data
}