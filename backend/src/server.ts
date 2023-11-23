import express from 'express';
import cors from 'cors';
import { UsuarioController } from './controllers/usuario-controller';
import { NotFoundException, ValidationException } from './core/exceptions';
const app = express();
app.use(express.json());
app.use(cors());

const usuarioController = new UsuarioController();

app.get('/', (req, res) => {
    return res.json({ hello: 'world' });
});

app.post('/usuarios', async (req, res) => {
    const body: CriarUsuarioDto = req.body;
    try {
        const user = await usuarioController.cadastrarUsuario(body);
        return res.json(user);
    } catch (error) {
        if (error instanceof ValidationException) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: `${error}` });
    }
});

app.get('/usuarios', async (req, res) => {
    const usuarios = await usuarioController.buscarUsuarios();
    return res.json(usuarios);
});

app.get('/usuarios/:id', async (req, res) => {
    try {
        const id: string = req.params.id;
        const usuarios = await usuarioController.buscarUsuarioById(id);
        return res.json(usuarios);
    } catch (error) {
        if (error instanceof NotFoundException) {
            return res.status(404).json({ error: error.message });
        }
        return res.status(500).json({ error: `${error}` });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Ouvindo na porta', port);
});
