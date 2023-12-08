import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SingUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Logo do sistema de chamados' />
                </div>

                <form>
                    <h1>Cadastrar nova conta</h1>
                    <input type='text' placeholder='Digite seu nome...' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type='text' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Digite sua senha...' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit'>Cadastrar</button>
                </form>
                <Link to="/">Já possuí uma conta? Faça o login!</Link>
            </div>
        </div>
    );
}