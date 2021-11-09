import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../services/api';

const useAuth = () => {
    const [authenticated, setAutheticated] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAutheticated(true);
        }

        setLoading(false);
    }, []);

    const login = async ({ email, password }) => {
        await api.post('/auth/login', {
            email,
            password
        }).then((response) => {
            const { token } = response.data;
            localStorage.setItem('token', JSON.stringify(token));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAutheticated(true);
            toast('Bem-vindo!')
        }).catch(err => {
            toast('Por favor, verique suas credenciais');
            console.log(err);
        });
    }

    const logout = () => {
        setAutheticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        toast('Até logo!');
    }

    return { authenticated, loading, login, logout }
}

export default useAuth;