export class ApiService {
    async cadastrarUsuario(dto) {
        const result = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dto),
        });
        const json = await result.json();

        return {
            result: result.status,
            response: json,
        };
    }

    async buscarUsuario(id) {
        const result = await fetch(`http://localhost:3000/usuarios/${id}`);
        const json = await result.json();

        return {
            result: result.status,
            response: json,
        };
    }
}
