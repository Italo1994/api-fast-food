import fs from 'fs'
import path from 'path'
import { Usuario } from '../models/usuario-model'

const pathData = path.join(__dirname, './data/usuario.json')

export const repositoryUsuario = async (
    usuario?: Usuario
): Promise<Usuario | Usuario[] | undefined> => {

    const rawData = fs.readFileSync(pathData, 'utf-8')
    let usuarios: Usuario[] = JSON.parse(rawData)

    if(usuario) {
        const novoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1
        usuario.id = novoId
        usuario.dataCriacao = new Date().toISOString()

        usuarios.push(usuario)

        fs.writeFileSync(pathData, JSON.stringify(usuarios, null, 2), "utf-8")

        return usuario
    }

    return usuarios
}