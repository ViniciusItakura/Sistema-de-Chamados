import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../contexs/auth';

export default function Private({ children }) {
    const { signed, loading } = useContext(AuthContex);

    if (loading) {
        return (
            <div></div>
        );
    }

    if (!signed) {
        return <Navigate to='/' />
    }

    return children
}