export default function PainelLogado({ user }) {
    return (
        user && (
            <div className="md:max-w-[500px] m-4 bg-zinc-100 rounded shadow p-4 md:my-4 md:m-auto">
                <p className="font-semibold text-lg">Usuário logado</p>
                <p>Nome: {user?.nome}</p>
                <p>E-mail: {user?.email}</p>
            </div>
        )
    );
}
