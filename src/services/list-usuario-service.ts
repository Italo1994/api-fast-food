import { repositoryUsuario } from "../repositories/usuario-repository";

export const serviceListarUsuarios = async (

) => {
    const data = repositoryUsuario()

    return data
}