import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser, authTokens } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (authTokens) {
            navigate('/');  // Redirect to the desired page if already logged in
        }
    }, [authTokens, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser(username, password);
        navigate('/');  // Redirect after successful login
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
