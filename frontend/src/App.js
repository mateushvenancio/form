import { useEffect, useState } from 'react';
import { Button, Checkbox, PainelLogado, TextInput } from './components';
import { ApiService } from './services/api-service';

function App() {
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [user, setUser] = useState();

    useEffect(() => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            setUser(JSON.parse(usuario));
        }
    }, []);

    const handleFazerCadastro = async (event) => {
        event.preventDefault();

        const apiService = new ApiService();
        const dto = {
            nome,
            email,
            senha,
        };
        const result = await apiService.cadastrarUsuario(dto);

        if (result.result === 200) {
            localStorage.setItem('usuario', JSON.stringify(result.response));
            setUser(result.response);
        } else {
            alert(result.response.error);
        }
    };

    return (
        <>
            <div className="md:max-w-[500px] m-4 bg-zinc-100 rounded shadow p-4 md:my-4 md:m-auto">
                <form className="w-full flex flex-col gap-2 items-center">
                    <h2 className="text-xl font-semibold">Crie sua conta</h2>
                    <TextInput
                        id={'nome'}
                        label={'Nome'}
                        placeholder={'Mateus'}
                        value={nome}
                        onChange={setNome}
                        required
                    />
                    <TextInput
                        id={'apelido'}
                        label={'Apelido'}
                        placeholder={'Apelido'}
                        value={apelido}
                        onChange={setApelido}
                    />
                    <TextInput
                        id={'email'}
                        label={'E-mail'}
                        placeholder={'mateus@mail.com'}
                        value={email}
                        onChange={setEmail}
                        required
                    />
                    <div className="w-full">
                        <TextInput
                            id={'senha'}
                            label={'Senha'}
                            obscure={!mostrarSenha}
                            value={senha}
                            onChange={setSenha}
                            required
                        />
                        <Checkbox
                            checked={mostrarSenha}
                            onChange={setMostrarSenha}
                            label={'Mostrar senha?'}
                        />
                    </div>
                    <Button
                        label={'Fazer cadastro'}
                        onClick={handleFazerCadastro}
                    />
                </form>
            </div>
            <PainelLogado user={user} />
        </>
    );
}

export default App;
