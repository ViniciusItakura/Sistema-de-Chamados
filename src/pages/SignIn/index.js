import './signin.css';
import logo from '../../assets/logo.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../contexs/auth';

export default function SingIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, loadingAuth } = useContext(AuthContex);

    async function handleSignIn(e) {
        e.preventDefault();
        if (email !== '' & password !== '') {
            await signIn(email, password);
        }
    }

    return (
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Logo do sistema de chamados' />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input type='text' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Digite sua senha...' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit'>{loadingAuth ? "Carregando..." : "Acessar"}</button>
                </form>
                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    );
}