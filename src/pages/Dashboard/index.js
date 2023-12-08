import { useContext } from 'react';
import { AuthContex } from '../../contexs/auth';

export default function Dashboard() {
    const { logout } = useContext(AuthContex);

    async function handleLogout() {
        await logout();
    }

    return (
        <div>
            <h1>Pagina Dashboard</h1>
            <button onClick={handleLogout}>Sair da conta</button>
        </div>
    );
}