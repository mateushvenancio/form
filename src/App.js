import { useState } from 'react';
import { Button, Checkbox, TextInput } from './components';

function App() {
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [cadastrado, setCadastrado] = useState(false);

    const handleFazerCadastro = (event) => {
        event.preventDefault();

        const erros = [];

        if (!nome.trim()) {
            erros.push('Digite um nome válido');
        }

        if (!email.trim() || !email.includes('@')) {
            erros.push('Digite um email válido');
        }

        if (senha.length < 6) {
            erros.push('Senha deve ter no mínimo 6 caracteres');
        }

        if (erros.length > 0) {
            return alert(erros.map((e) => '- ' + e).join('\n'));
        }

        setCadastrado(true);
    };

    return (
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

            {cadastrado && (
                <div className="text-green-600 font-semibold">
                    Cadastro efetuado com sucesso!
                </div>
            )}
        </div>
    );
}

export default App;
