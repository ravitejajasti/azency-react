import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);

    const loginUser = async (username, password) => {
        const response = await axios.post('http://localhost:8000/api/login/', { username, password });
        if (response.data) {
            setAuthTokens(response.data);
            setUser(response.data.user);
            localStorage.setItem('authTokens', JSON.stringify(response.data));
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
    };

    const registerUser = async (username, email, password) => {
        const response = await axios.post('http://localhost:8000/api/register/', { username, email, password });
        return response.data;
    };

    const contextData = {
        user,
        authTokens,
        loginUser,
        logoutUser,
        registerUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };