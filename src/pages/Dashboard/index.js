import { useContext } from 'react';
import { AuthContex } from '../../contexs/auth';
import Header from '../../components/Header';

export default function Dashboard() {
    const { logout } = useContext(AuthContex);

    async function handleLogout() {
        await logout();
    }

    return (
        <div>
            <Header />
            <h1>Pagina Dashboard</h1>
            <button onClick={handleLogout}>Sair da conta</button>
        </div>
    );
}