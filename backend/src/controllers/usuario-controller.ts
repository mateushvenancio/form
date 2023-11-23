import { ValidationException, NotFoundException } from '../core/exceptions';

export class UsuarioController {
    usuarios: Usuario[] = [];

    async buscarUsuarios(): Promise<Usuario[]> {
        return this.usuarios;
    }

    async buscarUsuarioById(id: string) {
        const usuario = this.usuarios.find((user) => user.id == id);
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }
        return usuario;
    }

    async cadastrarUsuario(dto: CriarUsuarioDto): Promise<Usuario> {
        let validations: string[] = [];

        if (!dto.nome || dto.nome.length < 5) {
            validations.push('Digite seu nome completo');
        }

        if (!dto.email || !dto.email.includes('@')) {
            validations.push('Digite um email válido');
        }

        if (!dto.senha || dto.senha.length < 6) {
            validations.push('Senha deve ter no mínimo 6 caracteres');
        }

        if (validations.length > 0) {
            throw new ValidationException(validations);
        }

        const user: Usuario = {
            id: Date.now().toString(),
            ...dto,
        };

        this.usuarios.push(user);

        return user;
    }
}
