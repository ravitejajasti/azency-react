import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Content from './components/Content';
import Projects from './components/Projects';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import ProjectDetail from './components/ProjectDetail';
import useIdleTimer from './hooks/useIdleTimer'; // Import the custom hook
import Chat from './components/Chat'
const PrivateRoute = ({ children }) => {
  const { authTokens } = useContext(AuthContext);
  return authTokens ? children : <Navigate to="/login" />;
};

function App() {
  const { logoutUser } = useContext(AuthContext);

  // Use the custom hook to auto logout after 5 minutes (300000 milliseconds) of inactivity
  useIdleTimer(logoutUser, 3000000);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<PrivateRoute><Content /></PrivateRoute>} />
        <Route path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
        <Route path="/projects/:projectId" element={<PrivateRoute><ProjectDetail /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
