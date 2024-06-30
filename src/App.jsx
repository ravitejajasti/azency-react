import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Content from './components/Content';
import Projects from './components/Projects';
import Login from './components/Login';
import Register from './components/Register';
import ProjectDetail from './components/ProjectDetail';
import useIdleTimer from './hooks/useIdleTimer'; // Import the custom hook
import Chat from './components/Chat'
import Calendar from './components/Calendar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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
      <Header />
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role='main' className='main'>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute><Content /></PrivateRoute>} />
        <Route path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
        <Route path="/projects/:projectId" element={<PrivateRoute><ProjectDetail /></PrivateRoute>} />
        <Route path="/projects/:projectId/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      <Footer />

    </Router>
  );
}

export default App;
