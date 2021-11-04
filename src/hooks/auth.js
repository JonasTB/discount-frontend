import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (token && user) {
            return { token, user: JSON.parse(user) }
        }

        return {}
    });

    const login = useCallback(async ({ email, password }) => {
        const response = await api.post('login', {
            email,
            password,
        });

        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user.data));
        setData({ token, user });
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setData(({}));
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error('useAuth has to be used with or in an AuthProvider');
        

    return context;
}

export { useAuth, AuthProvider}