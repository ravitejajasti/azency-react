import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Ensure correct import
import { createRoot } from 'react-dom/client'; // Import createRoot


const container = document.getElementById('contentContainer');
const root = createRoot(container); // Create a root.

root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);