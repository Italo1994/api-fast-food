import { IncomingMessage, ServerResponse } from "http"
import { Cardapio } from "../models/cardapio-model"
import { Pedido } from "../models/pedido-model"
import { Prato } from "../models/pratos-model"
import { repositoryCardapio } from "../repositories/cardapio-repository"
import { repositoryPedido } from "../repositories/pedido-repository"

export const calcularTotalPedido = async (
        url?: string | undefined
)  => {

    const queryString = url?.split("?p=")[1] || ""
    const idPedido = Number(queryString)

    let pedido = await repositoryPedido(idPedido) as Pedido[] // retorna todos os pedidos do json
    let cardapio = await repositoryCardapio() as Cardapio // retorna o cardápio do json
    const pedidos = pedido

    let pratosFiltrados: Prato[] = []
    let totalPedido = 0

    if (!pedido) {
        throw new Error(`Pedido com id ${idPedido} não encontrado`)
    }

    const todosPratos = cardapio.categorias.flatMap(categoria => categoria.itens); // retorna todos os pratos do pedido
    
    const pratosDoPedido: Prato[] = []
    pedido.flatMap(pedido => {
        pedido.itens.flatMap(prato => {
            pratosDoPedido.push(prato)
        })
    })
 
    pedidos.forEach(pedido => { // acessar cada objeto do array de pedidos
        pedido.itens.forEach(item => { // acessar cada objeto do array de itens do pedido
            todosPratos.flatMap(prato => { // acessar os pratos do cardápio
                if(item.pratoId === prato.pratoId) { // ver se o id do prato no pedido é igual ao do id do prato no cardápio
                    pratosFiltrados.push(prato) // adiciona somente os pratos que estão no pedido
                }
            })

        })
    })

    pratosFiltrados.flatMap(pratoCardapio => {
        pratosDoPedido.flatMap(item => {
            if(pratoCardapio.pratoId === item.pratoId) {
                totalPedido += pratoCardapio.preco * item.quantidade
            }
        })
    })

    let valorTotal = pedidos.flatMap(item => item.valorTotal = totalPedido) // retorna o valor total do pedido

    return Number(valorTotal)
}