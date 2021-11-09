import React, { createContext } from 'react';

import useAuth from './useAuth';

const Context = createContext({});

const AuthProvider = ({ children }) => {
    const { authenticated, loading, login, logout } = useAuth();

    return (
        <Context.Provider value={{ authenticated, loading, login, logout }}>
            {children}
        </Context.Provider>
    )
}

export { AuthProvider, Context }