import { Usuario } from "../models/usuario-model";
import { repositoryUsuario } from "../repositories/usuario-repository";

export const serviceCadastrarUsuario = async (
    usuario: Usuario | undefined
) => {

    const data = repositoryUsuario(usuario)

    return data
}